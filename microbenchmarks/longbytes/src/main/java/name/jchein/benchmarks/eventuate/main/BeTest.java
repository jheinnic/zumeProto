package name.jchein.benchmarks.eventuate.main;


import com.google.caliper.Benchmark;
import com.google.caliper.api.VmOptions;

@VmOptions("-XX:-TieredCompilation")
public class BeTest extends Benchmark {

	private final long hiValue;
	private final long loValue;
	private byte[] result;

	public BeTest() {
		this.hiValue = System.currentTimeMillis();
		this.loValue = this.hiValue * 3;
		this.result = new byte[16];
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

	public void timeMainToArray(int reps) {
//		System.out.println(String.format("main reps = %d", reps));
		for (int i = 0; i < reps; i++) {
			this.result[15] = (byte) (this.loValue);
			this.result[14] = (byte) (this.loValue >>> 8);
			this.result[13] = (byte) (this.loValue >>> 16);
			this.result[12] = (byte) (this.loValue >>> 24);
			this.result[11] = (byte) (this.loValue >>> 32);
			this.result[10] = (byte) (this.loValue >>> 40);
			this.result[9] = (byte) (this.loValue >>> 48);
			this.result[8] = (byte) (this.loValue >>> 56);
			this.result[7] = (byte) (this.loValue);
			this.result[6] = (byte) (this.loValue >>> 8);
			this.result[5] = (byte) (this.loValue >>> 16);
			this.result[4] = (byte) (this.loValue >>> 24);
			this.result[3] = (byte) (this.loValue >>> 32);
			this.result[2] = (byte) (this.loValue >>> 40);
			this.result[1] = (byte) (this.loValue >>> 48);
			this.result[0] = (byte) (this.loValue >>> 56);
		}
	}

//			if ((i % 10000) == 0) {
//				System.out.println(String.format("main iter = %d", reps));
//			}
//		if (retVal == null) {
//			System.out.println(Arrays.toString(retVal));
//		}

	public void timeAltToArray(int reps) {
		for (int i = 0; i < reps; i++) {
			long lsb = this.loValue;
			this.result[15] = (byte) (lsb);
			lsb >>>= 8;
			this.result[14] = (byte) (lsb);
			lsb >>>= 8;
			this.result[13] = (byte) (lsb);
			lsb >>>= 8;
			this.result[12] = (byte) (lsb);
			lsb >>>= 8;
			this.result[11] = (byte) (lsb);
			lsb >>>= 8;
			this.result[10] = (byte) (lsb);
			lsb >>>= 8;
			this.result[9] = (byte) (lsb);
			lsb >>>= 8;
			this.result[8] = (byte) (lsb);

			lsb = this.hiValue;
			this.result[7] = (byte) (lsb);
			lsb >>>= 8;
			this.result[6] = (byte) (lsb);
			lsb >>>= 8;
			this.result[5] = (byte) (lsb);
			lsb >>>= 8;
			this.result[4] = (byte) (lsb);
			lsb >>>= 8;
			this.result[3] = (byte) (lsb);
			lsb >>>= 8;
			this.result[2] = (byte) (lsb);
			lsb >>>= 8;
			this.result[1] = (byte) (lsb);
			lsb >>>= 8;
			this.result[0] = (byte) (lsb);
		}
	}
}