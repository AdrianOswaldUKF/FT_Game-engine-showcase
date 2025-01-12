<template>

  <v-theme-provider :theme="theme">

    <v-app>



      <v-main>

        <NavBar :theme="theme" @toggle-theme="toggleTheme"></NavBar>
        <RouterView :key="$route.fullPath"></RouterView>
        <Footer></Footer>

      </v-main>


    </v-app>

  </v-theme-provider>

</template>


<script lang="ts">
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

export default {

  data() {

    return {

      theme : "dark",

    }

  },

  components: {

    NavBar: NavBar,
    Footer,

  },

  methods: {

    toggleTheme() {

      this.theme = this.theme === "dark" ? "light" : "dark";

    },

  },

}
</script>