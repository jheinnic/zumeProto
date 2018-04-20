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
 * GeocoderesponseGeometry
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class GeocoderesponseGeometry {
  @SerializedName("type")
  private String type = "Point";

  @SerializedName("coordinates")
  private List<Double> coordinates = null;

  public GeocoderesponseGeometry type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(example = "Point", value = "")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public GeocoderesponseGeometry coordinates(List<Double> coordinates) {
    this.coordinates = coordinates;
    return this;
  }

  public GeocoderesponseGeometry addCoordinatesItem(Double coordinatesItem) {
    if (this.coordinates == null) {
      this.coordinates = new ArrayList<Double>();
    }
    this.coordinates.add(coordinatesItem);
    return this;
  }

   /**
   * Contains the longitude and latitude
   * @return coordinates
  **/
  @ApiModelProperty(example = "[13.414369,52.516116]", value = "Contains the longitude and latitude")
  public List<Double> getCoordinates() {
    return coordinates;
  }

  public void setCoordinates(List<Double> coordinates) {
    this.coordinates = coordinates;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GeocoderesponseGeometry geocoderesponseGeometry = (GeocoderesponseGeometry) o;
    return Objects.equals(this.type, geocoderesponseGeometry.type) &&
        Objects.equals(this.coordinates, geocoderesponseGeometry.coordinates);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, coordinates);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GeocoderesponseGeometry {\n");
    
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    coordinates: ").append(toIndentedString(coordinates)).append("\n");
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

