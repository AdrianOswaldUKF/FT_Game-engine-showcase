<template>

  <v-app-bar app-bar>

    <v-tabs>

      <v-tab to="/">Home</v-tab>
      <v-tab v-for="(engine, index) in engines" :key="index" :to="'/engines/' + engine.slug">{{ engine.name }}</v-tab>
      <v-tab to="/contact">Contact</v-tab>

    </v-tabs>

    <v-spacer></v-spacer>
    <v-switch class="d-flex justify-center mr-15" @click="toggleTheme">toggle theme</v-switch>

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