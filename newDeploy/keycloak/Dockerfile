FROM jboss/keycloak:3.3.0.CR2-3

ADD changeHostname.xsl /opt/jboss/keycloak/

RUN java -jar /usr/share/java/saxon.jar -s:/opt/jboss/keycloak/standalone/configuration/standalone.xml -xsl:/opt/jboss/keycloak/changeHostname.xsl -o:/opt/jboss/keycloak/standalone/configuration/standalone.xml && \
    java -jar /usr/share/java/saxon.jar -s:/opt/jboss/keycloak/standalone/configuration/standalone-ha.xml -xsl:/opt/jboss/keycloak/changeHostname.xsl -o:/opt/jboss/keycloak/standalone/configuration/standalone-ha.xml && \
    rm /opt/jboss/keycloak/changeHostname.xsl

ADD themes/jchptf /opt/jboss/keycloak/themes/jchptf/
ADD application.keystore /opt/jboss/keycloak/standalone/configuration/
