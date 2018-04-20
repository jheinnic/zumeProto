package name.jchein.demo.zumepizza.services.resolution.registry.event

import io.eventuate.Event
import io.eventuate.EventEntity

@EventEntity(entity="name.jchein.demo.zumepizza.services.resolution.registry.domain.PaintPolicy")
interface PaintPolicyEvent extends Event {
	
}
