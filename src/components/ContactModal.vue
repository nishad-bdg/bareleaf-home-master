<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600px">
        <v-card rounded="lg">
          <v-card-title>
            <span class="fg-color primary-font font-weight-medium"
              >Contact with us</span
            >
          </v-card-title>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmit">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Enter your name*"
                      v-model="name"
                      color="green darken-3"
                      :rules="nameRules"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      type="email"
                      label="Enter your email*"
                      v-model="email"
                      color="green darken-3"
                      :rules="emailRules"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      label="Your message*"
                      v-model="message"
                      color="green darken-3"
                      :rules="messageRules"
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <small>*indicates required field</small>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1 primary-font" text @click="cancel">
                Close
              </v-btn>
              <v-btn
                :disabled="!valid"
                color="green darken-1 primary-font"
                text
                @click="onSubmit"
              >
                Send message
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>
    <v-snackbar v-model="snackbar" :color="color" top centered>
      {{ text }}
    </v-snackbar>
  </div>
</template>
<script>
import { cloudFireStore } from "../utils/firebase";
import moment from "moment";
export default {
  data: () => ({
    name: "",
    email: "",
    message: "",
    dialog: false,
    resolve: null,
    reject: null,
    valid: false,
    snackbar: false,
    color: "success",
    text: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters"
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    messageRules: [(v) => !!v || "Please provide your message"]
  }),
  methods: {
    open() {
      this.dialog = true;
      //   this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    async onSubmit() {
      this.resolve(true);
      this.dialog = false;
      await cloudFireStore
        .collection("Contact")
        .add({
          name: this.name,
          email: this.email,
          message: this.message,
          date: moment().format("lll"),
          source: "homepage"
        })
        .then(() => {
          this.snackbar = true;
          this.text = "Thank you for your message. We'll get back to you soon.";
          this.color = "black";
          this.$refs.form.reset();
        })
        .catch(() => {
          this.snackbar = true;
          this.text = "Something went wrong. Please try again";
          this.color = "red";
          this.$refs.form.reset();
        });
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    }
  }
};
</script>
