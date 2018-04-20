package name.jchein.common.xtend.lib

import java.util.UUID;
import static extension name.jchein.common.xtend.lib.BinaryLongExtension.*
import static extension java.util.Arrays.toString

class TestBinaryLongExtension {
	def static void main(String[] args) {
		val UUID foo = UUID.randomUUID();
		println(foo);

		val fooBytes = foo.mostSignificantBits.asHiLoByteArray(foo.leastSignificantBits)
		println(fooBytes.toString())

		val fooBytesTwo = foo.mostSignificantBits.altAsHiLoByteArray(foo.leastSignificantBits)
		println(fooBytesTwo.toString())
		
		val long[] hiLoPair = fooBytes.asHiLoPair()
		println(hiLoPair.toString())

		val hiLoPairTwo = fooBytes.asHiLoPair()
		println(hiLoPairTwo.toString())
		
		println(new UUID(hiLoPair.get(0), hiLoPair.get(1)))
		println(new UUID(hiLoPairTwo.get(0), hiLoPairTwo.get(1)))
	}
}