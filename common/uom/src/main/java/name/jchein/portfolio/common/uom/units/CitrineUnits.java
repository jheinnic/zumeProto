package name.jchein.portfolio.common.uom.units;


import java.util.Locale;

import javax.measure.Quantity;
import javax.measure.Unit;
import javax.measure.quantity.Acceleration;
import javax.measure.quantity.Angle;
import javax.measure.quantity.Area;
import javax.measure.quantity.Dimensionless;
import javax.measure.quantity.Length;
import javax.measure.quantity.Mass;
import javax.measure.quantity.Speed;
import javax.measure.quantity.Temperature;
import javax.measure.quantity.Time;
import javax.measure.quantity.Volume;
import javax.measure.spi.SystemOfUnits;

import tec.uom.lib.common.function.Nameable;
import tec.uom.se.AbstractSystemOfUnits;
import tec.uom.se.AbstractUnit;
import tec.uom.se.function.PiMultiplierConverter;
import tec.uom.se.function.RationalConverter;
import tec.uom.se.quantity.QuantityDimension;
import tec.uom.se.unit.AlternateUnit;
import tec.uom.se.unit.BaseUnit;
import tec.uom.se.unit.ProductUnit;
import tec.uom.se.unit.TransformedUnit;


public class CitrineUnits
extends AbstractSystemOfUnits
implements Nameable
{
	private static final NamesAndSymbols LABELS = new NamesAndSymbols(Locale.getDefault());
	private static final CitrineUnits INSTANCE = new CitrineUnits();


	public static SystemOfUnits getInstance()
	{
		return INSTANCE;
	}


	private CitrineUnits()
	{}


	@Override
	public String getName()
	{
		return CitrineUnits.class.getSimpleName();
	}


	/////////////////
	// Temperature //
	/////////////////

	public static final BaseUnit<Temperature> KELVIN =
		doAddUnit(
			new BaseUnit<Temperature>(LABELS.kelvinSymbol(), QuantityDimension.TEMPERATURE),
			Temperature.class, LABELS.kelvinName());

	public static final Unit<Temperature> CELSIUS =
		doAddUnit(KELVIN.shift(-273.15), LABELS.celsiusName(), LABELS.celsiusSymbol());

	public static final Unit<Temperature> FAHRENHEIT =
		doAddUnit(
			KELVIN.transform(RationalConverter.of(9L, 5L))
				.shift(-459.67),
			LABELS.celsiusName(), LABELS.celsiusSymbol());

	//////////
	// Mass //
	//////////

	/**
	 * The SI base unit for mass quantities (standard name <code>kg</code>). It is the only SI unit with a prefix as part
	 * of its name and symbol. The kilogram is equal to the mass of an international prototype in the form of a
	 * platinum-iridium cylinder kept at Sevres in France.
	 * 
	 * @see #GRAM
	 *
	 * @implNote SI Base Unit
	 */
	public static final BaseUnit<Mass> KILOGRAM =
		doAddUnit(
			new BaseUnit<Mass>(LABELS.kilogramSymbol(), QuantityDimension.MASS), Mass.class,
			LABELS.kilogramName());

	/**
	 * An SI-derived unit for mass quantities (standard name <code>g</code>). The base unit for mass quantity is
	 * {@link #KILOGRAM}.
	 */
	public static final Unit<Mass> GRAM =
		doAddUnit(KILOGRAM.divide(1000), LABELS.gramName(), LABELS.gramSymbol());

	/**
	 * A unit of mass equal to <code>0.45359237 kilograms</code> (avoirdupois pound, standard name <code>lb</code>).
	 */
	public static final Unit<Mass> POUND =
		doAddUnit(
			KILOGRAM.transform(RationalConverter.of(45359237, 100000000)), LABELS.poundName(),
			LABELS.poundSymbol());

	/**
	 * A unit of mass equal to <code>1 / 16 {@link #POUND}</code> (standard name <code>oz</code>).
	 */
	public static final Unit<Mass> OUNCE =
		doAddUnit(POUND.divide(16), LABELS.ounceName(), LABELS.ounceSymbol());

	/**
	 * A unit of mass equal to <code>2000 {@link #POUND}</code> (short ton, standard name <code>ton</code>).
	 */
	public static final Unit<Mass> TON =
		doAddUnit(POUND.multiply(2000), LABELS.tonName(), LABELS.tonSymbol());

	/**
	 * A unit of mass equal to <code>1/7000 {@link #POUND}</code> (standard name <code>grain</code>).
	 */
	public static final Unit<Mass> GRAIN =
		doAddUnit(POUND.divide(7000), LABELS.grainName(), LABELS.grainSymbol());

	/**
	 * A unit of mass equal to <code>1/256 {@link #POUND}</code> (standard name <code>dram</code>).
	 */
	public static final Unit<Mass> DRAM =
		doAddUnit(POUND.divide(256), LABELS.dramName(), LABELS.dramSymbol());

	
	//////////////
	// Distance //
	//////////////
	
	/**
	 * The SI base unit for length quantities (standard name <code>m</code>). One meter was redefined in 1983 as the
	 * distance traveled by light in a vacuum in 1/299,792,458 of a second.
	 * 
	 * @implNote SI Base Unit
	 */
	public static final Unit<Length> METER =
		doAddUnit(
			new BaseUnit<Length>(LABELS.meterSymbol(), QuantityDimension.LENGTH), Length.class,
			LABELS.meterName());

	//////////
	// Time //
	//////////

	/**
	 * The SI base unit for duration quantities (standard name <code>s</code>). It is defined as the duration of
	 * 9,192,631,770 cycles of radiation corresponding to the transition between two hyperfine levels of the ground state
	 * of cesium (1967 Standard).
	 * 
	 * @implNote SI Base Unit
	 */
	public static final Unit<Time> SECOND =
		doAddUnit(
			new BaseUnit<Time>(LABELS.secondSymbol(), QuantityDimension.TIME), Time.class,
			LABELS.secondName());

	/**
	 * A time unit accepted for use with SI units (standard name <code>min</code>).
	 */
	public static final Unit<Time> MINUTE =
		doAddUnit(
			new TransformedUnit<>(LABELS.minuteSymbol(), SECOND, RationalConverter.of(60, 1)),
			LABELS.minuteName());

	/**
	 * A time unit accepted for use with SI units (standard name <code>h</code> ).
	 */
	public static final Unit<Time> HOUR =
		doAddUnit(
			new TransformedUnit<>(LABELS.hourSymbol(), SECOND, RationalConverter.of(60 * 60, 1)),
			LABELS.hourName());

	/**
	 * A time unit accepted for use with SI units (standard name <code>d</code> ).
	 */
	public static final Unit<Time> DAY =
		doAddUnit(
			new TransformedUnit<>(LABELS.daySymbol(), SECOND, RationalConverter.of(24 * 60 * 60, 1)),
			LABELS.dayName());

	////////////////////////////////////
	// SI-DERIVED DIMENSIONLESS UNITS //
	////////////////////////////////////

	/**
	 * The SI unit for plane angle quantities (standard name <code>rad</code>). One radian is the angle between two radii
	 * of a circle such that the length of the arc between them is equal to the radius.
	 */
	public static final Unit<Angle> RADIAN =
		doAddUnit(
			new BaseUnit<Angle>(LABELS.radianSymbol(), QuantityDimension.NONE), Angle.class,
			LABELS.radianName());

	/**
	 * An angle unit accepted for use with SI units (standard name <code>deg</code>).
	 */
	public static final Unit<Angle> DEGREE_ANGLE =
		doAddUnit(
			new TransformedUnit<>(
				RADIAN, new PiMultiplierConverter().concatenate(new RationalConverter(1, 180))),
			LABELS.degreeAngleName(), LABELS.degreeAngleSymbol());

	/**
	 * An angle unit accepted for use with SI units (standard name <code>'</code>).
	 */
	public static final Unit<Angle> MINUTE_ANGLE =
		doAddUnit(
			new TransformedUnit<>(
				LABELS.minuteAngleSymbol(), RADIAN,
				new PiMultiplierConverter().concatenate(new RationalConverter(1, 180 * 60))));

	/**
	 * An angle unit accepted for use with SI units (standard name <code>''</code>).
	 */
	public static final Unit<Angle> SECOND_ANGLE =
		doAddUnit(
			new TransformedUnit<>(
				LABELS.secondAngleSymbol(), RADIAN,
				new PiMultiplierConverter().concatenate(new RationalConverter(1, 180 * 60 * 60))));

	public static final Unit<Dimensionless> NEPER =
		doAddUnit(
			new AlternateUnit<Dimensionless>(AbstractUnit.ONE, LABELS.neperSymbol()), LABELS.neperName());
	// doAddUnit(
	// new TransformedUnit<>(LABELS.neperSymbol(), AbstractUnit.ONE, new
	// LogConverter(E).inverse()),
	// LABELS.neperName());

	/**
	 * A logarithmic unit used to describe a ratio (standard name <code>dB</code>).
	 */
	public static final Unit<Dimensionless> DECIBEL =
		doAddUnit(NEPER.multiply(Math.log(10) / 20), LABELS.decibelName(), LABELS.decibelSymbol());
	// doAddUnit(AbstractUnit.ONE.transform(new LogConverter(10).inverse()
	// .concatenate(new RationalConverter(BigInteger.ONE, BigInteger.TEN))));

	/**
	 * A logarithmic unit used to describe a ratio (standard name <code>B</code>).
	 */
	public static final Unit<Dimensionless> BEL =
		doAddUnit(NEPER.multiply(Math.log(10) / 2), LABELS.belName(), LABELS.belSymbol());
	// doAddUnit(AbstractUnit.ONE.transform(new LogConverter(10).inverse()));

	//////////////////////////////
	// SI-DERIVED PRODUCT UNITS //
	//////////////////////////////

	/**
	 * The SI unit for velocity quantities (standard name <code>m/s</code>).
	 */
	public static final Unit<Speed> METERS_PER_SECOND =
		doAddUnit(new ProductUnit<Speed>(METER.divide(SECOND)), Speed.class);

	/**
	 * The SI unit for acceleration quantities (standard name <code>m/s2</code> ).
	 */
	public static final Unit<Acceleration> METERS_PER_SQUARE_SECOND =
		doAddUnit(new ProductUnit<Acceleration>(METERS_PER_SECOND.divide(SECOND)), Acceleration.class);

	/**
	 * The SI unit for area quantities (standard name <code>m2</code>).
	 */
	public static final Unit<Area> SQUARE_METER =
		doAddUnit(new ProductUnit<Area>(METER.multiply(METER)), Area.class);

	/**
	 * The SI unit for volume quantities (standard name <code>m3</code>).
	 */
	public static final ProductUnit<Volume> CUBIC_METER =
		doAddUnit(new ProductUnit<Volume>(SQUARE_METER.multiply(METER)), Volume.class);

	/**
	 * A unit of velocity expressing the number of international {@link #KILOMETER kilometres} per {@link #HOUR hour}
	 * (abbreviation <code>km/h</code>).
	 */
	public static final Unit<Speed> KILOMETERS_PER_HOUR =
		doAddUnit(METERS_PER_SECOND.multiply(0.277778d)).asType(Speed.class);

	///////////////////////
	// SI-Derived Volume //
	///////////////////////

	/**
	 * A volume unit accepted for use with SI units (standard name <code>l</code>).
	 * 
	 * @see <a href="https://en.wikipedia.org/wiki/Litre"> Wikipedia: Litre</a>
	 */
	public static final Unit<Volume> LITER =
		doAddUnit(
			new TransformedUnit<>(LABELS.literSymbol(), CUBIC_METER, RationalConverter.of(1, 1000)),
			LABELS.literName());


	// Non-SI Derived Products
	
	/////////////////////////
	// Non-SI Derived Area //
   /////////////////////////
	/**
	 * A unit of area equal to <code>100 m²</code> (standard name <code>a</code> ).
	 */
	public static final Unit<Area> ARE =
		doAddUnit(SQUARE_METER.multiply(100), LABELS.areName(), LABELS.areSymbol());

	/**
	 * A unit of area equal to <code>100 {@link #ARE}</code> (standard name <code>ha</code>).
	 */
	public static final Unit<Area> HECTARE =
		doAddUnit(ARE.multiply(100), LABELS.hectareName(), LABELS.hectareSymbol()); // Exact.


	// Helper Methods

	private static <Q extends Quantity<Q>, U extends Unit<Q>> U
	doAddUnit(U unit, String name, String symbol)
	{
		return AbstractSystemOfUnits.Helper.addUnit(INSTANCE.units, unit, name, symbol);
	}


	/**
	 * Adds a new unit not mapped to any specified quantity type.
	 *
	 * @param unit
	 *           Unit being added.
	 * @param name
	 *           Name of unit being added.
	 * @return <code>unit</code>.
	 */
	private static <Q extends Quantity<Q>, U extends Unit<Q>> U doAddUnit(U unit, String name)
	{
		return AbstractSystemOfUnits.Helper.addUnit(INSTANCE.units, unit, name);
	}


	/**
	 * Adds a new unit not mapped to any specified quantity type.
	 *
	 * @param unit
	 *           Unit being added.
	 * @return <code>unit</code>.
	 */
	private static <Q extends Quantity<Q>, U extends Unit<Q>> U doAddUnit(U unit)
	{
		INSTANCE.units.add(unit);
		return unit;
	}


	/**
	 * Adds a new unit and maps it to the specified quantity type.
	 *
	 * @param unit
	 *           Unit being added.
	 * @param type
	 *           Quantity type added unit is also primary for.
	 * @param name
	 *           Name of unit being added
	 * @return <code>unit</code>.
	 */
	private static <Q extends Quantity<Q>, U extends AbstractUnit<Q>> U
	doAddUnit(U unit, Class<Q> type, String name)
	{
		U retVal = AbstractSystemOfUnits.Helper.addUnit(INSTANCE.units, unit, name);
		INSTANCE.quantityToUnit.put(type, retVal);
		return retVal;
	}


	/**
	 * Adds a new unit and maps it to the specified quantity type.
	 *
	 * @param unit
	 *           the unit being added.
	 * @param type
	 *           the quantity type.
	 * @return <code>unit</code>.
	 */
	private static <Q extends Quantity<Q>, U extends AbstractUnit<Q>> U doAddUnit(U unit, Class<Q> type)
	{
		INSTANCE.units.add(unit);
		INSTANCE.quantityToUnit.put(type, unit);
		return unit;
	}
}
