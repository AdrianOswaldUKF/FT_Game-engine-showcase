<template>

  <v-container class="rounded-xl">

    <v-row>

      <Engine_Pros :engine="engine"></Engine_Pros>
      <Engine_Cons :engine="engine"></Engine_Cons>

    </v-row>

  </v-container>

</template>
<script lang="ts">

import type {Engine} from "@/types/types.ts";
import Engine_Cons from "@/components/Engine_Cons.vue";
import Engine_Pros from "@/components/Engine_Pros.vue";

export default {

  name: "Engine_Pros_Cons",

  components: {

    Engine_Cons,
    Engine_Pros

  },

  props: {

    engine: {
      type: Object as () => Engine,
      required: true
    }

  }

}
</script>