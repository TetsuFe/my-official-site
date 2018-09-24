<template>
  <section id="keyword">
    <div id="concept-wrap">
      <div id="keyword-wrap">
        <div class="contents-title">
          <p>キーワード</p>
          <h3>Keywords</h3>
        </div>
        <div id="keyword-item">
          <div class="keyword">
            <div class="name">
              <p>エンジニア</p>
            </div>
            <p class="description">プログラミングで何かを作りたい。でもプログラミングの８割は苦痛。好きな言語とかは特にないが、新しいものに抵抗はない。</p>
          </div>
          <div class="keyword">
            <div class="name">
              <p>サービス開発</p>
            </div>
            <p class="description">有名になりたい。大勢の人が使うサービスを作って褒められたい。</p>
          </div>
          <div class="keyword">
            <div class="name">
              <p>教育熱心</p>
            </div>
            <p class="description">誰かに何かを教えることが好き。気軽に質問される人になりたい。</p>
          </div>
          <div class="keyword">
            <div class="name">
              <p>怠け</p>
            </div>
            <p class="description">怠け癖がある。何かをするのに時間がかかる。本気になれるものを探している。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Keyword"
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

  #wrap.sideA #concept-wrap p {
    color: #767b85;
  }

  #wrap.sideA #concept-wrap .concept-text {
    background: url("/img/concept/sideA/concept.png") top no-repeat;
    background-size: 900px 445px;
    width: 900px;
    height: 445px;
  }

  #wrap.sideA #concept-wrap .contents-title h3 {
    width: 224px;
    color: #0082f2!important;
    font-family: Arvo;
    font-weight: 700;
    font-size: 25px;
    line-height: 1.8;
    letter-spacing: 7px;
    text-align: center;
    padding-left: 7px;
    margin: 0 auto 80px;
    border-bottom: 4px solid #0082f2;
  }

  #wrap.sideA #concept-wrap .contents-title p {
    color: #0082f2!important;
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 6px;
    text-align: center;
    padding-left: 6px;
  }

  #wrap.sideA #keyword-wrap {
    margin-top: 140px;
  }

  #wrap.sideA #keyword-wrap .contents-title h3 {
    color: #50aa32!important;
    border-bottom: 4px solid #50aa32;
  }

  #wrap.sideA #keyword-wrap .contents-title p {
    color: #50aa32!important;
  }

  #wrap.sideA #keyword-wrap .keyword {
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
    border: 2px solid #50aa32;
    overflow: hidden;
  }

  #wrap.sideA #keyword-wrap .keyword:not(:last-child) {
    margin-bottom: 20px;
  }

  #wrap.sideA #keyword-wrap .name {
    width: 240px;
    margin-right: 50px;
  }

  #wrap.sideA #keyword-wrap .name p {
    color: #50aa32;
    font-size: 18px;
    letter-spacing: 2px;
    white-space: pre-wrap;
    padding: 0 0 1px 2px;
  }

  #wrap.sideA #keyword-wrap .description {
    position: relative;
    width: 770px;
    font-weight: 800;
    font-size: 13px;
    letter-spacing: .5px;
    white-space: pre-wrap;
  }

  #wrap.sideA #keyword-wrap .description:before {
    content: "";
    position: absolute;
    top: calc(50% - 18px);
    left: -30px;
    background: #50aa32;
    width: 4px;
    height: 36px;
    border-radius: 2.5px;
  }

  #wrap.sideB #concept-wrap p {
    font-family: Roboto Condensed,Noto Sans Japanese;
    font-weight: 300;
    font-size: 13px;
    line-height: 1.7;
    letter-spacing: 2.5px;
  }

  #wrap.sideB #concept-wrap .concept-text {
    background: url("/img/concept/sideB/concept.png") top no-repeat;
    background-size: 710px 510px;
    width: 710px;
    height: 510px;
  }

  #wrap.sideB #concept-wrap .contents-title {
    position: relative;
    width: 320px;
  }

  #wrap.sideB #concept-wrap .contents-title h3 {
    color: #f20000;
    font-family: Roboto Condensed;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.2;
    letter-spacing: 5px;
  }

  #wrap.sideB #concept-wrap .contents-title p {
    font-size: 12px;
    letter-spacing: 4px;
    padding-left: 1px;
  }

  #wrap.sideB #facility-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    margin: 180px 0 150px;
  }

  #wrap.sideB #facility-wrap .contents-title {
    margin-top: 14px;
  }

  #wrap.sideB #facility-wrap .facility {
    width: 720px;
    margin-left: 90px;
  }

  #wrap.sideB #facility-wrap .facility img {
    width: 100%;
  }

  #wrap.sideB #facility-wrap .text {
    position: absolute;
    bottom: 14px;
    left: 0;
    width: 320px;
  }

  #wrap.sideB #facility-wrap .text:before {
    content: "";
    position: absolute;
    top: -24px;
    left: 0;
    background: #000;
    width: 16px;
    height: 1px;
  }

  #wrap.sideB #facility-wrap .text p {
    letter-spacing: 1.8px;
  }

  #wrap.sideB #keyword-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  #wrap.sideB #keyword-wrap .keyword {
    width: 675px;
    margin-left: 135px;
  }

  #wrap.sideB #keyword-wrap .keyword:not(:first-child) {
    margin-top: 35px;
  }

  #wrap.sideB #keyword-wrap .name {
    position: relative;
    margin-bottom: 3px;
  }

  #wrap.sideB #keyword-wrap .name p {
    font-weight: 900;
    font-size: 21px;
  }

  #wrap.sideB #keyword-wrap .name:before {
    content: "";
    position: absolute;
    top: 15px;
    left: -45px;
    background: #000;
    width: 35px;
    height: 1px;
  }

  #wrap.sideB #keyword-wrap .description {
    font-size: 14px;
    letter-spacing: 2.1px;
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

    #wrap.sideA #concept-wrap .contents-title h3 {
      width: 180px;
      font-size: 21px;
      letter-spacing: 6px;
      padding-left: 6px;
      margin: 0 auto 56px;
    }

    #wrap.sideA #concept-wrap .contents-title p {
      font-size: 10px;
      padding-left: 6px;
    }

    #wrap.sideA #concept-wrap .concept-text {
      background: url("/img/concept/sideA/concept_sp.png") 50% no-repeat;
      background-size: cover;
      width: 100vw;
      height: 100vw;
    }

    #wrap.sideA #facility-wrap {
      margin-top: 80px;
    }

    #wrap.sideA #facility-wrap #facility-item {
      display: block;
      width: 100%;
    }

    #wrap.sideA #facility-wrap .facility {
      width: 100%;
      padding: 0 16px;
    }

    #wrap.sideA #facility-wrap .facility img {
      width: 100%;
    }

    #wrap.sideA #facility-wrap .facility:not(:last-child) {
      margin: 0 0 40px;
    }

    #wrap.sideA #facility-wrap .text {
      width: 100%;
      padding: 20px 6px 0;
    }

    #wrap.sideA #facility-wrap .text p {
      font-size: 13px;
    }

    #wrap.sideA #facility-wrap .facility-copy {
      background: url("/img/concept/sideA/facility_sp.png") top no-repeat;
      background-size: cover;
      width: 100vw;
      height: 18vw;
      margin-top: 36px;
    }

    #wrap.sideA #keyword-wrap {
      width: 100%;
      padding: 0 16px;
      margin-top: 96px;
    }

    #wrap.sideA #keyword-wrap .keyword {
      display: block;
      height: auto;
      padding: 12px 14px 15px;
    }

    #wrap.sideA #keyword-wrap .name {
      width: 100%;
      margin: 0 0 2px;
    }

    #wrap.sideA #keyword-wrap .name p {
      font-size: 16px;
      padding-left: 0;
    }

    #wrap.sideA #keyword-wrap .description {
      width: 100%;
      padding: 0 6px 0 24px;
    }

    #wrap.sideA #keyword-wrap .description:before {
      top: -1px;
      left: 6px;
      height: 100%;
    }

    #wrap.sideB #concept-wrap p {
      line-height: 21px;
      letter-spacing: 2px;
    }

    #wrap.sideB #concept-wrap .contents-title h3 {
      font-size: 24px;
    }

    #wrap.sideB #concept-wrap .contents-title p {
      font-size: 10px;
    }

    #wrap.sideB #concept-wrap .concept-text {
      background: url("/img/concept/sideB/concept_sp.png") top no-repeat;
      background-size: cover;
      width: calc(100vw - 32px);
      height: calc(80vw - 25.6px);
    }

    #wrap.sideB #keyword-wrap {
      display: block;
      padding: 0 16px;
    }

    #wrap.sideB #keyword-wrap .contents-title {
      margin-bottom: 40px;
    }

    #wrap.sideB #keyword-wrap .keyword {
      width: 100%;
      margin-left: 0;
    }

    #wrap.sideB #keyword-wrap .keyword:not(:first-child) {
      margin-top: 40px;
    }

    #wrap.sideB #keyword-wrap .name p {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 2.5px;
      margin-bottom: 6px;
    }

    #wrap.sideB #keyword-wrap .name:before {
      display: none;
    }

    #wrap.sideB #keyword-wrap .description {
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 1.5px;
    }
  }

</style>
