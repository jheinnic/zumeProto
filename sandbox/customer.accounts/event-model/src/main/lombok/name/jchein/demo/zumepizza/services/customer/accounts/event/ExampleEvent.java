package name.jchein.demo.zumepizza.services.customer.accounts.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.customer.accounts.domain.Example")
public interface ExampleEvent extends Event {
	
}
