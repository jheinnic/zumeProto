package name.jchein.demo.zumepizza.services.edge.potato.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.edge.potato.domain.Example")
public interface ExampleEvent extends Event {
	
}
