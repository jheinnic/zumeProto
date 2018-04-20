package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.GeocoderesponseInfoQuery;
import io.swagger.client.model.InfoEngine;
import java.io.IOException;

/**
 * GeocoderesponseInfo
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class GeocoderesponseInfo {
  @SerializedName("service")
  private String service = "geocoding";

  @SerializedName("attribution")
  private String attribution = null;

  @SerializedName("query")
  private GeocoderesponseInfoQuery query = null;

  @SerializedName("engine")
  private InfoEngine engine = null;

  @SerializedName("timestamp")
  private Long timestamp = null;

  public GeocoderesponseInfo service(String service) {
    this.service = service;
    return this;
  }

   /**
   * API endpoint used.
   * @return service
  **/
  @ApiModelProperty(example = "geocoding", value = "API endpoint used.")
  public String getService() {
    return service;
  }

  public void setService(String service) {
    this.service = service;
  }

  public GeocoderesponseInfo attribution(String attribution) {
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

  public GeocoderesponseInfo query(GeocoderesponseInfoQuery query) {
    this.query = query;
    return this;
  }

   /**
   * Get query
   * @return query
  **/
  @ApiModelProperty(value = "")
  public GeocoderesponseInfoQuery getQuery() {
    return query;
  }

  public void setQuery(GeocoderesponseInfoQuery query) {
    this.query = query;
  }

  public GeocoderesponseInfo engine(InfoEngine engine) {
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

  public GeocoderesponseInfo timestamp(Long timestamp) {
    this.timestamp = timestamp;
    return this;
  }

   /**
   * Unix timestamp of the precise request date.
   * @return timestamp
  **/
  @ApiModelProperty(example = "1493288124343", value = "Unix timestamp of the precise request date.")
  public Long getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(Long timestamp) {
    this.timestamp = timestamp;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GeocoderesponseInfo geocoderesponseInfo = (GeocoderesponseInfo) o;
    return Objects.equals(this.service, geocoderesponseInfo.service) &&
        Objects.equals(this.attribution, geocoderesponseInfo.attribution) &&
        Objects.equals(this.query, geocoderesponseInfo.query) &&
        Objects.equals(this.engine, geocoderesponseInfo.engine) &&
        Objects.equals(this.timestamp, geocoderesponseInfo.timestamp);
  }

  @Override
  public int hashCode() {
    return Objects.hash(service, attribution, query, engine, timestamp);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GeocoderesponseInfo {\n");
    
    sb.append("    service: ").append(toIndentedString(service)).append("\n");
    sb.append("    attribution: ").append(toIndentedString(attribution)).append("\n");
    sb.append("    query: ").append(toIndentedString(query)).append("\n");
    sb.append("    engine: ").append(toIndentedString(engine)).append("\n");
    sb.append("    timestamp: ").append(toIndentedString(timestamp)).append("\n");
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

