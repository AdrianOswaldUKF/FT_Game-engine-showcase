<template>

  <v-container class="rounded-xl">

    <v-row>

      <Engine_Title_Description :engine="engine"></Engine_Title_Description>

      <Engine_Image :slug="slug"></Engine_Image>

    </v-row>

  </v-container>

</template>

<script lang="ts">

import type {Engine} from "@/types/types.ts";
import Engine_Image from "@/components/Engine_Image.vue";
import Engine_Title_Description from "@/components/Engine_Title_Description.vue";

export default {

  name: "Engine_Banner",

  components: {

    Engine_Title_Description,
    Engine_Image

  },

  props: {

    slug: {

      type: String,
      required: true

    },

    engine: {

      type: Object as () => Engine,
      required: true

    }

  }

}

</script>