package name.jchein.demo.zumepizza.services.delivery.routing.event;

import java.util.function.Consumer;

import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PaintPolicyDeprecated implements PaintPolicyEvent {
	@NotNull
	private final String grounds;
	
	public static PaintPolicyDeprecated build(Consumer<PaintPolicyDeprecatedBuilder> director) {
		final PaintPolicyDeprecatedBuilder builder = PaintPolicyDeprecated.builder();
		director.accept(builder);
		return builder.build();
	}
}