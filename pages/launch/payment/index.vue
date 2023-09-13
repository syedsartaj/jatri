<template>
  <BookingDetails />
</template>

<script>
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },

  async asyncData({ query, store }) {
    await store.dispatch("launchStore/getBookingInfoByTnxId", {
      transactionId: query.tnxId,
    });
  },
};
</script>

<style></style>
