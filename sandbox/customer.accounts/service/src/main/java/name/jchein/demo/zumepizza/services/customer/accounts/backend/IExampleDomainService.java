package name.jchein.demo.zumepizza.services.customer.accounts.backend;

import io.eventuate.EntityWithIdAndVersion;
import name.jchein.demo.zumepizza.services.customer.accounts.domain.Example;

public interface IExampleDomainService
{

	EntityWithIdAndVersion<Example> createExample(
		String exampleUuid,
		String pilotUuid,
		String firstName,
		String middleName,
		String lastName);

}
