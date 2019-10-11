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
        <Entry :entry-type="'signin'" />
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
