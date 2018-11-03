import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
   isIntroAnimationEnd : false,
   isHalloweenStyle : false,
  },
  mutations: {
    setIntroAnimationEnd  (state) {
      state.isIntroAnimationEnd = true
    },
    toggleSiteStyle (state) {
      state.isHalloweenStyle = !state.isHalloweenStyle
    },
  }
})

export default store
