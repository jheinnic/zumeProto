package name.jchein.common.xtend.annotation

import de.oehme.xtend.contrib.Buildable
import javax.validation.constraints.NotNull
import name.jchein.common.validation.constraints.UUIDString
import org.eclipse.xtend.lib.annotations.Data
import java.io.Serializable

@Data
@Buildable
@SerializableConstructor
class ImmutableDataBag implements Serializable {
	@NotNull
	String email

	@UUIDString
	String id
	
	int counter
}
