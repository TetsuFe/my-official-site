# ぬきたしで学ぶnuxtレイアウト

## ぬきたしとは
[公式サイト（１８禁注意）](http://qruppo.com)

18禁ゲームらしい。自分はプレイ動画をちょっと見たくらいの知識しかないけど、要はバカゲーかつシリアスゲーかつエロゲー・・・らしい。（本当にプレイしてないのでわからない）

公式サイトがスマホ対応しているので珍しいと思ってソースを見たらnuxtで書かれていたので、参考にすることに。

## あんまりnuxt関係ないかも
あんまりnuxt関係ないかもしれません。えろげ公式サイトなんて基本静的ページなはずなので。


## 構成を読む

ソースコードを読むと、どうやら以下のような構成らしい

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

本文の部分に当たる部分が`<article>`タグで囲まれている。

さらに、`<article>`タグの内側には、エロゲ公式サイトにありがちな、top, character, storyなどが `<section>`タグでリストのような形で挿入されている。

後々、これらをComponentとして切り分けていけば、いい感じの構成になりそうだ。


## トップ画像
これはちょっと凝っているようだ。

キャラクター画像の集合体になっていて、マウスオーバーで各画像が微妙に動くようになっている

[top.png]()

## ニュース
おおよそ、以下のようになっている。

- ニュース
- タイムライン的ニュース
  - (左)アイコン
  - (右)ニュース本文（文字の大きさ可変）
  - (右下)日付
- twitter timeline

ニュースとタイムラインは、多分media queryで制御。小さくなると横幅いっぱいの２行に分かれる

[news.png]()


```html
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
        <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="twitter-timeline twitter-timeline-rendered" style="position: static; visibility: visible; display: inline-block; width: 100%; height: 364px; padding: 0px; border: none; max-width: 100%; min-width: 180px; margin-top: 0px; margin-bottom: 0px; min-height: 200px;" data-widget-id="profile:qruppo" title="Twitterタイムライン">
        </iframe>
        <script src="https://platform.twitter.com/widgets.js" async="" charset="utf-8">
        </script>
      </div>
    </div>
  </div>
</section>
```
