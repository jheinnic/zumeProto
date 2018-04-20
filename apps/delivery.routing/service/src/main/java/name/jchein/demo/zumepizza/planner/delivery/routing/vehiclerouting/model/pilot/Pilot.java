package name.jchein.demo.zumepizza.planner.delivery.routing.vehiclerouting.model.pilot;

import java.time.Duration;
import java.time.Instant;
import java.util.EnumSet;

import javax.measure.Quantity;
import javax.measure.quantity.Frequency;
import javax.money.MonetaryAmount;

import name.jchein.demo.zumepizza.planner.delivery.routing.vehiclerouting.model.waypoint.Waypoint;

public class Pilot
{
	EnumSet<PilotQualificationKind> qualifications;
	
	Quantity<Frequency> payRateFrequency;
	MonetaryAmount basePayRate;
	MonetaryAmount deliveryPayRate;
	MonetaryAmount supplyPayRate;
	MonetaryAmount shuttlePayRate;
	
	Waypoint clockInLocation;
	
	Instant scheduledTime;
	Instant clockInTime;
	Instant clockOutTime;
	Duration maxOvertime;
}
