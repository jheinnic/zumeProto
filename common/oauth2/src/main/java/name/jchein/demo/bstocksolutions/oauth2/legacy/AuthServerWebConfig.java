package name.jchein.demo.bstocksolutions.oauth2.legacy;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class AuthServerWebConfig
{
	@Bean
	public AuthCORSFilter corsFilter()
	{
		return new AuthCORSFilter();
	}
}
