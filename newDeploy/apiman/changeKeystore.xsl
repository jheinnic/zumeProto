<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:srv="urn:jboss:domain:4.0"
                xmlns="urn:jboss:domain:4.0">

    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="//srv:security-realm[@name='UndertowRealm']/srv:server-identities/srv:ssl/srv:keystore">
        <keystore path="apiman.jks" relative-to="jboss.server.config.dir" keystore-password="portfolio" alias="apimancert" key-password="portfolio" generate-self-signed-certificate-host="portfolio.dev.jchein.name"/>
    </xsl:template>

    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>

