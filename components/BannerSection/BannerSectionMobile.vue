<template>
  <div class="relative block lg:hidden h-[502px] md:h-[452px]">
    <img
      src="@/assets/images/home/bannerImageMobile.jpg"
      alt=""
      class="w-full absolute top-0 h-[280px] md:h-[312px]"
    />
    <div class="absolute mt-[48px] md:mt-[64px] right-4 left-4">
      <h2
        class="text-[28px] leading-[36px] md:text-[45px] md:leading-[52px] text-white font-bold text-start"
      >
        Ticketing made easy!
      </h2>
      <h4 class="mt-2 text-base text-white font-normal text-start">
        Buy tickets online hassle-free
      </h4>
      <div class="mt-12 md:mt-[64px] bg-white rounded-[16px] p-4 custom-shadow">
        <SearchFilterFormMobile />
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-shadow {
  box-shadow: 0px 2px 20px 4px rgba(0, 0, 0, 0.08);
}
</style>
