import { Github, Twitter } from "lucide-react"

export const defaultLanguage: string = "ja"

export const common = {
  domain: "https://astro-air.guoqi.dev",
  meta: {
    favicon: "/avatar.png",
    url: "https://blog.sunguoqi.com",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/sun0225SUN",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/sun0225SUN",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    links: true,
    about: true,
  },
  latestPosts: 8,
}

export const ja = {
  ...common,
  siteName: "ポートフォリオ",
  meta: {
    ...common.meta,
    title: "ポートフォリオ",
    slogan: "遠きに行くには必ず邇きよりす",
    description: "プログラミング、写真",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    archive: {
      title: "アーカイブ",
      description: "小孙同学的所有文章",
      ogImage: "/images/page-meta/zh/archive.png",
    },
    links: {
      title: "リンク",
      description: "小孙同学的和他朋友们",
      ogImage: "/images/page-meta/zh/links.png",
    },
    about: {
      title: "プロフィール",
      description: "小孙同学的自我介绍",
      ogImage: "/images/page-meta/zh/about.png",
    },
  },
}

export const en = {
  ...common,
  siteName: "Guoqi Sun",
  meta: {
    ...common.meta,
    title: "Guoqi Sun",
    slogan: "A Romantic Rationalist",
    description: "Reading, Photography, Programming, Traveling",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Here are Guoqi Sun's all posts",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "My Friends",
      description: "Here are Guoqi Sun's friends",
      ogImage: "/images/page-meta/en/links.png",
    },
    about: {
      title: "About Me",
      description: "Here is Guoqi Sun's self-introduction",
      ogImage: "/images/page-meta/en/about.png",
    },
  },
}
