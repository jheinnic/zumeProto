package name.jchein.demo.zumepizza.services.resolution.registry.service;


import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import io.eventuate.AggregateRepository;
import io.eventuate.EntityWithIdAndVersion;
import io.grpc.stub.StreamObserver;
import name.jchein.demo.zumepizza.services.resolution.registry.command.PaintPolicyCommand;
import name.jchein.demo.zumepizza.services.resolution.registry.command.RequestPaintPolicy;
import name.jchein.demo.zumepizza.services.resolution.registry.domain.PaintPolicy;
import name.jchein.demo.zumepizza.services.resolution.registry.grpc.AcceptPaintPolicyRequest;
import name.jchein.demo.zumepizza.services.resolution.registry.grpc.AddFillPaintPolicyRequest;
import name.jchein.demo.zumepizza.services.resolution.registry.grpc.AddFitPaintPolicyRequest;
import name.jchein.demo.zumepizza.services.resolution.registry.grpc.AddSquarePaintPolicyRequest;
import name.jchein.demo.zumepizza.services.resolution.registry.grpc.DeprecatePaintPolicyRequest;
import name.jchein.demo.zumepizza.services.resolution.registry.grpc.RejectPaintPolicyRequest;
import name.jchein.demo.zumepizza.services.resolution.registry.grpc.RenamePaintPolicyRequest;
import name.jchein.demo.zumepizza.services.resolution.registry.grpc.ResolutionRegistryGrpc;
import name.jchein.portfolio.common.es.eventuate.IUUIDExtension;
import name.jchein.portfolio.common.grpc.action.BasicReply;
import name.jchein.portfolio.common.grpc.action.StatusCode;
import name.jchein.portfolio.common.grpc.interceptor.EnrichHeaderServerInterceptor;


@GRpcService(interceptors = {
   EnrichHeaderServerInterceptor.class
})
public class ResolutionRegistryService
extends ResolutionRegistryGrpc.ResolutionRegistryImplBase
{
   private final AggregateRepository<PaintPolicy, PaintPolicyCommand> aggregateRepo;
   private final IUUIDExtension uuidExtension;


   ResolutionRegistryService(
      @Autowired AggregateRepository<PaintPolicy, PaintPolicyCommand> aggregateRepo,
      @Autowired IUUIDExtension uuidExtension )
   {
      this.aggregateRepo = aggregateRepo;
      this.uuidExtension = uuidExtension;
   }


   /**
    */
   public void addFitPaintPolicy(
      AddFitPaintPolicyRequest request, StreamObserver<BasicReply> responseObserver)
   {
      this.aggregateRepo.save(RequestPaintPolicy.build((bldr) -> {
         BeanUtils.copyProperties(request, bldr);
      }), this.uuidExtension.toSaveOptions(request.getId()))
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
   public void addFillPaintPolicy(
      AddFillPaintPolicyRequest request,
      StreamObserver<BasicReply> responseObserver)
   {}


   /**
    */
   public void addSquarePaintPolicy(
      AddSquarePaintPolicyRequest request,
      StreamObserver<BasicReply> responseObserver)
   {}


   /**
    */
   public void renamePaintPolicy(
      RenamePaintPolicyRequest request,
      StreamObserver<BasicReply> responseObserver)
   {}


   /**
    */
   public void rejectPaintPolicy(
      RejectPaintPolicyRequest request,
      StreamObserver<BasicReply> responseObserver)
   {}


   /**
    */
   public void acceptPaintPolicy(
      AcceptPaintPolicyRequest request,
      StreamObserver<BasicReply> responseObserver)
   {}


   /**
    */
   public void deprecatePaintPolicy(
      DeprecatePaintPolicyRequest request,
      StreamObserver<BasicReply> responseObserver)
   {}
}
