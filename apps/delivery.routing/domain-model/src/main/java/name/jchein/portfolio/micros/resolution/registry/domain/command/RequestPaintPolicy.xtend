package name.jchein.portfolio.micros.resolution.registry.domain.command;

import de.oehme.xtend.contrib.Buildable
import javax.validation.constraints.Min
import javax.validation.constraints.NotNull
import name.jchein.portfolio.micros.resolution.registry.domain.PointMapShape
import org.eclipse.xtend.lib.annotations.Data
import org.hibernate.validator.constraints.NotBlank
import org.hibernate.validator.constraints.ScriptAssert
import name.jchein.common.validation.constraints.UUIDString

@Data
@Buildable
@ScriptAssert.List(#[
	@ScriptAssert(lang = "javascript", script = "if (_this.shape === PointMapShape.square) { return _this.paintHeight === _this.paintWidth }"),
	@ScriptAssert(lang = "javascript", script = "if (_this.shape !== PointMapShape.square) { return _this.paintHeight !== _this.paintWidth }"),
	@ScriptAssert(lang = "javascript", script = "((1.0 * _this.paintHeight) / _this.paintWidth) === (_this.modelScaleY / _this.modelScaleX)")
])
public class RequestPaintPolicy implements PaintPolicyCommand {
	@NotNull
	@UUIDString
	String ownerUuid;
	
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
}
