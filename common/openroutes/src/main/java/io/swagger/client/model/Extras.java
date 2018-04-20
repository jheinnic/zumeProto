package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.ExtrasProperty;
import java.io.IOException;

/**
 * For every information item there is an associated block divided into *summary* and *values*.
 */
@ApiModel(description = "For every information item there is an associated block divided into *summary* and *values*.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class Extras {
  @SerializedName("steepness")
  private ExtrasProperty steepness = null;

  @SerializedName("suitability")
  private ExtrasProperty suitability = null;

  @SerializedName("surface")
  private ExtrasProperty surface = null;

  @SerializedName("waycategory")
  private ExtrasProperty waycategory = null;

  @SerializedName("waytype")
  private ExtrasProperty waytype = null;

  @SerializedName("tollways")
  private ExtrasProperty tollways = null;

  @SerializedName("traildifficulty")
  private ExtrasProperty traildifficulty = null;

  public Extras steepness(ExtrasProperty steepness) {
    this.steepness = steepness;
    return this;
  }

   /**
   * Get steepness
   * @return steepness
  **/
  @ApiModelProperty(value = "")
  public ExtrasProperty getSteepness() {
    return steepness;
  }

  public void setSteepness(ExtrasProperty steepness) {
    this.steepness = steepness;
  }

  public Extras suitability(ExtrasProperty suitability) {
    this.suitability = suitability;
    return this;
  }

   /**
   * Get suitability
   * @return suitability
  **/
  @ApiModelProperty(value = "")
  public ExtrasProperty getSuitability() {
    return suitability;
  }

  public void setSuitability(ExtrasProperty suitability) {
    this.suitability = suitability;
  }

  public Extras surface(ExtrasProperty surface) {
    this.surface = surface;
    return this;
  }

   /**
   * Get surface
   * @return surface
  **/
  @ApiModelProperty(value = "")
  public ExtrasProperty getSurface() {
    return surface;
  }

  public void setSurface(ExtrasProperty surface) {
    this.surface = surface;
  }

  public Extras waycategory(ExtrasProperty waycategory) {
    this.waycategory = waycategory;
    return this;
  }

   /**
   * Get waycategory
   * @return waycategory
  **/
  @ApiModelProperty(value = "")
  public ExtrasProperty getWaycategory() {
    return waycategory;
  }

  public void setWaycategory(ExtrasProperty waycategory) {
    this.waycategory = waycategory;
  }

  public Extras waytype(ExtrasProperty waytype) {
    this.waytype = waytype;
    return this;
  }

   /**
   * Get waytype
   * @return waytype
  **/
  @ApiModelProperty(value = "")
  public ExtrasProperty getWaytype() {
    return waytype;
  }

  public void setWaytype(ExtrasProperty waytype) {
    this.waytype = waytype;
  }

  public Extras tollways(ExtrasProperty tollways) {
    this.tollways = tollways;
    return this;
  }

   /**
   * Get tollways
   * @return tollways
  **/
  @ApiModelProperty(value = "")
  public ExtrasProperty getTollways() {
    return tollways;
  }

  public void setTollways(ExtrasProperty tollways) {
    this.tollways = tollways;
  }

  public Extras traildifficulty(ExtrasProperty traildifficulty) {
    this.traildifficulty = traildifficulty;
    return this;
  }

   /**
   * Get traildifficulty
   * @return traildifficulty
  **/
  @ApiModelProperty(value = "")
  public ExtrasProperty getTraildifficulty() {
    return traildifficulty;
  }

  public void setTraildifficulty(ExtrasProperty traildifficulty) {
    this.traildifficulty = traildifficulty;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Extras extras = (Extras) o;
    return Objects.equals(this.steepness, extras.steepness) &&
        Objects.equals(this.suitability, extras.suitability) &&
        Objects.equals(this.surface, extras.surface) &&
        Objects.equals(this.waycategory, extras.waycategory) &&
        Objects.equals(this.waytype, extras.waytype) &&
        Objects.equals(this.tollways, extras.tollways) &&
        Objects.equals(this.traildifficulty, extras.traildifficulty);
  }

  @Override
  public int hashCode() {
    return Objects.hash(steepness, suitability, surface, waycategory, waytype, tollways, traildifficulty);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Extras {\n");
    
    sb.append("    steepness: ").append(toIndentedString(steepness)).append("\n");
    sb.append("    suitability: ").append(toIndentedString(suitability)).append("\n");
    sb.append("    surface: ").append(toIndentedString(surface)).append("\n");
    sb.append("    waycategory: ").append(toIndentedString(waycategory)).append("\n");
    sb.append("    waytype: ").append(toIndentedString(waytype)).append("\n");
    sb.append("    tollways: ").append(toIndentedString(tollways)).append("\n");
    sb.append("    traildifficulty: ").append(toIndentedString(traildifficulty)).append("\n");
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

