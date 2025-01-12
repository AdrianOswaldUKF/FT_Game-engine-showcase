<template>

  <v-container class="d-flex justify-center align-center">

    <v-card class="p-4 rounded-xl">

      <v-card-title>Dary</v-card-title>

      <v-card-text>

        <v-list>

          <v-list-item
              v-for="(donation, index) in donations"
              :key="index"
          >

            <v-container>

              <v-list-item-title>{{ donation.name }}</v-list-item-title>
              <v-list-item-subtitle>${{ donation.amount }}</v-list-item-subtitle>

            </v-container>


            <v-list-item-action>

              <v-btn color="error" small @click="removeDonation(index)">Vymazať</v-btn>

            </v-list-item-action>

          </v-list-item>

        </v-list>

        <p v-if="!donations.length">Zatiaľ žiadne dary.</p>

      </v-card-text>

      <v-card-actions>

        <v-btn
            color="error"
            @click="clearDonations"
            :disabled="!donations.length"
        >Vymazať všetko</v-btn>

      </v-card-actions>

    </v-card>
  </v-container>

</template>

<script lang="ts">

import { useDonationStore } from '@/stores/donation';

export default {

  name: 'DonationList',

  computed: {

    donations() {

      const store = useDonationStore();
      return store.donations;

    },

  },

  methods: {

    clearDonations() {

      const store = useDonationStore();
      store.clearDonations();

    },

    removeDonation(index: number) {

      const store = useDonationStore();
      store.removeDonation(index);

    },

  },

};

</script>