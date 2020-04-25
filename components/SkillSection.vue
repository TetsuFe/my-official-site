<template>
  <section id="skill">
    <div id="concept-wrap">
      <div id="keyword-wrap">
        <div class="contents-title">
          <p>スキル</p>
          <h3>Skill</h3>
        </div>
        <p style="text-align: center">スキルセットは<a href="./skill">こちら</a></p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "SkillSection"
  }
</script>

<style scoped>
  #concept-wrap {
    width: 1120px;
    margin: 0 auto;
  }

  #concept-wrap .concept-text {
    margin: 0 auto;
  }

  #concept-wrap p {
    color: #767b85;
  }

  #concept-wrap .concept-text {
    background: url("/img/concept/sideA/concept.png") top no-repeat;
    background-size: 900px 445px;
    width: 900px;
    height: 445px;
  }

  .contents-title h3 {
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

  #concept-wrap .contents-title p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 6px;
    text-align: center;
    padding-left: 6px;
  }

  #keyword-wrap {
    margin-top: 20px;
  }

  #wrap.sideA #keyword-wrap .contents-title h3 {
    color: #50aa32!important;
    border-bottom: 4px solid #50aa32;
  }

  #wrap.sideB #keyword-wrap .contents-title h3 {
    color: black!important;
    border-bottom: 4px solid black;
  }

  #wrap.sideA #keyword-wrap .contents-title p {
    color: #50aa32!important;
  }

  #wrap.sideB #keyword-wrap .contents-title p {
    color: #ffe800!important;
  }

  #wrap.sideA #keyword-wrap .keyword {
    border: 2px solid #50aa32;
  }

  #wrap.sideB #keyword-wrap .keyword {
    border: 2px solid #A04000;
  }

  #keyword-wrap .keyword {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    background: #fff;
    width: 100%;
    height: 70px;
    padding: 15px 30px;
    border-radius: 10px;
    overflow: hidden;
  }

  #keyword-wrap .keyword:not(:last-child) {
    margin-bottom: 20px;
  }

  #keyword-wrap .name {
    width: 240px;
    margin-right: 50px;
  }

  #keyword-wrap .name p {
    font-size: 20px;
    letter-spacing: 2px;
    white-space: pre-wrap;
    padding: 0 0 1px 2px;
  }


  #wrap.sideA #keyword-wrap .name p {
    color: #50aa32;
  }

  #wrap.sideB #keyword-wrap .name p {
    color: #A04000;
  }

  #keyword-wrap .description {
    position: relative;
    width: 770px;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: .5px;
    white-space: pre-wrap;
  }

  #keyword-wrap .description:before {
    content: "";
    position: absolute;
    top: calc(50% - 18px);
    left: -30px;
    width: 4px;
    height: 36px;
    border-radius: 2.5px;
  }


  #wrap.sideA #keyword-wrap .description:before {
    background: #50aa32;
  }

  #wrap.sideB #keyword-wrap .description:before {
    background: #A04000;
  }

  @media screen and (max-width:1120px) {
    #concept-wrap {
      width: 100vw;
      padding: 0 20px;
      overflow-x: scroll;
    }
  }

  @media screen and (max-width:768px) {
    #concept-wrap {
      width: 100%;
      padding: 0;
      overflow: hidden;
    }

    #concept-wrap .contents-title h3 {
      width: 180px;
      font-size: 21px;
      letter-spacing: 6px;
      padding-left: 6px;
      margin: 0 auto 56px;
    }

    #concept-wrap .contents-title p {
      font-size: 10px;
      padding-left: 6px;
    }

    #concept-wrap .concept-text {
      background: url("/img/concept/sideA/concept_sp.png") 50% no-repeat;
      background-size: cover;
      width: 100vw;
      height: 100vw;
    }

    #keyword-wrap {
      width: 100%;
      padding: 0 16px;
      margin-top: 96px;
    }

    #keyword-wrap .keyword {
      display: block;
      height: auto;
      padding: 12px 14px 15px;
    }

    #keyword-wrap .name {
      width: 100%;
      margin: 0 0 2px;
    }

    #keyword-wrap .name p {
      font-size: 16px;
      padding-left: 0;
    }

    #keyword-wrap .description {
      width: 100%;
      padding: 0 6px 0 24px;
    }

    #keyword-wrap .description:before {
      top: -1px;
      left: 6px;
      height: 100%;
    }
  }

</style>
