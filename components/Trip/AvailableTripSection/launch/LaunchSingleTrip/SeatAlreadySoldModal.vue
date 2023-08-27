<template>
  <div class="relative z-[99999999]">
    <div class="fixed inset-0 opacity-50 bg-[#151414]"></div>

    <div class="fixed inset-0 z-10">
      <div class="flex justify-center items-center pt-60 px-4 lg:px-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white transition-all max-w-[380px] pb-4"
        >
          <div class="bg-white px-4 w-full flex items-center flex-col">
            <img
              src="@/assets/images/icons/errorWarningRedIcon.svg"
              alt="check"
              class="mt-6"
            />
            <p class="text-xl ont-semibold mt-8 text-blackPrimary text-center">
              Seat is already sold
            </p>
            <p class="text-base font-normal mt-2 text-blackLight text-center">
              The seat you selected is already sold. Please select another seat
              to continue.
            </p>
          </div>
          <div
            class="h-auto w-full flex items-center justify-center mt-8 gap-x-4 px-4"
          >
            <button
              @click="handleOnClick"
              class="flex items-center justify-center bg-corporate text-white text-sm font-medium h-[46px] w-full rounded-full cursor-pointer"
            >
              Select another seat
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeatAlreadySoldModal",
  props: ["handleOnClick"],
};
</script>
