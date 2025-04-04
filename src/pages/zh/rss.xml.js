import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getConstants } from "@consts";
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

export async function GET(context) {
  const currentLocale = "zh";
  const constants = getConstants(currentLocale);
  const markdown = new MarkdownIt();

  let posts = await getCollection("posts", ({ id }) => id.startsWith("zh/"));

  posts = posts
    .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
    .slice(0, 3);

  return rss({
    title: constants.SITE_TITLE,
    description: `${constants.SITE_DESCRIPTION}`,
    site: context.site,
    customData: `<language>zh-CN</language>`,
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
    },
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/zh/posts/${post.slug.split("/").pop()}/`,
      pubDate: post.data.pubDate,
      categories: post.data.category,
      author: post.data.author,
      content: sanitizeHtml(markdown.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']), // 保留你需要的标签
      }),
      customData: `
        <media:content url="${post.data.cover}">
          <media:title>${post.data.title}</media:title>
          <media:description>${post.data.coverAlt}</media:description>
        </media:content>
      `,
    })),
  });
}