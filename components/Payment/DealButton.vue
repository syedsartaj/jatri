<template>
  <div
    class="
      mt-6
      relative
      overflow-hidden
      mb-2
      h-auto
      w-full
      overflow-hidden
      rounded-[6px]
      deal-button
    "
  >
    <div
      class="
        h-full
        w-full
        py-4
        px-6
        bg-transparent
        flex
        justify-between
        items-center
        leading-4
      "
    >
      <div class="flex flex-col justify-left left-item">
        <p class="text-sm lg:text-xl font-medium text-[#FFFFFF]">
          Check suprise deal
        </p>
        <p class="text-xs lg:text-sm font-normal text-[#FFFFFF]">
          Exciting offers waiting for you, grab now.
        </p>
      </div>
      <div
        @click="callback"
        class="
          h-[36px]
          w-[100px]
          lg:w-[140px]
          bg-white
          rounded-full
          flex
          justify-center
          items-center
          cursor-pointer
        "
      >
        <p class="text-xs lg:text-sm font-medium text-[#1E88E5] text-center">
          Show deal
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DealButton",
  props: ["callback"],
};
</script>

<style scoped>
.deal-button {
  background-image: url("../../assets/images/payment/deal.png");
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>