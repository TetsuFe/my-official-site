<template>
  <section class="footer">
    <p class="copylight">&copy; Satoshi Yoshio a.k.a. TetsuFe</p>
  </section>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .footer {
    margin-top: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  #wrap.sideA .footer{
    background-color: #50aa32;
  }

  #wrap.sideB .footer{
    background-color: #A04000;
  }

  .copylight {
    text-align: center;
    color: white;
  }
</style>
