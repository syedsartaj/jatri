<template>
  <div class="w-full">
    <PaymentHeader type="payment" />
    <PaymentDetails />
  </div>
</template>
<script>
export default {
  middleware(ctx) {
    // ctx.$gtm.push({ event: "ssr" });
  },

  async asyncData({ query, store }) {
    query?.tnxId &&
      (await store.dispatch("launchStore/getBookingInfoByTnxId", {
        transactionId: query?.tnxId,
      }));
  },
};
</script>
