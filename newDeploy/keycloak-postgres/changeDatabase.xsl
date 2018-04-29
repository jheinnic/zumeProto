<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:ds="urn:jboss:domain:datasources:5.0"
                xmlns:srv="urn:jboss:domain:5.0"
                xmlns:ut="urn:jboss:domain:undertow:4.0">

    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="//srv:security-realm[@name='ApplicationRealm']/srv:server-identities/srv:ssl/srv:keystore">
        <srv:keystore path="application.keystore" relative-to="jboss.server.config.dir"
                      keystore-password="portfolio" alias="portfolio" key-password="portfolio"
                      generate-self-signed-certificate-host="portfolio.dev.jchein.name"/>
    </xsl:template>

    <xsl:template match="//ut:subsystem/ut:server[@name='default-server']/ut:host">
        <ut:host name="default-host" alias="portfolio.dev.jchein.name">
            <ut:location name="/" handler="welcome-content"/>
            <ut:filter-ref name="server-header"/>
            <ut:filter-ref name="x-powered-by-header"/>
            <ut:http-invoker security-realm="ApplicationRealm"/>
        </ut:host>
    </xsl:template>

    <xsl:template match="//ds:subsystem/ds:datasources/ds:datasource[@jndi-name='java:jboss/datasources/KeycloakDS']">
        <ds:datasource jndi-name="java:jboss/datasources/KeycloakDS" enabled="true" use-java-context="true" pool-name="KeycloakDS" use-ccm="true">
            <ds:connection-url>jdbc:postgresql://${env.POSTGRES_PORT_5432_TCP_ADDR}:${env.POSTGRES_PORT_5432_TCP_PORT:5432}/${env.POSTGRES_DATABASE:keycloak}</ds:connection-url>
            <ds:driver>postgresql</ds:driver>
            <ds:security>
              <ds:user-name>${env.POSTGRES_USER:keycloak}</ds:user-name>
              <ds:password>${env.POSTGRES_PASSWORD:password}</ds:password>
            </ds:security>
            <ds:validation>
                <ds:check-valid-connection-sql>SELECT 1</ds:check-valid-connection-sql>
                <ds:background-validation>true</ds:background-validation>
                <ds:background-validation-millis>60000</ds:background-validation-millis>
            </ds:validation>
            <ds:pool>
                <ds:flush-strategy>IdleConnections</ds:flush-strategy>
            </ds:pool>
        </ds:datasource>
    </xsl:template>

    <xsl:template match="//ds:subsystem/ds:datasources/ds:drivers">
        <xsl:copy>
            <xsl:apply-templates select="node()|@*"/>
                <ds:driver name="postgresql" module="org.postgresql.jdbc">
                    <ds:xa-datasource-class>org.postgresql.xa.PGXADataSource</ds:xa-datasource-class>
                </ds:driver>
        </xsl:copy>
    </xsl:template>

    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>

</xsl:stylesheet>

