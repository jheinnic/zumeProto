
# LocationsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**Filter**](Filter.md) |  |  [optional]
**details** | [**DetailsEnum**](#DetailsEnum) |  |  [optional]
**limit** | **Long** |  |  [optional]
**radius** | **Long** |  |  [optional]
**sortby** | [**SortbyEnum**](#SortbyEnum) |  |  [optional]
**bbox** | **String** | The pattern for this bbox string is &#x60;\&quot;minlon,minlat,maxlon,maxlat\&quot;&#x60; |  [optional]
**geometry** | **String** |  |  [optional]


<a name="DetailsEnum"></a>
## Enum: DetailsEnum
Name | Value
---- | -----
ADDRESS | &quot;address&quot;
CONTACT | &quot;contact&quot;
ATTRIBUTES | &quot;attributes&quot;


<a name="SortbyEnum"></a>
## Enum: SortbyEnum
Name | Value
---- | -----
CATEGORY | &quot;category&quot;
DISTANCE | &quot;distance&quot;



