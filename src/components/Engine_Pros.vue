<template>

  <v-col class="d-flex justify-center align-center" cols="12" md="6">

    <v-card class="rounded-xl fill-height elevation-4">

      <v-card-title>

        <h1 class="d-flex justify-center">Výhody</h1>
        <hr>

      </v-card-title>

      <v-card-text class="card-text">

        <li
            v-for="(pros, index) in engine.pros"
            :key="index"
        >{{pros}}</li>

      </v-card-text>

    </v-card>

  </v-col>

</template>

<script lang="ts">

import type {Engine} from "@/types/types.ts";

export default {

  name: "Engine_Pros",

  props: {

    engine: {

      type: Object as () => Engine,
      required: true

    }

  }

}

</script>