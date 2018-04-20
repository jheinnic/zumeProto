package name.jchein.demo.zumepizza.services.delivery.routing.planner.vehiclerouting.model;

import java.util.ArrayList;
import java.util.List;

import org.optaplanner.core.api.domain.solution.PlanningEntityCollectionProperty;
import org.optaplanner.core.api.domain.solution.PlanningSolution;

@PlanningSolution
public class DeliverySchedule
{
	private ArrayList<Vehicle> vehicles = new ArrayList<Vehicle>();

    @PlanningEntityCollectionProperty
    public List<Vehicle> getVehicles() {
   	 return this.vehicles;
    }

}
