/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID: string;
  readonly PUBLIC_WALINE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    HSStaticMethods?: {
      autoInit: () => void;
    };
  }
}
