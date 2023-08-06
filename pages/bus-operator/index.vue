<template>
  <div class="py-10 lg:py-[60px] px-4 lg:px-[100px]">
    <div
      class="p-4 lg:p-10 bg-white rounded-[10px] lg:flex lg:justify-between lg:gap-x-[140px]"
      v-if="operator.length"
    >
      <div class="lg:w-3/4">
        <p class="text-[#8d8d8f] text-xs lg:text-sm font-medium uppercase">
          Bus Operator
        </p>

        <h2
          class="text-blackPrimary text-2xl lg:text-[32px] lg:leading-10 font-medium mt-1"
        >
          {{ operator[0].heading }}
        </h2>
        <p
          v-for="paragraph in operator[0].paragraph"
          :key="paragraph"
          class="mt-4 lg:mt-6 text-blackLight text-sm lg:text-xl font-normal text-justify"
        >
          <span class="last:mt-5">{{ paragraph }}</span>
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
            v-if="operator[0].distance"
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
                <span>{{ operator[0].distance }}</span> km
              </h2>
            </div>
          </div>
          <div
            v-if="operator[0].time"
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
                <span>{{ operator[0].time }}</span> hours approx.
              </h2>
            </div>
          </div>
          <div
            v-if="operator[0].priceStartsFrom"
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
                <span>{{ operator[0].priceStartsFrom }}</span> BDT
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 mt-8 lg:mt-0">
        <img
          v-if="$route.query.name === 'econo-service'"
          src="@/assets/images/bus-operator/econo-service.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        /><img
          v-if="$route.query.name === 'ema-paribahan'"
          src="@/assets/images/bus-operator/ema-paribahan.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        /><img
          v-if="$route.query.name === 'euro-coach'"
          src="@/assets/images/bus-operator/euro-coach.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        /><img
          v-if="$route.query.name === 'greenline'"
          src="@/assets/images/bus-operator/greenline.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        /><img
          v-if="$route.query.name === 'habib-paribahan'"
          src="@/assets/images/bus-operator/habib-paribahan.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        /><img
          v-if="$route.query.name === 'hanie-enterprise'"
          src="@/assets/images/bus-operator/hanie-enterprise.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        /><img
          v-if="$route.query.name === 'jamuna-line-paribahan'"
          src="@/assets/images/bus-operator/jamuna-line-paribahan.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        /><img
          v-if="$route.query.name === 'jeddah-express'"
          src="@/assets/images/bus-operator/jeddah-express.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        /><img
          v-if="$route.query.name === 'lucky-express'"
          src="@/assets/images/bus-operator/lucky-express.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        />
        <img
          v-if="$route.query.name === 'mimzal-paribahan'"
          src="@/assets/images/bus-operator/mimzal-paribahan.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        />
        <img
          v-if="$route.query.name === 'pingky-paribahan'"
          src="@/assets/images/bus-operator/pingky-paribahan.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        />
        <img
          v-if="$route.query.name === 'romar-paribahan'"
          src="@/assets/images/bus-operator/romar-paribahan.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        />
        <img
          v-if="$route.query.name === 'shah-fateh-ali'"
          src="@/assets/images/bus-operator/shah-fateh-ali.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        />
        <img
          v-if="$route.query.name === 'london-express'"
          src="@/assets/images/bus-operator/london-express.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        />
        <img
          v-if="$route.query.name === 'sb-paribahan'"
          src="@/assets/images/bus-operator/sb-paribahan.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        />
        <img
          v-if="$route.query.name === 'shohagh-paribahan'"
          src="@/assets/images/bus-operator/shohagh-paribahan.jpg"
          alt=""
          class="mb-5 last:mb-0 w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import routeAndOperator from "@/assets/json/routeAndOperator.json";
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },

  async asyncData({ route }) {
    const query = {
      name: route.query.name,
    };
    const operator = routeAndOperator.operartors.filter((item) => {
      return item.name.toLowerCase() == query.name.toLowerCase();
    });

    return {
      operator,
    };
  },
};
</script>

<style></style>
