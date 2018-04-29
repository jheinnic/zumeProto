package name.jchein.benchmarks.eventuate.model.aggregate

import io.eventuate.ReflectiveMutableCommandProcessingAggregate
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
import name.jchein.benchmarks.eventuate.model.command.BenchmarkCommand
import java.util.Collections

class BenchmarkAggregate extends ReflectiveMutableCommandProcessingAggregate<BenchmarkAggregate, BenchmarkCommand> {
	def static <T> asList(T item) {
		val retval = new ArrayList<T>(1);
		retval.add(item);
		return retval;
	}

	val retVal = Collections.<Event>emptyList()
	
    def List<Event> process(CommandOne cmd) {
//    		return EventOne.build[
//    			it.workerId("CommandOne")
//    		].asList()
		return this.retVal;
    }
	
    def List<Event> process(CommandTwo cmd) {
//    		return EventTwo.build[
//    			it.workerId("CommandTwo")
//    		].asList()
		return this.retVal;
    }
	
    def List<Event> process(CommandThree cmd) {
//    		return EventThree.build[
//    			it.workerId("CommandThree")
//    		].asList()
		return this.retVal;
    }
	
    def List<Event> process(CommandFour cmd) {
//    		return EventFour.build[
//    			it.workerId("CommandFour")
//    		].asList()
		return this.retVal;
    }
	
    def void apply(EventOne evt) {
    		return
    }
    
    def void apply(EventTwo evt) {
    		return
    }
    
    def void apply(EventThree evt) {	
    		return
    }
    
    def void apply(EventFour evt) {	
    		return
    }
}
