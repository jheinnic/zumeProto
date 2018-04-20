package name.jchein.demo.zumepizza.services.delivery.routing.event;

import java.util.function.Consumer;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

import lombok.Builder;
import lombok.Value;
import name.jchein.common.validation.constraints.UUIDString;

@Value
@Builder
public class PaintPolicyRequested implements PaintPolicyEvent {
	@NotNull
	@NotBlank
	String displayName;

	@Min(64)
	int paintHeight;

	@Min(64)
	int paintWidth;

    double modelCenterX;
    
    double modelCenterY;
    
    // TODO: Needs to be non-negative.  0 is not an inclusive lower-bound!
	@Min(0)
	double modelScaleX;
	
	@Min(0)
	double modelScaleY;
	
	@NotNull
	PointMapShape shape;

	@NotNull
	@UUIDString
	private final String organizationId;
	
	public static PaintPolicyRequested build(Consumer<PaintPolicyRequestedBuilder> director) {
		final PaintPolicyRequestedBuilder builder = PaintPolicyRequested.builder();
		director.accept(builder);
		return builder.build();
	}
}