<template>
  <b-container class="header" fluid>
    <b-row>
      <b-col cols="1">
        <img src="cat.png" class="cat-img">
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
      <b-col v-if="loggedUser" cols="3" class="main-links">
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
      <b-col cols="3" class="login-btn">
        <b-button
          v-b-modal.modal-login
          variant="light"
        >
          Entrar
        </b-button>
        <b-button
          v-b-modal.modal-register
          variant="light"
        >
          Cadastre-se
        </b-button>
      </b-col>
    </b-row>
    <b-modal id="modal-login" title="Entrar" @ok="login">
      <b-row class="md-form">
        <b-col cols="3">
          <label for="username">Username: </label>
        </b-col>
        <b-col cols="9">
          <b-form-input id="username" v-model="username" type="text" />
        </b-col>
      </b-row>
      <b-row class="md-form">
        <b-col cols="3">
          <label for="password">Senha: </label>
        </b-col>
        <b-col cols="9">
          <b-form-input id="password" v-model="password" type="password" />
        </b-col>
      </b-row>
    </b-modal>
    <b-modal id="modal-register" title="Cadastre-se" @ok="register">
      <b-row class="md-form">
        <b-col cols="3">
          <label for="username">Username: </label>
        </b-col>
        <b-col cols="9">
          <b-form-input id="username" v-model="username" type="text" />
        </b-col>
      </b-row>
      <b-row class="md-form">
        <b-col cols="3">
          <label for="password">Senha: </label>
        </b-col>
        <b-col cols="9">
          <b-form-input id="password" v-model="password" type="password" />
        </b-col>
      </b-row>
    </b-modal>
  </b-container>
</template>
<script>
export default {
  name: 'HomeHeader',

  data () {
    return {
      username: '',
      password: '',
      loggedUser: false
    }
  },

  methods: {
    login () {
      // do login
    },
    register () {
      // do register
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
