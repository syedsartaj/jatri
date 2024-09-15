<template>
  <div class="hidden lg:block relative homeBanner-launch">
    <div
      class="absolute lg:top-[80px] lg:left-[96px] lg:right-[96px] z-40 flex flex-col"
    >
      <div class="ml-[4px]">
        <div
          class="text-[28px] md:text-[45px] lg:text-[45px] text-white font-bold"
        >
          Reserve your launch tickets online
        </div>
        <div class="text-xl text-white font-medium">
          Buy tickets online hassle-free.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homeBanner-launch {
  background-image: linear-gradient(
      90deg,
      rgba(21, 20, 20, 0.57) 0.01%,
      rgba(255, 255, 255, 0) 99.64%
    ),
    url("@/assets/images/home/bannerImageLaunchWeb.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

@media only screen and (min-width: 992px) {
  .homeBanner-launch {
    height: 400px;
  }
}

@media only screen and (min-width: 1024px) {
  .homeBanner-launch {
    height: 286px;
  }
}
</style>
