<template>
  <div class="w-full h-[76px] px-6 py-4 flex justify-between items-center">
    <div class="flex flex-col">
      <p class="text-xs text-[#676769] font-medium">Selected seats</p>
      <p class="black-Primary text-base font-medium">
        <span>{{ selectedSeatsTitleAndPrice.titleArray.join(", ") }}</span> -
        BDT ({{ selectedSeatsTitleAndPrice.price }})
      </p>
    </div>
    <button
      @click="handlePaymentPending"
      class="bg-corporate rounded-full flex justify-center gap-x-[11.76px] items-center text-white text-xs font-medium p-3"
    >
      Continue
      <img
        src="@/assets/images/icons/arrowRightWhite.svg"
        alt=""
        class="w-[16px] h-[16px]"
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
