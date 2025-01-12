<template>

  <span v-html="price"></span>

</template>

<script lang="ts">

export default {

  name: "EngineLicensePrice",

  props: {

    price: {

      type: String,
      required: true,

    }

  }

}

</script>