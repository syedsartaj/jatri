<template>
  <div ref="offerPromoDiv">
    <!-- Offer & Promos Section Mobile -->
    <div
      class="flex justify-center w-full md:hidden"
      v-if="offerPromoGetter && offerPromoGetter.length"
    >
      <div class="w-full">
        <div class="flex justify-between items-center">
          <h2 class="pl-4 font-inter text-2xl font-semibold text-blackPrimary">
            Best offers for you
          </h2>
          <div @click="gotoOfferPage" class="pr-4 font-inter text-xs font-medium text-corporate">
            See all offers
          </div>
        </div>
        <div class="mt-10 ml-4 w-full overflow-hidden">
          <hooper ref="hooperSlideMobile" :settings="hooperSettingsMobile">
            <slide
              v-for="(offer, index) in generateOfferImgArrForMobile()"
              :key="index"
            >
              <div :style="{ marginRight: gapBetweenImageInPx + 'px' }">
                <div class="customOfferCard-container">
                  <img
                    :id="index"
                    :src="offer.image"
                    alt=""
                    class="rounded-2xl w-full"
                  />
                  <div class="customOfferCard absolute w-full h-full bg-[#eff7fd] rounded-2xl">
                    <div class="flex justify-between items-center p-4">
                      <div>
                        <img
                          class="max-w-[54px]"
                          src="~/assets/images/header/jatri-logo.svg"
                          alt="jatri logo"
                        />
                      </div>
                      <div
                      @click="handlePromoCopy(offer.code)"
                        class="flex justify-center items-center cursor-pointer border border-solid border-[#EDEDED] bg-white rounded-full p-1"
                        v-if="offer.code"
                      >
                        <div
                          class="text-blackPrimary font-inter text-base font-medium pr-1"
                        >
                          {{ offer.code }}
                        </div>
                        <div>
                          <img
                            src="~/assets/images/copy-button.svg"
                            class="w-6"
                            alt="copy button"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="px-4 text-xs font-semibold font-inter text-blackPrimary"
                    >
                      {{ offer.description }}
                    </div>

                    <div
                      class="pt-1 md:pt-3 px-4 break-words text-xs font-light not-italic"
                      v-html="offer.details.length > OFFER_DETAILS_CHAR_LIMIT.MOBILE ? offer.details.slice(0, OFFER_DETAILS_CHAR_LIMIT.MOBILE).concat(['...']): offer.details"
                    ></div>

                    <div class="px-4 pt-3 flex justify-start items-center">
                      <div @click="gotoSpecificOffer(offer.code)" class="pr-1 text-[#1E88E5] text-xs">View details</div>
                      <div><img class="  custom-right-arrow" src="~/assets/images/arrowRightBlack.svg" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </hooper>
        </div>
        <div class="flex justify-center gap-x-4 pt-6">
          <button
            @click="prevSlide('mobile')"
            class="rounded-full border w-[36px] h-[36px] flex justify-center items-center"
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
            class="rounded-full border w-[36px] h-[36px] flex justify-center items-center"
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
    </div>

    <!-- Offer & Promos Section Tab -->
    <div
      class="justify-center w-full hidden md:flex xl:hidden"
      v-if="offerPromoGetter && offerPromoGetter.length"
    >
      <div class="w-full">
        <div class="flex justify-between items-center">
          <h2 class="pl-4 font-inter text-2xl font-semibold text-blackPrimary">
            Best offers for you Tab
          </h2>
          <div @click="gotoOfferPage" class="pr-4 font-inter text-base font-medium text-corporate">
            See all offers
          </div>
        </div>
        <div class="mt-10 ml-4 w-full overflow-hidden">
          <hooper ref="hooperSlideTab" :settings="hooperSettingsTab">
            <slide
              v-for="(offer, index) in generateOfferImgArrForTab()"
              :key="index"
            >
              <div :style="{ marginRight: gapBetweenImageInPx + 'px' }">
                <div class="customOfferCard-container">
                  <img
                    :id="index"
                    :src="offer.image"
                    alt=""
                    class="rounded-2xl w-full"
                  />
                  <div class="customOfferCard absolute w-full h-full bg-[#eff7fd] rounded-2xl">
                    <div class="flex justify-between items-center p-4">
                      <div>
                        <img
                          class="max-w-[54px]"
                          src="~/assets/images/header/jatri-logo.svg"
                          alt="jatri logo"
                        />
                      </div>
                      <div
                      @click="handlePromoCopy(offer.code)"
                        class="flex justify-center items-center cursor-pointer border border-solid border-[#EDEDED] bg-white rounded-full p-1"
                        v-if="offer.code"
                      >
                        <div
                          class="text-blackPrimary font-inter text-base font-medium pr-1"
                        >
                          {{ offer.code }}
                        </div>
                        <div>
                          <img
                            src="~/assets/images/copy-button.svg"
                            class="w-6"
                            alt="copy button"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="px-4 text-sm font-semibold font-inter text-blackPrimary"
                    >
                      {{ offer.description }}
                    </div>

                    <div
                      class="pt-3 px-4 break-words text-sm font-light not-italic"
                      v-html="offer.details.length > OFFER_DETAILS_CHAR_LIMIT.TAB ? offer.details.slice(0, OFFER_DETAILS_CHAR_LIMIT.TAB).concat(['...']): offer.details"
                    ></div>

                    <div class="px-4 pt-3 flex justify-start items-center">
                      <div @click="gotoSpecificOffer(offer.code)" class="pr-1 text-[#1E88E5] text-xs">View details</div>
                      <div><img class="  custom-right-arrow" src="~/assets/images/arrowRightBlack.svg" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </hooper>
        </div>
        <div class="flex justify-center gap-x-4 pt-6">
          <button
            @click="prevSlide('tab')"
            class="rounded-full border w-[36px] h-[36px] flex justify-center items-center"
            :class="slideLeft ? 'border-blackPrimary' : 'border-[#8D8D8F]'"
          >
            <SlideLeft
              :fill="slideLeft ? '#151414' : '#8D8D8F'"
              width="8.43"
              height="13.79"
            />
          </button>
          <button
            @click="nextSlide('tab')"
            class="rounded-full border w-[36px] h-[36px] flex justify-center items-center"
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
    </div>

    <!-- Offer & Promos Section Web-->
    <div
      class="xl:pt-16 xl:px-[100px] justify-center w-full hidden xl:flex"
      v-if="offerPromoGetter && offerPromoGetter.length"
    >
      <div class="overflow-hidden xl:w-full h-auto">
        <div class="flex justify-between items-center">
          <h2
            class="text-[36px] leading-[44px] font-inter font-semibold text-blackPrimary"
          >
            Best offers for you Web
          </h2>
          <div @click="gotoOfferPage" class="offer__button--mobile">See all offers</div>
        </div>
        <div class="mt-5 xl:mt-[42px] p-2">
          <hooper ref="hooperSlideWeb" :settings="hooperSettingsWeb">
            <slide
              v-for="(offer, index) in generateOfferImgArrForLarge()"
              :key="index"
            >
              <div :style="{ marginRight: gapBetweenImageInPx + 'px' }">
                <div class="customOfferCard-container">
                  <img
                    :id="index"
                    :src="offer.image"
                    alt=""
                    class="rounded-2xl w-full pointer-events-none"
                  />
                  <div class="customOfferCard absolute w-full h-full bg-[#eff7fd] rounded-2xl">
                    <div class="flex justify-between items-center p-4">
                      <div>
                        <img
                          class="max-w-[54px]"
                          src="~/assets/images/header/jatri-logo.svg"
                          alt="jatri logo"
                        />
                      </div>
                      <div
                        @click="handlePromoCopy(offer.code)"
                        class="flex justify-center items-center cursor-pointer border border-solid border-[#EDEDED] bg-white rounded-full p-1"
                        v-if="offer.code"
                      >
                        <div
                          class="text-blackPrimary font-inter text-base font-medium pr-1"
                        >
                          {{ offer.code }}
                        </div>
                        <div>
                          <img
                            src="~/assets/images/copy-button.svg"
                            class="w-6"
                            alt="copy button"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="px-4 text-base font-semibold font-inter text-blackPrimary"
                    >
                      {{ offer.description }}
                    </div>

                    <div
                      class="pt-3 px-4 break-words text-base font-light not-italic"
                      v-html="offer.details.length > OFFER_DETAILS_CHAR_LIMIT.WEB ? offer.details.slice(0, OFFER_DETAILS_CHAR_LIMIT.WEB).concat(['...']): offer.details"
                    ></div>

                    <div class="px-4 pt-3 flex justify-start items-center">
                      <div @click=" gotoSpecificOffer(offer.code)" class="pr-1 text-[#1E88E5] text-xs">View details</div>
                      <div><img class="  custom-right-arrow" src="~/assets/images/arrowRightBlack.svg" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </hooper>
        </div>
      </div>
    </div>
    <div class="justify-center gap-x-4 pt-8 hidden xl:flex">
      <button
        @click="prevSlide('large')"
        class="rounded-full border w-[28px] xl:w-10 h-[28px] xl:h-10 flex justify-center items-center"
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
        class="rounded-full border w-[28px] xl:w-10 h-[28px] xl:h-10 flex justify-center items-center"
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
</template>

<script>
import { mapGetters } from "vuex";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "HomePageOfferAndPromo",
  data() {
    return {
      OFFER_DETAILS_CHAR_LIMIT:{
        MOBILE: 30,
        TAB: 40,
        WEB: 150
      },
      slideLeft: false,
      slideRight: false,
      OfferImgMultiplier: 3,
      imageWidthWeb: 0,
      imageWidthTab: 0,
      imageWidthMobile: 0,
      gapBetweenImageInPx: 15,
      breakPoint: 768,
      hooperSettingsWeb: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 3000,
        transition: 2000,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 3,
      },
      hooperSettingsTab: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 3000,
        transition: 2000,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 2,
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
    if (this.offerPromoGetter.length) {
      // change back to offerPromoGetter.length
      this.$nextTick(() => {
        this.updateCarousel();
        window.addEventListener("resize", this.updateCarousel);
      });
    }
  },

  beforeDestroy() {
    if (this.offerPromoGetter.length) {
      // change back to offerPromoGetter.length
      window.removeEventListener("resize", this.updateCarousel);
    }
  },
  methods: {
    prevSlide(action) {
      if (action === "large") {
        this.$refs.hooperSlideWeb.slidePrev();
      } else if (action ==="tab") {
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
      } else if (action ==="tab") {
        this.$refs.hooperSlideTab.slideNext();
      } else {
        this.$refs.hooperSlideMobile.slideNext();
      }
      this.slideRight = true;
      this.slideLeft = false;
    },

    updateCarousel() {
      if (window.innerWidth >= 1280) {
        this.imageWidthWeb = window.innerWidth * 0.28;
        const NumberOfItemToShowWithGap = this.calculateNumOfPromoToShow(
          this.imageWidthWeb
        );
        this.$refs.hooperSlideWeb.config.itemsToShow =
          NumberOfItemToShowWithGap;
        this.$refs.hooperSlideWeb.update();
      } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        this.imageWidthTab = window.innerWidth * 0.43;
        const NumberOfItemToShowWithGap = this.calculateNumOfPromoToShow(
          this.imageWidthTab
        );
        this.$refs.hooperSlideTab.config.itemsToShow =
          NumberOfItemToShowWithGap;
        this.$refs.hooperSlideTab.update();
      } else {
        this.imageWidthMobile = window.innerWidth * 0.8;
        const NumberOfItemToShowWithGap = this.calculateNumOfPromoToShow(
          this.imageWidthMobile
        );
        this.$refs.hooperSlideMobile.config.itemsToShow =
          NumberOfItemToShowWithGap;
        this.$refs.hooperSlideMobile.update();
      }
    },

    calculateNumOfPromoToShow(imageSize) {
      const PADDING = 16;
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

    gotoOfferPage(){
      this.$router.push("/bus/offer")
    },
    gotoSpecificOffer(id){
      this.$router.push(`/bus/offer#${id}`)

    },
    handlePromoCopy(promoCode){
      navigator.clipboard.writeText(promoCode);
      navigator.clipboard.readText();
      this.$toast.success(`Promo Code Copied: ${promoCode}`, {
              position: "bottom-right",
              duration: 50000,
              containerClass: "padding: 100px",
            });
    },
  },
  components: { Hooper, Slide },
  computed: {
    ...mapGetters("common", ["offerPromoGetter"]),
  },
};
</script>

<style scoped>
.customOfferCard-container {
  --def-transition-duration: 0.4s;
  position: relative;
}

.customOfferCard-container .customOfferCard {
  visibility: hidden;
  transform: translate3d(0, 0, 0);
  transition: transform;
  transition-duration: var(--def-transition-duration);
  transition-timing-function: ease-in-out;
}

.customOfferCard-container:hover .customOfferCard {
  visibility: visible;
  transform: translate3d(0, -100%, 0);
}

.offer__button--mobile {
  padding: 0 16px;
  cursor: pointer;
  color: #f04935;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}

.custom-right-arrow {
  width: 16px;
  filter: invert(52%) sepia(91%) saturate(3086%) hue-rotate(187deg) brightness(90%) contrast(99%);
}

@media (max-width: 411px) {
}

@media (min-width: 412px) and (max-width: 767px) {
}

@media (min-width: 768px) {
}
</style>
