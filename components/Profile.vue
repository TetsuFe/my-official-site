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
          2020年4月25日版
        </p>
        <p>
          北海道大学情報科学研究科の修士２年生。
          <a href="https://kitagoe.jp/news/aitokyolab-hokkaido-start/"
            >AI HOKKAIDO LAB</a
          >と <a href="https://satudora.jp/">サツドラ</a>で
          エンジニアバイト（React, Flutter, Firebase）として計２年間勤務。
        </p>
        <p>
          個人で<a href="https://itunes.apple.com/jp/app/id1218804893?mt=8"
            >「フレーズ英単語」</a
          >(iOS/Swift)、 チームで<a href="https://hufurima.com/">「ホクマ」</a
          >（Web/Django)、
          <a href="https://twitter.com/MatchingStudy">「スタマチ」</a
          >(iOS/Android/Flutter/Django)を開発・運営しています。
        </p>
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
    }
  },
  name: "Profile"
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

#profile-wrap .profile {
  margin-top: 40px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 800;
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
  margin-top: 14px;
}
</style>
