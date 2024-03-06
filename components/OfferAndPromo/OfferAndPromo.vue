<template>
  <div>
    <!-- Offer & Promos Section Mobile -->
    <div
      class="py-[10px] px-1 w-full bg-[#FFFFFF] rounded-2xl flex justify-between md:hidden items-center mb-[20px]"
      v-if="offerPromoGetter && offerPromoGetter.length"
    >
      <img
        src="@/assets/images/arrowLeftBlack.svg"
        alt=""
        class="h-4 w-4 cursor-pointer mr-1"
        @click="prevSlide('mobile')"
      />
      <div
        class="flex justify-center min-w-[84%] md:hidden"
        v-if="offerPromoGetter && offerPromoGetter.length"
      >
        
          <div class="w-full overflow-hidden">
            <hooper ref="hooperSlideMobile" :settings="hooperSettingsMobile">
              <slide
                v-for="(offer, index) in generateOfferImgArrForMobile()"
                :key="index"
              >
                <div :style="{ marginRight: gapBetweenImageInPx + 'px' }">
                    <img
                      :id="index"
                      :src="offer.image"
                      alt="offer image"
                      class="rounded-2xl w-full  pointer-events-none"
                    />
                </div>
              </slide>
            </hooper>
          </div>
        
      </div>
      <img
        src="@/assets/images/arrowRightBlack.svg"
        alt=""
        class="h-4 w-4 cursor-pointer ml-[12px]"
        @click="nextSlide('mobile')"
      />
    </div>

    <!-- Offer & Promos Section Tab -->
    <div
      class="p-[10px] w-full bg-[#FFFFFF] rounded-[10px] hidden md:flex justify-between xl:hidden items-center mb-[20px]"
      v-if="offerPromoGetter && offerPromoGetter.length"
    >
      <img
        src="@/assets/images/arrowLeftBlack.svg"
        alt=""
        class="h-4 w-4 cursor-pointer mr-[12px]"
        @click="prevSlide('tab')"
      />
      <div
        class="justify-center w-[89%] hidden md:flex xl:hidden"
        v-if="offerPromoGetter && offerPromoGetter.length"
      >
      
       
          <div class=" w-full overflow-hidden">
            <hooper ref="hooperSlideTab" :settings="hooperSettingsTab">
              <slide
                v-for="(offer, index) in generateOfferImgArrForTab()"
                :key="index"
              >
                <div :style="{ marginRight: gapBetweenImageInPx + 'px' }">
                    <img
                      :id="index"
                      :src="offer.image"
                      alt="offer image"
                      class="rounded-2xl w-full"
                    />
                </div>
              </slide>
            </hooper>
          </div>
       
      </div>
      <img
        src="@/assets/images/arrowRightBlack.svg"
        alt=""
        class="h-4 w-4 cursor-pointer ml-[12px]"
        @click="nextSlide('tab')"
      />
    </div>

    <!-- Offer & Promos Section Large -->

    <div
      class="p-[10px] w-full bg-[#FFFFFF] rounded-2xl hidden xl:flex justify-between items-center mb-[20px]"
      v-if="offerPromoGetter && offerPromoGetter.length"
    >
      <img
        src="@/assets/images/arrowLeftBlack.svg"
        alt=""
        class="h-4 w-4 cursor-pointer mr-[12px]"
        @click="prevSlide('large')"
      />
      <div
        class="justify-center w-[92%] hidden xl:flex"
        v-if="offerPromoGetter && offerPromoGetter.length"
      >
        <div class="overflow-hidden xl:w-full h-auto">
          <div>
            <hooper ref="hooperSlideWeb" :settings="hooperSettingsWeb">
              <slide
                v-for="(offer, index) in generateOfferImgArrForLarge()"
                :key="index"
              >
                <div :style="{ marginRight: gapBetweenImageInPx + 'px' }">
                    <img
                      :id="index"
                      :src="offer.image"
                      alt="offer image"
                      class="rounded-2xl w-full pointer-events-none"
                    />
                    
                </div>
              </slide>
            </hooper>
          </div>
        </div>
      </div>
      <img
        src="@/assets/images/arrowRightBlack.svg"
        alt=""
        class="h-4 w-4 cursor-pointer ml-[12px]"
        @click="nextSlide('large')"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "OfferAndPromo",
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  data() {
    return {
      windowWidth: 0,
      slideLeft: false,
      slideRight: false,
      imageUrl: "",
      OfferImgMultiplier: 3,
      imageWidthLarge: 180,
      imageWidthTab: 178,
      imageWidthMobile: 120,
      gapBetweenImageInPx: 7,
      breakPoint: 768,

      hooperSettingsWeb: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 4000,
        transition: 450,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 3,
      },
      hooperSettingsTab: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 4000,
        transition: 450,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 2,
      },
      hooperSettingsMobile: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 4000,
        transition: 450,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 1,
      },
    };
  },
  components: { Hooper, Slide },

  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
    if (this.offerPromoGetter.length) {
      this.$nextTick(() => {
        this.updateCarousel();
  
        window.addEventListener("resize", this.updateCarousel);
      });
    }
  },

  beforeDestroy() {
    // window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.updateCarousel);
  },
  computed: {
    ...mapGetters("common", ["offerPromoGetter"]),
  },
  methods: {
    prevSlide(action) {
      if (action === "large") {
        this.$refs.hooperSlideWeb.slidePrev();
      } else if (action === "tab") {
        this.$refs.hooperSlideTab.slidePrev();
      } else {
        this.$refs.hooperSlideMobile.slidePrev();
      }
      this.slideLeft = true;
      this.slideRight = false;
    },

    nextSlide(action) {
      if (action === "large") {
        this.$refs.hooperSlideWeb.slideNext();
      } else if (action === "tab") {
        this.$refs.hooperSlideTab.slideNext();
      } else {
        this.$refs.hooperSlideMobile.slideNext();
      }
      this.slideRight = true;
      this.slideLeft = false;
    },
   

    updateCarousel() {
      if (window.innerWidth >= 1280) {
        // this.imageWidthWeb = window.innerWidth * 0.28;
        const NumberOfItemToShowWithGap = this.calculateNumOfPromoToShow(
          this.imageWidthLarge
        );
        this.$refs.hooperSlideWeb.config.itemsToShow =
          NumberOfItemToShowWithGap;
        this.$refs.hooperSlideWeb.update();
      } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        // this.imageWidthTab = window.innerWidth * 0.43;
        const NumberOfItemToShowWithGap = this.calculateNumOfPromoToShow(
          this.imageWidthTab
        );
        this.$refs.hooperSlideTab.config.itemsToShow =
          NumberOfItemToShowWithGap;
        this.$refs.hooperSlideTab.update();
      } else {
        // this.imageWidthMobile = window.innerWidth * 0.8;
        const NumberOfItemToShowWithGap = this.calculateNumOfPromoToShow(
          this.imageWidthMobile
        );
        this.$refs.hooperSlideMobile.config.itemsToShow =
          NumberOfItemToShowWithGap;
        this.$refs.hooperSlideMobile.update();
      }
    },

    calculateNumOfPromoToShow(imageSize) {
      const PADDING = 0;
      let totalGap;
      let numberOfItemToShowWithoutGap;
      let numberOfItemToShowWithGap;

      if (window.innerWidth >= 1280) {
        numberOfItemToShowWithoutGap =
          (this.$refs.hooperSlideWeb.$el.clientWidth - PADDING) / imageSize;

        const integerPart = numberOfItemToShowWithoutGap.toFixed();
        const fractionPart = numberOfItemToShowWithoutGap - integerPart;

        if (
          fractionPart > 0 &&
          fractionPart * imageSize > integerPart * this.gapBetweenImageInPx
        ) {
          totalGap = integerPart * this.gapBetweenImageInPx;
        } else {
          totalGap = (integerPart - 1) * this.gapBetweenImageInPx;
        }

        const containerActualWidth =
          this.$refs.hooperSlideWeb.$el.clientWidth - PADDING - totalGap;
        numberOfItemToShowWithGap = containerActualWidth / imageSize;
      } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        numberOfItemToShowWithoutGap =
          (this.$refs.hooperSlideTab.$el.clientWidth - PADDING) / imageSize;

        const integerPart = numberOfItemToShowWithoutGap.toFixed();
        const fractionPart = numberOfItemToShowWithoutGap - integerPart;

        if (
          fractionPart > 0 &&
          fractionPart * imageSize > integerPart * this.gapBetweenImageInPx
        ) {
          totalGap = integerPart * this.gapBetweenImageInPx;
        } else {
          if (integerPart >= 1) {
            totalGap = (integerPart - 1) * this.gapBetweenImageInPx;
          } else {
            totalGap = integerPart * this.gapBetweenImageInPx;
          }
        }

        const containerActualWidth =
          this.$refs.hooperSlideTab.$el.clientWidth - PADDING - totalGap;
        numberOfItemToShowWithGap = containerActualWidth / imageSize;
      } else {
        numberOfItemToShowWithoutGap =
          (this.$refs.hooperSlideMobile.$el.clientWidth - PADDING) / imageSize;

        const integerPart = numberOfItemToShowWithoutGap.toFixed();
        const fractionPart = numberOfItemToShowWithoutGap - integerPart;

        if (
          fractionPart > 0 &&
          fractionPart * imageSize > integerPart * this.gapBetweenImageInPx
        ) {
          totalGap = integerPart * this.gapBetweenImageInPx;
        } else {
          if (integerPart >= 1) {
            totalGap = (integerPart - 1) * this.gapBetweenImageInPx;
          } else {
            totalGap = integerPart * this.gapBetweenImageInPx;
          }
        }

        const containerActualWidth =
          this.$refs.hooperSlideMobile.$el.clientWidth - PADDING - totalGap;
        numberOfItemToShowWithGap = containerActualWidth / imageSize;
      }

      return numberOfItemToShowWithGap;
    },
    generateOfferImgArrForLarge() {
      if (
        this.offerPromoGetter.length <
        this.hooperSettingsWeb.itemsToShow * this.OfferImgMultiplier
      ) {
        let generatedImg = [];
        for (
          let i = 0;
          i < this.hooperSettingsWeb.itemsToShow * this.OfferImgMultiplier;
          i++
        ) {
          generatedImg = generatedImg.concat(this.offerPromoGetter);
        }
        return generatedImg;
      } else {
        return this.offerPromoGetter;
      }
    },

    generateOfferImgArrForTab() {
      if (
        this.offerPromoGetter.length <
        this.hooperSettingsTab.itemsToShow * this.OfferImgMultiplier
      ) {
        let generatedImg = [];
        for (
          let i = 0;
          i < this.hooperSettingsTab.itemsToShow * this.OfferImgMultiplier;
          i++
        ) {
          generatedImg = generatedImg.concat(this.offerPromoGetter);
        }
        return generatedImg;
      } else {
        return this.offerPromoGetter;
      }
    },

    generateOfferImgArrForMobile() {
      if (
        this.offerPromoGetter.length <
        this.hooperSettingsMobile.itemsToShow * this.OfferImgMultiplier
      ) {
        let generatedImg = [];
        for (
          let i = 0;
          i < this.hooperSettingsMobile.itemsToShow * this.OfferImgMultiplier;
          i++
        ) {
          generatedImg = generatedImg.concat(this.offerPromoGetter);
        }
        return generatedImg;
      } else {
        return this.offerPromoGetter;
      }
    },
  },
};
</script>

<style scoped>
.hooper{
  height: auto;
}
</style>
