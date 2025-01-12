<template>

  <v-container>

    <v-card class="p-4 rounded-xl">

      <v-card-title>Daruj ľubovolnú sumu</v-card-title>

      <v-card-text>

        <v-form ref="form" @submit.prevent="submitDonation">

          <v-text-field
              v-model="name"
              label="Vaše Meno"
              required
          ></v-text-field>

          <v-text-field
              v-model="amount"
              label="Suma"
              type="number"
              required
          ></v-text-field>

          <v-btn color="primary" type="submit">Darovať</v-btn>

        </v-form>

      </v-card-text>

    </v-card>

  </v-container>

</template>

<script lang="ts">
import { useDonationStore } from '@/stores/donation';

export default {

  name: 'DonationInput',

  data() {

    return {

      name: '',
      amount: null as number | null,

    };

  },

  methods: {

    submitDonation() {

      if (this.amount !== null && this.name.trim() !== '') {

        const store = useDonationStore();
        store.addDonation(this.name, this.amount);

        this.name = '';
        this.amount = null;

      }

    },

  },

};

</script>