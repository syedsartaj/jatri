<template>
  <OperatorAndRoute :sectionData="popularRoute" sectionName="Popular Routes" />
</template>

<script>
import { ServiceType } from "../../../helpers/utils";
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  async asyncData({ query, store }) {
    const popularRoute = await store.dispatch("common/getPopularRouteById", {
      id: query.id,
      service: ServiceType.LAUNCH,
    });

    return {
      popularRoute,
    };
  },
};
</script>

<style></style>
