# GeocodingApi

All URIs are relative to *https://api.openrouteservice.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geocodingGet**](GeocodingApi.md#geocodingGet) | **GET** /geocoding | Geocoding Service


<a name="geocodingGet"></a>
# **geocodingGet**
> Geocoderesponse geocodingGet(query, location, lang, boundaryType, rect, circle, limit, id)

Geocoding Service

This endpoint can be used for geocoding (specified &#x60;query&#x60;) and reverse geocoding requests (specified &#x60;location&#x60;)  **Either** &#x60;query&#x60; **or** &#x60;location&#x60; **has to be specified for a valid request!**  If both parameters are specified &#x60;location&#x60; takes precedence.  - **geocoding:** Returns a JSON formatted list of objects corresponding to the search input. - **reverse geocoding:** Returns the next enclosing object with an address tag which surrounds the given coordinate. 

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.GeocodingApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: UserSecurity
ApiKeyAuth UserSecurity = (ApiKeyAuth) defaultClient.getAuthentication("UserSecurity");
UserSecurity.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.setApiKeyPrefix("Token");

GeocodingApi apiInstance = new GeocodingApi();
String query = "query_example"; // String | Name of location, street address or postal code. For a structured geocoding request, a JSON object can be passed.  Please refer to the `Geocoding structured query` in the model section below. Examples can be found [here](https://github.com/GIScience/openrouteservice-docs#geocoding-structured-query). 
BigDecimal location = new BigDecimal(); // BigDecimal | Coordinate to be inquired.
String lang = "en"; // String | Sets the language of the response.
String boundaryType = "boundaryType_example"; // String | Specifies the type of spatial search restriction.  `rect` for a rectangle and `circle`
String rect = "rect_example"; // String | **For `boundary_type=rect` only!** Sets the restriction rectangle's minimum/maximum longitude/latitude: `MinLong,MinLat,MaxLong,Maxlat`. Example: `8.696837,49.408739,8.703489,49.41209` 
String circle = "circle_example"; // String | \"**For `boundary_type=circle` only!** Sets the restriction circle with a Centerpoint and a Radius in meters: `Long,Lat,Radius`. Example: `8.696837,49.408739,5000`\" 
Double limit = 3.4D; // Double | Specifies the maximum number of responses. Not needed for reverse.
String id = "id_example"; // String | Arbitrary identification string of the request reflected in the meta information.
try {
    Geocoderesponse result = apiInstance.geocodingGet(query, location, lang, boundaryType, rect, circle, limit, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GeocodingApi#geocodingGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Name of location, street address or postal code. For a structured geocoding request, a JSON object can be passed.  Please refer to the &#x60;Geocoding structured query&#x60; in the model section below. Examples can be found [here](https://github.com/GIScience/openrouteservice-docs#geocoding-structured-query).  | [optional]
 **location** | **BigDecimal**| Coordinate to be inquired. | [optional]
 **lang** | **String**| Sets the language of the response. | [optional] [default to en] [enum: de, en, fr, it]
 **boundaryType** | **String**| Specifies the type of spatial search restriction.  &#x60;rect&#x60; for a rectangle and &#x60;circle&#x60; | [optional] [enum: rect, circle]
 **rect** | **String**| **For &#x60;boundary_type&#x3D;rect&#x60; only!** Sets the restriction rectangle&#39;s minimum/maximum longitude/latitude: &#x60;MinLong,MinLat,MaxLong,Maxlat&#x60;. Example: &#x60;8.696837,49.408739,8.703489,49.41209&#x60;  | [optional]
 **circle** | **String**| \&quot;**For &#x60;boundary_type&#x3D;circle&#x60; only!** Sets the restriction circle with a Centerpoint and a Radius in meters: &#x60;Long,Lat,Radius&#x60;. Example: &#x60;8.696837,49.408739,5000&#x60;\&quot;  | [optional]
 **limit** | **Double**| Specifies the maximum number of responses. Not needed for reverse. | [optional] [default to 20.0]
 **id** | **String**| Arbitrary identification string of the request reflected in the meta information. | [optional]

### Return type

[**Geocoderesponse**](Geocoderesponse.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/json; charset=utf-8

