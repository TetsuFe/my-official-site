<template>
  <div id="wrap" v-bind:class="isHalloweenStyle ? 'sideB' : 'sideA'">
    <Header/>
    <main style="margin-top:80px">
      <div class="title-wrap">
        <p>スキル</p>
        <h3>Skills</h3>
      </div>
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
    computed: {
      isHalloweenStyle () { return this.$store.state.isHalloweenStyle }
    },
    name: "skill"
  }
</script>

<style scoped>

  .title-wrap {
    text-align: center;
    padding-top: 60px;
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
  }

  .title-wrap p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 6px;
    text-align: center;
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
