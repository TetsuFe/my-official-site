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



