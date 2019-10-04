import Vue from 'vue'
import Vuex from 'vuex'

import MovieList from './modules/MovieList'

Vue.use(Vuex)

export const store = () => {
  return new Vuex.Store({
    modules: {
      namespaced: true,
      MovieList
    }
  })
}

export default store
