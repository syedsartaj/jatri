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
    <div class="overflow-hidden w-full h-auto">
      <VueSlickCarousel v-bind="settings" ref="carousel">
        <div v-for="(offerImg, index) in getOfferImages" :key="index">
          <img
            :id="index"
            :src="offerImg"
            alt=""
            class="
              rounded-[8px]
              w-[175px]
              h-[100px]
              pointer-events-none 
            "
          />
        </div>
      </VueSlickCarousel>
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
import { mapActions, mapGetters } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

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
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  components: { VueSlickCarousel },
  
  mounted() {
   
    window.addEventListener("scroll", this.handleScroll);
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
  },
  computed: {
    ...mapGetters("guarantedseat", ["getOfferImages"]),
  },
  methods: {
   
    scrollLeft() {
      this.$refs.carousel.prev();
      this.slideLeft = true;
      this.slideRight = false;
    },
    scrollRight() {
      this.$refs.carousel.next();
      this.slideRight = true;
      this.slideLeft = false;
    },
  },
  
};
</script>


<style>
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

.slick-slide {
  max-width: 100%;
  width: 100%;
  overflow: hidden !important;
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
</style>
