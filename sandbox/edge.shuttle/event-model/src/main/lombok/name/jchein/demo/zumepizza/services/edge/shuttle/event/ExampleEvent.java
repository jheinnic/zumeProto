package name.jchein.demo.zumepizza.services.edge.shuttle.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.edge.shuttle.domain.Example")
public interface ExampleEvent extends Event {
	
}
