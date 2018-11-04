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
            "descs": "個人開発ではDjango、バイトではFirebaseを主に使っています。Djangoは一通り使えますが、基本はクライアントも込みで作った経験しかないので、APIサーバー勉強中です",
            "sub1": {
              "title": "Django",
              "howlong": "1年半(個人開発)",
              "rate": "4",
            },
            "sub2": {
              "title": "Firebase",
              "howlong": "3か月(バイト)",
              "rate": "2",
            },
            "sub3": {
              "title": "Rails",
              "howlong": "1年(個人開発)",
              "rate": "3",
            },
          },
          {
            "title": "バックエンド",
            "descs": "個人開発ではDjango、バイトではFirebaseを主に使っています。Djangoは一通り使えますが、基本はクライアントも込みで作った経験しかないので、APIサーバー勉強中です",
            "sub1": {
              "title": "react",
              "howlong": "1",
              "rate": "3",
            },
            "sub2": {
              "title": "redux",
              "howlong": "3",
              "rate": "4",
            },
            "sub3": {
              "title": "jQuery",
              "howlong": "2",
              "rate": "5",
            },
          },
          {
            "title": "フロントエンド",
            "descs": "フロントエンド",
            "sub1": {
              "title": "react",
              "howlong": "1",
              "rate": "3",
            },
            "sub2": {
              "title": "redux",
              "howlong": "3",
              "rate": "4",
            },
            "sub3": {
              "title": "jQuery",
              "howlong": "2",
              "rate": "5",
            },
          },
          {
            "title": "フロントエンド",
            "descs": "フロントエンド",
            "sub1": {
              "title": "react",
              "howlong": "1",
              "rate": "3",
            },
            "sub2": {
              "title": "redux",
              "howlong": "3",
              "rate": "4",
            },
            "sub3": {
              "title": "jQuery",
              "howlong": "2",
              "rate": "5",
            },
          },
          {
            "title": "フロントエンド",
            "descs": "フロントエンド",
            "sub1": {
              "title": "react",
              "howlong": "1",
              "rate": "3",
            },
            "sub2": {
              "title": "redux",
              "howlong": "3",
              "rate": "4",
            },
            "sub3": {
              "title": "jQuery",
              "howlong": "2",
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

  @media screen and (max-width:768px) {
    #skill .card {
      flex-basis: 100%;
    }
  }

</style>
