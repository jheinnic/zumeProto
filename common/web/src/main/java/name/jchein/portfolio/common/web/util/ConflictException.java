package name.jchein.portfolio.common.web.util;

import org.springframework.http.HttpStatus;

public class ConflictException extends ApiException {
	private static final long serialVersionUID = 4746678719491323426L;

	public ConflictException () {
        super(HttpStatus.CONFLICT);
    }

    public ConflictException (String msg) {
        super(HttpStatus.CONFLICT, msg);
    }

    public ConflictException (Throwable cause) {
        super(HttpStatus.CONFLICT, cause);
    }

    public ConflictException (String msg, Throwable cause) {
        super(HttpStatus.CONFLICT, msg, cause);
    }
}
