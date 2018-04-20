
# MatrixBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile** | [**ProfileEnum**](#ProfileEnum) | Specifies the route profile. |  [optional]
**locations** | [**List&lt;List&lt;Double&gt;&gt;**](List.md) | List of comma separated lists of &#x60;longitude,latitude&#x60; coordinates (note, without quotes around the coordinates, this is a displaying error of swagger).  example : &#x60;\&quot;locations\&quot;:[[9.70093,48.477473],[9.207916,49.153868],[37.573242,55.801281],[115.663757,38.106467]]&#x60;  |  [optional]
**sources** | **List&lt;String&gt;** | A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). &#x60;{index_1},{index_2}[,{index_N} ...]&#x60; or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location.  |  [optional]
**metrics** | [**MetricsEnum**](#MetricsEnum) | Specifies a list of returned metrics separated with a pipe character (|). * &#x60;distance&#x60; - Returns distance matrix for specified points in defined &#x60;units&#x60;. * &#x60;duration&#x60; - Returns duration matrix for specified points in defined &#x60;units&#x60;. * &#x60;weight&#x60;   - Returns weight matrix for specified points in defined &#x60;units&#x60;.  |  [optional]
**resolveLocations** | **Boolean** | Specifies whether given locations are resolved or not. If the parameter value set to &#x60;true&#x60;, every element in destinations and sources will contain &#x60;name&#x60; element that identifies the name of the closest street. Default is &#x60;false&#x60; |  [optional]
**units** | [**UnitsEnum**](#UnitsEnum) | Specifies the unit of measurement for distances. Default is &#x60;m&#x60; |  [optional]
**optimized** | **Boolean** | Specifies whether Dijkstra algorithm (&#x60;false&#x60;) or any available technique to speed up shortest-path routing (&#x60;true&#x60;) is used.  |  [optional]


<a name="ProfileEnum"></a>
## Enum: ProfileEnum
Name | Value
---- | -----
DRIVING_CAR | &quot;driving-car&quot;
DRIVING_HGV | &quot;driving-hgv&quot;
CYCLING_REGULAR | &quot;cycling-regular&quot;
CYCLING_ROAD | &quot;cycling-road&quot;
CYCLING_SAFE | &quot;cycling-safe&quot;
CYCLING_MOUNTAIN | &quot;cycling-mountain&quot;
CYCLING_TOUR | &quot;cycling-tour&quot;
CYCLING_ELECTRIC | &quot;cycling-electric&quot;
FOOT_WALKING | &quot;foot-walking&quot;
FOOT_HIKING | &quot;foot-hiking&quot;
WHEELCHAIR | &quot;wheelchair&quot;


<a name="MetricsEnum"></a>
## Enum: MetricsEnum
Name | Value
---- | -----
DISTANCE | &quot;distance&quot;
DURATION | &quot;duration&quot;
WEIGHT | &quot;weight&quot;


<a name="UnitsEnum"></a>
## Enum: UnitsEnum
Name | Value
---- | -----
M | &quot;m&quot;
KM | &quot;km&quot;
MI | &quot;mi&quot;



