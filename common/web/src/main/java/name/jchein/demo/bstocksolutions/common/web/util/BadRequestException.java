package name.jchein.demo.bstocksolutions.common.web.util;

import org.springframework.http.HttpStatus;

public class BadRequestException extends ApiException {
	private static final long serialVersionUID = -1633593281206676121L;

	public BadRequestException () {
        super(HttpStatus.BAD_REQUEST);
    }

    public BadRequestException (String msg) {
        super(HttpStatus.BAD_REQUEST, msg);
    }

    public BadRequestException (Throwable cause) {
        super(HttpStatus.BAD_REQUEST, "Bad Request", cause);
    }

    public BadRequestException (String msg, Throwable cause) {
        super(HttpStatus.BAD_REQUEST, msg, cause);
    }
}
