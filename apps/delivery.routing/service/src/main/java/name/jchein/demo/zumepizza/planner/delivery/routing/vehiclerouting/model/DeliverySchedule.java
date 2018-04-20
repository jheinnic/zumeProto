package name.jchein.demo.zumepizza.planner.delivery.routing.vehiclerouting.model;

import java.util.ArrayList;
import java.util.List;

import org.optaplanner.core.api.domain.solution.PlanningEntityCollectionProperty;
import org.optaplanner.core.api.domain.solution.PlanningScore;
import org.optaplanner.core.api.domain.solution.PlanningSolution;
import org.optaplanner.core.api.score.buildin.hardsoftbigdecimal.HardSoftBigDecimalScore;
import org.optaplanner.persistence.jackson.api.score.ScoreJacksonJsonSerializer;
import org.optaplanner.persistence.jackson.api.score.buildin.hardsoftbigdecimal.HardSoftBigDecimalScoreJacksonJsonDeserializer;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import name.jchein.demo.zumepizza.planner.delivery.routing.vehiclerouting.model.vehicle.Vehicle;

@JsonSerialize
@JsonDeserialize
@PlanningSolution
public class DeliverySchedule
{
	private ArrayList<Vehicle> vehicles = new ArrayList<Vehicle>();
	
	@JsonSerialize(using=ScoreJacksonJsonSerializer.class)
	@JsonDeserialize(using=HardSoftBigDecimalScoreJacksonJsonDeserializer.class)
	private HardSoftBigDecimalScore score;

	@PlanningScore
	public HardSoftBigDecimalScore getScore() {
		return this.score;
	}

    @PlanningEntityCollectionProperty
    public List<Vehicle> getVehicles() {
   	 return this.vehicles;
    }

}
