package name.jchein.demo.zumepizza.services.pizzaops.supplychain.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.pizzaops.supplychain.domain.Example")
public interface ExampleEvent extends Event {
	
}
