package name.jchein.demo.bstocksolutions.common.web.util;

import org.springframework.http.HttpStatus;

public class NotFoundException extends ApiException {
	private static final long serialVersionUID = 210164371636737017L;

	public NotFoundException () {
        super(HttpStatus.NOT_FOUND);
    }

    public NotFoundException (String msg) {
        super(HttpStatus.NOT_FOUND, msg);
    }

    public NotFoundException (Throwable cause) {
        super(HttpStatus.NOT_FOUND, cause);
    }

    public NotFoundException (String msg, Throwable cause) {
        super(HttpStatus.NOT_FOUND, msg, cause);
    }
}
