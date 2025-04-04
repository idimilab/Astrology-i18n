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
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
          }
          .container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h1 {
            color: #2c3e50;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
            margin-top: 0;
          }
          .url-list {
            list-style: none;
            padding: 0;
          }
          .url-item {
            background: #f9f9f9;
            margin-bottom: 15px;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #eee;
          }
          .loc {
            font-size: 1.1em;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 10px;
            display: block;
            text-decoration: none;
          }
          .loc:hover {
            color: #1a73e8;
          }
          .alternate-links {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #eee;
          }
          .alternate-link {
            display: inline-block;
            margin-right: 15px;
            color: #666;
            text-decoration: none;
            padding: 4px 8px;
            background: #f0f0f0;
            border-radius: 4px;
            font-size: 0.9em;
          }
          .alternate-link:hover {
            color: #1a73e8;
            background: #e8f0fe;
          }
          .language-tag {
            background: #e0e0e0;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.8em;
            margin-right: 5px;
            color: #666;
          }
          .sitemap-index {
            margin-top: 20px;
          }
          .sitemap-index-item {
            margin-bottom: 15px;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 8px;
            border: 1px solid #eee;
          }
          .lastmod {
            color: #666;
            font-size: 0.9em;
            margin-top: 5px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }
          .logo {
            font-size: 1.5em;
            font-weight: bold;
            color: #2c3e50;
            text-decoration: none;
          }
          @media (max-width: 768px) {
            body {
              padding: 10px;
            }
            .container {
              padding: 15px;
            }
            .url-item, .sitemap-index-item {
              padding: 10px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <a href="/" class="logo">Astrology</a>
            <h1>站点地图</h1>
          </div>
          
          <!-- 处理 sitemap-index.xml -->
          <xsl:if test="sitemap:sitemapindex">
            <div class="sitemap-index">
              <h2>站点地图索引</h2>
              <ul class="url-list">
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <li class="sitemap-index-item">
                    <a class="loc" href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                    <div class="lastmod">
                      最后更新: <xsl:value-of select="sitemap:lastmod"/>
                    </div>
                  </li>
                </xsl:for-each>
              </ul>
            </div>
          </xsl:if>

          <!-- 处理 sitemap-0.xml -->
          <xsl:if test="sitemap:urlset">
            <div class="url-list">
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
            </div>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 