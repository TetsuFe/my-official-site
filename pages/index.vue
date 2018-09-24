<template>
  <div id="wrap" class="sideA">
    <Header/>
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
</template>

<script>

import Header from '~/components/Header.vue'
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'
import Story from '~/components/Story.vue'
import Character from "../components/Character";
import Keyword from "../components/Keyword";

export default {
  components: {
    Keyword,
    Header,
    Top,
    News,
    Story,
    Character,
  }
}
</script>

<style>
</style>

