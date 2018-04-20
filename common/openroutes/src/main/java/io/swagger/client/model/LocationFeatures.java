package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.LocationFeaturesGeometry;
import io.swagger.client.model.LocationFeaturesProperties;
import java.io.IOException;

/**
 * LocationFeatures
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class LocationFeatures {
  @SerializedName("type")
  private String type = "Feature";

  @SerializedName("geometry")
  private LocationFeaturesGeometry geometry = null;

  @SerializedName("properties")
  private LocationFeaturesProperties properties = null;

  public LocationFeatures type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(value = "")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public LocationFeatures geometry(LocationFeaturesGeometry geometry) {
    this.geometry = geometry;
    return this;
  }

   /**
   * Get geometry
   * @return geometry
  **/
  @ApiModelProperty(value = "")
  public LocationFeaturesGeometry getGeometry() {
    return geometry;
  }

  public void setGeometry(LocationFeaturesGeometry geometry) {
    this.geometry = geometry;
  }

  public LocationFeatures properties(LocationFeaturesProperties properties) {
    this.properties = properties;
    return this;
  }

   /**
   * Get properties
   * @return properties
  **/
  @ApiModelProperty(value = "")
  public LocationFeaturesProperties getProperties() {
    return properties;
  }

  public void setProperties(LocationFeaturesProperties properties) {
    this.properties = properties;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LocationFeatures locationFeatures = (LocationFeatures) o;
    return Objects.equals(this.type, locationFeatures.type) &&
        Objects.equals(this.geometry, locationFeatures.geometry) &&
        Objects.equals(this.properties, locationFeatures.properties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, geometry, properties);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LocationFeatures {\n");
    
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    geometry: ").append(toIndentedString(geometry)).append("\n");
    sb.append("    properties: ").append(toIndentedString(properties)).append("\n");
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

