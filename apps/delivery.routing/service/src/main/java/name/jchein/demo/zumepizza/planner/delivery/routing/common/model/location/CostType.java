/*
 * Copyright 2014 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package name.jchein.demo.zumepizza.planner.delivery.routing.common.model.location;

import org.optaplanner.examples.vehiclerouting.domain.location.segmented.HubSegmentLocation;
import org.optaplanner.examples.vehiclerouting.domain.location.segmented.RoadSegmentLocation;

public enum CostType {
    /**
     * Cost metric is equal to the distance in miles or kilometers between each Waypoint pair.
     */
    DISTANCE,
    /**
     * Cost metric is equal to estimated fuel required to travel between each Waypoint pair.
     */
    FUEL,
    /**
     * Cost metric is equal to traffic-aware travel time as reported between each Waypoint pair.
     */
    TIME;
}
