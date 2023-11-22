<template>
  <div ref="offerPromoDiv">
    <!-- Offer & Promos Section Mobile -->
    <div
      class="flex justify-center w-full lg:hidden"
      v-if="getOfferImages && getOfferImages.length"
    >
      <div class="h-[324px] w-full bg-[#fef2f0]">
        <div
          class="flex justify-between items-center pt-6 lg:pt-[56px] px-[18px] lg:px-[60px]"
        >
          <h2
            class="text-2xl lg:text-4xl lg:leading-[44px] text-blackPrimary text-center font-semibold"
          >
            Offers & Promos
          </h2>

          <div class="flex justify-between gap-x-4">
            <button
              @click="prevSlide('mobile')"
              class="rounded-full border w-[36px] lg:w-10 h-[36px] lg:h-10 flex justify-center items-center"
              :class="slideLeft ? 'border-blackPrimary' : 'border-[#8D8D8F]'"
            >
              <SlideLeft
                :fill="slideLeft ? '#151414' : '#8D8D8F'"
                width="8.43"
                height="13.79"
              />
            </button>
            <button
              @click="nextSlide('mobile')"
              class="rounded-full border w-[36px] lg:w-10 h-[36px] lg:h-10 flex justify-center items-center"
              :class="slideRight ? 'border-blackPrimary' : 'border-[#8D8D8F]'"
            >
              <SlideRight
                :fill="slideRight ? '#151414' : '#8D8D8F'"
                width="8.43"
                height="13.79"
              />
            </button>
          </div>
        </div>
        <div class="mt-10 ml-4 w-full h-[200px] overflow-hidden">
          <hooper ref="hooperSlideMobile" :settings="hooperSettingsMobile">
            <slide
              v-for="(offerImg, index) in generateOfferImgArrForMobile()"
              :key="index"
            >
              <div :style="{ marginRight: GapBetweenImageInPx + 'px' }">
                <img
                  :id="index"
                  :src="offerImg"
                  alt=""
                  class="rounded-[10px] w-[300px] h-[200px]"
                />
              </div>
            </slide>
          </hooper>
        </div>
      </div>
    </div>

    <!-- Offer & Promos Section -->

    <div
      class="pt-80 p-4 lg:mt-0 lg:p-[100px] lg:pt-[52px] lg:pb-0 justify-center w-full hidden lg:flex"
      v-if="getOfferImages && getOfferImages.length"
    >
      <div
        class="border border-[#c8c8c8] rounded-[30px] overflow-hidden md:w-full h-auto xl:h-[464px]"
      >
        <div
          class="flex justify-between items-center pt-6 lg:pt-[56px] px-[18px] lg:px-[60px]"
        >
          <h2
            class="text-2xl lg:text-4xl lg:leading-[44px] text-blackPrimary text-center font-medium lg:font-semibold"
          >
            Offers & Promos
          </h2>

          <div class="flex justify-between gap-x-4">
            <button
              @click="prevSlide('large')"
              class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center"
              :class="slideLeft ? 'border-blackPrimary' : 'border-[#8D8D8F]'"
            >
              <SlideLeft
                :fill="slideLeft ? '#151414' : '#8D8D8F'"
                width="8.43"
                height="13.79"
              />
            </button>
            <button
              @click="nextSlide('large')"
              class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center"
              :class="slideRight ? 'border-blackPrimary' : 'border-[#8D8D8F]'"
            >
              <SlideRight
                :fill="slideRight ? '#151414' : '#8D8D8F'"
                width="8.43"
                height="13.79"
              />
            </button>
          </div>
        </div>
        <div class="mt-5 lg:mt-[42px] p-2 h-[260px]">
          <hooper ref="hooperSlide" :settings="hooperSettings">
            <slide
              v-for="(offerImg, index) in generateOfferImgArrForLarge()"
              :key="index"
            >
              <div :style="{ marginRight: GapBetweenImageInPx + 'px' }">
                <img
                  :id="index"
                  :src="offerImg"
                  alt=""
                  class="rounded-2xl w-[280px] lg:w-[350px] xl:w-[460px] h-[164px] lg:h-[200px] xl:h-[260px] pointer-events-none"
                />
              </div>
            </slide>
          </hooper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "HomePageOfferAndPromo",
  data() {
    return {
      windowWidth: 0,
      slideLeft: false,
      slideRight: false,
      OfferImgMultiplier: 2,
      ImageWidthLarge: 460,
      ImageWidthMobile: 300,
      GapBetweenImageInPx: 15,
      hooperSettings: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 3000,
        transition: 2000,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 3,
      },
      hooperSettingsMobile: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 3000,
        transition: 2000,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 1,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.updateCarousel();

      window.addEventListener("resize", this.updateCarousel);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {

    prevSlide(action) {
      if (action === "large") {
        this.$refs.hooperSlide.slidePrev();
      } else {
        this.$refs.hooperSlideMobile.slidePrev();
      }
      this.slideLeft = true;
      this.slideRight = false;
    },

    nextSlide(action) {
      if (action === "large") {
        this.$refs.hooperSlide.slideNext();
      } else {
        this.$refs.hooperSlideMobile.slideNext();
      }
      this.slideRight = true;
      this.slideLeft = false;
    },

    updateCarousel() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth > 768) {

        const NumberOfItemToShowWithGap = this.calculateNumOfPromoToShow(
          this.ImageWidthLarge
        );
        this.$refs.hooperSlide.config.itemsToShow = NumberOfItemToShowWithGap;
        this.$refs.hooperSlide.update();

      } else {
        const NumberOfItemToShowWithGap = this.calculateNumOfPromoToShow(
          this.ImageWidthMobile
        );
        this.$refs.hooperSlideMobile.config.itemsToShow =
          NumberOfItemToShowWithGap;
        this.$refs.hooperSlideMobile.update();

       
      }
    },

    calculateNumOfPromoToShow(ImageSize) {
      const NumberOfItemToShowWithoutGap = this.windowWidth / ImageSize;
      return NumberOfItemToShowWithoutGap;
    },

    generateOfferImgArrForLarge() {
      if (
        this.getOfferImages.length <
        this.hooperSettings.itemsToShow * this.OfferImgMultiplier
      ) {
        let generatedImg = [];
        for (
          let i = 0;
          i < this.hooperSettings.itemsToShow * this.OfferImgMultiplier;
          i++
        ) {
          generatedImg = generatedImg.concat(this.getOfferImages);
        }
        return generatedImg;
      } else {
        return this.getOfferImages;
      }
    },

    generateOfferImgArrForMobile() {
      if (
        this.getOfferImages.length <
        this.hooperSettingsMobile.itemsToShow * this.OfferImgMultiplier
      ) {
        let generatedImg = [];
        for (
          let i = 0;
          i < this.hooperSettingsMobile.itemsToShow * this.OfferImgMultiplier;
          i++
        ) {
          generatedImg = generatedImg.concat(this.getOfferImages);
        }
        return generatedImg;
      } else {
        return this.getOfferImages;
      }
    },
  },
  components: { Hooper, Slide },
  computed: {
    ...mapGetters("common", ["getOfferImages"]),
  },
};
</script>
