import type { SupportedLocale } from "@consts";

export const supportedLanguages = ["zh", "en"];

export const languageNames: Record<string, string> = {
  en: "English",
  zh: "中文",
};

export function getCurrentLocale(pathname: string): SupportedLocale {
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] as SupportedLocale;
  const supportedLocales: SupportedLocale[] = ["zh", "en"];
  return supportedLocales.includes(locale) ? locale : "en";
}

export function getBrandName(lang: SupportedLocale): string {
  const brandNames: Record<SupportedLocale, string> = {
    en: "Astrology",
    zh: "Astrology",
  };
  return brandNames[lang];
}

export const privacyPolicyNames: Record<SupportedLocale, string> = {
  en: "Privacy",
  zh: "隐私政策",
};

export const privacyPolicyPaths: Record<SupportedLocale, string> = {
  en: "/posts/privacy-policy",
  zh: "/posts/privacy-policy",
};

export function getSupportedLanguages(): string[] {
  return supportedLanguages;
}

export function getLanguageNames(): Record<string, string> {
  return languageNames;
}

export function getPrivacyPolicyName(lang: SupportedLocale): string {
  return privacyPolicyNames[lang] ?? privacyPolicyNames.en;
}

export function getPrivacyPolicyPath(lang: SupportedLocale): string {
  return privacyPolicyPaths[lang] ?? privacyPolicyPaths.en;
}

export function getTextAlignClass(locale: SupportedLocale): string {
  const justifyLocales: SupportedLocale[] = ["zh"];
  return justifyLocales.includes(locale) ? "text-justify" : "text-left";
}