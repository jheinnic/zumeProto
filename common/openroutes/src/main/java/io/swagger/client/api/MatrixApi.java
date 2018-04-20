

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
import io.swagger.client.model.MatrixBody;
import io.swagger.client.model.MatrixResponse;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MatrixApi {
    private ApiClient apiClient;

    public MatrixApi() {
        this(Configuration.getDefaultApiClient());
    }

    public MatrixApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for matrixGet
     * @param profile Specifies the route profile. (required)
     * @param locations Pipe (|) separated List of longitude,latitude coordinates  Example values: &#x60;9.970093,48.477473&#x60; &#x60;9.207916,49.153868&#x60; &#x60;37.573242,55.801281&#x60; &#x60;115.663757,38.106467&#x60;  (required)
     * @param sources A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). {index_1},{index_2}(,{index_N} ...) or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  (optional)
     * @param destinations A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). {index_1},{index_2}[,{index_N} ...] or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  (optional)
     * @param metrics Specifies a list of returned metrics separated with a pipe character (|). * &#x60;distance&#x60; - Returns distance matrix for specified points in defined &#x60;units&#x60;. * &#x60;duration&#x60; - Returns duration matrix for specified points in defined &#x60;units&#x60;. * &#x60;weight&#x60;   - Returns weight matrix for specified points in defined &#x60;units&#x60;.  (optional, default to duration)
     * @param resolveLocations Specifies whether given locations are resolved or not. If the parameter value set to &#x60;true&#x60;, every element in destinations and sources will contain the &#x60;name&#x60; element that identifies the name of the closest street. Default is &#x60;false&#x60;  (optional, default to false)
     * @param units Specifies the unit of measurement for distances. Default is &#x60;m&#x60; (optional, default to m)
     * @param optimized Specifies whether Dijkstra algorithm (&#x60;false&#x60;) or any available technique to speed up shortest-path routing (&#x60;true&#x60;) is used. For normal Dijkstra the number of visited nodes is limited to &#x60;100000&#x60;  (optional, default to true)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call matrixGetCall(String profile, List<String> locations, List<String> sources, List<String> destinations, List<String> metrics, Boolean resolveLocations, String units, Boolean optimized, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/matrix";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (profile != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("profile", profile));
        if (locations != null)
        localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("pipes", "locations", locations));
        if (sources != null)
        localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("multi", "sources", sources));
        if (destinations != null)
        localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("multi", "destinations", destinations));
        if (metrics != null)
        localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("pipes", "metrics", metrics));
        if (resolveLocations != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("resolve_locations", resolveLocations));
        if (units != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("units", units));
        if (optimized != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("optimized", optimized));

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
    private com.squareup.okhttp.Call matrixGetValidateBeforeCall(String profile, List<String> locations, List<String> sources, List<String> destinations, List<String> metrics, Boolean resolveLocations, String units, Boolean optimized, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'profile' is set
        if (profile == null) {
            throw new ApiException("Missing the required parameter 'profile' when calling matrixGet(Async)");
        }
        
        // verify the required parameter 'locations' is set
        if (locations == null) {
            throw new ApiException("Missing the required parameter 'locations' when calling matrixGet(Async)");
        }
        

        com.squareup.okhttp.Call call = matrixGetCall(profile, locations, sources, destinations, metrics, resolveLocations, units, optimized, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Matrix Service
     * Returns duration, distance or weight matrix for mutliple source and destination points. By default a symmetric duration matrix is returned where every point in &#x60;locations&#x60; is paired with each other. The result is &#x60;null&#x60; if a value can&#39;t be determined. 
     * @param profile Specifies the route profile. (required)
     * @param locations Pipe (|) separated List of longitude,latitude coordinates  Example values: &#x60;9.970093,48.477473&#x60; &#x60;9.207916,49.153868&#x60; &#x60;37.573242,55.801281&#x60; &#x60;115.663757,38.106467&#x60;  (required)
     * @param sources A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). {index_1},{index_2}(,{index_N} ...) or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  (optional)
     * @param destinations A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). {index_1},{index_2}[,{index_N} ...] or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  (optional)
     * @param metrics Specifies a list of returned metrics separated with a pipe character (|). * &#x60;distance&#x60; - Returns distance matrix for specified points in defined &#x60;units&#x60;. * &#x60;duration&#x60; - Returns duration matrix for specified points in defined &#x60;units&#x60;. * &#x60;weight&#x60;   - Returns weight matrix for specified points in defined &#x60;units&#x60;.  (optional, default to duration)
     * @param resolveLocations Specifies whether given locations are resolved or not. If the parameter value set to &#x60;true&#x60;, every element in destinations and sources will contain the &#x60;name&#x60; element that identifies the name of the closest street. Default is &#x60;false&#x60;  (optional, default to false)
     * @param units Specifies the unit of measurement for distances. Default is &#x60;m&#x60; (optional, default to m)
     * @param optimized Specifies whether Dijkstra algorithm (&#x60;false&#x60;) or any available technique to speed up shortest-path routing (&#x60;true&#x60;) is used. For normal Dijkstra the number of visited nodes is limited to &#x60;100000&#x60;  (optional, default to true)
     * @return MatrixResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public MatrixResponse matrixGet(String profile, List<String> locations, List<String> sources, List<String> destinations, List<String> metrics, Boolean resolveLocations, String units, Boolean optimized) throws ApiException {
        ApiResponse<MatrixResponse> resp = matrixGetWithHttpInfo(profile, locations, sources, destinations, metrics, resolveLocations, units, optimized);
        return resp.getData();
    }

    /**
     * Matrix Service
     * Returns duration, distance or weight matrix for mutliple source and destination points. By default a symmetric duration matrix is returned where every point in &#x60;locations&#x60; is paired with each other. The result is &#x60;null&#x60; if a value can&#39;t be determined. 
     * @param profile Specifies the route profile. (required)
     * @param locations Pipe (|) separated List of longitude,latitude coordinates  Example values: &#x60;9.970093,48.477473&#x60; &#x60;9.207916,49.153868&#x60; &#x60;37.573242,55.801281&#x60; &#x60;115.663757,38.106467&#x60;  (required)
     * @param sources A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). {index_1},{index_2}(,{index_N} ...) or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  (optional)
     * @param destinations A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). {index_1},{index_2}[,{index_N} ...] or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  (optional)
     * @param metrics Specifies a list of returned metrics separated with a pipe character (|). * &#x60;distance&#x60; - Returns distance matrix for specified points in defined &#x60;units&#x60;. * &#x60;duration&#x60; - Returns duration matrix for specified points in defined &#x60;units&#x60;. * &#x60;weight&#x60;   - Returns weight matrix for specified points in defined &#x60;units&#x60;.  (optional, default to duration)
     * @param resolveLocations Specifies whether given locations are resolved or not. If the parameter value set to &#x60;true&#x60;, every element in destinations and sources will contain the &#x60;name&#x60; element that identifies the name of the closest street. Default is &#x60;false&#x60;  (optional, default to false)
     * @param units Specifies the unit of measurement for distances. Default is &#x60;m&#x60; (optional, default to m)
     * @param optimized Specifies whether Dijkstra algorithm (&#x60;false&#x60;) or any available technique to speed up shortest-path routing (&#x60;true&#x60;) is used. For normal Dijkstra the number of visited nodes is limited to &#x60;100000&#x60;  (optional, default to true)
     * @return ApiResponse&lt;MatrixResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<MatrixResponse> matrixGetWithHttpInfo(String profile, List<String> locations, List<String> sources, List<String> destinations, List<String> metrics, Boolean resolveLocations, String units, Boolean optimized) throws ApiException {
        com.squareup.okhttp.Call call = matrixGetValidateBeforeCall(profile, locations, sources, destinations, metrics, resolveLocations, units, optimized, null, null);
        Type localVarReturnType = new TypeToken<MatrixResponse>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Matrix Service (asynchronously)
     * Returns duration, distance or weight matrix for mutliple source and destination points. By default a symmetric duration matrix is returned where every point in &#x60;locations&#x60; is paired with each other. The result is &#x60;null&#x60; if a value can&#39;t be determined. 
     * @param profile Specifies the route profile. (required)
     * @param locations Pipe (|) separated List of longitude,latitude coordinates  Example values: &#x60;9.970093,48.477473&#x60; &#x60;9.207916,49.153868&#x60; &#x60;37.573242,55.801281&#x60; &#x60;115.663757,38.106467&#x60;  (required)
     * @param sources A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). {index_1},{index_2}(,{index_N} ...) or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  (optional)
     * @param destinations A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). {index_1},{index_2}[,{index_N} ...] or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  (optional)
     * @param metrics Specifies a list of returned metrics separated with a pipe character (|). * &#x60;distance&#x60; - Returns distance matrix for specified points in defined &#x60;units&#x60;. * &#x60;duration&#x60; - Returns duration matrix for specified points in defined &#x60;units&#x60;. * &#x60;weight&#x60;   - Returns weight matrix for specified points in defined &#x60;units&#x60;.  (optional, default to duration)
     * @param resolveLocations Specifies whether given locations are resolved or not. If the parameter value set to &#x60;true&#x60;, every element in destinations and sources will contain the &#x60;name&#x60; element that identifies the name of the closest street. Default is &#x60;false&#x60;  (optional, default to false)
     * @param units Specifies the unit of measurement for distances. Default is &#x60;m&#x60; (optional, default to m)
     * @param optimized Specifies whether Dijkstra algorithm (&#x60;false&#x60;) or any available technique to speed up shortest-path routing (&#x60;true&#x60;) is used. For normal Dijkstra the number of visited nodes is limited to &#x60;100000&#x60;  (optional, default to true)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call matrixGetAsync(String profile, List<String> locations, List<String> sources, List<String> destinations, List<String> metrics, Boolean resolveLocations, String units, Boolean optimized, final ApiCallback<MatrixResponse> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = matrixGetValidateBeforeCall(profile, locations, sources, destinations, metrics, resolveLocations, units, optimized, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<MatrixResponse>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for matrixPost
     * @param body body for a Matrix post request (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call matrixPostCall(MatrixBody body, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/matrix";

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
    private com.squareup.okhttp.Call matrixPostValidateBeforeCall(MatrixBody body, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        

        com.squareup.okhttp.Call call = matrixPostCall(body, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Matrix Service
     * Returns duration, distance or weight matrix for mutliple source and destination points.
     * @param body body for a Matrix post request (optional)
     * @return MatrixResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public MatrixResponse matrixPost(MatrixBody body) throws ApiException {
        ApiResponse<MatrixResponse> resp = matrixPostWithHttpInfo(body);
        return resp.getData();
    }

    /**
     * Matrix Service
     * Returns duration, distance or weight matrix for mutliple source and destination points.
     * @param body body for a Matrix post request (optional)
     * @return ApiResponse&lt;MatrixResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<MatrixResponse> matrixPostWithHttpInfo(MatrixBody body) throws ApiException {
        com.squareup.okhttp.Call call = matrixPostValidateBeforeCall(body, null, null);
        Type localVarReturnType = new TypeToken<MatrixResponse>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Matrix Service (asynchronously)
     * Returns duration, distance or weight matrix for mutliple source and destination points.
     * @param body body for a Matrix post request (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call matrixPostAsync(MatrixBody body, final ApiCallback<MatrixResponse> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = matrixPostValidateBeforeCall(body, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<MatrixResponse>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
