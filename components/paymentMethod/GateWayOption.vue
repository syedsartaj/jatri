<template>
  <button
    class="flex justify-between items-center w-1/2 rounded-lg px-4 border h-[60px]"
    :class="
      activePlan === planName
        ? 'bg-[#EFF7FD] border-[#1E88E5]'
        : 'bg-[#f7f7f7] border-[#f7f7f7]'
    "
    @click="updateActivePlan"
    @keydown.space="updateActivePlan"
  >
    <img class="xl:hidden" src="@/assets/images/card-payment-small.png" alt="card payment button"/>
    <img class="hidden xl:block" src="@/assets/images/card-payment-large.png" alt="card payment button"/>
    <span class="">{{ planDiscount }}</span>
    <img
      v-if="activePlan === planName"
      src="@/assets/images/icons/tik-blue.svg"
      alt="tik"
    />
  </button>
</template>
<script>
export default {
  model: {
    prop: "activePlan",
    event: "onUpdatePlan",
  },
  props: ["planName", "planIcon", "planDiscount", "activePlan"],
  methods: {
    updateActivePlan() {
      this.$emit("onUpdatePlan", this.planName);
    },
  },
};
</script>
