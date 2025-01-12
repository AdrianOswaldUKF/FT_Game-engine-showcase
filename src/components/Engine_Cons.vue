<template>

  <v-col class="d-flex justify-center align-center ">

    <v-card class="rounded-xl fill-height elevation-4">

      <v-card-title>

        <h1 class="d-flex justify-center">Nevýhody</h1>
        <hr>

      </v-card-title>

      <v-card-text class="card-text">

        <li
            v-for="(cons, index) in engine.cons"
            :key="index"
        >{{cons}}</li>

      </v-card-text>

    </v-card>

  </v-col>

</template>

<script lang="ts">

import type {Engine} from "@/types/types.ts";

export default {

  name: "Engine_Cons",

  props: {

    engine: {
      type: Object as () => Engine,
      required: true
    }

  }
}

</script>