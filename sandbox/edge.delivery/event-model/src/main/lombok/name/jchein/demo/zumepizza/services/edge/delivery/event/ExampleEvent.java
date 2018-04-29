package name.jchein.demo.zumepizza.services.edge.delivery.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.edge.delivery.domain.Example")
public interface ExampleEvent extends Event {
	
}
