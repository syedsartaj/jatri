<template>
  <div class="hidden lg:block relative homeBanner">
    <div
      class="absolute lg:top-[80px] lg:left-[96px] lg:right-[96px] z-40 flex flex-col"
    >
      <div class="ml-[4px]">
        <div
          class="text-[28px] md:text-[45px] lg:text-[45px] text-white font-bold"
        >
          Ticketing made easy!
        </div>
        <div class="text-lg lg:text-xl text-white font-bold">
          Buy tickets online hassle-free.
        </div>
      </div>
      <div class="mt-[64px]">
        <SearchFilterForm />
      </div>
    </div>
  </div>
</template>
<style scoped>
.homeBanner {
  background-image: url("../../assets/images/home/bannerImageLaunchWeb.png");
  background-size: 100% 100%;
}

@media only screen and (min-width: 992px) {
  .homeBanner {
    height: 400px;
  }
}

@media only screen and (min-width: 1024px) {
  .homeBanner {
    height: 286px;
  }
}
</style>
