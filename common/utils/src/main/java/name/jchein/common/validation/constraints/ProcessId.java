package name.jchein.common.validation.constraints;


import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.CONSTRUCTOR;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.ReportAsSingleViolation;

import org.hibernate.validator.constraints.Range;


/**
 * This class is meant to be tailored for a given environmnent's kernel configuration settings. Process IDs on 64 bit
 * systems can range as high as 2^22 for some Unix kernels, but MacOSX caps its PID range at 99999. If a model property
 * is used to describe the PID of a process from a "foreign" environment, this annotation is inapproprirate for such
 * use.
 *
 * Its minimum and maximum ranges currently reflect the common values found in MacOSX kernels.
 *
 * @author John Heinnickel
 */
@Documented
@Constraint(validatedBy = {})
@Target({
	METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER
})
@Retention(RUNTIME)
@ReportAsSingleViolation
@Range(min = 100, max = 99999)
public @interface ProcessId
{
	Class<?>[] groups() default {};


	String message() default "{name.jchein.common.validation.constraint.ProcessId.message}";


	Class<? extends Payload>[] payload() default {};
}
