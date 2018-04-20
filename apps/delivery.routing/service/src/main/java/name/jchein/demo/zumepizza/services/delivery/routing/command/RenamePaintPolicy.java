package name.jchein.demo.zumepizza.services.delivery.routing.command;

import lombok.Builder;
import lombok.Value;
import javax.validation.constraints.NotNull;
import name.jchein.common.validation.constraints.UUIDString;
import org.hibernate.validator.constraints.NotBlank;

@Value
@Builder
public class RenamePaintPolicy implements PaintPolicyCommand {
	@NotNull
	@UUIDString
	String uuid;
	
	@NotNull
	@NotBlank
	String newDisplayName;
}
