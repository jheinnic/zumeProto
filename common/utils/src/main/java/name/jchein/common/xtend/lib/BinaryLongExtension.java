package name.jchein.common.xtend.lib;


public final class BinaryLongExtension
{
	private BinaryLongExtension()
	{}


	public static byte[] asByteArray(final long l)
	{
		final byte[] b = new byte[8];
		BinaryLongExtension.intoByteArray(l, b);
		return b;
	}


	public static byte[] altAsHiLoByteArray(long msb, long lsb)
	{
		final byte[] b = new byte[16];
		BinaryLongExtension.altIntoLowerHiLoByteArray(lsb, b);
		BinaryLongExtension.altIntoByteArray(msb, b);
		return b;
	}


	public static byte[] asHiLoByteArray(long msb, long lsb)
	{
		final byte[] b = new byte[16];
		BinaryLongExtension.intoLowerHiLoByteArray(lsb, b);
		BinaryLongExtension.intoByteArray(msb, b);
		return b;
	}


	public static void intoByteArray(long l, final byte[] b)
	{
		b[7] = (byte) (l);
		l >>>= 8;
		b[6] = (byte) (l);
		l >>>= 8;
		b[5] = (byte) (l);
		l >>>= 8;
		b[4] = (byte) (l);
		l >>>= 8;
		b[3] = (byte) (l);
		l >>>= 8;
		b[2] = (byte) (l);
		l >>>= 8;
		b[1] = (byte) (l);
		l >>>= 8;
		b[0] = (byte) (l);
	}


	public static void intoByteArray(long l, final byte[] b, final int offset)
	{
		b[offset + 7] = (byte) (l);
		l >>>= 8;
		b[offset + 6] = (byte) (l);
		l >>>= 8;
		b[offset + 5] = (byte) (l);
		l >>>= 8;
		b[offset + 4] = (byte) (l);
		l >>>= 8;
		b[offset + 3] = (byte) (l);
		l >>>= 8;
		b[offset + 2] = (byte) (l);
		l >>>= 8;
		b[offset + 1] = (byte) (l);
		l >>>= 8;
		b[offset] = (byte) (l);
	}


	public static void intoHiLoByteArray(long msb, long lsb, final byte[] b)
	{
		BinaryLongExtension.intoLowerHiLoByteArray(lsb, b);
		BinaryLongExtension.intoByteArray(msb, b);
	}


	public static void intoHiLoByteArray(long msb, long lsb, final byte[] b, int offset)
	{
		BinaryLongExtension.intoByteArray(lsb, b, offset + 8);
		BinaryLongExtension.intoByteArray(msb, b, offset);
	}


	// private static void intoHigherHiLoByteArray(long msb, final byte[] b) {
	// LongExtension.intoByteArray(msb, b);
	// }

	private static void intoLowerHiLoByteArray(long lsb, final byte[] b)
	{
		b[15] = (byte) (lsb);
		lsb >>>= 8;
		b[14] = (byte) (lsb);
		lsb >>>= 8;
		b[13] = (byte) (lsb);
		lsb >>>= 8;
		b[12] = (byte) (lsb);
		lsb >>>= 8;
		b[11] = (byte) (lsb);
		lsb >>>= 8;
		b[10] = (byte) (lsb);
		lsb >>>= 8;
		b[9] = (byte) (lsb);
		lsb >>>= 8;
		b[8] = (byte) (lsb);
	}


	private static void altIntoByteArray(long lsb, final byte[] b)
	{
		b[7] = (byte) (lsb);
		b[6] = (byte) (lsb >>> 8);
		b[5] = (byte) (lsb >>> 16);
		b[4] = (byte) (lsb >>> 24);
		b[3] = (byte) (lsb >>> 32);
		b[2] = (byte) (lsb >>> 40);
		b[1] = (byte) (lsb >>> 48);
		b[0] = (byte) (lsb >>> 56);
	}

	private static void altIntoLowerHiLoByteArray(long lsb, final byte[] b)
	{
		b[15] = (byte) (lsb);
		b[14] = (byte) (lsb >>> 8);
		b[13] = (byte) (lsb >>> 16);
		b[12] = (byte) (lsb >>> 24);
		b[11] = (byte) (lsb >>> 32);
		b[10] = (byte) (lsb >>> 40);
		b[9] = (byte) (lsb >>> 48);
		b[8] = (byte) (lsb >>> 56);
	}


	public static long asLong(final byte[] b)
	{
		return (((long) b[7]) & 0xFF) +
			((((long) b[6]) & 0xFF) << 8) + ((((long) b[5]) & 0xFF) << 16) +
			((((long) b[4]) & 0xFF) << 24) + ((((long) b[3]) & 0xFF) << 32) +
			((((long) b[2]) & 0xFF) << 40) + ((((long) b[1]) & 0xFF) << 48) +
			((((long) b[0]) & 0xFF) << 56);
	}


	public static long asLong(final byte[] b, final int offset)
	{
		return (((long) b[offset + 7]) & 0xFF) +
			((((long) b[offset + 6]) & 0xFF) << 8) + ((((long) b[offset + 5]) & 0xFF) << 16) +
			((((long) b[offset + 4]) & 0xFF) << 24) + ((((long) b[offset + 3]) & 0xFF) << 32) +
			((((long) b[offset + 2]) & 0xFF) << 40) + ((((long) b[offset + 1]) & 0xFF) << 48) +
			((((long) b[offset]) & 0xFF) << 56);
	}


	public static long[] asHiLoPair(final byte[] b)
	{
		final long[] pair = new long[2];
		BinaryLongExtension.intoHiLoPair(b, pair);
		return pair;
	}


	public static void intoHiLoPair(final byte[] b, final long[] pair)
	{
		pair[1] = BinaryLongExtension.asLowerHiLoPairLong(b);
		pair[0] = BinaryLongExtension.asLong(b);
	}


	public static void intoHiLoPair(final byte[] b, final int offset, final long[] pair)
	{
		pair[1] = BinaryLongExtension.asLong(b, offset + 8);
		pair[0] = BinaryLongExtension.asLong(b, offset);
	}


	public static void intoHiLoPair(final byte[] b, final long[] pair, final int offset)
	{
		pair[offset + 1] = BinaryLongExtension.asLowerHiLoPairLong(b);
		pair[offset] = BinaryLongExtension.asLong(b);
	}


	public static void
	intoHiLoPair(final byte[] b, final int offsetB, final long[] pair, final int offsetL)
	{
		pair[offsetL + 1] = BinaryLongExtension.asLong(b, offsetB + 8);
		pair[offsetL] = BinaryLongExtension.asLong(b, offsetB);
	}


	public static long asLowerHiLoPairLong(final byte[] b)
	{
		return (((long) b[15]) & 0xFF) +
			((((long) b[14]) & 0xFF) << 8) + ((((long) b[13]) & 0xFF) << 16) +
			((((long) b[12]) & 0xFF) << 24) + ((((long) b[11]) & 0xFF) << 32) +
			((((long) b[10]) & 0xFF) << 40) + ((((long) b[9]) & 0xFF) << 48) +
			((((long) b[8]) & 0xFF) << 56);
	}

	public static long asLowerHiLoPairLong(final byte[] b, final int offset)
	{
		return BinaryLongExtension.asLong(b, offset + 8);
	}
	
	public static long asHigherHiLoPairLong(final byte[] b)
	{
		return BinaryLongExtension.asLong(b);
	}

	public static long asHigherHiLoPairLong(final byte[] b, final int offset)
	{
		return BinaryLongExtension.asLong(b, offset);
	}
}
