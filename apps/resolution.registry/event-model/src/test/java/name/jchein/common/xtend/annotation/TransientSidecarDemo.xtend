package name.jchein.common.xtend.annotation

import de.oehme.xtend.contrib.Buildable
import javax.validation.constraints.NotNull
import name.jchein.common.validation.constraints.UUIDString
import org.eclipse.xtend.lib.annotations.Accessors
import java.io.Serializable

@Buildable
@Accessors(#[PUBLIC_GETTER, NONE])
@SerializableConstructor
class TransientSidecarDemo implements Serializable {
	@NotNull
	private final String email

	@UUIDString
	private final String id
	
	@Accessors(#[PUBLIC_GETTER, PUBLIC_SETTER])
	private transient int counter
}
