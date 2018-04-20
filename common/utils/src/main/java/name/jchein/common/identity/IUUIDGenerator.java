package name.jchein.common.identity;


import java.util.UUID;

/**
 * Interface for the allocation of UUID values using the version 1 format form RFC 4122, represented as a compact 16byte
 * binary sequence.
 * 
 * This algorithm and representation are chosen as an ideal balance between performance and uniqueness requirements.
 * Random spread favors uniqueness, but hurts performance as InnoDB indices perform best when there is a less variation
 * between any two keys that are generated near the same timepoint.
 * 
 * Version 1 uses a 48 bit location region and a little less than 80 bits for a temporal sequence. The rolling time bits
 * provide enough uniformity in the rest of the sequence to help the resulting identifiers perform nearly as well as a
 * server-maintained integer sequence.
 * 
 * As a future enhancement when it becomes necessary to spread computation across a variety of nodes, this component
 * should be enhanced to use a Zookeeper/Curator group membership and elect a leader to assign unique "location" bits to
 * each live node. AS it stands, collisions are highly improbable, but total impossibility is even better.
 * 
 * @author jheinnic
 *
 */
public interface IUUIDGenerator
{
	byte[] nextIdentiferAsBytes();


	void nextIdentifierAsBytes(byte[] bytes);


	void nextIdentifierAsBytes(byte[] bytes, int offset);


	UUID nextIdentifier();


	byte[] toBytes(UUID uuid);

	/**
	 * @param uuid
	 * @param bytes
	 *           A 16-byte array whose contents will be overwritten with the UUID in question.
	 */
	void toBytes(UUID uuid, byte[] bytes);


	/**
	 * @param uuid
	 * @param bytes
	 *           A 16-byte array whose contents will be overwritten with the UUID in question.
	 */
	void toBytes(UUID uuid, byte[] bytes, int offset);


	UUID toUUID(byte[] bytes);


	UUID toUUID(byte[] bytes, int offset);
}
