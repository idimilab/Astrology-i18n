<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <xsl:choose>
      <!-- 如果是 sitemap-index.xml，使用默认样式 -->
      <xsl:when test="sitemap:sitemapindex">
        <xsl:apply-templates select="sitemap:sitemapindex"/>
      </xsl:when>
      <!-- 如果是具体的 sitemap 文件，使用自定义样式 -->
      <xsl:otherwise>
        <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
            <title>XML Sitemap</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <style type="text/css">
              body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                margin: 0;
                padding: 0;
                color: #333;
                background-color: #f5f5f5;
              }
              #header {
                background-color: #fff;
                padding: 20px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
              }
              #header h1 {
                margin: 0;
                font-size: 24px;
                color: #333;
              }
              #content {
                max-width: 1200px;
                margin: 20px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
              }
              th {
                background-color: #f8f9fa;
                padding: 12px;
                text-align: left;
                border-bottom: 2px solid #dee2e6;
              }
              td {
                padding: 12px;
                border-bottom: 1px solid #dee2e6;
              }
              tr:hover {
                background-color: #f8f9fa;
              }
              a {
                color: #007bff;
                text-decoration: none;
              }
              a:hover {
                text-decoration: underline;
              }
              .alternate {
                background-color: #f8f9fa;
              }
            </style>
          </head>
          <body>
            <div id="header">
              <h1>XML Sitemap</h1>
            </div>
            <div id="content">
              <table>
                <tr>
                  <th>URL</th>
                  <th>Last Modified</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                </tr>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <xsl:if test="position() mod 2 = 0">
                      <xsl:attribute name="class">alternate</xsl:attribute>
                    </xsl:if>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:priority"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </table>
            </div>
          </body>
        </html>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <!-- 默认的 sitemap-index.xml 模板 -->
  <xsl:template match="sitemap:sitemapindex">
    <xsl:copy-of select="."/>
  </xsl:template>
</xsl:stylesheet> 