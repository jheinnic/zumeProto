FROM openjdk:8u151-alpine
EXPOSE 8080
RUN mkdir /app
WORKDIR /app
COPY target/delivery.routing-0.0.1-bootstrap-SNAPSHOT.jar /app/delivery.routing-service.jar
CMD java ${JAVA_OPTS} -jar /app/delivery.routing-service.jar
