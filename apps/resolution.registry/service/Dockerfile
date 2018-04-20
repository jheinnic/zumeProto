FROM openjdk:8u151-alpine
EXPOSE 8080
RUN mkdir /app
WORKDIR /app
COPY target/resolution.registry-0.0.1-bootstrap-SNAPSHOT.jar /app/resolution-registry-service.jar
CMD java ${JAVA_OPTS} -jar /app/resolution-registry-service.jar
