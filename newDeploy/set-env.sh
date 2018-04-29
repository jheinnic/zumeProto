if [ -z "$DOCKER_HOST_IP" ] ; then
    if [ -z "$DOCKER_HOST" ] ; then
      export DOCKER_HOST_IP=`hostname`
    else
      echo using ${DOCKER_HOST?}
      XX=${DOCKER_HOST%\:*}
      export DOCKER_HOST_IP=${XX#tcp\:\/\/}
    fi
fi

echo DOCKER_HOST_IP is $DOCKER_HOST_IP

# export SPRING_DATASOURCE_URL=jdbc:mysql://${DOCKER_HOST_IP}/eventuate
# export SPRING_DATASOURCE_USERNAME=mysqluser
# export SPRING_DATASOURCE_PASSWORD=mysqlpw
# export SPRING_DATASOURCE_DRIVER_CLASS_NAME=com.mysql.jdbc.Driver
# export EVENTUATELOCAL_KAFKA_BOOTSTRAP_SERVERS=$DOCKER_HOST_IP:9092
# export EVENTUATELOCAL_CDC_DB_USER_NAME=root
# export EVENTUATELOCAL_CDC_DB_PASSWORD=rootpassword
# export EVENTUATELOCAL_ZOOKEEPER_CONNECTION_STRING=$DOCKER_HOST_IP:2181
# WORKDIR=`mktemp -d`

docker volume create be-secrets
docker create -i -t --volume be-secrets:/secrets --name make-secrets jboss/keycloak:3.3.0.CR2-3 /bin/bash 
docker exec make-secrets mkdir /secrets/vault

read -p "What shall the secrets vault store password be?" vault_store_pass
read -p "What shall the secrets vault key password be?" vault_key_pass

docker exec make-secrets keytool -genseckey -alias vault -storetype jceks -keyalg aes -keysize 256 -storepass ${vault_store_pass} -keypass ${vault_key_pass} -validity 730 -keystore /secrets/vault/vault.keystore
SALT=`docker exec make-secrets cat /dev/urandom | docker exec -i make-secrets tr -dc 'a-zA-Z0-9' | fold -w 8 | head -n 1`
ITER1=`docker exec make-secrets cat /dev/urandom | docker exec -i make-secrets tr -dc '0-9' | fold -w 256 | head -n 1 | head --bytes 1`
ITER2=`docker exec make-secrets cat /dev/urandom | docker exec -i make-secrets tr -dc '0-9' | fold -w 256 | head -n 1 | head --bytes 1`
ITER=`echo "200 + $ITER1 + $ITER2" | bc`

read -p "What is the BioID client key?" bioid_client
docker exec make-secrets keycloak/bin/vault.sh --keystore /secrets/vault/vault.keystore --keystore-password ${vault_store_pass} --alias Kvault --vault-block bioid --attribute client --sec-attr ${bioid_client} --enc-dir /secrets/vault --iteration ${ITER} --salt ${SALT}

read -p "What is the BioID secret?" bioid_secret
read -p "What is the Google client key?" google_client
read -p "What is the Google secret?" google_secret
read -p "What is the Facebook client key?" facebook_client
read -p "What is the Facebook client secret?" facebook_secret
read -p "What is the Captcha client key?" captcha_client
read -p "What is the Captcha client secret?" captcha_secret

