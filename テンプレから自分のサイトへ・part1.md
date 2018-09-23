# テンプレから自分のサイトへ・part1

## どこを変更するか
参考: [ディレクトリ構造 - Nuxt.js](https://ja.nuxtjs.org/guide/directory-structure/)

新しいフレームワークを始める時に迷うのが、以下のような点だ

- どこから書き始めればいいのか
- どこを書けば何が変わるのか
- どういう関連になっているか

基本的には、この順番で追っていけば良さそう。

- 共通のレイアウトを管理するファイル: layouts/default.vue
- ルーティング: .nuxt/router.js
- ルーティングを元に呼ばれるファイル: pages/index.vue 
- 「コンポーネント」の「コンポーネント」: .nuxt/components/nuxt.js（基本書き換えなさそう）
- 実際の中身にあたる「コンポーネント」: components/AppLogo.vue

新しく追加する場合、基本的には以下でいけそうだ

- .nuxt/router.jsに追加のルーティングを書く
- pages/ に大枠のvueファイルを書く
- components/ に細かいvueファイルを書く


## 2. トップページ(/)を書いていく

### 2.1 編集するファイルの確認

まずはトップページを書いていく。とりあえず雛形を作るだけなので、細かいスタイルは気にしないで書いていく

となると、

- 共通のレイアウトを管理するファイル: layouts/default.vue

これはとりあえず放置。

次に、

- ルーティング: .nuxt/router.js

ここを見て、ルート(/)がどのpages/xxx.vueと対応しているかみる。

すると、以下に対応しているとわかる。なので、まずはpages/index.vueから編集していく。

- ルーティングを元に呼ばれるファイル: pages/index.vue 

ここで、index.vueで呼び出されている components/AppLogo.vue も気にはなるが、まずはコンポーネントわけは考えない。

というわけで、とりあえずはpages/index.vueを書き換えていく。

まずはまっさらにします。

pages/index.vue

```vue
<template>
  <section class="container">
  </section>
</template>

<script>
//import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    //AppLogo
  }
}
</script>

<style>
</style>
```

ブラウザで見ると、まっさらになっていればOKです

### 2.2 書く順番について
topページの書く順番や書き方については、[ぬきたし公式サイト（１８禁注意）](http://qruppo.com)を参考にしました。

だいたい以下のような感じで書いていこうと思います。

```html
<body>
  <div class="__nuxt">
    <div class="__layout">
      <div class="sideA">
        <header>
        </header>
        <article>
          <section id="top">
          </section>
          <section id="news">
          </section>
          <section>
          </section>
        </article>
      </div>
    </div>
  </div>
  <script>
  </script>
  <iframe>
  </iframe>
</body>
```

### 2.3 ヘッダをつける
まずはヘッダです。上から書いていくことにしました。

### 2.4 トップ画像をつける

```vue
<template>
  <div id="body">
    <header>
      <nav id="menu">
        <div class="menu">
          <nuxt-link to="#">トップ</nuxt-link>
        </div>
        <div class="menu">
          <nuxt-link to="#">ニュース</nuxt-link>
        </div>
      </nav>
    </header>
    <article>
      <section id="top">
        <div class="img-wrap">
          <img src="~/assets/images/carousel/hufurima.jpg">
        </div>
        <!--
        <div>
          <img src="/assets/images/carousel/eitango.jpg">
        </divk>
        -->
      </section>
    </article>
  </div>
</template>

<script>
//import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    //AppLogo
  }
}
</script>

<style>
  .img-wrap{
    text-align: center;
  }
  img{
    max-width: 80%;
    object-fit: contain;
  }
</style>
```

