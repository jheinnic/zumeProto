package name.jchein.demo.zumepizza.services.edge.kitchen.backend;

import io.eventuate.EntityWithIdAndVersion;
import name.jchein.demo.zumepizza.services.edge.kitchen.domain.Example;

public interface IExampleDomainService
{

	EntityWithIdAndVersion<Example> createExample(
		String exampleUuid,
		String pilotUuid,
		String firstName,
		String middleName,
		String lastName);

}
