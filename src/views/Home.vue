<template>
  <div>
    <v-container>
      <div class="my-lg-8 my-xl-10">
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="6"
            v-for="info in cardInfo"
            :key="info.title"
          >
            <a :href="info.link" target="_blank" rel="noreferrer">
              <v-card class="card-style pt-2" :color="info.color" rounded="lg">
                <v-img contain :src="info.image" class="card-image">
                  <template v-slot:placeholder>
                    <v-sheet :color="info.skeletonColor">
                      <v-skeleton-loader
                        class="mx-auto"
                        type="image"
                      ></v-skeleton-loader>
                    </v-sheet>
                  </template>
                </v-img>

                <v-tooltip left>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      absolute
                      :color="info.buttonColor"
                      class="white--text topRight my-3 mx-3"
                      fab
                      v-bind="size"
                      v-on="on"
                      aria-label="Link"
                    >
                      <v-icon v-bind="size">mdi-link</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ info.toolTipText }}</span>
                </v-tooltip>

                <v-card-title
                  class="d-flex justify-center primary-font fg-color font-weight-bold"
                >
                  {{ info.title }}
                </v-card-title>

                <v-card-text class="text-center primary-font fg-color">
                  {{ info.text }}
                </v-card-text>
              </v-card>
            </a>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    cardInfo: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/bareleaf-admin.appspot.com/o/hero-image-trading.svg?alt=media&token=db3edf6f-1abf-49c5-a5c1-f6c2e6f3cabc",
        title: "Bareleaf Trading",
        text: "Connecting local companies with suppliers from the world.",
        link: "https://trading.bareleaf.ca",
        toolTipText: "Visit Bareleaf Trading",
        color: "primary",
        buttonColor: "green darken-2",
        skeletonColor: "green lighten-1"
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/bareleaf-admin.appspot.com/o/hero-image.svg?alt=media&token=97f4f173-3287-478a-9009-60617fee086a",
        title: "Bareleaf Solutions",
        text: "Build your brand with Bareleaf's creative & digital solutions.",
        link: "https://solutions.bareleaf.ca",
        toolTipText: "Visit Bareleaf Solutions",
        color: "secondary",
        buttonColor: "brown darken-4",
        skeletonColor: "brown lighten-1"
      }
    ]
  }),
  computed: {
    size() {
      const size = { xs: "small", lg: "large" }[this.$vuetify.breakpoint.name];
      return size ? { [size]: true } : {};
    }
  }
};
</script>

<style lang="scss" scoped>
.card-style {
  box-shadow: none !important;
  transition: all 0.3s;
  // background-color: #f0f3f4 !important;
  &:hover {
    // -webkit-box-shadow: 0px 0px 15px 10px rgba(188, 188, 188, 0.59);
    // box-shadow: 0px 0px 15px 10px rgba(188, 188, 188, 0.59);
    box-shadow: 1px 1px 0px #cfd8dc, 2px 2px 0px #cfd8dc, 3px 3px 0px #cfd8dc,
      4px 4px 0px #cfd8dc, 5px 5px 0px #cfd8dc, 6px 6px 0px #cfd8dc !important;
    .card-image {
      position: relative;
      animation: myanimation 1.5s infinite alternate ease-in-out;

      @keyframes myanimation {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(0.8);
        }
      }
    }
  }

  .card-image {
    height: 350px;
  }

  // Screens greater than 19"
  @media only screen and (min-width: 1440px) {
    .card-image {
      height: 420px;
    }
  }

  // Mobile Screens
  @media only screen and (max-width: 600px) {
    .card-image {
      height: 125px;
    }
  }

  // iPhone 5/SE and smaller
  @media only screen and (max-width: 320px) {
    .card-image {
      height: 105px;
    }
  }
}

a {
  text-decoration: none;
}

.topRight {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
