package name.jchein.demo.zumepizza.planner.delivery.routing.vehiclerouting.model.order;

import java.util.UUID;

import javax.measure.Quantity;
import javax.measure.quantity.Temperature;

import org.optaplanner.examples.common.domain.AbstractPersistable;

public class PizzaVariety extends AbstractPersistable
{
	UUID id;
	String shortAlias;
	String displayName;
	Quantity<Temperature> bakeTemperature;
}
