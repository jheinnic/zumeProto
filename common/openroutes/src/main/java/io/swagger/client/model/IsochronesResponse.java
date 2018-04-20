package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.IsochronesResponseFeatures;
import io.swagger.client.model.IsochronesResponseInfo;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * IsochronesResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class IsochronesResponse {
  @SerializedName("type")
  private String type = "FeatureCollection";

  @SerializedName("features")
  private List<IsochronesResponseFeatures> features = null;

  @SerializedName("bbox")
  private List<Double> bbox = null;

  @SerializedName("info")
  private IsochronesResponseInfo info = null;

  public IsochronesResponse type(String type) {
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

  public IsochronesResponse features(List<IsochronesResponseFeatures> features) {
    this.features = features;
    return this;
  }

  public IsochronesResponse addFeaturesItem(IsochronesResponseFeatures featuresItem) {
    if (this.features == null) {
      this.features = new ArrayList<IsochronesResponseFeatures>();
    }
    this.features.add(featuresItem);
    return this;
  }

   /**
   * Get features
   * @return features
  **/
  @ApiModelProperty(value = "")
  public List<IsochronesResponseFeatures> getFeatures() {
    return features;
  }

  public void setFeatures(List<IsochronesResponseFeatures> features) {
    this.features = features;
  }

  public IsochronesResponse bbox(List<Double> bbox) {
    this.bbox = bbox;
    return this;
  }

  public IsochronesResponse addBboxItem(Double bboxItem) {
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
  @ApiModelProperty(example = "[8.337413,48.228996,8.348807,48.235437]", value = "Contains the minimum bounding box of all features.")
  public List<Double> getBbox() {
    return bbox;
  }

  public void setBbox(List<Double> bbox) {
    this.bbox = bbox;
  }

  public IsochronesResponse info(IsochronesResponseInfo info) {
    this.info = info;
    return this;
  }

   /**
   * Get info
   * @return info
  **/
  @ApiModelProperty(value = "")
  public IsochronesResponseInfo getInfo() {
    return info;
  }

  public void setInfo(IsochronesResponseInfo info) {
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
    IsochronesResponse isochronesResponse = (IsochronesResponse) o;
    return Objects.equals(this.type, isochronesResponse.type) &&
        Objects.equals(this.features, isochronesResponse.features) &&
        Objects.equals(this.bbox, isochronesResponse.bbox) &&
        Objects.equals(this.info, isochronesResponse.info);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, features, bbox, info);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IsochronesResponse {\n");
    
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

