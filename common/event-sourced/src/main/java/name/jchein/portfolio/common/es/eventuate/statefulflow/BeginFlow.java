package name.jchein.portfolio.common.es.eventuate.statefulflow;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Retention(RUNTIME)
@Target(METHOD)
public @interface BeginFlow
{
	KeyValuePair trigger();
	
	OnDuplicateMode onDuplicate = OnDuplicateMode.RAISE_ERROR;
}
