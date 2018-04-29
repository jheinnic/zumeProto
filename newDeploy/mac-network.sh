#!/bin/sh

if [ `uname` == 'Darwin' ]
then
  unset DOCKER_HOST_IP
  sudo ifconfig lo0 alias 10.200.10.1/24  # (where 10.200.10.1 is some unused IP address)
  export DOCKER_HOST_IP=10.200.10.1
  echo "On Mac, DOCKER_HOST_IP=${DOCKER_HOST_IP}"
fi
