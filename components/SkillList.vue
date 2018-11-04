<template>
  <div id="skill">
    <div class="card-wrapper">
      <div v-for="skill in skills" :key="skill.id" class="card">
        <Skill :skill="skill"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Skill from '~/components/Skill';
  export default {
    components: {
      Skill,
    },
    data(){
      return {
        "skills": [
          {
            "title": "バックエンド",
            "descs": "個人開発ではDjango、バイトではFirebaseを主に使っています。Djangoは一通り使えます。",
            "sub1": {
              "title": "Django",
              "howlong": "1年半(個人開発: 進行中)",
              "rate": "4",
            },
            "sub2": {
              "title": "Firebase",
              "howlong": "3か月(バイト: 進行中)",
              "rate": "2",
            },
            "sub3": {
              "title": "Rails",
              "howlong": "1年(個人開発)",
              "rate": "3",
            },
          },
          {
            "title": "フロントエンド",
            "descs": "バイトでReact/Reduxを使ってます、Vue.js(Nuxt.js)=このサイト。CSSはこのサイトのCSSレベルです。bootstrapも使えます。",
            "sub1": {
              "title": "React",
              "howlong": "3ヶ月(バイト: 進行中)",
              "rate": "3",
            },
            "sub2": {
              "title": "Redux",
              "howlong": "1ヶ月(バイト: 進行中)",
              "rate": "2",
            },
            "sub3": {
              "title": "CSS/Bootstrap4",
              "howlong": "1年（バイト・趣味）",
              "rate": "3",
            },
          },
          {
            "title": "モバイル",
            "descs": "iOSアプリはそこそこ作っています。現在はノベルゲーム＋英単語のアプリをリメイクしようと考えてます",
            "sub1": {
              "title": "iOS",
              "howlong": "1年半（ぼちぼち進行中）",
              "rate": "3",
            },
            "sub2": {
              "title": "android",
              "howlong": "1ヶ月（バイト）",
              "rate": "2",
            },
            "sub3": {
              "title": "flutter",
              "howlong": "1ヶ月（趣味）",
              "rate": "1",
            },
          },
          {
            "title": "インフラ",
            "descs": "ConohaVPSを借りてWebサービス「ホクマ」を運用しています。Dockerはdocker-composeだけ使ってます。AWSはS3とCloudFrontを少し",
            "sub1": {
              "title": "Webサーバ(CentOS7/VPS)",
              "howlong": "1年（趣味: 進行中）",
              "rate": "3",
            },
            "sub2": {
              "title": "Docker",
              "howlong": "1年（趣味: 進行中）",
              "rate": "3",
            },
            "sub3": {
              "title": "AWS(S3/CloudFront)",
              "howlong": "1年（趣味: 進行中）",
              "rate": "2",
            },
          },
          {
            "title": "その他・開発ツール等",
            "descs": "Git/Githubは基本問題なく使えるレベルです。ファッションVimmerです。",
            "sub1": {
              "title": "Git/Github",
              "howlong": "2年（進行中）",
              "rate": "4",
            },
            "sub2": {
              "title": "Vim",
              "howlong": "3年",
              "rate": "3",
            },
            "sub3": {
              "title": "アニメ/ノベルゲーム",
              "howlong": "10年以上",
              "rate": "5",
            },
          },
        ],
      }
    },
    name: "SkillList"
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

  @media screen and (max-width:1200px) {
    #skill .card {
      flex-basis: 100%;
    }
  }

</style>
