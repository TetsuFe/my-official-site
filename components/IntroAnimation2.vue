<template>
  <section id="intro-animation">
    <div id="triangles">
      <div class="intro-square" id="intro-square-1"></div>
      <div class="intro-triangle" id="intro-triangle-1">
        <p>怠惰？</p>
      </div>
      <div class="intro-square" id="intro-square-2"></div>
      <div class="intro-triangle" id="intro-triangle-2">
        <p>思想</p>
      </div>
      <div class="intro-square" id="intro-square-3"></div>
      <div class="intro-triangle" id="intro-triangle-3">
        <p>フロントエンド</p>
      </div>
      <div class="square" id="square-1"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-1"></div>
      <div class="square" id="square-2"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-2"></div>
      <div class="square" id="square-3"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-3"></div>
      <div class="square" id="square-4"></div>
      <div class="isosceles-triangle" id="isosceles-triangle-4"></div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "IntroAnimation2"
    }
</script>

<style scoped>

  .intro-triangle p {
    text-align: center; width: 100%; height: 100%; position: absolute; top: 30%; left: 0; z-index: 1; font-size: 50px; color: white; font-weight: 800;
   }

  /*******************/
  /* 上 アニメーション */

  #intro-animation {
    height: 1280px;
    background-color: black;
  }

  #triangles {
    position: relative;
    height: 1200px;
    background-color: bisque;
    z-index: 2;
  }

  @media (min-width: 1024px) {
    #triangles {
      left: 10%;
      width: 80%;
    }
  }

  .square {
    margin: 0;
    animation: fall-triangle 1s 5s forwards;
  }

  .isosceles-triangle:after {
    content: "";
    position: absolute;
    top:0;  left: 0;
    background-color: inherit;
    padding-bottom: 50%;
    width: 57.7%;
    transform-origin: 0 0;
    transform: rotate(-30deg) skewx(30deg);
  }

  .isosceles-triangle {
    display: inline-block;
    text-align: center;
    /* line-height: 50px; */
    text-decoration: none;
    animation: fall-triangle 1s 5s forwards;
  }

  #isosceles-triangle-1 {
    position: absolute;
    top: -1520px;
    background: orange;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-2 {
    position: absolute;
    top: -1320px;
    background: gray;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-3 {
    position: absolute;
    top: -1120px;
    background: blue;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-4 {
    position: absolute;
    top: -920px;
    background: green;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #square-1 {
    position: absolute;
    top: -1720px;
    background: orange;
    z-index: 10;
  }

  #square-2 {
    position: absolute;
    top: -1520px;
    background: gray;
    z-index: 9;
  }

  #square-3 {
    position: absolute;
    top: -1320px;
    background: blue;
    z-index: 8;
  }

  #square-4 {
    position: absolute;
    top: -1120px;
    background: green;
    z-index: 7;
  }

  @media (max-width: 1024px) {

    .square {
      height: 200px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {

    .square {
      position: absolute;
      height: 200px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  #isosceles-triangle-1 {
    z-index: 10;
  }

  #isosceles-triangle-2 {
    z-index: 9;
  }

  #isosceles-triangle-3 {
    z-index: 8;
  }

  #isosceles-triangle-4 {
    z-index: 7;
  }

  @keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  /******************/
  /* 下アニメーション */
  /******************/

  @media (min-width: 1024px) {
    #intro-triangles {
      left: 10%;
      width: 80%;
    }
  }

  .intro-square {
    margin: 0;
  }

  .intro-triangle:after {
    content: "";
    position: absolute;
    top:0;  left: 0;
    background-color: inherit;
    padding-bottom: 50%;
    width: 57.7%;
    transform-origin: 0 0;
    transform: rotate(-30deg) skewx(30deg);
  }

  .intro-triangle {
    display: inline-block;
    text-align: center;
    /* line-height: 50px; */
    text-decoration: none;
  }

  #intro-triangle-1 {
    position: absolute;
    top: -1620px;
    background: orange;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-triangle 1s 3s forwards;
  }

  #intro-triangle-2 {
    position: absolute;
    top: -1620px;
    background: gray;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-triangle 1s 1.5s forwards;
  }

  #intro-triangle-3 {
    position: absolute;
    top: -1620px;
    background: blue;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-triangle 1s forwards;
  }

  #intro-square-1 {
    position: absolute;
    top: -1820px;
    background: orange;
    z-index: 6;
    animation: fall-triangle 1s 3s forwards;
  }

  #intro-square-2 {
    position: absolute;
    top: -1820px;
    background: gray;
    z-index: 5;
    animation: fall-triangle 1s 1.5s forwards;
  }

  #intro-square-3 {
    position: absolute;
    top: -1820px;
    background: blue;
    z-index: 4;
    animation: fall-triangle 1s forwards;
  }

  @media (max-width: 1024px) {

    .intro-square {
      height: 200px;
      width: 100%;
    }

    .intro-triangle {
      height: 50px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {

    .intro-square {
      position: absolute;
      height: 200px;
      width: 100%;
    }

    .intro-triangle {
      height: 50px;
      width: 100%;
    }
  }

  #intro-triangle-1 {
    z-index: 4;
  }

  #intro-triangle-2 {
    z-index: 3;
  }

  #intro-triangle-3 {
    z-index: 2;
  }

  @keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }
</style>
