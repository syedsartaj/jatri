<template>
     <div v-if='getTicketDetails.ticket' class="py-10 bg-[#f7f7f7]">
          <div class="text-center w-[380px] lg:w-[558px] mx-auto">
               <img src="@/assets/images/icons/failed.svg" alt="" class="animate-animateZoom w-10 lg:w-[46px] block mx-auto">
               <h2 class="text-blackPrimary text-xl lg:text-[28px] lg:leading-9 font-semibold mt-5">
                    Payment Failed
               </h2>
          </div>

          <div class="w-[380px] lg:w-[880px] mx-auto mt-[17px] lg:mt-10">
               <!-- <Ticket :pageVind="true"/> -->
               <UserViewTicket :getTicketDetails="getTicketDetails.ticket" :getPaymentHistory="getTicketDetails.payment" :pageVind="true"/>
          </div>
     </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
     validate({ query }) {
          const { tranid } = query;
          return tranid;
     },
     data() {
          return {
               ticket: {},
          };
     },
     methods: {
          ...mapActions("guarantedseat", [
               "getPbPaymentConfirmAction",
               "sendMessageAction",
               "successTicketByMailAction",
               "getTicketByTnxId",
               "searchTicketAction"
          ]),
     },
     computed: {
          ...mapGetters("guarantedseat", ["getTicketDetails"])
     },
     async created() {
          this.$nextTick(async () => {
               this.$nuxt.$loading.start();
               if (process.client) {
                    if (!this.getTicketDetails.ticket) {
                         this.$router.push("/");
                    }
               }
               // const encodedTicket = this.$auth.$storage.getLocalStorage("ticket");
               // if (encodedTicket) {
               //   if (process.client) {
               //     if (!this.getTicketDetails.ticket) {
               //       this.$router.push("/");
               //     }
               //   }
               //   this.$nuxt.$loading.finish();
               // } else {
               //   this.$nuxt.$loading.finish();
               //   this.$router.push("/");
               // }
               this.$nuxt.$loading.finish();
          });
     },
     async asyncData({query, store}) {
          await store.dispatch('guarantedseat/getTicketByTnxId', {'transactionId': query.tranid})
     }
}
</script>

<style>

</style>