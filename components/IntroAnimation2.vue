<template>
  <section id="intro-animation">
    <div id="triangles">
      <div class="intro-square" id="intro-square-1"></div>
      <div class="intro-triangle" id="intro-triangle-1">
        <p>怠惰？</p>
      </div>
      <div class="intro-square" id="intro-square-2"></div>
      <div class="intro-triangle" id="intro-triangle-2">
        <p>育成</p>
      </div>
      <div class="intro-square" id="intro-square-3"></div>
      <div class="intro-triangle" id="intro-triangle-3">
        <p>Webサービス</p>
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
        created(context){
          const parent = this;
          if (process.browser) {
            var el = document.querySelector('#intro-animation');
            if(el !== null) {
              el.addEventListener('animationend', function (event) {
                // animation終了時の処理
                // isIntroAnimationEnd
                if (event.animationName.indexOf('fade-out') != -1) {
                  parent.$store.commit('setIntroAnimationEnd')
                }
              });
            }
          }
        },
        name: "IntroAnimation2",
    }
</script>

<style scoped>

  @media (max-width: 1024px) {
    .intro-triangle p {
      text-align: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0%;
      left: 0;
      z-index: 1;
      font-size: 24px;
      color: white;
      font-weight: 800;
    }
  }

  @media (min-width: 1024px) {
    .intro-triangle p {
      text-align: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 30%;
      left: 0;
      z-index: 1;
      font-size: 50px;
      color: white;
      font-weight: 800;
    }
  }

  /*******************/
  /* 上 アニメーション */

  #intro-animation {
    height: 1280px;
    background-color: bisque;
  }

  #triangles {
    position: relative;
    height: 1200px;
    background-color: #d15a35;
    z-index: 6;
  }

  @media (min-width: 1024px) {
    #triangles {
      left: 10%;
      width: 80%;
    }
  }

  .square {
    margin: 0;
    animation: fall-second-triangle 0.3s 5s forwards;
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
    animation: fall-second-triangle 0.3s 5s forwards;
  }

  #isosceles-triangle-1 {
    position: absolute;
    top: -1520px;
    background: #d15a35;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-2 {
    position: absolute;
    top: -1320px;
    background: #3250aa;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-3 {
    position: absolute;
    top: -1120px;
    background: #50AA32;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-4 {
    position: absolute;
    top: -920px;
    background: #aa3250;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #square-1 {
    position: absolute;
    top: -1720px;
    background: #d15a35;
    z-index: 10;
  }

  #square-2 {
    position: absolute;
    top: -1520px;
    background: #3250aa;
    z-index: 9;
  }

  #square-3 {
    position: absolute;
    top: -1320px;
    background: #50AA32;
    z-index: 8;
  }

  #square-4 {
    position: absolute;
    top: -1120px;
    background: #aa3250;
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
    background: #aa3250;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-intro-triangle 1s 3s forwards;
  }

  #intro-triangle-2 {
    position: absolute;
    top: -1620px;
    background: #3250aa;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-intro-triangle 1s 1.5s forwards;
  }

  #intro-triangle-3 {
    position: absolute;
    top: -1620px;
    background: #50AA32;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
    animation: fall-intro-triangle 1s forwards;
  }

  #intro-square-1 {
    position: absolute;
    top: -1820px;
    background: #aa3250;
    z-index: 5;
    animation: fall-intro-triangle 1s 3s forwards;
  }

  #intro-square-2 {
    position: absolute;
    top: -1820px;
    background: #3250aa;
    z-index: 4;
    animation: fall-intro-triangle 1s 1.5s forwards;
  }

  #intro-square-3 {
    position: absolute;
    top: -1820px;
    background: #50AA32;
    z-index: 3;
    animation: fall-intro-triangle 1s forwards;
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


  @keyframes fall-intro-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
  }

  @-webkit-keyframes fall-intro-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1800px, 0);}
  }

  @keyframes fall-second-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1600px, 0);}
  }

  @-webkit-keyframes fall-second-triangle {
    10% { transform: translate3d(0, 800px, 0);}
    100% { transform: translate3d(0, 1600px, 0);}
  }

  /* 終了時のアニメーション */
  #intro-animation {
    animation: fade-out 0.3s 5.2s forwards;
  }

  @keyframes fade-out {
    0% { opacity: 1;}
    100% { opacity: 0;}
  }

  @-webkit-keyframes fade-out {
    0% { opacity: 1;}
    100% { opacity: 0;}
  }

</style>
