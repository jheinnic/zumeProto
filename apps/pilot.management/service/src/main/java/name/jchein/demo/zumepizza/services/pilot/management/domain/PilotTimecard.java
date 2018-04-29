package name.jchein.demo.zumepizza.services.pilot.management.domain;


import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.executable.ExecutableType;
import javax.validation.executable.ValidateOnExecution;

import org.hibernate.validator.constraints.NotBlank;

import io.eventuate.Event;
import io.eventuate.EventUtil;
import io.eventuate.ReflectiveMutableCommandProcessingAggregate;
import name.jchein.common.validation.constraints.UUIDString;
import name.jchein.demo.zumepizza.services.pilot.management.event.PilotTimecardEnrolled;


@ValidateOnExecution(type = ExecutableType.NON_GETTER_METHODS)
public class PilotTimecard
extends ReflectiveMutableCommandProcessingAggregate<PilotTimecard, PilotTimecardCommand>
{
	// Convenience value for no-op commands
	// private static final List<Event> EMPTY_LIST =
	// ImmutableList.<Event> builder().build();

	@NotNull
	@UUIDString
	String employeeUuid;

	@NotNull
	@NotBlank
	String firstName;

	@NotNull
	String middleName;

	@NotNull
	@NotBlank
	String lastName;


	void apply(@Valid PilotTimecardEnrolled evt)
	{
		this.employeeUuid = evt.getPilotUuid();
		this.firstName = evt.getFirstName();
		this.middleName = evt.getMiddleName();
		this.lastName = evt.getLastName();
	}


	List<Event> process(@Valid EnrollPilotTimecard cmd)
	{
		return EventUtil.events(PilotTimecardEnrolled.build((it) -> {
			it.firstName(cmd.getFirstName())
				.middleName(cmd.getMiddleName())
				.lastName(cmd.getLastName())
				.pilotUuid(cmd.getPilotUuid());
		}));
	}
}
