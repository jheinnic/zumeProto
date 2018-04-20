package name.jchein.common.xtend.annotation;

import com.google.common.annotations.GwtCompatible;
import java.lang.annotation.ElementType;
import java.lang.annotation.Target;
import name.jchein.common.xtend.annotation.SerializableConstructorProcessor;
import org.eclipse.xtend.lib.macro.Active;

/**
 * <p>Creates a constructor that takes a parameter for each final field of a class.</p>
 * 
 * Annotated on a class
 * <p>
 * Creates a constructor that takes no arguments and assigns each final field its
 * data type-specific default default value.
 * 
 * The order of assignments matches order of the field definitions.
 * </p>
 */
@Target(ElementType.TYPE)
@GwtCompatible
@Active(SerializableConstructorProcessor.class)
public @interface SerializableConstructor {
}
