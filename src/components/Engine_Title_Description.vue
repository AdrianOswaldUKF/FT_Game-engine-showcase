<template>
  <!-- Nadpis, popis -->
  <v-col class="d-flex justify-center align-center" sm="12" md="6" cols="12">

    <v-card class="rounded-xl fill-height elevation-4">

      <v-card-title>

        <h1 class="d-flex justify-center align-center">
          {{ engine.name }}
        </h1>
        <hr>

      </v-card-title>

      <v-card-text class="mt-5">

        {{ engine.description }}

      </v-card-text>

      <v-card-actions class="d-flex justify-center align-center">

        <v-btn variant="elevated" color="primary" :href="engine.source" target="_blank">Zdroj</v-btn>
        <v-btn variant="elevated" color="secondary" :href="engine.website" target="_blank">Oficiálna Stránka</v-btn>

      </v-card-actions>

    </v-card>

  </v-col>

</template>

<script lang="ts">

import type {Engine} from "@/types/types.ts";

export default {

  name: "Engine_Title_Description",

  props: {

    engine: {
      type: Object as () => Engine,
      required: true
    }

  }

}
</script>