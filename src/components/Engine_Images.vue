<template>

  <!-- Carousel -->
  <v-container class="rounded-xl">

    <v-card class="rounded-xl elevation-4">

      <v-card-title>

        <h1 class="d-flex justify-center">Obrázky</h1>
        <hr>

      </v-card-title>

      <v-card-text>

        <v-carousel
            show-arrows="hover"
            cycle
            hide-delimiter-background
        >

          <v-carousel-item
              v-for="(image, index) in engine.images"
              :key="index"
          >

            <v-img
                :src="'/img/'+image"
                :alt="image"
            ></v-img>

          </v-carousel-item>

        </v-carousel>

      </v-card-text>

    </v-card>

  </v-container>

</template>

<script lang="ts">

import type {Engine} from "@/types/types.ts";

export default {

  name: "Engine_Images",

  props: {

    engine: {

      type: Object as () => Engine,
      required: true

    }

  }

}

</script>