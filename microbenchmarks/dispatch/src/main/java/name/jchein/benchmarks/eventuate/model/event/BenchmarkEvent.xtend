package name.jchein.benchmarks.eventuate.model.event

import io.eventuate.Event
import io.eventuate.EventEntity

@EventEntity(entity="name.jchein.benchmarks.eventuate.model.agregate.BenchmarkAggregate")
public interface BenchmarkEvent extends Event {
}
