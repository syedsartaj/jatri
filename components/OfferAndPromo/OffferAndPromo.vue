<template>
  <div>
 <!-- Offer & Promos Section Mobile -->
 <div
    class="p-4 w-full bg-[#FFFFFF] rounded-[10px] flex md:hidden items-center mb-[20px]"
    v-if="getOfferImages && getOfferImages.length"
  >
    <img
      src="@/assets/images/arrowLeftBlack.svg"
      alt=""
      class="h-4 w-4 cursor-pointer mr-[12px]"
      @click="scrollLeft"
    />
    <div class="overflow-hidden w-full h-[100px]">
      <hooper ref="hooperSlide" :settings="hooperSettingsMobile">
        <slide v-for="(offerImg, index) in generateOfferImgArrForMobile()" :key="index">
          <div class="mr-[7px]">
            <img
              :id="index"
              :src="offerImg"
              alt=""
              class="rounded-[8px] w-[120px] md:w-[180px] pointer-events-none"
            />
          </div>
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


    <!-- Offer & Promos Section -->

  <div
    class="p-4 w-full bg-[#FFFFFF] rounded-[10px] hidden md:flex items-center mb-[20px]"
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
        <slide v-for="(offerImg, index) in generateOfferImgArrForLarge()" :key="index">
    
          <div class="mr-[7px]">
            <img
              :id="index"
              :src="offerImg"
              alt=""
              class="rounded-[8px] w-[120px] md:w-[180px] pointer-events-none"
            />
          </div>
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
      OfferImgMultiplier: 2,

      hooperSettings: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 3000,
        transition: 2000,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 4,
       
      },
      hooperSettingsMobile: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 3000,
        transition: 2000,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 2.5,
       
      },
    };
  },
  components: { Hooper, Slide },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
  },
  computed: {
    ...mapGetters("common", ["getOfferImages"]),
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
