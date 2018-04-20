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
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Maneuver
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class Maneuver {
  @SerializedName("bearing_before")
  private BigDecimal bearingBefore = null;

  @SerializedName("bearing_after")
  private BigDecimal bearingAfter = null;

  @SerializedName("location")
  private List<Double> location = null;

  public Maneuver bearingBefore(BigDecimal bearingBefore) {
    this.bearingBefore = bearingBefore;
    return this;
  }

   /**
   * The azimuth angle (in degrees) of the direction right before the maneuver.
   * @return bearingBefore
  **/
  @ApiModelProperty(value = "The azimuth angle (in degrees) of the direction right before the maneuver.")
  public BigDecimal getBearingBefore() {
    return bearingBefore;
  }

  public void setBearingBefore(BigDecimal bearingBefore) {
    this.bearingBefore = bearingBefore;
  }

  public Maneuver bearingAfter(BigDecimal bearingAfter) {
    this.bearingAfter = bearingAfter;
    return this;
  }

   /**
   * The azimuth angle (in degrees) of the direction right after the maneuver.
   * @return bearingAfter
  **/
  @ApiModelProperty(value = "The azimuth angle (in degrees) of the direction right after the maneuver.")
  public BigDecimal getBearingAfter() {
    return bearingAfter;
  }

  public void setBearingAfter(BigDecimal bearingAfter) {
    this.bearingAfter = bearingAfter;
  }

  public Maneuver location(List<Double> location) {
    this.location = location;
    return this;
  }

  public Maneuver addLocationItem(Double locationItem) {
    if (this.location == null) {
      this.location = new ArrayList<Double>();
    }
    this.location.add(locationItem);
    return this;
  }

   /**
   * The coordinate of the point where a maneuver takes place.
   * @return location
  **/
  @ApiModelProperty(value = "The coordinate of the point where a maneuver takes place.")
  public List<Double> getLocation() {
    return location;
  }

  public void setLocation(List<Double> location) {
    this.location = location;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Maneuver maneuver = (Maneuver) o;
    return Objects.equals(this.bearingBefore, maneuver.bearingBefore) &&
        Objects.equals(this.bearingAfter, maneuver.bearingAfter) &&
        Objects.equals(this.location, maneuver.location);
  }

  @Override
  public int hashCode() {
    return Objects.hash(bearingBefore, bearingAfter, location);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Maneuver {\n");
    
    sb.append("    bearingBefore: ").append(toIndentedString(bearingBefore)).append("\n");
    sb.append("    bearingAfter: ").append(toIndentedString(bearingAfter)).append("\n");
    sb.append("    location: ").append(toIndentedString(location)).append("\n");
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

