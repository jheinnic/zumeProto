#!/bin/sh

# docker-compose -f docker-compose-networks.yml -f docker-compose-consul.yml -f docker-compose-eventuatelocal-core.yml -f docker-compose-eventuatelocal-postgres-polling.yml -f docker-compose-keycloak.yml -f docker-compose-filestore.yml -f docker-compose-microservices-polling.yml -f docker-compose-frontend.yml -f docker-compose-vault.yml -f docker-compose-treegateway.yml -f docker-compose-geth.yml -p jchptf $@
docker-compose -f docker-compose-networks.yml -f docker-compose-consul.yml -f docker-compose-eventuatelocal-core.yml -f docker-compose-eventuatelocal-postgres-polling.yml -f docker-compose-keycloak.yml -f docker-compose-filestore.yml -f docker-compose-frontend.yml -f docker-compose-vault.yml -f docker-compose-axon.yml -f docker-compose-geth.yml -p jchptf $@
