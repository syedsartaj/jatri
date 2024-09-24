<script>
import { mapGetters, mapActions } from "vuex";
import {
  Hooper,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
  Slide
} from 'hooper';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  methods: {
    ...mapActions("busStore", ["getBannerImages"]),
    getImageUrlByScreenSize (mobileImages, tabImages, webImages) {
      if (process.browser) {
        if (window.innerWidth <= 640) {
          return mobileImages
        }
        if (window.innerWidth <= 1023) {
          return tabImages
        }
        if (window.innerWidth >= 1024) {
          return webImages
        }
      }
    }
  },
  computed: {
    ...mapGetters("busStore", [
      "bannerImagesGetter",
    ]),
  },
  mounted() {
    this.getBannerImages();
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
  },
};
</script>

<template>
  <div class="relative">
    <div class="home-banner-slider hooper-slider-navigation-custom hooper-slider-pagination-custom">
      <hooper :autoPlay="true" :playSpeed="4000">
        <slide
          v-for="(banner, index) in getImageUrlByScreenSize(bannerImagesGetter.mobileViewImages, bannerImagesGetter.tabletViewImages, bannerImagesGetter.webViewImages)"
          :key="index"
        >
          <div>
            <picture>
              <source media="(max-width: 640px)" :src="imageUrl + banner">
              <source media="(max-width: 1023px)" :src="imageUrl + banner">
              <img :src="imageUrl + banner" alt="slider img" class="w-full h-[280px] md:h-[312px] lg:h-[286px] 2xl:h-[370px]" />
            </picture>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons" class="hidden md:block"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
  </div>
</template>
