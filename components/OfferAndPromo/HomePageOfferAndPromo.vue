<template>
  <div>
    <div
      class="pt-80 sm:pt-12 mt-10 flex justify-center w-full lg:hidden"
      v-if="!(getOfferImages && getOfferImages.length)"
    ></div>

    <!-- Offer & Promos Section Mobile -->
    <div
      class="pt-80 sm:pt-12 mt-10 flex justify-center w-full lg:hidden"
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
            <slide v-for="(offerImg, index) in getOfferImages" :key="index">
              <img
                :id="index"
                :src="offerImg"
                alt=""
                class="rounded-[10px] w-[300px] h-[200px]"
              />
            </slide>
          </hooper>
        </div>
      </div>
    </div>

    <!-- Offer & Promos Section -->

    <div
      class="pt-80 p-4 lg:mt-0 lg:p-[100px] lg:pb-0 justify-center w-full hidden lg:flex"
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
            <slide v-for="(offerImg, index) in getOfferImages" :key="index">
              <img
                :id="index"
                :src="offerImg"
                alt=""
                class="rounded-2xl w-[280px] lg:w-[350px] xl:w-[460px] h-[164px] lg:h-[200px] xl:h-[260px] pointer-events-none"
              />
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
      slideLeft: false,
      slideRight: false,
      hooperSettings: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 3000,
        transition: 2000,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 5,
        breakpoints: {
          2300: {
            itemsToShow: 4.2,
          },
          2100: {
            itemsToShow: 4,
          },
          1900: {
            itemsToShow: 3.5,
          },
          1700: {
            itemsToShow: 3,
          },
          1520: {
            itemsToShow: 2.7,
          },
          1440: {
            itemsToShow: 2.5,
          },
          1280: {
            itemsToShow: 2.2,
          },
          1140: {
            itemsToShow: 2.3,
          },
          1060: {
            itemsToShow: 2.2,
          },
          1024: {
            itemsToShow: 2,
          },
        },
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
        breakpoints: {
          950: {
            itemsToShow: 2.8,
          },
          890: {
            itemsToShow: 2.7,
          },
          850: {
            itemsToShow: 2.5,
          },
          720: {
            itemsToShow: 2.2,
          },
          633: {
            itemsToShow: 2,
          },
          600: {
            itemsToShow: 1.8,
          },
          500: {
            itemsToShow: 1.5,
          },
          420: {
            itemsToShow: 1.3,
          },
          390: {
            itemsToShow: 1.2,
          },
          320: {
            itemsToShow: 1,
          },
        },
      },
    };
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
  },
  components: { Hooper, Slide },
  computed: {
    ...mapGetters("common", ["getOfferImages"]),
  },
};
</script>
