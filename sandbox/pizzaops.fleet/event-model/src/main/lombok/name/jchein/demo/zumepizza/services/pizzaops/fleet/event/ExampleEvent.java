package name.jchein.demo.zumepizza.services.pizzaops.fleet.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.pizzaops.fleet.domain.Example")
public interface ExampleEvent extends Event {
	
}
