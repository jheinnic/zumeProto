package name.jchein.demo.zumepizza.services.delivery.routing.command;

import lombok.Builder;
import lombok.Value;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotBlank;
import name.jchein.common.validation.constraints.UUIDString;

@Value
@Builder
public class RejectPaintPolicy implements PaintPolicyCommand {
	@NotNull
	@UUIDString
	String uuid;
	
	@NotNull
	@NotBlank
	String grounds;
}
