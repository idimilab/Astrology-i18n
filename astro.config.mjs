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
    xslURL: '/sitemap.xsl',
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        zh: 'zh-CN',
      },
    },
    customPages: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1.0,
      },
      {
        url: '/zh/',
        changefreq: 'daily',
        priority: 1.0,
      },
    ],
    entryFilter: (entry) => {
      // 为所有页面添加默认值
      if (!entry.changefreq) {
        entry.changefreq = 'weekly';
      }
      if (!entry.priority) {
        entry.priority = 0.7;
      }
      return true;
    },
  })],
});