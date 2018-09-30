import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
   isIntroAnimationEnd : false
  },
  mutations: {
   setIntroAnimationEnd  (state) {
      state.isIntroAnimationEnd = true
    }
  }
})

export default store
