package name.jchein.demo.zumepizza.services.resolution.registry.event

import de.oehme.xtend.contrib.Buildable
import javax.validation.constraints.NotNull
import org.eclipse.xtend.lib.annotations.Data
import org.hibernate.validator.constraints.NotBlank

@Data
@Buildable
class PaintPolicyRenamed implements PaintPolicyEvent {
	@NotNull
	@NotBlank
	String newDisplayName;

	@NotNull
	String grounds;
}
