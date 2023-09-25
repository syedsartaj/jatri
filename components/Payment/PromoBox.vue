<template>
  <div
    :class="promo?.code === activePromo?.code && 'bg-[#F1F9F1]'"
    class="flex flex-col w-[260px] h-[124px] bg-[#F7F7F7] rounded-lg p-4"
  >
    <div class="w-full flex flex-row items-center gap-x-2">
      <img
        @click="handlePromoBox()"
        v-if="promo?.code !== activePromo?.code"
        src="@/assets/images/icons/unCheckCircle.svg"
        alt=""
        class="cursor-pointer h-6 w-6"
      />
      <img
        v-if="promo?.code === activePromo?.code"
        src="@/assets/images/icons/promoCheckBoxCircle.svg"
        alt=""
        class="cursor-pointer h-6 w-6"
      />
      <p class="text-base font-medium text-blackPrimary">{{ promo.title }}</p>
    </div>
    <div class="w-full pl-8 mt-2">
      <p class="text-sm font-normal text-blackSecondary text-left">
        {{ promo.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PromoBox",
  props: ["promo", "activePromo", "handlePromoBox"],
};
</script>
