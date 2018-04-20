package name.jchein.portfolio.micros.resolution.registry.domain.command;

import de.oehme.xtend.contrib.Buildable
import javax.validation.constraints.NotNull
import org.eclipse.xtend.lib.annotations.Data
import org.hibernate.validator.constraints.NotBlank

@Data
@Buildable
public class RenamePaintPolicy implements PaintPolicyCommand {
	@NotNull
	@NotBlank
	String newDisplayName;

	@NotNull
	String grounds;
}
