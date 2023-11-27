<template>
  <div
    class="w-full h-[76px] px-6 py-4 flex justify-between items-center selected-seat"
  >
    <div class="flex flex-col">
      <p class="text-xs text-[#676769] font-medium">Selected seats</p>
      <p class="text-blackPrimary text-base font-medium">
        <span>{{ selectedSeatsTitleAndPrice.titleArray.join(", ") }}</span> -
        (BDT {{ selectedSeatsTitleAndPrice.price }})
      </p>
    </div>
    <button
      @click="handlePaymentPending"
      class="bg-corporate rounded-full flex justify-center items-center text-white text-sm font-medium py-[10px] pl-6 pr-4"
    >
      Continue
      <img
        src="@/assets/images/icons/arrowRightWhite.svg"
        alt=""
        class="w-[16px] h-[16px] ml-2"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "SelectSeatsSection",
  props: ["selectedSeatsTitleAndPrice", "handlePaymentPending"],
};
</script>

<style scoped>
.selected-seat {
  border-top: 1px solid var(--gray-shade-1, #ededed);
  box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.07);
}
</style>
