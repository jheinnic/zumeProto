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
 * Contains the OSM tag information of the point and the &#x60;confidence&#x60;. For reverse request with &#x60;distance&#x60;.
 */
@ApiModel(description = "Contains the OSM tag information of the point and the `confidence`. For reverse request with `distance`.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class GeocoderesponseProperties {
  @SerializedName("country")
  private String country = null;

  @SerializedName("country_code")
  private String countryCode = null;

  @SerializedName("region")
  private String region = null;

  @SerializedName("locality")
  private String locality = null;

  @SerializedName("county")
  private String county = null;

  @SerializedName("state")
  private String state = null;

  @SerializedName("city")
  private String city = null;

  @SerializedName("postal_code")
  private String postalCode = null;

  @SerializedName("borough")
  private String borough = null;

  @SerializedName("neighbourhood")
  private String neighbourhood = null;

  @SerializedName("street")
  private String street = null;

  @SerializedName("house_number")
  private String houseNumber = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("place_type")
  private String placeType = null;

  @SerializedName("distance")
  private String distance = null;

  @SerializedName("confidence")
  private String confidence = null;

  public GeocoderesponseProperties country(String country) {
    this.country = country;
    return this;
  }

   /**
   * Get country
   * @return country
  **/
  @ApiModelProperty(example = "Germany", value = "")
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public GeocoderesponseProperties countryCode(String countryCode) {
    this.countryCode = countryCode;
    return this;
  }

   /**
   * Get countryCode
   * @return countryCode
  **/
  @ApiModelProperty(example = "DE", value = "")
  public String getCountryCode() {
    return countryCode;
  }

  public void setCountryCode(String countryCode) {
    this.countryCode = countryCode;
  }

  public GeocoderesponseProperties region(String region) {
    this.region = region;
    return this;
  }

   /**
   * Get region
   * @return region
  **/
  @ApiModelProperty(example = "Berlin", value = "")
  public String getRegion() {
    return region;
  }

  public void setRegion(String region) {
    this.region = region;
  }

  public GeocoderesponseProperties locality(String locality) {
    this.locality = locality;
    return this;
  }

   /**
   * Get locality
   * @return locality
  **/
  @ApiModelProperty(example = "Berlin", value = "")
  public String getLocality() {
    return locality;
  }

  public void setLocality(String locality) {
    this.locality = locality;
  }

  public GeocoderesponseProperties county(String county) {
    this.county = county;
    return this;
  }

   /**
   * Get county
   * @return county
  **/
  @ApiModelProperty(value = "")
  public String getCounty() {
    return county;
  }

  public void setCounty(String county) {
    this.county = county;
  }

  public GeocoderesponseProperties state(String state) {
    this.state = state;
    return this;
  }

   /**
   * Get state
   * @return state
  **/
  @ApiModelProperty(example = "Berlin", value = "")
  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public GeocoderesponseProperties city(String city) {
    this.city = city;
    return this;
  }

   /**
   * Get city
   * @return city
  **/
  @ApiModelProperty(example = "Berlin", value = "")
  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public GeocoderesponseProperties postalCode(String postalCode) {
    this.postalCode = postalCode;
    return this;
  }

   /**
   * Get postalCode
   * @return postalCode
  **/
  @ApiModelProperty(example = "10179", value = "")
  public String getPostalCode() {
    return postalCode;
  }

  public void setPostalCode(String postalCode) {
    this.postalCode = postalCode;
  }

  public GeocoderesponseProperties borough(String borough) {
    this.borough = borough;
    return this;
  }

   /**
   * Get borough
   * @return borough
  **/
  @ApiModelProperty(example = "Mitte", value = "")
  public String getBorough() {
    return borough;
  }

  public void setBorough(String borough) {
    this.borough = borough;
  }

  public GeocoderesponseProperties neighbourhood(String neighbourhood) {
    this.neighbourhood = neighbourhood;
    return this;
  }

   /**
   * Get neighbourhood
   * @return neighbourhood
  **/
  @ApiModelProperty(example = "Mitte", value = "")
  public String getNeighbourhood() {
    return neighbourhood;
  }

  public void setNeighbourhood(String neighbourhood) {
    this.neighbourhood = neighbourhood;
  }

  public GeocoderesponseProperties street(String street) {
    this.street = street;
    return this;
  }

   /**
   * Get street
   * @return street
  **/
  @ApiModelProperty(example = "Waisenstraße", value = "")
  public String getStreet() {
    return street;
  }

  public void setStreet(String street) {
    this.street = street;
  }

  public GeocoderesponseProperties houseNumber(String houseNumber) {
    this.houseNumber = houseNumber;
    return this;
  }

   /**
   * Get houseNumber
   * @return houseNumber
  **/
  @ApiModelProperty(example = "3", value = "")
  public String getHouseNumber() {
    return houseNumber;
  }

  public void setHouseNumber(String houseNumber) {
    this.houseNumber = houseNumber;
  }

  public GeocoderesponseProperties name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(example = "Waisenstraße 3", value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public GeocoderesponseProperties placeType(String placeType) {
    this.placeType = placeType;
    return this;
  }

   /**
   * [Type](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#place-type) of the returned location. 
   * @return placeType
  **/
  @ApiModelProperty(example = "address", value = "[Type](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#place-type) of the returned location. ")
  public String getPlaceType() {
    return placeType;
  }

  public void setPlaceType(String placeType) {
    this.placeType = placeType;
  }

  public GeocoderesponseProperties distance(String distance) {
    this.distance = distance;
    return this;
  }

   /**
   * Distance between the input location and the result point.
   * @return distance
  **/
  @ApiModelProperty(example = "12.41", value = "Distance between the input location and the result point.")
  public String getDistance() {
    return distance;
  }

  public void setDistance(String distance) {
    this.distance = distance;
  }

  public GeocoderesponseProperties confidence(String confidence) {
    this.confidence = confidence;
    return this;
  }

   /**
   * Value range: &#x60;0-1&#x60; **For reverse geocoding:** Based on the distance. The closer a result is to the queried point, the higher the &#x60;confidence&#x60;. **For normal geocoding:**  Based on the comparison of the query and the result. The closer a result is to the query, the higher the &#x60;confidence&#x60;. 
   * @return confidence
  **/
  @ApiModelProperty(example = "0.8", value = "Value range: `0-1` **For reverse geocoding:** Based on the distance. The closer a result is to the queried point, the higher the `confidence`. **For normal geocoding:**  Based on the comparison of the query and the result. The closer a result is to the query, the higher the `confidence`. ")
  public String getConfidence() {
    return confidence;
  }

  public void setConfidence(String confidence) {
    this.confidence = confidence;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GeocoderesponseProperties geocoderesponseProperties = (GeocoderesponseProperties) o;
    return Objects.equals(this.country, geocoderesponseProperties.country) &&
        Objects.equals(this.countryCode, geocoderesponseProperties.countryCode) &&
        Objects.equals(this.region, geocoderesponseProperties.region) &&
        Objects.equals(this.locality, geocoderesponseProperties.locality) &&
        Objects.equals(this.county, geocoderesponseProperties.county) &&
        Objects.equals(this.state, geocoderesponseProperties.state) &&
        Objects.equals(this.city, geocoderesponseProperties.city) &&
        Objects.equals(this.postalCode, geocoderesponseProperties.postalCode) &&
        Objects.equals(this.borough, geocoderesponseProperties.borough) &&
        Objects.equals(this.neighbourhood, geocoderesponseProperties.neighbourhood) &&
        Objects.equals(this.street, geocoderesponseProperties.street) &&
        Objects.equals(this.houseNumber, geocoderesponseProperties.houseNumber) &&
        Objects.equals(this.name, geocoderesponseProperties.name) &&
        Objects.equals(this.placeType, geocoderesponseProperties.placeType) &&
        Objects.equals(this.distance, geocoderesponseProperties.distance) &&
        Objects.equals(this.confidence, geocoderesponseProperties.confidence);
  }

  @Override
  public int hashCode() {
    return Objects.hash(country, countryCode, region, locality, county, state, city, postalCode, borough, neighbourhood, street, houseNumber, name, placeType, distance, confidence);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GeocoderesponseProperties {\n");
    
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    countryCode: ").append(toIndentedString(countryCode)).append("\n");
    sb.append("    region: ").append(toIndentedString(region)).append("\n");
    sb.append("    locality: ").append(toIndentedString(locality)).append("\n");
    sb.append("    county: ").append(toIndentedString(county)).append("\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
    sb.append("    city: ").append(toIndentedString(city)).append("\n");
    sb.append("    postalCode: ").append(toIndentedString(postalCode)).append("\n");
    sb.append("    borough: ").append(toIndentedString(borough)).append("\n");
    sb.append("    neighbourhood: ").append(toIndentedString(neighbourhood)).append("\n");
    sb.append("    street: ").append(toIndentedString(street)).append("\n");
    sb.append("    houseNumber: ").append(toIndentedString(houseNumber)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    placeType: ").append(toIndentedString(placeType)).append("\n");
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
    sb.append("    confidence: ").append(toIndentedString(confidence)).append("\n");
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

