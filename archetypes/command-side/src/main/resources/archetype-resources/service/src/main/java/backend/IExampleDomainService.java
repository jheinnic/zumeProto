#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package name.jchein.demo.zumepizza.services.${parentArtifactId}.backend;

import io.eventuate.EntityWithIdAndVersion;
import name.jchein.demo.zumepizza.services.${parentArtifactId}.domain.Example;

public interface IExampleDomainService
{

	EntityWithIdAndVersion<Example> createExample(
		String exampleUuid,
		String pilotUuid,
		String firstName,
		String middleName,
		String lastName);

}
