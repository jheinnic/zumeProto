package fixtures;

import io.grpc.stub.StreamObserver;
import name.jchein.demo.zumepizza.services.pizzaops.delivery.grpc.proto.CreateExampleRequest;
import name.jchein.demo.zumepizza.services.pizzaops.delivery.grpc.proto.ExampleGrpc;
import name.jchein.portfolio.common.grpc.action.BasicReply;
import name.jchein.portfolio.common.grpc.action.StatusCode;
import name.jchein.portfolio.common.grpc.interceptor.EnrichHeaderServerInterceptor;
import net.devh.springboot.autoconfigure.grpc.server.GrpcService;

@GrpcService(value=ExampleGrpc.class, interceptors = { EnrichHeaderServerInterceptor.class })
public class DummyExampleService extends ExampleGrpc.ExampleImplBase {
//	private final IUUIDExtension uuidExtension;
//	private final IExampleDomainService domainService;

	DummyExampleService( )
//		@Autowired IExampleDomainService domainService,
//		@Autowired IUUIDExtension uuidExtension)
	{
//		this.domainService = domainService;
//		this.uuidExtension = uuidExtension;
	}

	/**
	*/
	@Override
	public void
	createExample(CreateExampleRequest request, StreamObserver<BasicReply> responseObserver)
	{
		responseObserver.onNext(
			BasicReply.newBuilder().setStatus(StatusCode.OK).build());
		responseObserver.onCompleted();
	}
}
