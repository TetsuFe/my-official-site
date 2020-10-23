<template>
  <section id="service">
    <div class="contents-title">
      <p>サービス</p>
      <h3>Services</h3>
    </div>
    <carousel per-page="1" mouse-drag="false">
      <slide>
        <div class="img-wrap">
          <a href="https://apps.apple.com/jp/app/id1524444519?mt=8">
            <img src="~/assets/images/carousel/kinyoku_supporter.png" />
          </a>
        </div>
      </slide>
      <slide>
        <div class="img-wrap">
          <nuxt-link to="/MyServicesDesc/Hokuma">
            <img src="~/assets/images/carousel/hokuma.png" />
          </nuxt-link>
        </div>
      </slide>
      <slide>
        <div class="img-wrap">
          <nuxt-link to="/MyServicesDesc/StudyMatching">
            <img src="~/assets/images/carousel/studymatching.png" />
          </nuxt-link>
        </div>
      </slide>
      <slide>
        <div class="img-wrap">
          <a href="https://github.com/tetsufe/tangomaster2">
            <img src="~/assets/images/carousel/eitango.png" />
          </a>
        </div>
      </slide>
    </carousel>
  </section>
</template>

<script>
export default {
  name: "Service",
};
</script>

<style scoped>
.img-wrap {
  text-align: center;
}
img {
  max-width: 80%;
  max-height: 500px;
  object-fit: contain;
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

.contents-title p {
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 6px;
  text-align: center;
  padding-left: 6px;
}

#wrap.sideA .contents-title h3 {
  color: #50aa32 !important;
  border-bottom: 4px solid #50aa32;
}

#wrap.sideB .contents-title h3 {
  color: black !important;
  border-bottom: 4px solid black;
}

#wrap.sideA .contents-title p {
  color: #50aa32 !important;
}

#wrap.sideB .contents-title p {
  color: #ffe800 !important;
}

#service {
  margin-top: 40px;
}
</style>
