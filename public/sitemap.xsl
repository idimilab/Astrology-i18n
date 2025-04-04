<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap - Astrology</title>
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
          }
          h1 {
            color: #2c3e50;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
          }
          .url-list {
            list-style: none;
            padding: 0;
          }
          .url-item {
            background: #f9f9f9;
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .loc {
            font-size: 1.1em;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 10px;
            display: block;
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
          }
          .alternate-link:hover {
            color: #2c3e50;
          }
          .language-tag {
            background: #e0e0e0;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.8em;
            margin-right: 5px;
          }
          @media (max-width: 768px) {
            body {
              padding: 10px;
            }
            .url-item {
              padding: 10px;
            }
          }
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <ul class="url-list">
          <xsl:for-each select="urlset/url">
            <li class="url-item">
              <a class="loc" href="{loc}">
                <xsl:value-of select="loc"/>
              </a>
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
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 