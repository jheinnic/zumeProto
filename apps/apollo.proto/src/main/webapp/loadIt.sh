#!/bin/sh

export CONTENT=`cat gallery_views.schema`
echo "${CONTENT}"
curl -X POST http://localhost:27474/graphql/idl -d "${CONTENT}" -u neo4j:portfolio
