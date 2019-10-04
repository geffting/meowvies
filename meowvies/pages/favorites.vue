<template>
  <b-container fluid>
    <home-header />
    <b-row align-h="center" class="default-margin-top">
      <b-col cols="11">
        <h3>Seus filmes favoritos</h3>
      </b-col>
    </b-row>
    <movie-list />
  </b-container>
</template>
<script>
import HomeHeader from '../components/HomeHeader'
import MovieList from '../components/MovieList'

export default {
  components: {
    HomeHeader,
    MovieList
  }
}
</script>
<style scoped>
</style>
