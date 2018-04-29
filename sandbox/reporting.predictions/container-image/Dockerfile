FROM openjdk:8u151-alpine
EXPOSE 4545
RUN mkdir /app
WORKDIR /app
COPY target/dependency/reporting.predictions-service-0.0.1-bootstrap-SNAPSHOT.jar /app/reporting.predictions-service-0.0.1-bootstrap-SNAPSHOT.jar
CMD java ${JAVA_OPTS} -jar /app/reporting.predictions-service-0.0.1-bootstrap-SNAPSHOT.jar
