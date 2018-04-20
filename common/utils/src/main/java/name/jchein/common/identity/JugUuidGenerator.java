package name.jchein.common.identity;


import java.nio.ByteBuffer;
import java.util.UUID;

import com.fasterxml.uuid.EthernetAddress;
import com.fasterxml.uuid.Generators;
import com.fasterxml.uuid.impl.TimeBasedGenerator;
import com.google.common.base.Preconditions;


public class JugUuidGenerator
implements IUUIDGenerator
{
	private final TimeBasedGenerator sequence =
		Generators.timeBasedGenerator(
			EthernetAddress.fromInterface());


	@Override
	public byte[] nextIdentiferAsBytes()
	{
		return this.toBytes(sequence.generate());
	}


	@Override
	public void nextIdentifierAsBytes(byte[] bytes)
	{
		Preconditions.checkNotNull(bytes);
		Preconditions.checkArgument(bytes.length >= 16);
		doIdentifierToBytes(sequence.generate(), ByteBuffer.wrap(bytes, 0, 16));
	}


	@Override
	public void nextIdentifierAsBytes(byte[] bytes, int offset)
	{
		Preconditions.checkNotNull(bytes);
		Preconditions.checkArgument(bytes.length - offset >= 16);
		doIdentifierToBytes(sequence.generate(), ByteBuffer.wrap(bytes, offset, 16));
	}


	@Override
	public UUID nextIdentifier()
	{
		return sequence.generate();
	}


	private void doIdentifierToBytes(UUID identifier, ByteBuffer buffer)
	{
		buffer.putLong(identifier.getMostSignificantBits());
		buffer.putLong(identifier.getLeastSignificantBits());
	}


	private UUID doBytesToIdentifier(ByteBuffer buffer)
	{
		return new UUID(buffer.getLong(), buffer.getLong());
	}

	@Override
	public byte[] toBytes(UUID uuid)
	{
		Preconditions.checkNotNull(uuid);
		final byte[] bytes = new byte[16];
		doIdentifierToBytes(uuid, ByteBuffer.wrap(bytes));
		return bytes;
	}


	@Override
	public void toBytes(UUID uuid, byte[] bytes)
	{
		Preconditions.checkNotNull(uuid);
		Preconditions.checkNotNull(bytes);
		Preconditions.checkArgument(bytes.length >= 16);

		doIdentifierToBytes(uuid, ByteBuffer.wrap(bytes));
	}


	@Override
	public void toBytes(UUID uuid, byte[] bytes, int offset)
	{
		Preconditions.checkNotNull(uuid);
		Preconditions.checkNotNull(bytes);
		Preconditions.checkArgument(bytes.length - offset >= 16);

		doIdentifierToBytes(uuid, ByteBuffer.wrap(bytes, offset, 16));
	}


	@Override
	public UUID toUUID(byte[] bytes)
	{
		Preconditions.checkNotNull(bytes);
		Preconditions.checkArgument(bytes.length >= 16);
		final ByteBuffer buffer = ByteBuffer.wrap(bytes, 0, 16);
		return this.doBytesToIdentifier(buffer);
	}


	@Override
	public UUID toUUID(byte[] bytes, int offset)
	{
		Preconditions.checkNotNull(bytes);
		Preconditions.checkArgument(bytes.length - offset >= 16);
		final ByteBuffer buffer = ByteBuffer.wrap(bytes, offset, 16);
		return this.doBytesToIdentifier(buffer);
	}

}
