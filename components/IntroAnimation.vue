<template>
  <section id="intro-bars">
    <div id="intro-bar-1" class="intro-bar">教育</div>
    <div id="intro-bar-2" class="intro-bar">プログラミング</div>
    <div id="intro-bar-3" class="intro-bar">怠惰</div>
  </section>
</template>

<script>
  export default {
    name: "IntroAnimation"
  }
</script>

<style scoped>
  #intro-bars {
    transform-origin:left top;
    -webkit-animation: rotate-bar 3s 1s;
    animation: rotate-bar 3s 1s;
    position: relative;
    /*transform-origin:left 50%*/
  }

  #intro-bar-1 {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin:left top;
    transform: rotate(-90deg);
  }
  #intro-bar-2 {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin:left top;
    transform: rotate(-180deg);
  }
  #intro-bar-3 {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin:left top;
    transform: rotate(-270deg);
  }

  .intro-bar {
    border: solid #767b85;
    border-radius: 20px;
    height: 40px;
    width: 25%;
    text-align: center;
    display: inline-block;
    line-height: 32px;
  }

  #intro-bar-1 {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-90deg);
  }
  #intro-bar-2 {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-180deg);
  }
  #intro-bar-3 {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-270deg);
  }

  .intro-bar {
    border: solid #767b85;
    border-radius: 20px;
    height: 40px;
    width: 25%;
    text-align: center;
    display: inline-block;
    line-height: 32px;
  }

  /***
  keyframes
  ***/
  @-webkit-keyframes rotate-bar {
    0%   { transform: rotate(0deg);}
    20% { transform: rotate(95deg);}
    30% { transform: rotate(90deg);}
    50% { transform: rotate(185deg);}
    60% { transform: rotate(180deg);}
    80% { transform: rotate(275deg);}
    90% { transform: rotate(270deg);}
    100% { transform: rotate(270deg);}
  }

  @keyframes rotate-bar {
    0%   { transform: rotate(0deg);}
    20% { transform: rotate(95deg);}
    30% { transform: rotate(90deg);}
    50% { transform: rotate(185deg);}
    60% { transform: rotate(180deg);}
    80% { transform: rotate(275deg);}
    90% { transform: rotate(270deg);}
    100% { transform: rotate(270deg);}
  }
</style>
