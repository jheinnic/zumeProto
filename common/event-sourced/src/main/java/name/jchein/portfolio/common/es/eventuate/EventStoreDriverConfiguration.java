package name.jchein.portfolio.common.es.eventuate;


import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import io.eventuate.local.java.jdbckafkastore.EventuateLocalConfiguration;


@Configuration
@Import({
	EventuateLocalConfiguration.class
})
public class EventStoreDriverConfiguration
{

}
