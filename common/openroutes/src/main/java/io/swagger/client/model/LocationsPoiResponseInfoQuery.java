package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.LocationsPoiResponseInfoQueryFilter;
import java.io.IOException;

/**
 * Summarizes your query settings.
 */
@ApiModel(description = "Summarizes your query settings.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class LocationsPoiResponseInfoQuery {
  @SerializedName("filter")
  private LocationsPoiResponseInfoQueryFilter filter = null;

  @SerializedName("radius")
  private Long radius = null;

  @SerializedName("limit")
  private Long limit = null;

  public LocationsPoiResponseInfoQuery filter(LocationsPoiResponseInfoQueryFilter filter) {
    this.filter = filter;
    return this;
  }

   /**
   * Get filter
   * @return filter
  **/
  @ApiModelProperty(value = "")
  public LocationsPoiResponseInfoQueryFilter getFilter() {
    return filter;
  }

  public void setFilter(LocationsPoiResponseInfoQueryFilter filter) {
    this.filter = filter;
  }

  public LocationsPoiResponseInfoQuery radius(Long radius) {
    this.radius = radius;
    return this;
  }

   /**
   * Get radius
   * @return radius
  **/
  @ApiModelProperty(value = "")
  public Long getRadius() {
    return radius;
  }

  public void setRadius(Long radius) {
    this.radius = radius;
  }

  public LocationsPoiResponseInfoQuery limit(Long limit) {
    this.limit = limit;
    return this;
  }

   /**
   * Get limit
   * @return limit
  **/
  @ApiModelProperty(value = "")
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
    LocationsPoiResponseInfoQuery locationsPoiResponseInfoQuery = (LocationsPoiResponseInfoQuery) o;
    return Objects.equals(this.filter, locationsPoiResponseInfoQuery.filter) &&
        Objects.equals(this.radius, locationsPoiResponseInfoQuery.radius) &&
        Objects.equals(this.limit, locationsPoiResponseInfoQuery.limit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(filter, radius, limit);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LocationsPoiResponseInfoQuery {\n");
    
    sb.append("    filter: ").append(toIndentedString(filter)).append("\n");
    sb.append("    radius: ").append(toIndentedString(radius)).append("\n");
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

