package io.swagger.client.api;

import io.swagger.client.ApiException;
import java.math.BigDecimal;
import io.swagger.client.model.Error;
import io.swagger.client.model.Geocoderesponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for GeocodingApi
 */
@Ignore
public class GeocodingApiTest {

    private final GeocodingApi api = new GeocodingApi();

    
    /**
     * Geocoding Service
     *
     * This endpoint can be used for geocoding (specified &#x60;query&#x60;) and reverse geocoding requests (specified &#x60;location&#x60;)  **Either** &#x60;query&#x60; **or** &#x60;location&#x60; **has to be specified for a valid request!**  If both parameters are specified &#x60;location&#x60; takes precedence.  - **geocoding:** Returns a JSON formatted list of objects corresponding to the search input. - **reverse geocoding:** Returns the next enclosing object with an address tag which surrounds the given coordinate. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void geocodingGetTest() throws ApiException {
        String query = null;
        BigDecimal location = null;
        String lang = null;
        String boundaryType = null;
        String rect = null;
        String circle = null;
        Double limit = null;
        String id = null;
        Geocoderesponse response = api.geocodingGet(query, location, lang, boundaryType, rect, circle, limit, id);

        // TODO: test validations
    }
    
}
