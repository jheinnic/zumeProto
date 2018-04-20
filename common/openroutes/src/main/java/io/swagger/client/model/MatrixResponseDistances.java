package io.swagger.client.model;

import java.util.Objects;
import io.swagger.annotations.ApiModel;

/**
 * [Distance matrix](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#matrix-response) where the items(rows) correspond to the number of &#x60;sources&#x60; and the entries(columns) of each item correspond to the number of &#x60;destinations&#x60;. 
 */
@ApiModel(description = "[Distance matrix](https://github.com/GIScience/openrouteservice-docs/blob/master/README.md#matrix-response) where the items(rows) correspond to the number of `sources` and the entries(columns) of each item correspond to the number of `destinations`. ")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-04-16T23:56:32.457Z")
public class MatrixResponseDistances {

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    return true;
  }

  @Override
  public int hashCode() {
    return Objects.hash();
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MatrixResponseDistances {\n");
    
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

