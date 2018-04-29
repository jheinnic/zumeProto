package name.jchein.portfolio.common.web.filter;


import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;


/**
 * CORS Filter settings intended for common use by API serers. These settings are not suitable for OAuth Authorization
 * servers, only Resource servers.
 *
 * @author jheinnic
 */
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CORSFilter
implements Filter
{
	@Override
	public void destroy()
	{}


	@Override
	public void doFilter(final ServletRequest req, final ServletResponse res, final FilterChain chain)
	throws IOException, ServletException
	{
		final HttpServletResponse response = (HttpServletResponse) res;
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE, PATCH");
		response.setHeader(
			"Access-Control-Allow-Headers",
			"X-Requested-With, X-Access-Token, Origin, Content-Type, Accept");
		response.setHeader("Access-Control-Max-Age", "3600");
		if ("OPTIONS".equalsIgnoreCase(((HttpServletRequest) req).getMethod())) {
			response.setStatus(HttpServletResponse.SC_OK);
		} else {
			chain.doFilter(req, res);
		}
	}


	@Override
	public void init(final FilterConfig filterConfig)
	{}

}
