package name.jchein.portfolio.common.es.eventuate.statefulflow

import java.util.List
import org.eclipse.xtend.lib.macro.AbstractClassProcessor
import org.eclipse.xtend.lib.macro.RegisterGlobalsContext
import org.eclipse.xtend.lib.macro.RegisterGlobalsParticipant
import org.eclipse.xtend.lib.macro.TransformationContext
import org.eclipse.xtend.lib.macro.TransformationParticipant
import org.eclipse.xtend.lib.macro.declaration.ClassDeclaration
import org.eclipse.xtend.lib.macro.declaration.MutableClassDeclaration
import org.eclipse.xtend.lib.macro.declaration.MutableConstructorDeclaration
import org.eclipse.xtend.lib.macro.declaration.MutableMethodDeclaration
import org.eclipse.xtend.lib.macro.declaration.MutableTypeDeclaration
import org.eclipse.xtend.lib.macro.declaration.Type
import org.eclipse.xtend.lib.macro.declaration.TypeReference

class StatefulFlowProcessor
extends AbstractClassProcessor
implements RegisterGlobalsParticipant<ClassDeclaration>, TransformationParticipant<MutableClassDeclaration> {

	override doRegisterGlobals(ClassDeclaration annotatedClass, @Extension RegisterGlobalsContext context) {
		context.registerClass(annotatedClass.managingSubscriberClass)
	}

	def getManagingSubscriberClass(ClassDeclaration annotatedClass) {
		annotatedClass.qualifiedName + "ManagingSubscriber"
	}

	override doTransform(List<? extends MutableClassDeclaration> elements,
		@Extension TransformationContext context) {
		for (MutableClassDeclaration nextStatefulFlow : elements) {
//			val MutableClassDeclaration managingSubscriber =
//				findTypeGlobally(nextElem.managingSubscriberClass).qualifiedName.findClass;
			val Type managingSubscriber = findTypeGlobally(nextStatefulFlow.managingSubscriberClass)
			managingSubscriber.loadManagingSubscriberMethods(nextStatefulFlow, context)
		}
	}
	
	def Iterable<MutableMethodDeclaration> findHandlerMethodDelegates(MutableClassDeclaration statefulFlow, extension TransformationContext context) {
		val beginFlowAnnotation = findAnnotationType("name.jchein.portfolio.common.es.eventuate.statefulflow.BeginFlow");
		val continueFlowAnnotation = findAnnotationType("name.jchein.portfolio.common.es.eventuate.statefulflow.ContinueFlow");
		val endFlowAnnotation = findAnnotationType("name.jchein.portfolio.common.es.eventuate.statefulflow.EndFlow");

		statefulFlow.declaredMethods.map[ nextMethod |
			#[
				nextMethod.findAnnotation(beginFlowAnnotation) ?:
				nextMethod.findAnnotation(continueFlowAnnotation) ?:
				nextMethod.findAnnotation(endFlowAnnotation),
				nextMethod
			]
		].filter[ nextPair | nextPair.get(0) !== null ]
		.map[ nextPair | nextPair.get(1) as MutableMethodDeclaration ]
	}

	def void loadManagingSubscriberMethods(Type managingSubscriber, MutableClassDeclaration statefulFlow, extension TransformationContext context) {
		val mutableSubscriber = managingSubscriber.qualifiedName.findClass()
		statefulFlow.findHandlerMethodDelegates(context).forEach[nextMethod |
			mutableSubscriber.addMethod(
				nextMethod.simpleName, [mutableDeclaration | 
					mutableDeclaration.addParameter(
						"event",
						nextMethod.parameters.findFirst[it|true].type
					)
				]
			)
		]
	}

	def dispatch void transform(MutableClassDeclaration it, extension TransformationContext context) {
	}

	def dispatch void transform(MutableConstructorDeclaration it, extension TransformationContext context) {
		addError("This only applies to classes")
	}

	/**
	 */
	static class Util {
		extension TransformationContext context

		new(TransformationContext context) {
			this.context = context
		}

		def getFinalFields(MutableTypeDeclaration cls) {
			cls?.declaredFields.
				filter[(!static) && final && (initializer === null) && thePrimaryGeneratedJavaElement] ?: #[]
		}

		def hasNoArgsConstructor(MutableTypeDeclaration cls) {
			cls.declaredConstructors.exists[parameters.size == 0]
		}

		def String getConstructorAlreadyExistsMessage(MutableTypeDeclaration it) {
			'''Cannot create SerializableConstructor as a constructor with the signature "new(�finalFieldsConstructorArgumentTypes.join(",")�)" already exists.'''
		}

		def addFinalFieldsConstructor(MutableClassDeclaration it) {
			if (hasNoArgsConstructor) {
				if (!declaringType.finalFields.empty) {
					addError(constructorAlreadyExistsMessage)
				}
			} else {
				addConstructor [
					primarySourceElement = declaringType.primarySourceElement
					makeFinalFieldsConstructor
				]
			}
		}

		def makeFinalFieldsConstructor(MutableConstructorDeclaration it) {
			val fieldToValue = newHashMap
			declaringType.finalFields.forEach [ p |
				p.markAsInitializedBy(it)
				val paramVal = p.type.orObject.defaultCharSeq
				fieldToValue.put(p, paramVal)
			]

			body = '''
				super();
				«FOR arg : declaringType.finalFields»
					this.«arg.simpleName» = «fieldToValue.get(arg)»;
				«ENDFOR»
			'''
		}

		private def CharSequence getDefaultCharSeq(TypeReference paramType) {
			switch paramType {
				case paramType == primitiveInt,
				case paramType == primitiveLong,
				case paramType == primitiveShort,
				case paramType == primitiveFloat,
				case paramType == primitiveDouble: "0"
				case paramType == primitiveByte: "(byte) 0"
				case paramType == primitiveChar: "' '"
				case paramType == primitiveBoolean: "false"
				default: "null"
			}
		}

		private def orObject(TypeReference ref) {
			if(ref === null) object else ref
		}
	}
}
