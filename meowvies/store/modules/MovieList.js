import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const apiKey = 'd431c718cc7beea2c420c2a96b81f3c9'
const language = 'pt-BR'

const state = {
  movieList: []
}

const getters = {
  movieList: state => state.movieList
}

const actions = {
  fetchPopularMovies ({ commit }) {
    axios.get(`/movie/popular?api_key=${apiKey}&language=${language}`)
      .then((response) => {
        const movies = response.data.results.map((movie) => {
          let poster

          if (movie.poster_path) {
            poster = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          } else {
            poster = 'https://www.jamgolf.com/commerce/static/img/global/default.png'
          }

          return {
            'id': movie.id,
            'title': movie.title,
            'description': movie.overview,
            poster,
            'date': movie.release_date
          }
        })
        commit('setMovies', movies)
      })
      .catch((error) => {
        alert(error)
      })
  },
  searchMovie ({ commit }, query) {
    axios.get(`/search/movie?api_key=${apiKey}&language=${language}&query=${query}`)
      .then((response) => {
        const result = response.data.results.map((movie) => {
          let poster

          if (movie.poster_path) {
            poster = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          } else {
            poster = 'https://www.jamgolf.com/commerce/static/img/global/default.png'
          }

          return {
            'id': movie.id,
            'title': movie.title,
            'description': movie.overview,
            poster,
            'date': movie.release_date
          }
        })
        commit('setMovies', result)
      })
      .catch((error) => {
        alert(error)
      })
  },
  fetchFavoriteMovies ({ commit }, sessionId) {
    axios.get(`/account/null/favorite/movies?api_key=${apiKey}&language=${language}&session_id=${sessionId}`)
      .then((response) => {
        const result = response.data.results.map((movie) => {
          let poster

          if (movie.poster_path) {
            poster = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          } else {
            poster = 'https://www.jamgolf.com/commerce/static/img/global/default.png'
          }

          return {
            'id': movie.id,
            'title': movie.title,
            'description': movie.overview,
            poster,
            'date': movie.release_date
          }
        })
        commit('setMovies', result)
      })
      .catch((error) => {
        alert(error)
      })
  },
  markAsFavorite ({ commit }, sessionId, movieId, favorite) {
    const data = {
      'media_type': 'movie',
      'media_id': movieId,
      favorite
    }

    axios.post(`/account/null/favorite?api_key=${apiKey}&session_id=${sessionId}`, data, { headers: { 'Content-Type': 'application/json;charset=utf-8' } })
      .then((response) => {
        // do something
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
