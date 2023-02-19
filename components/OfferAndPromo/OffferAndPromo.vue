<template>
  <div
    class="p-4 w-full bg-[#FFFFFF] rounded-[10px] flex items-center mb-[20px]"
    v-if="getOfferImages && getOfferImages.length"
  >
    <img
      src="@/assets/images/arrowLeftBlack.svg"
      alt=""
      class="h-4 w-4 cursor-pointer mr-[12px]"
      @click="scrollLeft"
    />
    <div class="overflow-hidden w-full h-[100px]">
      <hooper ref="hooperSlide" :settings="hooperSettings">
        <slide v-for="(offerImg, index) in getOfferImages" :key="index">
          <img
            :id="index"
            :src="offerImg"
            alt=""
            class="rounded-[8px] w-[175px] h-[100px] pointer-events-none"
          />
        </slide>
      </hooper>
    </div>
    <img
      src="@/assets/images/arrowRightBlack.svg"
      alt=""
      class="h-4 w-4 cursor-pointer ml-[12px]"
      @click="scrollRight"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "OffferAndPromo",
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  data() {
    return {
      slideLeft: false,
      slideRight: false,
      imageUrl: "",
      hooperSettings: {
        slidesToShow: 1,
        loop: false,
        infiniteScroll: true,
        centerMode: false,
        nav: false,
        autoPlay: true,
        touch: true,
        wheelControl: false,
        keyboardControl: false,
        mouseDrag: true,
        dragThreshold: 10,
        playSpeed: 3000,
        transition: 2000,
        breakpoints: {
          1700: {
            itemsToShow: 5.2,
          },
          1650: {
            itemsToShow: 4.5,
          },
          1450: {
            itemsToShow: 4,
          },
          1400: {
            itemsToShow: 3.7,
          },
          1350: {
            itemsToShow: 3.5,
          },
          1250: {
            itemsToShow: 3,
          },
          1200: {
            itemsToShow: 2.8,
          },
          1100: {
            itemsToShow: 2.5,
          },
          1024: {
            itemsToShow: 2.2,
          },
          1000: {
            itemsToShow: 4.5,
          },
          950: {
            itemsToShow: 4.2,
          },
          900: {
            itemsToShow: 4,
          },
          850: {
            itemsToShow: 3.8,
          },
          800: {
            itemsToShow: 3.5,
          },
          750: {
            itemsToShow: 3.2,
          },
          700: {
            itemsToShow: 3,
          },
          650: {
            itemsToShow: 2.8,
          },
          600: {
            itemsToShow: 2.5,
          },
          550: {
            itemsToShow: 2.2,
          },
          450: {
            itemsToShow: 1.8,
          },
          400: {
            itemsToShow: 1.5,
          },
          360: {
            itemsToShow: 1.2,
          },
          325: {
            itemsToShow: 1,
          },
        },
      },
    };
  },
  components: { Hooper, Slide },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
  },
  computed: {
    ...mapGetters("guarantedseat", ["getOfferImages"]),
  },
  methods: {
    scrollLeft() {
      this.$refs.hooperSlide.slidePrev();
      this.slideLeft = true;
      this.slideRight = false;
    },
    scrollRight() {
      this.$refs.hooperSlide.slideNext();
      this.slideRight = true;
      this.slideLeft = false;
    },
  },
};
</script>


<style scoped>
.scroll-parent {
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

.scroll-element {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0%;
  top: 0%;
}

.primary {
  animation: primary 10s linear infinite;
}

.secondary {
  animation: secondary 10s linear infinite;
}

@keyframes primary {
  from {
    left: 0%;
  }

  to {
    left: -100%;
  }
}

@keyframes secondary {
  from {
    left: 100%;
  }

  to {
    left: 0%;
  }
}

/* .hooper-track li {
  width: 196px !important;
} */
</style>
