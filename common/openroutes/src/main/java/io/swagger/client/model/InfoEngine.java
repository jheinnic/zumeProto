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
 * InfoEngine
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class InfoEngine {
  @SerializedName("version")
  private String version = null;

  @SerializedName("build_date")
  private String buildDate = null;

  public InfoEngine version(String version) {
    this.version = version;
    return this;
  }

   /**
   * Backend version used for the request.
   * @return version
  **/
  @ApiModelProperty(example = "4.2.0", value = "Backend version used for the request.")
  public String getVersion() {
    return version;
  }

  public void setVersion(String version) {
    this.version = version;
  }

  public InfoEngine buildDate(String buildDate) {
    this.buildDate = buildDate;
    return this;
  }

   /**
   * Build date of the used backend version
   * @return buildDate
  **/
  @ApiModelProperty(example = "2017-09-08T09:21:35Z", value = "Build date of the used backend version")
  public String getBuildDate() {
    return buildDate;
  }

  public void setBuildDate(String buildDate) {
    this.buildDate = buildDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InfoEngine infoEngine = (InfoEngine) o;
    return Objects.equals(this.version, infoEngine.version) &&
        Objects.equals(this.buildDate, infoEngine.buildDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(version, buildDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InfoEngine {\n");
    
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    buildDate: ").append(toIndentedString(buildDate)).append("\n");
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

