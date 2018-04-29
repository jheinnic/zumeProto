package name.jchein.demo.zumepizza.services.pizzaops.staffing.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.pizzaops.staffing.domain.Example")
public interface ExampleEvent extends Event {
	
}
