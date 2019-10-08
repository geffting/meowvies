<template>
  <b-container class="header" fluid>
    <b-row>
      <b-col cols="1">
        <nuxt-link to="/">
          <img src="cat.png" class="cat-img">
        </nuxt-link>
      </b-col>
      <b-col cols="2" />
      </b-col>
      <b-col cols="3" class="main-links">
        <nuxt-link
          to="/"
        >
          <b>Populares</b>
        </nuxt-link>
      </b-col>
      <b-col v-if="session" cols="3" class="main-links">
        <nuxt-link
          to="/favorites"
        >
          <b>Seus Favoritos</b>
        </nuxt-link>
      </b-col>
      <b-col v-else cols="3" class="main-links">
        <p v-b-tooltip.hover title="Faça login para acessar seus favoritos">
          <b>Seus Favoritos</b>
        </p>
      </b-col>
      <b-col v-if="!session" cols="3" class="login-btn">
        <b-button
          variant="light"
          @click="generateToken"
        >
          Entrar
        </b-button>
      </b-col>
      <b-col v-else cols="3" class="login-btn">
        <b-button
          variant="light"
          @click="logout"
        >
          Sair
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',

  data () {
    return {
      session: null
    }
  },

  computed: {
    ...mapGetters(['requestToken'])
  },

  mounted () {
    const sessionId = sessionStorage.getItem('sessionId')

    if (sessionId) {
      this.session = sessionId
    }

    const url = new URL(window.location.href)
    const token = url.searchParams.get('request_token')
    const approved = url.searchParams.get('approved')
    if (token != null && approved === 'true') {
      this.createSession(token)
    }

    this.$store.watch(
      (state, getters) => getters.requestToken,
      (newToken) => {
        window.location.replace(`https://www.themoviedb.org/authenticate/${newToken}?redirect_to=http://localhost:3000/`)
      }
    )

    this.$store.watch(
      (state, getters) => getters.sessionId,
      () => {
        const session = sessionStorage.getItem('sessionId')

        if (session) {
          this.session = session
        }
      }
    )
  },

  methods: {
    ...mapActions(['generateToken', 'createSession', 'fetchFavoriteMovies', 'quitSession']),

    logout () {
      this.$router.push({
        path: '/'
      })

      this.session = null
      this.quitSession()
    }
  }
}
</script>
<style scoped>
.header {
  height: 90px;
  text-align: center;
  background-color: #C60021;
  box-shadow: 0px 4px 15px 0px rgba(32,33,36,0.28);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.cat-img {
  height: 90px;
  width: auto;
}

.main-links {
  padding: 33px 0px 33px 0px;
}

.main-links a {
  color: black;
}

.main-links p {
  text-decoration: line-through;
}

.login-btn {
  padding: 25px 20px 25px 0px;
  text-align: right;
}

.md-form {
  margin: 10px 0px 10px 0px;
}

.md-form label {
  margin-top: 5px;
}

</style>
