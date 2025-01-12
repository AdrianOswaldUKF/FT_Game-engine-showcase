import { defineStore } from 'pinia';

export const useDonationStore = defineStore('donation', {

    state: () => ({

        donations: [] as

            {

            name: string;
            amount: number

            }[],
    }),

    actions: {

        addDonation(name: string, amount: number) {

            this.donations.push({ name, amount });

        },

        clearDonations() {

            this.donations = [];

        },

        removeDonation(index: number) {

            this.donations = this.donations.filter((_, i) => i !== index);

        }


    },

});
