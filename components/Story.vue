<template>
  <section id="story">
    <div class="title-wrap">
      <!--<img src="img/story/sideA/title.png" sizes="(min-width:472px) 50vw, 100vw" srcset="img/story/sideA/title.png 200w, img/story/sideA/title@2x.png 400w" width="236">-->
      <p>ストーリー</p>
      <h3>Story</h3>
      <HalloweenAppLogo v-if="isHalloweenStyle"/>
      <AppLogo v-else/>
    </div>
    <div id="story-wrap">
      <div class="story">
        大学院修士１年の夏の終わりを迎え、自分の身につけたい技術が「フロントエンド＆モバイル技術とサービス開発手法」だと気づきました。
        とは言っても、特にjsは初めてまだ一ヶ月になったばかり。まずはこの技術を伸ばしたい。
        そう思い立って、自分のポートフォリオサイトを、Nuxt.jsで書き直してみました。
        <br/>
        追記：修士２年の初夏を迎え、サーバーサイドエンジニアとして恵比寿の11Fにある企業に内定しました（フロントエンドは個人開発である程度伸ばせるため）
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import HalloweenAppLogo from '~/components/HalloweenAppLogo.vue'

  export default {
    components: {
      AppLogo,
      HalloweenAppLogo,
    },
    computed: {
      isHalloweenStyle () { return this.$store.state.isHalloweenStyle }
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

  #story-wrap .story {
    margin-top: 40px;
    font-size: 20px;
    line-height: 28px;
    font-weight: 800;
  }

  #wrap.sideA #story-wrap .story{
    color: #767b85;
  }

  #wrap.sideB #story-wrap .story{
    color: #363b55;
  }

  .title-wrap h3 {
    width: 224px;
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

  .title-wrap p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 6px;
    text-align: center;
    padding-left: 6px;
  }

  .title-wrap h3 {
    width: 180px;
    font-size: 21px;
    letter-spacing: 6px;
    padding-left: 6px;
    margin: 0 auto 56px;
  }

  .title-wrap p {
    font-size: 10px;
    padding-left: 6px;
  }

  #wrap.sideA .title-wrap h3 {
    color: #50aa32!important;
    border-bottom: 4px solid #50aa32;
  }

  #wrap.sideA .title-wrap p {
    color: #50aa32!important;
  }

  #wrap.sideB .title-wrap p {
    color: black!important;
  }

  #wrap.sideB .title-wrap h3 {
    color: black!important;
    border-bottom: 4px solid #ffe800;
  }


  .title-wrap {
    margin-top: 14px;
  }

</style>
