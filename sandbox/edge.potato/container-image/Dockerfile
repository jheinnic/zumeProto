FROM openjdk:8u151-alpine
EXPOSE 4545
RUN mkdir /app
WORKDIR /app
COPY target/dependency/edge.potato-service-0.0.1-bootstrap-SNAPSHOT.jar /app/edge.potato-service-0.0.1-bootstrap-SNAPSHOT.jar
CMD java ${JAVA_OPTS} -jar /app/edge.potato-service-0.0.1-bootstrap-SNAPSHOT.jar
