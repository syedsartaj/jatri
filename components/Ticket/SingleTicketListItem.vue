<template>
  <div v-if="singlePrintTicketInfo">
    singlePrintTicketInfo = {{singlePrintTicketInfo}}
    <!-- <TicketView
      :getTicketDetails="singlePrintTicketInfo"
    /> -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { dateTimeFormat } from '@/helpers/dateTimeFormat';
import TicketView from './TicketView.vue';
export default {
    data() {
      return {
        lessTime: 1000 * 60 * 30,
        lessHour: 1000 * 60 * 60 * 6,
        accordion_selected: 0,
      };
    },
    props: ["singlePrintTicketInfo"],
    computed: {
      ...mapGetters(["getPrintTicketInfo"]),
      departureDateTime() {
        return dateTimeFormat(this.singlePrintTicketInfo.departureDateTime, 0, "DD/MM/yyyy hh:mm A");
      }
    },
    methods: {
      ...mapActions("grantedseat", ["cancelTicketAction"]),
      cancelTicket(ticketId) {
        const payload = {
          ticketId: ticketId
        };
        if (confirm("Are you sure to cancel this ticket?") == true) {
          this.cancelTicketAction(payload);
        }
      }
    },
    components: { TicketView }
}
</script>
<style scoped>
img {
  image-rendering: -webkit-optimize-contrast;
}
</style>
