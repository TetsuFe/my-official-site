<template>
  <section id="intro-animation">
    <div id="triangles">
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

  #intro-animation {
    height: 1580px;
    background-color: black;
  }

  #triangles {
    position: relative;
    height: 1500px;
    background-color: yellow;
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
    animation: fall-triangle 1s forwards;
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
    animation: fall-triangle 1s forwards;
  }

  #isosceles-triangle-1 {
    position: absolute;
    top: 180px;
    background: orange;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }


  #isosceles-triangle-2 {
    position: absolute;
    top: 280px;
    background: gray;
    /* line-height: 50px; */
    text-decoration: none;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-3 {
    position: absolute;
    top: 380px;
    background: blue;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }

  #isosceles-triangle-4 {
    position: absolute;
    top: 480px;
    background: green;
    padding-bottom: 35%;
    background-clip: content-box;
    overflow: hidden;
  }


  #square-1 {
    position: absolute;
    top: 80px;
    background: orange;
    z-index: 6;
  }

  #square-2 {
    position: absolute;
    top: 180px;
    background: gray;
    z-index: 5;
  }

  #square-3 {
    position: absolute;
    top: 280px;
    background: blue;
    z-index: 4;
  }

  #square-4 {
    position: absolute;
    top: 380px;
    background: green;
    z-index: 3;
  }

  @media (max-width: 1024px) {

    .square {
      height: 100px;
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
      height: 100px;
      width: 100%;
    }

    .isosceles-triangle {
      height: 50px;
      width: 100%;
    }
  }

  #isosceles-triangle-1 {
    z-index: 6;
  }

  #isosceles-triangle-2 {
    z-index: 5;
  }

  #isosceles-triangle-3 {
    z-index: 4;
  }

  #isosceles-triangle-4 {
    z-index: 3;
  }

  @keyframes fall-triangle {
    100% { transform: translate3d(0, 500px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

  @-webkit-keyframes fall-triangle {
    100% { transform: translate3d(0, 500px, 0);}
    /*100% { transform: translate3d(0, -100%, 0);}*/
  }

</style>
