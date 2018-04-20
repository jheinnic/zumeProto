package name.jchein.demo.zumepizza.services.delivery.routing.event;


import java.util.function.Consumer;

import javax.validation.constraints.NotNull;
import lombok.Value;
import lombok.Builder;


@Value
@Builder
public class PaintPolicyAccepted
implements PaintPolicyEvent
{
	@NotNull
	String grounds;
	
	public static PaintPolicyAccepted build(Consumer<PaintPolicyAcceptedBuilder> director) {
		final PaintPolicyAcceptedBuilder builder = PaintPolicyAccepted.builder();
		director.accept(builder);
		return builder.build();
	}
}
