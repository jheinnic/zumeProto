package fixtures.pilot.routing.grpc;

import io.grpc.stub.StreamObserver;
import name.jchein.demo.zumepizza.grpc.proto.pilot.management.CreatePilotTimecardRequest;
import name.jchein.demo.zumepizza.grpc.proto.pilot.management.PilotTimecardGrpc;
import name.jchein.portfolio.common.grpc.action.BasicReply;
import name.jchein.portfolio.common.grpc.action.StatusCode;
import name.jchein.portfolio.common.grpc.interceptor.EnrichHeaderServerInterceptor;
import net.devh.springboot.autoconfigure.grpc.server.GrpcService;

@GrpcService(value=PilotTimecardGrpc.class, interceptors = { EnrichHeaderServerInterceptor.class })
public class DummyPilotTimecardService extends PilotTimecardGrpc.PilotTimecardImplBase {
//	private final IUUIDExtension uuidExtension;
//	private final IPilotTimecardDomainService domainService;

	DummyPilotTimecardService( )
//		@Autowired IPilotTimecardDomainService domainService,
//		@Autowired IUUIDExtension uuidExtension)
	{
//		this.domainService = domainService;
//		this.uuidExtension = uuidExtension;
	}

	/**
	*/
	@Override
	public void
	enrollPilot(CreatePilotTimecardRequest request, StreamObserver<BasicReply> responseObserver)
	{
		responseObserver.onNext(
			BasicReply.newBuilder().setStatus(StatusCode.OK).build());
		responseObserver.onCompleted();
	}
}
