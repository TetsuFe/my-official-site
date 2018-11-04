<template>
  <div id="skill">
    <div class="card-wrapper">
      <div class="card">
        <div class="skill-desc">
          <h3 class="skill-desc-title">フロントエンド</h3>
          <p>直近ではAngularJSを使用して開発していました。</p>
          <table class="table table-borderless">
            <thead>
            <tr>
              <th scope="col">技術</th>
              <th scope="col">経験年数</th>
              <th scope="col">スキル</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">javascrpt</th>
              <td>2年</td>
              <td><span class="rating"><p class="rate rate5"></p></span></td>
            </tr>
            <tr>
              <th scope="row">jQuery</th>
              <td>2年</td>
              <td><span class="rating"><p class="rate rate3"></p></span></td>
            </tr>
            <tr>
              <th scope="row">AngularJS</th>
              <td>1年</td>
              <td><span class="rating"><p class="rate rate4"></p></span></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "skill"
    }
</script>

<style scoped>
  #skill .card-wrapper {
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  #skill .card {
    flex-basis: 46%;
    margin-bottom: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: #f7f8fb;
  }

  #skill .skill-icon {
    flex-basis: 75px;
  }

  #skill .skill-icon img {
    width: 75px;
  }

  #skill .skill-desc {
    text-align: center;
    margin: auto;
  }

  #skill .skill-desc-title {
    margin-bottom: 3px;
    font-size:26px;
    padding: 24px;
    font-weight: bold;
  }

  #skill .skill-desc-title i{
    margin-right: 12px;
  }

  #skill .rate {
    position: relative;
    display: inline-block;
    width: 110px;
    height: 20px;
    font-size: 20px;
  }

  #skill .rate:before, #skill .rate:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '★★★★★';
    display: inline-block;
    height: 20px;
    line-height: 20px;
  }

  #skill .rate:before {
    color: #ddd;
  }

  #skill .rate:after {
    color: #808080;
    overflow: hidden;
    white-space: nowrap;
  }

  #skill .rate1:after {
    color: #efc14e;
    width: 20px;
  }

  #skill .rate2:after {
    color: #efc14e;
    width: 40px;
  }

  #skill .rate3:after {
    color: #efc14e;
    width: 60px;
  }

  #skill .rate4:after {
    color: #efc14e;
    width: 80px;
  }

  #skill .rate5:after {
    color: #efc14e;
    width: 100px;
  }

  .skill-desc table {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
  }

</style>
