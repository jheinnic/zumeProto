package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.MatrixResponseDistances;
import io.swagger.client.model.MatrixResponseDurations;
import io.swagger.client.model.MatrixResponseInfo;
import io.swagger.client.model.MatrixResponseLocation;
import io.swagger.client.model.MatrixResponseWeights;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * The Matrix Response contains one matrix for each specified &#x60;metrics&#x60; value. 
 */
@ApiModel(description = "The Matrix Response contains one matrix for each specified `metrics` value. ")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class MatrixResponse {
  @SerializedName("distances")
  private MatrixResponseDistances distances = null;

  @SerializedName("durations")
  private MatrixResponseDurations durations = null;

  @SerializedName("weights")
  private MatrixResponseWeights weights = null;

  @SerializedName("destinations")
  private List<MatrixResponseLocation> destinations = null;

  @SerializedName("sources")
  private List<MatrixResponseLocation> sources = null;

  @SerializedName("info")
  private MatrixResponseInfo info = null;

  public MatrixResponse distances(MatrixResponseDistances distances) {
    this.distances = distances;
    return this;
  }

   /**
   * Get distances
   * @return distances
  **/
  @ApiModelProperty(value = "")
  public MatrixResponseDistances getDistances() {
    return distances;
  }

  public void setDistances(MatrixResponseDistances distances) {
    this.distances = distances;
  }

  public MatrixResponse durations(MatrixResponseDurations durations) {
    this.durations = durations;
    return this;
  }

   /**
   * Get durations
   * @return durations
  **/
  @ApiModelProperty(value = "")
  public MatrixResponseDurations getDurations() {
    return durations;
  }

  public void setDurations(MatrixResponseDurations durations) {
    this.durations = durations;
  }

  public MatrixResponse weights(MatrixResponseWeights weights) {
    this.weights = weights;
    return this;
  }

   /**
   * Get weights
   * @return weights
  **/
  @ApiModelProperty(value = "")
  public MatrixResponseWeights getWeights() {
    return weights;
  }

  public void setWeights(MatrixResponseWeights weights) {
    this.weights = weights;
  }

  public MatrixResponse destinations(List<MatrixResponseLocation> destinations) {
    this.destinations = destinations;
    return this;
  }

  public MatrixResponse addDestinationsItem(MatrixResponseLocation destinationsItem) {
    if (this.destinations == null) {
      this.destinations = new ArrayList<MatrixResponseLocation>();
    }
    this.destinations.add(destinationsItem);
    return this;
  }

   /**
   * Array of destinations. Each point is snapped to the road and path network
   * @return destinations
  **/
  @ApiModelProperty(example = "[{\"location\":[37.572926,55.80129],\"snapped_distance\":19.8},{\"location\":[115.658655,38.116731],\"snapped_distance\":1225.53}]", value = "Array of destinations. Each point is snapped to the road and path network")
  public List<MatrixResponseLocation> getDestinations() {
    return destinations;
  }

  public void setDestinations(List<MatrixResponseLocation> destinations) {
    this.destinations = destinations;
  }

  public MatrixResponse sources(List<MatrixResponseLocation> sources) {
    this.sources = sources;
    return this;
  }

  public MatrixResponse addSourcesItem(MatrixResponseLocation sourcesItem) {
    if (this.sources == null) {
      this.sources = new ArrayList<MatrixResponseLocation>();
    }
    this.sources.add(sourcesItem);
    return this;
  }

   /**
   * Array of sources. Each point is snapped to the road and path network
   * @return sources
  **/
  @ApiModelProperty(example = "[{\"location\":[9.968501,48.47789],\"snapped_distance\":126.17},{\"location\":[9.207773,49.153882],\"snapped_distance\":10.54},{\"location\":[37.572926,55.80129],\"snapped_distance\":19.8},{\"location\":[115.658655,38.116731],\"snapped_distance\":1225.53}]", value = "Array of sources. Each point is snapped to the road and path network")
  public List<MatrixResponseLocation> getSources() {
    return sources;
  }

  public void setSources(List<MatrixResponseLocation> sources) {
    this.sources = sources;
  }

  public MatrixResponse info(MatrixResponseInfo info) {
    this.info = info;
    return this;
  }

   /**
   * Get info
   * @return info
  **/
  @ApiModelProperty(value = "")
  public MatrixResponseInfo getInfo() {
    return info;
  }

  public void setInfo(MatrixResponseInfo info) {
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
    MatrixResponse matrixResponse = (MatrixResponse) o;
    return Objects.equals(this.distances, matrixResponse.distances) &&
        Objects.equals(this.durations, matrixResponse.durations) &&
        Objects.equals(this.weights, matrixResponse.weights) &&
        Objects.equals(this.destinations, matrixResponse.destinations) &&
        Objects.equals(this.sources, matrixResponse.sources) &&
        Objects.equals(this.info, matrixResponse.info);
  }

  @Override
  public int hashCode() {
    return Objects.hash(distances, durations, weights, destinations, sources, info);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MatrixResponse {\n");
    
    sb.append("    distances: ").append(toIndentedString(distances)).append("\n");
    sb.append("    durations: ").append(toIndentedString(durations)).append("\n");
    sb.append("    weights: ").append(toIndentedString(weights)).append("\n");
    sb.append("    destinations: ").append(toIndentedString(destinations)).append("\n");
    sb.append("    sources: ").append(toIndentedString(sources)).append("\n");
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

