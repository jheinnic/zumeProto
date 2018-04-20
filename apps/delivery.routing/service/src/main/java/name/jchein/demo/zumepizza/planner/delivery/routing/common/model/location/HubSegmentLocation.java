///*
// * Copyright 2014 Red Hat, Inc. and/or its affiliates.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// *      http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// */
//
//package name.jchein.demo.zumepizza.planner.delivery.routing.common.model.location;
//
//import java.util.Map;
//
//import javax.measure.Quantity;
//
//import com.thoughtworks.xstream.annotations.XStreamAlias;
//
///**
// * Assistant for {@link RoadSegmentLocation}.
// * Used with {@link DistanceType#SEGMENTED_ROAD_DISTANCE}.
// */
//@XStreamAlias("VrpHubSegmentLocation")
//public class HubSegmentLocation<Cost extends Quantity<Cost>> extends AbstractSegmentLocation<Cost> {
//
//    // Prefer Map over array or List because customers might be added and removed in real-time planning.
//    protected Map<HubSegmentLocation<Cost>, Cost> hubTravelCostMap;
//
//    public HubSegmentLocation() {
//    }
//
//    public HubSegmentLocation(long id, double latitude, double longitude) {
//        super(id, latitude, longitude);
//    }
//
//    public Map<HubSegmentLocation<Cost>, Cost> getHubTravelCostMap() {
//        return hubTravelCostMap;
//    }
//
//    public void setHubTravelCostMap(Map<HubSegmentLocation<Cost>, Cost> hubTravelCostMap) {
//        this.hubTravelCostMap = hubTravelCostMap;
//    }
//
//    @Override
//    public Quantity<Cost> getTravelCostTo(Location<Cost> location) {
//        double distance;
//        if (location instanceof RoadSegmentLocation) {
//            distance = getDistanceDouble((RoadSegmentLocation<Cost>) location);
//        } else {
//            distance = hubTravelCostMap.get((HubSegmentLocation<Cost>) location);
//        }
//        // Multiplied by 1000 to avoid floating point arithmetic rounding errors
//        return (long) (distance * 1000.0 + 0.5);
//    }
//
//    @Override
//    public Cost getDistanceDouble(RoadSegmentLocation<Distance> location) {
//        Cost distance = nearbyTravelCostMap.get(location);
//        if (distance == null) {
//            // location isn't nearby
//            distance = getShortestDistanceDoubleThroughOtherHub(location);
//        }
//        return distance;
//    }
//
//    protected double getShortestDistanceDoubleThroughOtherHub(RoadSegmentLocation location) {
//        double shortestDistance = Double.MAX_VALUE;
//        // Don't use location.getHubTravelCostMap().keySet() instead because distances aren't always paired
//        for (Map.Entry<HubSegmentLocation, Double> otherHubEntry : hubTravelCostMap.entrySet()) {
//            HubSegmentLocation otherHub = otherHubEntry.getKey();
//            Double otherHubNearbyDistance = otherHub.nearbyTravelCostMap.get(location);
//            if (otherHubNearbyDistance != null) {
//                double distance = otherHubEntry.getValue() + otherHubNearbyDistance;
//                if (distance < shortestDistance) {
//                    shortestDistance = distance;
//                }
//            }
//        }
//        return shortestDistance;
//    }
//
//}
