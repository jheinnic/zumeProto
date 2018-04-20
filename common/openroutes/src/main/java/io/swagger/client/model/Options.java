package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.AvoidPolygons;
import io.swagger.client.model.ProfileParams;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Options
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class Options {
  @SerializedName("maximum_speed")
  private Long maximumSpeed = null;

  /**
   * Gets or Sets avoidFeatures
   */
  @JsonAdapter(AvoidFeaturesEnum.Adapter.class)
  public enum AvoidFeaturesEnum {
    HIGHWAYS("highways"),
    
    TOLLWAYS("tollways"),
    
    FERRIES("ferries"),
    
    TUNNELS("tunnels"),
    
    PAVEDROADS("pavedroads"),
    
    UNPAVEDROADS("unpavedroads"),
    
    TRACKS("tracks"),
    
    FORDS("fords"),
    
    STEPS("steps"),
    
    HILLS("hills");

    private String value;

    AvoidFeaturesEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static AvoidFeaturesEnum fromValue(String text) {
      for (AvoidFeaturesEnum b : AvoidFeaturesEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<AvoidFeaturesEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final AvoidFeaturesEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public AvoidFeaturesEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return AvoidFeaturesEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("avoid_features")
  private List<AvoidFeaturesEnum> avoidFeatures = null;

  /**
   * Parameter for the driving-hgv Profile
   */
  @JsonAdapter(VehicleTypeEnum.Adapter.class)
  public enum VehicleTypeEnum {
    HGV("hgv"),
    
    BUS("bus"),
    
    AGRICULTURAL("agricultural"),
    
    FORESTRY("forestry"),
    
    GOODS("goods"),
    
    DELIVERY("delivery");

    private String value;

    VehicleTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static VehicleTypeEnum fromValue(String text) {
      for (VehicleTypeEnum b : VehicleTypeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<VehicleTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final VehicleTypeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public VehicleTypeEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return VehicleTypeEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("vehicle_type")
  private VehicleTypeEnum vehicleType = VehicleTypeEnum.HGV;

  @SerializedName("profile_params")
  private ProfileParams profileParams = null;

  @SerializedName("avoid_polygons")
  private AvoidPolygons avoidPolygons = null;

  public Options maximumSpeed(Long maximumSpeed) {
    this.maximumSpeed = maximumSpeed;
    return this;
  }

   /**
   * Get maximumSpeed
   * @return maximumSpeed
  **/
  @ApiModelProperty(value = "")
  public Long getMaximumSpeed() {
    return maximumSpeed;
  }

  public void setMaximumSpeed(Long maximumSpeed) {
    this.maximumSpeed = maximumSpeed;
  }

  public Options avoidFeatures(List<AvoidFeaturesEnum> avoidFeatures) {
    this.avoidFeatures = avoidFeatures;
    return this;
  }

  public Options addAvoidFeaturesItem(AvoidFeaturesEnum avoidFeaturesItem) {
    if (this.avoidFeatures == null) {
      this.avoidFeatures = new ArrayList<AvoidFeaturesEnum>();
    }
    this.avoidFeatures.add(avoidFeaturesItem);
    return this;
  }

   /**
   * Get avoidFeatures
   * @return avoidFeatures
  **/
  @ApiModelProperty(value = "")
  public List<AvoidFeaturesEnum> getAvoidFeatures() {
    return avoidFeatures;
  }

  public void setAvoidFeatures(List<AvoidFeaturesEnum> avoidFeatures) {
    this.avoidFeatures = avoidFeatures;
  }

  public Options vehicleType(VehicleTypeEnum vehicleType) {
    this.vehicleType = vehicleType;
    return this;
  }

   /**
   * Parameter for the driving-hgv Profile
   * @return vehicleType
  **/
  @ApiModelProperty(value = "Parameter for the driving-hgv Profile")
  public VehicleTypeEnum getVehicleType() {
    return vehicleType;
  }

  public void setVehicleType(VehicleTypeEnum vehicleType) {
    this.vehicleType = vehicleType;
  }

  public Options profileParams(ProfileParams profileParams) {
    this.profileParams = profileParams;
    return this;
  }

   /**
   * Get profileParams
   * @return profileParams
  **/
  @ApiModelProperty(value = "")
  public ProfileParams getProfileParams() {
    return profileParams;
  }

  public void setProfileParams(ProfileParams profileParams) {
    this.profileParams = profileParams;
  }

  public Options avoidPolygons(AvoidPolygons avoidPolygons) {
    this.avoidPolygons = avoidPolygons;
    return this;
  }

   /**
   * Get avoidPolygons
   * @return avoidPolygons
  **/
  @ApiModelProperty(value = "")
  public AvoidPolygons getAvoidPolygons() {
    return avoidPolygons;
  }

  public void setAvoidPolygons(AvoidPolygons avoidPolygons) {
    this.avoidPolygons = avoidPolygons;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Options options = (Options) o;
    return Objects.equals(this.maximumSpeed, options.maximumSpeed) &&
        Objects.equals(this.avoidFeatures, options.avoidFeatures) &&
        Objects.equals(this.vehicleType, options.vehicleType) &&
        Objects.equals(this.profileParams, options.profileParams) &&
        Objects.equals(this.avoidPolygons, options.avoidPolygons);
  }

  @Override
  public int hashCode() {
    return Objects.hash(maximumSpeed, avoidFeatures, vehicleType, profileParams, avoidPolygons);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Options {\n");
    
    sb.append("    maximumSpeed: ").append(toIndentedString(maximumSpeed)).append("\n");
    sb.append("    avoidFeatures: ").append(toIndentedString(avoidFeatures)).append("\n");
    sb.append("    vehicleType: ").append(toIndentedString(vehicleType)).append("\n");
    sb.append("    profileParams: ").append(toIndentedString(profileParams)).append("\n");
    sb.append("    avoidPolygons: ").append(toIndentedString(avoidPolygons)).append("\n");
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

