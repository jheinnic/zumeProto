package name.jchein.portfolio.common.uom.units;


import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.annotation.Priority;
import javax.measure.spi.SystemOfUnits;
import javax.measure.spi.SystemOfUnitsService;

import tec.uom.lib.common.function.IntPrioritySupplier;
import tec.uom.se.unit.Units;


/**
 * @author <a href="mailto:jheinnic@hotmail.com">John Heinnickel</a>
 * @version 0.1, August 15, 2016
 */
@Priority(CitrineSystemOfUnitsService.PRIORITY)
public class CitrineSystemOfUnitsService
implements SystemOfUnitsService, IntPrioritySupplier
{
	final static int PRIORITY = 100;


	@Override
	public int getPriority()
	{
		return PRIORITY;
	}


	final Map<String, SystemOfUnits> souMap = new ConcurrentHashMap<>();

	public CitrineSystemOfUnitsService()
	{
		souMap.put(Units.class.getSimpleName(), Units.getInstance());
		souMap.put(CitrineUnits.class.getSimpleName(), CitrineUnits.getInstance());
	}


	@Override
	public Collection<SystemOfUnits> getAvailableSystemsOfUnits()
	{
		return souMap.values();
	}


	@Override
	public SystemOfUnits getSystemOfUnits()
	{
		return getSystemOfUnits(CitrineUnits.class.getSimpleName());
	}


	@Override
	public SystemOfUnits getSystemOfUnits(String name)
	{
		return souMap.get(name);
	}
}