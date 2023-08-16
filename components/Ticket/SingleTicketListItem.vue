<template>
  <div v-if="singlePrintTicketInfo">
    <UserViewTicket
      :getTicketDetails="singlePrintTicketInfo"
      :getPaymentHistory="singlePrintTicketInfo.paymentHistory"
      :serviceType="serviceType"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SingleTicketListItem",

  props: ["singlePrintTicketInfo", "serviceType"],
  computed: {
    ...mapGetters(["getPrintTicketInfo"]),
  },
};
</script>
<style scoped></style>
