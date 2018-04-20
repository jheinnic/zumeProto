package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.Error;
import io.swagger.client.model.MatrixBody;
import io.swagger.client.model.MatrixResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for MatrixApi
 */
@Ignore
public class MatrixApiTest {

    private final MatrixApi api = new MatrixApi();

    
    /**
     * Matrix Service
     *
     * Returns duration, distance or weight matrix for mutliple source and destination points. By default a symmetric duration matrix is returned where every point in &#x60;locations&#x60; is paired with each other. The result is &#x60;null&#x60; if a value can&#39;t be determined. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void matrixGetTest() throws ApiException {
        String profile = null;
        List<String> locations = null;
        List<String> sources = null;
        List<String> destinations = null;
        List<String> metrics = null;
        Boolean resolveLocations = null;
        String units = null;
        Boolean optimized = null;
        MatrixResponse response = api.matrixGet(profile, locations, sources, destinations, metrics, resolveLocations, units, optimized);

        // TODO: test validations
    }
    
    /**
     * Matrix Service
     *
     * Returns duration, distance or weight matrix for mutliple source and destination points.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void matrixPostTest() throws ApiException {
        MatrixBody body = null;
        MatrixResponse response = api.matrixPost(body);

        // TODO: test validations
    }
    
}
