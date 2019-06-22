# nuxtでOGP

なんかog:imageに画像のパスを書いてもうまく反映されなかったので、s3にあげてみた

default.vue

```vue
<script>
  export default {
    head() {
      return {
        meta: [
      { property: 'og:title', content: "tetsufe's official site" },
      { property: 'og:site_name', content: "tetsufe's official site" },
      { property: 'og:description', content: 'Nuxt製のポートフォリオサイトです' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://tetsufe.github.io/my-official-site/' },
      { property: 'og:image', content: 'https://s3-ap-northeast-1.amazonaws.com/myofficialsite/logo.png' },
      { property: 'twitter:card', content: 'summary' },
        ]
      }
    },
  }
</script>
```

もしくは

nuxt.config.jsに
```js

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
      { property: 'twitter:card', content: 'summary' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  ```
