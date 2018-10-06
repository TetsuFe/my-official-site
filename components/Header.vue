<template>
  <header class="sideA">
    <div id="header">
      <div id="logo">
        <a href="./">
          <img src="~/assets/images/common/logo.png" sizes="(min-width:80px) 50vw, 100vw" width="150" srcset="~/assets/images/common/logo.png 200w, ~/assets/images/common/logo.png 400w">
        </a>
      </div>
      <div id="button-menu" @click="onClickMenuButton">
        <img v-if="!isMenuOpen" src="~/assets/images/icons/menu.svg" sizes="(min-width:100px) 50vw, 100vw" width="42" srcset="~/assets/images/icons/menu.svg 200w, ~/assets/images/icons/menu.svg 400w">
        <img v-else src="~/assets/images/icons/close.svg" sizes="(min-width:100px) 50vw, 100vw" width="42" srcset="~/assets/images/icons/close.svg 200w, ~/assets/images/icons/close.svg 400w">
      </div>
      <nav id="menu">
        <div id="menu01" class="menu" v-scroll-to="'#top'" @click="onClickMenuButton">
          <!--<img src="http://qruppo.com/img/common/sideA/hart08.png" sizes="(min-width:80px) 50vw, 100vw" width="40" srcset="http://qruppo.com/img/common/sideA/hart08.png 200w, http://qruppo.com/img/common/sideA/hart08@2x.png 400w" class="hart">-->
          <img src="~/assets/images/common/top.png" sizes="(min-width:80px) 50vw, 100vw" width="41" srcset="~/assets/images/common/top.png 200w, ~/assets/images/common/top.png 400w">
        </div>
        <div id="menu02" class="menu" v-scroll-to="'#news'" @click="onClickMenuButton">
          <img src="~/assets/images/common/news.png" sizes="(min-width:180px) 50vw, 100vw" width="58" srcset="~/assets/images/common/news.png 200w, ~/assets/images/common/news.png 400w">
        </div>
        <div id="menu03" class="menu" v-scroll-to="'#story'" @click="onClickMenuButton">
          <img src="~/assets/images/common/story.png" sizes="(min-width:180px) 50vw, 100vw" width="58" srcset="~/assets/images/common/story.png 200w, ~/assets/images/common/story.png 400w">
        </div>
        <div id="menu04" class="menu" v-scroll-to="'#keyword'" @click="onClickMenuButton">
          <img src="~/assets/images/common/keyword.png" sizes="(min-width:180px) 50vw, 100vw" width="92" srcset="~/assets/images/common/keyword.png 200w, ~/assets/images/common/keyword.png 400w">
        </div>
        <div id="menu05" class="menu" @click="onClickMenuButton">
          <a href="http://swiftfe0.hatenablog.com">
            <img src="~/assets/images/common/blog.png" sizes="(min-width:180px) 50vw, 100vw" width="49" srcset="~/assets/images/common/blog.png 200w, ~/assets/images/common/blog.png 400w">
          </a>
        </div>
      </nav>
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
    methods: {
      onClickMenuButton() {
        if (process.browser) {
          document.querySelector('header').classList.toggle('is-open');
          this.isMenuOpen = !this.isMenuOpen;
        }
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
  width: 100vw;
  height: 80px;
  z-index: 999;
}

header.sideA {
  background: hsla(0,0%,100%,.95);
  -webkit-box-shadow: rgba(0,0,0,.12) 0 1px 6px,rgba(0,0,0,.12) 0 1px 4px;
  box-shadow: 0 1px 6px rgba(0,0,0,.12),0 1px 4px rgba(0,0,0,.12);
}

header.sideB {
  background: #000;
}

#header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  width: 1280px;
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

#wrap.sideB header.sideB #menu .menu:before {
  content: "";
  position: absolute;
  top: calc(50% - 2px);
  left: 0;
  background: #f20000;
  width: 100%;
  height: 2px;
  -webkit-transition: -webkit-transform .25s ease;
  transition: -webkit-transform .25s ease;
  transition: transform .25s ease;
  transition: transform .25s ease,-webkit-transform .25s ease;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
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

@media screen and (max-width:1280px) {
  header {
    padding: 0 40px;
    overflow-x: scroll;
  }

  #header {
    width: 1320px;
  }
}

@media screen and (max-width:768px) {
  header {
    padding: 0;
    overflow: hidden;
  }

  header.is-open {
    height: 100%;
    -webkit-transition: height 0.25s ease-in;
    transition: height 0.25s ease-in;
  }

  header {
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

  #wrap.sideA #menu .menu {
    padding-top: 7px;
    border-bottom: 1px solid #e7e7e7;
  }

  #wrap.sideB #menu {
    border-top: 1px solid #333;
  }

  #wrap.sideB #menu .menu {
    border-bottom: 1px solid #333;
  }

}
</style>
