package name.jchein.demo.zumepizza.services.pilot.management.domain;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import io.eventuate.AggregateRepository;
import io.eventuate.EventuateAggregateStore;

//import io.eventuate.javaclient.spring.EnableEventHandlers;

@Configuration
public class DomainModelConfiguration
{
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	public AggregateRepository<PilotTimecard, PilotTimecardCommand> customerRepository(
		EventuateAggregateStore eventStore)
	{
		return new AggregateRepository<PilotTimecard, PilotTimecardCommand>(PilotTimecard.class, eventStore);
	}
}
