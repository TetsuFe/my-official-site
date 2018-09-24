<template>
  <div id="wrap" class="sideA">
    <header>
      <Header/>
    </header>
    <article>
      <Top/>
      <News/>
      <Story/>
    </article>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'
import Story from '~/components/Story.vue'

export default {
  components: {
    Header,
    Top,
    News,
    Story,
  }
}
</script>

<style>
</style>

