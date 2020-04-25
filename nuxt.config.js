// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
module.exports = {

  /*
  ** Headers of the page
  */
  head: {
    title: "tetsufe's official site",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt製のポートフォリオサイトです' },
      { property: 'og:title', content: "tetsufe's official site" },
      { property: 'og:site_name', content: "tetsufe's official site" },
      { property: 'og:description', content: 'Nuxt製のポートフォリオサイトです' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://tetsufe.github.io/my-official-site/' },
      { property: 'og:image', content: 'https://s3-ap-northeast-1.amazonaws.com/myofficialsite/logo.png' },
      { property: 'og:image:width', content: '600' },
      { property: 'og:image:height', content: '300' },

      { property: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/my-official-site/favicon.ico' }
    ]
  },

  router: {base: '/my-official-site/'},
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {

    vendor: ['vue-carousel', 'vue-scrollto'],
    /*
    ** Run ESLint on save
    */
    /* before
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    */
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
      publicPath: '/my-official-site/_nuxt/',
  },

	plugins:
    [
      { src: '~/plugins/vue-carousel.js', ssr: false },
      '~/plugins/vue-scrollto.js',
      '~plugins/vuex-router-sync.js',
    ]

}
if (process.env.DEPLOY_ENV === 'LOCAL') {
    module.exports['router']={base: '/'}
}
