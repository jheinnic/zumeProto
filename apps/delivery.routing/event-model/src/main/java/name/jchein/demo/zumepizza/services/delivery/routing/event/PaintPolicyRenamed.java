package name.jchein.demo.zumepizza.services.delivery.routing.event;

import java.util.function.Consumer;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class PaintPolicyRenamed implements PaintPolicyEvent {
	@NotNull
	@NotBlank
	String newDisplayName;
	
	public static PaintPolicyRenamed build(Consumer<PaintPolicyRenamedBuilder> director) {
		final PaintPolicyRenamedBuilder builder = PaintPolicyRenamed.builder();
		director.accept(builder);
		return builder.build();
	}

}