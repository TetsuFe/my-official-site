<template>
  <section id="top">
  <carousel per-page="1" mouse-drag="false" >
    <slide>
      <div class="img-wrap">
        <a href="https;//hufurima.com/">
          <img src="~/assets/images/carousel/hufurima.jpg">
        </a>
      </div>
    </slide>
    <slide>
      <div class="img-wrap">
        <a href="https://itunes.apple.com/jp/app/id1218804893?mt=8">
          <img src="~/assets/images/carousel/eitango.jpg">
        </a>
      </div>
    </slide>
    </carousel>
  </section>
</template>

<script>
  export default {
    name: "Top",
  }
</script>

<style scoped>

  .img-wrap{
    text-align: center;
  }
  img{
    max-width: 80%;
    max-height: 700px;
    object-fit: contain;
  }

</style>
