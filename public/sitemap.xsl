<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          :root {
            --bg-color: #f5f5f5;
            --text-color: #333;
            --header-bg: #fff;
            --content-bg: #fff;
            --table-header-bg: #f8f9fa;
            --table-border: #dee2e6;
            --link-color: #007bff;
            --hover-bg: #f8f9fa;
            --language-bg: #e9ecef;
          }
          
          @media (prefers-color-scheme: dark) {
            :root {
              --bg-color: #1a1a1a;
              --text-color: #e0e0e0;
              --header-bg: #2d2d2d;
              --content-bg: #2d2d2d;
              --table-header-bg: #3d3d3d;
              --table-border: #4d4d4d;
              --link-color: #4a9eff;
              --hover-bg: #3d3d3d;
              --language-bg: #4d4d4d;
            }
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            color: var(--text-color);
            background-color: var(--bg-color);
          }
          #header {
            background-color: var(--header-bg);
            padding: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
          }
          #header h1 {
            margin: 0;
            font-size: 24px;
            color: var(--text-color);
          }
          #content {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background-color: var(--content-bg);
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            table-layout: fixed;
          }
          th {
            background-color: var(--table-header-bg);
            padding: 12px;
            text-align: left;
            border-bottom: 2px solid var(--table-border);
            position: sticky;
            top: 0;
            z-index: 10;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid var(--table-border);
            word-break: break-word;
          }
          tr:hover {
            background-color: var(--hover-bg);
          }
          a {
            color: var(--link-color);
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .alternate {
            background-color: var(--hover-bg);
          }
          .language-links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 4px;
          }
          .language-link {
            background-color: var(--language-bg);
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 12px;
          }

          @media (max-width: 768px) {
            #content {
              margin: 10px;
              padding: 10px;
            }
            table {
              font-size: 14px;
            }
            th, td {
              padding: 8px;
            }
          }
        </style>
      </head>
      <body>
        <div id="header">
          <h1>XML Sitemap</h1>
        </div>
        <div id="content">
          <table>
            <xsl:choose>
              <xsl:when test="sitemap:sitemapindex">
                <tr>
                  <th>URL</th>
                  <th>Last Modified</th>
                </tr>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
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
                  </tr>
                </xsl:for-each>
              </xsl:when>
              <xsl:otherwise>
                <tr>
                  <th>URL</th>
                  <th>Alternate Languages</th>
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
                      <div class="language-links">
                        <xsl:for-each select="xhtml:link">
                          <span class="language-link">
                            <xsl:value-of select="@hreflang"/>
                            <xsl:text>: </xsl:text>
                            <a href="{@href}">
                              <xsl:value-of select="@href"/>
                            </a>
                          </span>
                        </xsl:for-each>
                      </div>
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
              </xsl:otherwise>
            </xsl:choose>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="sitemap:sitemapindex">
    <xsl:copy-of select="."/>
  </xsl:template>
</xsl:stylesheet> 