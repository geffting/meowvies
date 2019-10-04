import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const apiKey = 'd431c718cc7beea2c420c2a96b81f3c9'

const state = {
  user: null,
  authToken: null
}

const getters = {
  user: state => state.user,
}

const actions = {
  generateToken ({ commit }) {
    axios.get(`/authentication/token/new?api_key=${apiKey}`)
      .then((response) => {
        commit('setAuthToken', response.request_token)
      })
      .catch((error) => {
        alert(error)
      })
  },
  authentication ({ commit }) {
    axios.get(``)
      .then((response) => {

        commit('setUser', user)
      })
      .catch((error) => {
        alert(error)
      })
  },
  loginUser ({ commit }) {
    axios.get(``)
      .then((response) => {

        commit('setUser', user)
      })
      .catch((error) => {
        alert(error)
      })
  }
}

const mutations = {
  setAuthToken: (state, token) => (state.authToken = token)
  setUser: (state, user) => (state.user = user)
}

export default {
  state,
  getters,
  actions,
  mutations
}
