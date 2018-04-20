# PlacesApi

All URIs are relative to *https://api.openrouteservice.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**placesGet**](PlacesApi.md#placesGet) | **GET** /places | Location Service
[**placesPost**](PlacesApi.md#placesPost) | **POST** /places | Location Service


<a name="placesGet"></a>
# **placesGet**
> LocationsPoiResponse placesGet(request, categoryGroupIds, categoryIds, name, wheelchair, smoking, fee, bbox, geometry, radius, limit, sortby, details, id)

Location Service

Returns Points of Interest in the area surrounding a point or a line geometry. Use the post endpoint for requests that exceed the get character limit.  - **pois:** Either &#x60;geometry&#x60; or &#x60;bbox&#x60; are required. &#x60;radius&#x60; required depending on &#x60;geometry&#x60;. - **category_stats:** Either &#x60;geometry&#x60; or &#x60;bbox&#x60; are required. &#x60;radius&#x60; required depending on &#x60;geometry&#x60;. - **category_list:** Additionally to this List the category groups and ids can be found [here](https://github.com/GIScience/openrouteservice-docs). 

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.PlacesApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: UserSecurity
ApiKeyAuth UserSecurity = (ApiKeyAuth) defaultClient.getAuthentication("UserSecurity");
UserSecurity.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.setApiKeyPrefix("Token");

PlacesApi apiInstance = new PlacesApi();
String request = "pois"; // String | `pois` will return POI geometry as well as requested details. `category_stats` returns a POI count for each requested category. `category_list` returns a list of all categories (only the id parameter will be considered). 
String categoryGroupIds = "420"; // String | Comma seperated list of category group ids. 
String categoryIds = "categoryIds_example"; // String | Comma seperated list of category ids. 
String name = "name_example"; // String | Name to filter the POIs by. **Only finds exact matches**
String wheelchair = "wheelchair_example"; // String | Filter returned features by wheelchair tag entries. 
String smoking = "smoking_example"; // String | Filter returned features by wheelchair tag entries. 
String fee = "fee_example"; // String | Filter returned features by fee tag entries. 
List<Double> bbox = Arrays.asList(3.4D); // List<Double> | Defines a clipping bounding box. Can be defined additionally to `geometry`. 
String geometry = "{type: LineString, coordinates:[[8.167426,49.272556],[8.167588,47.272445],[8.168082,47.272105],[8.168224,47.271917],[8.16831,47.271941],[8.168926,47.272216],[8.169054,47.272278],[8.169165,47.272186],[8.169256,47.272103],[8.16948,47.271921],[8.170129,47.271408],[8.170265,47.271295],[8.170701,47.27097],[8.171496,47.270485],[8.171796,47.270296]]}"; // String | GeoJSON geometry object (Point, Linestring or Polygon) 
Double radius = 3.4D; // Double | Search radius in meters around the given (might be limited in the backend). **Required if geometry is a Point or Linestring** 
Long limit = 789L; // Long | Maximum number of returned objects (might be limited in the backend). **For** `request=pois` **only.** 
String sortby = "sortby_example"; // String | Sorts the returned features by _distance_ or _category_. **For** `request=pois` **only.** 
List<String> details = Arrays.asList("details_example"); // List<String> | Pipe (|) seperated list of desired details. **For** `request=pois` **only.** 
String id = "id_example"; // String | Arbitrary identification string of the request reflected in the meta information.
try {
    LocationsPoiResponse result = apiInstance.placesGet(request, categoryGroupIds, categoryIds, name, wheelchair, smoking, fee, bbox, geometry, radius, limit, sortby, details, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PlacesApi#placesGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **String**| &#x60;pois&#x60; will return POI geometry as well as requested details. &#x60;category_stats&#x60; returns a POI count for each requested category. &#x60;category_list&#x60; returns a list of all categories (only the id parameter will be considered).  | [default to pois] [enum: pois, category_stats, category_list]
 **categoryGroupIds** | **String**| Comma seperated list of category group ids.  | [optional] [default to 420]
 **categoryIds** | **String**| Comma seperated list of category ids.  | [optional]
 **name** | **String**| Name to filter the POIs by. **Only finds exact matches** | [optional]
 **wheelchair** | **String**| Filter returned features by wheelchair tag entries.  | [optional] [enum: true, false, limited]
 **smoking** | **String**| Filter returned features by wheelchair tag entries.  | [optional] [enum: true, false]
 **fee** | **String**| Filter returned features by fee tag entries.  | [optional] [enum: true, false]
 **bbox** | [**List&lt;Double&gt;**](Double.md)| Defines a clipping bounding box. Can be defined additionally to &#x60;geometry&#x60;.  | [optional]
 **geometry** | **String**| GeoJSON geometry object (Point, Linestring or Polygon)  | [optional] [default to {type: LineString, coordinates:[[8.167426,49.272556],[8.167588,47.272445],[8.168082,47.272105],[8.168224,47.271917],[8.16831,47.271941],[8.168926,47.272216],[8.169054,47.272278],[8.169165,47.272186],[8.169256,47.272103],[8.16948,47.271921],[8.170129,47.271408],[8.170265,47.271295],[8.170701,47.27097],[8.171496,47.270485],[8.171796,47.270296]]}]
 **radius** | **Double**| Search radius in meters around the given (might be limited in the backend). **Required if geometry is a Point or Linestring**  | [optional] [default to 500.0]
 **limit** | **Long**| Maximum number of returned objects (might be limited in the backend). **For** &#x60;request&#x3D;pois&#x60; **only.**  | [optional]
 **sortby** | **String**| Sorts the returned features by _distance_ or _category_. **For** &#x60;request&#x3D;pois&#x60; **only.**  | [optional] [enum: distance, category]
 **details** | [**List&lt;String&gt;**](String.md)| Pipe (|) seperated list of desired details. **For** &#x60;request&#x3D;pois&#x60; **only.**  | [optional] [enum: address, contact, attributes]
 **id** | **String**| Arbitrary identification string of the request reflected in the meta information. | [optional]

### Return type

[**LocationsPoiResponse**](LocationsPoiResponse.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/json; charset=utf-8

<a name="placesPost"></a>
# **placesPost**
> LocationsPoiResponse placesPost(body)

Location Service

Returns Points of Interest in the area surrounding a geometry. 

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.PlacesApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: UserSecurity
ApiKeyAuth UserSecurity = (ApiKeyAuth) defaultClient.getAuthentication("UserSecurity");
UserSecurity.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.setApiKeyPrefix("Token");

PlacesApi apiInstance = new PlacesApi();
LocationsBody body = new LocationsBody(); // LocationsBody | body for a post request
try {
    LocationsPoiResponse result = apiInstance.placesPost(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PlacesApi#placesPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationsBody**](LocationsBody.md)| body for a post request | [optional]

### Return type

[**LocationsPoiResponse**](LocationsPoiResponse.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/json; charset=utf-8

