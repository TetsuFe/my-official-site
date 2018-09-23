<template>
  <div id="body">
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

