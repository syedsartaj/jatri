<template>
  <div class="hidden lg:block relative homeBanner">
    <div
      class="absolute lg:top-[70px] xl:top-[80px] 2xl:top-[150px] lg:bottom-[100px] xl:bottom-[130px] 2xl:bottom-[170px] lg:right-[80px] xl:right-[100px] lg:left-[80px] xl:left-[100px] z-40"
    >
      <div class="">
        <h2
          class="lg:text-[44px] xl:text-[56px] 2xl:text-[57px] text-[#fff] font-bold leading-[64px]"
        >
          Ticketing made easy!
        </h2>
        <h4 class="mt-4 lg:text-lg xl:text-xl text-white leading-7 font-bold">
          Buy tickets online hassle-free.
        </h4>
        <div class="mt-9">
          <SearchFilterForm />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.homeBanner {
  background-image: url("../../assets/images/home/bannerImageWeb.jpg");
  background-size: 100% 100%;
  height: 400px;
}

@media only screen and (min-width: 992px) {
  .homeBanner {
    height: 400px;
  }
}

@media only screen and (min-width: 1280px) {
  .homeBanner {
    height: 450px;
  }
}

@media only screen and (min-width: 1536px) {
  .homeBanner {
    height: 550px;
  }
}

@media only screen and (min-width: 1750px) {
  .homeBanner {
    height: 600px;
  }
}
</style>
