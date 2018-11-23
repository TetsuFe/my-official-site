<template>
  <section id="news">
    <div class="title-wrap">
      <p>ニュース</p>
      <h3>News</h3>
    </div>
    <div id="news-wrap">
      <div id="news-list">
        <div class="item">
          <div class="item-wrap">
            <a href="#">
              <div class="thumb">
                <img src="~/assets/images/icons/new.svg" sizes="(min-width:160px) 50vw, 100vw" width="80">
              </div>
              <div class="date">
                <p>2018.11.23</p>
              </div>
              <div class="text">
                <p>本サイトのKeywordなどを更新しました！</p>
              </div>
            </a>
          </div>
        </div>
        <div class="item">
          <div class="item-wrap">
            <a href="https://hufurima.com">
              <div class="thumb">
                <img src="~/assets/images/icons/new.svg" sizes="(min-width:160px) 50vw, 100vw" width="80">
              </div>
              <div class="date">
                <p>2018.10.1</p>
              </div>
              <div class="text">
                <p>北大生限定Webフリマアプリ「ホクマ」のベータ版が公式リリースされました！</p>
              </div>
            </a>
          </div>
        </div>
        <div class="item">
          <div class="item-wrap">
            <a href="#">
              <div class="thumb">
                <!--<img src="img/news/sideA/thumb/thumb35.jpg" sizes="(min-width:160px) 50vw, 100vw" width="80" srcset="img/news/sideA/thumb/thumb35.jpg 200w, img/news/sideA/thumb/thumb35@2x.jpg 400w">-->
                <img src="~/assets/images/icons/new.svg" sizes="(min-width:160px) 50vw, 100vw" width="80">
              </div>
              <div class="date">
                <p>2018.09.24</p>
              </div>
              <div class="text">
                <p>トップページのトップ画像とニュースを作成しました</p>
              </div>
            </a>
          </div>
        </div>
        <div class="item">
          <div class="item-wrap">
            <a href="http://swiftfe0.hatenablog.com/entry/2018/09/23/115644">
              <div class="thumb">
                <img src="~/assets/images/icons/blog.svg" sizes="(min-width:160px) 50vw, 100vw" width="80">
              </div>
              <div class="date">
                <p>2018.09.23</p>
              </div>
              <div class="text">
                <p>サイトリニューアルに関するブログを書きました</p>
              </div>
            </a>
          </div>
        </div>
        <div class="item">
          <div class="item-wrap">
            <a href="#">
              <div class="thumb">
                <img src="~/assets/images/icons/new.svg" sizes="(min-width:160px) 50vw, 100vw" width="80">
              </div>
              <div class="date">
                <p>2018.09.23</p>
              </div>
              <div class="text">
                <p>サイトをリニューアルしました！</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="twitter">
        <div id="twitter-timeline-body">
          <a class="twitter-timeline" data-height="364" data-theme="light" href="https://twitter.com/tetsufe_twi?ref_src=twsrc%5Etfw">Tweets by tetsufe_twi</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>            </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style scoped>
  .title-wrap{
    text-align: center;
    margin-top: 14px;
  }

  .title-wrap p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 6px;
    text-align: center;
    padding-left: 6px;
  }

  .title-wrap h3 {
    letter-spacing: 6px;
    padding-left: 6px;
    width: 224px;
    font-family: Arvo;
    font-weight: 700;
    font-size: 25px;
    line-height: 1.8;
    text-align: center;
    margin: 0 auto 80px;
  }

  #wrap.sideA .title-wrap h3 {
    color: #50aa32 !important;
    border-bottom: 4px solid #50aa32;
  }

  #wrap.sideB .title-wrap h3 {
    color: black !important;
    border-bottom: 4px solid #ffe800;
  }

  #wrap.sideA .title-wrap p {
    color: #50aa32 !important;
  }

  #wrap.sideB .title-wrap p {
    color: black !important;
  }

  #news-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 1120px;
    margin: 0 auto;
  }

  #news-list {
    overflow-y: scroll;
  }

  #news-list a {
    -webkit-transition: none;
    transition: none;
  }

  #news-list p {
    -webkit-transition: color .25s ease;
    transition: color .25s ease;
  }

  #news-list {
    width: 710px;
    height: 364px;
    margin-right: 50px;
  }

  #wrap.sideA #news-list .item {
    background: rgba(251,251,252,.5);
  }

  #wrap.sideB #news-list .item {
    background: white;
  }

  #news-list .item:first-child {
    border-top: 1px solid #d8e2e8;
  }

  #news-list .item-wrap {
    position: relative;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    border-bottom: 1px solid #d8e2e8;
    overflow: hidden;
  }

  #news-list .item-wrap, #news-list .item-wrap, #news-list .item-wrap a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  #news-list .item-wrap #news-list .item-wrap a {
    width: 100%;
    padding: 20px 30px 20px 20px;
  }

  #news-list .thumb {
    width: 80px;
    height: 80px;
  }

  #news-list .thumb img {
    border-radius: 8px;
    border: 1px solid #d8e2e8;
  }

  #news-list .date {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  #news-list .date p {
    display: inline-block;
    width: 104px;
    height: 22px;
    color: #fff;
    font-family: Arvo;
    font-size: 10px;
    letter-spacing: 2px;
    text-align: center;
    padding: 4px 0 0 5px;
    border-top-left-radius: 8px;
  }

  #news-list .date p {
    background: #adb0b6;
  }

  #news-list .text {
    width: calc(100% - 120px);
    margin-left: 30px;
  }

  #news-list .text p {
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
  }

  #news-list .item-wrap .plane, #news-list .item-wrap a {
    padding: 24px 16px;
  }

  #news-list .text p {
    color: #767b85;
  }

  .twitter {
    width: 360px;
    height: 364px;
    border-radius: 12px;
    border: 1px solid #e4e4e9;
    overflow: hidden;
  }

  .twitter a {
    color: #767b85;
  }

  #wrap:not(.sp) #news-list .item:hover {
    background: hsla(240,3%,94%,.5);
  }

  #wrap:not(.sp) #news-list .item a:hover .text p {
    color: #0082f2;
  }


  @media screen and (max-width:1120px) {
    #news-wrap {
      width: 100vw;
      padding: 0 20px;
    }
  }

  @media screen and (max-width:768px) {
    #news-wrap {
      width: 100vw;
      padding: 0;
    }

    #news-wrap {
      display: block;
    }

    #news-list {
      margin: auto;
      width: 90%;
    }

    #news-list .item-wrap .plane, #news-list .item-wrap a {
      padding: 24px 16px;
    }

    #news-list .thumb #news-list .thumb img {
      width: 60px;
      height: 60px;
    }

    #news-list .date p {
      width: 96px;
      height: 20px;
      padding: 3px 0 0 6px;
      border-top-left-radius: 8px;
    }

    #news-list .text {
      width: calc(100% - 76px);
      margin-left: 16px;
    }

    #news-list .text a, #news-list .text p {
      font-size: 14px;
      line-height: 17px;
    }

    .twitter {
      width: calc(100% - 32px);
      margin: 32px auto 0;
    }

    .twitter iframe {
      width: 100vw !important;
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
      color: #50aa32 !important;
      border-bottom: 4px solid #50aa32;
    }

    #wrap.sideB .title-wrap h3 {
      color: black !important;
      border-bottom: 4px solid #ffe800;
    }

    #wrap.sideA .title-wrap p {
      color: #50aa32 !important;
    }

    #wrap.sideB .title-wrap p {
      color: black !important;
    }

    .title-wrap h3 {
      width: 180px;
      font-size: 21px;
      letter-spacing: 6px;
      padding-left: 6px;
      margin: 0 auto 56px;
    }

    .title-wrap p {
      font-size: 10px;
      padding-left: 6px;
    }

    .title-wrap {
      margin-top: 14px;
    }
  }
</style>
