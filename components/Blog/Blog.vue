<template>
  <div
    v-if="getBlogList?.length && imageUrl"
    class="w-full h-auto flex flex-col items-center mt-[60px] lg:mt-[50px] lg:py-[68px] lg:px-[100px]"
  >
    <div class="w-full flex flex-row items-center justify-between px-4 lg:px-0">
      <h2
        class="text-2xl lg:text-4xl lg:leading-[44px] text-blackPrimary text-left font-medium lg:font-semibold"
      >
        Our most recent initiatives
      </h2>
      <div class="flex justify-between gap-x-4">
        <button
          @click="prevSlide"
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
          @click="nextSlide"
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

    <div class="mt-10 w-full h-[325px] sm:h-[422px] lg:pl-0 overflow-hidden">
      <hooper ref="hooper" :settings="hooperSettings">
        <slide
          v-for="(blog, index) in getBlogList"
          :key="index"
          class="w-[320px] sm:w-[350px] xl:w-[392px] overflow-hidden"
        >
          <a
            class="flex flex-col items-center cursor-pointer"
            :href="blog.link"
          >
            <img
              :id="index"
              :src="imageUrl + blog.image"
              alt=""
              class="rounded-t-2xl w-[320px] sm:w-[350px] xl:w-[392px] h-[181px] lg:h-[222px]"
            />
            <div
              class="flex flex-col items-left w-[320px] sm:w-[350px] xl:w-[392px] h-[144px] lg:h-[196px] bg-[#F7F7F7] p-4 rounded-b-2xl"
            >
              <p
                class="lg:mt-4 mb-2 font-medium text-base lg:text-2xl font-blackPrimary"
              >
                {{ blog.title }}
              </p>
              <p
                class="text-sm font-normal lg:text-base line-clamp font-blackLight"
              >
                {{ blog.description }}
              </p>
              <div
                class="w-full hidden lg:flex flex-row items-left gap-x-[10px] mt-[10px]"
              >
                <p class="font-medium text-xl text-corporate">Learn more</p>
                <img
                  src="@/assets/images/home/arrowRightCorporate.svg"
                  alt=""
                  class="w-6 h-6"
                />
              </div>
            </div> </a
        ></slide>
      </hooper>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Blog",
  components: { Hooper, Slide },
  data() {
    return {
      slideLeft: false,
      slideRight: false,
      imageUrl: "",
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false,
        keyboardControl: false,
        centerMode: false,
        autoPlay: false,
        playSpeed: 3000,
        itemsToShow: 5,
        breakpoints: {
          2300: {
            itemsToShow: 5,
          },
          2100: {
            itemsToShow: 4.5,
          },
          1900: {
            itemsToShow: 4,
          },
          1600: {
            itemsToShow: 3.5,
          },
          1440: {
            itemsToShow: 3,
          },
          1024: {
            itemsToShow: 2.2,
          },
          768: {
            itemsToShow: 2,
          },
          700: {
            itemsToShow: 1.8,
          },
          590: {
            itemsToShow: 1.7,
          },
          520: {
            itemsToShow: 1.5,
          },
          425: {
            itemsToShow: 1.2,
          },
          0: {
            itemsToShow: 1,
          },
        },
      },
    };
  },
  methods: {
    prevSlide() {
      this.$refs.hooper.slidePrev();
      this.slideLeft = true;
      this.slideRight = false;
    },
    nextSlide() {
      this.$refs.hooper.slideNext();
      this.slideRight = true;
      this.slideLeft = false;
    },
  },
  computed: {
    ...mapGetters("guarantedseat", ["getBlogList"]),
  },
  mounted() {
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
  },
};
</script>

<style>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media only screen and (max-width: 375px) {
  .line-clamp {
    -webkit-line-clamp: 4;
  }
}

.hooper {
  height: auto;
}
</style>
