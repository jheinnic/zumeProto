package name.jchein.portfolio.micros.resolution.registry.domain.command;

import de.oehme.xtend.contrib.Buildable
import javax.validation.constraints.NotNull
import org.eclipse.xtend.lib.annotations.Data

@Data
@Buildable
public class DeprecatePaintPolicy implements PaintPolicyCommand {
	@NotNull
	String grounds;
}
