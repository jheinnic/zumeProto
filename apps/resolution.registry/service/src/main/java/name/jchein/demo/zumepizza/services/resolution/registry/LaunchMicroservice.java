package name.jchein.demo.zumepizza.services.resolution.registry;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Import;

import io.eventuate.javaclient.spring.EnableEventHandlers;
import io.eventuate.local.java.jdbckafkastore.EventuateLocalConfiguration;
import name.jchein.demo.zumepizza.services.resolution.registry.domain.DomainModelConfiguration;
import name.jchein.portfolio.common.es.eventuate.WriteSideServiceConfiguration;


@SpringBootApplication
@EnableEventHandlers
@Import({WriteSideServiceConfiguration.class, DomainModelConfiguration.class})
public class LaunchMicroservice
extends SpringBootServletInitializer
{
	public static void main(final String[] args)
	{
		final SpringApplication app = new SpringApplication(LaunchMicroservice.class);
		app.setHeadless(true);
		app.setLogStartupInfo(false);
		// app.setWebEnvironment(true);
		// app.setBannerMode(Banner.Mode.OFF);
		app.run(args);
	}
}
