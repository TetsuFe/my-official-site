<template>
  <div id="wrap" class="sideA">
    <Header/>
    <IntroAnimation2/>
    <!--
    <div id="intro-animation-wrap">
      <IntroAnimation id="intro-animation"/>
    </div>
    -->
    <div id="after-animation">
      <article>
        <Top/>
        <IntroAnimation/>
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
import Story from '~/components/Story.vue'
import Character from "../components/Character";
import Keyword from "../components/Keyword";
import IntroAnimation from "../components/IntroAnimation";
import IntroAnimation2 from "../components/IntroAnimation2";

export default {
  components: {
    Keyword,
    Header,
    Top,
    News,
    Story,
    Character,
    IntroAnimation,
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
  #after-animation {
    display: none;
  }
</style>

