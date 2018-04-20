package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.Extras;
import io.swagger.client.model.RoutesGeometry;
import io.swagger.client.model.RoutesSummary;
import io.swagger.client.model.Segments;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * RouteresponseRoutes
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class RouteresponseRoutes {
  @SerializedName("summary")
  private RoutesSummary summary = null;

  @SerializedName("geometry_format")
  private String geometryFormat = "encodedpolyline";

  @SerializedName("geometry")
  private RoutesGeometry geometry = null;

  @SerializedName("segments")
  private List<Segments> segments = null;

  @SerializedName("way_points")
  private List<Long> wayPoints = null;

  @SerializedName("extras")
  private Extras extras = null;

  @SerializedName("bbox")
  private List<Double> bbox = null;

  public RouteresponseRoutes summary(RoutesSummary summary) {
    this.summary = summary;
    return this;
  }

   /**
   * Get summary
   * @return summary
  **/
  @ApiModelProperty(value = "")
  public RoutesSummary getSummary() {
    return summary;
  }

  public void setSummary(RoutesSummary summary) {
    this.summary = summary;
  }

  public RouteresponseRoutes geometryFormat(String geometryFormat) {
    this.geometryFormat = geometryFormat;
    return this;
  }

   /**
   * Contains the defined geometry format.
   * @return geometryFormat
  **/
  @ApiModelProperty(example = "encodedpolyline", value = "Contains the defined geometry format.")
  public String getGeometryFormat() {
    return geometryFormat;
  }

  public void setGeometryFormat(String geometryFormat) {
    this.geometryFormat = geometryFormat;
  }

  public RouteresponseRoutes geometry(RoutesGeometry geometry) {
    this.geometry = geometry;
    return this;
  }

   /**
   * Get geometry
   * @return geometry
  **/
  @ApiModelProperty(value = "")
  public RoutesGeometry getGeometry() {
    return geometry;
  }

  public void setGeometry(RoutesGeometry geometry) {
    this.geometry = geometry;
  }

  public RouteresponseRoutes segments(List<Segments> segments) {
    this.segments = segments;
    return this;
  }

  public RouteresponseRoutes addSegmentsItem(Segments segmentsItem) {
    if (this.segments == null) {
      this.segments = new ArrayList<Segments>();
    }
    this.segments.add(segmentsItem);
    return this;
  }

   /**
   * List containing the segments and its correspoding steps which make up the route.
   * @return segments
  **/
  @ApiModelProperty(value = "List containing the segments and its correspoding steps which make up the route.")
  public List<Segments> getSegments() {
    return segments;
  }

  public void setSegments(List<Segments> segments) {
    this.segments = segments;
  }

  public RouteresponseRoutes wayPoints(List<Long> wayPoints) {
    this.wayPoints = wayPoints;
    return this;
  }

  public RouteresponseRoutes addWayPointsItem(Long wayPointsItem) {
    if (this.wayPoints == null) {
      this.wayPoints = new ArrayList<Long>();
    }
    this.wayPoints.add(wayPointsItem);
    return this;
  }

   /**
   * List containing the indices of way points corresponding to the *geometry*.
   * @return wayPoints
  **/
  @ApiModelProperty(example = "[0,163]", value = "List containing the indices of way points corresponding to the *geometry*.")
  public List<Long> getWayPoints() {
    return wayPoints;
  }

  public void setWayPoints(List<Long> wayPoints) {
    this.wayPoints = wayPoints;
  }

  public RouteresponseRoutes extras(Extras extras) {
    this.extras = extras;
    return this;
  }

   /**
   * Get extras
   * @return extras
  **/
  @ApiModelProperty(value = "")
  public Extras getExtras() {
    return extras;
  }

  public void setExtras(Extras extras) {
    this.extras = extras;
  }

  public RouteresponseRoutes bbox(List<Double> bbox) {
    this.bbox = bbox;
    return this;
  }

  public RouteresponseRoutes addBboxItem(Double bboxItem) {
    if (this.bbox == null) {
      this.bbox = new ArrayList<Double>();
    }
    this.bbox.add(bboxItem);
    return this;
  }

   /**
   * Contains the minimum bounding box of the route.
   * @return bbox
  **/
  @ApiModelProperty(example = "[8.327707,48.231946,8.345244,48.263552]", value = "Contains the minimum bounding box of the route.")
  public List<Double> getBbox() {
    return bbox;
  }

  public void setBbox(List<Double> bbox) {
    this.bbox = bbox;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RouteresponseRoutes routeresponseRoutes = (RouteresponseRoutes) o;
    return Objects.equals(this.summary, routeresponseRoutes.summary) &&
        Objects.equals(this.geometryFormat, routeresponseRoutes.geometryFormat) &&
        Objects.equals(this.geometry, routeresponseRoutes.geometry) &&
        Objects.equals(this.segments, routeresponseRoutes.segments) &&
        Objects.equals(this.wayPoints, routeresponseRoutes.wayPoints) &&
        Objects.equals(this.extras, routeresponseRoutes.extras) &&
        Objects.equals(this.bbox, routeresponseRoutes.bbox);
  }

  @Override
  public int hashCode() {
    return Objects.hash(summary, geometryFormat, geometry, segments, wayPoints, extras, bbox);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RouteresponseRoutes {\n");
    
    sb.append("    summary: ").append(toIndentedString(summary)).append("\n");
    sb.append("    geometryFormat: ").append(toIndentedString(geometryFormat)).append("\n");
    sb.append("    geometry: ").append(toIndentedString(geometry)).append("\n");
    sb.append("    segments: ").append(toIndentedString(segments)).append("\n");
    sb.append("    wayPoints: ").append(toIndentedString(wayPoints)).append("\n");
    sb.append("    extras: ").append(toIndentedString(extras)).append("\n");
    sb.append("    bbox: ").append(toIndentedString(bbox)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

