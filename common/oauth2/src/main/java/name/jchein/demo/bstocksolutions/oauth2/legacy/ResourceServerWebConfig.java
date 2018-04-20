package name.jchein.demo.bstocksolutions.oauth2.legacy;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class ResourceServerWebConfig
{
	@Bean
	public ResourceCORSFilter corsFilter()
	{
		return new ResourceCORSFilter();
	}
}
