<template>
  <div v-if="singlePrintTicketInfo">
    <UserViewTicket
      :getTicketDetails="singlePrintTicketInfo"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    props: ["singlePrintTicketInfo"],
    computed: {
      ...mapGetters(["getPrintTicketInfo"]),
    },
}
</script>
<style scoped>

</style>
