package name.jchein.benchmarks.eventuate.model.aggregate

import io.eventuate.Event
import java.util.List
import name.jchein.benchmarks.eventuate.model.command.CommandOne
import name.jchein.benchmarks.eventuate.model.command.CommandTwo
import name.jchein.benchmarks.eventuate.model.command.CommandThree
import name.jchein.benchmarks.eventuate.model.command.CommandFour
import name.jchein.benchmarks.eventuate.model.event.EventOne
import name.jchein.benchmarks.eventuate.model.event.EventTwo
import name.jchein.benchmarks.eventuate.model.event.EventThree
import name.jchein.benchmarks.eventuate.model.event.EventFour
import java.util.ArrayList
import io.eventuate.CommandProcessingAggregate
import name.jchein.benchmarks.eventuate.model.command.BenchmarkCommand
import java.util.Collections

class XTendBenchmarkAggregate implements CommandProcessingAggregate<XTendBenchmarkAggregate, BenchmarkCommand> {
	def static <T> asList(T item) {
		val retval = new ArrayList<T>(1);
		retval.add(item);
		return retval;
	}
	
	val retVal = Collections.<Event>emptyList()

	override processCommand(BenchmarkCommand cmd) {
		return this.process(cmd)
	}

	def dispatch process(BenchmarkCommand cmd) {
		throw new UnsupportedOperationException("TODO: auto-generated method stub")
	}

	def dispatch List<Event> process(CommandOne cmd) {
//		return EventOne.build [
//			it.workerId("CommandOne")
//		].asList()
		return this.retVal;
	}

	def dispatch List<Event> process(CommandTwo cmd) {
//		return EventTwo.build [
//			it.workerId("CommandTwo")
//		].asList()
		return this.retVal;
	}

	def dispatch List<Event> process(CommandThree cmd) {
//		return EventThree.build [
//			it.workerId("CommandThree")
//		].asList()
		return this.retVal;
	}

	def dispatch List<Event> process(CommandFour cmd) {
//		return EventFour.build [
//			it.workerId("CommandFour")
//		].asList()
		return this.retVal;
	}

	override applyEvent(Event event) {
		return this.apply(event)
	}

	def dispatch apply(Event event) {
		throw new UnsupportedOperationException("TODO: auto-generated method stub")
	}

	def dispatch apply(EventOne evt) {
		return this
	}

	def dispatch apply(EventTwo evt) {
		return this
	}

	def dispatch apply(EventThree evt) {
		return this
	}

	def dispatch apply(EventFour evt) {
		return this
	}

}
