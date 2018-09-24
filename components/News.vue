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

  #wrap.sideA #news-list {
    width: 710px;
    height: 364px;
    margin-right: 50px;
  }

  #wrap.sideA #news-list .item {
    background: rgba(251,251,252,.5);
  }

  #wrap.sideA #news-list .item:first-child {
    border-top: 1px solid #d8e2e8;
  }

  #wrap.sideA #news-list .item-wrap {
    position: relative;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    border-bottom: 1px solid #d8e2e8;
    overflow: hidden;
  }

  #wrap.sideA #news-list .item-wrap,#wrap.sideA #news-list .item-wrap .plane,#wrap.sideA #news-list .item-wrap a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  #wrap.sideA #news-list .item-wrap .plane,#wrap.sideA #news-list .item-wrap a {
    width: 100%;
    padding: 20px 30px 20px 20px;
  }

  #wrap.sideA #news-list .thumb {
    width: 80px;
    height: 80px;
  }

  #wrap.sideA #news-list .thumb img {
    border-radius: 8px;
    border: 1px solid #d8e2e8;
  }

  #wrap.sideA #news-list .date {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  #wrap.sideA #news-list .date p {
    display: inline-block;
    background: #adb0b6;
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

  #wrap.sideA #news-list .text {
    width: calc(100% - 120px);
    margin-left: 30px;
  }

  #wrap.sideA #news-list .text p {
    color: #767b85;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
  }

  #wrap.sideA .twitter {
    width: 360px;
    height: 364px;
    border-radius: 12px;
    border: 1px solid #e4e4e9;
    overflow: hidden;
  }

  #wrap.sideA .twitter a {
    color: #767b85;
  }

  #wrap:not(.sp).sideA #news-list .item:hover {
    background: hsla(240,3%,94%,.5);
  }

  #wrap:not(.sp).sideA #news-list .item a:hover .text p {
    color: #0082f2;
  }

  #wrap.sideB #news-wrap {
    margin-top: 60px;
  }

  #wrap.sideB #news-list {
    height: 468px;
  }

  #wrap.sideB #news-list a,#wrap.sideB #news-list p {
    color: #fff;
    font-family: Roboto Condensed,Noto Sans Japanese;
    font-weight: 900;
    font-size: 16px;
  }

  #wrap.sideB #news-list .item {
    border-top: 1px solid #fff;
  }

  #wrap.sideB #news-list .item:last-child {
    border-bottom: 1px solid #fff;
  }

  #wrap.sideB #news-list .item-wrap .plane,#wrap.sideB #news-list .item-wrap a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 25px 0;
  }

  #wrap.sideB #news-list .date {
    margin: 0 70px 0 20px;
  }

  #wrap.sideB #news-list .date p {
    font-family: Teko;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: 3px;
    text-align: center;
  }

  #wrap.sideB #news-list .date p:not(:first-child) {
    font-weight: 500;
    font-size: 40px;
    line-height: .9;
    letter-spacing: 2px;
  }

  #wrap.sideB #news-list .date p:last-child {
    padding-bottom: 2px;
  }

  #wrap.sideB #news-list .text {
    padding-right: 25px;
  }

  #wrap.sideB #news-list .text a,#wrap.sideB #news-list .text p {
    font-weight: 900;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 2.5px;
  }

  #wrap:not(.sp).sideB #news-list a:hover p {
    color: #000;
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

    #wrap.sideA #news-wrap {
      display: block;
    }

    #wrap.sideA #news-list {
      width: 100%;
    }

    #wrap.sideA #news-list .item-wrap .plane,#wrap.sideA #news-list .item-wrap a {
      padding: 24px 16px;
    }

    #wrap.sideA #news-list .thumb,#wrap.sideA #news-list .thumb img {
      width: 60px;
      height: 60px;
    }

    #wrap.sideA #news-list .date p {
      width: 96px;
      height: 20px;
      padding: 3px 0 0 6px;
      border-top-left-radius: 8px;
    }

    #wrap.sideA #news-list .text {
      width: calc(100% - 76px);
      margin-left: 16px;
    }

    #wrap.sideA #news-list .text a,#wrap.sideA #news-list .text p {
      font-size: 14px;
      line-height: 17px;
    }

    #wrap.sideA .twitter {
      width: calc(100% - 32px);
      margin: 32px auto 0;
    }

    #wrap.sideA .twitter iframe {
      width: 100vw!important;
    }

    #wrap.sideB #news-list {
      height: 364px;
      padding: 0 16px;
    }

    #wrap.sideB #news-list .item-wrap .plane,#wrap.sideB #news-list .item-wrap a {
      padding: 20px 0;
    }

    #wrap.sideB #news-list .date {
      margin: 0 16px 0 12px;
    }

    #wrap.sideB #news-list .date p {
      font-size: 16px;
    }

    #wrap.sideB #news-list .date p:not(:first-child) {
      font-size: 32px;
      letter-spacing: 2.5px;
    }

    #wrap.sideB #news-list .text {
      padding-right: 4px;
    }

    #wrap.sideB #news-list .text a,#wrap.sideB #news-list .text p {
      font-size: 20px;
      line-height: 24px;
    }
  }


  /* タイトル */
  #wrap.sideB .title-wrap h3 {
    font-size: 24px;
  }

  #wrap.sideB .title-wrap p {
    font-size: 10px;
  }

  #wrap.sideB .title-wrap {
    margin-bottom: 40px;
  }

  #wrap.sideA .title-wrap h3 {
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

  #wrap.sideA .title-wrap p {
    color: #0082f2!important;
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

  #wrap.sideA .title-wrap h3 {
    width: 180px;
    font-size: 21px;
    letter-spacing: 6px;
    padding-left: 6px;
    margin: 0 auto 56px;
  }

  #wrap.sideA .title-wrap p {
    font-size: 10px;
    padding-left: 6px;
  }

  #wrap.sideB .title-wrap {
    position: relative;
    width: 320px;
  }

  #wrap.sideB .title-wrap h3 {
    color: #f20000;
    font-family: Roboto Condensed;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.2;
    letter-spacing: 5px;
  }

  #wrap.sideB .title-wrap p{
    font-size: 12px;
    letter-spacing: 4px;
    padding-left: 1px;
  }

  #wrap.sideB .title-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    margin: 180px 0 150px;
  }

  #wrap.sideA .title-wrap {
    margin-top: 14px;
  }
</style>
