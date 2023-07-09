<template>
  <OperatorAndRoute :sectionData="popularRoute" sectionName="Popular Routes" />
</template>

<script>
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  async asyncData({ query, store }) {
    const popularRoute = await store.dispatch("guarantedseat/getPopularRouteById", {
      Id: query.id,
    });

    console.log("Checking working or not", popularRoute)

    return {
      popularRoute,
    };
  },
};
</script>

<style></style>
