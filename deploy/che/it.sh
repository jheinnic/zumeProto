#!/bin/sh

docker run -it --rm -v /var/run/docker.sock:/var/run/docker.sock -v /Users/jheinnic/archetype:/archetype -v /tmp:/data -v /Users/jheinnic/.m2/repository:/m2 eclipse/che archetype generate --archid=stacks-archetype --che
