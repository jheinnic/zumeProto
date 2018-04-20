package name.jchein.demo.zumepizza.services.resolution.registry.domain

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import io.eventuate.AggregateRepository
import io.eventuate.EventuateAggregateStore
import name.jchein.demo.zumepizza.services.resolution.registry.command.PaintPolicyCommand

//import io.eventuate.javaclient.spring.EnableEventHandlers;

@Configuration
class DomainModelConfiguration
{
	@Bean
	def AggregateRepository<PaintPolicy, PaintPolicyCommand> customerRepository(
		EventuateAggregateStore eventStore)
	{
		return new AggregateRepository<PaintPolicy, PaintPolicyCommand>(
			PaintPolicy, eventStore)
	}
}
