package name.jchein.portfolio.common.uom.format;


import java.io.IOException;
import java.io.StringReader;
import java.text.ParsePosition;
import java.util.Map;
import java.util.ResourceBundle;

import javax.measure.Quantity;
import javax.measure.Unit;
import javax.measure.format.ParserException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.base.Preconditions;

import name.jchein.portfolio.common.uom.units.CitrineUnits;
import tec.uom.se.AbstractUnit;
import tec.uom.se.format.SimpleUnitFormat;
import tec.uom.se.format.SymbolMap;
import tec.uom.se.internal.format.TokenException;
import tec.uom.se.internal.format.TokenMgrError;
import tec.uom.se.internal.format.UnitFormatParser;


public class CitrineUnitFormat
extends SimpleUnitFormat
{
	private static final Logger LOGGER = LoggerFactory.getLogger(CitrineUnitFormat.class);

	private final CitrineDefaultFormat defaultDelegate;
	private final SymbolMap symbolMap;

	private static final String CITRINE_BUNDLE_NAME =
		CitrineUnitFormat.class.getPackage()
			.getName() + ".messages"; //$NON-NLS-1$


	public enum Flavor {
		CITRINE
   }
	
	public static final CitrineUnitFormat getInstance(Flavor flavor)
	{
		Preconditions.checkArgument(flavor==Flavor.CITRINE);
		return new CitrineUnitFormat();
	}


	protected CitrineUnitFormat()
	{
		defaultDelegate = new CitrineDefaultFormat();
		symbolMap = SymbolMap.of(ResourceBundle.getBundle(CITRINE_BUNDLE_NAME));
		System.out.println(symbolMap);
	}


	public static class CitrineDefaultFormat
	extends SimpleUnitFormat.DefaultFormat
	{
		// TODO
	}


	@Override
	public Unit<?> parse(CharSequence csq) throws ParserException
	{
		return parse(csq, 0);
	}


	@Override
	protected Unit<?> parse(CharSequence csq, int index) throws IllegalArgumentException
	{
		// Parsing reads the whole character sequence from the parse position.
		int start = index; // cursor != null ? cursor.getIndex() : 0;
		int end = csq.length();
		if (end <= start) { return AbstractUnit.ONE; }
		String source =
			csq.subSequence(start, end)
				.toString()
				.trim();
		if (source.length() == 0) { return AbstractUnit.ONE; }
		try {
			final UnitFormatParser parser = new UnitFormatParser(symbolMap, new StringReader(source));
			final Unit<?> result = parser.parseUnit();
			// if (cursor != null)
			// cursor.setIndex(end);
			return result;
		}
		catch (TokenException | TokenMgrError e) {
			// if (cursor != null) {
			// if (e.currentToken != null) {
			// cursor.setErrorIndex(start + e.currentToken.endColumn);
			// } else {
			// cursor.setErrorIndex(start);
			// }
			// }
			throw new ParserException(e); // , "Could not advance to given cursor positon", index);
		}
		// return defaultDelegate.parseObject(csq, cursor);
	}


	@Override
	protected Unit<?> parse(CharSequence csq, ParsePosition cursor) throws IllegalArgumentException
	{
		return parse(csq, cursor.getIndex());
	}


	@Override
	@SuppressWarnings("rawtypes")
	public Unit<? extends Quantity> parseProductUnit(CharSequence csq, ParsePosition pos)
	throws ParserException
	{
		return defaultDelegate.parseProductUnit(csq, pos);
	}


	@Override
	@SuppressWarnings("rawtypes")
	public Unit<? extends Quantity> parseSingleUnit(CharSequence csq, ParsePosition pos)
	throws ParserException
	{
		return defaultDelegate.parseSingleUnit(csq, pos);
	}


	@Override
	public void label(Unit<?> unit, String label)
	{
		defaultDelegate.label(unit, label);
		symbolMap.label(unit, label);
	}


	@Override
	public void alias(Unit<?> unit, String alias)
	{
		defaultDelegate.alias(unit, alias);
		symbolMap.alias(unit, alias);
	}


	@Override
	public Appendable format(Unit<?> unit, Appendable appendable) throws IOException
	{
		final String original = unit.toString();

		// Cancel out any Neper units from the format string without distorting the scaling
		// factor. This is artificially done to force them to disappear from the output string,
		// as per stated requirements.
		final Map<?, Integer> rawBaseUnitMap = unit.getBaseUnits();
		if (rawBaseUnitMap != null) {
			for (Map.Entry<?, Integer> rawEntry : rawBaseUnitMap.entrySet()) {
				final Unit<?> nextBaseUnit = (Unit<?>) rawEntry.getKey();
				final Integer nextPower = rawEntry.getValue();
				if (nextBaseUnit.equals(CitrineUnits.NEPER)) {
					final int nextPowerInt = nextPower;
					for (int ii = 0; ii < nextPowerInt; ii++) {
						unit = unit.divide(CitrineUnits.NEPER);
						LOGGER.info("Divided formulae by 1 Np for {}", unit);
					}
					for (int ii = 0; ii > nextPowerInt; ii--) {
						unit = unit.multiply(CitrineUnits.NEPER);
						LOGGER.info("Multiplied formulae by 1 Np for {}", unit);
					}
				}
			}
		}

		// All Units from the Citrine SystemOfUnits have explicit labels and symbols, obviating
		// the need for an external formatter here. In a refactoring pass, that configuration should
		// be migrated to the label() and alias() methods invoked by factory construction of a
		// SimpleUnitFormatter, already present here as "defaultDelegate", but not yet fully used
		// since it still needs to be configured programmatically.
		String formatted = unit.toString();
		LOGGER.info("Formatted {} as {}", original, formatted);

		appendable.append(formatted);
		return appendable;
	}


	@Override
	public boolean isValidIdentifier(String name)
	{
		return symbolMap.getUnit(name) != null;
		// return defaultDelegate.isValidIdentifier(name);
	}


	@Override
	protected SymbolMap getSymbols()
	{
		return this.symbolMap;
	}
}
