<template>
  <b-container fluid>
    <home-header />
    <b-row align-h="center" class="default-margin-top">
      <b-col cols="11">
        <h3><font-awesome-icon icon="cat" /> Seus filmes favoritos</h3>
      </b-col>
    </b-row>
    <movie-list />
  </b-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import HomeHeader from '../components/HomeHeader'
import MovieList from '../components/MovieList'

export default {
  components: {
    HomeHeader,
    MovieList
  },

  computed: {
    ...mapGetters(['sessionId'])
  },

  mounted () {
    const sessionId = sessionStorage.getItem('sessionId')
    if (sessionId) {
      this.fetchFavoriteMovies(sessionId)
    } else {
      alert('Faça login para acessar sua lista de favoritos. Miau.')
      this.$router.push({
        path: '/'
      })
    }
  },

  methods: {
    ...mapActions(['fetchFavoriteMovies'])
  }
}
</script>
<style scoped>
</style>
