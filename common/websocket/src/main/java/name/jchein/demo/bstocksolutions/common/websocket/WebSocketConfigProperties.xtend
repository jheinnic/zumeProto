package name.jchein.demo.bstocksolutions.common.websocket

import org.springframework.boot.context.properties.ConfigurationProperties
import org.eclipse.xtend.lib.annotations.Accessors

@ConfigurationProperties("websocket.threads")
@Accessors
class WebSocketConfigProperties {
	@Accessors
	static class ThreadPoolConfigProperties {
		var int coreSize
		var int maxSize
		var int queueCapacity
	}
	
	val ThreadPoolConfigProperties inbound = new ThreadPoolConfigProperties()
	val ThreadPoolConfigProperties outbound = new ThreadPoolConfigProperties()
}
