package name.jchein.common.validation.validators;

import java.net.InetAddress;
import java.net.UnknownHostException;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import name.jchein.common.validation.constraints.ResolvesToIP;

public class HostOrIPConstraintValidator implements ConstraintValidator<ResolvesToIP, String> {

	@Override
	public void initialize(ResolvesToIP constraintAnnotation) {
	}

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		boolean retVal = true;
		try {
			InetAddress.getByName(value);
		} catch (UnknownHostException e) {
			retVal = false;
		}
		return retVal;
	}
}
