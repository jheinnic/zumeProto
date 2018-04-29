FROM apiman/on-wildfly10:1.3.1.Final
# FROM apiman/on-wildfly10:latest

RUN /opt/jboss/wildfly/bin/add-user.sh admin portfolio --silent  

ADD changeHostname.xsl changeKeystore.xsl apiman.jks /opt/jboss/wildfly/standalone/configuration/
RUN java -jar /usr/share/java/saxon.jar -s:/opt/jboss/wildfly/standalone/configuration/standalone-apiman.xml -xsl:/opt/jboss/wildfly/standalone/configuration/changeHostname.xsl -o:/opt/jboss/wildfly/standalone/configuration/standalone-step1A.xml && \
    java -jar /usr/share/java/saxon.jar -s:/opt/jboss/wildfly/standalone/configuration/standalone-apiman.xml -xsl:/opt/jboss/wildfly/standalone/configuration/changeKeystore.xsl -o:/opt/jboss/wildfly/standalone/configuration/standalone-step1B.xml && \
    java -jar /usr/share/java/saxon.jar -s:/opt/jboss/wildfly/standalone/configuration/standalone-step1A.xml -xsl:/opt/jboss/wildfly/standalone/configuration/changeKeystore.xsl -o:/opt/jboss/wildfly/standalone/configuration/standalone-step2AB.xml && \
    java -jar /usr/share/java/saxon.jar -s:/opt/jboss/wildfly/standalone/configuration/standalone-step1A.xml -xsl:/opt/jboss/wildfly/standalone/configuration/changeHostname.xsl -o:/opt/jboss/wildfly/standalone/configuration/standalone-step2BA.xml && \
    cp /opt/jboss/wildfly/standalone/configuration/standalone-apiman.xml /opt/jboss/wildfly/standalone/configuration/standalone-original.xml && \
    java -jar /usr/share/java/saxon.jar -s:/opt/jboss/wildfly/standalone/configuration/standalone-apiman.xml -xsl:/opt/jboss/wildfly/standalone/configuration/changeHostname.xsl -o:/opt/jboss/wildfly/standalone/configuration/standalone-apiman.xml && \
    java -jar /usr/share/java/saxon.jar -s:/opt/jboss/wildfly/standalone/configuration/standalone-apiman.xml -xsl:/opt/jboss/wildfly/standalone/configuration/changeKeystore.xsl -o:/opt/jboss/wildfly/standalone/configuration/standalone-apiman.xml
#    rm /opt/jboss/wildfly/standalone/configuration/changeHostname.xsl /opt/jboss/wildfly/standalone/configuration/changeKeystore.xsl

# Expose wildfly debug port  
# ENV DEBUG_PORT=8287
# EXPOSE 8287  
# ENTRYPOINT ["-b", "0.0.0.0", "-bmanagement", "0.0.0.0", "-c", "standalone-apiman.xml", "-Djboss.http.port=8280", "-Djboss.https.port=8243", "-Djboss.management.http.port=9290", "-Djboss.management.https.port=9293", "-Dapiman.gateway-endpoint=https://portfolio.dev.jchein.name:8243/apiman-gateway-api", "--debug"]

EXPOSE 8280
ENTRYPOINT ["/opt/jboss/wildfly/bin/standalone.sh", "-b", "0.0.0.0", "-bmanagement", "0.0.0.0", "-c", "standalone-apiman.xml", "-Djboss.http.port=8280", "-Djboss.https.port=8243", "-Djboss.management.http.port=9290", "-Djboss.management.https.port=9293", "-Dapiman.gateway-endpoint=https://portfolio.dev.jchein.name:8243/apiman-gateway-api"]

