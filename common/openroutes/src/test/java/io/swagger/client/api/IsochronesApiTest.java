package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.Error;
import io.swagger.client.model.IsochronesResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for IsochronesApi
 */
@Ignore
public class IsochronesApiTest {

    private final IsochronesApi api = new IsochronesApi();

    
    /**
     * Isochrones Service
     *
     * The Isochrone Service supports time and distance analyses for one single or multiple locations. You may also specify the isochrone interval or provide multiple exact isochrone range values. This service allows the same range of profile options listed in the ORS Routing section which help you to further customize your request to obtain a more detailed reachability area response. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void isochronesGetTest() throws ApiException {
        List<String> locations = null;
        Double range = null;
        String profile = null;
        String rangeType = null;
        Double interval = null;
        String units = null;
        String locationType = null;
        List<String> attributes = null;
        String options = null;
        Boolean intersections = null;
        String id = null;
        IsochronesResponse response = api.isochronesGet(locations, range, profile, rangeType, interval, units, locationType, attributes, options, intersections, id);

        // TODO: test validations
    }
    
}
