<template>
  <header v-bind:class="isHalloweenStyle ? 'sideB' : 'sideA'">
    <div id="header">
      <div id="logo">
        <nuxt-link to="./">
          <img v-if="!isHalloweenStyle" src="~/assets/images/common/logo.png" sizes="(min-width:80px) 50vw, 100vw" width="150" srcset="~/assets/images/common/logo.png 200w, ~/assets/images/common/logo.png 400w">
          <img v-else src="~/assets/images/common/logo-halloween.png" sizes="(min-width:80px) 50vw, 100vw" width="150" srcset="~/assets/images/common/logo-halloween.png 200w, ~/assets/images/common/logo-halloween.png 400w">
        </nuxt-link>
      </div>
      <div id="button-menu" @click="onClickMenuButton">
        <img v-if="!isMenuOpen" src="~/assets/images/icons/menu.svg" sizes="(min-width:100px) 50vw, 100vw" width="42" srcset="~/assets/images/icons/menu.svg 200w, ~/assets/images/icons/menu.svg 400w">
        <img v-else src="~/assets/images/icons/close.svg" sizes="(min-width:100px) 50vw, 100vw" width="42" srcset="~/assets/images/icons/close.svg 200w, ~/assets/images/icons/close.svg 400w">
      </div>
      <nav id="menu">
        <div id="menu01" class="menu" v-scroll-to="'#top'" @click="onClickMenuButton">
          <!--<img src="http://qruppo.com/img/common/sideA/hart08.png" sizes="(min-width:80px) 50vw, 100vw" width="40" srcset="http://qruppo.com/img/common/sideA/hart08.png 200w, http://qruppo.com/img/common/sideA/hart08@2x.png 400w" class="hart">-->
          <img v-if="!isHalloweenStyle" src="~/assets/images/common/top.png" sizes="(min-width:80px) 50vw, 100vw" width="41" srcset="~/assets/images/common/top.png 200w, ~/assets/images/common/top.png 400w">
          <img v-else src="~/assets/images/common/top-halloween.png" sizes="(min-width:80px) 50vw, 100vw" width="41" srcset="~/assets/images/common/top-halloween.png 200w, ~/assets/images/common/top-halloween.png 400w">
        </div>
        <div id="menu02" class="menu" v-scroll-to="'#skill'" @click="onClickMenuButton">
          <nuxt-link to="./skill">
            <img v-if="!isHalloweenStyle" src="~/assets/images/common/skill.png" sizes="(min-width:180px) 50vw, 100vw" width="58" srcset="~/assets/images/common/skill.png 200w, ~/assets/images/common/skill.png 400w">
            <img v-else src="~/assets/images/common/skill-halloween.png" sizes="(min-width:180px) 50vw, 100vw" width="58" srcset="~/assets/images/common/skill-halloween.png 200w, ~/assets/images/common/skill-halloween.png 400w">
          </nuxt-link>
        </div>
        <div id="menu03" class="menu" v-scroll-to="'#profile'" @click="onClickMenuButton">
          <img v-if="!isHalloweenStyle" src="~/assets/images/common/story.png" sizes="(min-width:180px) 50vw, 100vw" width="58" srcset="~/assets/images/common/story.png 200w, ~/assets/images/common/story.png 400w">
          <img v-else src="~/assets/images/common/story-halloween.png" sizes="(min-width:180px) 50vw, 100vw" width="58" srcset="~/assets/images/common/story-halloween.png 200w, ~/assets/images/common/story-halloween.png 400w">
        </div>
        <div id="menu04" class="menu" v-scroll-to="'#keyword'" @click="onClickMenuButton">
          <img v-if="!isHalloweenStyle" src="~/assets/images/common/keyword.png" sizes="(min-width:180px) 50vw, 100vw" width="92" srcset="~/assets/images/common/keyword.png 200w, ~/assets/images/common/keyword.png 400w">
          <img v-else src="~/assets/images/common/keyword-halloween.png" sizes="(min-width:180px) 50vw, 100vw" width="92" srcset="~/assets/images/common/keyword-halloween.png 200w, ~/assets/images/common/keyword-halloween.png 400w">
        </div>
      </nav>
      <div @click="onClickStyleToggle" id="styleToggleButton" style="margin-top: 5px; position:absolute; right:0">
        <img v-if="isHalloweenStyle" src="~/assets/images/icons/switch-normal.svg">
        <img v-else src="~/assets/images/icons/switch-halloween.svg">
      </div>
      <!--
      <div id="changer-wrap">
        <div class="button-wrap">
          <div class="button">
            <div class="ripple"></div>
          </div>
        </div>
        <div class="title">
          <img src="http://qruppo.com/img/common/sideA/changer.png" sizes="(min-width:104px) 50vw, 100vw" width="52" srcset="http://qruppo.com/img/common/sideA/changer.png 200w, http://qruppo.com/img/common/sideA/changer@2x.png 400w">
        </div>
      </div>
      -->
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    computed: {
      isHalloweenStyle () { return this.$store.state.isHalloweenStyle }
    },
    methods: {
      onClickMenuButton() {
        if (process.browser) {
          if(this.isMenuOpen){
            document.querySelector('header').classList.remove('is-open');
          }else{
            document.querySelector('header').classList.add('is-open');
          }
          this.isMenuOpen = !this.isMenuOpen;
        }
      },
      onClickStyleToggle: function(){
        this.$store.commit('toggleSiteStyle');
      },
    },
    data() {
      return {
        "isMenuOpen": false,
      }
    }
  }
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 999;
  -webkit-box-shadow: rgba(0,0,0,.12) 0 1px 6px,rgba(0,0,0,.12) 0 1px 4px;
  box-shadow: 0 1px 6px rgba(0,0,0,.12),0 1px 4px rgba(0,0,0,.12);
}

header.sideA {
  background: hsla(0,0%,100%,.95);
}

header.sideB {
  background: #D35400;
}

#header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  width: 100%;
  height: 80px;
  margin: 0 auto;
}

#logo {
  width: 180px;
  margin: 18px 40px 0 0;
}

#button-menu {
  display: none;
}

#menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
}

#menu .menu {
  position: relative;
  height: 80px;
  padding: 22px 8px 0;
  margin: 0 12px;
  cursor: pointer;
}

#wrap:not(.sp).sideA #menu .menu:hover .hart {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}

#wrap:not(.sp).sideB #menu .menu:hover:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.menu-change-enter-active,.menu-change-leave-active {
  -webkit-transition: all .4s;
  transition: all .4s;
}

.menu-change-leave-active {
  -webkit-transition-delay: .8s;
  transition-delay: .8s;
}

.menu-change-enter-active {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
}

.menu-change-enter,.menu-change-leave-to {
  -webkit-transform: translateY(-80px);
  transform: translateY(-80px);
}

@media screen and (min-width:900px) {
  header {
    padding: 0 40px;
  }

  #header {
    width: 900px;
  }
}

@media screen and (max-width:900px) {
  header {
    padding: 0;
    overflow: hidden;
  }

  header {
    -webkit-transition: height 0.25s ease-in;
    transition: height 0.25s ease-in;
  }

  header.is-open {
    height: 100%;
    -webkit-transition: height 0.25s ease-in;
    transition: height 0.25s ease-in;
  }

  #header {
    width: 100%;
    padding: 0 15px;
  }

  #logo {
    margin: 14px auto 0;
  }

  #logo, #logo img {
    width: 171px;
  }

  #button-menu {
    display: block;
    position: fixed;
    top: 20px;
    left: 12px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  #menu {
    display: block;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    padding-bottom: 80px;
    overflow-y: scroll;
  }

  #menu .menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    padding: 0 0 2px;
    margin: 0 auto;
  }

  #menu .hart {
    top: 10px;
  }

  #wrap.sideA #menu {
    border-top: 1px solid #e7e7e7;
  }

  #wrap.sideB #menu {
    border-top: 1px solid #e7e7e7;
  }

  #wrap.sideA #menu .menu {
    padding-top: 7px;
    border-bottom: 1px solid #e7e7e7;
  }

  #wrap.sideB #menu .menu {
    padding-top: 7px;
    border-bottom: 1px solid #e7e7e7;
  }


}


@media screen and (min-width:900px) {
  #styleToggleButton img{
    width: 140px;
    height: 70px;
  }
}

@media screen and (max-width:900px) {
  #styleToggleButton img{
    width: 100px;
    height: 70px;
  }
}
</style>
