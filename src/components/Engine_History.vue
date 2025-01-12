<template>
  <!-- Accordion -->
  <v-container class="rounded-xl">

    <v-card class="rounded-xl elevation-4">

      <v-card-title>

        <h1 class="d-flex justify-center">História</h1>
        <hr>

      </v-card-title>

      <v-card-text>

        <v-expansion-panels
            class="my-4"
            variant="popout"
        >

          <v-expansion-panel
              v-for="(version, index) in engine.versions"
              :key="index"
          >

            <v-expansion-panel-title>{{ version.name }}</v-expansion-panel-title>
            <v-expansion-panel-text>{{ version.description }}</v-expansion-panel-text>

          </v-expansion-panel>

        </v-expansion-panels>

      </v-card-text>

    </v-card>

  </v-container>

</template>

<script lang="ts">

import type {Engine} from "@/types/types.ts";


export default {

  name: "Engine_Accordion",

  props: {

    engine: {
      type: Object as () => Engine,
      required: true,
    }

  }
}
</script>