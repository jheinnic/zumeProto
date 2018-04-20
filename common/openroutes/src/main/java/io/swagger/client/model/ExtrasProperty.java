package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.SummaryObject;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * ExtrasProperty
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class ExtrasProperty {
  @SerializedName("values")
  private List<List<Double>> values = null;

  @SerializedName("summary")
  private List<SummaryObject> summary = null;

  public ExtrasProperty values(List<List<Double>> values) {
    this.values = values;
    return this;
  }

  public ExtrasProperty addValuesItem(List<Double> valuesItem) {
    if (this.values == null) {
      this.values = new ArrayList<List<Double>>();
    }
    this.values.add(valuesItem);
    return this;
  }

   /**
   * Broken down by way_points.
   * @return values
  **/
  @ApiModelProperty(value = "Broken down by way_points.")
  public List<List<Double>> getValues() {
    return values;
  }

  public void setValues(List<List<Double>> values) {
    this.values = values;
  }

  public ExtrasProperty summary(List<SummaryObject> summary) {
    this.summary = summary;
    return this;
  }

  public ExtrasProperty addSummaryItem(SummaryObject summaryItem) {
    if (this.summary == null) {
      this.summary = new ArrayList<SummaryObject>();
    }
    this.summary.add(summaryItem);
    return this;
  }

   /**
   * Broken down by information category values.
   * @return summary
  **/
  @ApiModelProperty(value = "Broken down by information category values.")
  public List<SummaryObject> getSummary() {
    return summary;
  }

  public void setSummary(List<SummaryObject> summary) {
    this.summary = summary;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ExtrasProperty extrasProperty = (ExtrasProperty) o;
    return Objects.equals(this.values, extrasProperty.values) &&
        Objects.equals(this.summary, extrasProperty.summary);
  }

  @Override
  public int hashCode() {
    return Objects.hash(values, summary);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExtrasProperty {\n");
    
    sb.append("    values: ").append(toIndentedString(values)).append("\n");
    sb.append("    summary: ").append(toIndentedString(summary)).append("\n");
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

