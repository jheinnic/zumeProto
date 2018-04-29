package name.jchein.demo.zumepizza.services.pilot.management.backend;

import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;

import io.eventuate.EventHandlerContext;
import io.eventuate.EventHandlerMethod;
import io.eventuate.EventSubscriber;
import name.jchein.common.identity.IUUIDGenerator;
import name.jchein.demo.zumepizza.services.pilot.management.domain.EnrollPilotTimecard;
import name.jchein.demo.zumepizza.services.pilot.management.domain.PilotTimecard;
import name.jchein.demo.zumepizza.services.pilot.management.event.PilotTimecardEnrolled;

@EventSubscriber(id="newPilotTimecardEnrollment")
public class NewEmployeeEnrollmentHandler
{
	private IUUIDGenerator uuidGenerator;
	
	public NewEmployeeEnrollmentHandler(
		@Autowired IUUIDGenerator uuidGenerator)
	{
		this.uuidGenerator = uuidGenerator;
	}

	@EventHandlerMethod
	public CompletableFuture<?> enrollNewEmployee(EventHandlerContext<PilotTimecardEnrolled> evtCxt) {
		String employeeId = evtCxt.getEntityId();
		PilotTimecardEnrolled evt = evtCxt.getEvent();
		 
		return evtCxt.save(
			PilotTimecard.class, 
			EnrollPilotTimecard.build( (builder) -> {
				builder.pilotUuid(employeeId)
				.firstName(evt.getFirstName())
				.middleName(evt.getMiddleName())
				.lastName(evt.getLastName());
			}),
			Optional.of(
				this.uuidGenerator.nextIdentifier().toString()
			)
		);
	}
}
