package name.jchein.demo.bstocksolutions.oauth2.remote;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.oauth2.provider.token.RemoteTokenServices;


@Configuration
public class RemoteTokenServiceConfig
{
	@Primary
	@Bean
	public RemoteTokenServices tokenService()
	{
		final RemoteTokenServices tokenService = new RemoteTokenServices();
		tokenService.setCheckTokenEndpointUrl(
			"http://localhost:8080/spring-security-oauth-server/oauth/check_token");
		tokenService.setClientId("fooClientIdPassword");
		tokenService.setClientSecret("secret");
		return tokenService;
	}
}
