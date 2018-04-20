package name.jchein.demo.zumepizza.services.delivery.routing.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.service.delivery.routing.domain.PaintPolicy")
public interface PaintPolicyEvent extends Event {
	
}
