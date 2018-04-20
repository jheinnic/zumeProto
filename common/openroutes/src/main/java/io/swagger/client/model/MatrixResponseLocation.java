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
 * MatrixResponseLocation
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class MatrixResponseLocation {
  @SerializedName("location")
  private List<Double> location = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("snapped_distance")
  private Double snappedDistance = null;

  public MatrixResponseLocation location(List<Double> location) {
    this.location = location;
    return this;
  }

  public MatrixResponseLocation addLocationItem(Double locationItem) {
    if (this.location == null) {
      this.location = new ArrayList<Double>();
    }
    this.location.add(locationItem);
    return this;
  }

   /**
   * &#x60;{longitude},{latitude}&#x60; coordinates of the closest accessible point on the routing graph. 
   * @return location
  **/
  @ApiModelProperty(value = "`{longitude},{latitude}` coordinates of the closest accessible point on the routing graph. ")
  public List<Double> getLocation() {
    return location;
  }

  public void setLocation(List<Double> location) {
    this.location = location;
  }

  public MatrixResponseLocation name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the street the closest accessible point is situated on. Only for &#x60;resolve_locations&#x3D;true&#x60; and only if name is available. 
   * @return name
  **/
  @ApiModelProperty(value = "Name of the street the closest accessible point is situated on. Only for `resolve_locations=true` and only if name is available. ")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public MatrixResponseLocation snappedDistance(Double snappedDistance) {
    this.snappedDistance = snappedDistance;
    return this;
  }

   /**
   * Distance between the &#x60;source&#x60;/&#x60;destination&#x60; Location and the used point on the routing graph. 
   * @return snappedDistance
  **/
  @ApiModelProperty(value = "Distance between the `source`/`destination` Location and the used point on the routing graph. ")
  public Double getSnappedDistance() {
    return snappedDistance;
  }

  public void setSnappedDistance(Double snappedDistance) {
    this.snappedDistance = snappedDistance;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MatrixResponseLocation matrixResponseLocation = (MatrixResponseLocation) o;
    return Objects.equals(this.location, matrixResponseLocation.location) &&
        Objects.equals(this.name, matrixResponseLocation.name) &&
        Objects.equals(this.snappedDistance, matrixResponseLocation.snappedDistance);
  }

  @Override
  public int hashCode() {
    return Objects.hash(location, name, snappedDistance);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MatrixResponseLocation {\n");
    
    sb.append("    location: ").append(toIndentedString(location)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    snappedDistance: ").append(toIndentedString(snappedDistance)).append("\n");
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

