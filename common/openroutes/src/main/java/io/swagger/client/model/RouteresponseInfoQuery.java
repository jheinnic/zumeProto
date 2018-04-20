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
import java.util.ArrayList;
import java.util.List;

/**
 * RouteresponseInfoQuery
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class RouteresponseInfoQuery {
  @SerializedName("profile")
  private String profile = null;

  @SerializedName("preference")
  private String preference = "fastest";

  @SerializedName("coordinates")
  private List<List<Double>> coordinates = new ArrayList<List<Double>>();

  @SerializedName("language")
  private String language = null;

  @SerializedName("units")
  private String units = null;

  @SerializedName("geometry")
  private Boolean geometry = null;

  @SerializedName("geometry_format")
  private String geometryFormat = null;

  @SerializedName("instructions_format")
  private String instructionsFormat = null;

  @SerializedName("instructions")
  private Boolean instructions = null;

  @SerializedName("elevation")
  private Boolean elevation = null;

  @SerializedName("options")
  private String options = null;

  public RouteresponseInfoQuery profile(String profile) {
    this.profile = profile;
    return this;
  }

   /**
   * Get profile
   * @return profile
  **/
  @ApiModelProperty(example = "driving-car", required = true, value = "")
  public String getProfile() {
    return profile;
  }

  public void setProfile(String profile) {
    this.profile = profile;
  }

  public RouteresponseInfoQuery preference(String preference) {
    this.preference = preference;
    return this;
  }

   /**
   * Get preference
   * @return preference
  **/
  @ApiModelProperty(example = "fastest", value = "")
  public String getPreference() {
    return preference;
  }

  public void setPreference(String preference) {
    this.preference = preference;
  }

  public RouteresponseInfoQuery coordinates(List<List<Double>> coordinates) {
    this.coordinates = coordinates;
    return this;
  }

  public RouteresponseInfoQuery addCoordinatesItem(List<Double> coordinatesItem) {
    this.coordinates.add(coordinatesItem);
    return this;
  }

   /**
   * Get coordinates
   * @return coordinates
  **/
  @ApiModelProperty(example = "[[8.34234,48.23424],[8.23424,48.26424]]", required = true, value = "")
  public List<List<Double>> getCoordinates() {
    return coordinates;
  }

  public void setCoordinates(List<List<Double>> coordinates) {
    this.coordinates = coordinates;
  }

  public RouteresponseInfoQuery language(String language) {
    this.language = language;
    return this;
  }

   /**
   * Get language
   * @return language
  **/
  @ApiModelProperty(example = "en", value = "")
  public String getLanguage() {
    return language;
  }

  public void setLanguage(String language) {
    this.language = language;
  }

  public RouteresponseInfoQuery units(String units) {
    this.units = units;
    return this;
  }

   /**
   * Get units
   * @return units
  **/
  @ApiModelProperty(example = "meters", value = "")
  public String getUnits() {
    return units;
  }

  public void setUnits(String units) {
    this.units = units;
  }

  public RouteresponseInfoQuery geometry(Boolean geometry) {
    this.geometry = geometry;
    return this;
  }

   /**
   * Get geometry
   * @return geometry
  **/
  @ApiModelProperty(example = "true", value = "")
  public Boolean isGeometry() {
    return geometry;
  }

  public void setGeometry(Boolean geometry) {
    this.geometry = geometry;
  }

  public RouteresponseInfoQuery geometryFormat(String geometryFormat) {
    this.geometryFormat = geometryFormat;
    return this;
  }

   /**
   * Get geometryFormat
   * @return geometryFormat
  **/
  @ApiModelProperty(example = "encodedpolyline", required = true, value = "")
  public String getGeometryFormat() {
    return geometryFormat;
  }

  public void setGeometryFormat(String geometryFormat) {
    this.geometryFormat = geometryFormat;
  }

  public RouteresponseInfoQuery instructionsFormat(String instructionsFormat) {
    this.instructionsFormat = instructionsFormat;
    return this;
  }

   /**
   * Get instructionsFormat
   * @return instructionsFormat
  **/
  @ApiModelProperty(example = "text", value = "")
  public String getInstructionsFormat() {
    return instructionsFormat;
  }

  public void setInstructionsFormat(String instructionsFormat) {
    this.instructionsFormat = instructionsFormat;
  }

  public RouteresponseInfoQuery instructions(Boolean instructions) {
    this.instructions = instructions;
    return this;
  }

   /**
   * Get instructions
   * @return instructions
  **/
  @ApiModelProperty(example = "true", value = "")
  public Boolean isInstructions() {
    return instructions;
  }

  public void setInstructions(Boolean instructions) {
    this.instructions = instructions;
  }

  public RouteresponseInfoQuery elevation(Boolean elevation) {
    this.elevation = elevation;
    return this;
  }

   /**
   * Get elevation
   * @return elevation
  **/
  @ApiModelProperty(example = "false", value = "")
  public Boolean isElevation() {
    return elevation;
  }

  public void setElevation(Boolean elevation) {
    this.elevation = elevation;
  }

  public RouteresponseInfoQuery options(String options) {
    this.options = options;
    return this;
  }

   /**
   * Get options
   * @return options
  **/
  @ApiModelProperty(example = "", value = "")
  public String getOptions() {
    return options;
  }

  public void setOptions(String options) {
    this.options = options;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RouteresponseInfoQuery routeresponseInfoQuery = (RouteresponseInfoQuery) o;
    return Objects.equals(this.profile, routeresponseInfoQuery.profile) &&
        Objects.equals(this.preference, routeresponseInfoQuery.preference) &&
        Objects.equals(this.coordinates, routeresponseInfoQuery.coordinates) &&
        Objects.equals(this.language, routeresponseInfoQuery.language) &&
        Objects.equals(this.units, routeresponseInfoQuery.units) &&
        Objects.equals(this.geometry, routeresponseInfoQuery.geometry) &&
        Objects.equals(this.geometryFormat, routeresponseInfoQuery.geometryFormat) &&
        Objects.equals(this.instructionsFormat, routeresponseInfoQuery.instructionsFormat) &&
        Objects.equals(this.instructions, routeresponseInfoQuery.instructions) &&
        Objects.equals(this.elevation, routeresponseInfoQuery.elevation) &&
        Objects.equals(this.options, routeresponseInfoQuery.options);
  }

  @Override
  public int hashCode() {
    return Objects.hash(profile, preference, coordinates, language, units, geometry, geometryFormat, instructionsFormat, instructions, elevation, options);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RouteresponseInfoQuery {\n");
    
    sb.append("    profile: ").append(toIndentedString(profile)).append("\n");
    sb.append("    preference: ").append(toIndentedString(preference)).append("\n");
    sb.append("    coordinates: ").append(toIndentedString(coordinates)).append("\n");
    sb.append("    language: ").append(toIndentedString(language)).append("\n");
    sb.append("    units: ").append(toIndentedString(units)).append("\n");
    sb.append("    geometry: ").append(toIndentedString(geometry)).append("\n");
    sb.append("    geometryFormat: ").append(toIndentedString(geometryFormat)).append("\n");
    sb.append("    instructionsFormat: ").append(toIndentedString(instructionsFormat)).append("\n");
    sb.append("    instructions: ").append(toIndentedString(instructions)).append("\n");
    sb.append("    elevation: ").append(toIndentedString(elevation)).append("\n");
    sb.append("    options: ").append(toIndentedString(options)).append("\n");
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

