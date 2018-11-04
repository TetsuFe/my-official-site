<template>
  <div id="wrap" v-bind:class="isHalloweenStyle ? 'sideB' : 'sideA'">
    <Header/>
    <IntroAnimation2 v-if="!isAnimationEnd"/>
    <div id="after-animation" v-else>
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
    <Footer/>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'
import Story from '~/components/Story.vue'
import Character from "../components/Character";
import Keyword from "../components/Keyword";
import IntroAnimation2 from "../components/IntroAnimation2";
import Footer from "../components/Footer";

export default {
  components: {
    Keyword,
    Header,
    Top,
    News,
    Story,
    Character,
    IntroAnimation2,
    Footer,
  },
  computed: {
    isHalloweenStyle () { return this.$store.state.isHalloweenStyle },
    isAnimationEnd(){ return this.$store.state.isIntroAnimationEnd }
  },
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

  #wrap.sideB {
    background-color: #fa7f12;
  }
</style>

