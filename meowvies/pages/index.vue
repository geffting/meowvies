<template>
  <b-container class="main-container" fluid>
    <home-header />
    <b-row class="interval-header" />
    <b-row align-h="center" class="default-margin">
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
        </b-row>
      </b-col>
    </b-row>
    <b-row v-for="movie in movies" :key="movie.id" class="default-margin" align-h="center">
      <b-col cols="11">
        <b-card>
          <b-media no-body>
            <b-media-aside vertical-align="center">
              <b-img blank blank-color="#ccc" width="180" height="256" alt="placeholder" />
              <b-media-body class="ml-3">
                <h5>
                  {{ movie.title }}
                </h5>
                <p>
                  {{ movie.description }}
                </p>
              </b-media-body>
            </b-media-aside>
          </b-media>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import HomeHeader from '../components/HomeHeader'

export default {
  components: {
    HomeHeader
  },

  data () {
    return {
      search: '',
      movies: []
    }
  },

  mounted () {
    const movieList = [
      {
        'id': 1,
        'title': 'Harry Potter',
        'description': 'filme de magia'
      },
      {
        'id': 2,
        'title': 'Duro de Matar',
        'description': 'filme de tiro'
      },
      {
        'id': 3,
        'title': 'Velozes e Furiosos',
        'description': 'filme de carro'
      }
    ]

    this.movies = movieList

    console.log(this.movies) // eslint-disable-line no-console
  }
}
</script>
<style>
.main-container {
  margin-bottom: 20px;
}

.interval-header {
  padding-top: 90px;
}

.default-margin {
  margin-top: 15px;
}

</style>
