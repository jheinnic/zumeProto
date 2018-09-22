package name.jchein.demo.bstocksolutions.webui;


import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.boot.web.servlet.ServletListenerRegistrationBean;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.http.HttpStatus;
import org.springframework.web.context.request.RequestContextListener;


@ComponentScan(scopedProxy = ScopedProxyMode.INTERFACES, lazyInit = false)
@SpringBootApplication(scanBasePackages = "name.jchein.demo.bstocksolutions.webui")
public class LaunchMicroservice
extends SpringBootServletInitializer
{
	public static void main(final String[] args)
	{
		final SpringApplication app = new SpringApplication(LaunchMicroservice.class);
		app.setWebEnvironment(true);
		app.setHeadless(true);
		app.setBannerMode(Banner.Mode.OFF);
		app.setLogStartupInfo(false);
		app.setMainApplicationClass(LaunchMicroservice.class);
		app.run(args);
	}


	@Bean
	ServletContainerCustomizationBean embeddedServletContainerCustomizer()
	{
		return new ServletContainerCustomizationBean(
			this.errorPage(), this.requestContextListenerInitializer());
	}


	@Bean
	ErrorPage errorPage()
	{
		return new ErrorPage(HttpStatus.NOT_FOUND, "/static/notfound.html");
	}


	@Bean
	RequestContextListener requestContextListener()
	{
		return new RequestContextListener();
	}


	@Bean
	ServletListenerRegistrationBean<RequestContextListener> requestContextListenerInitializer()
	{
		return new ServletListenerRegistrationBean<>(this.requestContextListener());
	}

}
