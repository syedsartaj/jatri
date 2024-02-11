<template>
  <BookingDetails />
</template>

<script>
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  validate({ query }) {
    const { tnxId } = query;
    return tnxId;
  },

  async asyncData({ query, store }) {
    await store.dispatch("launchStore/getBookingInfoByTnxId", {
      transactionId: query.tnxId,
    });
  },
};
</script>

<style></style>
