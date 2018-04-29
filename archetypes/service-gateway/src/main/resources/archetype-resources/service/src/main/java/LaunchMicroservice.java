#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package name.jchein.demo.zumepizza.services.${parentArtifactId};


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import name.jchein.portfolio.common.es.eventuate.WriteSideServiceConfiguration;


@SpringBootApplication
@Import(WriteSideServiceConfiguration.class)
public class LaunchMicroservice
{
	public static void main(final String[] args)
	{
		SpringApplication.run(LaunchMicroservice.class, args);
	}
}
