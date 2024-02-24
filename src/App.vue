<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Home from "./views/Home.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: { Navbar, AppFooter },
  name: "App"
};
Home;
</script>

<style lang="scss">
.primary-font {
  font-family: "Poppins", sans-serif;
}
.brand-title-font {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
</style>
