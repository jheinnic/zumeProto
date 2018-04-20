package name.jchein.demo.bstocksolutions.common.web.util;

import org.springframework.core.NestedRuntimeException;
import org.springframework.http.HttpStatus;

public abstract class ApiException extends NestedRuntimeException {
	private static final long serialVersionUID = 4097763144114484797L;
	protected final HttpStatus code;

	protected ApiException() {
		super(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
		this.code = HttpStatus.INTERNAL_SERVER_ERROR;
	}

	protected ApiException(String msg) {
		super(msg);
		this.code = HttpStatus.INTERNAL_SERVER_ERROR;
	}

	protected ApiException(Throwable cause) {
		super(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), cause);
		this.code = HttpStatus.INTERNAL_SERVER_ERROR;
	}

	@Deprecated
	protected ApiException(int code, String msg) {
		super(msg);
		this.code = HttpStatus.valueOf(code);
	}

	// Next two variants supported because they would throw an 
	// IllegalArgumentException on some inputs.  If caller wishes to risk
	// possibly calling HttpStatus.valueOf() with an invalid code, they must do 
	// so before using one of this class's constructors.
	//
	// protected ApiException(int code) {
	// super(HttpStatus.valueOf(code).getReasonPhrase());
	// this.code = HttpStatus.valueOf(code);
	// }
    //
	// protected ApiException(int code, Throwable cause) {
	// super(HttpStatus.valueOf(code).getReasonPhrase(), cause);
	// this.code = HttpStatus.valueOf(code);
	// }

	@Deprecated
	protected ApiException(int code, String msg, Throwable cause) {
		super(msg, cause);

		HttpStatus statusCode;
		try {
			statusCode = HttpStatus.valueOf(code);
		} catch (IllegalArgumentException exp) {
			statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		this.code = statusCode;
	}

	protected ApiException(HttpStatus code) {
		super((code != null) ? code.getReasonPhrase() : "Internal Server Error");
		this.code = (code != null) ? code : HttpStatus.INTERNAL_SERVER_ERROR;
	}

	protected ApiException(HttpStatus code, String msg) {
		super(msg);
		this.code = (code != null) ? code : HttpStatus.INTERNAL_SERVER_ERROR;
	}

	protected ApiException(HttpStatus code, Throwable cause) {
		super((code != null) ? code.getReasonPhrase() : "Internal Server Error", cause);
		this.code = (code != null) ? code : HttpStatus.INTERNAL_SERVER_ERROR;
	}

	protected ApiException(HttpStatus code, String msg, Throwable cause) {
		super(msg, cause);
		this.code = (code != null) ? code : HttpStatus.INTERNAL_SERVER_ERROR;
	}

	public HttpStatus getCode() {
		return this.code;
	}
}
