package name.jchein.common.validation.constraints;

//import java.lang.annotation.Documented;
//import java.lang.annotation.Retention;
//import java.lang.annotation.Target;
//
//import javax.validation.Constraint;
//import javax.validation.Payload;
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
// * Captures the syntax rules for a valid Grubmarket password in unencoded form
// *
// * @author John Heinnickel
// */
//@Documented
//@Constraint(validatedBy = {})
//@Target({
//	METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER
//})
//@Retention(RUNTIME)
//@Length(min = 6, message = "{name.jchein.common.validation.constraints.Password.Length.message}")
//@Pattern(regexp = "^[-_a-zA-Z0-9@#$%^&*!=+`'\"~{}\\[\\]\\\\/?.,<>]*$",
//	message = "{name.jchein.common.validation.constraints.Password.Pattern.message}")
//public @interface Password
//{
//	String message() default "{name.jchein.common.validation.constraints.Password.message}";
//
//
//	Class<?>[] groups() default {};
//
//
//	Class<? extends Payload>[] payload() default {};
//
//}
