<template>
  <div v-if="movieList">
    <b-row v-for="movie in movieList" :key="movie.id" class="default-margin-top" align-h="center">
      <b-col cols="11">
        <b-card :img-src="movie.poster" img-alt="poster" img-height="300" img-left class="movie-card">
          <b-card-text>
            <b-row>
              <b-col>
                <h3> {{ movie.title }} </h3>
              </b-col>
              <b-col v-if="user" class="text-right">
                <b-button
                  v-if="favorite"
                  variant="outline-dark"
                >
                  <font-awesome-icon icon="ban" />
                  Remover dos favoritos
                </b-button>
                <b-button
                  v-else
                  variant="outline-dark"
                >
                  <font-awesome-icon icon="paw" />
                  Adicionar aos favoritos
                </b-button>
              </b-col>
            </b-row>
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

  data () {
    return {
      user: true,
      favorite: false
    }
  },

  computed: {
    ...mapGetters(['movieList'])
  },

  created () {
    this.fetchMovies()
  },

  methods: {
    ...mapActions(['fetchMovies'])
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

.movie-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
