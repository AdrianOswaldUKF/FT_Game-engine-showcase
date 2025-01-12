<template>

  <!-- Nadpis, popis, obrázok -->
  <Engine_Banner :engine="engine" :slug="slug"></Engine_Banner>

  <br>

  <!-- História -->
  <Engine_History :engine="engine"></Engine_History>

  <br>

  <!-- Obrázky -->
  <Engine_Images :engine="engine"></Engine_Images>

  <br>

  <!-- Výhody/Nevýhody -->
  <Engine_Pros_Cons :engine="engine"></Engine_Pros_Cons>

    <!-- Cena -->
  <EngineLicenses :engine="engine"></EngineLicenses>


</template>

<script lang="ts">
import { defaultEngine } from "@/data/defaultEngine";
import enginesJSON from "@/data/engines.json"
import EngineLicenses from "@/components/Engine_Licenses.vue";
import Engine_History from "@/components/Engine_History.vue";
import Engine_Pros from "@/components/Engine_Pros.vue";
import Engine_Cons from "@/components/Engine_Cons.vue";
import Engine_Pros_Cons from "@/components/Engine_Pros_Cons.vue";
import Engine_Images from "@/components/Engine_Images.vue";
import Engine_Title_Description from "@/components/Engine_Title_Description.vue";
import Engine_Image from "@/components/Engine_Image.vue";
import Engine_Banner from "@/components/Engine_Banner.vue";

export default {

  name: "EngineView",

  components: {
    Engine_Banner,
    Engine_Image,
    Engine_Title_Description,
    Engine_Images,
    Engine_Pros_Cons,
    Engine_Cons,
    Engine_Pros,
    Engine_History,
    EngineLicenses
  },

  data() {

    return {

      engine: enginesJSON.engines.find(
          engine => engine.slug === this.slug
      ) || defaultEngine

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
