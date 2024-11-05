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
        :serviceType="'BUS'" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { fireGTMEventForBookingConfirmed } from "@/helpers/AnalyticsEventHandler";
import moment from "moment";

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
    ...mapActions("busStore", ["getTicketByTnxId"]),
    
  },
  computed: {
    ...mapGetters("busStore", ["getTicketDetails"]),
  },

  async created() {
    this.$nextTick(async () => {
      this.$nuxt.$loading?.start();
      if (process.client) {
        if (!this.getTicketDetails.ticket) {
          this.$router.push("/");
        }
      }
      fireGTMEventForBookingConfirmed(this, this.getTicketDetails.ticket.fromCity, this.getTicketDetails.ticket.toCity, this.getTicketDetails.ticket.boardingDateTime, this.getTicketDetails.ticket.departureDateTime, this.getTicketDetails.ticket.boardingPlace, this.getTicketDetails.ticket.droppingPoint, this.getTicketDetails.ticket.seatNumbers.join(), this.getTicketDetails.ticket.seatNumbers.length, (this.getTicketDetails.ticket.discount ?? 0) + this.getTicketDetails.ticket.totalAmount, (this.getTicketDetails.ticket.discount ?? 0), 0, this.getTicketDetails.ticket.totalAmount)
      this.$nuxt.$loading?.finish();
    });

  },
  async asyncData({ query, store }) {
    await store.dispatch("busStore/getTicketByTnxId", {
      transactionId: query.tranid,
    });
  },
};
</script>

<style></style>
