<template>
  <div v-if="movieList">
    <b-row v-for="movie in movieList" :key="movie.id" class="default-margin-top" align-h="center">
      <b-col cols="11">
        <b-card :img-src="movie.poster" img-alt="poster" img-height="300" img-left>
          <b-card-text>
            <h3> {{ movie.title }} </h3>
            <i>{{ movie.date }}</i>
            <hr>
            <p> {{ movie.description }} </p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
  <div v-else>
    <b-row align-h="center">
      <b-col cols="5" class="spinner-align">
        <b-spinner label="Spinning" class="spinner" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieList',

  computed: {
    ...mapGetters(['movieList'])
  },

  created () {
    const path = this.getCurrentPath()
    this.fetchMovies(path)
  },

  methods: {
    ...mapActions(['fetchMovies']),

    getCurrentPath () {
      const currentRoute = this.$nuxt.$route.name

      if (currentRoute === 'index') {
        return '/movie/popular'
      } else if (currentRoute === 'favorites') {
        const accountId = null // ver como pegar isso depois
        return `/account/${accountId}/favorite/movies`
      } else {
        return null
      }
    }
  }
}
</script>
<style scoped>

.spinner-align {
  text-align: center;
  margin-top: 30px;
}

.spinner {
  width: 100px;
  height: 100px;
}

</style>
