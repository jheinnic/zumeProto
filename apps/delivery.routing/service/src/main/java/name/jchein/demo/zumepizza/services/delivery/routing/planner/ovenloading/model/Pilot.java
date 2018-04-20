package name.jchein.demo.zumepizza.services.delivery.routing.planner.ovenloading.model;

import java.util.EnumSet;
import java.util.UUID;
import java.util.function.Consumer;

import javax.measure.Quantity;
import javax.measure.quantity.Time;

import org.javamoney.moneta.Money;

import lombok.Builder;
import lombok.Value;

@Value
@Builder(toBuilder=true)
public class Pilot
{
	int id;
	
	UUID uuid;
	
	EnumSet<PilotQualification> qualifications;
	
	Quantity<Time> payRateUnit;
	Money basePayValue;
	Money deliveryPayValue;
	Money supplyPayValue;
	Money shuttlePayValue; 
	
	public static Pilot build(Consumer<PilotBuilder> director) {
		final PilotBuilder builder = Pilot.builder();
		director.accept(builder);
		return builder.build();
	}
	
	public Pilot copy(Consumer<PilotBuilder> director) {
		final PilotBuilder builder = this.toBuilder();
		director.accept(builder);
		return builder.build();
	}
}
