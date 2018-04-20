package name.jchein.common.validation.constraints;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import name.jchein.common.validation.validators.HostOrIPConstraintValidator;

import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.CONSTRUCTOR;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.RetentionPolicy.RUNTIME;


/**
 * Entity Ids are positive integers.
 *
 * @author John Heinnickel
 */
@Documented
@Constraint(validatedBy = {HostOrIPConstraintValidator.class})
@Target({ METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER })
@Retention(RUNTIME)
public @interface ResolvesToIP {
	String message() default "{name.jchein.common.validation.constraint.ResolvesToIP.message}";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
}
