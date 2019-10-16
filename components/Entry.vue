<template>
  <v-card-text>
    <form @submit.prevent="`${entry(entryType)}`">
      <p v-if="error" class="red--text">{{ error.message }}</p>
      Username: <input v-model="user" type="text">
      <br>
      Password: <input v-model="password" type="password">
      <br><br>
      <input type="submit" :value="entryType">
    </form>
  </v-card-text>
</template>

<script>
import axios from 'axios'
import { auth } from '~/plugins/firebase'
export default {
  name: 'Entry',
  props: {
    entryType: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      user: '',
      password: '',
      error: null
    }
  },
  methods: {
    async entry (entryType) { // takes 'register' or 'signin'
      try {
        axios.post(`/${entryType}`, {
          user: this.user,
          password: this.password
        })
          .then(async(response) => {
            console.log(response.data)
            if (entryType === 'register') {
              await auth.createUserWithEmailAndPassword(this.user, this.password)
              .then((res) => {
                  console.log(res)
                })
              .catch((error) => {
                // Handle Errors here.
                // console.log(error);
                this.error = error
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              })

            } else {
              await auth.signInWithEmailAndPassword(this.user, this.password)
              .then((res) => {
                  console.log(res)
                })
              .catch((error) => {
                this.error = error
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              })
            }
            this.user = ''
            this.password = ''
          })
      } catch (err) {
        console.log(err)
      }
    }
  }

}
</script>

<style>

</style>
