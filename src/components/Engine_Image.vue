<template>

  <!-- Obrázok -->
  <v-col class="d-flex justify-center align-center ">

    <v-container class="d-flex justify-center align-center fill-height rounded-xl elevation-4 engine-image">

      <v-img
          class="rounded-xl"
          :src="'/img/'+ slug + '_placeholder.jpg'"
          :alt="slug"
      ></v-img>

    </v-container>

  </v-col>

</template>

<script lang="ts">

export default {

  name: 'Engine_Image',

  props: {

    slug: {

      type: String,
      required: true,

    }

  }
}

</script>