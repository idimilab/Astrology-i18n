type TagMap = Record<string, string>;

const zhTags: TagMap = {
  甲戌: "reflect",
  乙未: "media",
  乙丑: "roam",
  丙子: "risk",
  丙寅: "strategy",
  甲戌: "allocation",
  乙丑: "innovation",
  丙子: "model",
  乙丑: "management",
};

const enTags: TagMap = {
  reflect: "reflect",
  media: "media",
  roam: "roam",
  risk: "risk",
  strategy: "strategy",
  allocation: "allocation",
  innovation: "innovation",
  model: "model",
  management: "management",
};

const tagMappings: Record<string, TagMap> = {
  zh: zhTags,
  en: enTags,
};

function createReverseMapping(tagMap: TagMap): TagMap {
  const reverseMap: TagMap = {};
  Object.entries(tagMap).forEach(([key, value]) => {
    reverseMap[value] = key;
  });
  return reverseMap;
}

const reverseTagMappings: Record<string, TagMap> = {
  zh: createReverseMapping(zhTags),
  en: createReverseMapping(enTags),
};

export function getTagByLanguage(
  tag: string,
  fromLang: string,
  toLang: string,
): string {
  const fromMapping = tagMappings[fromLang];
  const toReverseMapping = reverseTagMappings[toLang];

  if (!fromMapping || !toReverseMapping) {
    console.warn(`Missing tag mapping for: ${fromLang} or ${toLang}`);
    return tag;
  }

  const commonTag = fromMapping[tag] || tag;
  return toReverseMapping[commonTag] || commonTag;
}

export function getEnglishTag(tag: string, fromLang: string): string {
  return getTagByLanguage(tag, fromLang, "en");
}

export function getChineseTag(tag: string, fromLang: string): string {
  return getTagByLanguage(tag, fromLang, "zh");
}
