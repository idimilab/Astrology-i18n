<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <head>
        <title>站点地图 - Astrology</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #2c3e50;
            margin: 0 0 20px 0;
            font-size: 24px;
          }
          .url-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .url-item {
            margin-bottom: 10px;
            padding: 10px;
            border-bottom: 1px solid #eee;
          }
          .loc {
            color: #1a73e8;
            text-decoration: none;
            font-size: 16px;
          }
          .loc:hover {
            text-decoration: underline;
          }
          .lastmod {
            color: #666;
            font-size: 14px;
            margin-top: 5px;
          }
          .alternate-links {
            margin-top: 5px;
            font-size: 14px;
          }
          .alternate-link {
            color: #666;
            text-decoration: none;
            margin-right: 10px;
          }
          .alternate-link:hover {
            color: #1a73e8;
          }
          .language-tag {
            color: #666;
            font-size: 12px;
            margin-right: 5px;
          }
        </style>
      </head>
      <body>
        <h1>站点地图</h1>
        
        <!-- 处理 sitemap-index.xml -->
        <xsl:if test="sitemap:sitemapindex">
          <ul class="url-list">
            <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
              <li class="url-item">
                <a class="loc" href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
                <div class="lastmod">
                  最后更新: <xsl:value-of select="sitemap:lastmod"/>
                </div>
              </li>
            </xsl:for-each>
          </ul>
        </xsl:if>

        <!-- 处理 sitemap-0.xml 等 -->
        <xsl:if test="sitemap:urlset">
          <ul class="url-list">
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <li class="url-item">
                <a class="loc" href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
                <div class="lastmod">
                  最后更新: <xsl:value-of select="sitemap:lastmod"/>
                </div>
                <div class="alternate-links">
                  <xsl:for-each select="xhtml:link">
                    <a class="alternate-link" href="{@href}">
                      <span class="language-tag">
                        <xsl:value-of select="@hreflang"/>
                      </span>
                      <xsl:value-of select="@href"/>
                    </a>
                  </xsl:for-each>
                </div>
              </li>
            </xsl:for-each>
          </ul>
        </xsl:if>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 