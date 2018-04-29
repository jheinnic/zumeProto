package name.jchein.demo.zumepizza.services.pilot.management.grpc;


import org.springframework.beans.factory.annotation.Autowired;

import io.eventuate.AggregateRepository;
import io.eventuate.EntityWithIdAndVersion;
import io.grpc.stub.StreamObserver;
import name.jchein.demo.zumepizza.grpc.proto.pilot.management.CreatePilotTimecardRequest;
import name.jchein.demo.zumepizza.grpc.proto.pilot.management.PilotTimecardGrpc;
import name.jchein.demo.zumepizza.services.pilot.management.domain.EnrollPilotTimecard;
import name.jchein.demo.zumepizza.services.pilot.management.domain.PilotTimecard;
import name.jchein.demo.zumepizza.services.pilot.management.domain.PilotTimecardCommand;
import name.jchein.portfolio.common.es.eventuate.IUUIDExtension;
import name.jchein.portfolio.common.grpc.action.BasicReply;
import name.jchein.portfolio.common.grpc.action.StatusCode;
import name.jchein.portfolio.common.grpc.interceptor.EnrichHeaderServerInterceptor;
import net.devh.springboot.autoconfigure.grpc.server.GrpcService;


@GrpcService(value = PilotTimecardGrpc.class, interceptors = {
	EnrichHeaderServerInterceptor.class
})
public class PilotTimecardGrpcService
extends PilotTimecardGrpc.PilotTimecardImplBase
{
	private final AggregateRepository<PilotTimecard, PilotTimecardCommand> aggregateRepo;
	private final IUUIDExtension uuidExtension;


	PilotTimecardGrpcService(
		@Autowired AggregateRepository<PilotTimecard, PilotTimecardCommand> aggregateRepo,
		@Autowired IUUIDExtension uuidExtension )
	{
		this.aggregateRepo = aggregateRepo;
		this.uuidExtension = uuidExtension;
	}


	/**
	*/
	@Override
	public void
	enrollPilot(CreatePilotTimecardRequest request, StreamObserver<BasicReply> responseObserver)
	{
		this.aggregateRepo.save(EnrollPilotTimecard.build((bldr) -> {
			bldr.pilotUuid(request.getId())
				.firstName(request.getFirstName())
				.middleName(request.getMiddleName())
				.lastName(request.getLastName());
		}), this.uuidExtension.toSaveOptions(request.getId()))
			.handle((EntityWithIdAndVersion<PilotTimecard> idVersion, Throwable err) -> {
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
}
