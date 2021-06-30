module.exports = {
  title: "My awesome docs site",
  description: "Just playing around",

  // @see https://vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    ////
    // navbar
    ////
    logo: "/logo.png",
    // manual nav
    nav: [
      { text: "Home", link: "/" },
      { text: "Features", link: "/features/" },
      { text: "Guide", link: "/guide/" },
      { text: "Components", link: "/components/" },
      { text: "External", link: "https://seanwuapps.com" },
    ],
    ////
    // sidebar
    ////
    // simple sidebar
    // sidebar: "auto",
  },

  plugins: [
    // @see https://www.npmjs.com/package/vuepress-auto-sidebar
    ["vuepress-plugin-auto-sidebar"],
    // @see http://vuepress-live.surge.sh/
    ["live", { noSsr: true }],
  ],
  markdown: {
    extendMarkdown: (md) => {
      // use more markdown-it plugins!
      // @see https://www.npmjs.com/package/markdown-it-include
      md.use(require("markdown-it-include"));
    },
  },
};
