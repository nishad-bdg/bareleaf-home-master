<template>
  <v-footer padless>
    <v-row class="footer-color" justify="center" no-gutters>
      <v-col class="footer-color py-4 text-center" cols="12">
        {{ new Date().getFullYear() }} — &#xa9; Bareleaf
        <br />
        Made with ❤️ by
        <a
          class="font-weight-bold blue--text text--darken-3"
          rel="noopener"
          href="https://teamtigers.github.io"
          target="_blank"
          >TeamTigers</a
        >
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Services"]
  })
};
</script>

<style lang="scss" scoped>
.footer-color {
  background-color: #f7f9f9 !important;
}
a {
  text-decoration: none;
}
</style>
