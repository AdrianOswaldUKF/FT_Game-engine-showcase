<template>

  <v-app>

    <v-main>

      <Navbar></Navbar>
      <router-view :key="$route.fullPath"></router-view>
      <Footer></Footer>

    </v-main>

  </v-app>

</template>


<script lang="ts">
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {

  components: {

    Navbar,
    Footer,

  },



}
</script>