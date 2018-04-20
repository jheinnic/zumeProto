package name.jchein.portfolio.common.uom.units;

import javax.measure.Quantity;
import javax.measure.quantity.Length;
import javax.measure.quantity.Mass;
import javax.measure.quantity.Speed;
import javax.measure.quantity.Time;
import javax.measure.spi.QuantityFactory;
import javax.measure.spi.ServiceProvider;

public class MMM
{

	public static void main(String[] args) throws InterruptedException
	{
		ServiceProvider provider = ServiceProvider.current();
		QuantityFactory<Length> qfL = provider.getQuantityFactory(Length.class);
		QuantityFactory<Speed> qfS = provider.getQuantityFactory(Speed.class);
		Quantity<Length> ql = qfL.create(100, CitrineUnits.METER);
		Quantity<Speed> qs = qfS.create(40, CitrineUnits.METERS_PER_SECOND);
		System.out.println(ql);
		System.out.println(qs);

		System.out.println(timeToDestination(ql, qs));

		System.out.println(massToDestination(ql, qs));
	}

	static Quantity<Time> timeToDestination(Quantity<Length> distance, Quantity<Speed> speed) {
		 return distance.divide(speed).asType(Time.class);
	}
	
	static Quantity<Mass> massToDestination(Quantity<Length> distance, Quantity<Speed> speed) {
		 return distance.divide(speed).asType(Mass.class);
	}
}
