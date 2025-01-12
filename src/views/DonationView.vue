<template>

  <v-container class="fill-height d-flex align-center">

    <DonationInput></DonationInput>
    <DonationList></DonationList>

  </v-container>

</template>

<script lang="ts">

import DonationInput from '@/components/DonationInput.vue';
import DonationList from '@/components/DonationList.vue';

export default {

  name: 'DonationView',

  components: {

    DonationInput,
    DonationList,

  },

};

</script>