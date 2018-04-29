package name.jchein.portfolio.common.es.eventuate;


import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Scope;

import io.eventuate.javaclient.driver.EventuateDriverConfiguration;
import name.jchein.common.identity.EnableUUIDGenerator;


@Configuration
@EnableUUIDGenerator
@Import({EventuateDriverConfiguration.class})
public class WriteSideServiceConfiguration
{
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	IUUIDExtension uuidExtension() {
		return new UUIDExtension();
	}
}
