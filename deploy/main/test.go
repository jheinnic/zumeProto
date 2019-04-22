package main

import (
  "fmt"

  template "github.com/hashicorp/go-sockaddr/template"
)

func main() {
  results, err := template.Parse(`{{ GetPrivateIP }}`)
  if err != nil {
    fmt.Errorf("Unable to find a private IP address: %v", err)
  }
  fmt.Printf("My Private IP address is: %s\n", results)

  results2, err2 := template.Parse(`{{ GetPrivateIPs }}`)
  if err2 != nil {
    fmt.Errorf("Unable to find a private IP address: %v", err2)
  }
  fmt.Printf("My Private IP addresses are: %s\n", results2)

  results3, err3 := template.Parse(`{{ GetPublicIP }}`)
  if err3 != nil {
    fmt.Errorf("Unable to find a public IP address: %v", err3)
  }
  fmt.Printf("My Public IP address is: %s\n", results3)

  results4, err4 := template.Parse(`{{ GetPublicIPs }}`)
  if err4 != nil {
    fmt.Errorf("Unable to find a public IP address: %v", err4)
  }
  fmt.Printf("My Public IP addresses are: %s\n", results4)

  results5, err5 := template.Parse(`{{ GetDefaultInterfaces }}`)
  if err5 != nil {
    fmt.Errorf("Unable to find a default IP address: %v", err5)
  }
  fmt.Printf("My Default IP addresses are: %s\n", results5)

  // results7, err7 := template.Parse(`{{ GetDefaultInterfaces | sort "type" | include "type" "IP" | addr "address" }}`)
  results6, err6 := template.Parse(`{{ GetDefaultInterfaces | sort "type" | include "type" "IP" | limit 1 | attr "address" }}`)
  if err6 != nil {
    fmt.Errorf("Unable to find a default IP address: %v", err6)
  }
  fmt.Printf("My Default IP addresses are: %s\n", results6)
}
