/*
 * Copyright 2012 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

package name.jchein.demo.zumepizza.planner.delivery.routing.common.model.location;


import javax.measure.Quantity;
import javax.measure.Unit;
import javax.measure.quantity.Length;
import javax.measure.spi.QuantityFactory;

import org.optaplanner.examples.common.domain.AbstractPersistable;
import org.optaplanner.examples.vehiclerouting.domain.VehicleRoutingSolution;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import com.thoughtworks.xstream.annotations.XStreamInclude;


@XStreamAlias("VrpLocation")
@XStreamInclude({
	AirLocation.class, RoadLocation.class // , RoadSegmentLocation.class, HubSegmentLocation.class
})
public abstract class Location<Cost extends Quantity<Cost>>
extends AbstractPersistable
{

	protected String name = null;
	protected double latitude;
	protected double longitude;

	protected transient QuantityFactory<Length> distanceFactory;
	protected transient Unit<Length> distanceUnit;

	protected transient QuantityFactory<Cost> costFactory;
	protected transient Unit<Cost> costUnit;


	public Location()
	{}


	public Location( long id, double latitude, double longitude )
	{
		super(id);
		this.latitude = latitude;
		this.longitude = longitude;
	}


	public String getName()
	{
		return name;
	}


	public void setName(String name)
	{
		this.name = name;
	}


	public double getLatitude()
	{
		return latitude;
	}


	public void setLatitude(double latitude)
	{
		this.latitude = latitude;
	}


	public double getLongitude()
	{
		return longitude;
	}


	public void setLongitude(double longitude)
	{
		this.longitude = longitude;
	}
	
	public void setDistanceFactory(QuantityFactory<Length> distanceFactory) {
		this.distanceFactory = distanceFactory;
	}

	public void setDistanceUnit(Unit<Length> distanceUnit)
	{
		this.distanceUnit = distanceUnit;
	}

	public void setCostFactory(QuantityFactory<Cost> costFactory)
	{
		this.costFactory = costFactory;
	}


	public void setCostUnit(Unit<Cost> costUnit)
	{
		this.costUnit = costUnit;
	}


	// ************************************************************************
	// Complex methods
	// ************************************************************************

	/**
	 * The distance's unit of measurement depends on the {@link VehicleRoutingSolution}'s {@link CostType}. It can be
	 * in miles or km, but for most cases it's in the TSPLIB's unit of measurement.
	 * 
	 * @param location
	 *           never null
	 * @return a positive number, the distance multiplied by 1000 to avoid floating point arithmetic rounding errors
	 */
	public abstract Quantity<Cost> getTravelCostTo(Location<Cost> location);


	public Quantity<Length> getDirectDistanceTo(Location<?> location)
	{
		// TODO: Use gdal Geometry.Cost() instead!

		// Implementation specified by TSPLIB http://www2.iwr.uni-heidelberg.de/groups/comopt/software/TSPLIB95/
		// Euclidean distance (Pythagorean theorem) - not correct when the surface is a sphere
		double latitudeDifference = location.latitude - latitude;
		double longitudeDifference = location.longitude - longitude;
		return this.distanceFactory.create(
			Math.sqrt(
				(latitudeDifference * latitudeDifference) + (longitudeDifference * longitudeDifference)),
			this.distanceUnit);
	}


	/**
	 * The angle relative to the direction EAST.
	 * 
	 * @param location
	 *           never null
	 * @return in Cartesian coordinates
	 */
	public double getAngle(Location<Cost> location)
	{
		// Euclidean distance (Pythagorean theorem) - not correct when the surface is a sphere
		double latitudeDifference = location.latitude - latitude;
		double longitudeDifference = location.longitude - longitude;
		return Math.atan2(latitudeDifference, longitudeDifference);
	}


	@Override
	public String toString()
	{
		if (name == null) { return super.toString(); }
		return name;
	}

}
