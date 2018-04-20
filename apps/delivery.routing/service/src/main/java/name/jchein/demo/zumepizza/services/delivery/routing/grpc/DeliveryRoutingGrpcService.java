package name.jchein.demo.zumepizza.services.delivery.routing.grpc;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import io.eventuate.AggregateRepository;
import io.eventuate.EntityWithIdAndVersion;
import io.grpc.stub.StreamObserver;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AcceptPaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AddFillPaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AddFitPaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AddSquarePaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.DeliveryRoutingGrpc;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.DeprecatePaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.RejectPaintPolicyRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.RenamePaintPolicyRequest;
import name.jchein.demo.zumepizza.services.delivery.routing.command.PaintPolicyCommand;
import name.jchein.demo.zumepizza.services.delivery.routing.command.RequestPaintPolicy;
import name.jchein.demo.zumepizza.services.delivery.routing.domain.PaintPolicy;
import name.jchein.portfolio.common.es.eventuate.IUUIDExtension;
import name.jchein.portfolio.common.grpc.action.BasicReply;
import name.jchein.portfolio.common.grpc.action.StatusCode;
import name.jchein.portfolio.common.grpc.interceptor.EnrichHeaderServerInterceptor;
import net.devh.springboot.autoconfigure.grpc.server.GrpcService;

@GrpcService(value=DeliveryRoutingGrpc.class, interceptors = { EnrichHeaderServerInterceptor.class })
public class DeliveryRoutingGrpcService extends DeliveryRoutingGrpc.DeliveryRoutingImplBase {
	private final AggregateRepository<PaintPolicy, PaintPolicyCommand> aggregateRepo;
	private final IUUIDExtension uuidExtension;

	DeliveryRoutingGrpcService(
		@Autowired AggregateRepository<PaintPolicy, PaintPolicyCommand> aggregateRepo,
		@Autowired IUUIDExtension uuidExtension)
	{
		this.aggregateRepo = aggregateRepo;
		this.uuidExtension = uuidExtension;
	}

	/**
	*/
	@Override
	public void addFitPaintPolicy(AddFitPaintPolicyRequest request, StreamObserver<BasicReply> responseObserver) {
		this.aggregateRepo.save(
			RequestPaintPolicy.build((bldr) -> {
				BeanUtils.copyProperties(request, bldr);
			}),
			this.uuidExtension.toSaveOptions(request.getId())
		)
		.handle((EntityWithIdAndVersion<PaintPolicy> idVersion, Throwable err) -> {
			if (idVersion != null) {
				responseObserver.onNext(
					BasicReply.newBuilder()
						.setMessage("OK")
						.setStatus(StatusCode.OK)
						.build());
				responseObserver.onCompleted();
			} else {
				responseObserver.onNext(
					BasicReply.newBuilder()
						.setMessage(err.getMessage())
						.setStatus(StatusCode.INTERNAL_ERROR)
						.build());
				responseObserver.onError(err);
			}

			return responseObserver;
		});
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
