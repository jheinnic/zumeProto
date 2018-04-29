#!/bin/sh

docker-compose -f docker-compose-networks.yml -f docker-compose-eventuatelocal-core.yml -f docker-compose-eventuatelocal-postgres-polling.yml -f docker-compose-keycloak.yml -f docker-compose-filestore.yml -f docker-compose-microservices-polling.yml -f docker-compose-frontend.yml $@
