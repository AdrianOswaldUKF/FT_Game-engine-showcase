<template>


  <!-- Nadpis, popis, obrázok -->
  <v-container class="visible rounded-xl">
    <v-row>

      <v-col class="d-flex justify-center align-center">

        <v-card class="rounded-xl fill-height elevation-4">
          <v-card-title>
            <h1 class="d-flex justify-center align-center">
              {{ engine.name }}
            </h1>
            <hr>
          </v-card-title>

          <v-card-text class="mt-5rem card-text">
            {{ engine.description }}
          </v-card-text>

          <v-card-actions class="d-flex justify-center align-center">
            <v-btn variant="elevated" color="secondary" :href="engine.source" target="_blank">Zdroj</v-btn>
          </v-card-actions>
        </v-card>

      </v-col>

      <v-col class="d-flex justify-center align-center ">

        <v-container class="d-flex justify-center align-center fill-height rounded-xl elevation-4">
          <v-img class="rounded-xl" :src="'/img/'+ slug + '_placeholder.jpg'" :alt="slug"></v-img>
        </v-container>

      </v-col>

    </v-row>
  </v-container>

  <br>

  <!-- História -->
  <v-container class="visible rounded-xl">
    <v-card class="rounded-xl elevation-4">
      <v-card-title>
        <h1 class="d-flex justify-center">História</h1>
        <hr>
      </v-card-title>

      <v-card-text>
        <v-expansion-panels class="my-4" variant="popout">

          <v-expansion-panel v-for="version in engine.versions" :key="version.name">
            <v-expansion-panel-title>{{ version.name }}</v-expansion-panel-title>
            <v-expansion-panel-text>{{ version.description }}</v-expansion-panel-text>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-card-text>

    </v-card>
  </v-container>

  <br>

  <!-- Obrázky -->
  <v-container class="visible rounded-xl">
    <v-card class="rounded-xl elevation-4">
      <v-card-title>
        <h1 class="d-flex justify-center">Obrázky</h1>
        <hr>
      </v-card-title>

      <v-card-text>
        <v-carousel show-arrows="hover" cycle hide-delimiter-background>

          <v-carousel-item v-for="image in engine.images" :key="image">
            <v-img :src="'/'+image" :alt="image" cover></v-img>
          </v-carousel-item>

        </v-carousel>
      </v-card-text>

    </v-card>
  </v-container>


</template>

<script lang="ts">

import enginesJSON from "@/data/engines.json"

export default {

  name: "EngineView",

  data() {

    return {

      engine: enginesJSON.engines.find(
          engine => engine.slug === this.slug
      ) || { name: "None", description: "None", source: "None", versions: [], images: [] },

    }

  },

  props: {

    slug: {

      type: String,
      required: true

    }

  }

}
</script>
