package name.jchein.common.identity;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


/**
 * 
 */
@Configuration
@EnableConfigurationProperties(UUIDGeneratorConfigurationProperties.class)
public class UUIDGeneratorConfiguration
{

	@Autowired
	private UUIDGeneratorConfigurationProperties configProps;


	@Bean
	public IUUIDGenerator uuidGenerator()
	{
		if ((configProps.getNode() == BitSource.JUG) &&
			(configProps.getClockSeq() == BitSource.JUG)) { return new JugUuidGenerator(); }

		return null;
	}
}
