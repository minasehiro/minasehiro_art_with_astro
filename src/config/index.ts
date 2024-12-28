import { Github, Twitter } from "lucide-react"

export const defaultLanguage: string = "ja"

export const common = {
  domain: "https://minasehiro.art",
  meta: {
    favicon: "/images/minasehiro.png",
    url: "https://minasehiro.art",
  },
  googleAnalyticsId: "G-95HWQ3N4CF",
  social: [
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/minase_hiro",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/minasehiro",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    about: true,
  },
  latestPosts: 8,
}

export const ja = {
  ...common,
  siteName: "Portfolio",
  meta: {
    ...common.meta,
    title: "ポートフォリオサイト",
    slogan: "遠きに行くには必ず邇きよりす",
    description: "プログラミング、写真",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    archive: {
      title: "アーカイブ",
      description: "すべての投稿",
      ogImage: "/images/cover.png",
    },
    about: {
      title: "プロフィール",
      description: "自己紹介",
      ogImage: "/images/cover.png",
    },
  },
}

export const en = {
  ...common,
  siteName: "Portfolio",
  meta: {
    ...common.meta,
    title: "Portfolio Site",
    slogan: "Even a thousand-mile journey begins with the first step.",
    description: "Programming, Photography",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Here are all posts",
      ogImage: "/images/cover.png",
    },
    about: {
      title: "About Me",
      description: "Here is self-introduction",
      ogImage: "/images/cover.png",
    },
  },
}
