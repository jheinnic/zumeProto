package name.jchein.portfolio.common.web;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.validation.Validator;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import name.jchein.common.validation.ValidationConfiguration;


@Configuration
@EnableWebMvc
@Import({
	ValidationConfiguration.class
})
public class WebConfiguration
extends WebMvcConfigurerAdapter
{
	private final Validator localValidator;


	@Autowired
	public WebConfiguration( final Validator localValidator )
	{
		this.localValidator = localValidator;
	}


	@Override
	public void extendMessageConverters(final List<HttpMessageConverter<?>> converters)
	{
		final HttpMessageConverter<?> additional = new MappingJackson2HttpMessageConverter();
		converters.add(additional);
	}


	@Override
	public org.springframework.validation.Validator getValidator()
	{
		return this.localValidator;
	}
}
