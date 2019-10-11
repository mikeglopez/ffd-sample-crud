<template>
  <v-card-text>
    <form @submit.prevent="`${entry(entryType)}`">
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
      password: ''
    }
  },
  methods: {
    entry (entryType) { // takes 'register' or 'signin'
      try {
        axios.post(`/${entryType}`, {
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
    }
  }

}
</script>

<style>

</style>
