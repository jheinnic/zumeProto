package name.jchein.demo.zumepizza.services.pilot.management.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.service.pilot.management.domain.PilotTimecard")
public interface PilotTimecardEvent extends Event {
	
}
