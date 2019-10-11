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
          <Entry :entry-type="'register'" />
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
import Entry from '../components/Entry'
export default {
  components: {
    Entry
  },
  methods: {
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
