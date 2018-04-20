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

/**
 * SummaryObject
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class SummaryObject {
  @SerializedName("value")
  private Long value = null;

  @SerializedName("distance")
  private Long distance = null;

  @SerializedName("amount")
  private Long amount = null;

  public SummaryObject value(Long value) {
    this.value = value;
    return this;
  }

   /**
   * [Value](https://github.com/GIScience/openrouteservice-docs#routing-response) of a info category.
   * @return value
  **/
  @ApiModelProperty(value = "[Value](https://github.com/GIScience/openrouteservice-docs#routing-response) of a info category.")
  public Long getValue() {
    return value;
  }

  public void setValue(Long value) {
    this.value = value;
  }

  public SummaryObject distance(Long distance) {
    this.distance = distance;
    return this;
  }

   /**
   * Cumulative distance of this value.
   * @return distance
  **/
  @ApiModelProperty(value = "Cumulative distance of this value.")
  public Long getDistance() {
    return distance;
  }

  public void setDistance(Long distance) {
    this.distance = distance;
  }

  public SummaryObject amount(Long amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Category percentage of the entire route.
   * @return amount
  **/
  @ApiModelProperty(value = "Category percentage of the entire route.")
  public Long getAmount() {
    return amount;
  }

  public void setAmount(Long amount) {
    this.amount = amount;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SummaryObject summaryObject = (SummaryObject) o;
    return Objects.equals(this.value, summaryObject.value) &&
        Objects.equals(this.distance, summaryObject.distance) &&
        Objects.equals(this.amount, summaryObject.amount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value, distance, amount);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SummaryObject {\n");
    
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
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

