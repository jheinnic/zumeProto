package name.jchein.common.validation;


import org.hibernate.validator.HibernateValidator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.validation.beanvalidation.MethodValidationPostProcessor;


@Configuration
public class ValidationConfiguration
{
	@Bean
	LocalValidatorFactoryBean localValidator()
	{
		final LocalValidatorFactoryBean retVal = new LocalValidatorFactoryBean();
		retVal.setValidationMessageSource(this.messageSource());
		retVal.setProviderClass(HibernateValidator.class);
		return retVal;
	}


	@Bean
	ReloadableResourceBundleMessageSource messageSource()
	{
		final ReloadableResourceBundleMessageSource retVal = new ReloadableResourceBundleMessageSource();
		retVal.setBasenames("/WEB-INF/messages/validation", "/WEB-INF/messages/fields");
		return retVal;
	}


	@Bean
	MethodValidationPostProcessor methodValidationPostProcessor()
	{
		final MethodValidationPostProcessor retVal = new MethodValidationPostProcessor();
		retVal.setValidatorFactory(this.localValidator());
		return retVal;
	}
}
