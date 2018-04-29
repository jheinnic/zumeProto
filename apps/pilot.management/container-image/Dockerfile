FROM openjdk:8u151-alpine
EXPOSE 8080
RUN mkdir /app
WORKDIR /app
# COPY target/dependency/pilot.management-service-0.0.1-bootstrap-SNAPSHOT.jar /app/pilot.management-service.jar
COPY target/dependency/pilot.management-service*.jar /app/pilot.management-service.jar
CMD java ${JAVA_OPTS} -jar /app/pilot.management-service.jar
