package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.Error;
import io.swagger.client.model.Routeresponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for DirectionsApi
 */
@Ignore
public class DirectionsApiTest {

    private final DirectionsApi api = new DirectionsApi();

    
    /**
     * Routing Service
     *
     * Returns a route between two or more locations for a selected profile and its settings as GeoJSON response. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void directionsGetTest() throws ApiException {
        List<String> coordinates = null;
        String profile = null;
        String preference = null;
        String units = null;
        String language = null;
        Boolean geometry = null;
        String geometryFormat = null;
        Boolean geometrySimplify = null;
        Boolean instructions = null;
        String instructionsFormat = null;
        Boolean roundaboutExits = null;
        List<String> attributes = null;
        Boolean maneuvers = null;
        List<Float> radiuses = null;
        List<String> bearings = null;
        Boolean continueStraight = null;
        Boolean elevation = null;
        List<String> extraInfo = null;
        Boolean optimized = null;
        String options = null;
        String id = null;
        Routeresponse response = api.directionsGet(coordinates, profile, preference, units, language, geometry, geometryFormat, geometrySimplify, instructions, instructionsFormat, roundaboutExits, attributes, maneuvers, radiuses, bearings, continueStraight, elevation, extraInfo, optimized, options, id);

        // TODO: test validations
    }
    
}
