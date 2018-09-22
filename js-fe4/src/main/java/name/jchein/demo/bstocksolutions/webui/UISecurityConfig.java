package name.jchein.demo.bstocksolutions.webui;


import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;


@Configuration
@EnableOAuth2Sso
@EnableWebSecurity
public class UISecurityConfig
extends WebSecurityConfigurerAdapter
{
	@Override
	public void configure(final HttpSecurity http) throws Exception
	{
		http.antMatcher("/**")
			.authorizeRequests()
			.antMatchers("/", "/login**", "/ui/", "/ui/login**")
			.permitAll()
			.anyRequest()
			.authenticated()
			.and()
			.csrf()
			.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
	}
}
