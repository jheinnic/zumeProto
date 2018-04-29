package name.jchein.demo.zumepizza.services.reporting.dashboards.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.reporting.dashboards.domain.Example")
public interface ExampleEvent extends Event {
	
}
