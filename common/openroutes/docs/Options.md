
# Options

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximumSpeed** | **Long** |  |  [optional]
**avoidFeatures** | [**List&lt;AvoidFeaturesEnum&gt;**](#List&lt;AvoidFeaturesEnum&gt;) |  |  [optional]
**vehicleType** | [**VehicleTypeEnum**](#VehicleTypeEnum) | Parameter for the driving-hgv Profile |  [optional]
**profileParams** | [**ProfileParams**](ProfileParams.md) |  |  [optional]
**avoidPolygons** | [**AvoidPolygons**](AvoidPolygons.md) |  |  [optional]


<a name="List<AvoidFeaturesEnum>"></a>
## Enum: List&lt;AvoidFeaturesEnum&gt;
Name | Value
---- | -----
HIGHWAYS | &quot;highways&quot;
TOLLWAYS | &quot;tollways&quot;
FERRIES | &quot;ferries&quot;
TUNNELS | &quot;tunnels&quot;
PAVEDROADS | &quot;pavedroads&quot;
UNPAVEDROADS | &quot;unpavedroads&quot;
TRACKS | &quot;tracks&quot;
FORDS | &quot;fords&quot;
STEPS | &quot;steps&quot;
HILLS | &quot;hills&quot;


<a name="VehicleTypeEnum"></a>
## Enum: VehicleTypeEnum
Name | Value
---- | -----
HGV | &quot;hgv&quot;
BUS | &quot;bus&quot;
AGRICULTURAL | &quot;agricultural&quot;
FORESTRY | &quot;forestry&quot;
GOODS | &quot;goods&quot;
DELIVERY | &quot;delivery&quot;



