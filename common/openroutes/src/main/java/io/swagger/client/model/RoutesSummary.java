package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * Contains total sums of duration, route distance and actual distance of the route.
 */
@ApiModel(description = "Contains total sums of duration, route distance and actual distance of the route.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class RoutesSummary {
  @SerializedName("distance")
  private Double distance = null;

  @SerializedName("duration")
  private Double duration = null;

  @SerializedName("ascent")
  private Double ascent = null;

  @SerializedName("descent")
  private Double descent = null;

  @SerializedName("avgspeed")
  private Double avgspeed = null;

  public RoutesSummary distance(Double distance) {
    this.distance = distance;
    return this;
  }

   /**
   * Total route distance in specified units.
   * @return distance
  **/
  @ApiModelProperty(example = "5757.4", value = "Total route distance in specified units.")
  public Double getDistance() {
    return distance;
  }

  public void setDistance(Double distance) {
    this.distance = distance;
  }

  public RoutesSummary duration(Double duration) {
    this.duration = duration;
    return this;
  }

   /**
   * Total duration in seconds.
   * @return duration
  **/
  @ApiModelProperty(example = "821.0", value = "Total duration in seconds.")
  public Double getDuration() {
    return duration;
  }

  public void setDuration(Double duration) {
    this.duration = duration;
  }

  public RoutesSummary ascent(Double ascent) {
    this.ascent = ascent;
    return this;
  }

   /**
   * Total ascent in meters.
   * @return ascent
  **/
  @ApiModelProperty(example = "257.0", value = "Total ascent in meters.")
  public Double getAscent() {
    return ascent;
  }

  public void setAscent(Double ascent) {
    this.ascent = ascent;
  }

  public RoutesSummary descent(Double descent) {
    this.descent = descent;
    return this;
  }

   /**
   * Total descent in meters.
   * @return descent
  **/
  @ApiModelProperty(example = "336.0", value = "Total descent in meters.")
  public Double getDescent() {
    return descent;
  }

  public void setDescent(Double descent) {
    this.descent = descent;
  }

  public RoutesSummary avgspeed(Double avgspeed) {
    this.avgspeed = avgspeed;
    return this;
  }

   /**
   * Total average speed in km/h
   * @return avgspeed
  **/
  @ApiModelProperty(value = "Total average speed in km/h")
  public Double getAvgspeed() {
    return avgspeed;
  }

  public void setAvgspeed(Double avgspeed) {
    this.avgspeed = avgspeed;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RoutesSummary routesSummary = (RoutesSummary) o;
    return Objects.equals(this.distance, routesSummary.distance) &&
        Objects.equals(this.duration, routesSummary.duration) &&
        Objects.equals(this.ascent, routesSummary.ascent) &&
        Objects.equals(this.descent, routesSummary.descent) &&
        Objects.equals(this.avgspeed, routesSummary.avgspeed);
  }

  @Override
  public int hashCode() {
    return Objects.hash(distance, duration, ascent, descent, avgspeed);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RoutesSummary {\n");
    
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
    sb.append("    duration: ").append(toIndentedString(duration)).append("\n");
    sb.append("    ascent: ").append(toIndentedString(ascent)).append("\n");
    sb.append("    descent: ").append(toIndentedString(descent)).append("\n");
    sb.append("    avgspeed: ").append(toIndentedString(avgspeed)).append("\n");
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

