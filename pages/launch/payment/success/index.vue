<template>
  <div v-if="getTicketDetails.ticket" class="py-10 bg-[#f7f7f7]">
    <div class="text-center max-w-[380px] px-4 md:max-w-[558px] mx-auto">
      <img src="@/assets/images/icons/success.svg" alt="" class="animate-animateZoom w-10 lg:w-[46px] block mx-auto" />
      <h2 class="text-blackPrimary text-xl lg:text-[28px] lg:leading-9 font-semibold mt-5">
        Ticket Booked Successfully
      </h2>
      <p class="text-blackLight text-sm lg:text-base font-normal mt-[6px] lg:mt-4">
        Your ticket has been purchased successfully. Please check your
        mail/message to get your ticket and further instructions.
      </p>
    </div>

    <div class="md:w-full px-4 lg:px-0 lg:max-w-[816px] mx-auto mt-[17px] lg:mt-10">
      <UserViewTicket :getTicketDetails="getTicketDetails.ticket" :getPaymentHistory="getTicketDetails.payment"
        :pageVind="true" :supportEmail="getTicketDetails.supportEmail" :supportPhone="getTicketDetails.supportPhone"
        :serviceType="'LAUNCH'" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  middleware(ctx) {
    // ctx.$gtm.push({ event: "ssr" });
  },
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
    ...mapActions("launchStore", ["getTicketByTnxId"]),
    fireGTMEventForConfirmTicket() {
      const eventData = {
        event: "confirmTicket",
        currency: "BDT",
        from: this.getTicketDetails.ticket.fromCity,
        to: this.getTicketDetails.ticket.toCity,
        coach: this.getTicketDetails.ticket.coach,
        company: this.getTicketDetails.ticket.companyName,
        journeyDate: this.getTicketDetails.ticket.departureDateTime,
        seatCount: this.getTicketDetails.ticket.seatNumbers.length,
        totalFare: this.getTicketDetails.payment.amount,
      };

      // this.$gtm.push(eventData);
    },
  },
  computed: {
    ...mapGetters("launchStore", ["getTicketDetails"]),
  },
  async created() {
    this.$nextTick(async () => {
      this.$nuxt.$loading?.start();
      if (process.client) {
        if (!this.getTicketDetails.ticket) {
          this.$router.push("/");
        }
      }
      this.fireGTMEventForConfirmTicket();

      this.$nuxt.$loading?.finish();
    });
  },
  async asyncData({ query, store }) {
    await store.dispatch("launchStore/getTicketByTnxId", {
      transactionId: query.tranid,
    });
  },
};
</script>

<style></style>
