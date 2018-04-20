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
 * ProfileParamsRestrictions
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class ProfileParamsRestrictions {
  @SerializedName("gradient")
  private Long gradient = null;

  public ProfileParamsRestrictions gradient(Long gradient) {
    this.gradient = gradient;
    return this;
  }

   /**
   * Get gradient
   * minimum: 1
   * maximum: 15
   * @return gradient
  **/
  @ApiModelProperty(value = "")
  public Long getGradient() {
    return gradient;
  }

  public void setGradient(Long gradient) {
    this.gradient = gradient;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProfileParamsRestrictions profileParamsRestrictions = (ProfileParamsRestrictions) o;
    return Objects.equals(this.gradient, profileParamsRestrictions.gradient);
  }

  @Override
  public int hashCode() {
    return Objects.hash(gradient);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProfileParamsRestrictions {\n");
    
    sb.append("    gradient: ").append(toIndentedString(gradient)).append("\n");
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

