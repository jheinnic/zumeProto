package name.jchein.portfolio.common.es.eventuate;

import java.util.Optional;
import java.util.UUID;

import io.eventuate.SaveOptions;

public interface IUUIDExtension
{
   Optional<SaveOptions> toSaveOptions(UUID activityId);

   Optional<SaveOptions> toSaveOptions(String aggregateId);
}
