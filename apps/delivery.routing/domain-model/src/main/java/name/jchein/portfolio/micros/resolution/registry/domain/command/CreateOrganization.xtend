package name.jchein.portfolio.micros.resolution.registry.domain.command

import de.oehme.xtend.contrib.Buildable
import javax.validation.constraints.NotNull
import name.jchein.common.validation.constraints.UUIDString
import org.eclipse.xtend.lib.annotations.Data

@Data
@Buildable
class CreateOrganization implements PaintPolicyCommand {
    @NotNull
    @UUIDString
    String ownerId
    	
    @NotNull
    @UUIDString
    	String displayName
}
