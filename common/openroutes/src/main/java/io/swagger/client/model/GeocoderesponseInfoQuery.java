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
public class GeocoderesponseInfoQuery {
  @SerializedName("query")
  private String query = null;

  @SerializedName("location")
  private List<Double> location = null;

  @SerializedName("limit")
  private Long limit = 20l;

  public GeocoderesponseInfoQuery query(String query) {
    this.query = query;
    return this;
  }

   /**
   * Get query
   * @return query
  **/
  @ApiModelProperty(value = "")
  public String getQuery() {
    return query;
  }

  public void setQuery(String query) {
    this.query = query;
  }

  public GeocoderesponseInfoQuery location(List<Double> location) {
    this.location = location;
    return this;
  }

  public GeocoderesponseInfoQuery addLocationItem(Double locationItem) {
    if (this.location == null) {
      this.location = new ArrayList<Double>();
    }
    this.location.add(locationItem);
    return this;
  }

   /**
   * Get location
   * @return location
  **/
  @ApiModelProperty(example = "[13.239515,52.514679]", value = "")
  public List<Double> getLocation() {
    return location;
  }

  public void setLocation(List<Double> location) {
    this.location = location;
  }

  public GeocoderesponseInfoQuery limit(Long limit) {
    this.limit = limit;
    return this;
  }

   /**
   * Get limit
   * @return limit
  **/
  @ApiModelProperty(example = "20", value = "")
  public Long getLimit() {
    return limit;
  }

  public void setLimit(Long limit) {
    this.limit = limit;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GeocoderesponseInfoQuery geocoderesponseInfoQuery = (GeocoderesponseInfoQuery) o;
    return Objects.equals(this.query, geocoderesponseInfoQuery.query) &&
        Objects.equals(this.location, geocoderesponseInfoQuery.location) &&
        Objects.equals(this.limit, geocoderesponseInfoQuery.limit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(query, location, limit);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GeocoderesponseInfoQuery {\n");
    
    sb.append("    query: ").append(toIndentedString(query)).append("\n");
    sb.append("    location: ").append(toIndentedString(location)).append("\n");
    sb.append("    limit: ").append(toIndentedString(limit)).append("\n");
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

