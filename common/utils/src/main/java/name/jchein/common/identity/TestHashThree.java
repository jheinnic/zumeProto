package name.jchein.common.identity;

import java.util.UUID;

import org.hashids.Hashids;

public class TestHashThree {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		UUID uuid = UUID.randomUUID();
		System.out.println(uuid);

		System.out.println("Least");
		long least = uuid.getLeastSignificantBits();
		System.out.println(least);
		long leastLo = ((int) least) & 0x7FFFFFFF;
		System.out.println(leastLo);
		long leastHi = ((int) (least >>> 31)) & 0x7FFFFFFF;
		System.out.println(leastHi);
		long middle = (int) (least >>> 33) & 0x60000000;
		System.out.println(middle);
		long least2 = (((long) middle) << 33) + (((long) leastHi) << 31);
		System.out.println(least2);
		least2 = least2 + leastLo;
		System.out.println(least2);
		
		System.out.println("Most");
		long most = uuid.getMostSignificantBits();
		System.out.println(most);
		middle += ((int) most) & 0x1FFFFFFF;
		System.out.println(middle);
		long mostLo = ((int) (most >>> 29)) & 0x7FFFFFFF;
		System.out.println(mostLo);
		long mostHi = ((int) (most >>> 60)) & 0x7FFFFFFF;
		System.out.println(mostHi);
		long most2 = (((long) mostLo) << 29) + (((long) mostHi) << 60);
		System.out.println(most2);
		most2 = most2 + (middle & 0x1FFFFFFF);
		System.out.println(most2);
		
		Hashids hashids = new Hashids("this is my pepper");
		String obfu = hashids.encode(leastLo, leastHi, middle, mostLo, mostHi);
		System.out.println(
				String.format("%d %d %d %d %d", leastLo, leastHi, middle, mostLo, mostHi));
		System.out.println(obfu);
		long[] numbers = hashids.decode(obfu);
		System.out.println(
				String.format("%d %d %d %d %d", numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]));
		
		long midLeast = numbers[2] & 0x60000000;
		long least3 = numbers[0] + (numbers[1] << 31) + (midLeast << 33);
		long most3 = (numbers[2] - midLeast) + (numbers[3] << 29) + (numbers[4] << 60);
		System.out.println(least3);
		System.out.println(most3);
		UUID uuid3 = new UUID(most3, least3);
		System.out.println(uuid3);
		System.out.println(uuid.equals(uuid3));
		System.out.println(uuid3.equals(uuid));

		String obfu2 = hashids.encode(leastHi, leastLo, middle + 0x2000, mostHi, mostLo);
		System.out.println(obfu2);
	}

}
