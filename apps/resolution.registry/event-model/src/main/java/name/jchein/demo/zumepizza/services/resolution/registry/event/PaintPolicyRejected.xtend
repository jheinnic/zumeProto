package name.jchein.demo.zumepizza.services.resolution.registry.event

import de.oehme.xtend.contrib.Buildable
import javax.validation.constraints.NotNull
import name.jchein.common.xtend.annotation.SerializableConstructor
import org.eclipse.xtend.lib.annotations.Data
import org.eclipse.xtend.lib.annotations.FinalFieldsConstructor

@Data
@Buildable
@FinalFieldsConstructor
@SerializableConstructor
class PaintPolicyRejected implements PaintPolicyEvent {
	@NotNull
	private final String grounds
}
