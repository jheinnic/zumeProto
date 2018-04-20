package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.GeocoderesponseFeatures;
import io.swagger.client.model.GeocoderesponseInfo;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Geocoderesponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class Geocoderesponse {
  @SerializedName("type")
  private String type = "FeatureCollection";

  @SerializedName("features")
  private List<GeocoderesponseFeatures> features = null;

  @SerializedName("bbox")
  private List<Double> bbox = null;

  @SerializedName("info")
  private GeocoderesponseInfo info = null;

  public Geocoderesponse type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @ApiModelProperty(example = "FeatureCollection", value = "")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Geocoderesponse features(List<GeocoderesponseFeatures> features) {
    this.features = features;
    return this;
  }

  public Geocoderesponse addFeaturesItem(GeocoderesponseFeatures featuresItem) {
    if (this.features == null) {
      this.features = new ArrayList<GeocoderesponseFeatures>();
    }
    this.features.add(featuresItem);
    return this;
  }

   /**
   * Get features
   * @return features
  **/
  @ApiModelProperty(value = "")
  public List<GeocoderesponseFeatures> getFeatures() {
    return features;
  }

  public void setFeatures(List<GeocoderesponseFeatures> features) {
    this.features = features;
  }

  public Geocoderesponse bbox(List<Double> bbox) {
    this.bbox = bbox;
    return this;
  }

  public Geocoderesponse addBboxItem(Double bboxItem) {
    if (this.bbox == null) {
      this.bbox = new ArrayList<Double>();
    }
    this.bbox.add(bboxItem);
    return this;
  }

   /**
   * Contains the minimum bounding box of all features.
   * @return bbox
  **/
  @ApiModelProperty(example = "[13.239515,52.514679,13.239515,52.514679]", value = "Contains the minimum bounding box of all features.")
  public List<Double> getBbox() {
    return bbox;
  }

  public void setBbox(List<Double> bbox) {
    this.bbox = bbox;
  }

  public Geocoderesponse info(GeocoderesponseInfo info) {
    this.info = info;
    return this;
  }

   /**
   * Get info
   * @return info
  **/
  @ApiModelProperty(value = "")
  public GeocoderesponseInfo getInfo() {
    return info;
  }

  public void setInfo(GeocoderesponseInfo info) {
    this.info = info;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Geocoderesponse geocoderesponse = (Geocoderesponse) o;
    return Objects.equals(this.type, geocoderesponse.type) &&
        Objects.equals(this.features, geocoderesponse.features) &&
        Objects.equals(this.bbox, geocoderesponse.bbox) &&
        Objects.equals(this.info, geocoderesponse.info);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, features, bbox, info);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Geocoderesponse {\n");
    
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    features: ").append(toIndentedString(features)).append("\n");
    sb.append("    bbox: ").append(toIndentedString(bbox)).append("\n");
    sb.append("    info: ").append(toIndentedString(info)).append("\n");
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

