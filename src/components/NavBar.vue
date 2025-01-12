<template>

  <v-app-bar app-bar>

    <v-tabs>

      <v-tab to="/">Domov</v-tab>
      <v-tab v-for="(engine, index) in engines" :key="index" :to="'/engines/' + engine.slug">{{ engine.name }}</v-tab>
      <v-tab to="/contact">Kontakt</v-tab>
      <v-tab to="/donation">Donation</v-tab>

    </v-tabs>

    <v-spacer></v-spacer>
    <v-switch class="d-flex justify-center" @click="toggleTheme"></v-switch>

  </v-app-bar>



</template>

<script lang="ts">

import enginesJSON from "@/data/engines.json";

export default {

  name: "NavBar",

  data() {

    return {

      engines: enginesJSON.engines,

    }

  },

  props: {
    theme: String,
  },

  methods: {

    toggleTheme() {

      this.$emit("toggle-theme");

    },

  },


}

</script>