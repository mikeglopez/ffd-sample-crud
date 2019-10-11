<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          Welcome to Tacomatic!
        </v-card-title>
        <v-card-text>
          <p>
            Register to satisfy your taco craving
          </p>
          <form @submit.prevent="register">
            Username: <input v-model="user" type="text">
            <br>
            Password: <input v-model="password" type="password">
            <br><br>
            <input type="submit" value="Register">
          </form>
          <br>
          <p>
            Or <nuxt-link to="/Signin">
              sign in
            </nuxt-link>
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    register () {
      try {
        axios.post('/register', {
          user: this.user,
          password: this.password
        })
          .then((response) => {
            console.log(response.data)
            this.user = ''
            this.password = ''
          })
      } catch (err) {
        console.log(err)
      }
    },
    head () {
      return {
        title: 'Tacomatic Registration',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Register or sign in to satisfy your taco craving'
          }
        ]
      }
    }
  }
}
</script>
