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
 * Composition of a structured query object. A minimum of one parameter has to be specified.
 */
@ApiModel(description = "Composition of a structured query object. A minimum of one parameter has to be specified.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class GeocodeStructuredQuery {
  @SerializedName("address")
  private String address = null;

  @SerializedName("neighbourhood")
  private String neighbourhood = null;

  @SerializedName("borough")
  private String borough = null;

  @SerializedName("locality")
  private String locality = null;

  @SerializedName("municipality")
  private String municipality = null;

  @SerializedName("county")
  private String county = null;

  @SerializedName("region")
  private String region = null;

  @SerializedName("postalcode")
  private String postalcode = null;

  @SerializedName("country")
  private String country = null;

  public GeocodeStructuredQuery address(String address) {
    this.address = address;
    return this;
  }

   /**
   * Can contain a full address with house number or only a street name
   * @return address
  **/
  @ApiModelProperty(value = "Can contain a full address with house number or only a street name")
  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public GeocodeStructuredQuery neighbourhood(String neighbourhood) {
    this.neighbourhood = neighbourhood;
    return this;
  }

   /**
   * Vernacular geographic entities that may not necessarily be official administrative divisions but are important nonetheless
   * @return neighbourhood
  **/
  @ApiModelProperty(value = "Vernacular geographic entities that may not necessarily be official administrative divisions but are important nonetheless")
  public String getNeighbourhood() {
    return neighbourhood;
  }

  public void setNeighbourhood(String neighbourhood) {
    this.neighbourhood = neighbourhood;
  }

  public GeocodeStructuredQuery borough(String borough) {
    this.borough = borough;
    return this;
  }

   /**
   * Mostly known in the context of New York City, even though they may exist in other cities, such as Mexico City
   * @return borough
  **/
  @ApiModelProperty(value = "Mostly known in the context of New York City, even though they may exist in other cities, such as Mexico City")
  public String getBorough() {
    return borough;
  }

  public void setBorough(String borough) {
    this.borough = borough;
  }

  public GeocodeStructuredQuery locality(String locality) {
    this.locality = locality;
    return this;
  }

   /**
   * Name of a Settlement
   * @return locality
  **/
  @ApiModelProperty(value = "Name of a Settlement")
  public String getLocality() {
    return locality;
  }

  public void setLocality(String locality) {
    this.locality = locality;
  }

  public GeocodeStructuredQuery municipality(String municipality) {
    this.municipality = municipality;
    return this;
  }

   /**
   * Single urban administrative division, distinguished from county
   * @return municipality
  **/
  @ApiModelProperty(value = "Single urban administrative division, distinguished from county")
  public String getMunicipality() {
    return municipality;
  }

  public void setMunicipality(String municipality) {
    this.municipality = municipality;
  }

  public GeocodeStructuredQuery county(String county) {
    this.county = county;
    return this;
  }

   /**
   * Administrative division between localities and regions
   * @return county
  **/
  @ApiModelProperty(value = "Administrative division between localities and regions")
  public String getCounty() {
    return county;
  }

  public void setCounty(String county) {
    this.county = county;
  }

  public GeocodeStructuredQuery region(String region) {
    this.region = region;
    return this;
  }

   /**
   * Normally the first-level administrative divisions within countries, analogous to states and provinces in the United States and Canada, respectively, though most other countries contain regions as well
   * @return region
  **/
  @ApiModelProperty(value = "Normally the first-level administrative divisions within countries, analogous to states and provinces in the United States and Canada, respectively, though most other countries contain regions as well")
  public String getRegion() {
    return region;
  }

  public void setRegion(String region) {
    this.region = region;
  }

  public GeocodeStructuredQuery postalcode(String postalcode) {
    this.postalcode = postalcode;
    return this;
  }

   /**
   * A postalcode
   * @return postalcode
  **/
  @ApiModelProperty(value = "A postalcode")
  public String getPostalcode() {
    return postalcode;
  }

  public void setPostalcode(String postalcode) {
    this.postalcode = postalcode;
  }

  public GeocodeStructuredQuery country(String country) {
    this.country = country;
    return this;
  }

   /**
   * Name of a country. Supports two- and three-letter abbreviations
   * @return country
  **/
  @ApiModelProperty(value = "Name of a country. Supports two- and three-letter abbreviations")
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GeocodeStructuredQuery geocodeStructuredQuery = (GeocodeStructuredQuery) o;
    return Objects.equals(this.address, geocodeStructuredQuery.address) &&
        Objects.equals(this.neighbourhood, geocodeStructuredQuery.neighbourhood) &&
        Objects.equals(this.borough, geocodeStructuredQuery.borough) &&
        Objects.equals(this.locality, geocodeStructuredQuery.locality) &&
        Objects.equals(this.municipality, geocodeStructuredQuery.municipality) &&
        Objects.equals(this.county, geocodeStructuredQuery.county) &&
        Objects.equals(this.region, geocodeStructuredQuery.region) &&
        Objects.equals(this.postalcode, geocodeStructuredQuery.postalcode) &&
        Objects.equals(this.country, geocodeStructuredQuery.country);
  }

  @Override
  public int hashCode() {
    return Objects.hash(address, neighbourhood, borough, locality, municipality, county, region, postalcode, country);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GeocodeStructuredQuery {\n");
    
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    neighbourhood: ").append(toIndentedString(neighbourhood)).append("\n");
    sb.append("    borough: ").append(toIndentedString(borough)).append("\n");
    sb.append("    locality: ").append(toIndentedString(locality)).append("\n");
    sb.append("    municipality: ").append(toIndentedString(municipality)).append("\n");
    sb.append("    county: ").append(toIndentedString(county)).append("\n");
    sb.append("    region: ").append(toIndentedString(region)).append("\n");
    sb.append("    postalcode: ").append(toIndentedString(postalcode)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
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

