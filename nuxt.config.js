// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/tetsufe-github-pages/'
  }
} : {}

module.exports = {

  /*
  ** Headers of the page
  */
  head: {
    title: 'tetsufe-github-pages',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: ' A Nuxt.js Github.io site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  routerBase,

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
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
    assetsPublicPath: './',
  },

	plugins:
    [
      { src: '~plugins/vue-carousel', ssr: false },
      '~plugins/vue-scrollto.js',
    ]

}

