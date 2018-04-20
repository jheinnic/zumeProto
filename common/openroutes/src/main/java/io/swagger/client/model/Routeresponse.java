package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.RouteresponseInfo;
import io.swagger.client.model.RouteresponseRoutes;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Routeresponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class Routeresponse {
  @SerializedName("routes")
  private List<RouteresponseRoutes> routes = null;

  @SerializedName("info")
  private RouteresponseInfo info = null;

  public Routeresponse routes(List<RouteresponseRoutes> routes) {
    this.routes = routes;
    return this;
  }

  public Routeresponse addRoutesItem(RouteresponseRoutes routesItem) {
    if (this.routes == null) {
      this.routes = new ArrayList<RouteresponseRoutes>();
    }
    this.routes.add(routesItem);
    return this;
  }

   /**
   * Get routes
   * @return routes
  **/
  @ApiModelProperty(value = "")
  public List<RouteresponseRoutes> getRoutes() {
    return routes;
  }

  public void setRoutes(List<RouteresponseRoutes> routes) {
    this.routes = routes;
  }

  public Routeresponse info(RouteresponseInfo info) {
    this.info = info;
    return this;
  }

   /**
   * Get info
   * @return info
  **/
  @ApiModelProperty(value = "")
  public RouteresponseInfo getInfo() {
    return info;
  }

  public void setInfo(RouteresponseInfo info) {
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
    Routeresponse routeresponse = (Routeresponse) o;
    return Objects.equals(this.routes, routeresponse.routes) &&
        Objects.equals(this.info, routeresponse.info);
  }

  @Override
  public int hashCode() {
    return Objects.hash(routes, info);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Routeresponse {\n");
    
    sb.append("    routes: ").append(toIndentedString(routes)).append("\n");
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

