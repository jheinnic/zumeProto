FROM openjdk:8u151-alpine
EXPOSE 4545
RUN mkdir /app
WORKDIR /app
COPY target/dependency/hr.procmgr-service-0.0.1-bootstrap-SNAPSHOT.jar /app/hr.procmgr-service.jar
CMD java ${JAVA_OPTS} -jar /app/hr.procmgr-service.jar
