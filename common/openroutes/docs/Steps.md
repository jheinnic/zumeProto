
# Steps

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | **Double** | The distance for the step in meters. |  [optional]
**duration** | **Double** | The duration for the step in seconds. |  [optional]
**type** | **Long** | The [instruction](https://github.com/GIScience/openrouteservice-docs#instruction-types) action for symbolisation purposes. |  [optional]
**instruction** | **String** | The routing instruction text for the step. |  [optional]
**name** | **String** | The name of the next street. |  [optional]
**maneuver** | [**Maneuver**](Maneuver.md) |  |  [optional]
**wayPoints** | **List&lt;Long&gt;** | List containing the indices of the steps start- and endpoint corresponding to the *geometry*. |  [optional]
**exitNumber** | **Long** | Only for roundabouts. Contains the number of the exit to take. |  [optional]
**exitBearings** | **List&lt;Long&gt;** | Contains the bearing of the entrance and all passed exits in a roundabout for &#x60;roundabout_exits&#x3D;true&#x60;. |  [optional]



