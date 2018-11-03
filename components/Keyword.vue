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
              <p>Webサービス開発</p>
            </div>
            <p class="description">Webで有名になりたい。大勢の人が使うサービスを作って褒められたい。北大生限定フリマWebサイト「<a href="https://hufurima.com/">ホクマ</a>」を運営しています。</p>
          </div>
          <div class="keyword">
            <div class="name">
              <p>育成</p>
            </div>
            <p class="description">誰かに何かを教えることが好き。気軽に質問される人になりたい。</p>
          </div>
          <div class="keyword">
            <div class="name">
              <p>怠惰？</p>
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
    border: 2px solid #50aa32;
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
    font-size: 18px;
    letter-spacing: 2px;
    white-space: pre-wrap;
    padding: 0 0 1px 2px;
  }


  #wrap.sideA #keyword-wrap .name p {
    color: #50aa32;
  }

  #keyword-wrap .description {
    position: relative;
    width: 770px;
    font-weight: 800;
    font-size: 13px;
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

    #facility-wrap {
      margin-top: 80px;
    }

    #facility-wrap #facility-item {
      display: block;
      width: 100%;
    }

    #facility-wrap .facility {
      width: 100%;
      padding: 0 16px;
    }

    #facility-wrap .facility img {
      width: 100%;
    }

    #facility-wrap .facility:not(:last-child) {
      margin: 0 0 40px;
    }

    #facility-wrap .text {
      width: 100%;
      padding: 20px 6px 0;
    }

    #facility-wrap .text p {
      font-size: 13px;
    }

    #facility-wrap .facility-copy {
      background: url("/img/concept/sideA/facility_sp.png") top no-repeat;
      background-size: cover;
      width: 100vw;
      height: 18vw;
      margin-top: 36px;
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
