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

でも、ヘッダは地味に難しかったので、とりあえず適当に以下のようにつけました

```html
<header>
	<nav id="menu">
		<div class="menu">
			<nuxt-link to="#top">トップ</nuxt-link>
		</div>
		<div class="menu">
			<nuxt-link to="#news">ニュース</nuxt-link>
		</div>
	</nav>
</header>
```


### 2.4 トップ画像をつける

```vue
<template>
  <div id="body">
    <header>
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

ぬきたしサイトを参考に（ほぼコピーして）作成していく

構成

- ニュース
- タイムライン的ニュース
  - (左)アイコン
  - (右)ニュース本文（文字の大きさ可変）
  - (右下)日付
- twitter timeline

ニュースとタイムラインは、多分media queryで制御。小さくなると横幅いっぱいの２行に分かれる

アイコンには、[]icooon-mono](http://icooon-mono.com)というサイトを使いました。jpg, png, svgから選べますが、サイズを変えてもぼやけた感じになったりしないsvgをダウンロードしました。


```vue
<template>
  <div id="wrap" class="sideA">
    <header>
    </header>
    <article>
      <section id="news">
        <div class="title-wrap">
          <h2>ニュース</h2>
          <h3>news</h3>
        </div>
        <div id="news-wrap">
          <div id="news-list">
            <div class="item">
              <div class="item-wrap">
                <a href="#">
                  <div class="thumb">
                    <!--<img src="img/news/sideA/thumb/thumb35.jpg" sizes="(min-width:160px) 50vw, 100vw" width="80" srcset="img/news/sideA/thumb/thumb35.jpg 200w, img/news/sideA/thumb/thumb35@2x.jpg 400w">-->
                    <img src="~/assets/images/icons/new.svg" sizes="(min-width:160px) 50vw, 100vw" width="80">
                  </div>
                  <div class="date">
                    <p>2018.09.24</p>
                  </div>
                  <div class="text">
                    <p>トップページのトップ画像とニュースを作成しました</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="item-wrap">
                <a href="http://swiftfe0.hatenablog.com/entry/2018/09/23/115644">
                  <div class="thumb">
                    <img src="~/assets/images/icons/blog.svg" sizes="(min-width:160px) 50vw, 100vw" width="80">
                  </div>
                  <div class="date">
                    <p>2018.09.23</p>
                  </div>
                  <div class="text">
                    <p>サイトリニューアルに関するブログを書きました</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="item-wrap">
                <a href="#">
                  <div class="thumb">
                    <img src="~/assets/images/icons/new.svg" sizes="(min-width:160px) 50vw, 100vw" width="80">
                  </div>
                  <div class="date">
                    <p>2018.09.23</p>
                  </div>
                  <div class="text">
                    <p>サイトをリニューアルしました！</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="twitter">
            <div id="twitter-timeline-body">
<a class="twitter-timeline" data-height="364" data-theme="light" href="https://twitter.com/tetsufe_twi?ref_src=twsrc%5Etfw">Tweets by tetsufe_twi</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>            </div>
          </div>
        </div>
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
  .title-wrap{
    text-align: center;
  }

  #news-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 1120px;
    margin: 0 auto;
  }

  #news-list {
    overflow-y: scroll;
  }

  #news-list a {
    -webkit-transition: none;
    transition: none;
  }

  #news-list p {
    -webkit-transition: color .25s ease;
    transition: color .25s ease;
  }

  #wrap.sideA #news-list {
    width: 710px;
    height: 364px;
    margin-right: 50px;
  }

  #wrap.sideA #news-list .item {
    background: rgba(251,251,252,.5);
  }

  #wrap.sideA #news-list .item:first-child {
    border-top: 1px solid #d8e2e8;
  }

  #wrap.sideA #news-list .item-wrap {
    position: relative;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    border-bottom: 1px solid #d8e2e8;
    overflow: hidden;
  }

  #wrap.sideA #news-list .item-wrap,#wrap.sideA #news-list .item-wrap .plane,#wrap.sideA #news-list .item-wrap a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  #wrap.sideA #news-list .item-wrap .plane,#wrap.sideA #news-list .item-wrap a {
    width: 100%;
    padding: 20px 30px 20px 20px;
  }

  #wrap.sideA #news-list .thumb {
    width: 80px;
    height: 80px;
  }

  #wrap.sideA #news-list .thumb img {
    border-radius: 8px;
    border: 1px solid #d8e2e8;
  }

  #wrap.sideA #news-list .date {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  #wrap.sideA #news-list .date p {
    display: inline-block;
    background: #adb0b6;
    width: 104px;
    height: 22px;
    color: #fff;
    font-family: Arvo;
    font-size: 10px;
    letter-spacing: 2px;
    text-align: center;
    padding: 4px 0 0 5px;
    border-top-left-radius: 8px;
  }

  #wrap.sideA #news-list .text {
    width: calc(100% - 120px);
    margin-left: 30px;
  }

  #wrap.sideA #news-list .text p {
    color: #767b85;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
  }

  #wrap.sideA .twitter {
    width: 360px;
    height: 364px;
    border-radius: 12px;
    border: 1px solid #e4e4e9;
    overflow: hidden;
  }

  #wrap.sideA .twitter a {
    color: #767b85;
  }

  #wrap:not(.sp).sideA #news-list .item:hover {
    background: hsla(240,3%,94%,.5);
  }

  #wrap:not(.sp).sideA #news-list .item a:hover .text p {
    color: #0082f2;
  }

  #wrap.sideB #news-wrap {
    margin-top: 60px;
  }

  #wrap.sideB #news-list {
    height: 468px;
  }

  #wrap.sideB #news-list a,#wrap.sideB #news-list p {
    color: #fff;
    font-family: Roboto Condensed,Noto Sans Japanese;
    font-weight: 900;
    font-size: 16px;
  }

  #wrap.sideB #news-list .item {
    border-top: 1px solid #fff;
  }

  #wrap.sideB #news-list .item:last-child {
    border-bottom: 1px solid #fff;
  }

  #wrap.sideB #news-list .item-wrap .plane,#wrap.sideB #news-list .item-wrap a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 25px 0;
  }

  #wrap.sideB #news-list .date {
    margin: 0 70px 0 20px;
  }

  #wrap.sideB #news-list .date p {
    font-family: Teko;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: 3px;
    text-align: center;
  }

  #wrap.sideB #news-list .date p:not(:first-child) {
    font-weight: 500;
    font-size: 40px;
    line-height: .9;
    letter-spacing: 2px;
  }

  #wrap.sideB #news-list .date p:last-child {
    padding-bottom: 2px;
  }

  #wrap.sideB #news-list .text {
    padding-right: 25px;
  }

  #wrap.sideB #news-list .text a,#wrap.sideB #news-list .text p {
    font-weight: 900;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 2.5px;
  }

  #wrap:not(.sp).sideB #news-list a:hover p {
    color: #000;
  }

  @media screen and (max-width:1120px) {
    #news-wrap {
      width: 100vw;
      padding: 0 20px;
    }
  }

  @media screen and (max-width:768px) {
    #news-wrap {
      width: 100vw;
      padding: 0;
    }

    #wrap.sideA #news-wrap {
      display: block;
    }

    #wrap.sideA #news-list {
      width: 100%;
    }

    #wrap.sideA #news-list .item-wrap .plane,#wrap.sideA #news-list .item-wrap a {
      padding: 24px 16px;
    }

    #wrap.sideA #news-list .thumb,#wrap.sideA #news-list .thumb img {
      width: 60px;
      height: 60px;
    }

    #wrap.sideA #news-list .date p {
      width: 96px;
      height: 20px;
      padding: 3px 0 0 6px;
      border-top-left-radius: 8px;
    }

    #wrap.sideA #news-list .text {
      width: calc(100% - 76px);
      margin-left: 16px;
    }

    #wrap.sideA #news-list .text a,#wrap.sideA #news-list .text p {
      font-size: 14px;
      line-height: 17px;
    }

    #wrap.sideA .twitter {
      width: calc(100% - 32px);
      margin: 32px auto 0;
    }

    #wrap.sideA .twitter iframe {
      width: 100vw!important;
    }

    #wrap.sideB #news-list {
      height: 364px;
      padding: 0 16px;
    }

    #wrap.sideB #news-list .item-wrap .plane,#wrap.sideB #news-list .item-wrap a {
      padding: 20px 0;
    }

    #wrap.sideB #news-list .date {
      margin: 0 16px 0 12px;
    }

    #wrap.sideB #news-list .date p {
      font-size: 16px;
    }

    #wrap.sideB #news-list .date p:not(:first-child) {
      font-size: 32px;
      letter-spacing: 2.5px;
    }

    #wrap.sideB #news-list .text {
      padding-right: 4px;
    }

    #wrap.sideB #news-list .text a,#wrap.sideB #news-list .text p {
      font-size: 20px;
      line-height: 24px;
    }
  }
```



