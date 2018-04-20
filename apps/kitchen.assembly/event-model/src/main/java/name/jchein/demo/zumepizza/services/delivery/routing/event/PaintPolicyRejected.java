package name.jchein.demo.zumepizza.services.delivery.routing.event;

import java.util.function.Consumer;

import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Value;

//@FinalFieldsConstructor
//@SerializableConstructor
@Value
@Builder
public class PaintPolicyRejected implements PaintPolicyEvent {
	@NotNull
	private final String grounds;
	
	public static PaintPolicyRejected build(Consumer<PaintPolicyRejectedBuilder> director) {
		final PaintPolicyRejectedBuilder builder = PaintPolicyRejected.builder();
		director.accept(builder);
		return builder.build();
	}
}