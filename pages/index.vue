<template>
  <div id="wrap" v-bind:class="isHalloweenStyle ? 'sideB' : 'sideA'">
    <Header/>
    <div id="after-animation">
      <article>
        <Top/>
        <Profile/>
        <SkillSection/>
        <!-- TODO: 頑張ってキャラクターのとこ作る
        <Character/>
        -->
        <Keyword/>
        <Links/>
      </article>
    </div>
    <Footer/>
  </div>
</template>

<script>

  import Header from '~/components/Header.vue'
  import Top from '~/components/Top.vue'
  import SkillSection from '~/components/SkillSection.vue'
  import Profile from '~/components/Profile.vue'
  import Keyword from "../components/Keyword";
  import Footer from "../components/Footer";
  import Links from "../components/Links";

  export default {
    components: {
      Links,
      Keyword,
      Header,
      Top,
      SkillSection,
      Profile,
      Footer,
    },
    computed: {
      isHalloweenStyle () { return this.$store.state.isHalloweenStyle },
    },
  }
</script>

<style>
  #wrap {
    width: 100%;
    height: 100%;
  }

  #wrap.sideB {
    background-color: #fa7f12;
  }
</style>
