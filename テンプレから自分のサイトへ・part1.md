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


## 2.5 ニュース（最新情報）つける

ぬきたしサイトを参考に作成していく

```vue
<section id="news">
  <div class="title-wrap">
    <img src="img/news/sideA/title.png" sizes="(min-width:356px) 50vw, 100vw" srcset="img/news/sideA/title.png 200w, img/news/sideA/title@2x.png 400w" width="178">
  </div>
  <div id="news-wrap">
    <div id="news-list">
      <div class="item">
        <div class="item-wrap">
          <a href="./special/rally/vol2/">
            <div class="thumb">
              <img src="img/news/sideA/thumb/thumb35.jpg" sizes="(min-width:160px) 50vw, 100vw" width="80" srcset="img/news/sideA/thumb/thumb35.jpg 200w, img/news/sideA/thumb/thumb35@2x.jpg 400w">
            </div>
            <div class="date">
              <p>2018.08.13</p>
            </div>
            <div class="text">
              <p>抜きゲーみたいな島に住んでる貧乳はどうすりゃいいですか？ファンミーティングイベントvol.2「ネタバレ解禁！NLNS大反省会」の情報を公開しました！</p>
            </div>
          </a>
        </div>
      </div>
      <div class="item">
        <div class="item-wrap">
          <a href="./special/patch/">
						<div class="thumb">
							<img src="img/news/sideA/thumb/thumb34.jpg" sizes="(min-width:160px) 50vw, 100vw" width="80" srcset="img/news/sideA/thumb/thumb34.jpg 200w, img/news/sideA/thumb/thumb34@2x.jpg 400w">
						</div>
						<div class="date">
							<p>2018.08.07</p>
						</div>
					<div class="text">
						<p>ぬきたしパッチリリース（ver1.02）のお知らせ</p>
						</div>
					</a>
					</div>
				</div>
      <div class="twitter">
        <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="twitter-timeline twitter-timeline-rendered" style="position: static; visibility: visible; display: inline-block; width: 100%; height: 364px; padding: 0px; border: none; max-width: 100%; min-width: 180px; margin-top: 0px; margin-bottom: 0px; min-height: 200px;" data-widget-id="profile:tetsufe_twi" title="Twitterタイムライン">
        </iframe>
        <script src="https://platform.twitter.com/widgets.js" async="" charset="utf-8">
        </script>
      </div>
    </div>
  </div>
</section>
```

