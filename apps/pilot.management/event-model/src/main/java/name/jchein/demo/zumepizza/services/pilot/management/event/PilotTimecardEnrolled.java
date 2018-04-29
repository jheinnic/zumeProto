package name.jchein.demo.zumepizza.services.pilot.management.event;


import java.util.function.Consumer;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

import lombok.Builder;
import lombok.Value;
import name.jchein.common.validation.constraints.UUIDString;


@Value
@Builder(toBuilder=true)
public class PilotTimecardEnrolled
implements PilotTimecardEvent
{
	@NotNull
	@UUIDString
	String pilotUuid;

	@NotNull
	@NotBlank
	String firstName;

	@NotBlank
	String middleName;

	@NotNull
	@NotBlank
	String lastName;
	
	public static PilotTimecardEnrolled build(Consumer<PilotTimecardEnrolledBuilder> director) {
		final PilotTimecardEnrolledBuilder builder = PilotTimecardEnrolled.builder();
		director.accept(builder);
		return builder.build();
	}
	
	public PilotTimecardEnrolled copy(Consumer<PilotTimecardEnrolledBuilder> director) {
		final PilotTimecardEnrolledBuilder builder = this.toBuilder();
		director.accept(builder);
		return builder.build();
	}
}
