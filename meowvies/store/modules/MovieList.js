import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const apiKey = 'd431c718cc7beea2c420c2a96b81f3c9'
// axios.defaults.headers.common.Authorization = ???

const state = {
  movieList: []
}

const getters = {
  movieList: state => state.movieList
}

const actions = {
  fetchMovies ({ commit }, path) {
    axios.get(`${path}?api_key=${apiKey}&language=pt-BR`)
      .then((response) => {
        const movies = response.data.results.map((movie) => {
          return {
            'id': movie.id,
            'title': movie.title,
            'description': movie.overview,
            'poster': `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
            'date': movie.release_date
          }
        })
        commit('setMovies', movies)
      })
      .catch((error) => {
        alert(error)
      })
  }
}

const mutations = {
  setMovies: (state, movies) => (state.movieList = movies)
}

export default {
  state,
  getters,
  actions,
  mutations
}
