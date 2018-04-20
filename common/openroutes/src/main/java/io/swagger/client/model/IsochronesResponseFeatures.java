package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.IsochronesResponseGeometry;
import io.swagger.client.model.IsochronesResponseProperties;
import java.io.IOException;

/**
 * IsochronesResponseFeatures
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class IsochronesResponseFeatures {
  @SerializedName("geometry")
  private IsochronesResponseGeometry geometry = null;

  @SerializedName("type")
  private String type = "Feature";

  @SerializedName("properties")
  private IsochronesResponseProperties properties = null;

  public IsochronesResponseFeatures geometry(IsochronesResponseGeometry geometry) {
    this.geometry = geometry;
    return this;
  }

   /**
   * Get geometry
   * @return geometry
  **/
  @ApiModelProperty(value = "")
  public IsochronesResponseGeometry getGeometry() {
    return geometry;
  }

  public void setGeometry(IsochronesResponseGeometry geometry) {
    this.geometry = geometry;
  }

  public IsochronesResponseFeatures type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(example = "Feature", value = "")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public IsochronesResponseFeatures properties(IsochronesResponseProperties properties) {
    this.properties = properties;
    return this;
  }

   /**
   * Get properties
   * @return properties
  **/
  @ApiModelProperty(value = "")
  public IsochronesResponseProperties getProperties() {
    return properties;
  }

  public void setProperties(IsochronesResponseProperties properties) {
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
    IsochronesResponseFeatures isochronesResponseFeatures = (IsochronesResponseFeatures) o;
    return Objects.equals(this.geometry, isochronesResponseFeatures.geometry) &&
        Objects.equals(this.type, isochronesResponseFeatures.type) &&
        Objects.equals(this.properties, isochronesResponseFeatures.properties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(geometry, type, properties);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IsochronesResponseFeatures {\n");
    
    sb.append("    geometry: ").append(toIndentedString(geometry)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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

