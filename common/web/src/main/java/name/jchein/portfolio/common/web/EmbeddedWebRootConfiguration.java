package name.jchein.portfolio.common.web;


import org.springframework.boot.context.embedded.EmbeddedServletContainerFactory;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import name.jchein.portfolio.common.web.filter.CORSFilter;
import name.jchein.portfolio.common.web.util.HttpExceptionHandler;


@ComponentScan
@Configuration
public class EmbeddedWebRootConfiguration
{
	@Bean
	public CORSFilter corsFilter()
	{
		return new CORSFilter();
	}


	@Bean
	public HttpExceptionHandler httpExceptionHandler()
	{
		return new HttpExceptionHandler();
	}


	@Bean
	public EmbeddedServletContainerFactory servletContainer()
	{
		return new TomcatEmbeddedServletContainerFactory();
	}
}
