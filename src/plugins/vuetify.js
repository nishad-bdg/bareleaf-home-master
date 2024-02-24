import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#e0efd9",
        secondary: "#f9f4e0"
      },
      dark: {
        primary: "#e0efd9",
        secondary: "#f9f4e0"
      }
    }
  }
});

export default vuetify;
