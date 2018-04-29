package name.jchein.benchmarks.eventuate.main;


import com.google.caliper.Benchmark;
import com.google.caliper.api.VmOptions;

import name.jchein.benchmarks.eventuate.model.aggregate.BenchmarkAggregate;
import name.jchein.benchmarks.eventuate.model.aggregate.XTendBenchmarkAggregate;
import name.jchein.benchmarks.eventuate.model.command.BenchmarkCommand;
import name.jchein.benchmarks.eventuate.model.command.CommandFour;
import name.jchein.benchmarks.eventuate.model.command.CommandOne;
import name.jchein.benchmarks.eventuate.model.command.CommandThree;
import name.jchein.benchmarks.eventuate.model.command.CommandTwo;

@VmOptions("-XX:-TieredCompilation")
public class BeTest extends Benchmark {
	BenchmarkAggregate reflective;
	XTendBenchmarkAggregate xtend;
	// ArrayList<BenchmarkCommand> commands = new ArrayList<BenchmarkCommand>(1000);
	BenchmarkCommand[] baseCmds = new BenchmarkCommand[4];
	int numCommands = 4;

	public BeTest() {
		baseCmds[0] = new CommandOne("CommandOne");
		baseCmds[1] = new CommandTwo("CommandTwo");
		baseCmds[2] = new CommandThree("CommandThree");
		baseCmds[3] = new CommandFour("CommandFour");
		this.reflective = new BenchmarkAggregate();
		this.xtend = new XTendBenchmarkAggregate();
	}

//	@Override
//	public void setUp() {
		/*
		 * int loopCount = numCommands / 4; this.numCommands = loopCount * 4;
		 * this.commands = new ArrayList<BenchmarkCommand>(this.numCommands); for (int
		 * ii = 0; ii < loopCount; ii++) { this.commands.add(baseCmds[0]);
		 * this.commands.add(baseCmds[1]); this.commands.add(baseCmds[2]);
		 * this.commands.add(baseCmds[3]); }
		 * 
		 * Collections.shuffle(commands); Collections.shuffle(commands);
		 * Collections.shuffle(commands);
		 */
//	}

	public void timeReflectiveImpl(int reps) {
		for (int i = 0; i < reps; i++) {
			this.reflective.processCommand(this.baseCmds[0]);
			this.reflective.processCommand(this.baseCmds[1]);
			this.reflective.processCommand(this.baseCmds[2]);
			this.reflective.processCommand(this.baseCmds[3]);
		}
	}

	public void timeXTendImpl(int reps) {
		for (int i = 0; i < reps; i++) {
			this.reflective.processCommand(this.baseCmds[0]);
			this.reflective.processCommand(this.baseCmds[1]);
			this.reflective.processCommand(this.baseCmds[2]);
			this.reflective.processCommand(this.baseCmds[3]);
		}
	}
}