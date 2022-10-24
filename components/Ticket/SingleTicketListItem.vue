<template>
  <div v-if="singlePrintTicketInfo">
    <!-- singlePrintTicketInfo = {{singlePrintTicketInfo}} -->
    <TicketView
      :getTicketDetails="singlePrintTicketInfo"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { dateTimeFormat } from '@/helpers/dateTimeFormat';
export default {
    props: ["singlePrintTicketInfo"],
    computed: {
      ...mapGetters(["getPrintTicketInfo"]),
      departureDateTime() {
        return dateTimeFormat(this.singlePrintTicketInfo.departureDateTime, 0, "DD/MM/yyyy hh:mm A");
      }
    },
}
</script>
<style scoped>

</style>
