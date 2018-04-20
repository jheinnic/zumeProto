package name.jchein.demo.bstocksolutions.common.web;


import org.springframework.boot.context.embedded.EmbeddedServletContainerFactory;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import name.jchein.demo.bstocksolutions.common.web.filter.CORSFilter;
import name.jchein.demo.bstocksolutions.common.web.util.HttpExceptionHandler;


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
