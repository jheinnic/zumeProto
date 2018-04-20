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
 * MatrixBody
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class MatrixBody {
  /**
   * Specifies the route profile.
   */
  @JsonAdapter(ProfileEnum.Adapter.class)
  public enum ProfileEnum {
    DRIVING_CAR("driving-car"),
    
    DRIVING_HGV("driving-hgv"),
    
    CYCLING_REGULAR("cycling-regular"),
    
    CYCLING_ROAD("cycling-road"),
    
    CYCLING_SAFE("cycling-safe"),
    
    CYCLING_MOUNTAIN("cycling-mountain"),
    
    CYCLING_TOUR("cycling-tour"),
    
    CYCLING_ELECTRIC("cycling-electric"),
    
    FOOT_WALKING("foot-walking"),
    
    FOOT_HIKING("foot-hiking"),
    
    WHEELCHAIR("wheelchair");

    private String value;

    ProfileEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ProfileEnum fromValue(String text) {
      for (ProfileEnum b : ProfileEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<ProfileEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ProfileEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ProfileEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return ProfileEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("profile")
  private ProfileEnum profile = ProfileEnum.DRIVING_CAR;

  @SerializedName("locations")
  private List<List<Double>> locations = null;

  @SerializedName("sources")
  private List<String> sources = null;

  /**
   * Specifies a list of returned metrics separated with a pipe character (|). * &#x60;distance&#x60; - Returns distance matrix for specified points in defined &#x60;units&#x60;. * &#x60;duration&#x60; - Returns duration matrix for specified points in defined &#x60;units&#x60;. * &#x60;weight&#x60;   - Returns weight matrix for specified points in defined &#x60;units&#x60;. 
   */
  @JsonAdapter(MetricsEnum.Adapter.class)
  public enum MetricsEnum {
    DISTANCE("distance"),
    
    DURATION("duration"),
    
    WEIGHT("weight");

    private String value;

    MetricsEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static MetricsEnum fromValue(String text) {
      for (MetricsEnum b : MetricsEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<MetricsEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final MetricsEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public MetricsEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return MetricsEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("metrics")
  private MetricsEnum metrics = MetricsEnum.DURATION;

  @SerializedName("resolve_locations")
  private Boolean resolveLocations = false;

  /**
   * Specifies the unit of measurement for distances. Default is &#x60;m&#x60;
   */
  @JsonAdapter(UnitsEnum.Adapter.class)
  public enum UnitsEnum {
    M("m"),
    
    KM("km"),
    
    MI("mi");

    private String value;

    UnitsEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static UnitsEnum fromValue(String text) {
      for (UnitsEnum b : UnitsEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<UnitsEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final UnitsEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public UnitsEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return UnitsEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("units")
  private UnitsEnum units = UnitsEnum.M;

  @SerializedName("optimized")
  private Boolean optimized = true;

  public MatrixBody profile(ProfileEnum profile) {
    this.profile = profile;
    return this;
  }

   /**
   * Specifies the route profile.
   * @return profile
  **/
  @ApiModelProperty(value = "Specifies the route profile.")
  public ProfileEnum getProfile() {
    return profile;
  }

  public void setProfile(ProfileEnum profile) {
    this.profile = profile;
  }

  public MatrixBody locations(List<List<Double>> locations) {
    this.locations = locations;
    return this;
  }

  public MatrixBody addLocationsItem(List<Double> locationsItem) {
    if (this.locations == null) {
      this.locations = new ArrayList<List<Double>>();
    }
    this.locations.add(locationsItem);
    return this;
  }

   /**
   * List of comma separated lists of &#x60;longitude,latitude&#x60; coordinates (note, without quotes around the coordinates, this is a displaying error of swagger).  example : &#x60;\&quot;locations\&quot;:[[9.70093,48.477473],[9.207916,49.153868],[37.573242,55.801281],[115.663757,38.106467]]&#x60; 
   * @return locations
  **/
  @ApiModelProperty(example = "[[\"9.9700934,48.477473\"],[\"9.207916,49.153868\"],[\"37.573242,55.801281\"],[\"115.663757,38.106467\"]]", value = "List of comma separated lists of `longitude,latitude` coordinates (note, without quotes around the coordinates, this is a displaying error of swagger).  example : `\"locations\":[[9.70093,48.477473],[9.207916,49.153868],[37.573242,55.801281],[115.663757,38.106467]]` ")
  public List<List<Double>> getLocations() {
    return locations;
  }

  public void setLocations(List<List<Double>> locations) {
    this.locations = locations;
  }

  public MatrixBody sources(List<String> sources) {
    this.sources = sources;
    return this;
  }

  public MatrixBody addSourcesItem(String sourcesItem) {
    if (this.sources == null) {
      this.sources = new ArrayList<String>();
    }
    this.sources.add(sourcesItem);
    return this;
  }

   /**
   * A comma separated list of indices that refers to the list of locations (starting with &#x60;0&#x60;). &#x60;{index_1},{index_2}[,{index_N} ...]&#x60; or &#x60;all&#x60; (default).  Example: &#x60;0,3&#x60; for the first and fourth Location. 
   * @return sources
  **/
  @ApiModelProperty(example = "\"2,3\"", value = "A comma separated list of indices that refers to the list of locations (starting with `0`). `{index_1},{index_2}[,{index_N} ...]` or `all` (default).  Example: `0,3` for the first and fourth Location. ")
  public List<String> getSources() {
    return sources;
  }

  public void setSources(List<String> sources) {
    this.sources = sources;
  }

  public MatrixBody metrics(MetricsEnum metrics) {
    this.metrics = metrics;
    return this;
  }

   /**
   * Specifies a list of returned metrics separated with a pipe character (|). * &#x60;distance&#x60; - Returns distance matrix for specified points in defined &#x60;units&#x60;. * &#x60;duration&#x60; - Returns duration matrix for specified points in defined &#x60;units&#x60;. * &#x60;weight&#x60;   - Returns weight matrix for specified points in defined &#x60;units&#x60;. 
   * @return metrics
  **/
  @ApiModelProperty(value = "Specifies a list of returned metrics separated with a pipe character (|). * `distance` - Returns distance matrix for specified points in defined `units`. * `duration` - Returns duration matrix for specified points in defined `units`. * `weight`   - Returns weight matrix for specified points in defined `units`. ")
  public MetricsEnum getMetrics() {
    return metrics;
  }

  public void setMetrics(MetricsEnum metrics) {
    this.metrics = metrics;
  }

  public MatrixBody resolveLocations(Boolean resolveLocations) {
    this.resolveLocations = resolveLocations;
    return this;
  }

   /**
   * Specifies whether given locations are resolved or not. If the parameter value set to &#x60;true&#x60;, every element in destinations and sources will contain &#x60;name&#x60; element that identifies the name of the closest street. Default is &#x60;false&#x60;
   * @return resolveLocations
  **/
  @ApiModelProperty(value = "Specifies whether given locations are resolved or not. If the parameter value set to `true`, every element in destinations and sources will contain `name` element that identifies the name of the closest street. Default is `false`")
  public Boolean isResolveLocations() {
    return resolveLocations;
  }

  public void setResolveLocations(Boolean resolveLocations) {
    this.resolveLocations = resolveLocations;
  }

  public MatrixBody units(UnitsEnum units) {
    this.units = units;
    return this;
  }

   /**
   * Specifies the unit of measurement for distances. Default is &#x60;m&#x60;
   * @return units
  **/
  @ApiModelProperty(value = "Specifies the unit of measurement for distances. Default is `m`")
  public UnitsEnum getUnits() {
    return units;
  }

  public void setUnits(UnitsEnum units) {
    this.units = units;
  }

  public MatrixBody optimized(Boolean optimized) {
    this.optimized = optimized;
    return this;
  }

   /**
   * Specifies whether Dijkstra algorithm (&#x60;false&#x60;) or any available technique to speed up shortest-path routing (&#x60;true&#x60;) is used. 
   * @return optimized
  **/
  @ApiModelProperty(value = "Specifies whether Dijkstra algorithm (`false`) or any available technique to speed up shortest-path routing (`true`) is used. ")
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
    MatrixBody matrixBody = (MatrixBody) o;
    return Objects.equals(this.profile, matrixBody.profile) &&
        Objects.equals(this.locations, matrixBody.locations) &&
        Objects.equals(this.sources, matrixBody.sources) &&
        Objects.equals(this.metrics, matrixBody.metrics) &&
        Objects.equals(this.resolveLocations, matrixBody.resolveLocations) &&
        Objects.equals(this.units, matrixBody.units) &&
        Objects.equals(this.optimized, matrixBody.optimized);
  }

  @Override
  public int hashCode() {
    return Objects.hash(profile, locations, sources, metrics, resolveLocations, units, optimized);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MatrixBody {\n");
    
    sb.append("    profile: ").append(toIndentedString(profile)).append("\n");
    sb.append("    locations: ").append(toIndentedString(locations)).append("\n");
    sb.append("    sources: ").append(toIndentedString(sources)).append("\n");
    sb.append("    metrics: ").append(toIndentedString(metrics)).append("\n");
    sb.append("    resolveLocations: ").append(toIndentedString(resolveLocations)).append("\n");
    sb.append("    units: ").append(toIndentedString(units)).append("\n");
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

