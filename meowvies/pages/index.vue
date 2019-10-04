<template>
  <b-container class="footer-margin" fluid>
    <home-header />
    <b-row align-h="center" class="default-margin-top">
      <b-col cols="11">
        <h3><font-awesome-icon icon="cat" /> Filmes mais populares (atualizado diariamente)</h3>
      </b-col>
    </b-row>
    <b-row align-h="center" class="default-margin-top">
      <b-col cols="11">
        <b-row>
          <b-col>
            <label>Procure por um filme:</label>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-input v-model="search" type="text" />
          </b-col>
          <b-col>
            <b-button
              variant="outline-dark"
              @click="searchMovie(search)"
            >
              <font-awesome-icon icon="search" />
              Procurar
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <movie-list />
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
import HomeHeader from '../components/HomeHeader'
import MovieList from '../components/MovieList'

export default {
  components: {
    HomeHeader,
    MovieList
  },

  data () {
    return {
      search: ''
    }
  },

  methods: {
    ...mapActions(['searchMovie'])
  }
}
</script>
<style scoped>
</style>
