//package name.jchein.portfolio.common.grpc.client;
//
//import java.io.IOException;
//import java.util.concurrent.atomic.AtomicInteger;
//
//import org.springframework.context.SmartLifecycle;
//
//import ch.qos.logback.core.net.server.Client;
//import net.devh.springboot.autoconfigure.grpc.server.GrpcClientLifecycle;
//
//public class GRpcClientLifecycle<ProtobufStub> 
//implements SmartLifecycle {
//   private static AtomicInteger serverCounter = new AtomicInteger(-1);
//
//   private volatile Client client;
//   private volatile int phase = Integer.MAX_VALUE;
//   private final GRpcClientFactory factory;
//
//   public GRpcClientLifecycle(GRpcClientFactory factory) {
//       this.factory = factory;
//   }
//
//   @Override
//   public void start() {
//       try {
//           createAndStartGrpcClient();
//       } catch (IOException e) {
//           throw new IllegalStateException(e);
//       }
//   }
//
//   @Override
//   public void stop() {
//       stopAndReleaseGrpcClient();
//   }
//
//   @Override
//   public void stop(Runnable callback) {
//       this.stop();
//       callback.run();
//   }
//
//   @Override
//   public boolean isRunning() {
//       return this.server == null ? false : !this.server.isShutdown();
//   }
//
//   @Override
//   public int getPhase() {
//       return this.phase;
//   }
//
//   @Override
//   public boolean isAutoStartup() {
//       return true;
//   }
//
//   protected void createAndStartGrpcClient() throws IOException {
//       Client localClient = this.server;
//       if (localClient == null) {
//           this.server = this.factory.createClient();
//           this.server.start();
//           log.info("gRPC Client started, listening on address: " + this.factory.getAddress() + ", port: " + this.factory.getPort());
//
//           Thread awaitThread = new Thread(
//                   "container-" + (serverCounter.incrementAndGet())) {
//
//               @Override
//               public void run() {
//                   try {
//                       GrpcClientLifecycle.this.server.awaitTermination();
//                   } catch (InterruptedException e) {
//                       Thread.currentThread().interrupt();
//                   }
//               }
//
//           };
//           awaitThread.setDaemon(false);
//           awaitThread.start();
//       }
//   }
//
//   protected void stopAndReleaseGrpcClient() {
//       Client localClient = this.server;
//       if (localClient != null) {
//           localClient.shutdown();
//           this.server = null;
//           log.info("gRPC server stopped");
//       }
//   }
//}
