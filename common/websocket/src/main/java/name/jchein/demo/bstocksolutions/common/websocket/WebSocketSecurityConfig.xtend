package name.jchein.demo.bstocksolutions.common.websocket

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.messaging.MessageSecurityMetadataSourceRegistry
import org.springframework.security.config.annotation.web.socket.AbstractSecurityWebSocketMessageBrokerConfigurer

@Configuration class WebSocketSecurityConfig extends AbstractSecurityWebSocketMessageBrokerConfigurer {
	override protected void configureInbound(MessageSecurityMetadataSourceRegistry messages) {
		messages.anyMessage().permitAll()
	}

	/** 
	 * Disables CSRF for Websockets.
	 */
	override protected boolean sameOriginDisabled() {
		return true
	}
}
