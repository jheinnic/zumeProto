package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.InfoEngine;
import io.swagger.client.model.MatrixResponseInfoQuery;
import java.io.IOException;

/**
 * MatrixResponseInfo
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class MatrixResponseInfo {
  @SerializedName("service")
  private String service = null;

  @SerializedName("engine")
  private InfoEngine engine = null;

  @SerializedName("attribution")
  private String attribution = null;

  @SerializedName("timestamp")
  private Long timestamp = null;

  @SerializedName("query")
  private MatrixResponseInfoQuery query = null;

  public MatrixResponseInfo service(String service) {
    this.service = service;
    return this;
  }

   /**
   * API endpoint used.
   * @return service
  **/
  @ApiModelProperty(example = "matrix", value = "API endpoint used.")
  public String getService() {
    return service;
  }

  public void setService(String service) {
    this.service = service;
  }

  public MatrixResponseInfo engine(InfoEngine engine) {
    this.engine = engine;
    return this;
  }

   /**
   * Get engine
   * @return engine
  **/
  @ApiModelProperty(value = "")
  public InfoEngine getEngine() {
    return engine;
  }

  public void setEngine(InfoEngine engine) {
    this.engine = engine;
  }

  public MatrixResponseInfo attribution(String attribution) {
    this.attribution = attribution;
    return this;
  }

   /**
   * Attribution for using our service.
   * @return attribution
  **/
  @ApiModelProperty(example = "openrouteservice.org, OpenStreetMap contributors", value = "Attribution for using our service.")
  public String getAttribution() {
    return attribution;
  }

  public void setAttribution(String attribution) {
    this.attribution = attribution;
  }

  public MatrixResponseInfo timestamp(Long timestamp) {
    this.timestamp = timestamp;
    return this;
  }

   /**
   * Unix timestamp of the precise request date.
   * @return timestamp
  **/
  @ApiModelProperty(example = "1493306341299", value = "Unix timestamp of the precise request date.")
  public Long getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(Long timestamp) {
    this.timestamp = timestamp;
  }

  public MatrixResponseInfo query(MatrixResponseInfoQuery query) {
    this.query = query;
    return this;
  }

   /**
   * Get query
   * @return query
  **/
  @ApiModelProperty(value = "")
  public MatrixResponseInfoQuery getQuery() {
    return query;
  }

  public void setQuery(MatrixResponseInfoQuery query) {
    this.query = query;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MatrixResponseInfo matrixResponseInfo = (MatrixResponseInfo) o;
    return Objects.equals(this.service, matrixResponseInfo.service) &&
        Objects.equals(this.engine, matrixResponseInfo.engine) &&
        Objects.equals(this.attribution, matrixResponseInfo.attribution) &&
        Objects.equals(this.timestamp, matrixResponseInfo.timestamp) &&
        Objects.equals(this.query, matrixResponseInfo.query);
  }

  @Override
  public int hashCode() {
    return Objects.hash(service, engine, attribution, timestamp, query);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MatrixResponseInfo {\n");
    
    sb.append("    service: ").append(toIndentedString(service)).append("\n");
    sb.append("    engine: ").append(toIndentedString(engine)).append("\n");
    sb.append("    attribution: ").append(toIndentedString(attribution)).append("\n");
    sb.append("    timestamp: ").append(toIndentedString(timestamp)).append("\n");
    sb.append("    query: ").append(toIndentedString(query)).append("\n");
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

