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
 * IsochronesResponseGeometry
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class IsochronesResponseGeometry {
  @SerializedName("coordinates")
  private List<List<Double>> coordinates = null;

  @SerializedName("type")
  private String type = "Polygon";

  public IsochronesResponseGeometry coordinates(List<List<Double>> coordinates) {
    this.coordinates = coordinates;
    return this;
  }

  public IsochronesResponseGeometry addCoordinatesItem(List<Double> coordinatesItem) {
    if (this.coordinates == null) {
      this.coordinates = new ArrayList<List<Double>>();
    }
    this.coordinates.add(coordinatesItem);
    return this;
  }

   /**
   * Get coordinates
   * @return coordinates
  **/
  @ApiModelProperty(example = "[[8.337413,48.233333],[8.337446,48.233146],[8.339023,48.231162],[8.342829,48.228996],[8.344379,48.229675],[8.34602,48.230662],[8.347124,48.231837],[8.348778,48.233859],[8.348807,48.233995],[8.348731,48.235059],[8.347973,48.235437],[8.340959,48.233954],[8.337413,48.233333]]", value = "")
  public List<List<Double>> getCoordinates() {
    return coordinates;
  }

  public void setCoordinates(List<List<Double>> coordinates) {
    this.coordinates = coordinates;
  }

  public IsochronesResponseGeometry type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(example = "Polygon", value = "")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IsochronesResponseGeometry isochronesResponseGeometry = (IsochronesResponseGeometry) o;
    return Objects.equals(this.coordinates, isochronesResponseGeometry.coordinates) &&
        Objects.equals(this.type, isochronesResponseGeometry.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(coordinates, type);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IsochronesResponseGeometry {\n");
    
    sb.append("    coordinates: ").append(toIndentedString(coordinates)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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

