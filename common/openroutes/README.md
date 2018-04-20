# swagger-java-client

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>io.swagger</groupId>
    <artifactId>swagger-java-client</artifactId>
    <version>1.0.0</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "io.swagger:swagger-java-client:1.0.0"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/swagger-java-client-1.0.0.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.DirectionsApi;

import java.io.File;
import java.util.*;

public class DirectionsApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        
        // Configure API key authorization: UserSecurity
        ApiKeyAuth UserSecurity = (ApiKeyAuth) defaultClient.getAuthentication("UserSecurity");
        UserSecurity.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //UserSecurity.setApiKeyPrefix("Token");

        DirectionsApi apiInstance = new DirectionsApi();
        List<String> coordinates = Arrays.asList("coordinates_example"); // List<String> | Pipe (|) separated List of longitude,latitude coordinates visited in order.  Example values:   `8.34234,48.23424`   `8.34423,48.26424` 
        String profile = "driving-car"; // String | Specifies the route profile.
        String preference = "fastest"; // String | Specifies the route preference.
        String units = "m"; // String | Specifies the distance unit.
        String language = "en"; // String | Language for the route instructions.
        Boolean geometry = true; // Boolean | Specifies whether to return geometry.
        String geometryFormat = "encodedpolyline"; // String | Sets the format of the returned geometry. Note that for `elevation=true` `encodedpolyline` also encodes the height information of each point. To decode, please use a suitable library (for example [graphhopper](https://github.com/graphhopper/graphhopper/blob/master/web/src/main/java/com/graphhopper/http/WebHelper.java)). 
        Boolean geometrySimplify = false; // Boolean | Specifies whether to simplify the geometry. `true` will automatically be set to `false` if `extra_info` parameter is specified.
        Boolean instructions = true; // Boolean | Specifies whether to return instructions.
        String instructionsFormat = "text"; // String | Select `html` for more verbose instructions.
        Boolean roundaboutExits = false; // Boolean | Provides bearings of the entrance and all passed roundabout exits. Adds the `exit_bearings` array to the `step` object in the response. Default is `false`.
        List<String> attributes = Arrays.asList("attributes_example"); // List<String> | Pipe (|) seperated List of route attributes: * `avgspeed` - Returns average speed of each segment and the route in km/h. * `detour_factor` - Returns the deviation of a segment compared to a straight line (1) from A to B. * `percentage` - Returns the proportion of the route for each segment. 
        Boolean maneuvers = false; // Boolean | Specifies whether the maneuver object is included into the `step` object or not. Default value is `false`.
        List<Float> radiuses = Arrays.asList(3.4F); // List<Float> | A pipe (`|`) delimited list of maximum distances (measured in meters) that limit the search of nearby road segments to every given waypoint. The values must be greater than `0`, the value of `-1` specifies no limit in the search. The number of radiuses correspond to the number of waypoints. 
        List<String> bearings = Arrays.asList("bearings_example"); // List<String> | Specifies a pipe (|) delimited list of pairs (bearings and deviations) to filter the segments of the road network a waypoint can snap to. For example `bearings=45,10|120,20`.  Each pair is a comma-separated list that can consist of one or two float values, where the first value is the bearing and the second one is the allowed deviation from the bearing. The bearing can take values between `0` and `360` clockwise from true north. If the deviation is not set, then the default value of `100` degrees is used. The number of pairs must correspond to the number of waypoints.  Setting `optimized=false` is mandatory for this feature to work for all profiles. The number of bearings corresponds to the length of waypoints-1 or waypoints. If the bearing information for the last waypoint is given, then this will control the sector from which the destination waypoint may be reached. You can skip a bearing for a certain waypoint by passing an empty value for a pair, e.g. 30,20||40,20. 
        Boolean continueStraight = false; // Boolean | Forces the route to keep going straight at waypoints restricting uturns there even if it would be faster. This setting will work for all profiles except for `driving-*`. In this case you will have to set `optimized=false` for it to work. `false` by default
        Boolean elevation = false; // Boolean | Specifies whether to return elevation values for points. Please note that elevation also gets encoded for `geometry_format=encodedpolyline`.
        List<String> extraInfo = Arrays.asList("extraInfo_example"); // List<String> | Pipe (|) separated List of additional information. Returns information on [steepness](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#steepness), [suitability](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#suitability), [surface](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#surface), [waycategory](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#waycategory), [waytype](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#waytype), [tollways](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#tollways) or [trail difficulty](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#trail-difficulty) 
        Boolean optimized = true; // Boolean | Uses contraction hierarchies if available (`false`). `true` by default 
        String options = "{}"; // String | For advanced options formatted as json object. For structure refer to the **options model** below. The available parameters are:     - `maximum_speed` : Specifies a maximum travel speed restriction in km/h.     - `avoid_features` : Pipe (|) seperated list of features to avoid.     The available features are :        |     Feature    | Available for                               |       |:--------------:|---------------------------------------------|       | `highways`     | driving-*                                   |       | `tollways`     | driving-*                                   |       | `ferries`      | driving-\\*, cycling-\\*, foot-\\*, wheelchair |       | `tunnels`      | driving-*                                   |       | `pavedroads`   | driving-\\*, cycling-*                       |       | `unpavedroads` | driving-\\*, cycling-*                       |       | `tracks`       | driving-*                                   |       | `fords`        | driving-\\*, cycling-\\*, foot-*              |       | `steps`        | cycling-\\*, foot-\\*, wheelchair             |       | `hills`        | cycling-\\*, foot-\\*                         |     - `vehicle_type` (for `profile=driving-hgv` only): `hgv`,`bus`,`agricultural`,`delivery`,`forestry` and `goods`. It is needed for **vehicle restrictions** to work.     - `profile_params` : Specifies additional routing parameters.     - `weightings`: Weightings will prioritize specified factors over the shortest path.       - `steepness_difficulty`: Specifies the fitness level for `cycling-*` profiles.         - `level`: `0` = Novice, `1` = Moderate, `2` = Amateur, `3` = Pro. The prefered gradient increases with level        - `green`: Specifies the Green factor for `foot-*` profiles.         - `factor`: Values range from `0` to `1`. `0` equals normal routing. `1` will prefer ways through green areas over a shorter route.        - `quiet`: Specifies the Quiet factor for `foot-*` profiles.         - `factor`: Values range from `0` to `1`. `0` equals normal routing. `1` will prefer quiet ways over a shorter route.      - `restrictions` : Specifies restrictions for `driving-hgv`, `wheelchair` or `cycling-*` profiles.       - for `cycling-*`:                       |  Parameter | Description                                                                                                                                                                               |           |:----------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|           | `gradient` | Only for avoided `hills` or specified `steepness_difficulty`. Specifies the maximum route steepness in percent. Values range from `1` to `15`. Routes with a higher gradient are avoided. |        - for `driving-hgv`:          _(you have to specify the `vehicle_type` in the options for these parameters)_            |  Parameter | Description                                                                                                                       |           |:----------:|-----------------------------------------------------------------------------------------------------------------------------------|           | `length`   | Length restriction in meters.                                                                                                     |           | `width`    | Width restriction in meters.                                                                                                      |           | `height`   | Height restriction in meters.                                                                                                     |           | `axleload` | Axleload restriction in tons.                                                                                                     |           | `weight`   | Weight restriction in tons.                                                                                                       |           | `hazmat`   | Specifies whether to use appropriate routing for delivering hazardous goods and avoiding water protected areas. Default is false. |        - for `wheelchair`:          |       Parameter       | Description                                                                                                                 |         |:---------------------:|-----------------------------------------------------------------------------------------------------------------------------|         |     `surface_type`    | Specifies the minimum [surface type](http://wiki.openstreetmap.org/wiki/Key:surface). Default is `\"cobblestone:flattened\"`. |         |      `track_type`     | Specifies the minimum [grade](http://wiki.openstreetmap.org/wiki/Key:tracktype) of the route. Default is `\"grade1\"`.        |         |   `smoothness_type`   | Specifies the minimum [smoothness](http://wiki.openstreetmap.org/wiki/Key:smoothness) of the route. Default is `\"good\"`.    |         | `maximum_sloped_curb` | Specifies the maximum height of the sloped curb in meters. Values are `0.03`, `0.06`(default), `0.1` or `any`.              |         |   `maximum_incline`   | Specifies the maximum incline as a percentage. `3`, `6`(default), `10`, `15` or `any`.                                      |     - `avoid_polygons` : Comprises areas to be avoided for the route. Formatted as [geojson polygon](http://geojson.org/geojson-spec.html#id4) or [geojson multipolygon](http://geojson.org/geojson-spec.html#id7).  This is an example options object for a `cycling-*` profile:  ```json {   \"maximum_speed\": 10,   \"avoid_features\": \"unpavedroads\",   \"profile_params\": {     \"weightings\": {       \"steepness_difficulty\": {         \"level\": 1       },       \"green\": {         \"factor\": 0.8       },       \"quiet\": {         \"factor\": 1.0       }     },     \"restrictions\": {       \"gradient\": 5     }   },   \"avoid_polygons\": {     \"type\": \"Polygon\",     \"coordinates\": [                     [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]    ]} } ``` The minified form(for copy paste purposes):  `{\"maximum_speed\":10,\"avoid_features\":\"unpavedroads\",\"profile_params\":{\"weightings\":{\"steepness_difficulty\":{\"level\":1},\"green\":{\"factor\":0.8},\"quiet\":{\"factor\":1.0}},\"restrictions\":{\"gradient\":5}},\"avoid_polygons\":{\"type\":\"Polygon\",\"coordinates\":[[[100.0,0.0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0]]]}}`  More examples can be found [here](https://github.com/GIScience/openrouteservice-docs#examples). 
        String id = "id_example"; // String | Arbitrary identification string of the request reflected in the meta information.
        try {
            Routeresponse result = apiInstance.directionsGet(coordinates, profile, preference, units, language, geometry, geometryFormat, geometrySimplify, instructions, instructionsFormat, roundaboutExits, attributes, maneuvers, radiuses, bearings, continueStraight, elevation, extraInfo, optimized, options, id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DirectionsApi#directionsGet");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://api.openrouteservice.org*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DirectionsApi* | [**directionsGet**](docs/DirectionsApi.md#directionsGet) | **GET** /directions | Routing Service
*GeocodingApi* | [**geocodingGet**](docs/GeocodingApi.md#geocodingGet) | **GET** /geocoding | Geocoding Service
*IsochronesApi* | [**isochronesGet**](docs/IsochronesApi.md#isochronesGet) | **GET** /isochrones | Isochrones Service
*MatrixApi* | [**matrixGet**](docs/MatrixApi.md#matrixGet) | **GET** /matrix | Matrix Service
*MatrixApi* | [**matrixPost**](docs/MatrixApi.md#matrixPost) | **POST** /matrix | Matrix Service
*PlacesApi* | [**placesGet**](docs/PlacesApi.md#placesGet) | **GET** /places | Location Service
*PlacesApi* | [**placesPost**](docs/PlacesApi.md#placesPost) | **POST** /places | Location Service


## Documentation for Models

 - [AvoidPolygons](docs/AvoidPolygons.md)
 - [Error](docs/Error.md)
 - [ErrorError](docs/ErrorError.md)
 - [ErrorInfo](docs/ErrorInfo.md)
 - [Extras](docs/Extras.md)
 - [ExtrasProperty](docs/ExtrasProperty.md)
 - [Filter](docs/Filter.md)
 - [GeocodeStructuredQuery](docs/GeocodeStructuredQuery.md)
 - [Geocoderesponse](docs/Geocoderesponse.md)
 - [GeocoderesponseFeatures](docs/GeocoderesponseFeatures.md)
 - [GeocoderesponseGeometry](docs/GeocoderesponseGeometry.md)
 - [GeocoderesponseInfo](docs/GeocoderesponseInfo.md)
 - [GeocoderesponseInfoQuery](docs/GeocoderesponseInfoQuery.md)
 - [GeocoderesponseProperties](docs/GeocoderesponseProperties.md)
 - [GeometryCoordinates](docs/GeometryCoordinates.md)
 - [InfoEngine](docs/InfoEngine.md)
 - [IsochronesResponse](docs/IsochronesResponse.md)
 - [IsochronesResponseFeatures](docs/IsochronesResponseFeatures.md)
 - [IsochronesResponseGeometry](docs/IsochronesResponseGeometry.md)
 - [IsochronesResponseInfo](docs/IsochronesResponseInfo.md)
 - [IsochronesResponseInfoQuery](docs/IsochronesResponseInfoQuery.md)
 - [IsochronesResponseProperties](docs/IsochronesResponseProperties.md)
 - [LocationFeatures](docs/LocationFeatures.md)
 - [LocationFeaturesGeometry](docs/LocationFeaturesGeometry.md)
 - [LocationFeaturesProperties](docs/LocationFeaturesProperties.md)
 - [LocationsBody](docs/LocationsBody.md)
 - [LocationsPoiResponse](docs/LocationsPoiResponse.md)
 - [LocationsPoiResponseInfo](docs/LocationsPoiResponseInfo.md)
 - [LocationsPoiResponseInfoQuery](docs/LocationsPoiResponseInfoQuery.md)
 - [LocationsPoiResponseInfoQueryFilter](docs/LocationsPoiResponseInfoQueryFilter.md)
 - [Maneuver](docs/Maneuver.md)
 - [MatrixBody](docs/MatrixBody.md)
 - [MatrixResponse](docs/MatrixResponse.md)
 - [MatrixResponseDistances](docs/MatrixResponseDistances.md)
 - [MatrixResponseDurations](docs/MatrixResponseDurations.md)
 - [MatrixResponseInfo](docs/MatrixResponseInfo.md)
 - [MatrixResponseInfoQuery](docs/MatrixResponseInfoQuery.md)
 - [MatrixResponseLocation](docs/MatrixResponseLocation.md)
 - [MatrixResponseWeights](docs/MatrixResponseWeights.md)
 - [Options](docs/Options.md)
 - [ProfileParams](docs/ProfileParams.md)
 - [ProfileParamsRestrictions](docs/ProfileParamsRestrictions.md)
 - [ProfileParamsWeightings](docs/ProfileParamsWeightings.md)
 - [Routeresponse](docs/Routeresponse.md)
 - [RouteresponseInfo](docs/RouteresponseInfo.md)
 - [RouteresponseInfoQuery](docs/RouteresponseInfoQuery.md)
 - [RouteresponseRoutes](docs/RouteresponseRoutes.md)
 - [RoutesGeometry](docs/RoutesGeometry.md)
 - [RoutesSummary](docs/RoutesSummary.md)
 - [Segments](docs/Segments.md)
 - [Steps](docs/Steps.md)
 - [SummaryObject](docs/SummaryObject.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### UserSecurity

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: URL query string


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author

support@openrouteservice.org

