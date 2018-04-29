package name.jchein.demo.zumepizza.services.order.payments.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.order.payments.domain.Example")
public interface ExampleEvent extends Event {
	
}
