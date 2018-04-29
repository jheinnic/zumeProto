package name.jchein.demo.zumepizza.services.pilot.management;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class LaunchMicroservice
{
	public static void main(final String[] args)
	{
		SpringApplication.run(LaunchMicroservice.class, args);

		// app.setHeadless(true);
		// app.setLogStartupInfo(true);
		// app.run(args);
	}
}
