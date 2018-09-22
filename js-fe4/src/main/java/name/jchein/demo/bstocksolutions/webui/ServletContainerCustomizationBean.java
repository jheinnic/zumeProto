package name.jchein.demo.bstocksolutions.webui;


import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.boot.web.servlet.ServletListenerRegistrationBean;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextListener;


@Component
public class ServletContainerCustomizationBean
implements EmbeddedServletContainerCustomizer
{
	private final ErrorPage errorPage;
	private final ServletListenerRegistrationBean<RequestContextListener> requestContextListenerInitializer;


	public ServletContainerCustomizationBean( final ErrorPage errorPage,
		final ServletListenerRegistrationBean<RequestContextListener> requestContextListenerInitializer )
	{
		this.errorPage = errorPage;
		this.requestContextListenerInitializer = requestContextListenerInitializer;
	}


	@Override
	public void customize(final ConfigurableEmbeddedServletContainer container)
	{
		// Do not override the Spring Boot configured port...
		// container.setPort(8080);
		// container.setPersistSession(true);
		// container.setSessionStoreDir(
		// new File("/Users/jheinnic/Git/b_eventuate/js-frontend/target/sessionStore/"));
		container.addErrorPages(this.errorPage);
		container.addInitializers(this.requestContextListenerInitializer);
	}

}
