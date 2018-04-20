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
 * Summarizes your query settings.
 */
@ApiModel(description = "Summarizes your query settings.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class MatrixResponseInfoQuery {
  @SerializedName("profile")
  private String profile = null;

  @SerializedName("locations")
  private List<List<Double>> locations = null;

  @SerializedName("sources")
  private List<String> sources = null;

  @SerializedName("destinations")
  private List<String> destinations = null;

  @SerializedName("metrics")
  private List<String> metrics = null;

  @SerializedName("optimized")
  private Boolean optimized = null;

  public MatrixResponseInfoQuery profile(String profile) {
    this.profile = profile;
    return this;
  }

   /**
   * Get profile
   * @return profile
  **/
  @ApiModelProperty(example = "driving-car", value = "")
  public String getProfile() {
    return profile;
  }

  public void setProfile(String profile) {
    this.profile = profile;
  }

  public MatrixResponseInfoQuery locations(List<List<Double>> locations) {
    this.locations = locations;
    return this;
  }

  public MatrixResponseInfoQuery addLocationsItem(List<Double> locationsItem) {
    if (this.locations == null) {
      this.locations = new ArrayList<List<Double>>();
    }
    this.locations.add(locationsItem);
    return this;
  }

   /**
   * Get locations
   * @return locations
  **/
  @ApiModelProperty(example = "[[9.970093,48.477473],[9.207916,49.153868],[37.573242,55.801281],[115.663757,38.106467]]", value = "")
  public List<List<Double>> getLocations() {
    return locations;
  }

  public void setLocations(List<List<Double>> locations) {
    this.locations = locations;
  }

  public MatrixResponseInfoQuery sources(List<String> sources) {
    this.sources = sources;
    return this;
  }

  public MatrixResponseInfoQuery addSourcesItem(String sourcesItem) {
    if (this.sources == null) {
      this.sources = new ArrayList<String>();
    }
    this.sources.add(sourcesItem);
    return this;
  }

   /**
   * Get sources
   * @return sources
  **/
  @ApiModelProperty(example = "\"2,3\"", value = "")
  public List<String> getSources() {
    return sources;
  }

  public void setSources(List<String> sources) {
    this.sources = sources;
  }

  public MatrixResponseInfoQuery destinations(List<String> destinations) {
    this.destinations = destinations;
    return this;
  }

  public MatrixResponseInfoQuery addDestinationsItem(String destinationsItem) {
    if (this.destinations == null) {
      this.destinations = new ArrayList<String>();
    }
    this.destinations.add(destinationsItem);
    return this;
  }

   /**
   * Get destinations
   * @return destinations
  **/
  @ApiModelProperty(example = "\"all\"", value = "")
  public List<String> getDestinations() {
    return destinations;
  }

  public void setDestinations(List<String> destinations) {
    this.destinations = destinations;
  }

  public MatrixResponseInfoQuery metrics(List<String> metrics) {
    this.metrics = metrics;
    return this;
  }

  public MatrixResponseInfoQuery addMetricsItem(String metricsItem) {
    if (this.metrics == null) {
      this.metrics = new ArrayList<String>();
    }
    this.metrics.add(metricsItem);
    return this;
  }

   /**
   * Get metrics
   * @return metrics
  **/
  @ApiModelProperty(example = "\"distance|duration|weight\"", value = "")
  public List<String> getMetrics() {
    return metrics;
  }

  public void setMetrics(List<String> metrics) {
    this.metrics = metrics;
  }

  public MatrixResponseInfoQuery optimized(Boolean optimized) {
    this.optimized = optimized;
    return this;
  }

   /**
   * Get optimized
   * @return optimized
  **/
  @ApiModelProperty(example = "true", value = "")
  public Boolean isOptimized() {
    return optimized;
  }

  public void setOptimized(Boolean optimized) {
    this.optimized = optimized;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MatrixResponseInfoQuery matrixResponseInfoQuery = (MatrixResponseInfoQuery) o;
    return Objects.equals(this.profile, matrixResponseInfoQuery.profile) &&
        Objects.equals(this.locations, matrixResponseInfoQuery.locations) &&
        Objects.equals(this.sources, matrixResponseInfoQuery.sources) &&
        Objects.equals(this.destinations, matrixResponseInfoQuery.destinations) &&
        Objects.equals(this.metrics, matrixResponseInfoQuery.metrics) &&
        Objects.equals(this.optimized, matrixResponseInfoQuery.optimized);
  }

  @Override
  public int hashCode() {
    return Objects.hash(profile, locations, sources, destinations, metrics, optimized);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MatrixResponseInfoQuery {\n");
    
    sb.append("    profile: ").append(toIndentedString(profile)).append("\n");
    sb.append("    locations: ").append(toIndentedString(locations)).append("\n");
    sb.append("    sources: ").append(toIndentedString(sources)).append("\n");
    sb.append("    destinations: ").append(toIndentedString(destinations)).append("\n");
    sb.append("    metrics: ").append(toIndentedString(metrics)).append("\n");
    sb.append("    optimized: ").append(toIndentedString(optimized)).append("\n");
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

