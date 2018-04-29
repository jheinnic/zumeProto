package name.jchein.demo.zumepizza.services.pilot.management;


import static org.assertj.core.api.Assertions.assertThat;

import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.rules.SpringClassRule;
import org.springframework.test.context.junit4.rules.SpringMethodRule;

import fixtures.pilot.routing.grpc.EnablePilotTimecardGrpcUnit;
import fixtures.pilot.routing.grpc.GrpcFixtureData;
import name.jchein.common.identity.EnableUUIDGenerator;
import name.jchein.demo.zumepizza.grpc.proto.pilot.management.CreatePilotTimecardRequest;
import name.jchein.demo.zumepizza.grpc.proto.pilot.management.PilotTimecardGrpc;
import name.jchein.demo.zumepizza.services.pilot.management.backend.PilotTimecardDomainService;
import name.jchein.portfolio.common.es.eventuate.IUUIDExtension;
import name.jchein.portfolio.common.grpc.action.BasicReply;
import name.jchein.portfolio.common.grpc.action.StatusCode;


@EnablePilotTimecardGrpcUnit
@EnableUUIDGenerator
public class GrpcWiringUnitTest
{
	@ClassRule
	public static final SpringClassRule springClassRule = new SpringClassRule();

	@Rule
	public final SpringMethodRule springMethodRule = new SpringMethodRule();

	@MockBean
	public PilotTimecardDomainService domainService;

	@MockBean
	public IUUIDExtension identityExtension;

	@Autowired
	public PilotTimecardGrpc.PilotTimecardBlockingStub blockingClient;

//	@Autowired
//	public IUUIDGenerator uuidGenerator;


	@Test
	public void testIt()
	{
		if (this.domainService == null) { throw new RuntimeException(); }

		BasicReply reply =
			this.blockingClient.enrollPilot(
				CreatePilotTimecardRequest.newBuilder()
					.setId(GrpcFixtureData.VALID_TIMECARD_ID_ONE_STRING)
					.setPilotId(GrpcFixtureData.VALID_PILOT_ID_ONE_STRING)
					.setFirstName(GrpcFixtureData.VALID_FIRST_NAME_ONE)
					.setMiddleName(GrpcFixtureData.VALID_MIDDLE_NAME_ONE)
					.setLastName(GrpcFixtureData.VALID_LAST_NAME_ONE)
					.build());

		assertThat(reply.getStatus()).as("Basic reply status")
			.isEqualTo(StatusCode.OK);
	}
}
