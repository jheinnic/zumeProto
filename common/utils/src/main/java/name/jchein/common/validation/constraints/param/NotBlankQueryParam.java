package name.jchein.common.validation.constraints.param;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.OverridesAttribute;
import javax.validation.Payload;
import javax.validation.ReportAsSingleViolation;
import javax.ws.rs.QueryParam;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.core.annotation.AliasFor;

import static java.lang.annotation.ElementType.PARAMETER;
import static java.lang.annotation.RetentionPolicy.RUNTIME;


/**
 * Captures the syntax rules for a valid Grubmarket user name.
 *
 * @author John Heinnickel
 */
@Documented
@Constraint(validatedBy = {})
@Target({PARAMETER})
@Retention(RUNTIME)
@ReportAsSingleViolation
@NotBlank
public @interface NotBlankQueryParam
{
	@OverridesAttribute.List({
		@OverridesAttribute(constraint = NotBlank.class, name = "value"),
		@OverridesAttribute(constraint = NotBlank.class, name = "value")
	})
	@AliasFor(annotation = QueryParam.class, attribute = "value")
	String value() default "";
	

	@AliasFor(annotation = QueryParam.class, attribute = "value")
	String name() default "";
	

	String message() default "{name.jchein.common.validation.constraints.param.NotBlankQueryParam}";


	Class<?>[] groups() default {};


	Class<? extends Payload>[] payload() default {};

}
