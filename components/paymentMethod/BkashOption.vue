<template>
  <button
    class="flex justify-between items-center w-1/2 rounded-lg px-4 border h-[60px]"
    :class="
      [activePlan === planName
        ? 'bg-[#EFF7FD] border-[#1E88E5]'
        : 'bg-[#f7f7f7] border-[#f7f7f7]', disabled ? 'opacity-50': '']
    "
    
    @click="updateActivePlan"
    @keydown.space="updateActivePlan"
    :disabled="disabled"
  >
    <img src="@/assets/images/bkash-logo.svg" alt="bkash" class="w-[69px]" />
    <!-- <span class=''>{{ planDiscount }}</span> -->
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
  props: ["planName", "planDiscount", "activePlan","disabled"],
  methods: {
    updateActivePlan() {
      this.$emit("onUpdatePlan", this.planName);
    },
  },
};
</script>
