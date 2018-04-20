

package io.swagger.client.api;

import io.swagger.client.ApiCallback;
import io.swagger.client.ApiClient;
import io.swagger.client.ApiException;
import io.swagger.client.ApiResponse;
import io.swagger.client.Configuration;
import io.swagger.client.Pair;
import io.swagger.client.ProgressRequestBody;
import io.swagger.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import io.swagger.client.model.Error;
import io.swagger.client.model.LocationsBody;
import io.swagger.client.model.LocationsPoiResponse;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PlacesApi {
    private ApiClient apiClient;

    public PlacesApi() {
        this(Configuration.getDefaultApiClient());
    }

    public PlacesApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for placesGet
     * @param request &#x60;pois&#x60; will return POI geometry as well as requested details. &#x60;category_stats&#x60; returns a POI count for each requested category. &#x60;category_list&#x60; returns a list of all categories (only the id parameter will be considered).  (required)
     * @param categoryGroupIds Comma seperated list of category group ids.  (optional, default to 420)
     * @param categoryIds Comma seperated list of category ids.  (optional)
     * @param name Name to filter the POIs by. **Only finds exact matches** (optional)
     * @param wheelchair Filter returned features by wheelchair tag entries.  (optional)
     * @param smoking Filter returned features by wheelchair tag entries.  (optional)
     * @param fee Filter returned features by fee tag entries.  (optional)
     * @param bbox Defines a clipping bounding box. Can be defined additionally to &#x60;geometry&#x60;.  (optional)
     * @param geometry GeoJSON geometry object (Point, Linestring or Polygon)  (optional, default to {type: LineString, coordinates:[[8.167426,49.272556],[8.167588,47.272445],[8.168082,47.272105],[8.168224,47.271917],[8.16831,47.271941],[8.168926,47.272216],[8.169054,47.272278],[8.169165,47.272186],[8.169256,47.272103],[8.16948,47.271921],[8.170129,47.271408],[8.170265,47.271295],[8.170701,47.27097],[8.171496,47.270485],[8.171796,47.270296]]})
     * @param radius Search radius in meters around the given (might be limited in the backend). **Required if geometry is a Point or Linestring**  (optional, default to 500.0)
     * @param limit Maximum number of returned objects (might be limited in the backend). **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param sortby Sorts the returned features by _distance_ or _category_. **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param details Pipe (|) seperated list of desired details. **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param id Arbitrary identification string of the request reflected in the meta information. (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call placesGetCall(String request, String categoryGroupIds, String categoryIds, String name, String wheelchair, String smoking, String fee, List<Double> bbox, String geometry, Double radius, Long limit, String sortby, List<String> details, String id, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/places";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (request != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("request", request));
        if (categoryGroupIds != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("category_group_ids", categoryGroupIds));
        if (categoryIds != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("category_ids", categoryIds));
        if (name != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("name", name));
        if (wheelchair != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("wheelchair", wheelchair));
        if (smoking != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("smoking", smoking));
        if (fee != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("fee", fee));
        if (bbox != null)
        localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("csv", "bbox", bbox));
        if (geometry != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("geometry", geometry));
        if (radius != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("radius", radius));
        if (limit != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("limit", limit));
        if (sortby != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("sortby", sortby));
        if (details != null)
        localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("pipes", "details", details));
        if (id != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("id", id));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "text/json; charset=utf-8"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "UserSecurity" };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call placesGetValidateBeforeCall(String request, String categoryGroupIds, String categoryIds, String name, String wheelchair, String smoking, String fee, List<Double> bbox, String geometry, Double radius, Long limit, String sortby, List<String> details, String id, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'request' is set
        if (request == null) {
            throw new ApiException("Missing the required parameter 'request' when calling placesGet(Async)");
        }
        

        com.squareup.okhttp.Call call = placesGetCall(request, categoryGroupIds, categoryIds, name, wheelchair, smoking, fee, bbox, geometry, radius, limit, sortby, details, id, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Location Service
     * Returns Points of Interest in the area surrounding a point or a line geometry. Use the post endpoint for requests that exceed the get character limit.  - **pois:** Either &#x60;geometry&#x60; or &#x60;bbox&#x60; are required. &#x60;radius&#x60; required depending on &#x60;geometry&#x60;. - **category_stats:** Either &#x60;geometry&#x60; or &#x60;bbox&#x60; are required. &#x60;radius&#x60; required depending on &#x60;geometry&#x60;. - **category_list:** Additionally to this List the category groups and ids can be found [here](https://github.com/GIScience/openrouteservice-docs). 
     * @param request &#x60;pois&#x60; will return POI geometry as well as requested details. &#x60;category_stats&#x60; returns a POI count for each requested category. &#x60;category_list&#x60; returns a list of all categories (only the id parameter will be considered).  (required)
     * @param categoryGroupIds Comma seperated list of category group ids.  (optional, default to 420)
     * @param categoryIds Comma seperated list of category ids.  (optional)
     * @param name Name to filter the POIs by. **Only finds exact matches** (optional)
     * @param wheelchair Filter returned features by wheelchair tag entries.  (optional)
     * @param smoking Filter returned features by wheelchair tag entries.  (optional)
     * @param fee Filter returned features by fee tag entries.  (optional)
     * @param bbox Defines a clipping bounding box. Can be defined additionally to &#x60;geometry&#x60;.  (optional)
     * @param geometry GeoJSON geometry object (Point, Linestring or Polygon)  (optional, default to {type: LineString, coordinates:[[8.167426,49.272556],[8.167588,47.272445],[8.168082,47.272105],[8.168224,47.271917],[8.16831,47.271941],[8.168926,47.272216],[8.169054,47.272278],[8.169165,47.272186],[8.169256,47.272103],[8.16948,47.271921],[8.170129,47.271408],[8.170265,47.271295],[8.170701,47.27097],[8.171496,47.270485],[8.171796,47.270296]]})
     * @param radius Search radius in meters around the given (might be limited in the backend). **Required if geometry is a Point or Linestring**  (optional, default to 500.0)
     * @param limit Maximum number of returned objects (might be limited in the backend). **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param sortby Sorts the returned features by _distance_ or _category_. **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param details Pipe (|) seperated list of desired details. **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param id Arbitrary identification string of the request reflected in the meta information. (optional)
     * @return LocationsPoiResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public LocationsPoiResponse placesGet(String request, String categoryGroupIds, String categoryIds, String name, String wheelchair, String smoking, String fee, List<Double> bbox, String geometry, Double radius, Long limit, String sortby, List<String> details, String id) throws ApiException {
        ApiResponse<LocationsPoiResponse> resp = placesGetWithHttpInfo(request, categoryGroupIds, categoryIds, name, wheelchair, smoking, fee, bbox, geometry, radius, limit, sortby, details, id);
        return resp.getData();
    }

    /**
     * Location Service
     * Returns Points of Interest in the area surrounding a point or a line geometry. Use the post endpoint for requests that exceed the get character limit.  - **pois:** Either &#x60;geometry&#x60; or &#x60;bbox&#x60; are required. &#x60;radius&#x60; required depending on &#x60;geometry&#x60;. - **category_stats:** Either &#x60;geometry&#x60; or &#x60;bbox&#x60; are required. &#x60;radius&#x60; required depending on &#x60;geometry&#x60;. - **category_list:** Additionally to this List the category groups and ids can be found [here](https://github.com/GIScience/openrouteservice-docs). 
     * @param request &#x60;pois&#x60; will return POI geometry as well as requested details. &#x60;category_stats&#x60; returns a POI count for each requested category. &#x60;category_list&#x60; returns a list of all categories (only the id parameter will be considered).  (required)
     * @param categoryGroupIds Comma seperated list of category group ids.  (optional, default to 420)
     * @param categoryIds Comma seperated list of category ids.  (optional)
     * @param name Name to filter the POIs by. **Only finds exact matches** (optional)
     * @param wheelchair Filter returned features by wheelchair tag entries.  (optional)
     * @param smoking Filter returned features by wheelchair tag entries.  (optional)
     * @param fee Filter returned features by fee tag entries.  (optional)
     * @param bbox Defines a clipping bounding box. Can be defined additionally to &#x60;geometry&#x60;.  (optional)
     * @param geometry GeoJSON geometry object (Point, Linestring or Polygon)  (optional, default to {type: LineString, coordinates:[[8.167426,49.272556],[8.167588,47.272445],[8.168082,47.272105],[8.168224,47.271917],[8.16831,47.271941],[8.168926,47.272216],[8.169054,47.272278],[8.169165,47.272186],[8.169256,47.272103],[8.16948,47.271921],[8.170129,47.271408],[8.170265,47.271295],[8.170701,47.27097],[8.171496,47.270485],[8.171796,47.270296]]})
     * @param radius Search radius in meters around the given (might be limited in the backend). **Required if geometry is a Point or Linestring**  (optional, default to 500.0)
     * @param limit Maximum number of returned objects (might be limited in the backend). **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param sortby Sorts the returned features by _distance_ or _category_. **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param details Pipe (|) seperated list of desired details. **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param id Arbitrary identification string of the request reflected in the meta information. (optional)
     * @return ApiResponse&lt;LocationsPoiResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<LocationsPoiResponse> placesGetWithHttpInfo(String request, String categoryGroupIds, String categoryIds, String name, String wheelchair, String smoking, String fee, List<Double> bbox, String geometry, Double radius, Long limit, String sortby, List<String> details, String id) throws ApiException {
        com.squareup.okhttp.Call call = placesGetValidateBeforeCall(request, categoryGroupIds, categoryIds, name, wheelchair, smoking, fee, bbox, geometry, radius, limit, sortby, details, id, null, null);
        Type localVarReturnType = new TypeToken<LocationsPoiResponse>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Location Service (asynchronously)
     * Returns Points of Interest in the area surrounding a point or a line geometry. Use the post endpoint for requests that exceed the get character limit.  - **pois:** Either &#x60;geometry&#x60; or &#x60;bbox&#x60; are required. &#x60;radius&#x60; required depending on &#x60;geometry&#x60;. - **category_stats:** Either &#x60;geometry&#x60; or &#x60;bbox&#x60; are required. &#x60;radius&#x60; required depending on &#x60;geometry&#x60;. - **category_list:** Additionally to this List the category groups and ids can be found [here](https://github.com/GIScience/openrouteservice-docs). 
     * @param request &#x60;pois&#x60; will return POI geometry as well as requested details. &#x60;category_stats&#x60; returns a POI count for each requested category. &#x60;category_list&#x60; returns a list of all categories (only the id parameter will be considered).  (required)
     * @param categoryGroupIds Comma seperated list of category group ids.  (optional, default to 420)
     * @param categoryIds Comma seperated list of category ids.  (optional)
     * @param name Name to filter the POIs by. **Only finds exact matches** (optional)
     * @param wheelchair Filter returned features by wheelchair tag entries.  (optional)
     * @param smoking Filter returned features by wheelchair tag entries.  (optional)
     * @param fee Filter returned features by fee tag entries.  (optional)
     * @param bbox Defines a clipping bounding box. Can be defined additionally to &#x60;geometry&#x60;.  (optional)
     * @param geometry GeoJSON geometry object (Point, Linestring or Polygon)  (optional, default to {type: LineString, coordinates:[[8.167426,49.272556],[8.167588,47.272445],[8.168082,47.272105],[8.168224,47.271917],[8.16831,47.271941],[8.168926,47.272216],[8.169054,47.272278],[8.169165,47.272186],[8.169256,47.272103],[8.16948,47.271921],[8.170129,47.271408],[8.170265,47.271295],[8.170701,47.27097],[8.171496,47.270485],[8.171796,47.270296]]})
     * @param radius Search radius in meters around the given (might be limited in the backend). **Required if geometry is a Point or Linestring**  (optional, default to 500.0)
     * @param limit Maximum number of returned objects (might be limited in the backend). **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param sortby Sorts the returned features by _distance_ or _category_. **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param details Pipe (|) seperated list of desired details. **For** &#x60;request&#x3D;pois&#x60; **only.**  (optional)
     * @param id Arbitrary identification string of the request reflected in the meta information. (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call placesGetAsync(String request, String categoryGroupIds, String categoryIds, String name, String wheelchair, String smoking, String fee, List<Double> bbox, String geometry, Double radius, Long limit, String sortby, List<String> details, String id, final ApiCallback<LocationsPoiResponse> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = placesGetValidateBeforeCall(request, categoryGroupIds, categoryIds, name, wheelchair, smoking, fee, bbox, geometry, radius, limit, sortby, details, id, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<LocationsPoiResponse>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for placesPost
     * @param body body for a post request (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call placesPostCall(LocationsBody body, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/places";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "text/json; charset=utf-8"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "UserSecurity" };
        return apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call placesPostValidateBeforeCall(LocationsBody body, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        

        com.squareup.okhttp.Call call = placesPostCall(body, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Location Service
     * Returns Points of Interest in the area surrounding a geometry. 
     * @param body body for a post request (optional)
     * @return LocationsPoiResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public LocationsPoiResponse placesPost(LocationsBody body) throws ApiException {
        ApiResponse<LocationsPoiResponse> resp = placesPostWithHttpInfo(body);
        return resp.getData();
    }

    /**
     * Location Service
     * Returns Points of Interest in the area surrounding a geometry. 
     * @param body body for a post request (optional)
     * @return ApiResponse&lt;LocationsPoiResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<LocationsPoiResponse> placesPostWithHttpInfo(LocationsBody body) throws ApiException {
        com.squareup.okhttp.Call call = placesPostValidateBeforeCall(body, null, null);
        Type localVarReturnType = new TypeToken<LocationsPoiResponse>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Location Service (asynchronously)
     * Returns Points of Interest in the area surrounding a geometry. 
     * @param body body for a post request (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call placesPostAsync(LocationsBody body, final ApiCallback<LocationsPoiResponse> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = placesPostValidateBeforeCall(body, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<LocationsPoiResponse>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
