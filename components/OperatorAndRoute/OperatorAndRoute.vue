<template>
  <div class="py-10 lg:py-[60px] px-4 lg:px-[100px]">
    <div
      class="p-4 lg:p-10 bg-white rounded-[10px] lg:flex lg:justify-between lg:gap-x-[140px]"
    >
      <div class="lg:w-3/4">
        <p class="text-[#8d8d8f] text-xs lg:text-sm font-medium uppercase">
          {{ sectionName }}
        </p>

        <h2
          class="text-blackPrimary text-2xl lg:text-[32px] lg:leading-10 font-medium mt-1"
        >
          {{ sectionData.title }}
        </h2>
        <div
          class="mt-4 lg:mt-6 text-blackLight text-base lg:text-xl font-normal text-justify"
          v-html="sectionData?.description"
        ></div>

        <div
          @click="getRidrectUrl()"
          class="w-[121px] lg:w-[132px] bg-corporate rounded-full flex justify-center gap-x-[11px] items-center text-white text-xs lg:text-sm font-medium py-3 mt-8 lg:mt-[45px] cursor-pointer"
        >
          Book now
          <img
            src="@/assets/images/icons/rightArrowWhite.svg"
            alt=""
            class="w-[10.67px] lg:w-3 lg:h-[11.67px]"
          />
        </div>

        <div class="mt-10 divide-y-2">
          <div
            v-if="sectionData?.distance"
            class="flex justify-between items-center py-4"
          >
            <div
              class="w-1/2 lg:w-3/4 flex justify-start items-center gap-x-[18px]"
            >
              <img
                src="@/assets/images/icons/distanceIcon.svg"
                class="w-[16.67px] lg:w-5"
                alt=""
              />
              <h2 class="text-blackSecondary text-base lg:text-xl font-normal">
                Distance
              </h2>
            </div>
            <div class="w-1/2 lg:w-1/4">
              <h2 class="text-blackPrimary text-base lg:text-xl font-medium">
                <span>{{ sectionData.distance }}</span> km
              </h2>
            </div>
          </div>
          <div
            v-if="sectionData?.approxTime"
            class="flex justify-between items-center py-4"
          >
            <div
              class="w-1/2 lg:w-3/4 flex justify-start items-center gap-x-[18px]"
            >
              <img
                src="@/assets/images/icons/clockIcon.svg"
                class="w-[16.67px] lg:w-5"
                alt=""
              />
              <h2 class="text-blackSecondary text-base lg:text-xl font-normal">
                Time
              </h2>
            </div>
            <div class="w-1/2 lg:w-1/4">
              <h2 class="text-blackPrimary text-base lg:text-xl font-medium">
                <span>{{ sectionData.approxTime }}</span> hours approx.
              </h2>
            </div>
          </div>
          <div
            v-if="sectionData?.priceStartFrom"
            class="flex justify-between items-center py-4"
          >
            <div
              class="w-1/2 lg:w-3/4 flex justify-start items-center gap-x-[18px]"
            >
              <img
                src="@/assets/images/icons/priceIcon.svg"
                class="w-[16.67px] lg:w-5"
                alt=""
              />
              <h2 class="text-blackSecondary text-base lg:text-xl font-normal">
                Price starts from
              </h2>
            </div>
            <div class="w-1/2 lg:w-1/4">
              <h2 class="text-blackPrimary text-base lg:text-xl font-medium">
                <span>{{ sectionData.priceStartFrom }}</span> BDT
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 mt-8 lg:mt-0">
        <img
          v-for="(image, index) in sectionData.imageList"
          :key="index"
          :src="imageUrl + image"
          alt=""
          class="mb-5 last:mb-0 w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  title: "OperatorAndRoute",
  props: ["sectionName", "sectionData"],
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    getRidrectUrl() {
      const isBusPath = this.$route.path.includes("/bus");
      const date = new Date().toLocaleDateString("en-CA", {
        dateStyle: "short",
      });
      const timestamp = new Date(date).getTime();
      const commonQuery = {
        from: this.sectionData.from,
        to: this.sectionData.to,
        date: timestamp,
      };

      if (isBusPath) {
        const busQuery = {
          ...commonQuery,
          type: "all",
        };
        this.$router.push({ path: "/bus/trip", query: busQuery });
      } else {
        this.$router.push({ path: "/launch/trip", query: commonQuery });
      }
    },
  },
  mounted() {
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
  },
};
</script>
