package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.LocationFeatures;
import io.swagger.client.model.LocationsPoiResponseInfo;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * LocationsPoiResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class LocationsPoiResponse {
  @SerializedName("type")
  private String type = "FeatureCollection";

  @SerializedName("features")
  private List<LocationFeatures> features = null;

  @SerializedName("bbox")
  private List<Double> bbox = null;

  @SerializedName("info")
  private LocationsPoiResponseInfo info = null;

  public LocationsPoiResponse type(String type) {
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

  public LocationsPoiResponse features(List<LocationFeatures> features) {
    this.features = features;
    return this;
  }

  public LocationsPoiResponse addFeaturesItem(LocationFeatures featuresItem) {
    if (this.features == null) {
      this.features = new ArrayList<LocationFeatures>();
    }
    this.features.add(featuresItem);
    return this;
  }

   /**
   * Get features
   * @return features
  **/
  @ApiModelProperty(example = "[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[8.1691,47.444286]},\"properties\":{\"osm_id\":\"4491251090\",\"category\":\"451\",\"name\":\"Volg\",\"distance\":\"115.08\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[8.168594,47.380072]},\"properties\":{\"osm_id\":\"2754058215\",\"category\":\"474\",\"name\":\"Berner Früchte und Gemüse\",\"phone\":\"+41 (0)62 891 34 50/51\",\"website\":\"http://www.berner-gemuese.ch\",\"distance\":\"76.58\"}}]", value = "")
  public List<LocationFeatures> getFeatures() {
    return features;
  }

  public void setFeatures(List<LocationFeatures> features) {
    this.features = features;
  }

  public LocationsPoiResponse bbox(List<Double> bbox) {
    this.bbox = bbox;
    return this;
  }

  public LocationsPoiResponse addBboxItem(Double bboxItem) {
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
  @ApiModelProperty(example = "[8.168594,47.380072,8.1691,47.444286]", value = "Contains the minimum bounding box of all features.")
  public List<Double> getBbox() {
    return bbox;
  }

  public void setBbox(List<Double> bbox) {
    this.bbox = bbox;
  }

  public LocationsPoiResponse info(LocationsPoiResponseInfo info) {
    this.info = info;
    return this;
  }

   /**
   * Get info
   * @return info
  **/
  @ApiModelProperty(value = "")
  public LocationsPoiResponseInfo getInfo() {
    return info;
  }

  public void setInfo(LocationsPoiResponseInfo info) {
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
    LocationsPoiResponse locationsPoiResponse = (LocationsPoiResponse) o;
    return Objects.equals(this.type, locationsPoiResponse.type) &&
        Objects.equals(this.features, locationsPoiResponse.features) &&
        Objects.equals(this.bbox, locationsPoiResponse.bbox) &&
        Objects.equals(this.info, locationsPoiResponse.info);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, features, bbox, info);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LocationsPoiResponse {\n");
    
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

