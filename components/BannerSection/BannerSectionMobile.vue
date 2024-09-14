<template>
  <div class="relative block lg:hidden h-[506px] md:h-[452px]">
    <div
      :class="{
        'w-full absolute top-0 h-[280px] md:h-[312px]': true,
        'banner-shadow-bus': service === 'BUS',
        'banner-shadow-launch': service === 'LAUNCH',
      }"
    ></div>
    <div class="absolute mt-[32px] md:-mt-1 right-4 left-4">
      <div class="mt-[156px] md:mt-[212px] bg-white rounded-[16px] p-4 custom-shadow">
        <SearchFilterFormMobile />
      </div>
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

.banner-shadow-launch {
  background-image: linear-gradient(
      90deg,
      rgba(21, 20, 20, 0.57) 0.01%,
      rgba(255, 255, 255, 0) 99.64%
    ),
    url("../../assets/images/home/bannerImageMobile.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.banner-shadow-bus {
  background-image: 
    url("../../assets/images/home/bannerImageMobileBus.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

@media only screen and (min-width: 768px) {
  .banner-shadow-bus {
    background-image: 
      url("../../assets/images/home/bannerImageTab.png");
  }

  .banner-shadow-launch {
    background-image: linear-gradient(
        90deg,
        rgba(21, 20, 20, 0.57) 0.01%,
        rgba(255, 255, 255, 0) 99.64%
      ),
      url("../../assets/images/home/bannerImageTabLaunch.png");
  }
}
</style>