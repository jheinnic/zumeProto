package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.Error;
import io.swagger.client.model.LocationsBody;
import io.swagger.client.model.LocationsPoiResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for PlacesApi
 */
@Ignore
public class PlacesApiTest {

    private final PlacesApi api = new PlacesApi();

    
    /**
     * Location Service
     *
     * Returns Points of Interest in the area surrounding a point or a line geometry. Use the post endpoint for requests that exceed the get character limit.  - **pois:** Either &#x60;geometry&#x60; or &#x60;bbox&#x60; are required. &#x60;radius&#x60; required depending on &#x60;geometry&#x60;. - **category_stats:** Either &#x60;geometry&#x60; or &#x60;bbox&#x60; are required. &#x60;radius&#x60; required depending on &#x60;geometry&#x60;. - **category_list:** Additionally to this List the category groups and ids can be found [here](https://github.com/GIScience/openrouteservice-docs). 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void placesGetTest() throws ApiException {
        String request = null;
        String categoryGroupIds = null;
        String categoryIds = null;
        String name = null;
        String wheelchair = null;
        String smoking = null;
        String fee = null;
        List<Double> bbox = null;
        String geometry = null;
        Double radius = null;
        Long limit = null;
        String sortby = null;
        List<String> details = null;
        String id = null;
        LocationsPoiResponse response = api.placesGet(request, categoryGroupIds, categoryIds, name, wheelchair, smoking, fee, bbox, geometry, radius, limit, sortby, details, id);

        // TODO: test validations
    }
    
    /**
     * Location Service
     *
     * Returns Points of Interest in the area surrounding a geometry. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void placesPostTest() throws ApiException {
        LocationsBody body = null;
        LocationsPoiResponse response = api.placesPost(body);

        // TODO: test validations
    }
    
}
