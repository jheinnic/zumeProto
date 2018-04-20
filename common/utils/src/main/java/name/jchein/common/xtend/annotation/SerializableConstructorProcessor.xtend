package name.jchein.common.xtend.annotation

import java.util.List
import org.eclipse.xtend.lib.macro.TransformationContext
import org.eclipse.xtend.lib.macro.TransformationParticipant
import org.eclipse.xtend.lib.macro.declaration.MutableClassDeclaration
import org.eclipse.xtend.lib.macro.declaration.MutableConstructorDeclaration
import org.eclipse.xtend.lib.macro.declaration.MutableTypeDeclaration
import org.eclipse.xtend.lib.macro.declaration.MutableTypeParameterDeclarator
import org.eclipse.xtend.lib.macro.declaration.TypeReference

class SerializableConstructorProcessor implements TransformationParticipant<MutableTypeParameterDeclarator> {

	override doTransform(List<? extends MutableTypeParameterDeclarator> elements,
		extension TransformationContext context) {
		elements.forEach[transform(context)]
	}

	def dispatch void transform(MutableClassDeclaration it, extension TransformationContext context) {
		val extension util = new SerializableConstructorProcessor.Util(context)
		addFinalFieldsConstructor
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
			cls?.declaredFields.filter[(!static) && final && (initializer === null) && thePrimaryGeneratedJavaElement] ?: #[]
		}

		def hasNoArgsConstructor(MutableTypeDeclaration cls) {
			cls.declaredConstructors.exists [parameters.size == 0]
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
			if (ref === null) object else ref
		}
	}
}
