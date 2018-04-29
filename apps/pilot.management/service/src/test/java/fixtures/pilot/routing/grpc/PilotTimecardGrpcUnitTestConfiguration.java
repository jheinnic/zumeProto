package fixtures.pilot.routing.grpc;


import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Scope;

import io.grpc.Channel;
import name.jchein.demo.zumepizza.grpc.proto.pilot.management.PilotTimecardGrpc;
import net.devh.springboot.autoconfigure.grpc.client.GrpcClient;


@TestConfiguration
@ComponentScan
public class PilotTimecardGrpcUnitTestConfiguration
{
//	@Bean
//	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
//	IUUIDExtension uuidExtension() {
//		return new UUIDExtension();
//	}
	
	@GrpcClient("pilotTimecard")
	Channel pilotTimecardChannel;
	
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	PilotTimecardGrpc.PilotTimecardBlockingStub pilotTimecardBlockingClient() {
		return PilotTimecardGrpc.newBlockingStub(this.pilotTimecardChannel);
	}
	
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	PilotTimecardGrpc.PilotTimecardFutureStub pilotTimecardFutureClient() {
		return PilotTimecardGrpc.newFutureStub(this.pilotTimecardChannel);
	}
	
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	PilotTimecardGrpc.PilotTimecardStub pilotTimecardClient() {
		return PilotTimecardGrpc.newStub(this.pilotTimecardChannel);
	}
}
