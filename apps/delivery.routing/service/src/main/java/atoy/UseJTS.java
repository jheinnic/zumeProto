package atoy;


import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;


public class UseJTS
{
	private static final String GOOGLE_MAPS_SPATIAL_REFERENCE_WKT =
		"PROJCS[\"Google Maps Global Mercator\",GEOGCS[\"WGS84\",DATUM[\"WGS_1984\",SPHEROID[\"WGS 84\",6378137,298.257223563,AUTHORITY[\"EPSG\",\"7030\"]],AUTHORITY[\"EPSG\",\"6326\"]],PRIMEM[\"Greenwich\",0,AUTHORITY[\"EPSG\",\"8901\"]],UNIT[\"degree\",0.01745329251994328,AUTHORITY[\"EPSG\",\"9122\"]],AUTHORITY[\"EPSG\",\"4326\"]],PROJECTION[\"Mercator_2SP\"],PARAMETER[\"standard_parallel_1\",0],PARAMETER[\"latitude_of_origin\",0],PARAMETER[\"central_meridian\",0],PARAMETER[\"false_easting\",0],PARAMETER[\"false_northing\",0],UNIT[\"Meter\",1],EXTENSION[\"PROJ4\",\"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs\"],AUTHORITY[\"EPSG\",\"900913\"]]";


	public static void main(String[] args)
	{
		GeometryFactory factory = new GeometryFactory();
		Point pointOne = factory.createPoint(
			new Coordinate(-120.123, 34.223));
		Point pointTwo = factory.createPoint(
			new Coordinate(-120.103, 34.292));
		double dist = pointOne.distance(pointTwo);
		System.out.println(String.format("%f", dist));
	}
}
