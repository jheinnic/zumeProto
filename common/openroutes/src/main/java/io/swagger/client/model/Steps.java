package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.Maneuver;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Steps
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class Steps {
  @SerializedName("distance")
  private Double distance = null;

  @SerializedName("duration")
  private Double duration = null;

  @SerializedName("type")
  private Long type = null;

  @SerializedName("instruction")
  private String instruction = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("maneuver")
  private Maneuver maneuver = null;

  @SerializedName("way_points")
  private List<Long> wayPoints = null;

  @SerializedName("exit_number")
  private Long exitNumber = null;

  @SerializedName("exit_bearings")
  private List<Long> exitBearings = null;

  public Steps distance(Double distance) {
    this.distance = distance;
    return this;
  }

   /**
   * The distance for the step in meters.
   * @return distance
  **/
  @ApiModelProperty(value = "The distance for the step in meters.")
  public Double getDistance() {
    return distance;
  }

  public void setDistance(Double distance) {
    this.distance = distance;
  }

  public Steps duration(Double duration) {
    this.duration = duration;
    return this;
  }

   /**
   * The duration for the step in seconds.
   * @return duration
  **/
  @ApiModelProperty(value = "The duration for the step in seconds.")
  public Double getDuration() {
    return duration;
  }

  public void setDuration(Double duration) {
    this.duration = duration;
  }

  public Steps type(Long type) {
    this.type = type;
    return this;
  }

   /**
   * The [instruction](https://github.com/GIScience/openrouteservice-docs#instruction-types) action for symbolisation purposes.
   * @return type
  **/
  @ApiModelProperty(value = "The [instruction](https://github.com/GIScience/openrouteservice-docs#instruction-types) action for symbolisation purposes.")
  public Long getType() {
    return type;
  }

  public void setType(Long type) {
    this.type = type;
  }

  public Steps instruction(String instruction) {
    this.instruction = instruction;
    return this;
  }

   /**
   * The routing instruction text for the step.
   * @return instruction
  **/
  @ApiModelProperty(value = "The routing instruction text for the step.")
  public String getInstruction() {
    return instruction;
  }

  public void setInstruction(String instruction) {
    this.instruction = instruction;
  }

  public Steps name(String name) {
    this.name = name;
    return this;
  }

   /**
   * The name of the next street.
   * @return name
  **/
  @ApiModelProperty(value = "The name of the next street.")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Steps maneuver(Maneuver maneuver) {
    this.maneuver = maneuver;
    return this;
  }

   /**
   * Get maneuver
   * @return maneuver
  **/
  @ApiModelProperty(value = "")
  public Maneuver getManeuver() {
    return maneuver;
  }

  public void setManeuver(Maneuver maneuver) {
    this.maneuver = maneuver;
  }

  public Steps wayPoints(List<Long> wayPoints) {
    this.wayPoints = wayPoints;
    return this;
  }

  public Steps addWayPointsItem(Long wayPointsItem) {
    if (this.wayPoints == null) {
      this.wayPoints = new ArrayList<Long>();
    }
    this.wayPoints.add(wayPointsItem);
    return this;
  }

   /**
   * List containing the indices of the steps start- and endpoint corresponding to the *geometry*.
   * @return wayPoints
  **/
  @ApiModelProperty(value = "List containing the indices of the steps start- and endpoint corresponding to the *geometry*.")
  public List<Long> getWayPoints() {
    return wayPoints;
  }

  public void setWayPoints(List<Long> wayPoints) {
    this.wayPoints = wayPoints;
  }

  public Steps exitNumber(Long exitNumber) {
    this.exitNumber = exitNumber;
    return this;
  }

   /**
   * Only for roundabouts. Contains the number of the exit to take.
   * @return exitNumber
  **/
  @ApiModelProperty(value = "Only for roundabouts. Contains the number of the exit to take.")
  public Long getExitNumber() {
    return exitNumber;
  }

  public void setExitNumber(Long exitNumber) {
    this.exitNumber = exitNumber;
  }

  public Steps exitBearings(List<Long> exitBearings) {
    this.exitBearings = exitBearings;
    return this;
  }

  public Steps addExitBearingsItem(Long exitBearingsItem) {
    if (this.exitBearings == null) {
      this.exitBearings = new ArrayList<Long>();
    }
    this.exitBearings.add(exitBearingsItem);
    return this;
  }

   /**
   * Contains the bearing of the entrance and all passed exits in a roundabout for &#x60;roundabout_exits&#x3D;true&#x60;.
   * @return exitBearings
  **/
  @ApiModelProperty(value = "Contains the bearing of the entrance and all passed exits in a roundabout for `roundabout_exits=true`.")
  public List<Long> getExitBearings() {
    return exitBearings;
  }

  public void setExitBearings(List<Long> exitBearings) {
    this.exitBearings = exitBearings;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Steps steps = (Steps) o;
    return Objects.equals(this.distance, steps.distance) &&
        Objects.equals(this.duration, steps.duration) &&
        Objects.equals(this.type, steps.type) &&
        Objects.equals(this.instruction, steps.instruction) &&
        Objects.equals(this.name, steps.name) &&
        Objects.equals(this.maneuver, steps.maneuver) &&
        Objects.equals(this.wayPoints, steps.wayPoints) &&
        Objects.equals(this.exitNumber, steps.exitNumber) &&
        Objects.equals(this.exitBearings, steps.exitBearings);
  }

  @Override
  public int hashCode() {
    return Objects.hash(distance, duration, type, instruction, name, maneuver, wayPoints, exitNumber, exitBearings);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Steps {\n");
    
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
    sb.append("    duration: ").append(toIndentedString(duration)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    instruction: ").append(toIndentedString(instruction)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    maneuver: ").append(toIndentedString(maneuver)).append("\n");
    sb.append("    wayPoints: ").append(toIndentedString(wayPoints)).append("\n");
    sb.append("    exitNumber: ").append(toIndentedString(exitNumber)).append("\n");
    sb.append("    exitBearings: ").append(toIndentedString(exitBearings)).append("\n");
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

