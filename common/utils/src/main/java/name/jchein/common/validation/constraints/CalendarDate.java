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
// * Entity Ids are positive integers.
// *
// * @author John Heinnickel
// */
//@Documented
//@Constraint(validatedBy = { })
//@Target({ METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER })
//@Retention(RUNTIME)
//@ReportAsSingleViolation
//@Pattern(regexp = "^[12]\\d\\d\\d-[01]\\d-[0-3]\\d$")
//@Length(min = 10, max = 10)
//public @interface CalendarDate {
//	String message() default "{name.jchein.common.validation.constraint.CalendarDate.message}";
//
//	Class<?>[] groups() default { };
//
//	Class<? extends Payload>[] payload() default { };
//}
