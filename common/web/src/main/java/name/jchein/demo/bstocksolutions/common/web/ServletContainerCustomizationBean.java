package name.jchein.demo.bstocksolutions.common.web;


import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;


public class ServletContainerCustomizationBean
implements EmbeddedServletContainerCustomizer
{
	@Override
	public void customize(final ConfigurableEmbeddedServletContainer container)
	{
		// container.setPort(8080);
		// container.setPersistSession(true);
		// container.setSessionStoreDir(
		// new File("/Users/jheinnic/Git/b_eventuate/js-frontend/target/sessionStore/"));
		// Do not override the Spring Boot configured port...
		// container.setPort(9000);
	}
}
