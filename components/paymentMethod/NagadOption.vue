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
    <img src="@/assets/images/nagad-logo.svg" alt="nagad" class="w-[69px]" />
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
  props: ["planName", "planDiscount", "activePlan"],
  methods: {
    updateActivePlan() {
      this.$emit("onUpdatePlan", this.planName);
    },
  },
};
</script>
