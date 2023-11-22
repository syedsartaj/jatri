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
    <div class="flex flex-wrap justify-start items-center gap-x-3">
      <div
        class="grid grid-cols-4 lg:grid-cols-2 gap-x-[5.57px] lg:gap-x-3 lg:gap-y-[7px] order-last lg:order-first"
      >
        <img src="@/assets/images/amex-logo.svg" alt="amex" class="w-5" />
        <img
          src="@/assets/images/mastercard-logo.svg"
          alt="mastercard"
          class="w-[18px]"
        />
        <img src="@/assets/images/visa-logo.svg" alt="visa" class="w-[21px]" />
        <img
          src="@/assets/images/bkash-logo.svg"
          alt="bkash"
          class="w-[27px]"
        />
      </div>
      <div class="bg-[#D9D9D9] w-[1px] h-9 hidden lg:block"></div>
      <img
        src="@/assets/images/sslcommerz-logo.svg"
        alt=""
        class="mb-[6px] lg:mb-0"
      />
    </div>
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
