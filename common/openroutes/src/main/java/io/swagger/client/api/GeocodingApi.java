

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


import java.math.BigDecimal;
import io.swagger.client.model.Error;
import io.swagger.client.model.Geocoderesponse;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GeocodingApi {
    private ApiClient apiClient;

    public GeocodingApi() {
        this(Configuration.getDefaultApiClient());
    }

    public GeocodingApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for geocodingGet
     * @param query Name of location, street address or postal code. For a structured geocoding request, a JSON object can be passed.  Please refer to the &#x60;Geocoding structured query&#x60; in the model section below. Examples can be found [here](https://github.com/GIScience/openrouteservice-docs#geocoding-structured-query).  (optional)
     * @param location Coordinate to be inquired. (optional)
     * @param lang Sets the language of the response. (optional, default to en)
     * @param boundaryType Specifies the type of spatial search restriction.  &#x60;rect&#x60; for a rectangle and &#x60;circle&#x60; (optional)
     * @param rect **For &#x60;boundary_type&#x3D;rect&#x60; only!** Sets the restriction rectangle&#39;s minimum/maximum longitude/latitude: &#x60;MinLong,MinLat,MaxLong,Maxlat&#x60;. Example: &#x60;8.696837,49.408739,8.703489,49.41209&#x60;  (optional)
     * @param circle \&quot;**For &#x60;boundary_type&#x3D;circle&#x60; only!** Sets the restriction circle with a Centerpoint and a Radius in meters: &#x60;Long,Lat,Radius&#x60;. Example: &#x60;8.696837,49.408739,5000&#x60;\&quot;  (optional)
     * @param limit Specifies the maximum number of responses. Not needed for reverse. (optional, default to 20.0)
     * @param id Arbitrary identification string of the request reflected in the meta information. (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call geocodingGetCall(String query, BigDecimal location, String lang, String boundaryType, String rect, String circle, Double limit, String id, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/geocoding";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (query != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("query", query));
        if (location != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("location", location));
        if (lang != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("lang", lang));
        if (boundaryType != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("boundary_type", boundaryType));
        if (rect != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("rect", rect));
        if (circle != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("circle", circle));
        if (limit != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("limit", limit));
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
    private com.squareup.okhttp.Call geocodingGetValidateBeforeCall(String query, BigDecimal location, String lang, String boundaryType, String rect, String circle, Double limit, String id, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        

        com.squareup.okhttp.Call call = geocodingGetCall(query, location, lang, boundaryType, rect, circle, limit, id, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Geocoding Service
     * This endpoint can be used for geocoding (specified &#x60;query&#x60;) and reverse geocoding requests (specified &#x60;location&#x60;)  **Either** &#x60;query&#x60; **or** &#x60;location&#x60; **has to be specified for a valid request!**  If both parameters are specified &#x60;location&#x60; takes precedence.  - **geocoding:** Returns a JSON formatted list of objects corresponding to the search input. - **reverse geocoding:** Returns the next enclosing object with an address tag which surrounds the given coordinate. 
     * @param query Name of location, street address or postal code. For a structured geocoding request, a JSON object can be passed.  Please refer to the &#x60;Geocoding structured query&#x60; in the model section below. Examples can be found [here](https://github.com/GIScience/openrouteservice-docs#geocoding-structured-query).  (optional)
     * @param location Coordinate to be inquired. (optional)
     * @param lang Sets the language of the response. (optional, default to en)
     * @param boundaryType Specifies the type of spatial search restriction.  &#x60;rect&#x60; for a rectangle and &#x60;circle&#x60; (optional)
     * @param rect **For &#x60;boundary_type&#x3D;rect&#x60; only!** Sets the restriction rectangle&#39;s minimum/maximum longitude/latitude: &#x60;MinLong,MinLat,MaxLong,Maxlat&#x60;. Example: &#x60;8.696837,49.408739,8.703489,49.41209&#x60;  (optional)
     * @param circle \&quot;**For &#x60;boundary_type&#x3D;circle&#x60; only!** Sets the restriction circle with a Centerpoint and a Radius in meters: &#x60;Long,Lat,Radius&#x60;. Example: &#x60;8.696837,49.408739,5000&#x60;\&quot;  (optional)
     * @param limit Specifies the maximum number of responses. Not needed for reverse. (optional, default to 20.0)
     * @param id Arbitrary identification string of the request reflected in the meta information. (optional)
     * @return Geocoderesponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public Geocoderesponse geocodingGet(String query, BigDecimal location, String lang, String boundaryType, String rect, String circle, Double limit, String id) throws ApiException {
        ApiResponse<Geocoderesponse> resp = geocodingGetWithHttpInfo(query, location, lang, boundaryType, rect, circle, limit, id);
        return resp.getData();
    }

    /**
     * Geocoding Service
     * This endpoint can be used for geocoding (specified &#x60;query&#x60;) and reverse geocoding requests (specified &#x60;location&#x60;)  **Either** &#x60;query&#x60; **or** &#x60;location&#x60; **has to be specified for a valid request!**  If both parameters are specified &#x60;location&#x60; takes precedence.  - **geocoding:** Returns a JSON formatted list of objects corresponding to the search input. - **reverse geocoding:** Returns the next enclosing object with an address tag which surrounds the given coordinate. 
     * @param query Name of location, street address or postal code. For a structured geocoding request, a JSON object can be passed.  Please refer to the &#x60;Geocoding structured query&#x60; in the model section below. Examples can be found [here](https://github.com/GIScience/openrouteservice-docs#geocoding-structured-query).  (optional)
     * @param location Coordinate to be inquired. (optional)
     * @param lang Sets the language of the response. (optional, default to en)
     * @param boundaryType Specifies the type of spatial search restriction.  &#x60;rect&#x60; for a rectangle and &#x60;circle&#x60; (optional)
     * @param rect **For &#x60;boundary_type&#x3D;rect&#x60; only!** Sets the restriction rectangle&#39;s minimum/maximum longitude/latitude: &#x60;MinLong,MinLat,MaxLong,Maxlat&#x60;. Example: &#x60;8.696837,49.408739,8.703489,49.41209&#x60;  (optional)
     * @param circle \&quot;**For &#x60;boundary_type&#x3D;circle&#x60; only!** Sets the restriction circle with a Centerpoint and a Radius in meters: &#x60;Long,Lat,Radius&#x60;. Example: &#x60;8.696837,49.408739,5000&#x60;\&quot;  (optional)
     * @param limit Specifies the maximum number of responses. Not needed for reverse. (optional, default to 20.0)
     * @param id Arbitrary identification string of the request reflected in the meta information. (optional)
     * @return ApiResponse&lt;Geocoderesponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Geocoderesponse> geocodingGetWithHttpInfo(String query, BigDecimal location, String lang, String boundaryType, String rect, String circle, Double limit, String id) throws ApiException {
        com.squareup.okhttp.Call call = geocodingGetValidateBeforeCall(query, location, lang, boundaryType, rect, circle, limit, id, null, null);
        Type localVarReturnType = new TypeToken<Geocoderesponse>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Geocoding Service (asynchronously)
     * This endpoint can be used for geocoding (specified &#x60;query&#x60;) and reverse geocoding requests (specified &#x60;location&#x60;)  **Either** &#x60;query&#x60; **or** &#x60;location&#x60; **has to be specified for a valid request!**  If both parameters are specified &#x60;location&#x60; takes precedence.  - **geocoding:** Returns a JSON formatted list of objects corresponding to the search input. - **reverse geocoding:** Returns the next enclosing object with an address tag which surrounds the given coordinate. 
     * @param query Name of location, street address or postal code. For a structured geocoding request, a JSON object can be passed.  Please refer to the &#x60;Geocoding structured query&#x60; in the model section below. Examples can be found [here](https://github.com/GIScience/openrouteservice-docs#geocoding-structured-query).  (optional)
     * @param location Coordinate to be inquired. (optional)
     * @param lang Sets the language of the response. (optional, default to en)
     * @param boundaryType Specifies the type of spatial search restriction.  &#x60;rect&#x60; for a rectangle and &#x60;circle&#x60; (optional)
     * @param rect **For &#x60;boundary_type&#x3D;rect&#x60; only!** Sets the restriction rectangle&#39;s minimum/maximum longitude/latitude: &#x60;MinLong,MinLat,MaxLong,Maxlat&#x60;. Example: &#x60;8.696837,49.408739,8.703489,49.41209&#x60;  (optional)
     * @param circle \&quot;**For &#x60;boundary_type&#x3D;circle&#x60; only!** Sets the restriction circle with a Centerpoint and a Radius in meters: &#x60;Long,Lat,Radius&#x60;. Example: &#x60;8.696837,49.408739,5000&#x60;\&quot;  (optional)
     * @param limit Specifies the maximum number of responses. Not needed for reverse. (optional, default to 20.0)
     * @param id Arbitrary identification string of the request reflected in the meta information. (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call geocodingGetAsync(String query, BigDecimal location, String lang, String boundaryType, String rect, String circle, Double limit, String id, final ApiCallback<Geocoderesponse> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = geocodingGetValidateBeforeCall(query, location, lang, boundaryType, rect, circle, limit, id, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<Geocoderesponse>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
