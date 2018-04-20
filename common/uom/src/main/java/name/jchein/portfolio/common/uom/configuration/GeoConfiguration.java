package name.jchein.portfolio.common.uom.configuration;


import java.util.function.Supplier;

import org.gdal.ogr.Geometry;
import org.gdal.osr.SpatialReference;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;


public class GeoConfiguration
{
	private static final String GOOGLE_MAPS_SPATIAL_REFERENCE_WKT =
		"PROJCS[\"Google Maps Global Mercator\",GEOGCS[\"WGS84\",DATUM[\"WGS_1984\",SPHEROID[\"WGS 84\",6378137,298.257223563,AUTHORITY[\"EPSG\",\"7030\"]],AUTHORITY[\"EPSG\",\"6326\"]],PRIMEM[\"Greenwich\",0,AUTHORITY[\"EPSG\",\"8901\"]],UNIT[\"degree\",0.01745329251994328,AUTHORITY[\"EPSG\",\"9122\"]],AUTHORITY[\"EPSG\",\"4326\"]],PROJECTION[\"Mercator_2SP\"],PARAMETER[\"standard_parallel_1\",0],PARAMETER[\"latitude_of_origin\",0],PARAMETER[\"central_meridian\",0],PARAMETER[\"false_easting\",0],PARAMETER[\"false_northing\",0],UNIT[\"Meter\",1],EXTENSION[\"PROJ4\",\"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs\"],AUTHORITY[\"EPSG\",\"900913\"]]";


	@Bean
	@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
	Supplier<Geometry> googleMapsGeometrySupplier()
	{
		return () -> Geometry.CreateFromWkt(GOOGLE_MAPS_SPATIAL_REFERENCE_WKT);
	}
}
