import Vue from 'vue'
import Vuex from 'vuex'

import MovieList from './modules/MovieList'
import UserControll from './modules/UserControll'

Vue.use(Vuex)

export const store = () => {
  return new Vuex.Store({
    modules: {
      namespaced: true,
      MovieList,
      UserControll
    }
  })
}

export default store
