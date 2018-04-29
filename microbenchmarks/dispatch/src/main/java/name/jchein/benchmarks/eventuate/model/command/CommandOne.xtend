package name.jchein.benchmarks.eventuate.model.command

import de.oehme.xtend.contrib.Buildable
import javax.validation.constraints.NotNull
import org.eclipse.xtend.lib.annotations.Data
import org.hibernate.validator.constraints.Length

@Data
@Buildable
class CommandOne implements BenchmarkCommand {
	@NotNull
	@Length(min=0, max=64)
	String workerId
}