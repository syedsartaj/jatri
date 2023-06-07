<template>
  <div class="py-10 lg:py-[60px] px-4 lg:px-[100px]">
    <div
      class="p-4 lg:p-10 bg-white rounded-[10px] lg:flex lg:justify-between lg:gap-x-[140px]"
    >
      <div class="lg:w-3/4">
        <p class="text-[#8d8d8f] text-xs lg:text-sm font-medium uppercase">
          Bus Operator
        </p>

        <h2
          class="text-blackPrimary text-2xl lg:text-[32px] lg:leading-10 font-medium mt-1"
        >
          {{ operator?.title }}
        </h2>
        <p
          class="mt-4 lg:mt-6 text-blackLight text-sm lg:text-xl font-normal text-justify"
        >
          <span class="last:mt-5" v-html="operator?.description"></span>
        </p>

        <NuxtLink
          to="/"
          class="w-[121px] lg:w-[132px] bg-corporate rounded-full flex justify-center gap-x-[11px] items-center text-white text-xs lg:text-sm font-medium py-3 mt-8 lg:mt-[45px]"
        >
          Book now
          <img
            src="@/assets/images/icons/rightArrowWhite.svg"
            alt=""
            class="w-[10.67px] lg:w-3 lg:h-[11.67px]"
          />
        </NuxtLink>

        <div class="mt-10 divide-y-2">
          <div
            v-if="operator.distance"
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
              <h2 class="text-blackSecondery text-base lg:text-xl font-normal">
                Distance
              </h2>
            </div>
            <div class="w-1/2 lg:w-1/4">
              <h2 class="text-blackPrimary text-base lg:text-xl font-medium">
                <span>{{ operator.distance }}</span> km
              </h2>
            </div>
          </div>
          <div
            v-if="operator.approxTime"
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
              <h2 class="text-blackSecondery text-base lg:text-xl font-normal">
                Time
              </h2>
            </div>
            <div class="w-1/2 lg:w-1/4">
              <h2 class="text-blackPrimary text-base lg:text-xl font-medium">
                <span>{{ operator.approxTime }}</span> hours approx.
              </h2>
            </div>
          </div>
          <div
            v-if="operator?.priceStartsFrom"
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
              <h2 class="text-blackSecondery text-base lg:text-xl font-normal">
                Price starts from
              </h2>
            </div>
            <div class="w-1/2 lg:w-1/4">
              <h2 class="text-blackPrimary text-base lg:text-xl font-medium">
                <span>{{ operator?.priceStartsFrom }}</span> BDT
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 mt-8 lg:mt-0">
        <img
          v-if="operator.image"
          :src="imageUrl + operator.image"
          alt=""
          class="mb-5 last:mb-0 w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  data() {
    return {
      imageUrl: "",
    };
  },
  mounted() {
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
  },
  async asyncData({ query, store }) {
    const operator = await store.dispatch("guarantedseat/getOperatorById", {
      Id: query.id,
    });

    return {
      operator,
    };
  },
};
</script>

<style></style>
