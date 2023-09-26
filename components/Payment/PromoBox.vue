<template>
  <div
    :class="{
      'bg-[#F1F9F1]': promo?.code === activePromo?.code,
      'bg-[#F7F7F7]': promo?.code !== activePromo?.code,
      'mr-[16px]': isLastItem,
    }"
    class="flex flex-col w-[260px] h-[124px] rounded-lg p-4 cursor-pointer"
    @click="handlePromoBox()"
  >
    <div class="w-full flex flex-row items-center gap-x-2">
      <img
        v-if="promo?.code !== activePromo?.code"
        src="@/assets/images/icons/promoUncheckCircle.svg"
        alt=""
        class="h-6 w-6"
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
  props: ["promo", "activePromo", "handlePromoBox", "isLastItem"],
};
</script>
