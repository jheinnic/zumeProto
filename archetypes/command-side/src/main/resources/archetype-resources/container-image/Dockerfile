#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
FROM openjdk:8u151-alpine
EXPOSE 4545
RUN mkdir /app
WORKDIR /app
COPY target/dependency/${parentArtifactId}-service-${version}.jar /app/${parentArtifactId}-service-${version}.jar
CMD java ${JAVA_OPTS} -jar /app/${parentArtifactId}-service-${version}.jar
