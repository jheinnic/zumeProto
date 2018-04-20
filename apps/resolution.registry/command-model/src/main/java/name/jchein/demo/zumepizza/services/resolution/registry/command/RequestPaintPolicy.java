package name.jchein.demo.zumepizza.services.resolution.registry.command;

import lombok.Builder;
import lombok.Value;

import java.util.function.Consumer;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.ScriptAssert;
import name.jchein.common.validation.constraints.UUIDString;

@Value
@Builder
@ScriptAssert.List({
    @ScriptAssert(lang = "javascript", script = "if (_this.shape === PointMapShape.square) { return _this.paintHeight === _this.paintWidth }"),
    @ScriptAssert(lang = "javascript", script = "if (_this.shape !== PointMapShape.square) { return _this.paintHeight !== _this.paintWidth }")
})
public class RequestPaintPolicy implements PaintPolicyCommand {
    @NotNull
    @UUIDString
    String uuid;

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
    double modelScale;
    
    @NotNull
    PointMapShape shape;

	public static PaintPolicyCommand build(Consumer<RequestPaintPolicyBuilder> director) {
		RequestPaintPolicyBuilder bldr = RequestPaintPolicy.builder();
		director.accept(bldr);
		return bldr.build();
	}
}
