import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://astrology-i18n.vercel.app",
  trailingSlash: "always",
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      "zh",
      "en",
    ],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " ↗" },
        },
      ],
    ],
  },
  integrations: [mdx(), pagefind(), icon({
    include: {
      tabler: ["*"],
      mdi: ["*"],
      "emojione-monotone": ["*"],
      "material-symbols": ["*"],
      flagpack: ["*"],
      "flat-color-icons": ["*"],
    },
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), 
  sitemap({
    filter: (page) => !page.includes('404'),
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        zh: 'zh-CN',
      },
    },
    customPages: [
      'https://astrology.one/',
      'https://astrology.one/zh/',
    ],
    xslUrl: '/sitemap.xsl',
    xslUrlForSitemaps: '/sitemap-detail.xsl',
  }),
],
});