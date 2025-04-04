export type SupportedLocale =
  | "en"
  | "zh"
  | "fr"
  | "es"
  | "ru"
  | "ja"
  | "ko"
  | "pt"
  | "de"
  | "id"

export interface LanguageConstants {
  BrandName: string;
  SITE_TITLE: string;
  SITE_DESCRIPTION: string;
  TAGS_TITLE: string;
  TAGS_DESCRIPTION: string;
  SEARCH_PAGE_TITLE: string;
  SEARCH_PAGE_DESCRIPTION: string;
  GO_TO_HOMEPAGE: string;
  ERROR_404_SUBMESSAGE: string;
  ERROR_404_MESSAGE: string;
  ERROR_404_DESCRIPTION: string;
  ERROR_404_TITLE: string;
  UPDATED_ON: string;
  PUBLISHED_ON: string;
  TAGS_HEADING: string;
  FOOTER_ABOUT: string;
  FOOTER_BUILD: string;
  FOOTER_INVEST: string;
  FOOTER_LIFE: string;
}

const zhConstants: LanguageConstants = {
  BrandName: "Astrology",
  SITE_TITLE: "Astrology",
  SITE_DESCRIPTION: "在生活的海洋，创业的波涛和投资的迷雾中前行。",
  TAGS_TITLE: "所有标签",
  TAGS_DESCRIPTION: "在生活的海洋，创业的波涛和投资的迷雾中前行。",
  SEARCH_PAGE_TITLE: "站内搜索",
  SEARCH_PAGE_DESCRIPTION: "搜索Astrology全站内容",
  GO_TO_HOMEPAGE: "返回首页",
  ERROR_404_SUBMESSAGE: "您查找的页面不存在或已被移动。",
  ERROR_404_MESSAGE: "页面未找到",
  ERROR_404_DESCRIPTION: "404 - 页面未找到",
  ERROR_404_TITLE: "404 - 页面未找到",
  UPDATED_ON: "更新于",
  PUBLISHED_ON: "发布于",
  TAGS_HEADING: "标签",
  FOOTER_ABOUT: "关于我们",
  FOOTER_BUILD: "创业",
  FOOTER_INVEST: "投资",
  FOOTER_LIFE: "生活",
};

const enConstants: LanguageConstants = {
  BrandName: "Astrology",
  SITE_TITLE: "Astrology",
  SITE_DESCRIPTION:
    "Sailing through the ocean of life, amidst the waves of entrepreneurship and the fog of investment.",
  TAGS_TITLE: "All Tags",
  TAGS_DESCRIPTION:
    "Sailing through the ocean of life, amidst the waves of entrepreneurship and the fog of investment.",
  SEARCH_PAGE_TITLE: "Site Search",
  SEARCH_PAGE_DESCRIPTION: "Search all content on Astrology",
  GO_TO_HOMEPAGE: "Go to Homepage",
  ERROR_404_SUBMESSAGE:
    "The page you're looking for doesn't exist or has been moved.",
  ERROR_404_MESSAGE: "Page not found",
  ERROR_404_DESCRIPTION: "404 - Page not found",
  ERROR_404_TITLE: "404 - Page Not Found",
  UPDATED_ON: "Updated on",
  PUBLISHED_ON: "Published on",
  TAGS_HEADING: "Tags",
  FOOTER_ABOUT: "About Us",
  FOOTER_BUILD: "Build",
  FOOTER_INVEST: "Invest",
  FOOTER_LIFE: "Life",
};

const frConstants: LanguageConstants = {
  BrandName: "Astrology",
  SITE_TITLE: "Astrology",
  SITE_DESCRIPTION:
    "Naviguer à travers l'océan de la vie, au milieu des vagues de l'entrepreneuriat et du brouillard de l'investissement.",
  TAGS_TITLE: "Tous les Tags",
  TAGS_DESCRIPTION:
    "Naviguer à travers l'océan de la vie, au milieu des vagues de l'entrepreneuriat et du brouillard de l'investissement.",
  SEARCH_PAGE_TITLE: "Recherche sur le Site",
  SEARCH_PAGE_DESCRIPTION: "Rechercher tout le contenu sur Astrology",
  GO_TO_HOMEPAGE: "Aller à la Page d'Accueil",
  ERROR_404_SUBMESSAGE:
    "La page que vous recherchez n'existe pas ou a été déplacée.",
  ERROR_404_MESSAGE: "Page non trouvée",
  ERROR_404_DESCRIPTION: "404 - Page non trouvée",
  ERROR_404_TITLE: "404 - Page Non Trouvée",
  UPDATED_ON: "Mis à jour le",
  PUBLISHED_ON: "Publié le",
  TAGS_HEADING: "Tags",
  FOOTER_ABOUT: "À propos de nous",
  FOOTER_BUILD: "Construire",
  FOOTER_INVEST: "Investir",
  FOOTER_LIFE: "Vie",
};

const esConstants: LanguageConstants = {
  BrandName: "Astrology",
  SITE_TITLE: "Astrology",
  SITE_DESCRIPTION:
    "Navegando en el océano de la vida, entre las olas del emprendimiento y la niebla de la inversión.",
  TAGS_TITLE: "Todas las Etiquetas",
  TAGS_DESCRIPTION:
    "Navegando en el océano de la vida, entre las olas del emprendimiento y la niebla de la inversión.",
  SEARCH_PAGE_TITLE: "Búsqueda en el Sitio",
  SEARCH_PAGE_DESCRIPTION: "Buscar todo el contenido en BRÚJULA",
  GO_TO_HOMEPAGE: "Ir a la Página de Inicio",
  ERROR_404_SUBMESSAGE:
    "La página que estás buscando no existe o ha sido movida.",
  ERROR_404_MESSAGE: "Página no encontrada",
  ERROR_404_DESCRIPTION: "404 - Página no encontrada",
  ERROR_404_TITLE: "404 - Página No Encontrada",
  UPDATED_ON: "Actualizado el",
  PUBLISHED_ON: "Publicado el",
  TAGS_HEADING: "Etiquetas",
  FOOTER_ABOUT: "Sobre nosotros",
  FOOTER_BUILD: "Construir",
  FOOTER_INVEST: "Invertir",
  FOOTER_LIFE: "Vida",
};

const ruConstants: LanguageConstants = {
  BrandName: "Astrology",
  SITE_TITLE: "Astrology",
  SITE_DESCRIPTION:
    "Плавание по океану жизни, среди волн предпринимательства и тумана инвестиций.",
  TAGS_TITLE: "Все Теги",
  TAGS_DESCRIPTION:
    "Плавание по океану жизни, среди волн предпринимательства и тумана инвестиций.",
  SEARCH_PAGE_TITLE: "Поиск по Сайту",
  SEARCH_PAGE_DESCRIPTION: "Поиск всего контента на Astrology",
  GO_TO_HOMEPAGE: "Перейти на Главную Страницу",
  ERROR_404_SUBMESSAGE:
    "Страница, которую вы ищете, не существует или была перемещена.",
  ERROR_404_MESSAGE: "Страница не найдена",
  ERROR_404_DESCRIPTION: "404 - Страница не найдена",
  ERROR_404_TITLE: "404 - Страница Не Найдена",
  UPDATED_ON: "Обновлено",
  PUBLISHED_ON: "Опубликовано",
  TAGS_HEADING: "Теги",
  FOOTER_ABOUT: "О нас",
  FOOTER_BUILD: "Создание",
  FOOTER_INVEST: "Инвестировать",
  FOOTER_LIFE: "Жизнь",
};


const jaConstants: LanguageConstants = {
  BrandName: "Astrology",
  SITE_TITLE: "Astrology",
  SITE_DESCRIPTION: "人生という大海原を渡り、起業という波と投資の霧の中を航海する。",
  TAGS_TITLE: "すべてのタグ",
  TAGS_DESCRIPTION: "人生という大海原を渡り、起業という波と投資の霧の中を航海する。",
  SEARCH_PAGE_TITLE: "サイト内検索",
  SEARCH_PAGE_DESCRIPTION: "- Astrologyの全コンテンツを検索",
  GO_TO_HOMEPAGE: "ホームページへ",
  ERROR_404_SUBMESSAGE: "お探しのページは存在しないか、移動されました。",
  ERROR_404_MESSAGE: "ページが見つかりません",
  ERROR_404_DESCRIPTION: "404 - ページが見つかりません",
  ERROR_404_TITLE: "404 - ページが見つかりません",
  UPDATED_ON: "更新日",
  PUBLISHED_ON: "公開日",
  TAGS_HEADING: "タグ",
  FOOTER_ABOUT: "会社概要",
  FOOTER_BUILD: "構築",
  FOOTER_INVEST: "投資",
  FOOTER_LIFE: "生活",
};

const koConstants: LanguageConstants = {
  BrandName: "Astrology",
  SITE_TITLE: "Astrology",
  SITE_DESCRIPTION: "삶이라는 바다를 항해하고, 창업의 파도와 투자라는 안개를 헤쳐 나간다.",
  TAGS_TITLE: "모든 태그",
  TAGS_DESCRIPTION: "삶이라는 바다를 항해하고, 창업의 파도와 투자라는 안개를 헤쳐 나간다.",
  SEARCH_PAGE_TITLE: "사이트 검색",
  SEARCH_PAGE_DESCRIPTION: "Astrology의 모든 콘텐츠 검색",
  GO_TO_HOMEPAGE: "홈페이지로 이동",
  ERROR_404_SUBMESSAGE: "찾으시는 페이지가 존재하지 않거나 이동되었습니다.",
  ERROR_404_MESSAGE: "페이지를 찾을 수 없습니다",
  ERROR_404_DESCRIPTION: "404 - 페이지를 찾을 수 없습니다",
  ERROR_404_TITLE: "404 - 페이지를 찾을 수 없습니다",
  UPDATED_ON: "업데이트 날짜",
  PUBLISHED_ON: "발행 날짜",
  TAGS_HEADING: "태그",
  FOOTER_ABOUT: "회사 소개",
  FOOTER_BUILD: "구축",
  FOOTER_INVEST: "투자",
  FOOTER_LIFE: "생활",
};

const ptConstants: LanguageConstants = {
  BrandName: "Astrology",
  SITE_TITLE: "Astrology",
  SITE_DESCRIPTION:
    "Navegar pelo oceano da vida, entre as ondas do empreendedorismo e a névoa do investimento.",
  TAGS_TITLE: "Todas as Tags",
  TAGS_DESCRIPTION:
    "Navegar pelo oceano da vida, entre as ondas do empreendedorismo e a névoa do investimento.",
  SEARCH_PAGE_TITLE: "Pesquisa no Site",
  SEARCH_PAGE_DESCRIPTION: "Pesquisar todo o conteúdo no Astrology",
  GO_TO_HOMEPAGE: "Ir para a Página Inicial",
  ERROR_404_SUBMESSAGE:
    "A página que você está procurando não existe ou foi movida.",
  ERROR_404_MESSAGE: "Página não encontrada",
  ERROR_404_DESCRIPTION: "404 - Página não encontrada",
  ERROR_404_TITLE: "404 - Página Não Encontrada",
  UPDATED_ON: "Atualizado em",
  PUBLISHED_ON: "Publicado em",
  TAGS_HEADING: "Tags",
  FOOTER_ABOUT: "Sobre Nós",
  FOOTER_BUILD: "Construir",
  FOOTER_INVEST: "Investir",
  FOOTER_LIFE: "Vida",
};

const deConstants: LanguageConstants = {
  BrandName: "Astrology",
  SITE_TITLE: "Astrology",
  SITE_DESCRIPTION:
    "Durch das Meer des Lebens segeln, mitten in den Wellen des Unternehmertums und dem Nebel der Investitionen.",
  TAGS_TITLE: "Alle Tags",
  TAGS_DESCRIPTION:
    "Durch das Meer des Lebens segeln, mitten in den Wellen des Unternehmertums und dem Nebel der Investitionen.",
  SEARCH_PAGE_TITLE: "Seitensuche",
  SEARCH_PAGE_DESCRIPTION: "Durchsuchen Sie alle Inhalte auf Astrology",
  GO_TO_HOMEPAGE: "Zur Startseite",
  ERROR_404_SUBMESSAGE:
    "Die gesuchte Seite existiert nicht oder wurde verschoben.",
  ERROR_404_MESSAGE: "Seite nicht gefunden",
  ERROR_404_DESCRIPTION: "404 - Seite nicht gefunden",
  ERROR_404_TITLE: "404 - Seite Nicht Gefunden",
  UPDATED_ON: "Aktualisiert am",
  PUBLISHED_ON: "Veröffentlicht am",
  TAGS_HEADING: "Tags",
  FOOTER_ABOUT: "Über Uns",
  FOOTER_BUILD: "Aufbauen",
  FOOTER_INVEST: "Investieren",
  FOOTER_LIFE: "Leben",
};

const idConstants: LanguageConstants = {
  BrandName: "Astrology",
  SITE_TITLE: "Astrology",
  SITE_DESCRIPTION:
    "Berlayar melalui lautan kehidupan, di tengah gelombang kewirausahaan dan kabut investasi.",
  TAGS_TITLE: "Semua Tag",
  TAGS_DESCRIPTION:
    "Berlayar melalui lautan kehidupan, di tengah gelombang kewirausahaan dan kabut investasi.",
  SEARCH_PAGE_TITLE: "Pencarian Situs",
  SEARCH_PAGE_DESCRIPTION: "Cari semua konten di Astrology",
  GO_TO_HOMEPAGE: "Ke Halaman Utama",
  ERROR_404_SUBMESSAGE:
    "Halaman yang Anda cari tidak ada atau telah dipindahkan.",
  ERROR_404_MESSAGE: "Halaman tidak ditemukan",
  ERROR_404_DESCRIPTION: "404 - Halaman tidak ditemukan",
  ERROR_404_TITLE: "404 - Halaman Tidak Ditemukan",
  UPDATED_ON: "Diperbarui pada",
  PUBLISHED_ON: "Diterbitkan pada",
  TAGS_HEADING: "Tag",
  FOOTER_ABOUT: "Tentang Kami",
  FOOTER_BUILD: "Membangun",
  FOOTER_INVEST: "Investasi",
  FOOTER_LIFE: "Kehidupan",
};


export function getConstants(lang: SupportedLocale): LanguageConstants {
  switch (lang) {
    case "en":
      return enConstants;
    case "fr":
      return frConstants;
    case "es":
      return esConstants;
    case "ru":
      return ruConstants;
    case "ja":
      return jaConstants;
    case "ko":
      return koConstants;
    case "pt":
      return ptConstants;
    case "de":
      return deConstants;
    case "id":
      return idConstants;
    case "zh":
        return zhConstants;
    default:
      return enConstants;
  }
}

export function getTagMetadata(tag: string, lang: SupportedLocale) {
  const constants = getConstants(lang);
  return {
    title: `${constants.SITE_TITLE} - ${tag}`,
    description: `${constants.TAGS_DESCRIPTION} ${tag}.`,
  };
}

export function getCategoryMetadata(category: string, lang: SupportedLocale) {
  const constants = getConstants(lang);
  return {
    title: `${constants.SITE_TITLE} - ${category}`,
    description: `${constants.SITE_DESCRIPTION} ${category}.`,
  };
}