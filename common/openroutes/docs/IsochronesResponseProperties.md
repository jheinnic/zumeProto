
# IsochronesResponseProperties

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **Double** | Area of the polygon in square meters (for attributes&#x3D;area). |  [optional]
**reachfactor** | **Double** | Returns a reachability score between 0 and 1. As the maximum reachfactor would be achieved by travelling as the crow flies at maximum speed in a vacuum without obstacles, naturally it can never be 1. The availability of motorways however produces a higher score over normal roads.  |  [optional]
**center** | **List&lt;Double&gt;** | The coordinates of the specific analysis location. |  [optional]
**groupIndex** | **Long** | Id of the isochrone based on the position in the &#x60;locations&#x60; query-parameter. Every location comprises its own group of polygons. |  [optional]
**value** | **Long** | The range value of this isochrone/equidistant in seconds/meters. |  [optional]
**contours** | [**List&lt;List&lt;Long&gt;&gt;**](List.md) | For intersections&#x3D;true. Every intersection polygon comprises contours with an index array for each participating isochrone. |  [optional]



