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
 * IsochronesResponseProperties
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class IsochronesResponseProperties {
  @SerializedName("area")
  private Double area = null;

  @SerializedName("reachfactor")
  private Double reachfactor = null;

  @SerializedName("center")
  private List<Double> center = null;

  @SerializedName("group_index")
  private Long groupIndex = null;

  @SerializedName("value")
  private Long value = null;

  @SerializedName("contours")
  private List<List<Long>> contours = null;

  public IsochronesResponseProperties area(Double area) {
    this.area = area;
    return this;
  }

   /**
   * Area of the polygon in square meters (for attributes&#x3D;area).
   * @return area
  **/
  @ApiModelProperty(value = "Area of the polygon in square meters (for attributes=area).")
  public Double getArea() {
    return area;
  }

  public void setArea(Double area) {
    this.area = area;
  }

  public IsochronesResponseProperties reachfactor(Double reachfactor) {
    this.reachfactor = reachfactor;
    return this;
  }

   /**
   * Returns a reachability score between 0 and 1. As the maximum reachfactor would be achieved by travelling as the crow flies at maximum speed in a vacuum without obstacles, naturally it can never be 1. The availability of motorways however produces a higher score over normal roads. 
   * @return reachfactor
  **/
  @ApiModelProperty(value = "Returns a reachability score between 0 and 1. As the maximum reachfactor would be achieved by travelling as the crow flies at maximum speed in a vacuum without obstacles, naturally it can never be 1. The availability of motorways however produces a higher score over normal roads. ")
  public Double getReachfactor() {
    return reachfactor;
  }

  public void setReachfactor(Double reachfactor) {
    this.reachfactor = reachfactor;
  }

  public IsochronesResponseProperties center(List<Double> center) {
    this.center = center;
    return this;
  }

  public IsochronesResponseProperties addCenterItem(Double centerItem) {
    if (this.center == null) {
      this.center = new ArrayList<Double>();
    }
    this.center.add(centerItem);
    return this;
  }

   /**
   * The coordinates of the specific analysis location.
   * @return center
  **/
  @ApiModelProperty(value = "The coordinates of the specific analysis location.")
  public List<Double> getCenter() {
    return center;
  }

  public void setCenter(List<Double> center) {
    this.center = center;
  }

  public IsochronesResponseProperties groupIndex(Long groupIndex) {
    this.groupIndex = groupIndex;
    return this;
  }

   /**
   * Id of the isochrone based on the position in the &#x60;locations&#x60; query-parameter. Every location comprises its own group of polygons.
   * @return groupIndex
  **/
  @ApiModelProperty(value = "Id of the isochrone based on the position in the `locations` query-parameter. Every location comprises its own group of polygons.")
  public Long getGroupIndex() {
    return groupIndex;
  }

  public void setGroupIndex(Long groupIndex) {
    this.groupIndex = groupIndex;
  }

  public IsochronesResponseProperties value(Long value) {
    this.value = value;
    return this;
  }

   /**
   * The range value of this isochrone/equidistant in seconds/meters.
   * @return value
  **/
  @ApiModelProperty(value = "The range value of this isochrone/equidistant in seconds/meters.")
  public Long getValue() {
    return value;
  }

  public void setValue(Long value) {
    this.value = value;
  }

  public IsochronesResponseProperties contours(List<List<Long>> contours) {
    this.contours = contours;
    return this;
  }

  public IsochronesResponseProperties addContoursItem(List<Long> contoursItem) {
    if (this.contours == null) {
      this.contours = new ArrayList<List<Long>>();
    }
    this.contours.add(contoursItem);
    return this;
  }

   /**
   * For intersections&#x3D;true. Every intersection polygon comprises contours with an index array for each participating isochrone.
   * @return contours
  **/
  @ApiModelProperty(value = "For intersections=true. Every intersection polygon comprises contours with an index array for each participating isochrone.")
  public List<List<Long>> getContours() {
    return contours;
  }

  public void setContours(List<List<Long>> contours) {
    this.contours = contours;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IsochronesResponseProperties isochronesResponseProperties = (IsochronesResponseProperties) o;
    return Objects.equals(this.area, isochronesResponseProperties.area) &&
        Objects.equals(this.reachfactor, isochronesResponseProperties.reachfactor) &&
        Objects.equals(this.center, isochronesResponseProperties.center) &&
        Objects.equals(this.groupIndex, isochronesResponseProperties.groupIndex) &&
        Objects.equals(this.value, isochronesResponseProperties.value) &&
        Objects.equals(this.contours, isochronesResponseProperties.contours);
  }

  @Override
  public int hashCode() {
    return Objects.hash(area, reachfactor, center, groupIndex, value, contours);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IsochronesResponseProperties {\n");
    
    sb.append("    area: ").append(toIndentedString(area)).append("\n");
    sb.append("    reachfactor: ").append(toIndentedString(reachfactor)).append("\n");
    sb.append("    center: ").append(toIndentedString(center)).append("\n");
    sb.append("    groupIndex: ").append(toIndentedString(groupIndex)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    contours: ").append(toIndentedString(contours)).append("\n");
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

