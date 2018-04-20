FROM openjdk:8u161-alpine
EXPOSE 8080
RUN mkdir /app
WORKDIR /app
COPY target/pilot.mangement.jar /app/pilot.mangement-service.jar
CMD java ${JAVA_OPTS} -jar /app/pilot.mangement-service.jar
