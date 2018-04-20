package name.jchein.demo.bstocksolutions.common.web.util;

import org.springframework.http.HttpStatus;

public class DuplicateResourceException extends ApiException {
	private static final long serialVersionUID = 8547537214467930081L;

	public DuplicateResourceException () {
        super(HttpStatus.CONFLICT, "Duplicate");
    }

    public DuplicateResourceException (String msg) {
        super(HttpStatus.CONFLICT, msg);
    }

    public DuplicateResourceException (Throwable cause) {
        super(HttpStatus.CONFLICT, "Duplicate", cause);
    }

    public DuplicateResourceException (String msg, Throwable cause) {
        super(HttpStatus.CONFLICT, msg, cause);
    }
}
