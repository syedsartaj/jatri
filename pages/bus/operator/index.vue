<template>
  <OperatorAndRoute :sectionData="operator" sectionName="OPERATOR" />
</template>

<script>
import { ServiceType } from "../../../helpers/utils";
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  async asyncData({ query, store }) {
    const operator = await store.dispatch("common/getOperatorById", {
      id: query.id,
      service: ServiceType.BUS,
    });

    return {
      operator,
    };
  },
};
</script>

<style></style>
