<template>
    <div class="relative block lg:hidden h-[506px] md:h-[452px]">
      <div
        class="
          w-full absolute top-0 h-[280px] md:h-[312px] banner-shadow-launch
        "
      ></div>
      <div class="absolute mt-[32px] md:mt-[64px] right-4 left-4">
        <h2
          class="text-[28px] leading-[36px] md:text-[45px] md:leading-[52px] text-white font-bold text-start"
        >
          Reserve your launch tickets online"
        </h2>
        <h4  class="mt-2 text-base text-white font-normal text-start">
          Buy tickets online hassle-free.
        </h4>
        <div class="mt-6 md:mt-[64px] bg-white rounded-[16px] p-4 custom-shadow">
          <SearchFilterFormMobile />
        </div>
      </div>
    </div>
  </template>
  
 
  
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
      url("@/assets/images/home/bannerImageMobile.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  
  @media only screen and (min-width: 768px) {
    .banner-shadow-launch {
      background-image: linear-gradient(
          90deg,
          rgba(21, 20, 20, 0.57) 0.01%,
          rgba(255, 255, 255, 0) 99.64%
        ),
        url("@/assets/images/home/bannerImageTabLaunch.png");
    }
  }
  </style>