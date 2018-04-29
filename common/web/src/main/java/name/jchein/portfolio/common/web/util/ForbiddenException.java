package name.jchein.portfolio.common.web.util;

import org.springframework.http.HttpStatus;

public class ForbiddenException extends ApiException {
	private static final long serialVersionUID = -1362739639752490478L;

	public ForbiddenException () {
        super(HttpStatus.FORBIDDEN);
    }

    public ForbiddenException (String msg) {
        super(HttpStatus.FORBIDDEN, msg);
    }

    public ForbiddenException (Throwable cause) {
        super(HttpStatus.FORBIDDEN, cause);
    }

    public ForbiddenException (String msg, Throwable cause) {
        super(HttpStatus.FORBIDDEN, msg, cause);
    }
}
