package name.jchein.demo.zumepizza.services.delivery.routing;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackageClasses=LaunchMicroservice.class)
//@Import(UnitsConfiguration.class, WriteSideServiceConfiguration.class)
public class LaunchMicroservice
{
	public static void main(final String[] args)
	{
		final SpringApplication app = new SpringApplication(LaunchMicroservice.class);

		// app.setWebEnvironment(true);
		// app.setBannerMode(Banner.Mode.OFF);
		app.setHeadless(true);
		app.setLogStartupInfo(true);

		app.run(args);
	}
}
