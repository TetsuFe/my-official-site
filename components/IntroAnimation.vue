<template>
  <section id="intro-bars">
    <div id="intro-axis"></div>
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
    position: relative;
    top: 10px;
    left: 10px;
    transform-origin: 20px 100px;
  }

  #intro-axis {
    position: absolute;
    top: 90px;
    left: 10px;
    border: solid #767b85;
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }

  #intro-bar-1 {
    position: absolute;
    transform-origin: 20px 20px;
    transform: rotate(-180deg);
    -webkit-animation: rotate-bar-1 0.4s 1s forwards;
    animation: rotate-bar-1 0.4s 1s forwards;
  }
  #intro-bar-2 {
    position: absolute;
    transform-origin: 20px 20px;
    transform: rotate(-180deg);
    -webkit-animation: rotate-bar-2 0.4s 1.5s forwards;
    animation: rotate-bar-2 0.4s 1.5s forwards;
  }
  #intro-bar-3 {
    position: absolute;
    transform-origin: 20px 20px;
    transform: rotate(-180deg);
    -webkit-animation: rotate-bar-3 0.4s 2.0s forwards;
    animation: rotate-bar-3 0.4s 2.0s forwards;
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
  @-webkit-keyframes rotate-bar-1 {
    0%   { transform: rotate(-90deg);}
    50% { transform: rotate(5deg);}
    60% { transform: rotate(0deg);}
    90% { transform: rotate(0deg);}
    100% { transform: rotate(180deg);}
  }

  @-webkit-keyframes rotate-bar-2 {
    0%   { transform: rotate(-90deg);}
    50% { transform: rotate(5deg);}
    60% { transform: rotate(0deg);}
    90% { transform: rotate(0deg);}
    100% { transform: rotate(180deg);}
  }

  @-webkit-keyframes rotate-bar-3 {
    0%   { transform: rotate(-90deg);}
    50% { transform: rotate(5deg);}
    60% { transform: rotate(0deg);}
    90% { transform: rotate(0deg);}
    100% { transform: rotate(0deg);}
  }
</style>
