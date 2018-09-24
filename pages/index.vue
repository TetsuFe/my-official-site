<template>
  <div id="wrap" class="sideA">
    <header>
      <Header/>
    </header>
    <article>
      <Top/>
      <News/>
    </article>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'
import Top from '~/components/Top.vue'
import News from '~/components/News.vue'

export default {
  components: {
    Header,
    Top,
    News,
  }
}
</script>

<style>
</style>

