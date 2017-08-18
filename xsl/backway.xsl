<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">


	<!-- <xsl:template match="trkp"> -->
	<!-- <xsl:apply-templates /> -->
	<!-- </xsl:template> -->

	<xsl:template match="*">
		<xsl:copy-of select=".">
			<xsl:apply-templates />
			<xsl:apply-templates mode="back"/>
		</xsl:copy-of>
	</xsl:template>

	<xsl:template match="time">
		<xsl:copy-of select="." />
	</xsl:template>

	<xsl:template match="ele">
		<xsl:copy-of select="." />
	</xsl:template>

	<xsl:template match="time" mode="back">
		<xsl:copy-of select="." />
	</xsl:template>

	<xsl:template match="ele" mode="back">
		<xsl:copy-of select="." />
	</xsl:template>
</xsl:stylesheet>

