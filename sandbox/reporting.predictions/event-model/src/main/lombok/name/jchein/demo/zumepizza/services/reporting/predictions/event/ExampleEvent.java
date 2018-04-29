package name.jchein.demo.zumepizza.services.reporting.predictions.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.reporting.predictions.domain.Example")
public interface ExampleEvent extends Event {
	
}
