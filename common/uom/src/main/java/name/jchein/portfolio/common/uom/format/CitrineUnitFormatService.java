package name.jchein.portfolio.common.uom.format;


import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import javax.annotation.Priority;
import javax.measure.format.UnitFormat;
import javax.measure.spi.UnitFormatService;

import name.jchein.portfolio.common.uom.format.CitrineUnitFormat.Flavor;
import tec.uom.lib.common.function.IntPrioritySupplier;
import tec.uom.se.format.EBNFUnitFormat;
import tec.uom.se.format.LocalUnitFormat;
//import tec.uom.se.format.SimpleUnitFormat;


@Priority(CitrineUnitFormatService.PRIO)
public class CitrineUnitFormatService
implements UnitFormatService, IntPrioritySupplier
{
	static final int PRIO = 10000;

	private final static String DEFAULT_FORMAT = Flavor.CITRINE.name();

	private final Map<String, UnitFormat> formats = new HashMap<>();

	public CitrineUnitFormatService()
	{
		formats.put(DEFAULT_FORMAT, CitrineUnitFormat.getInstance(Flavor.CITRINE));
		formats.put("EBNF", EBNFUnitFormat.getInstance());
		formats.put("Local", LocalUnitFormat.getInstance());
		formats.put(Flavor.CITRINE.name(), CitrineUnitFormat.getInstance(Flavor.CITRINE));
	}


	@Override
	public UnitFormat getUnitFormat(String formatName)
	{
		Objects.requireNonNull(formatName, "Format name required");
		return formats.get(formatName);
	}


	@Override
	public UnitFormat getUnitFormat()
	{
		return formats.get(DEFAULT_FORMAT);
	}


	@Override
	public Set<String> getAvailableFormatNames()
	{
		return new HashSet<>(formats.keySet());
	}


	@Override
	public int getPriority()
	{
		return PRIO;
	}
}
