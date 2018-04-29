package name.jchein.demo.zumepizza.services.hr.procmgr.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.hr.procmgr.domain.Example")
public interface ExampleEvent extends Event {
	
}
