package name.jchein.demo.zumepizza.services.delivery.routing.domain;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import io.eventuate.AggregateRepository;
import io.eventuate.EventuateAggregateStore;
import name.jchein.demo.zumepizza.services.delivery.routing.command.PaintPolicyCommand;

//import io.eventuate.javaclient.spring.EnableEventHandlers;

@Configuration
public class DomainModelConfiguration
{
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	public AggregateRepository<PaintPolicy, PaintPolicyCommand> customerRepository(
		EventuateAggregateStore eventStore)
	{
		return new AggregateRepository<PaintPolicy, PaintPolicyCommand>(PaintPolicy.class, eventStore);
	}
}
