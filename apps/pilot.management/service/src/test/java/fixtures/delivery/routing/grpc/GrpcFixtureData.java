package fixtures.delivery.routing.grpc;

import java.util.UUID;

import lombok.experimental.UtilityClass;

@UtilityClass
public class GrpcFixtureData
{
	public static final String VALID_ID_ONE_STRING = "6aa802fe-3871-11e8-aec1-e4ce8f47a632"; 
	public static final UUID VALID_ID_ONE_UUID = UUID.fromString(VALID_ID_ONE_STRING);

	public static final String VALID_ID_TWO_STRING = "6cc802ff-3871-11e8-aec1-e4ce8f47a632"; 
	public static final UUID VALID_ID_TWO_UUID = UUID.fromString(VALID_ID_TWO_STRING);

	public static final String VALID_ID_THREE_STRING = "6dd80300-3871-11e8-aec1-e4ce8f47a632"; 
	public static final UUID VALID_ID_THREE_UUID = UUID.fromString(VALID_ID_THREE_STRING);

	public static final String VALID_ID_FOUR_STRING = "6ff80301-3871-11e8-aec1-e4ce8f47a632"; 
	public static final UUID VALID_ID_FOUR_UUID = UUID.fromString(VALID_ID_FOUR_STRING);

	public static final String VALID_NAME_ONE = "nameOne";
	public static final String VALID_NAME_TWO = "nameTwo";
	public static final String VALID_NAME_THREE = "nameThree";
	public static final String VALID_NAME_FOUR = "nameFour";
}
