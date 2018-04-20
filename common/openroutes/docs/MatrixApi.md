# MatrixApi

All URIs are relative to *https://api.openrouteservice.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**matrixGet**](MatrixApi.md#matrixGet) | **GET** /matrix | Matrix Service
[**matrixPost**](MatrixApi.md#matrixPost) | **POST** /matrix | Matrix Service


<a name="matrixGet"></a>
# **matrixGet**
> MatrixResponse matrixGet(profile, locations, sources, destinations, metrics, resolveLocations, units, optimized)

Matrix Service

Returns duration, distance or weight matrix for mutliple source and destination points. By default a symmetric duration matrix is returned where every point in &#x60;locations&#x60; is paired with each other. The result is &#x60;null&#x60; if a value can&#39;t be determined. 

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.MatrixApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: UserSecurity
ApiKeyAuth UserSecurity = (ApiKeyAuth) defaultClient.getAuthentication("UserSecurity");
UserSecurity.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.setApiKeyPrefix("Token");

MatrixApi apiInstance = new MatrixApi();
String profile = "driving-car"; // String | Specifies the route profile.
List<String> locations = Arrays.asList("locations_example"); // List<String> | Pipe (|) separated List of longitude,latitude coordinates  Example values: `9.970093,48.477473` `9.207916,49.153868` `37.573242,55.801281` `115.663757,38.106467` 
List<String> sources = Arrays.asList("sources_example"); // List<String> | A comma separated list of indices that refers to the list of locations (starting with `0`). {index_1},{index_2}(,{index_N} ...) or `all` (default).  Example: `0,3` for the first and fourth Location. 
List<String> destinations = Arrays.asList("destinations_example"); // List<String> | A comma separated list of indices that refers to the list of locations (starting with `0`). {index_1},{index_2}[,{index_N} ...] or `all` (default).  Example: `0,3` for the first and fourth Location. 
List<String> metrics = Arrays.asList("duration"); // List<String> | Specifies a list of returned metrics separated with a pipe character (|). * `distance` - Returns distance matrix for specified points in defined `units`. * `duration` - Returns duration matrix for specified points in defined `units`. * `weight`   - Returns weight matrix for specified points in defined `units`. 
Boolean resolveLocations = false; // Boolean | Specifies whether given locations are resolved or not. If the parameter value set to `true`, every element in destinations and sources will contain the `name` element that identifies the name of the closest street. Default is `false` 
String units = "m"; // String | Specifies the unit of measurement for distances. Default is `m`
Boolean optimized = true; // Boolean | Specifies whether Dijkstra algorithm (`false`) or any available technique to speed up shortest-path routing (`true`) is used. For normal Dijkstra the number of visited nodes is limited to `100000` 
try {
    MatrixResponse result = apiInstance.matrixGet(profile, locations, sources, destinations, metrics, resolveLocations, units, optimized);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MatrixApi#matrixGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile** | **String**| Specifies the route profile. | [default to driving-car] [enum: driving-car, driving-hgv, cycling-regular, cycling-road, cycling-safe, cycling-mountain, cycling-tour, cycling-electric, foot-walking, foot-hiking, wheelchair]
 **locations** | [**List&lt;String&gt;**](String.md)| Pipe (|) separated List of longitude,latitude coordinates  Example values: &#x60;9.970093,48.477473&#x60; &#x60;9.207916,49.153868&#x60; &#x60;37.573242,55.801281&#x60; &#x60;115.663757,38.106467&#x60;  |
 **sources** | [**List&lt;String&gt;**](String.md)| A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). {index_1},{index_2}(,{index_N} ...) or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  | [optional]
 **destinations** | [**List&lt;String&gt;**](String.md)| A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). {index_1},{index_2}[,{index_N} ...] or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  | [optional]
 **metrics** | [**List&lt;String&gt;**](String.md)| Specifies a list of returned metrics separated with a pipe character (|). * &#x60;distance&#x60; - Returns distance matrix for specified points in defined &#x60;units&#x60;. * &#x60;duration&#x60; - Returns duration matrix for specified points in defined &#x60;units&#x60;. * &#x60;weight&#x60;   - Returns weight matrix for specified points in defined &#x60;units&#x60;.  | [optional] [default to duration] [enum: distance, duration, weight]
 **resolveLocations** | **Boolean**| Specifies whether given locations are resolved or not. If the parameter value set to &#x60;true&#x60;, every element in destinations and sources will contain the &#x60;name&#x60; element that identifies the name of the closest street. Default is &#x60;false&#x60;  | [optional] [default to false]
 **units** | **String**| Specifies the unit of measurement for distances. Default is &#x60;m&#x60; | [optional] [default to m] [enum: m, km, mi]
 **optimized** | **Boolean**| Specifies whether Dijkstra algorithm (&#x60;false&#x60;) or any available technique to speed up shortest-path routing (&#x60;true&#x60;) is used. For normal Dijkstra the number of visited nodes is limited to &#x60;100000&#x60;  | [optional] [default to true]

### Return type

[**MatrixResponse**](MatrixResponse.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/json; charset=utf-8

<a name="matrixPost"></a>
# **matrixPost**
> MatrixResponse matrixPost(body)

Matrix Service

Returns duration, distance or weight matrix for mutliple source and destination points.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.MatrixApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: UserSecurity
ApiKeyAuth UserSecurity = (ApiKeyAuth) defaultClient.getAuthentication("UserSecurity");
UserSecurity.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.setApiKeyPrefix("Token");

MatrixApi apiInstance = new MatrixApi();
MatrixBody body = new MatrixBody(); // MatrixBody | body for a Matrix post request
try {
    MatrixResponse result = apiInstance.matrixPost(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MatrixApi#matrixPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MatrixBody**](MatrixBody.md)| body for a Matrix post request | [optional]

### Return type

[**MatrixResponse**](MatrixResponse.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/json; charset=utf-8

