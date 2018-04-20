package name.jchein.common.validation.constraints;

//import java.lang.annotation.Documented;
//import java.lang.annotation.Retention;
//import java.lang.annotation.Target;
//
//import javax.validation.Constraint;
//import javax.validation.Payload;
//import javax.validation.ReportAsSingleViolation;
//import javax.validation.constraints.Pattern;
//
//import org.hibernate.validator.constraints.Length;
//
//import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
//import static java.lang.annotation.ElementType.CONSTRUCTOR;
//import static java.lang.annotation.ElementType.FIELD;
//import static java.lang.annotation.ElementType.METHOD;
//import static java.lang.annotation.ElementType.PARAMETER;
//import static java.lang.annotation.RetentionPolicy.RUNTIME;
//
//
///**
// * Captures the syntax rules for a valid Grubmarket user name.
// *
// * @author John Heinnickel
// */
//@Documented
//@Constraint(validatedBy = {})
//@Target({
//	METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER
//})
//@Retention(RUNTIME)
//@ReportAsSingleViolation
//@Length(min = 3, max = 25, message = "{name.jchein.common.validation.constraints.Username.Length.message}")
//@Pattern(regexp = "^[-_.a-zA-Z0-9]@?[-_.a-zA-Z0-9]*$",
//	message = "{name.jchein.common.validation.constraints.Username.Pattern.message}")
//public @interface Username
//{
//	String message() default "{name.jchein.validation.validation.constraints.Username.message}";
//
//
//	Class<?>[] groups() default {};
//
//
//	Class<? extends Payload>[] payload() default {};
//
//}
