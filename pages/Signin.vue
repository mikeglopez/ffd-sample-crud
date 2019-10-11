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
          Sign In
        </v-card-title>
        <v-card-text>
          <form @submit.prevent="signin">
            Username: <input v-model="user" type="text">
            <br>
            Password: <input v-model="password" type="password">
            <br><br>
            <input type="submit" value="Sign In">
          </form>
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
    signin () {
      try {
        axios.post('/signin', {
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
        title: 'Tacomatic Sign In',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Sign in to satisfy your taco craving'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
