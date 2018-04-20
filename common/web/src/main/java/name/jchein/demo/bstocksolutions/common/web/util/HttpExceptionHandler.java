package name.jchein.demo.bstocksolutions.common.web.util;


import java.util.NoSuchElementException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import io.eventuate.EntityAlreadyExistsException;


@Component
@ControllerAdvice
public class HttpExceptionHandler
{
	private static final Logger logger = LoggerFactory.getLogger(HttpExceptionHandler.class);


	@ResponseBody
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> defaultErrorHandler(final HttpServletRequest request,
		final HttpServletResponse response, final Exception e)
	throws Exception
	{
		HttpExceptionHandler.logger.error("Exception occured!", e);

		final ResponseEntity<Void> retVal;
		if ((e instanceof NoSuchElementException) || (e instanceof NotFoundException)) {
			retVal =
				ResponseEntity.notFound()
					.build();
		} else if (e instanceof BadRequestException) {
			retVal =
				ResponseEntity.badRequest()
					.build();
		} else if (e instanceof ApiException) {
			retVal =
				ResponseEntity.status(((ApiException) e).getCode())
					.build();
		} else if (e instanceof EntityAlreadyExistsException) {
			retVal =
				ResponseEntity.status(HttpStatus.CONFLICT)
					.build();
		} else {
			retVal =
				ResponseEntity.badRequest()
					.build();
		}

		return retVal;
	}
}
