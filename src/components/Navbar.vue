<template>

  <v-app-bar>

    <v-tabs>

      <v-tab to="/">Home</v-tab>
      <v-tab v-for="engine in engines" :key="engine.id" :to="'/engines/' + engine.slug">{{ engine.name }}</v-tab>

    </v-tabs>

  </v-app-bar>

</template>

<script lang="ts">
import enginesJSON from "@/data/engines.json";

export default {
  name: "NavBar",

  data() {

    return {

      engines: enginesJSON.engines

    }

  },
}
</script>