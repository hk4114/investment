import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "投资理财笔记",
  description: "个人技术博客",
  base: "/investment/",
  srcExclude: [
    "**/(README).md",
    "(.vitepress|public|images|.guthub|components|snippets)/**/*.md",
  ],
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    defaultHighlightLang: "js",
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          // todo
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    // 回到顶部展示文本
    returnToTopLabel: "回到顶部",
    // 搜索功能
    search: {
      // 使用本地搜索
      provider: "local",
      options: {
        // 配置搜索组件展示文本
        translations: {
          button: {
            buttonText: "搜索文档",
          },
          modal: {
            displayDetails: "显示详情",
            noResultsText: "未找到相关结果",
            resetButtonTitle: "清除",
            footer: {
              closeText: "关闭",
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      }
    }
  },
});
