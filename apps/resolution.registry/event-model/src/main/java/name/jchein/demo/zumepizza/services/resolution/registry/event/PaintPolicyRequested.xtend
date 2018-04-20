package name.jchein.demo.zumepizza.services.resolution.registry.event

import de.oehme.xtend.contrib.Buildable
import javax.validation.constraints.Min
import javax.validation.constraints.NotNull
import name.jchein.common.validation.constraints.UUIDString
import org.eclipse.xtend.lib.annotations.Data
import org.hibernate.validator.constraints.NotBlank

@Data
@Buildable
class PaintPolicyRequested implements PaintPolicyEvent {
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
	private final String organizaationId
}
