package name.jchein.demo.zumepizza.services.delivery.routing.grpc;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import io.eventuate.AggregateRepository;
import io.eventuate.EntityWithIdAndVersion;
import io.grpc.stub.StreamObserver;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AcceptServiceDayRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AddFillServiceDayRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AddFitServiceDayRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.AddSquareServiceDayRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.DeprecateServiceDayRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.RejectServiceDayRequest;
import name.jchein.demo.zumepizza.grpc.proto.delivery.routing.RenameServiceDayRequest;
import name.jchein.demo.zumepizza.services.delivery.routing.command.RequestServiceDay;
import name.jchein.demo.zumepizza.services.delivery.routing.command.ServiceDayCommand;
import name.jchein.demo.zumepizza.services.delivery.routing.domain.ServiceDay;
import name.jchein.demo.zumepizza.services.delivery.routing.grpc.proto.DeliveryRoutingGrpc;
import name.jchein.portfolio.common.es.eventuate.IUUIDExtension;
import name.jchein.portfolio.common.grpc.action.BasicReply;
import name.jchein.portfolio.common.grpc.action.StatusCode;
import name.jchein.portfolio.common.grpc.interceptor.EnrichHeaderServerInterceptor;
import net.devh.springboot.autoconfigure.grpc.server.GrpcService;

@GrpcService(value=DeliveryRoutingGrpc.class, interceptors = { EnrichHeaderServerInterceptor.class })
public class DeliveryRoutingGrpcService extends DeliveryRoutingGrpc.DeliveryRoutingImplBase {
	private final AggregateRepository<ServiceDay, ServiceDayCommand> aggregateRepo;
	private final IUUIDExtension uuidExtension;

	DeliveryRoutingGrpcService(
		@Autowired AggregateRepository<ServiceDay, ServiceDayCommand> aggregateRepo,
		@Autowired IUUIDExtension uuidExtension)
	{
		this.aggregateRepo = aggregateRepo;
		this.uuidExtension = uuidExtension;
	}

	/**
	*/
	@Override
	public void addFitServiceDay(AddFitServiceDayRequest request, StreamObserver<BasicReply> responseObserver) {
		this.aggregateRepo.save(
			RequestServiceDay.build((bldr) -> {
				BeanUtils.copyProperties(request, bldr);
			}),
			this.uuidExtension.toSaveOptions(request.getId())
		)
		.handle((EntityWithIdAndVersion<ServiceDay> idVersion, Throwable err) -> {
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
	public void addFillServiceDay(AddFillServiceDayRequest request, StreamObserver<BasicReply> responseObserver) {
	}

	/**
	*/
	@Override
	public void addSquareServiceDay(AddSquareServiceDayRequest request, StreamObserver<BasicReply> responseObserver) {
	}

	/**
	*/
	@Override
	public void renameServiceDay(RenameServiceDayRequest request, StreamObserver<BasicReply> responseObserver) {
	}

	/**
	*/
	@Override
	public void rejectServiceDay(RejectServiceDayRequest request, StreamObserver<BasicReply> responseObserver) {
	}

	/**
	*/
	@Override
	public void acceptServiceDay(AcceptServiceDayRequest request, StreamObserver<BasicReply> responseObserver) {
	}

	/**
	*/
	@Override
	public void deprecateServiceDay(DeprecateServiceDayRequest request, StreamObserver<BasicReply> responseObserver) {
	}
}
