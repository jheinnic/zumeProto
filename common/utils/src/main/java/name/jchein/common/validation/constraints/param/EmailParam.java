package name.jchein.common.validation.constraints.param;

import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.ReportAsSingleViolation;

import org.hibernate.validator.constraints.Email;
import org.springframework.core.annotation.AliasFor;


/**
 * Equivalent of {@link Email} that includes a param attribute for the benefit of message interpolation.
 *
 * @author John Heinnickel
 */
@Documented
@Constraint(validatedBy = {})
@Target({PARAMETER})
@Retention(RUNTIME)
@ReportAsSingleViolation
@Email
public @interface EmailParam
{
	@AliasFor(attribute = "name")
	String value() default "";
	

	@AliasFor("value")
	String name() default "";

	
	String message() default "{name.jchein.common.validation.constraints.param.EmailParam}";


	Class<?>[] groups() default {};


	Class<? extends Payload>[] payload() default {};

}
