package fixtures.delivery.routing.grpc;


import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Scope;

import io.grpc.Channel;
import name.jchein.demo.zumepizza.services.delivery.routing.grpc.proto.DeliveryRoutingGrpc;
import net.devh.springboot.autoconfigure.grpc.client.GrpcClient;


@TestConfiguration
@ComponentScan
public class DeliveryRoutingGrpcUnitTestConfiguration
{
	@GrpcClient("delivery.routing")
	Channel deliveryRoutingChannel;
	
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	DeliveryRoutingGrpc.DeliveryRoutingBlockingStub deliveryRoutingBlockingClient() {
		return DeliveryRoutingGrpc.newBlockingStub(this.deliveryRoutingChannel);
	}
	
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	DeliveryRoutingGrpc.DeliveryRoutingFutureStub deliveryRoutingFutureClient() {
		return DeliveryRoutingGrpc.newFutureStub(this.deliveryRoutingChannel);
	}
	
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	DeliveryRoutingGrpc.DeliveryRoutingStub deliveryRoutingClient() {
		return DeliveryRoutingGrpc.newStub(this.deliveryRoutingChannel);
	}
}
