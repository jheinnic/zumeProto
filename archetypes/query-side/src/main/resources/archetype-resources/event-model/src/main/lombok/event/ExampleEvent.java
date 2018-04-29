#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package name.jchein.demo.zumepizza.services.${parentArtifactId}.event;

import io.eventuate.Event;
import io.eventuate.EventEntity;

@EventEntity(entity="name.jchein.demo.zumepizza.services.${parentArtifactId}.domain.Example")
public interface ExampleEvent extends Event {
	
}
