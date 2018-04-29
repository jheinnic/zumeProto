package name.jchein.demo.zumepizza.services.pizzaops.process.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.pizzaops.process.domain.Example")
public interface ExampleEvent extends Event {
	
}
