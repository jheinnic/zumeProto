package name.jchein.demo.zumepizza.planner.delivery.routing.vehiclerouting.model.assignments;

import org.optaplanner.core.api.domain.entity.PlanningEntity;
import org.optaplanner.core.api.domain.variable.PlanningVariable;

import lombok.Data;

@Data
@PlanningEntity
public class ExecutionPlan
{
	@PlanningVariable(valueRangeProviderRefs="numRoutesRange")
	int numRoutes;
}
