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
  data(){
    return{
      bannerImages: []
    }
  },
  methods: {
    ...mapActions("busStore", ["getBannerImages"]),

    getImagesByScreenSizeWrapper() {
      this.getImagesByScreenSize()
      if(this.bannerImages.length) {
        this.$nextTick(() => {
          this.$refs.bannerRef.update();
        })
      }
    },
    getImagesByScreenSize () {
      if (process.browser) {
        if (window.innerWidth <= 640) {
          this.bannerImages = this.bannerImagesGetter.mobileViewImages
          return
        }
        if (window.innerWidth <= 1023) {
          this.bannerImages =  this.bannerImagesGetter.tabletViewImages
          return
        }
        if (window.innerWidth >= 1024) {
          this.bannerImages =  this.bannerImagesGetter.webViewImages
          return
        }
      }
    }
  },
  computed: {
    ...mapGetters("busStore", [
      "bannerImagesGetter",
    ]),
  },
  async mounted()  {
    await this.getBannerImages();
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
      this.getImagesByScreenSizeWrapper()
      window.addEventListener("resize", this.getImagesByScreenSizeWrapper)
  },
  beforeDestroy() {
      window.removeEventListener("resize", this.getImagesByScreenSizeWrapper);
  },
};
</script>

<template>
  <div>
    <div v-if="bannerImages.length" class="relative">
      <div class="home-banner-slider hooper-slider-navigation-custom hooper-slider-pagination-custom">
        <hooper ref="bannerRef" :autoPlay="true" :playSpeed="5000" :mouseDrag="false">
          <slide
            v-for="(banner, index) in bannerImages"
            :key="index"
          >
            <div>
              <img :src="imageUrl + banner" alt="slider img" class="w-full h-[280px] md:h-[312px] lg:h-[286px] 2xl:h-[370px]" />
            </div>
          </slide>
          <hooper-navigation v-if="bannerImages.length > 1" slot="hooper-addons" class="hidden md:block"></hooper-navigation>
          <hooper-pagination v-if="bannerImages.length > 1" slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
    </div>

    <div v-else class="w-full bg-[#FEF2F0] h-[280px] md:h-[312px] lg:h-[286px] 2xl:h-[370px]"></div>
  </div>
</template>
