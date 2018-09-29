# cssアニメーションを書いてみるpart1

## 角丸のテキスト要素を書いてみる

~/components/IntroAnimation.vue

```vue
<template>
  <div id="intro-bar-1">教育</div>
</template>

<script>
  export default {
    name: "IntroAnimation"
  }
</script>

<style scoped>
  #intro-bar-1 {
    border: solid #767b85;
    border-radius: 20px;
    height: 40px;
    width: 25%;
    text-align: center;
    display: inline-block;
    line-height: 32px;
  }
</style>
```

とりあえずこんな感じです

<img src="intro_amine_1.png" width="600" height="400">


## 回転させてみる


回転したい要素に対して、cssをつけます。

以下の例では、rotate-bar という名前のアニメーション関数（自分で定義）を実行してます

アニメーションの定義方法

```css
    animation: rotate-bar 5s;
```

このように書くと、rotate-bartというアニメーションを5sかかって再生するということになります。

**この設定だと、アニメーションが終わった後に、要素の状態（大きさ、位置など）は元に戻ってしまいます。**

元に戻したくない場合は、forwordsを最後につけましょう。

```css
    animation: rotate-bar 5s forwards;
```

肝心のアニメーション自体の定義ですが、transformなどを使います。これは普通にcssです。
例えば、先ほどの呼び出し時に指定した5sの50%分がすぎたタイミングで5度の位置になるようにアニメーションした後、
100％のタイミング（つまり5sのタイミング）で、0度の位置にいくようなアニメーションをするということになります。

このように、「どのタイミングでどんな状態か」を指定するだけで、勝手にアニメーションしてくれます！

注意点は、rotateは今の位置からではなく、デフォルトの位置からの回転角であるということです。

例えば、すでにデフォルトの位置から90度傾けていたとしても、アニメーションでrotate(90deg)しても、さらに90度動くということはありません。

```css
@keyframes rotate-bar {
	0%   { transform: rotate(-90deg);}
	50% { transform: rotate(5deg);}
	100% { transform: rotate(0deg);}
}
```

```vue
<style scoped>
  #intro-bar-1 {
    border: solid #767b85;
    border-radius: 20px;
    height: 40px;
    width: 25%;
    text-align: center;
    display: inline-block;
    line-height: 32px;
    -webkit-animation: rotate-bar 5s;
    animation: rotate-bar 5s;
    transform-origin:left 50%
  }

  /***
  keyframes
  ***/
  @-webkit-keyframes rotate-bar {
    0%   { transform: rotate(-90deg);}
    50% { transform: rotate(5deg);}
    100% { transform: rotate(0deg);}
  }

  @keyframes rotate-bar {
    0%   { transform: rotate(-90deg);}
    50% { transform: rotate(5deg);}
    100% { transform: rotate(0deg);}
  }
</style>
```

とりあえず、回転に成功しました

## ３つに複製する
```vue
<template>
  <section id="intro-bars">
    <div id="intro-bar-1" class="intro-bar">教育</div>
    <div id="intro-bar-2" class="intro-bar">プログラミング</div>
    <div id="intro-bar-3" class="intro-bar">怠惰</div>
  </section>
</template>

<script>
  export default {
    name: "IntroAnimation"
  }
</script>

<style scoped>
  #intro-bars {
    transform-origin:left top;
    -webkit-animation: rotate-bar 3s 1s;
    animation: rotate-bar 3s 1s;
    position: relative;
    /*transform-origin:left 50%*/
  }

  #intro-bar-1 {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin:left top;
    transform: rotate(-90deg);
  }
  #intro-bar-2 {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin:left top;
    transform: rotate(-180deg);
  }
  #intro-bar-3 {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin:left top;
    transform: rotate(-270deg);
  }

  .intro-bar {
    border: solid #767b85;
    border-radius: 20px;
    height: 40px;
    width: 25%;
    text-align: center;
    display: inline-block;
    line-height: 32px;
  }

  #intro-bar-1 {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-90deg);
  }
  #intro-bar-2 {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-180deg);
  }
  #intro-bar-3 {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-270deg);
  }

  .intro-bar {
    border: solid #767b85;
    border-radius: 20px;
    height: 40px;
    width: 25%;
    text-align: center;
    display: inline-block;
    line-height: 32px;
  }

  /***
  keyframes
  ***/
  @-webkit-keyframes rotate-bar {
    0%   { transform: rotate(0deg);}
    20% { transform: rotate(95deg);}
    30% { transform: rotate(90deg);}
    50% { transform: rotate(185deg);}
    60% { transform: rotate(180deg);}
    80% { transform: rotate(275deg);}
    90% { transform: rotate(270deg);}
    100% { transform: rotate(270deg);}
  }

  @keyframes rotate-bar {
    0%   { transform: rotate(0deg);}
    20% { transform: rotate(95deg);}
    30% { transform: rotate(90deg);}
    50% { transform: rotate(185deg);}
    60% { transform: rotate(180deg);}
    80% { transform: rotate(275deg);}
    90% { transform: rotate(270deg);}
    100% { transform: rotate(270deg);}
  }
</style>
```


３つのバーをまとめたsectionを回転させ、順番にバーを表示させるようにしました。

３つのバーはposition: absoluteでsectionの左上を原点にするようにして、原点の周りに３本あるように配置しました

アニメーションを動かす際は、キャッシュを適度に削除しないとおかしな動きになることがあるのでこまめにキャッシュを削除しましょう

とはいえ、この状態では、

- 軸がバラバラ
- アニメーションが終わったら元の位置に戻るアニメーションが余分

など、問題があります

## 位置とアニメーションの調整

- 全体を一気に動かすのではなく、一本一本の棒を時間差で動かすように変更
- forwards: アニメーションが終わったら、その位置で要素を止める
- 妥協点: 本当は軸と棒を離したかったが、それほど他人が見て変わるものでもないので軸と棒がくっついてもよいこととした
  - 回転の原点とposition: absoluteでの要素の原点の位置の兼ね合いが難しかったため

```vue
<template>
  <section id="intro-bars">
    <div id="intro-axis"></div>
    <div id="intro-bar-1" class="intro-bar">教育</div>
    <div id="intro-bar-2" class="intro-bar">プログラミング</div>
    <div id="intro-bar-3" class="intro-bar">怠惰</div>
  </section>
</template>

<script>
  export default {
    name: "IntroAnimation"
  }
</script>

<style scoped>
  #intro-bars {
    position: relative;
    top: 10px;
    left: 10px;
    transform-origin: 20px 100px;
  }

  #intro-axis {
    position: absolute;
    top: 90px;
    left: 10px;
    border: solid #767b85;
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }

  #intro-bar-1 {
    position: absolute;
    transform-origin: 20px 20px;
    transform: rotate(-180deg);
    -webkit-animation: rotate-bar-1 0.4s 1s forwards;
    animation: rotate-bar-1 0.4s 1s forwards;
  }
  #intro-bar-2 {
    position: absolute;
    transform-origin: 20px 20px;
    transform: rotate(-180deg);
    -webkit-animation: rotate-bar-2 0.4s 1.5s forwards;
    animation: rotate-bar-2 0.4s 1.5s forwards;
  }
  #intro-bar-3 {
    position: absolute;
    transform-origin: 20px 20px;
    transform: rotate(-180deg);
    -webkit-animation: rotate-bar-3 0.4s 2.0s forwards;
    animation: rotate-bar-3 0.4s 2.0s forwards;
  }

  .intro-bar {
    border: solid #767b85;
    border-radius: 20px;
    height: 40px;
    width: 25%;
    text-align: center;
    display: inline-block;
    line-height: 32px;
  }

  /***
  keyframes
  ***/
  @-webkit-keyframes rotate-bar-1 {
    0%   { transform: rotate(-90deg);}
    50% { transform: rotate(5deg);}
    60% { transform: rotate(0deg);}
    90% { transform: rotate(0deg);}
    100% { transform: rotate(180deg);}
  }

  @-webkit-keyframes rotate-bar-2 {
    0%   { transform: rotate(-90deg);}
    50% { transform: rotate(5deg);}
    60% { transform: rotate(0deg);}
    90% { transform: rotate(0deg);}
    100% { transform: rotate(180deg);}
  }

  @-webkit-keyframes rotate-bar-3 {
    0%   { transform: rotate(-90deg);}
    50% { transform: rotate(5deg);}
    60% { transform: rotate(0deg);}
    90% { transform: rotate(0deg);}
    100% { transform: rotate(0deg);}
  }
</style>
```

完成したアニメーションは以下のようになりました。

<video src="intro_anime_2.mov">
  <p>動画を再生するにはvideoタグをサポートしたブラウザが必要です。</p>
</video>

ここから、以下をやっていきます

- アニメーション専用画面の作成 -> メイン画面への遷移
- スタイルの変更


