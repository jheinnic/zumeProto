package name.jchein.common.identity;

import java.util.UUID;

import org.hashids.Hashids;

public class TestHash {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		UUID uuid = UUID.randomUUID();
		System.out.println(uuid);
		System.out.println("Least");
		long least = uuid.getLeastSignificantBits();
		System.out.println(least);
//		long leastLo = (least-leastHi) & 0x00000000ffffffff;
		long leastLo = (int) least;
		long leastHi = (least-leastLo)>>>32;
		System.out.println(leastLo);
		System.out.println(leastHi);
		long least2 = leastHi<<32;
		System.out.println(least2);
		least2 = least2 + leastLo;
		System.out.println(least2);
		System.out.println("Most");
		long most = uuid.getMostSignificantBits();
		System.out.println(most);
		long mostLo = (int) most;
		long mostHi = (most-mostLo)>>>32;
		System.out.println(mostLo);
		System.out.println(mostHi);
		long most2 = mostHi<<32;
		System.out.println(most2);
		most2 = most2 + mostLo;
		System.out.println(most2);
		
		long signs = 0;
		if (leastHi < 0) {
			leastHi *= -1;
			signs += 1;
		}
		if (leastLo < 0) {
			leastLo *= -1;
			signs += 2;
		}
		if (mostHi < 0) {
			mostHi *= -1;
			signs += 4;
		}
		if (mostLo < 0) {
			mostLo *= -1;
			signs += 8;
		}
		Hashids hashids = new Hashids("this is my pepper");
		String obfu = hashids.encode(leastHi, leastLo, mostHi, mostLo, signs);
		System.out.println(obfu);
		long[] numbers = hashids.decode(obfu);
		System.out.println(
				String.format("%d %d %d %d %d", numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]));
		if ((numbers[4] % 2) > 0) {
			numbers[0] *= -1;
			numbers[4] -= 1;
		}
		if ((numbers[4] % 4) > 0) {
			numbers[1] *= -1;
			numbers[4] -= 2;
		}
		if ((numbers[4] % 8) > 0) {
			numbers[2] *= -1;
			numbers[4] -= 4;
		}
		if ((numbers[4] % 16) > 0) {
			numbers[3] *= -1;
		}
		long least3 = (numbers[0]<<32) + numbers[1];
		long most3 = (numbers[2]<<32) + numbers[3];
		System.out.println(least3);
		System.out.println(most3);
		UUID uuid3 = new UUID(most3, least3);
		System.out.println(uuid3);
		System.out.println(uuid.equals(uuid3));
		System.out.println(uuid3.equals(uuid));

		String obfu2 = hashids.encode(leastHi, leastLo+1, mostHi, mostLo, signs);
		System.out.println(obfu2);
	}

}
