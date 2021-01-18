module.exports = {
  title: "iforu Project Guide",
  description:
    "system administrator's memo" /* a <meta> tag in the page HTML */,
  base: "/iforu/",
  dest: "public",
  themeConfig: {
    smoothScroll: true,
	nav: [
      { text: "Home", link: "/" },
      { text: "Server", link: "/server/" },
	    { text: "Hicloud", link: "/hicloud/" },
      { text: "Third Party", link: "/third-party/" },
      { text: "Security", link: "/security/burpsuite/" },
    ],
	sidebarDepth: 2,
    sidebar: {    
      "/server/": [
        "",
        "firewalld",
        "httpd2tomcat",
		    "awshttpd2tomcat",
        "ssl",
        "SSL SNI",
        "pgsql",
        "redis",
        "solr",
        "syslog",
        "sftp",
        "Route Table",
      ],
	  
      "/hicloud/": [
        "",
        "s3/",
        "snapshot/",
        "backup_plan/",
        "firewall/"
      ],
      
      "/third-party/": [
        "",
        "aws",
        "chtd",
        "chtn",
        "domain-name/",
        "firstbank/",
        "googleapi"
      ],

      "/security/": [
        ["burpsuite/", "BurpSuite"],
        ["fortify/", "Fortify"],
        ["whitesource/", "White Source"],
        ["nessus/", "Nessus"],
        "account_check/account",
        "hostscan"
      ],

      "/": [
        "",
        "dev/office/",
        "dev/",
        "dev/higate",
        "dev/infra",
        "dev/deploy"
      ]
    }
  },
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require("moment-timezone");
          moment.locale(lang);
          return moment(timestamp)
            .tz("Asia/Taipei")
            .format("MMMM DD, YYYY HH:mm Z");
        }
      }
    ],
    ["@vuepress/back-to-top"],
    ['one-click-copy', {
      copyMessage: 'Copied!',
      duration: 1000,
  }]
  ],
  /* fix: internal pdf link 404 */
  /* refer: https://github.com/vuejs/vuepress/issues/700 */
  chainWebpack: (config, isServer) => {
    config.module
      .rule("fpr")
      .test(/\.fpr$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: `[path][name].[ext]`
      });

    config.module
      .rule("xml")
      .test(/\.xml$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: `[path][name].[ext]`
      });

    config.module
      .rule("pdfs")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: `[path][name].[ext]`
      });

    config.module
    .rule("docx")
    .test(/\.docx$/)
    .use("file-loader")
    .loader("file-loader")
    .options({
      name: `[path][name].[ext]`
    });

    config.module
    .rule("pptx")
    .test(/\.pptx$/)
    .use("file-loader")
    .loader("file-loader")
    .options({
      name: `[path][name].[ext]`
    });

    config.module
    .rule("xlsx")
    .test(/\.xlsx$/)
    .use("file-loader")
    .loader("file-loader")
    .options({
      name: `[path][name].[ext]`
    });

    config.module
    .rule("license")
    .test(/\.license$/)
    .use("file-loader")
    .loader("file-loader")
    .options({
      name: `[path][name].[ext]`
    });

    config.module
    .rule("config")
    .test(/\.config$/)
    .use("file-loader")
    .loader("file-loader")
    .options({
      name: `[path][name].[ext]`
    });

    config.module
      .rule("vue")
      .uses.store.get("vue-loader")
      .store.get("options").transformAssetUrls = {
      video: ["src", "poster"],
      source: "src",
      img: "src",
      image: ["xlink:href", "href"],
      a: "href"
    };
  }
};
