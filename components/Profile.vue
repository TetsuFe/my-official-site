<template>
  <section id="profile">
    <div class="title-wrap">
      <!--<img src="img/profile/sideA/title.png" sizes="(min-width:472px) 50vw, 100vw" srcset="img/profile/sideA/title.png 200w, img/profile/sideA/title@2x.png 400w" width="236">-->
      <p>プロフィール</p>
      <h3>Profile</h3>
    </div>
    <div id="profile-wrap">
      <div class="profile">
        <p>
          北海道大学情報科学研究科の修士２年生です。「生きる活力を高める」サービスを提供していきたいです（エンタメ、自己研鑽系）。
          <a href="https://satudora.jp/">サツドラ</a>で エンジニアバイト（React,
          Flutter, Firebase）として計２年間勤務。 個人で<a
            href="https://apps.apple.com/jp/app/id1524444519?mt=8"
            >「禁欲サポーター」</a
          >(iOS/Swift)、 チームで<nuxt-link to="MyServicesDesc/Hokuma"
            >「ホクマ」</nuxt-link
          >（Web/Django)、
          <nuxt-link to="MyServicesDesc/StudyMatching">「スタマチ」</nuxt-link
          >(iOS/Android/Flutter/Django)を開発・運営しています。
        </p>
        <p>
          技術的には、Flutter(Dart)、Django(Python)が得意です。フロントエンドからバックエンド・インフラ面幅広く実装・構築経験があります。
          最近特に関心があるのは、「良いコード」になるように設計やテストを工夫することです。
        </p>
        <br />
        <p style="text-align: right">2020年10月12日版</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  computed: {
    isHalloweenStyle() {
      return this.$store.state.isHalloweenStyle;
    },
  },
  name: "Profile",
};
</script>

<style scoped>
.title-wrap {
  text-align: center;
}

#profile-wrap .profile {
  width: 80%;
  margin: 0 auto;
}

@media screen and (min-width: 900px) {
  #profile-wrap .profile {
    width: 60%;
  }
}

#profile-wrap .profile {
  margin-top: 40px;
  font-size: 18px;
  line-height: 28px;
  font-weight: 800;
}

@media screen and (max-width: 900px) {
  #profile-wrap .profile {
    font-size: 16px;
  }
}

#wrap.sideA #profile-wrap .profile {
  color: #767b85;
}

#wrap.sideB #profile-wrap .profile {
  color: #363b55;
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
  border-bottom: 4px solid #0082f2;
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

#wrap.sideA .title-wrap h3 {
  color: #50aa32 !important;
  border-bottom: 4px solid #50aa32;
}

#wrap.sideA .title-wrap p {
  color: #50aa32 !important;
}

#wrap.sideB .title-wrap p {
  color: black !important;
}

#wrap.sideB .title-wrap h3 {
  color: black !important;
  border-bottom: 4px solid #ffe800;
}

.title-wrap {
  margin-top: 80px;
}
</style>
