<template>
  <div class="relative block lg:hidden h-[506px] md:h-[452px]">
    <div
      class="w-full absolute top-0 h-[280px] md:h-[312px] banner-bus"
    ></div>
    <div class="absolute mt-[176px] md:mt-[212px] right-4 left-4 bg-white rounded-[16px] p-4 custom-shadow">
        <SearchFilterFormMobile />
    </div>
  </div>
</template>

<script>
export default {
  props: ["service"],
};
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0px 2px 20px 4px rgba(0, 0, 0, 0.08);
}

.banner-bus {
  background-image: url("@/assets/images/home/bannerImageMobileBus.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

@media only screen and (min-width: 768px) {
  .banner-bus {
    background-image: url("@/assets/images/home/bannerImageTab.png");
  }

}
</style>
