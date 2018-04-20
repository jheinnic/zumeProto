package name.jchein.common.xtend.lib;

import java.util.Arrays;
import java.util.UUID;
import name.jchein.common.xtend.lib.BinaryLongExtension;
import org.eclipse.xtext.xbase.lib.InputOutput;

@SuppressWarnings("all")
public class TestBinaryLongExtension {
  public static void main(final String[] args) {
    final UUID foo = UUID.randomUUID();
    InputOutput.<UUID>println(foo);
    final byte[] fooBytes = BinaryLongExtension.asHiLoByteArray(foo.getMostSignificantBits(), foo.getLeastSignificantBits());
    InputOutput.<String>println(Arrays.toString(fooBytes));
    final byte[] fooBytesTwo = BinaryLongExtension.altAsHiLoByteArray(foo.getMostSignificantBits(), foo.getLeastSignificantBits());
    InputOutput.<String>println(Arrays.toString(fooBytesTwo));
    final long[] hiLoPair = BinaryLongExtension.asHiLoPair(fooBytes);
    InputOutput.<String>println(Arrays.toString(hiLoPair));
    final long[] hiLoPairTwo = BinaryLongExtension.asHiLoPair(fooBytes);
    InputOutput.<String>println(Arrays.toString(hiLoPairTwo));
    long _get = hiLoPair[0];
    long _get_1 = hiLoPair[1];
    UUID _uUID = new UUID(_get, _get_1);
    InputOutput.<UUID>println(_uUID);
    long _get_2 = hiLoPairTwo[0];
    long _get_3 = hiLoPairTwo[1];
    UUID _uUID_1 = new UUID(_get_2, _get_3);
    InputOutput.<UUID>println(_uUID_1);
  }
}
