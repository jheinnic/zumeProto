package name.jchein.demo.zumepizza.services.delivery.routing;


import static org.assertj.core.api.Assertions.assertThat;

import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.rules.SpringClassRule;
import org.springframework.test.context.junit4.rules.SpringMethodRule;

import fixtures.delivery.routing.grpc.EnableDeliveryRoutingGrpcUnit;
import fixtures.delivery.routing.grpc.GrpcFixtureData;
import name.jchein.common.identity.EnableUUIDGenerator;
import name.jchein.common.identity.IUUIDGenerator;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AddSquarePaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.DeliveryRoutingGrpc;
import name.jchein.demo.zumepizza.services.delivery.routing.backend.DeliveryRoutingDomainService;
import name.jchein.portfolio.common.es.eventuate.IUUIDExtension;
import name.jchein.portfolio.common.grpc.action.BasicReply;
import name.jchein.portfolio.common.grpc.action.StatusCode;


@EnableDeliveryRoutingGrpcUnit
@EnableUUIDGenerator
public class GrpcWiringUnitTest
{
	@ClassRule
	public static final SpringClassRule springClassRule = new SpringClassRule();

	@Rule
	public final SpringMethodRule springMethodRule = new SpringMethodRule();

	@MockBean
	public DeliveryRoutingDomainService domainService;

	@MockBean
	public IUUIDExtension identityExtension;

	@Autowired
	public DeliveryRoutingGrpc.DeliveryRoutingBlockingStub blockingClient;

	@Autowired
	public IUUIDGenerator uuidGenerator;


	@Test
	public void testIt()
	{
		if (this.domainService == null) { throw new RuntimeException(); }

		BasicReply reply =
			this.blockingClient.addSquarePaintPolicy(
				AddSquarePaintPolicyRequest.newBuilder()
					.setId(GrpcFixtureData.VALID_ID_ONE_STRING)
					.setDisplayName(GrpcFixtureData.VALID_NAME_ONE)
					.setPaintLength(640)
					.setModelCenterX(0.0)
					.setModelCenterY(0.0)
					.setModelScale(1.0)
					.build());

		assertThat(reply.getStatus()).as("Basic reply status")
			.isEqualTo(StatusCode.OK);
	}
}
