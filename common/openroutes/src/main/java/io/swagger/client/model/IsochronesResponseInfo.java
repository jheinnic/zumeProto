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
import io.swagger.client.model.IsochronesResponseInfoQuery;
import java.io.IOException;

/**
 * IsochronesResponseInfo
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class IsochronesResponseInfo {
  @SerializedName("service")
  private String service = "isochrones";

  @SerializedName("query")
  private IsochronesResponseInfoQuery query = null;

  @SerializedName("attribution")
  private String attribution = null;

  @SerializedName("engine")
  private InfoEngine engine = null;

  @SerializedName("timestamp")
  private Long timestamp = null;

  public IsochronesResponseInfo service(String service) {
    this.service = service;
    return this;
  }

   /**
   * API endpoint used.
   * @return service
  **/
  @ApiModelProperty(example = "isochrones", value = "API endpoint used.")
  public String getService() {
    return service;
  }

  public void setService(String service) {
    this.service = service;
  }

  public IsochronesResponseInfo query(IsochronesResponseInfoQuery query) {
    this.query = query;
    return this;
  }

   /**
   * Get query
   * @return query
  **/
  @ApiModelProperty(value = "")
  public IsochronesResponseInfoQuery getQuery() {
    return query;
  }

  public void setQuery(IsochronesResponseInfoQuery query) {
    this.query = query;
  }

  public IsochronesResponseInfo attribution(String attribution) {
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

  public IsochronesResponseInfo engine(InfoEngine engine) {
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

  public IsochronesResponseInfo timestamp(Long timestamp) {
    this.timestamp = timestamp;
    return this;
  }

   /**
   * Unix timestamp of the precise request date.
   * @return timestamp
  **/
  @ApiModelProperty(example = "1493305098226", value = "Unix timestamp of the precise request date.")
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
    IsochronesResponseInfo isochronesResponseInfo = (IsochronesResponseInfo) o;
    return Objects.equals(this.service, isochronesResponseInfo.service) &&
        Objects.equals(this.query, isochronesResponseInfo.query) &&
        Objects.equals(this.attribution, isochronesResponseInfo.attribution) &&
        Objects.equals(this.engine, isochronesResponseInfo.engine) &&
        Objects.equals(this.timestamp, isochronesResponseInfo.timestamp);
  }

  @Override
  public int hashCode() {
    return Objects.hash(service, query, attribution, engine, timestamp);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IsochronesResponseInfo {\n");
    
    sb.append("    service: ").append(toIndentedString(service)).append("\n");
    sb.append("    query: ").append(toIndentedString(query)).append("\n");
    sb.append("    attribution: ").append(toIndentedString(attribution)).append("\n");
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

