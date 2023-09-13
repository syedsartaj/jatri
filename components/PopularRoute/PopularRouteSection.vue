<template>
  <div
    v-if="getPopularRouteListData?.length"
    class="bg-successLight py-10 lg:py-[100px] px-4 lg:px-[100px] flex justify-center"
  >
    <div class="w-full">
      <div class="w-full flex items-center justify-center">
        <img
          src="@/assets/images/home/route.svg"
          alt=""
          class="w-[64px] h-[64px] lg:w-[88px] lg:h-[88px]"
        />
      </div>
      <h2
        class="font-semibold text-2xl md:text-[32px] md:leading-[40px] lg:text-[36px] lg:leading-[44px] text-blackPrimary text-center mt-4 lg:mt-6"
      >
        Our most popular routes
      </h2>

      <div class="grid grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-[60px]">
        <RouteListItem
          v-for="(route, index) in getPopularRouteListData"
          :routeItem="route"
          :key="index"
          :index="index"
          :totalItem="getPopularRouteListData?.length"
          :haveBorder="haveBorder(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PopularRouteSection",
  computed: {
    ...mapGetters("common", ["getPopularRouteListData"]),
  },
  data() {
    return {
      isMobile: false,
      routeItem: {
        numberOfRow: 0,
        numberOfItemInRow: 0,
      },
    };
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    haveBorder(index) {
      return !(
        Math.ceil((index + 1) / this.routeItem.numberOfItemInRow) ===
        this.routeItem.numberOfRow
      );
    },
    onResize() {
      const isMobile = window.innerWidth < 1024;
      this.isMobile = isMobile;
      this.handleRouteItemCalculation(isMobile);
    },
    handleRouteItemCalculation(isMobile) {
      this.routeItem.numberOfItemInRow = isMobile ? 2 : 3;
      this.routeItem.numberOfRow = Math.ceil(
        this.getPopularRouteListData.length / this.routeItem.numberOfItemInRow
      );
    },
  },
};
</script>
