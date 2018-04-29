package name.jchein.benchmarks.eventuate.model.value

import de.oehme.xtend.contrib.Buildable
import org.hibernate.validator.constraints.Range
import name.jchein.common.validation.constraints.ResolvesToIP
import javax.validation.constraints.NotNull
import org.eclipse.xtend.lib.annotations.Data
import javax.validation.constraints.Pattern

@Data
@Buildable
class WorkerLocation {
	@NotNull
	@ResolvesToIP
	private val String nodeAddress

	@Range(min=2, max=65536)
	private val Integer processId

	@NotNull
	@Pattern(regexp="/([a-zA-Z0-9]*\\/)*/")
	private val String fileCachePath
}
