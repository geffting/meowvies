import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const apiKey = 'd431c718cc7beea2c420c2a96b81f3c9'

const state = {
  sessionId: null,
  requestToken: null
}

const getters = {
  sessionId: state => state.sessionId,
  requestToken: state => state.requestToken
}

const actions = {
  generateToken ({ commit }) {
    axios.get(`/authentication/token/new?api_key=${apiKey}`)
      .then((response) => {
        commit('setRequestToken', response.data.request_token)
      })
      .catch((error) => {
        alert(error)
      })
  },
  createSession ({ commit }, token) {
    axios.post(`/authentication/session/new?api_key=${apiKey}`, { request_token: token })
      .then((response) => {
        commit('setSessionId', response.data.session_id)
        sessionStorage.setItem('sessionId', response.data.session_id)
      })
      .catch((error) => {
        alert(error)
      })
  },
  quitSession () {
    sessionStorage.clear()
  }
}

const mutations = {
  setRequestToken: (state, token) => (state.requestToken = token),
  setSessionId: (state, id) => (state.sessionId = id)
}

export default {
  state,
  getters,
  actions,
  mutations
}
