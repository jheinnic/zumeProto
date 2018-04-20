package name.jchein.common.validation.constraints;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.ReportAsSingleViolation;
import javax.validation.constraints.Pattern;

// TODO: Add a required import to pom file so this is available here...
//import org.hibernate.validator.constraints.Length;

import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.CONSTRUCTOR;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

/**
 * The string has to be a well-formatted UUID string. Lower-case hex string
 * separated by dashes into words of lengths 8-4-4-4-12
 *
 * @author John Heinnickel
 */
@Documented
@Constraint(validatedBy = {})
@Target({ METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER })
@Retention(RUNTIME)
@ReportAsSingleViolation
//@Length(min = 36, max = 36)
@Pattern(regexp = "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$")
public @interface UUIDString {
	String message() default "{name.jchein.common.validation.constraints.UUIDString.message}";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
}
