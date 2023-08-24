<template>
  <div class="relative block lg:hidden">
    <img
      src="@/assets/images/home/bannerImageMobile.jpg"
      alt=""
      class="w-full"
    />
    <div class="absolute top-[59px] md:top-[100px] right-4 left-4">
      <h2
        class="text-[28px] leading-[36px] md:text-[45px] md:leading-[52px] text-white font-bold text-center"
      >
        Ticketing made easy!
      </h2>
      <h4 class="mt-2 text-base text-white font-normal text-center">
        Buy tickets online hassle-free
      </h4>
      <div class="mt-[48px] md:mt-[100px]">
        <SearchTab />
      </div>
      <div class="bg-white rounded-[14px] px-4 pt-4 pb-6 shadow-lg">
        <SearchFilterFormMobile />
      </div>
    </div>
  </div>
</template>
