package name.jchein.demo.zumepizza.services.edge.kitchen.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.edge.kitchen.domain.Example")
public interface ExampleEvent extends Event {
	
}
