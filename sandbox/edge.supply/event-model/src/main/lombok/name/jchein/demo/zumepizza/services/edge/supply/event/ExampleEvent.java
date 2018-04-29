package name.jchein.demo.zumepizza.services.edge.supply.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.edge.supply.domain.Example")
public interface ExampleEvent extends Event {
	
}
