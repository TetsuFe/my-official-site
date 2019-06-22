<template>
  <div class="item">
    <div class="item-wrap">
      <a href="#">
        <div class="thumb">
          <img :src="news.imageUrl" sizes="(min-width:160px) 50vw, 100vw" width="80">
        </div>
        <div class="date">
          <p>{{news.date}}</p>
        </div>
        <div class="text">
          <p>{{news.text}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NewsListItem",
        props: ['news'],
    }
</script>

<style scoped>


  .item a {
    -webkit-transition: none;
    transition: none;
  }

  .item p {
    -webkit-transition: color .25s ease;
    transition: color .25s ease;
  }

  #wrap.sideA .item {
    background: rgba(251,251,252,.5);
  }

  #wrap.sideB .item {
    background: white;
  }

  .item:first-child {
    border-top: 1px solid #d8e2e8;
  }

  .item-wrap {
    position: relative;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    border-bottom: 1px solid #d8e2e8;
    overflow: hidden;
  }

  .item-wrap, .item-wrap, .item-wrap a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .item-wrap .item-wrap a {
    width: 100%;
    padding: 20px 30px 20px 20px;
  }

  .item .thumb {
    width: 80px;
    height: 80px;
  }

  .item .thumb img {
    border-radius: 8px;
    border: 1px solid #d8e2e8;
  }

  .item .date {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .item .date p {
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

  .item .date p {
    background: #adb0b6;
  }

  .item .text {
    width: calc(100% - 120px);
    margin-left: 30px;
  }

  .item .text p {
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
  }

  .item-wrap .plane, .item-wrap a {
    padding: 24px 16px;
  }

  .item .text p {
    color: #767b85;
  }

</style>
