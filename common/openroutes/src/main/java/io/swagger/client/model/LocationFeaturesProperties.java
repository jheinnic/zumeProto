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

/**
 * LocationFeaturesProperties
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class LocationFeaturesProperties {
  @SerializedName("osm_id")
  private String osmId = null;

  @SerializedName("category")
  private String category = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("address")
  private String address = null;

  @SerializedName("phone")
  private String phone = null;

  @SerializedName("website")
  private String website = null;

  @SerializedName("opening_hours")
  private String openingHours = null;

  @SerializedName("wheelchair")
  private String wheelchair = null;

  @SerializedName("distance")
  private String distance = null;

  public LocationFeaturesProperties osmId(String osmId) {
    this.osmId = osmId;
    return this;
  }

   /**
   * Get osmId
   * @return osmId
  **/
  @ApiModelProperty(value = "")
  public String getOsmId() {
    return osmId;
  }

  public void setOsmId(String osmId) {
    this.osmId = osmId;
  }

  public LocationFeaturesProperties category(String category) {
    this.category = category;
    return this;
  }

   /**
   * Get category
   * @return category
  **/
  @ApiModelProperty(value = "")
  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public LocationFeaturesProperties name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public LocationFeaturesProperties address(String address) {
    this.address = address;
    return this;
  }

   /**
   * Get address
   * @return address
  **/
  @ApiModelProperty(value = "")
  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public LocationFeaturesProperties phone(String phone) {
    this.phone = phone;
    return this;
  }

   /**
   * Get phone
   * @return phone
  **/
  @ApiModelProperty(value = "")
  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public LocationFeaturesProperties website(String website) {
    this.website = website;
    return this;
  }

   /**
   * Get website
   * @return website
  **/
  @ApiModelProperty(value = "")
  public String getWebsite() {
    return website;
  }

  public void setWebsite(String website) {
    this.website = website;
  }

  public LocationFeaturesProperties openingHours(String openingHours) {
    this.openingHours = openingHours;
    return this;
  }

   /**
   * Get openingHours
   * @return openingHours
  **/
  @ApiModelProperty(value = "")
  public String getOpeningHours() {
    return openingHours;
  }

  public void setOpeningHours(String openingHours) {
    this.openingHours = openingHours;
  }

  public LocationFeaturesProperties wheelchair(String wheelchair) {
    this.wheelchair = wheelchair;
    return this;
  }

   /**
   * Get wheelchair
   * @return wheelchair
  **/
  @ApiModelProperty(value = "")
  public String getWheelchair() {
    return wheelchair;
  }

  public void setWheelchair(String wheelchair) {
    this.wheelchair = wheelchair;
  }

  public LocationFeaturesProperties distance(String distance) {
    this.distance = distance;
    return this;
  }

   /**
   * Get distance
   * @return distance
  **/
  @ApiModelProperty(value = "")
  public String getDistance() {
    return distance;
  }

  public void setDistance(String distance) {
    this.distance = distance;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LocationFeaturesProperties locationFeaturesProperties = (LocationFeaturesProperties) o;
    return Objects.equals(this.osmId, locationFeaturesProperties.osmId) &&
        Objects.equals(this.category, locationFeaturesProperties.category) &&
        Objects.equals(this.name, locationFeaturesProperties.name) &&
        Objects.equals(this.address, locationFeaturesProperties.address) &&
        Objects.equals(this.phone, locationFeaturesProperties.phone) &&
        Objects.equals(this.website, locationFeaturesProperties.website) &&
        Objects.equals(this.openingHours, locationFeaturesProperties.openingHours) &&
        Objects.equals(this.wheelchair, locationFeaturesProperties.wheelchair) &&
        Objects.equals(this.distance, locationFeaturesProperties.distance);
  }

  @Override
  public int hashCode() {
    return Objects.hash(osmId, category, name, address, phone, website, openingHours, wheelchair, distance);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LocationFeaturesProperties {\n");
    
    sb.append("    osmId: ").append(toIndentedString(osmId)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    website: ").append(toIndentedString(website)).append("\n");
    sb.append("    openingHours: ").append(toIndentedString(openingHours)).append("\n");
    sb.append("    wheelchair: ").append(toIndentedString(wheelchair)).append("\n");
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
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

