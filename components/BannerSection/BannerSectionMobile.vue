<template>
  <div class="relative block lg:hidden">
    <img
      src="@/assets/images/home/bannerImageMobile.jpg"
      alt=""
      class="w-full"
    />
    <div class="absolute top-[39px] right-4 left-4">
      <h2 class="text-[26px] text-white font-bold leading-[36px]">
        Ticketing made <br />
        easy!
      </h2>
      <h4 class="mt-2 text-base text-white font-normal">
        Buy tickets online <br />
        hassle-free
      </h4>
      <div class="mt-[39px]">
        <SearchTab />
      </div>
      <div
        class="bg-white rounded-[14px] px-4 py-[28px] shadow-lg"
      >
        <SearchFilterFormMobile />
      </div>
    </div>
  </div>
</template>
