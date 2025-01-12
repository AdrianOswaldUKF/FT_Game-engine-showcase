<template>

  <v-container>

    <v-data-table-virtual
        class="rounded-xl"
        :items="engine.licenses"
        item-value="Cena"
        :disable-sort="true"
    >
      <template v-slot:item.Cena="{ item }">

        <EngineLicensePrice :price="item.Cena" />

      </template>

    </v-data-table-virtual>

  </v-container>

</template>

<script lang="ts">

import type { Engine } from "@/types/types";
import EngineLicensePrice from "@/components/Engine_Licenses_Price.vue";

export default {

  name: "EngineLicenses",

  components: {

    EngineLicensePrice,

  },

  props: {

    engine: {

      type: Object as () => Engine,
      required: true,

    },

  },

};
</script>
