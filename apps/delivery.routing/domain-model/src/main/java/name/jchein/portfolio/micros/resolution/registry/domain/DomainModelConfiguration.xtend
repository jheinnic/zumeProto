package name.jchein.portfolio.micros.resolution.registry.domain

import org.springframework.context.annotation.Bean
//import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import io.eventuate.AggregateRepository
import io.eventuate.EventuateAggregateStore
//import io.eventuate.javaclient.spring.EnableEventHandlers;
import name.jchein.portfolio.micros.resolution.registry.domain.PaintPolicy
import name.jchein.portfolio.micros.resolution.registry.domain.command.PaintPolicyCommand

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
