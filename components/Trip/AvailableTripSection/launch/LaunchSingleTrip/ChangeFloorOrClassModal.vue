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
              Sure about changing floor or class?
            </p>
            <p class="text-base font-normal mt-2 text-blackLight text-center">
              Are you sure you want to change floor or classes? By doing so, you
              will lose your current seat selections.
            </p>
          </div>
          <div
            class="h-auto w-full flex items-center justify-evenly mt-8 gap-x-4 px-4"
          >
            <button
              @click="change"
              class="flex items-center justify-center bg-[#EDEDED] text-[#151414] text-sm font-medium h-[46px] w-full rounded-full cursor-pointer"
            >
              Change
            </button>
            <button
              @click="continueSelection"
              class="flex items-center justify-center bg-corporate text-white text-sm font-medium h-[46px] w-full rounded-full cursor-pointer"
            >
              Continue selection
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeFloorOrClassModal",
  props: ["change", "continueSelection"],
};
</script>
