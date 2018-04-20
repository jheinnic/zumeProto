package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.Filter;
import java.io.IOException;

/**
 * **You have to specify at least one of** &#x60;bbox&#x60; **and** &#x60;geometry&#x60; ! 
 */
@ApiModel(description = "**You have to specify at least one of** `bbox` **and** `geometry` ! ")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class LocationsBody {
  @SerializedName("filter")
  private Filter filter = null;

  /**
   * Gets or Sets details
   */
  @JsonAdapter(DetailsEnum.Adapter.class)
  public enum DetailsEnum {
    ADDRESS("address"),
    
    CONTACT("contact"),
    
    ATTRIBUTES("attributes");

    private String value;

    DetailsEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static DetailsEnum fromValue(String text) {
      for (DetailsEnum b : DetailsEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<DetailsEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final DetailsEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public DetailsEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return DetailsEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("details")
  private DetailsEnum details = null;

  @SerializedName("limit")
  private Long limit = null;

  @SerializedName("radius")
  private Long radius = null;

  /**
   * Gets or Sets sortby
   */
  @JsonAdapter(SortbyEnum.Adapter.class)
  public enum SortbyEnum {
    CATEGORY("category"),
    
    DISTANCE("distance");

    private String value;

    SortbyEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static SortbyEnum fromValue(String text) {
      for (SortbyEnum b : SortbyEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<SortbyEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final SortbyEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public SortbyEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return SortbyEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("sortby")
  private SortbyEnum sortby = null;

  @SerializedName("bbox")
  private String bbox = null;

  @SerializedName("geometry")
  private String geometry = null;

  public LocationsBody filter(Filter filter) {
    this.filter = filter;
    return this;
  }

   /**
   * Get filter
   * @return filter
  **/
  @ApiModelProperty(value = "")
  public Filter getFilter() {
    return filter;
  }

  public void setFilter(Filter filter) {
    this.filter = filter;
  }

  public LocationsBody details(DetailsEnum details) {
    this.details = details;
    return this;
  }

   /**
   * Get details
   * @return details
  **/
  @ApiModelProperty(example = "address|contact|attributes", value = "")
  public DetailsEnum getDetails() {
    return details;
  }

  public void setDetails(DetailsEnum details) {
    this.details = details;
  }

  public LocationsBody limit(Long limit) {
    this.limit = limit;
    return this;
  }

   /**
   * Get limit
   * @return limit
  **/
  @ApiModelProperty(example = "1000", value = "")
  public Long getLimit() {
    return limit;
  }

  public void setLimit(Long limit) {
    this.limit = limit;
  }

  public LocationsBody radius(Long radius) {
    this.radius = radius;
    return this;
  }

   /**
   * Get radius
   * @return radius
  **/
  @ApiModelProperty(example = "500", value = "")
  public Long getRadius() {
    return radius;
  }

  public void setRadius(Long radius) {
    this.radius = radius;
  }

  public LocationsBody sortby(SortbyEnum sortby) {
    this.sortby = sortby;
    return this;
  }

   /**
   * Get sortby
   * @return sortby
  **/
  @ApiModelProperty(example = "category", value = "")
  public SortbyEnum getSortby() {
    return sortby;
  }

  public void setSortby(SortbyEnum sortby) {
    this.sortby = sortby;
  }

  public LocationsBody bbox(String bbox) {
    this.bbox = bbox;
    return this;
  }

   /**
   * The pattern for this bbox string is &#x60;\&quot;minlon,minlat,maxlon,maxlat\&quot;&#x60;
   * @return bbox
  **/
  @ApiModelProperty(example = "8.165339,47.265966,8.179995,49.214088", value = "The pattern for this bbox string is `\"minlon,minlat,maxlon,maxlat\"`")
  public String getBbox() {
    return bbox;
  }

  public void setBbox(String bbox) {
    this.bbox = bbox;
  }

  public LocationsBody geometry(String geometry) {
    this.geometry = geometry;
    return this;
  }

   /**
   * Get geometry
   * @return geometry
  **/
  @ApiModelProperty(value = "")
  public String getGeometry() {
    return geometry;
  }

  public void setGeometry(String geometry) {
    this.geometry = geometry;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LocationsBody locationsBody = (LocationsBody) o;
    return Objects.equals(this.filter, locationsBody.filter) &&
        Objects.equals(this.details, locationsBody.details) &&
        Objects.equals(this.limit, locationsBody.limit) &&
        Objects.equals(this.radius, locationsBody.radius) &&
        Objects.equals(this.sortby, locationsBody.sortby) &&
        Objects.equals(this.bbox, locationsBody.bbox) &&
        Objects.equals(this.geometry, locationsBody.geometry);
  }

  @Override
  public int hashCode() {
    return Objects.hash(filter, details, limit, radius, sortby, bbox, geometry);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LocationsBody {\n");
    
    sb.append("    filter: ").append(toIndentedString(filter)).append("\n");
    sb.append("    details: ").append(toIndentedString(details)).append("\n");
    sb.append("    limit: ").append(toIndentedString(limit)).append("\n");
    sb.append("    radius: ").append(toIndentedString(radius)).append("\n");
    sb.append("    sortby: ").append(toIndentedString(sortby)).append("\n");
    sb.append("    bbox: ").append(toIndentedString(bbox)).append("\n");
    sb.append("    geometry: ").append(toIndentedString(geometry)).append("\n");
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

