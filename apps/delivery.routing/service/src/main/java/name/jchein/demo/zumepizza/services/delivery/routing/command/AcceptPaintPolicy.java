package name.jchein.demo.zumepizza.services.delivery.routing.command;

import javax.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;
import name.jchein.common.validation.constraints.UUIDString;

@Value
@Builder
public class AcceptPaintPolicy implements PaintPolicyCommand {
	@NotNull
	@UUIDString
	String uuid;
}
