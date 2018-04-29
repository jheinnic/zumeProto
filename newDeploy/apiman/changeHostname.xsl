<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:ut="urn:jboss:undertow:3.0"
                xmlns="urn:jboss:undertow:3.0">

    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="//ut:subsystem/ut:server[@name='default-server']/ut:host">
        <host name="default-host" alias="portfolio.dev.jchein.name">
          <location name="/" handler="welcome-content"/>
          <filter-ref name="server-header"/>
          <filter-ref name="x-powered-by-header"/>
        </host>
    </xsl:template>

    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>

