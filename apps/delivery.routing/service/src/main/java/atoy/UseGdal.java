package atoy;

import java.util.UUID;
import java.util.Vector;

import org.gdal.ogr.DataSource;
import org.gdal.ogr.Driver;
import org.gdal.ogr.Feature;
import org.gdal.ogr.FieldDefn;
import org.gdal.ogr.Geometry;
import org.gdal.ogr.Layer;
import org.gdal.ogr.ogr;
import org.gdal.ogr.ogrConstants;
import org.gdal.osr.SpatialReference;

public class UseGdal
{
	private static final String GOOGLE_MAPS_SPATIAL_REFERENCE_WKT =
		"PROJCS[\"Google Maps Global Mercator\",GEOGCS[\"WGS84\",DATUM[\"WGS_1984\",SPHEROID[\"WGS 84\",6378137,298.257223563,AUTHORITY[\"EPSG\",\"7030\"]],AUTHORITY[\"EPSG\",\"6326\"]],PRIMEM[\"Greenwich\",0,AUTHORITY[\"EPSG\",\"8901\"]],UNIT[\"degree\",0.01745329251994328,AUTHORITY[\"EPSG\",\"9122\"]],AUTHORITY[\"EPSG\",\"4326\"]],PROJECTION[\"Mercator_2SP\"],PARAMETER[\"standard_parallel_1\",0],PARAMETER[\"latitude_of_origin\",0],PARAMETER[\"central_meridian\",0],PARAMETER[\"false_easting\",0],PARAMETER[\"false_northing\",0],UNIT[\"Meter\",1],EXTENSION[\"PROJ4\",\"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs\"],AUTHORITY[\"EPSG\",\"900913\"]]";


	public static void main(String[] args)
	{
		ogr.RegisterAll();
		int numDrivers = ogr.GetDriverCount();
		for( int ii=0; ii<numDrivers; ii++ ) {
			Driver nextDriver = ogr.GetDriver(ii);
			System.out.println(nextDriver.GetName());
		}
		// Driver esriDriver = ogr.GetDriverByName("ESRI Shapefile");
		Driver esriDriver = ogr.GetDriverByName("GML");
		SpatialReference srs = new SpatialReference(GOOGLE_MAPS_SPATIAL_REFERENCE_WKT);

		DataSource dataset = esriDriver.CreateDataSource("foo2.xml");

		System.out.println(dataset.GetLayerCount());
		Layer ordersLayer = dataset.CreateLayer("orders", srs, ogrConstants.wkbPoint);
		FieldDefn order_uuid_defn = new FieldDefn("orderUuid", ogrConstants.OFTString);
		FieldDefn customer_uuid_defn = new FieldDefn("customerUuid", ogrConstants.OFTString);
		FieldDefn address_label_defn = new FieldDefn("addressLabel", ogrConstants.OFTString);
		FieldDefn time_placed_defn = new FieldDefn("timePlaced", ogrConstants.OFTDateTime);
		FieldDefn num_line_items_defn = new FieldDefn("numLineItems", ogrConstants.OFTInteger);
		FieldDefn line_item_uuids_defn = new FieldDefn("lineItemUuids", ogrConstants.OFTStringList);
		FieldDefn line_item_quantities_defn = new FieldDefn("lineItemQuantities", ogrConstants.OFTIntegerList);
		ordersLayer.CreateField(order_uuid_defn);
		ordersLayer.CreateField(customer_uuid_defn);
		ordersLayer.CreateField(address_label_defn);
		ordersLayer.CreateField(time_placed_defn);
		ordersLayer.CreateField(num_line_items_defn);
		final int line_item_uuids_id = ordersLayer.CreateField(line_item_uuids_defn);
		final int line_item_quantities_id = ordersLayer.CreateField(line_item_quantities_defn);

		Feature orderPoint = new Feature(ordersLayer.GetLayerDefn());
		orderPoint.SetField("orderUuid", UUID.randomUUID().toString());
		orderPoint.SetField("customerUuid", UUID.randomUUID().toString());
		orderPoint.SetField("addressLabel", "293 Monroe St.");
		orderPoint.SetField("timePlaced", 2018, 4, 11, 20,30,0,8);
		orderPoint.SetField("numLineItems", 2);

		Vector<String> pList = new Vector<String>(2);
		pList.add(UUID.randomUUID().toString());
		pList.add(UUID.randomUUID().toString());
		orderPoint.SetFieldStringList(line_item_uuids_id, pList);

		Vector<Integer> pListInt = new Vector<Integer>(2);
		pListInt.add(1);
		pListInt.add(1);
		orderPoint.SetFieldStringList(line_item_quantities_id, pList);
		
		Geometry orderGeo = Geometry.CreateFromWkt("Point(-30.44, 121.334)");
		orderPoint.SetGeometry(orderGeo);

		ordersLayer.CreateFeature(orderPoint);

		Layer waypointsLayer = dataset.CreateLayer("waypoints", srs, ogrConstants.wkbPoint);
		/*
		FieldDefn order_uuid_defn = new FieldDefn("orderUuid", ogrConstants.OFTString);
		FieldDefn customer_uuid_defn = new FieldDefn("customerUuid", ogrConstants.OFTString);
		FieldDefn address_label_defn = new FieldDefn("customerUuid", ogrConstants.OFTString);
		FieldDefn time_placed_defn = new FieldDefn("timePlaced", ogrConstants.OFTDateTime);
		FieldDefn num_line_items_defn = new FieldDefn("numLineItems", ogrConstants.OFTInteger);
		FieldDefn line_item_uuids_defn = new FieldDefn("lineItemUuids", ogrConstants.OFTStringList);
		FieldDefn line_item_quantities_defn = new FieldDefn("lineItemQuantities", ogrConstants.OFTIntegerList);
		ordersLayer.CreateField(order_uuid_defn);
		ordersLayer.CreateField(customer_uuid_defn);
		ordersLayer.CreateField(address_label_defn);
		ordersLayer.CreateField(time_placed_defn);
		ordersLayer.CreateField(num_line_items_defn);
		ordersLayer.CreateField(line_item_uuids_defn);
		ordersLayer.CreateField(line_item_quantities_defn);
		*/
		dataset.FlushCache();
		dataset.SyncToDisk();
		
		DataSource altDataset = esriDriver.Open("foo2.xml");
		System.out.println(altDataset.GetLayerCount());
	}

}
