package name.jchein.demo.zumepizza.services.pizzaops.delivery.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.pizzaops.delivery.domain.Example")
public interface ExampleEvent extends Event {
	
}
