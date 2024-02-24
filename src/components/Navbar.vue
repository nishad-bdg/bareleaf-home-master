<template>
  <div>
    <v-app-bar app color="white" elevation="0">
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://firebasestorage.googleapis.com/v0/b/bareleaf-admin.appspot.com/o/logo-removebg.png?alt=media&token=ed98e02a-ae33-4abf-b217-c959eff8e116"
            transition="scale-transition"
            width="60"
          />
        </div>
      </router-link>
      <v-toolbar-title class="primary-font brand-title-font"
        >Bareleaf</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <div class="d-none d-sm-flex">
        <v-btn
          depressed
          class="primary-font ttn bg-color white--text py-5 custom-radius"
          @click="openModal"
          >Contact Us</v-btn
        >
      </div>
      <div class="d-flex d-sm-none">
        <v-menu left bottom rounded="lg" transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" aria-label="Menu">
              <v-icon class="black--text">mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="openModal">
              <v-list-item-title class="black--text"
                >Contact Us</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <contact-modal ref="modal_form" />
  </div>
</template>

<script>
import ContactModal from "@/components/ContactModal.vue";
export default {
  components: { ContactModal },
  methods: {
    async openModal() {
      await this.$refs.modal_form.open();
    }
  }
};
</script>

<style lang="scss">
$primary-color: #339400;
.primary-font {
  font-family: "Poppins", sans-serif;
}
.brand-title-font {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.4rem !important;
}
.bg-color {
  background-color: $primary-color !important;
}
.custom-radius {
  border-radius: 8px;
}
a {
  text-decoration: none;
}
</style>
