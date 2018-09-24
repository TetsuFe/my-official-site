<template>
  <section id="story">
    <div class="title-wrap">
      <!--<img src="img/story/sideA/title.png" sizes="(min-width:472px) 50vw, 100vw" srcset="img/story/sideA/title.png 200w, img/story/sideA/title@2x.png 400w" width="236">-->
      <p>ストーリー</p>
      <h3>Story</h3>
      <AppLogo/>
    </div>
    <div id="story-wrap">
      <div class="story">
        大学院修士１年の夏の終わりを迎え、自分の身につけたい技術が「フロントエンド＆モバイル技術とサービス開発手法」だと気づきました。
        とは言っても、特にjsは初めてまだ一ヶ月になったばかり。まずはこの技術を伸ばしたい。
        そう思い立って、自分のポートフォリオサイトを、Nuxt.jsで書き直してみました。
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo,
    },
    name: "Story"
  }
</script>

<style scoped>

  .title-wrap{
    text-align: center;
  }

  #story-wrap .story {
    width: 80%;
    margin: 0 auto;
  }


  #wrap.sideB .title-wrap h3 {
    font-size: 24px;
  }

  #wrap.sideB .title-wrap p {
    font-size: 10px;
  }

  #wrap.sideB .title-wrap {
    margin-bottom: 40px;
  }

  #wrap.sideA .title-wrap h3 {
    width: 224px;
    color: #0082f2!important;
    font-family: Arvo;
    font-weight: 700;
    font-size: 25px;
    line-height: 1.8;
    letter-spacing: 7px;
    text-align: center;
    padding-left: 7px;
    margin: 0 auto 80px;
    border-bottom: 4px solid #0082f2;
  }

  #wrap.sideA .title-wrap p {
    color: #0082f2!important;
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 6px;
    text-align: center;
    padding-left: 6px;
  }

  #wrap.sideA .title-wrap h3 {
    color: #50aa32!important;
    border-bottom: 4px solid #50aa32;
  }

  #wrap.sideA .title-wrap p {
    color: #50aa32!important;
  }

  #wrap.sideA .title-wrap h3 {
    width: 180px;
    font-size: 21px;
    letter-spacing: 6px;
    padding-left: 6px;
    margin: 0 auto 56px;
  }

  #wrap.sideA .title-wrap p {
    font-size: 10px;
    padding-left: 6px;
  }

  #wrap.sideB .title-wrap {
    position: relative;
    width: 320px;
  }

  #wrap.sideB .title-wrap h3 {
    color: #f20000;
    font-family: Roboto Condensed;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.2;
    letter-spacing: 5px;
  }

  #wrap.sideB .title-wrap p{
    font-size: 12px;
    letter-spacing: 4px;
    padding-left: 1px;
  }

  #wrap.sideB .title-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    margin: 180px 0 150px;
  }

  #wrap.sideA .title-wrap {
    margin-top: 14px;
  }

</style>
