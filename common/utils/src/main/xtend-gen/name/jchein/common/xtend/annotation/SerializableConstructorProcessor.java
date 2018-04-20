package name.jchein.common.xtend.annotation;

import com.google.common.base.Objects;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.function.Consumer;
import org.eclipse.xtend.lib.macro.TransformationContext;
import org.eclipse.xtend.lib.macro.TransformationParticipant;
import org.eclipse.xtend.lib.macro.declaration.MutableClassDeclaration;
import org.eclipse.xtend.lib.macro.declaration.MutableConstructorDeclaration;
import org.eclipse.xtend.lib.macro.declaration.MutableFieldDeclaration;
import org.eclipse.xtend.lib.macro.declaration.MutableTypeDeclaration;
import org.eclipse.xtend.lib.macro.declaration.MutableTypeParameterDeclarator;
import org.eclipse.xtend.lib.macro.declaration.TypeReference;
import org.eclipse.xtend2.lib.StringConcatenation;
import org.eclipse.xtend2.lib.StringConcatenationClient;
import org.eclipse.xtext.xbase.lib.CollectionLiterals;
import org.eclipse.xtext.xbase.lib.Extension;
import org.eclipse.xtext.xbase.lib.Functions.Function1;
import org.eclipse.xtext.xbase.lib.IterableExtensions;
import org.eclipse.xtext.xbase.lib.Procedures.Procedure1;

@SuppressWarnings("all")
public class SerializableConstructorProcessor implements TransformationParticipant<MutableTypeParameterDeclarator> {
  public static class Util {
    @Extension
    private TransformationContext context;
    
    public Util(final TransformationContext context) {
      this.context = context;
    }
    
    public Iterable<? extends MutableFieldDeclaration> getFinalFields(final MutableTypeDeclaration cls) {
      Iterable<? extends MutableFieldDeclaration> _elvis = null;
      Iterable<? extends MutableFieldDeclaration> _declaredFields = null;
      if (cls!=null) {
        _declaredFields=cls.getDeclaredFields();
      }
      final Function1<MutableFieldDeclaration, Boolean> _function = (MutableFieldDeclaration it) -> {
        return Boolean.valueOf(((((!it.isStatic()) && it.isFinal()) && (it.getInitializer() == null)) && this.context.isThePrimaryGeneratedJavaElement(it)));
      };
      Iterable<? extends MutableFieldDeclaration> _filter = IterableExtensions.filter(_declaredFields, _function);
      if (_filter != null) {
        _elvis = _filter;
      } else {
        _elvis = Collections.<MutableFieldDeclaration>unmodifiableList(CollectionLiterals.<MutableFieldDeclaration>newArrayList());
      }
      return _elvis;
    }
    
    public boolean hasNoArgsConstructor(final MutableTypeDeclaration cls) {
      final Function1<MutableConstructorDeclaration, Boolean> _function = (MutableConstructorDeclaration it) -> {
        int _size = IterableExtensions.size(it.getParameters());
        return Boolean.valueOf((_size == 0));
      };
      return IterableExtensions.exists(cls.getDeclaredConstructors(), _function);
    }
    
    public String getConstructorAlreadyExistsMessage(final MutableTypeDeclaration it) {
      StringConcatenation _builder = new StringConcatenation();
      _builder.append("Cannot create SerializableConstructor as a constructor with the signature \"new(�finalFieldsConstructorArgumentTypes.join(\",\")�)\" already exists.");
      return _builder.toString();
    }
    
    public MutableConstructorDeclaration addFinalFieldsConstructor(final MutableClassDeclaration it) {
      MutableConstructorDeclaration _xifexpression = null;
      boolean _hasNoArgsConstructor = this.hasNoArgsConstructor(it);
      if (_hasNoArgsConstructor) {
        boolean _isEmpty = IterableExtensions.isEmpty(this.getFinalFields(it.getDeclaringType()));
        boolean _not = (!_isEmpty);
        if (_not) {
          this.context.addError(it, this.getConstructorAlreadyExistsMessage(it));
        }
      } else {
        final Procedure1<MutableConstructorDeclaration> _function = (MutableConstructorDeclaration it_1) -> {
          this.context.setPrimarySourceElement(it_1, this.context.getPrimarySourceElement(it_1.getDeclaringType()));
          this.makeFinalFieldsConstructor(it_1);
        };
        _xifexpression = it.addConstructor(_function);
      }
      return _xifexpression;
    }
    
    public void makeFinalFieldsConstructor(final MutableConstructorDeclaration it) {
      final HashMap<MutableFieldDeclaration, CharSequence> fieldToValue = CollectionLiterals.<MutableFieldDeclaration, CharSequence>newHashMap();
      final Consumer<MutableFieldDeclaration> _function = (MutableFieldDeclaration p) -> {
        p.markAsInitializedBy(it);
        final CharSequence paramVal = this.getDefaultCharSeq(this.orObject(p.getType()));
        fieldToValue.put(p, paramVal);
      };
      this.getFinalFields(it.getDeclaringType()).forEach(_function);
      StringConcatenationClient _client = new StringConcatenationClient() {
        @Override
        protected void appendTo(StringConcatenationClient.TargetStringConcatenation _builder) {
          _builder.append("super();");
          _builder.newLine();
          {
            Iterable<? extends MutableFieldDeclaration> _finalFields = Util.this.getFinalFields(it.getDeclaringType());
            for(final MutableFieldDeclaration arg : _finalFields) {
              _builder.append("this.");
              String _simpleName = arg.getSimpleName();
              _builder.append(_simpleName);
              _builder.append(" = ");
              CharSequence _get = fieldToValue.get(arg);
              _builder.append(_get);
              _builder.append(";");
              _builder.newLineIfNotEmpty();
            }
          }
        }
      };
      it.setBody(_client);
    }
    
    private CharSequence getDefaultCharSeq(final TypeReference paramType) {
      String _switchResult = null;
      boolean _matched = false;
      TypeReference _primitiveInt = this.context.getPrimitiveInt();
      boolean _equals = Objects.equal(paramType, _primitiveInt);
      if (_equals) {
        _matched=true;
      }
      if (!_matched) {
        TypeReference _primitiveLong = this.context.getPrimitiveLong();
        boolean _equals_1 = Objects.equal(paramType, _primitiveLong);
        if (_equals_1) {
          _matched=true;
        }
      }
      if (!_matched) {
        TypeReference _primitiveShort = this.context.getPrimitiveShort();
        boolean _equals_2 = Objects.equal(paramType, _primitiveShort);
        if (_equals_2) {
          _matched=true;
        }
      }
      if (!_matched) {
        TypeReference _primitiveFloat = this.context.getPrimitiveFloat();
        boolean _equals_3 = Objects.equal(paramType, _primitiveFloat);
        if (_equals_3) {
          _matched=true;
        }
      }
      if (!_matched) {
        TypeReference _primitiveDouble = this.context.getPrimitiveDouble();
        boolean _equals_4 = Objects.equal(paramType, _primitiveDouble);
        if (_equals_4) {
          _matched=true;
        }
      }
      if (_matched) {
        _switchResult = "0";
      }
      if (!_matched) {
        TypeReference _primitiveByte = this.context.getPrimitiveByte();
        boolean _equals_5 = Objects.equal(paramType, _primitiveByte);
        if (_equals_5) {
          _matched=true;
          _switchResult = "(byte) 0";
        }
      }
      if (!_matched) {
        TypeReference _primitiveChar = this.context.getPrimitiveChar();
        boolean _equals_6 = Objects.equal(paramType, _primitiveChar);
        if (_equals_6) {
          _matched=true;
          _switchResult = "\' \'";
        }
      }
      if (!_matched) {
        TypeReference _primitiveBoolean = this.context.getPrimitiveBoolean();
        boolean _equals_7 = Objects.equal(paramType, _primitiveBoolean);
        if (_equals_7) {
          _matched=true;
          _switchResult = "false";
        }
      }
      if (!_matched) {
        _switchResult = "null";
      }
      return _switchResult;
    }
    
    private TypeReference orObject(final TypeReference ref) {
      TypeReference _xifexpression = null;
      if ((ref == null)) {
        _xifexpression = this.context.getObject();
      } else {
        _xifexpression = ref;
      }
      return _xifexpression;
    }
  }
  
  @Override
  public void doTransform(final List<? extends MutableTypeParameterDeclarator> elements, @Extension final TransformationContext context) {
    final Consumer<MutableTypeParameterDeclarator> _function = (MutableTypeParameterDeclarator it) -> {
      this.transform(it, context);
    };
    elements.forEach(_function);
  }
  
  protected void _transform(final MutableClassDeclaration it, @Extension final TransformationContext context) {
    @Extension
    final SerializableConstructorProcessor.Util util = new SerializableConstructorProcessor.Util(context);
    util.addFinalFieldsConstructor(it);
  }
  
  protected void _transform(final MutableConstructorDeclaration it, @Extension final TransformationContext context) {
    context.addError(it, "This only applies to classes");
  }
  
  public void transform(final MutableTypeParameterDeclarator it, final TransformationContext context) {
    if (it instanceof MutableConstructorDeclaration) {
      _transform((MutableConstructorDeclaration)it, context);
      return;
    } else if (it instanceof MutableClassDeclaration) {
      _transform((MutableClassDeclaration)it, context);
      return;
    } else {
      throw new IllegalArgumentException("Unhandled parameter types: " +
        Arrays.<Object>asList(it, context).toString());
    }
  }
}
