package name.jchein.demo.zumepizza.services.reporting.dashboards.backend;

import io.eventuate.EntityWithIdAndVersion;
import name.jchein.demo.zumepizza.services.reporting.dashboards.domain.Example;

public interface IExampleDomainService
{

	EntityWithIdAndVersion<Example> createExample(
		String exampleUuid,
		String pilotUuid,
		String firstName,
		String middleName,
		String lastName);

}
