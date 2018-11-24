<template>
    <div id="card-inner">
      <div class="skill-desc">
        <h3 class="skill-desc-title">{{skill.title}}</h3>
        <p>{{skill.descs}}</p>
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
            <th scope="row">{{skill.sub1.title}}</th>
            <td>{{skill.sub1.howlong}}</td>
            <td><span class="rating"><p :class="'rate rate'+skill.sub1.rate"></p></span></td>
          </tr>
          <tr>
            <th scope="row">{{skill.sub2.title}}</th>
            <td>{{skill.sub2.howlong}}</td>
            <td><span class="rating"><p :class="'rate rate'+skill.sub2.rate"></p></span></td>
          </tr>
          <tr>
            <th scope="row">{{skill.sub3.title}}</th>
            <td>{{skill.sub3.howlong}}</td>
            <td><span class="rating"><p :class="'rate rate'+skill.sub3.rate"></p></span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Skill",
    props: [
      "skill",
    ],
  }
</script>

<style scoped>
  #card-inner{
    margin: 0 auto;
  }

  #skill .skill-icon {
    flex-basis: 75px;
  }

  #skill .skill-icon img {
    width: 75px;
  }

  #skill .skill-desc {
    text-align: center;
    width: 90%;
    margin: auto;
  }

  #skill .skill-desc-title {
    margin-bottom: 3px;
    font-size:26px;
    padding: 24px 0px;
    font-weight: bold;
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
    table-layout: fixed;
    word-wrap: break-word;
  }

</style>

