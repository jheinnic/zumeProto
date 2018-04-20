package fixtures.delivery.routing.grpc;

import org.springframework.beans.factory.annotation.Autowired;

import io.grpc.stub.StreamObserver;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AcceptPaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AddFillPaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AddFitPaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AddSquarePaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.DeliveryRoutingGrpc;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.DeprecatePaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.RejectPaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.RenamePaintPolicyRequest;
import name.jchein.demo.zumepizza.services.delivery.routing.backend.IDeliveryRoutingDomainService;
import name.jchein.portfolio.common.es.eventuate.IUUIDExtension;
import name.jchein.portfolio.common.grpc.action.BasicReply;
import name.jchein.portfolio.common.grpc.action.StatusCode;
import name.jchein.portfolio.common.grpc.interceptor.EnrichHeaderServerInterceptor;
import net.devh.springboot.autoconfigure.grpc.server.GrpcService;

@GrpcService(value=DeliveryRoutingGrpc.class, interceptors = { EnrichHeaderServerInterceptor.class })
public class DummyDeliveryRoutingService extends DeliveryRoutingGrpc.DeliveryRoutingImplBase {
	private final IUUIDExtension uuidExtension;
	private final IDeliveryRoutingDomainService domainService;

	DummyDeliveryRoutingService(
		@Autowired IDeliveryRoutingDomainService domainService,
		@Autowired IUUIDExtension uuidExtension)
	{
		this.domainService = domainService;
		this.uuidExtension = uuidExtension;
	}

	/**
	*/
	@Override
	public void addFitPaintPolicy(AddFitPaintPolicyRequest request, StreamObserver<BasicReply> responseObserver) {
	}

	/**
	*/
	@Override
	public void addFillPaintPolicy(AddFillPaintPolicyRequest request, StreamObserver<BasicReply> responseObserver) {
	}

	/**
	*/
	@Override
	public void addSquarePaintPolicy(AddSquarePaintPolicyRequest request, StreamObserver<BasicReply> responseObserver) {
		responseObserver.onNext(
			BasicReply.newBuilder().setStatus(StatusCode.OK).build());
		responseObserver.onCompleted();
	}

	/**
	*/
	@Override
	public void renamePaintPolicy(RenamePaintPolicyRequest request, StreamObserver<BasicReply> responseObserver) {
	}

	/**
	*/
	@Override
	public void rejectPaintPolicy(RejectPaintPolicyRequest request, StreamObserver<BasicReply> responseObserver) {
	}

	/**
	*/
	@Override
	public void acceptPaintPolicy(AcceptPaintPolicyRequest request, StreamObserver<BasicReply> responseObserver) {
	}

	/**
	*/
	@Override
	public void deprecatePaintPolicy(DeprecatePaintPolicyRequest request, StreamObserver<BasicReply> responseObserver) {
	}
}
