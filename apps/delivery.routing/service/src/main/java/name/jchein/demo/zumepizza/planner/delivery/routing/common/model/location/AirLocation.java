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

import javax.measure.Quantity;
import javax.measure.quantity.Length;

import com.thoughtworks.xstream.annotations.XStreamAlias;

/**
 * The cost between 2 locations is a straight line: the euclidean distance between their GPS coordinates.
 * Used with {@link DistanceType#AIR_DISTANCE}.
 */
@XStreamAlias("VrpAirLocation")
public class AirLocation extends Location<Length> {

    public AirLocation() {
    }

    public AirLocation(long id, double latitude, double longitude) {
        super(id, latitude, longitude);
    }

    @Override
    public Quantity<Length> getTravelCostTo(Location<Length> location) {
        return getDirectDistanceTo(location);
        // Multiplied by 1000 to avoid floating point arithmetic rounding errors
        // return (long) (distance * 1000.0 + 0.5);
    }
}
