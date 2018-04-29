package name.jchein.benchmarks.eventuate.model.command

import de.oehme.xtend.contrib.Buildable
import org.eclipse.xtend.lib.annotations.Data
import javax.validation.constraints.NotNull
import org.hibernate.validator.constraints.Length

@Data
@Buildable
class CommandFour implements BenchmarkCommand {
	@NotNull
	@Length(min=0, max=64)
	String workerId
}