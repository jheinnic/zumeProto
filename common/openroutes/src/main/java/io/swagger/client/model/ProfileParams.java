package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.ProfileParamsRestrictions;
import io.swagger.client.model.ProfileParamsWeightings;
import java.io.IOException;

/**
 * ProfileParams
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class ProfileParams {
  @SerializedName("length")
  private Double length = null;

  @SerializedName("width")
  private Double width = null;

  @SerializedName("height")
  private Double height = null;

  @SerializedName("axleload")
  private Double axleload = null;

  @SerializedName("weight")
  private Double weight = null;

  @SerializedName("hazmat")
  private Boolean hazmat = null;

  @SerializedName("weightings")
  private ProfileParamsWeightings weightings = null;

  @SerializedName("restrictions")
  private ProfileParamsRestrictions restrictions = null;

  public ProfileParams length(Double length) {
    this.length = length;
    return this;
  }

   /**
   * Get length
   * @return length
  **/
  @ApiModelProperty(value = "")
  public Double getLength() {
    return length;
  }

  public void setLength(Double length) {
    this.length = length;
  }

  public ProfileParams width(Double width) {
    this.width = width;
    return this;
  }

   /**
   * Get width
   * @return width
  **/
  @ApiModelProperty(value = "")
  public Double getWidth() {
    return width;
  }

  public void setWidth(Double width) {
    this.width = width;
  }

  public ProfileParams height(Double height) {
    this.height = height;
    return this;
  }

   /**
   * Get height
   * @return height
  **/
  @ApiModelProperty(value = "")
  public Double getHeight() {
    return height;
  }

  public void setHeight(Double height) {
    this.height = height;
  }

  public ProfileParams axleload(Double axleload) {
    this.axleload = axleload;
    return this;
  }

   /**
   * Get axleload
   * @return axleload
  **/
  @ApiModelProperty(value = "")
  public Double getAxleload() {
    return axleload;
  }

  public void setAxleload(Double axleload) {
    this.axleload = axleload;
  }

  public ProfileParams weight(Double weight) {
    this.weight = weight;
    return this;
  }

   /**
   * Get weight
   * @return weight
  **/
  @ApiModelProperty(value = "")
  public Double getWeight() {
    return weight;
  }

  public void setWeight(Double weight) {
    this.weight = weight;
  }

  public ProfileParams hazmat(Boolean hazmat) {
    this.hazmat = hazmat;
    return this;
  }

   /**
   * Get hazmat
   * @return hazmat
  **/
  @ApiModelProperty(value = "")
  public Boolean isHazmat() {
    return hazmat;
  }

  public void setHazmat(Boolean hazmat) {
    this.hazmat = hazmat;
  }

  public ProfileParams weightings(ProfileParamsWeightings weightings) {
    this.weightings = weightings;
    return this;
  }

   /**
   * Get weightings
   * @return weightings
  **/
  @ApiModelProperty(value = "")
  public ProfileParamsWeightings getWeightings() {
    return weightings;
  }

  public void setWeightings(ProfileParamsWeightings weightings) {
    this.weightings = weightings;
  }

  public ProfileParams restrictions(ProfileParamsRestrictions restrictions) {
    this.restrictions = restrictions;
    return this;
  }

   /**
   * Get restrictions
   * @return restrictions
  **/
  @ApiModelProperty(value = "")
  public ProfileParamsRestrictions getRestrictions() {
    return restrictions;
  }

  public void setRestrictions(ProfileParamsRestrictions restrictions) {
    this.restrictions = restrictions;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProfileParams profileParams = (ProfileParams) o;
    return Objects.equals(this.length, profileParams.length) &&
        Objects.equals(this.width, profileParams.width) &&
        Objects.equals(this.height, profileParams.height) &&
        Objects.equals(this.axleload, profileParams.axleload) &&
        Objects.equals(this.weight, profileParams.weight) &&
        Objects.equals(this.hazmat, profileParams.hazmat) &&
        Objects.equals(this.weightings, profileParams.weightings) &&
        Objects.equals(this.restrictions, profileParams.restrictions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(length, width, height, axleload, weight, hazmat, weightings, restrictions);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProfileParams {\n");
    
    sb.append("    length: ").append(toIndentedString(length)).append("\n");
    sb.append("    width: ").append(toIndentedString(width)).append("\n");
    sb.append("    height: ").append(toIndentedString(height)).append("\n");
    sb.append("    axleload: ").append(toIndentedString(axleload)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
    sb.append("    hazmat: ").append(toIndentedString(hazmat)).append("\n");
    sb.append("    weightings: ").append(toIndentedString(weightings)).append("\n");
    sb.append("    restrictions: ").append(toIndentedString(restrictions)).append("\n");
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

