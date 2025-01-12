<template>

  <v-container class="d-flex justify-center mt-10 fill-height">

    <v-card class="rounded-xl" min-width="400">


      <v-card-title class="d-flex justify-center">Kontakt</v-card-title>

      <v-card-text>

        <v-form v-model="valid" ref="form">

          <v-text-field
              label="Meno"
              v-model="name"
              required
          ></v-text-field>


          <v-text-field
              label="E-mail"
              v-model="email"
              required
              :rules="emailRules"
          ></v-text-field>

          <v-text-field
              label="Správa"
              required
          ></v-text-field>

          <v-container class="d-flex justify-center">

            <v-btn :disabled="!valid" @click="submitForm">Submit</v-btn>

          </v-container>

        </v-form>

      </v-card-text>

    </v-card>

  </v-container>

</template>

<script lang="ts">

export default {

  data() {

    return {

      valid: false,
      name: '',
      email: '',
      emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: ''

    };

  },

  methods: {

    submitForm(): void {

      const form = this.$refs.form as { validate: () => boolean };

      if (form.validate()) {

        alert('Správa bola úspešne odoslaná');

      }

    }

  },
};

</script>