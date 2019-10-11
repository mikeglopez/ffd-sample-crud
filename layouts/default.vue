<template>
  <v-app dark>
    <v-app-bar dark color="#1C334A" app>
      <v-toolbar-title>Tacomatic</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="false"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {

}
</script>
