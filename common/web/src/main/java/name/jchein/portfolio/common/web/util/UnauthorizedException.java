package name.jchein.portfolio.common.web.util;

import org.springframework.http.HttpStatus;

public class UnauthorizedException extends ApiException {
	private static final long serialVersionUID = -2245011909652971067L;

	public UnauthorizedException () {
        super(HttpStatus.UNAUTHORIZED);
    }

    public UnauthorizedException (String msg) {
        super(HttpStatus.UNAUTHORIZED, msg);
    }

    public UnauthorizedException (Throwable cause) {
        super(HttpStatus.UNAUTHORIZED, cause);
    }

    public UnauthorizedException (String msg, Throwable cause) {
        super(HttpStatus.UNAUTHORIZED, msg, cause);
    }
}
