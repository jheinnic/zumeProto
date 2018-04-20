package name.jchein.portfolio.common.es.eventuate;

import java.util.Optional;
import java.util.UUID;

import javax.validation.constraints.NotNull;
import javax.validation.executable.ExecutableType;
import javax.validation.executable.ValidateOnExecution;

import io.eventuate.SaveOptions;
import name.jchein.common.validation.constraints.UUIDString;

@ValidateOnExecution(type= {ExecutableType.ALL})
public class UUIDExtension implements IUUIDExtension {
	public Optional<SaveOptions> toSaveOptions(@NotNull UUID aggregateId)
	{
		return Optional.of(
			new SaveOptions().withId(
				aggregateId.toString()
			)
		);
	}

	public Optional<SaveOptions> toSaveOptions(@UUIDString @NotNull String aggregateId)
	{
		return Optional.of(
			new SaveOptions().withId(aggregateId)
		);
	}
}