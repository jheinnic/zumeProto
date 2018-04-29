#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package name.jchein.demo.zumepizza.services.${parentArtifactId}.backend;


import io.eventuate.EntityWithIdAndVersion;
import io.eventuate.sync.AggregateRepository;
import name.jchein.common.validation.constraints.UUIDString;
import name.jchein.demo.zumepizza.services.${parentArtifactId}.domain.CreateExample;
import name.jchein.demo.zumepizza.services.${parentArtifactId}.domain.Example;
import name.jchein.demo.zumepizza.services.${parentArtifactId}.domain.ExampleCommand;
import name.jchein.portfolio.common.es.eventuate.IUUIDExtension;


public class ExampleDomainService
implements IExampleDomainService
{
	private final AggregateRepository<Example, ExampleCommand> exampleRepository;
	private final IUUIDExtension uuidExtension;


	ExampleDomainService( AggregateRepository<Example, ExampleCommand> exampleRepository, IUUIDExtension uuidExtension )
	{
		this.exampleRepository = exampleRepository;
		this.uuidExtension = uuidExtension;
	}


	@Override
	public EntityWithIdAndVersion<Example> createExample(
		@UUIDString String exampleUuid,
		@UUIDString String pilotUuid,
		String firstName,
		String middleName,
		String lastName)
	{
		return this.exampleRepository.save(CreateExample.build((bldr) -> {
			bldr.pilotUuid(pilotUuid)
				.firstName(firstName)
				.middleName(middleName)
				.lastName(lastName);
		}), this.uuidExtension.toSaveOptions(exampleUuid));
	}
}
