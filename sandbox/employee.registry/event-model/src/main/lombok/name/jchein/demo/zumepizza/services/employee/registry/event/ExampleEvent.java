package name.jchein.demo.zumepizza.services.employee.registry.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.employee.registry.domain.Example")
public interface ExampleEvent extends Event {
	
}
