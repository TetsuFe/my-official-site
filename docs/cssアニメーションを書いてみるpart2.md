# cssアニメーションを書いてみるpart2

- 目標: 自己紹介アニメーションを作る（『恋ニ、甘味ヲソエテ』のアニメーション風。よくある遷移アニメーションをアレンジ）

以下の1:35あたりのアニメーションを参考にしていたので、とりあえずそれをみてみます。

[『恋ニ、甘味ヲソエテ』OPムービー](https://www.youtube.com/watch?v=P0UnHr62bkE)

## できたもの
最終的にこんなアニメーションができました。

<img src="intro_anime_7.gif" width="600" height="400">


## cssでの三角形の作り方1
最初は以下を参考にしましたが、底辺などをpxで指定する必要があり、結局レスポンシブ対応ががうまくいかなかったので断念。
https://www.granfairs.com/blog/staff/make-triangle-with-css
https://blog.mmmcorp.co.jp/blog/2017/08/04/css_shapes/

## cssでの三角形の作り方1
https://stackoverflow.com/questions/25360411/responsive-css-triangle-with-percents-width

%で幅指定ができるのでレスポンシブにしやすい（今回採用）

## アニメーション専用画面の作成 -> メイン画面への遷移

### 方針
- indexに最初はアニメーションだけを表示する
- そのDOMを削除

- index.vueの一番上の部分にアニメーションコンポーネントを設定
- アニメーションコンポーネント以外をdisplay: none (or state　使う？)
- アニメーション終了時、アニメーションコンポーネント以外をdisplay: none を解除 

中央揃えは、以下のように行った






```vue
<template>
  <section class="triangles">
    <div class="isosceles-triangle"></div>
  </section>
</template>

<script>
    export default {
        name: "IntroAnimation2"
    }
</script>

<style scoped>

  @media (max-width: 1024px) {
    #isosceles-triangle {
      position: relative;
      display: inline-block;
      height: 50px; width: 100%;
      text-align: center;
      color: white;
      background: gray;
      line-height: 50px;
      text-decoration: none;
      padding-bottom: 35%;
      background-clip: content-box;
      overflow: hidden;
    }
    #isosceles-triangle:after {
      content: "";
      position: absolute;
      top:0px;  left: 0;
      background-color: inherit;
      padding-bottom: 50%;
      width: 57.7%;
      z-index: -1;
      transform-origin: 0 0;
      transform: rotate(-30deg) skewX(30deg);
    }
  }

  @media (min-width: 1024px) {
		#isosceles-triangle-1 {
      position: relative;
      left: 10%;
      display: inline-block;
      height: 50px; width: 80%;
      text-align: center;
      color: white;
      background: gray;
      line-height: 50px;
      text-decoration: none;
      padding-bottom: 35%;
      background-clip: content-box;
      overflow: hidden;
    }
    
		#isosceles-triangle-1 :after {
      content: "";
      position: absolute;
      top:0;  left: 0;
      background-color: inherit;
      padding-bottom: 50%;
      width: 57.7%;
      z-index: -1;
      transform-origin: 0 0;
      transform: rotate(-30deg) skewX(30deg);
    }
  }

  #isosceles-triangle-1 {
    animation: fall-triangle 1s;
  }

  @keyframes fall-triangle {
    100% { transform: translate3d(0, 100%, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    100% { transform: translate3d(0, 100%, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

</style>
```

とりあえず、３角形を下に落とすアニメーションができました。

アニメーション部分

```css
  @keyframes fall-triangle {
    100% { transform: translate3d(0, 100%, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    100% { transform: translate3d(0, 100%, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }
```

参考
https://qiita.com/AsagiriDesign/items/0ec5623755c1d633bc85

これをつなげてみます！

```vue
<template>
  <section id="intro-animation">
    <div id="triangles">
      <div class="square" id="square-1"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-1"></div>
      <div class="square" id="square-2"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-2"></div>
      <div class="square" id="square-3"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-3"></div>
      <div class="square" id="square-4"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-4"></div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "IntroAnimation2"
    }
</script>

<style scoped>

  #intro-animation {
    height: 1580px;
    background-color: black;
  }

  #triangles {
    position: relative;
    height: 1500px;
    background-color: yellow;
    z-index: 2;
  }

  @media (min-width: 1024px) {
    #triangles {
      left: 10%;
      width: 80%;
    }
  }

  .square {
    margin: 0;
    animation: fall-triangle 1s forwards;
  }

  .isosceles-triangle:after {
    content: "";
    position: absolute;
    top:0;  left: 0;
    background-color: inherit;
    padding-bottom: 50%;
    width: 57.7%;
    transform-origin: 0 0;
    transform: rotate(-30deg) skewx(30deg);
  }

  .isosceles-triangle {
    display: inline-block;
    text-align: center;
    /* line-height: 50px; */
    text-decoration: none;
    animation: fall-triangle 1s forwards;
  }

  #isosceles-triangle-1 {
    position: absolute;
    top: 180px;
    background: orange;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }


  #isosceles-triangle-2 {
    position: absolute;
    top: 280px;
    background: gray;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-3 {
    position: absolute;
    top: 380px;
    background: blue;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-4 {
    position: absolute;
    top: 480px;
    background: green;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }


  #square-1 {
    position: absolute;
    top: 80px;
    background: orange;
    z-index: 6;
  }

  #square-2 {
    position: absolute;
    top: 180px;
    background: gray;
    z-index: 5;
  }

  #square-3 {
    position: absolute;
    top: 280px;
    background: blue;
    z-index: 4;
  }

  #square-4 {
    position: absolute;
    top: 380px;
    background: green;
    z-index: 3;
  }

  @media (max-width: 1024px) {

    .square {
      height: 100px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {

    .square {
      position: absolute;
      height: 100px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  #isosceles-triangle-1 {
    z-index: 6;
  }

  #isosceles-triangle-2 {
    z-index: 5;
  }

  #isosceles-triangle-3 {
    z-index: 4;
  }

  #isosceles-triangle-4 {
    z-index: 3;
  }

  @keyframes fall-triangle {
    100% { transform: translate3d(0, 500px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    100% { transform: translate3d(0, 500px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

</style>
```

長い・・・・

以下のようなアニメーションになりました。

<img src="intro_amine_4.gif" width="600" height="400">

なんかださい・・・

## アニメーションの微調整: 参考にしたアニメーションをみて違いを知る

以下の1:35あたりのアニメーションを参考にしていたので、とりあえずそれをみてみます。

[『恋ニ、甘味ヲソエテ』OPムービー](https://www.youtube.com/watch?v=P0UnHr62bkE)


気づいた違いとしては、

- お手本のほうが三角部分の重なっていない部分が大きい
- お手本のほうが色合いが綺麗

この二つをとりあえずなおします。勉強になる！

```vue
<template>
  <section id="intro-animation">
    <div id="triangles">
      <div class="square" id="square-1"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-1"></div>
      <div class="square" id="square-2"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-2"></div>
      <div class="square" id="square-3"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-3"></div>
      <div class="square" id="square-4"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-4"></div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "IntroAnimation2"
    }
</script>

<style scoped>

  #intro-animation {
    height: 1580px;
    background-color: black;
  }

  #triangles {
    position: relative;
    height: 1600px;
    background-color: orange;
    z-index: 2;
  }

  @media (min-width: 1024px) {
    #triangles {
      left: 10%;
      width: 80%;
    }
  }

  .square {
    margin: 0;
    animation: fall-triangle 1s forwards;
  }

  .isosceles-triangle:after {
    content: "";
    position: absolute;
    top:0;  left: 0;
    background-color: inherit;
    padding-bottom: 50%;
    width: 57.7%;
    transform-origin: 0 0;
    transform: rotate(-30deg) skewx(30deg);
  }

  .isosceles-triangle {
    display: inline-block;
    text-align: center;
    /* line-height: 50px; */
    text-decoration: none;
    animation: fall-triangle 1s forwards;
  }

  #isosceles-triangle-1 {
    position: absolute;
    top: -1520px;
    background: orange;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-2 {
    position: absolute;
    top: -1320px;
    background: gray;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-3 {
    position: absolute;
    top: -1120px;
    background: blue;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-4 {
    position: absolute;
    top: -920px;
    background: green;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #square-1 {
    position: absolute;
    top: -1720px;
    background: orange;
    z-index: 6;
  }

  #square-2 {
    position: absolute;
    top: -1520px;
    background: gray;
    z-index: 5;
  }

  #square-3 {
    position: absolute;
    top: -1320px;
    background: blue;
    z-index: 4;
  }

  #square-4 {
    position: absolute;
    top: -1120px;
    background: green;
    z-index: 3;
  }

  @media (max-width: 1024px) {

    .square {
      height: 200px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {

    .square {
      position: absolute;
      height: 200px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  #isosceles-triangle-1 {
    z-index: 6;
  }

  #isosceles-triangle-2 {
    z-index: 5;
  }

  #isosceles-triangle-3 {
    z-index: 4;
  }

  #isosceles-triangle-4 {
    z-index: 3;
  }

  @keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

</style>
```


- 三角同士の幅を広げた
- 最初は一番下のの三角以外は見えないようにして、何もなかったところに三角が降ってくるようにして強調
- 背景色と最後の三角の色を同じにして統一感を持たせた

## 自己紹介の３角アニメーションの作成

- 最初に自己紹介（自分の特徴を表すキーワード）付きの３角アニメーションを流す
- そのあとでさっき作った３角アニメーションが下へ押し流す

```vue
<template>
  <section id="intro-animation">
    <div id="triangles">
      <div class="intro-square" id="intro-square-1"></div>
      <div class="intro-triangle" id="intro-triangle-1">
        <p>怠惰？</p>
      </div>
      <div class="intro-square" id="intro-square-2"></div>
      <div class="intro-triangle" id="intro-triangle-2">
        <p>思想</p>
      </div>
      <div class="intro-square" id="intro-square-3"></div>
      <div class="intro-triangle" id="intro-triangle-3">
        <p>フロントエンド</p>
      </div>
      <div class="square" id="square-1"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-1"></div>
      <div class="square" id="square-2"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-2"></div>
      <div class="square" id="square-3"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-3"></div>
      <div class="square" id="square-4"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-4"></div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "IntroAnimation2"
    }
</script>

<style scoped>

  .intro-triangle p {
    text-align: center; width: 100%; height: 100%; position: absolute; top: 30%; left: 0; z-index: 1; font-size: 50px; color: white; font-weight: 800;
   }

  /*******************/
  /* 上 アニメーション */

  #intro-animation {
    height: 1280px;
    background-color: black;
  }

  #triangles {
    position: relative;
    height: 1200px;
    background-color: bisque;
    z-index: 2;
  }

  @media (min-width: 1024px) {
    #triangles {
      left: 10%;
      width: 80%;
    }
  }

  .square {
    margin: 0;
    animation: fall-triangle 1s 5s forwards;
  }

  .isosceles-triangle:after {
    content: "";
    position: absolute;
    top:0;  left: 0;
    background-color: inherit;
    padding-bottom: 50%;
    width: 57.7%;
    transform-origin: 0 0;
    transform: rotate(-30deg) skewx(30deg);
  }

  .isosceles-triangle {
    display: inline-block;
    text-align: center;
    /* line-height: 50px; */
    text-decoration: none;
    animation: fall-triangle 1s 5s forwards;
  }

  #isosceles-triangle-1 {
    position: absolute;
    top: -1520px;
    background: orange;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-2 {
    position: absolute;
    top: -1320px;
    background: gray;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-3 {
    position: absolute;
    top: -1120px;
    background: blue;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-4 {
    position: absolute;
    top: -920px;
    background: green;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #square-1 {
    position: absolute;
    top: -1720px;
    background: orange;
    z-index: 10;
  }

  #square-2 {
    position: absolute;
    top: -1520px;
    background: gray;
    z-index: 9;
  }

  #square-3 {
    position: absolute;
    top: -1320px;
    background: blue;
    z-index: 8;
  }

  #square-4 {
    position: absolute;
    top: -1120px;
    background: green;
    z-index: 7;
  }

  @media (max-width: 1024px) {

    .square {
      height: 200px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {

    .square {
      position: absolute;
      height: 200px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  #isosceles-triangle-1 {
    z-index: 10;
  }

  #isosceles-triangle-2 {
    z-index: 9;
  }

  #isosceles-triangle-3 {
    z-index: 8;
  }

  #isosceles-triangle-4 {
    z-index: 7;
  }

  @keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  /******************/
  /* 下アニメーション */
  /******************/

  @media (min-width: 1024px) {
    #intro-triangles {
      left: 10%;
      width: 80%;
    }
  }

  .intro-square {
    margin: 0;
  }

  .intro-triangle:after {
    content: "";
    position: absolute;
    top:0;  left: 0;
    background-color: inherit;
    padding-bottom: 50%;
    width: 57.7%;
    transform-origin: 0 0;
    transform: rotate(-30deg) skewx(30deg);
  }

  .intro-triangle {
    display: inline-block;
    text-align: center;
    /* line-height: 50px; */
    text-decoration: none;
  }

  #intro-triangle-1 {
    position: absolute;
    top: -1620px;
    background: orange;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-triangle 1s 3s forwards;
  }

  #intro-triangle-2 {
    position: absolute;
    top: -1620px;
    background: gray;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-triangle 1s 1.5s forwards;
  }

  #intro-triangle-3 {
    position: absolute;
    top: -1620px;
    background: blue;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-triangle 1s forwards;
  }

  #intro-square-1 {
    position: absolute;
    top: -1820px;
    background: orange;
    z-index: 6;
    animation: fall-triangle 1s 3s forwards;
  }

  #intro-square-2 {
    position: absolute;
    top: -1820px;
    background: gray;
    z-index: 5;
    animation: fall-triangle 1s 1.5s forwards;
  }

  #intro-square-3 {
    position: absolute;
    top: -1820px;
    background: blue;
    z-index: 4;
    animation: fall-triangle 1s forwards;
  }

  @media (max-width: 1024px) {

    .intro-square {
      height: 200px;
      width: 100%;
    }

    .intro-triangle {
      height: 50px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {

    .intro-square {
      position: absolute;
      height: 200px;
      width: 100%;
    }

    .intro-triangle {
      height: 50px;
      width: 100%;
    }
  }

  #intro-triangle-1 {
    z-index: 4;
  }

  #intro-triangle-2 {
    z-index: 3;
  }

  #intro-triangle-3 {
    z-index: 2;
  }

  @keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }
</style>
```


出来上がったのがこちらです。ちゃんといい感じで動いています！

<img src="intro_amine_6.gif" width="600" height="400">


## アニメーションが終わった後の遷移

さて、アニメーションは終わりました。しかし、メインは自分のポートフォリオページなので、終わったらそこに遷移させなければいけません。

https://monochrome-design.jp/blog/511 を参考に、cssアニメーションが終わった時にdisplay: noneを解除するようにします。

```vue
var el = document.querySelector('.square');

el.addEventListener('transitionend', function() {
    // transition終了時の処理
    alert('transitionend');
});
```
# css animationについて

## css animationの終了を検知したい
nuxtでcss animationを管理したかったが、今回はコードが出来上がっていたので普通のjsを使って終了を検知することにしました。

今度は、vueのやり方でcss animationやtransitionを実装したい
https://medium.com/vuejs-tips/css-only-v-show-fade-animation-6f7818fdff4
https://jp.vuejs.org/v2/guide/transitions.html

では、実装に行きます

```
```

## 解説１
Nuxt.jsでは普通にやるとdocumentやwindowにアクセスできないので、`if (process.browser) {` を使います（参考：https://note.mu/in_colors_net/n/n1a9bc57fe15d）

## 解説２


https://developer.mozilla.org/en-US/docs/Web/Events/animationend

animationName: しかし、これを使うとnuxtが作るidも含まれてしまう（例：fade-out paut;aifernfla;）ので、アニメーション名が含まれるanimationNameかどうかで場合分けする



（本当はwebkit系のwebkitAnimationEndなどを追加で検知できるようにしておくほうがいいのかもしれない。今回はとりあえずsafairとchromeで試して問題なかったのでこれで良しとする。参考：https://stackoverflow.com/questions/12250329/transitionend-event-not-firing）


## stateを変更して、stateに応じて

## stateはいつまで生きる？
- リロード時にはリセットされてしまう



## 最終的なコード

~/components/IntroAnimation2.vue

```vue
<template>
  <section id="intro-animation">
    <div id="triangles">
      <div class="intro-square" id="intro-square-1"></div>
      <div class="intro-triangle" id="intro-triangle-1">
        <p>怠惰？</p>
      </div>
      <div class="intro-square" id="intro-square-2"></div>
      <div class="intro-triangle" id="intro-triangle-2">
        <p>思想</p>
      </div>
      <div class="intro-square" id="intro-square-3"></div>
      <div class="intro-triangle" id="intro-triangle-3">
        <p>フロントエンド</p>
      </div>
      <div class="square" id="square-1"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-1"></div>
      <div class="square" id="square-2"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-2"></div>
      <div class="square" id="square-3"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-3"></div>
      <div class="square" id="square-4"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-4"></div>
    </div>
  </section>
</template>

<script>
    export default {
        created(context){
          const parent = this;
          if (process.browser) {
            var el = document.querySelector('#intro-animation');
            if(el !== null) {
              el.addEventListener('animationend', function (event) {
                // animation終了時の処理
                // isIntroAnimationEnd
                if (event.animationName.indexOf('fade-out') != -1) {
                  parent.$store.commit('setIntroAnimationEnd')
                }
              });
            }
          }
        },
        name: "IntroAnimation2",
    }
</script>

<style scoped>

  .intro-triangle p {
    text-align: center; width: 100%; height: 100%; position: absolute; top: 30%; left: 0; z-index: 1; font-size: 50px; color: white; font-weight: 800;
   }

  /*******************/
  /* 上 アニメーション */

  #intro-animation {
    height: 1280px;
    background-color: black;
  }

  #triangles {
    position: relative;
    height: 1200px;
    background-color: bisque;
    z-index: 2;
  }

  @media (min-width: 1024px) {
    #triangles {
      left: 10%;
      width: 80%;
    }
  }

  .square {
    margin: 0;
    animation: fall-triangle 1s 5s forwards;
  }

  .isosceles-triangle:after {
    content: "";
    position: absolute;
    top:0;  left: 0;
    background-color: inherit;
    padding-bottom: 50%;
    width: 57.7%;
    transform-origin: 0 0;
    transform: rotate(-30deg) skewx(30deg);
  }

  .isosceles-triangle {
    display: inline-block;
    text-align: center;
    /* line-height: 50px; */
    text-decoration: none;
    animation: fall-triangle 1s 5s forwards;
  }

  #isosceles-triangle-1 {
    position: absolute;
    top: -1520px;
    background: orange;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-2 {
    position: absolute;
    top: -1320px;
    background: gray;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-3 {
    position: absolute;
    top: -1120px;
    background: blue;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-4 {
    position: absolute;
    top: -920px;
    background: green;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #square-1 {
    position: absolute;
    top: -1720px;
    background: orange;
    z-index: 10;
  }

  #square-2 {
    position: absolute;
    top: -1520px;
    background: gray;
    z-index: 9;
  }

  #square-3 {
    position: absolute;
    top: -1320px;
    background: blue;
    z-index: 8;
  }

  #square-4 {
    position: absolute;
    top: -1120px;
    background: green;
    z-index: 7;
  }

  @media (max-width: 1024px) {

    .square {
      height: 200px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {

    .square {
      position: absolute;
      height: 200px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  #isosceles-triangle-1 {
    z-index: 10;
  }

  #isosceles-triangle-2 {
    z-index: 9;
  }

  #isosceles-triangle-3 {
    z-index: 8;
  }

  #isosceles-triangle-4 {
    z-index: 7;
  }

  @keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  /******************/
  /* 下アニメーション */
  /******************/

  @media (min-width: 1024px) {
    #intro-triangles {
      left: 10%;
      width: 80%;
    }
  }

  .intro-square {
    margin: 0;
  }

  .intro-triangle:after {
    content: "";
    position: absolute;
    top:0;  left: 0;
    background-color: inherit;
    padding-bottom: 50%;
    width: 57.7%;
    transform-origin: 0 0;
    transform: rotate(-30deg) skewx(30deg);
  }

  .intro-triangle {
    display: inline-block;
    text-align: center;
    /* line-height: 50px; */
    text-decoration: none;
  }

  #intro-triangle-1 {
    position: absolute;
    top: -1620px;
    background: orange;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-triangle 1s 3s forwards;
  }

  #intro-triangle-2 {
    position: absolute;
    top: -1620px;
    background: gray;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-triangle 1s 1.5s forwards;
  }

  #intro-triangle-3 {
    position: absolute;
    top: -1620px;
    background: blue;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-triangle 1s forwards;
  }

  #intro-square-1 {
    position: absolute;
    top: -1820px;
    background: orange;
    z-index: 6;
    animation: fall-triangle 1s 3s forwards;
  }

  #intro-square-2 {
    position: absolute;
    top: -1820px;
    background: gray;
    z-index: 5;
    animation: fall-triangle 1s 1.5s forwards;
  }

  #intro-square-3 {
    position: absolute;
    top: -1820px;
    background: blue;
    z-index: 4;
    animation: fall-triangle 1s forwards;
  }

  @media (max-width: 1024px) {

    .intro-square {
      height: 200px;
      width: 100%;
    }

    .intro-triangle {
      height: 50px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {

    .intro-square {
      position: absolute;
      height: 200px;
      width: 100%;
    }

    .intro-triangle {
      height: 50px;
      width: 100%;
    }
  }

  #intro-triangle-1 {
    z-index: 4;
  }

  #intro-triangle-2 {
    z-index: 3;
  }

  #intro-triangle-3 {
    z-index: 2;
  }

  @keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  /* 終了時のアニメーション */
  #intro-animation {
    animation: fade-out 1s 7s forwards;
  }

  @keyframes fade-out {
    0% { opacity: 1;}
    100% { opacity: 0;}
  }

  @-webkit-keyframes fade-out {
    0% { opacity: 1;}
    100% { opacity: 0;}
  }

</style>

```

~/store/index.js
```js

import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
   isIntroAnimationEnd : false
  },
  mutations: {
   setIntroAnimationEnd  (state) {
      state.isIntroAnimationEnd = true
    }
  }
})

export default store
```

~/pages/index.vue

```vue
<template>
  <div id="wrap" class="sideA">
    <Header/>
    <IntroAnimation2 v-if="!this.$store.state.isIntroAnimationEnd"/>
    <div id="after-animation" v-if="this.$store.state.isIntroAnimationEnd">
      <article>
        <Top/>
        <News/>
        <Story/>
        <!-- TODO: 頑張ってキャラクターのとこ作る
        <Character/>
        -->
        <Keyword/>
      </article>
    </div>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'
import Story from Profile.vue
import Character from "../components/Character";
import Keyword from "../components/Keyword";
import IntroAnimation2 from "../components/IntroAnimation2";

export default {
  components: {
    Keyword,
    Header,
    Top,
    News,
    Story,
    Character,
    IntroAnimation2,
  }
}
</script>

<style>
  #wrap {
    width: 100%;
    height: 100%;
  }

  #intro-animation-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
  }
  #intro-animation {
    vertical-align: middle;
  }
</style>
```

## スタイルの追加
最後に、色合いをちょっと変えてみます。今は原色を使っていてちょっとダサいので。

## できたもの
最終的にできたアニメーションがこちらです。

<img src="intro_anime_7.gif" width="600" height="400">


## そのうちやりたい
弾むアニメーションとかをつけたいです

https://takuo4649design.com/codetank/code/161130/11533-764956-20180929.php

