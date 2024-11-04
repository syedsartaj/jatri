<template>
  <OperatorAndRoute :sectionData="operator" sectionName="OPERATOR" />
</template>

<script>
import { ServiceType } from "../../../helpers/utils";
export default {
  middleware(ctx) {
    // ctx.$gtm.push({ event: "ssr" });
  },
  async asyncData({ query, store, error }) {
    try {
      const operator = await store.dispatch("common/getOperatorById", {
        id: query.id,
        service: ServiceType.BUS,
      });
      return {
        operator,
      };
    } catch (err) {
      // Call the error function provided by Nuxt to show the 404 page
      error({ statusCode: 404, message: "Operator not found" });
      // Optionally, return an empty object or some fallback state
      return {};
    }
  },
};
</script>

<style></style>
