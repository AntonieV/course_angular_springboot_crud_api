package api_mariadb_app.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// whenever a resource not exists in a database this exception will be thrown
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    private static final long serialVerionUID = 1L;

    public ResourceNotFoundException(String message) {
        super(message); // pass the message to the superclass
    }
}
