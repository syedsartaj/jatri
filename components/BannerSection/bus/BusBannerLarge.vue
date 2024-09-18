<script>
import {
  Hooper,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
  Slide
} from 'hooper';

export default {
  props: ["service"],
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
};
</script>

<template>
  <div class="relative">
    <div class="home-banner-slider hooper-slider-navigation-custom hooper-slider-pagination-custom">
      <hooper>
        <slide v-for="(n, index) in 5" :key="index">
          <div>
            <picture>
              <source media="(max-width: 640px)" srcset="@/assets/images/home/mobile-slider1.png">
              <source media="(max-width: 1023px)" srcset="@/assets/images/home/tab-slider1.png">
              <img src="@/assets/images/home/desktop-slider1.png" alt="slider img" class="w-full h-[280px] md:h-[312px] lg:h-[286px] 2xl:h-[370px]" />
            </picture>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons" class="hidden md:block"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
  </div>
</template>
