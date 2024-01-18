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
          <div
            @click="gotoOfferPage"
            class="pr-4 cursor-pointer font-inter text-xs font-medium text-corporate"
          >
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
                    class="shrink-image rounded-2xl w-full pointer-events-none"
                  />
                  <div
                    class="customOfferCard absolute w-full h-full rounded-2xl"
                  >
                    <div class="flex justify-between items-center px-4 pt-4">
                      <div>
                        <img
                          class="max-w-[34px]"
                          src="~/assets/images/header/jatri-logo.svg"
                          alt="jatri logo"
                        />
                      </div>
                      <div
                        @click="handlePromoCopy(offer.code)"
                        class="flex justify-center items-center cursor-pointer border border-solid border-[#EDEDED] bg-white rounded-full pl-2 pr-[2px] py-[2px]"
                        v-if="offer.code"
                      >
                        <div
                          class="text-blackPrimary font-inter text-sm font-medium pr-2"
                        >
                          {{ offer.code }}
                        </div>
                        <div>
                          <img
                            src="~/assets/images/copy-button.svg"
                            class="w-5"
                            alt="copy button"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="px-4 pt-1 text-xs font-semibold font-inter text-blackLight"
                    >
                      {{ offer.description }}
                    </div>

                    <div
                      v-if="offer.details !== 'undefined' && offer.details"
                      class="pt-1 md:pt-3 px-4 break-words text-[11px] leading-4 font-normal not-italic"
                      v-html="
                        offer.details.split(descriptionRegex)[0].length >
                        OFFER_DETAILS_CHAR_LIMIT.MOBILE
                          ? offer.details
                              .split(descriptionRegex)[0]
                              .slice(0, OFFER_DETAILS_CHAR_LIMIT.MOBILE)
                              .concat(['...'])
                          : offer.details.length >
                            OFFER_DETAILS_CHAR_LIMIT.MOBILE
                          ? offer.details
                              .split(descriptionRegex)[0]
                              .concat(['...'])
                          : offer.details.split(descriptionRegex)[0]
                      "
                    ></div>

                    <div class="px-4 pt-3 flex justify-start items-center">
                      <div
                        @click="gotoSpecificOffer(offer.code)"
                        class="pr-1 text-[#1E88E5] text-xs cursor-pointer"
                      >
                        View details
                      </div>
                      <div>
                        <img
                          class="custom-right-arrow"
                          src="~/assets/images/arrowRightBlack.svg"
                          alt=""
                        />
                      </div>
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
            Best offers for you
          </h2>
          <div
            @click="gotoOfferPage"
            class="pr-4 cursor-pointer font-inter text-xs font-medium text-corporate"
          >
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
                    class="shrink-image rounded-2xl w-full"
                  />
                  <div
                    class="customOfferCard absolute w-full h-full bg-[#eff7fd] rounded-2xl"
                  >
                    <div class="flex justify-between items-center px-4 pt-4">
                      <div>
                        <img
                          class="max-w-[41px]"
                          src="~/assets/images/header/jatri-logo.svg"
                          alt="jatri logo"
                        />
                      </div>
                      <div
                        @click="handlePromoCopy(offer.code)"
                        class="flex justify-center items-center cursor-pointer border border-solid border-[#EDEDED] bg-white rounded-full pl-[6px] py-[2px] pr-[2px]"
                        v-if="offer.code"
                      >
                        <div
                          class="text-blackPrimary font-inter text-sm font-medium pr-2"
                        >
                          {{ offer.code }}
                        </div>
                        <div>
                          <img
                            src="~/assets/images/copy-button.svg"
                            class="w-5"
                            alt="copy button"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="px-4 pt-[2px] text-sm font-semibold font-inter text-blackPrimary"
                    >
                      {{ offer.description }}
                    </div>

                    <div
                      v-if="offer.details !== 'undefined' && offer.details"
                      class="pt-[2px] px-4 break-words text-xs text-blackLight font-inter font-normal not-italic"
                      v-html="
                        offer.details.split(descriptionRegex)[0].length >
                        OFFER_DETAILS_CHAR_LIMIT.TAB
                          ? offer.details
                              .split(descriptionRegex)[0]
                              .slice(0, OFFER_DETAILS_CHAR_LIMIT.TAB)
                              .concat(['...'])
                          : offer.details.length > OFFER_DETAILS_CHAR_LIMIT.TAB
                          ? offer.details
                              .split(descriptionRegex)[0]
                              .concat(['...'])
                          : offer.details.split(descriptionRegex)[0]
                      "
                    ></div>

                    <div class="px-4 pt-3 flex justify-start items-center">
                      <div
                        @click="gotoSpecificOffer(offer.code)"
                        class="pr-1 text-[#1E88E5] text-xs font-medium cursor-pointer"
                      >
                        View details
                      </div>
                      <div>
                        <img
                          class="custom-right-arrow"
                          src="~/assets/images/arrowRightBlack.svg"
                          alt=""
                        />
                      </div>
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
            Best offers for you
          </h2>
          <div
            @click="gotoOfferPage"
            class="pr-4 cursor-pointer font-inter text-base font-medium text-corporate"
          >
            See all offers
          </div>
        </div>
        <div class="mt-5 xl:mt-[42px]">
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
                    class="shrink-image rounded-2xl w-full pointer-events-none"
                  />
                  <div
                    class="customOfferCard absolute w-full h-full rounded-2xl"
                  >
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
                        class="flex justify-center items-center cursor-pointer border border-solid border-[#EDEDED] bg-white rounded-full pl-3 pr-1 py-1"
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
                      v-if="offer.details !== 'undefined' && offer.details"
                      class="pt-3 px-4 break-words text-sm text-blackLight font-inter font-normal not-italic"
                      v-html="
                        offer.details.split(descriptionRegex)[0].length >
                        OFFER_DETAILS_CHAR_LIMIT.WEB
                          ? offer.details
                              .split(descriptionRegex)[0]
                              .slice(0, OFFER_DETAILS_CHAR_LIMIT.WEB)
                              .concat(['...'])
                          : offer.details.length > OFFER_DETAILS_CHAR_LIMIT.WEB
                          ? offer.details
                              .split(descriptionRegex)[0]
                              .concat(['...'])
                          : offer.details.split(descriptionRegex)[0]
                      "
                    ></div>

                    <div class="px-4 pt-3 flex justify-start items-center">
                      <div
                        @click="gotoSpecificOffer(offer.code)"
                        class="pr-1 text-[#1E88E5] text-xs font-medium cursor-pointer"
                      >
                        View details
                      </div>
                      <div>
                        <img
                          class="custom-right-arrow"
                          src="~/assets/images/arrowRightBlack.svg"
                          alt=""
                        />
                      </div>
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
      OFFER_DETAILS_CHAR_LIMIT: {
        MOBILE: 110,
        TAB: 120,
        WEB: 150,
      },
      descriptionRegex : /<\/p|<\/h|<\/li|<br/,
      slideLeft: false,
      slideRight: false,
      OfferImgMultiplier: 3,
      imageWidthWeb: 392,
      imageWidthTab: 320,
      imageWidthMobile: 286,
      gapBetweenImageInPx: 15,
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
          this.imageWidthWeb
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

    gotoOfferPage() {
      this.$router.push("/bus/offer");
    },
    gotoSpecificOffer(id) {
      this.$router.push({path:`/bus/offer`, query:{promo: id}});
    },
    handlePromoCopy(promoCode) {
      navigator.clipboard.writeText(promoCode);
      navigator.clipboard.readText();
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
  transition: transform visibility;
  transition-duration: var(--def-transition-duration);
  transition-timing-function: ease-in-out;
  background-image: url(../../assets/images//offer/offer-card-bg.png);
  background-repeat: no-repeat;
  background-size: contain;
}

.customOfferCard-container:hover .customOfferCard {
  visibility: visible;
  transform: translate3d(0, -100%, 0);
}

.customOfferCard-container .shrink-image {
  transform: scale(1);
  transition: scale;
  transition-duration: var(--def-transition-duration);
  transition-timing-function: ease-in-out;
}
.customOfferCard-container:hover .shrink-image {
  transform: scale(0.99);
}

.custom-right-arrow {
  width: 16px;
  filter: invert(52%) sepia(91%) saturate(3086%) hue-rotate(187deg)
    brightness(90%) contrast(99%);
}

@media (max-width: 411px) {
}

@media (min-width: 412px) and (max-width: 767px) {
}

@media (min-width: 768px) {
}
</style>
