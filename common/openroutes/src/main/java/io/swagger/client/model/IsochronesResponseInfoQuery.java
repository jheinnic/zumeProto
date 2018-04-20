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
import java.util.ArrayList;
import java.util.List;

/**
 * Summarizes your query settings.
 */
@ApiModel(description = "Summarizes your query settings.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class IsochronesResponseInfoQuery {
  @SerializedName("mode")
  private String mode = null;

  @SerializedName("range_type")
  private String rangeType = null;

  @SerializedName("range")
  private Long range = null;

  @SerializedName("interval")
  private Long interval = null;

  @SerializedName("locations")
  private List<List<Double>> locations = null;

  public IsochronesResponseInfoQuery mode(String mode) {
    this.mode = mode;
    return this;
  }

   /**
   * Get mode
   * @return mode
  **/
  @ApiModelProperty(value = "")
  public String getMode() {
    return mode;
  }

  public void setMode(String mode) {
    this.mode = mode;
  }

  public IsochronesResponseInfoQuery rangeType(String rangeType) {
    this.rangeType = rangeType;
    return this;
  }

   /**
   * Get rangeType
   * @return rangeType
  **/
  @ApiModelProperty(value = "")
  public String getRangeType() {
    return rangeType;
  }

  public void setRangeType(String rangeType) {
    this.rangeType = rangeType;
  }

  public IsochronesResponseInfoQuery range(Long range) {
    this.range = range;
    return this;
  }

   /**
   * Get range
   * @return range
  **/
  @ApiModelProperty(value = "")
  public Long getRange() {
    return range;
  }

  public void setRange(Long range) {
    this.range = range;
  }

  public IsochronesResponseInfoQuery interval(Long interval) {
    this.interval = interval;
    return this;
  }

   /**
   * Get interval
   * @return interval
  **/
  @ApiModelProperty(value = "")
  public Long getInterval() {
    return interval;
  }

  public void setInterval(Long interval) {
    this.interval = interval;
  }

  public IsochronesResponseInfoQuery locations(List<List<Double>> locations) {
    this.locations = locations;
    return this;
  }

  public IsochronesResponseInfoQuery addLocationsItem(List<Double> locationsItem) {
    if (this.locations == null) {
      this.locations = new ArrayList<List<Double>>();
    }
    this.locations.add(locationsItem);
    return this;
  }

   /**
   * Get locations
   * @return locations
  **/
  @ApiModelProperty(value = "")
  public List<List<Double>> getLocations() {
    return locations;
  }

  public void setLocations(List<List<Double>> locations) {
    this.locations = locations;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IsochronesResponseInfoQuery isochronesResponseInfoQuery = (IsochronesResponseInfoQuery) o;
    return Objects.equals(this.mode, isochronesResponseInfoQuery.mode) &&
        Objects.equals(this.rangeType, isochronesResponseInfoQuery.rangeType) &&
        Objects.equals(this.range, isochronesResponseInfoQuery.range) &&
        Objects.equals(this.interval, isochronesResponseInfoQuery.interval) &&
        Objects.equals(this.locations, isochronesResponseInfoQuery.locations);
  }

  @Override
  public int hashCode() {
    return Objects.hash(mode, rangeType, range, interval, locations);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IsochronesResponseInfoQuery {\n");
    
    sb.append("    mode: ").append(toIndentedString(mode)).append("\n");
    sb.append("    rangeType: ").append(toIndentedString(rangeType)).append("\n");
    sb.append("    range: ").append(toIndentedString(range)).append("\n");
    sb.append("    interval: ").append(toIndentedString(interval)).append("\n");
    sb.append("    locations: ").append(toIndentedString(locations)).append("\n");
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

