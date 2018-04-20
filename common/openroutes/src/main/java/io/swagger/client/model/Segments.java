package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.Steps;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Segments
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class Segments {
  @SerializedName("distance")
  private Double distance = null;

  @SerializedName("duration")
  private Double duration = null;

  @SerializedName("ascent")
  private Double ascent = null;

  @SerializedName("descent")
  private Double descent = null;

  @SerializedName("detour_factor")
  private Double detourFactor = null;

  @SerializedName("percentage")
  private Double percentage = null;

  @SerializedName("avgspeed")
  private Double avgspeed = null;

  @SerializedName("steps")
  private List<Steps> steps = null;

  public Segments distance(Double distance) {
    this.distance = distance;
    return this;
  }

   /**
   * Contains the distance of the segment in specified units.
   * @return distance
  **/
  @ApiModelProperty(example = "5757.4", value = "Contains the distance of the segment in specified units.")
  public Double getDistance() {
    return distance;
  }

  public void setDistance(Double distance) {
    this.distance = distance;
  }

  public Segments duration(Double duration) {
    this.duration = duration;
    return this;
  }

   /**
   * Contains the duration of the segment in seconds.
   * @return duration
  **/
  @ApiModelProperty(example = "821.0", value = "Contains the duration of the segment in seconds.")
  public Double getDuration() {
    return duration;
  }

  public void setDuration(Double duration) {
    this.duration = duration;
  }

  public Segments ascent(Double ascent) {
    this.ascent = ascent;
    return this;
  }

   /**
   * Contains ascent of this segment in meters for &#x60;elevation&#x3D;true&#x60;.
   * @return ascent
  **/
  @ApiModelProperty(value = "Contains ascent of this segment in meters for `elevation=true`.")
  public Double getAscent() {
    return ascent;
  }

  public void setAscent(Double ascent) {
    this.ascent = ascent;
  }

  public Segments descent(Double descent) {
    this.descent = descent;
    return this;
  }

   /**
   * Contains descent of this segment in meters for &#x60;elevation&#x3D;true&#x60;.
   * @return descent
  **/
  @ApiModelProperty(value = "Contains descent of this segment in meters for `elevation=true`.")
  public Double getDescent() {
    return descent;
  }

  public void setDescent(Double descent) {
    this.descent = descent;
  }

  public Segments detourFactor(Double detourFactor) {
    this.detourFactor = detourFactor;
    return this;
  }

   /**
   * Contains the deviation compared to a straight line that would have the factor &#x60;1&#x60;. Double the Distance would be a &#x60;2&#x60;.
   * @return detourFactor
  **/
  @ApiModelProperty(value = "Contains the deviation compared to a straight line that would have the factor `1`. Double the Distance would be a `2`.")
  public Double getDetourFactor() {
    return detourFactor;
  }

  public void setDetourFactor(Double detourFactor) {
    this.detourFactor = detourFactor;
  }

  public Segments percentage(Double percentage) {
    this.percentage = percentage;
    return this;
  }

   /**
   * Contains the proportion of the route in percent.
   * @return percentage
  **/
  @ApiModelProperty(value = "Contains the proportion of the route in percent.")
  public Double getPercentage() {
    return percentage;
  }

  public void setPercentage(Double percentage) {
    this.percentage = percentage;
  }

  public Segments avgspeed(Double avgspeed) {
    this.avgspeed = avgspeed;
    return this;
  }

   /**
   * Contains the average speed of this segment in km/h.
   * @return avgspeed
  **/
  @ApiModelProperty(value = "Contains the average speed of this segment in km/h.")
  public Double getAvgspeed() {
    return avgspeed;
  }

  public void setAvgspeed(Double avgspeed) {
    this.avgspeed = avgspeed;
  }

  public Segments steps(List<Steps> steps) {
    this.steps = steps;
    return this;
  }

  public Segments addStepsItem(Steps stepsItem) {
    if (this.steps == null) {
      this.steps = new ArrayList<Steps>();
    }
    this.steps.add(stepsItem);
    return this;
  }

   /**
   * List containing the specific steps the segment consists of.
   * @return steps
  **/
  @ApiModelProperty(value = "List containing the specific steps the segment consists of.")
  public List<Steps> getSteps() {
    return steps;
  }

  public void setSteps(List<Steps> steps) {
    this.steps = steps;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Segments segments = (Segments) o;
    return Objects.equals(this.distance, segments.distance) &&
        Objects.equals(this.duration, segments.duration) &&
        Objects.equals(this.ascent, segments.ascent) &&
        Objects.equals(this.descent, segments.descent) &&
        Objects.equals(this.detourFactor, segments.detourFactor) &&
        Objects.equals(this.percentage, segments.percentage) &&
        Objects.equals(this.avgspeed, segments.avgspeed) &&
        Objects.equals(this.steps, segments.steps);
  }

  @Override
  public int hashCode() {
    return Objects.hash(distance, duration, ascent, descent, detourFactor, percentage, avgspeed, steps);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Segments {\n");
    
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
    sb.append("    duration: ").append(toIndentedString(duration)).append("\n");
    sb.append("    ascent: ").append(toIndentedString(ascent)).append("\n");
    sb.append("    descent: ").append(toIndentedString(descent)).append("\n");
    sb.append("    detourFactor: ").append(toIndentedString(detourFactor)).append("\n");
    sb.append("    percentage: ").append(toIndentedString(percentage)).append("\n");
    sb.append("    avgspeed: ").append(toIndentedString(avgspeed)).append("\n");
    sb.append("    steps: ").append(toIndentedString(steps)).append("\n");
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

