package name.jchein.portfolio.common.grpc.interceptor;


import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import io.grpc.Metadata;
import io.grpc.ServerCall;
import io.grpc.ServerCallHandler;
import io.grpc.ServerInterceptor;
import lombok.extern.slf4j.Slf4j;
import net.devh.springboot.autoconfigure.grpc.server.GlobalServerInterceptorConfigurerAdapter;
import net.devh.springboot.autoconfigure.grpc.server.GlobalServerInterceptorRegistry;


@Slf4j
@Configuration
public class CommonGlobalInterceptorConfig
{
	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	public ServerInterceptor globalInterceptor()
	{
		return new ServerInterceptor() {
			@Override
			public <ReqT, RespT> ServerCall.Listener<ReqT> interceptCall(
				final ServerCall<ReqT, RespT> call,
				final Metadata headers,
				final ServerCallHandler<ReqT, RespT> next)
			{
				// your logic here
				log.info("In Global GRPC Interceptor");
				return next.startCall(call, headers);
			}
		};
	}


	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	GlobalServerInterceptorConfigurerAdapter globalGrpcServerInterceptorAdapter() {
		return new GlobalServerInterceptorConfigurerAdapter() {
			public void addServerInterceptors(GlobalServerInterceptorRegistry registry) {
				registry.addServerInterceptors(
					CommonGlobalInterceptorConfig.this.globalInterceptor());
			}
		};
	}
}
