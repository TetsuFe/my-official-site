<template>
  <section id="story">
    <div class="title-wrap">
      <!--<img src="img/story/sideA/title.png" sizes="(min-width:472px) 50vw, 100vw" srcset="img/story/sideA/title.png 200w, img/story/sideA/title@2x.png 400w" width="236">-->
      <h2>ストーリー</h2>
      <h3>story</h3>
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

</style>
