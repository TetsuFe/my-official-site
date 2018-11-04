<template>
  <div id="wrap" v-bind:class="isHalloweenStyle ? 'sideB' : 'sideA'">
    <Header/>
    <main style="margin-top:80px">
      <SkillList/>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import SkillList from '~/components/SkillList';
  import Header from '~/components/Header';
  import Footer from '~/components/Footer';
  export default {
    components: {
      SkillList,
      Header,
      Footer,
    },
    name: "skill"
  }
</script>

<style scoped>
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
