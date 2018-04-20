package name.jchein.demo.bstocksolutions.common.websocket

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Configuration
import org.springframework.messaging.simp.config.ChannelRegistration
import org.springframework.messaging.simp.config.MessageBrokerRegistry
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker
import org.springframework.web.socket.config.annotation.StompEndpointRegistry

@Configuration
@EnableWebSocketMessageBroker
@EnableConfigurationProperties(typeof(WebSocketConfigProperties))
class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {
	@Autowired
	WebSocketConfigProperties poolConfig;
	
	override void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/events").withSockJS()
	}

	override void configureMessageBroker(MessageBrokerRegistry config) {
		config.enableSimpleBroker("/events")
	}

	override void configureClientInboundChannel(ChannelRegistration config) {
		val ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor()
		val inbound = this.poolConfig.inbound

		executor.corePoolSize = inbound.coreSize
		executor.maxPoolSize = inbound.maxSize
		executor.queueCapacity = inbound.queueCapacity
		executor.initialize()

		config.taskExecutor(executor);
	}

	override void configureClientOutboundChannel(ChannelRegistration config) {
		val executor = new ThreadPoolTaskExecutor()
		val outbound = this.poolConfig.outbound

		executor.corePoolSize = outbound.coreSize
		executor.maxPoolSize = outbound.maxSize
		executor.queueCapacity = outbound.queueCapacity
		executor.initialize()

		config.taskExecutor(executor)
	}
}
