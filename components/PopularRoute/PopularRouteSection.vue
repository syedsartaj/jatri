<template>
  <div
    v-if="getPopularRouteListData?.length"
    class="lg:mt-0 bg-successLight lg:py-10 lg:py-[60px] px-4 lg:px-[100px] flex justify-center"
  >
    <div class="lg:px-4 lg:px-[60px] py-10 w-full">
      <div class="w-full flex items-center justify-center">
        <img
          src="@/assets/images/home/route.svg"
          alt=""
          class="w-16 h-16 lg:w-22 lg:h-22"
        />
      </div>
      <h2
        class="text-2xl lg:text-[45px] lg:leading-[52px] text-blackPrimary font-medium lg:font-semibold order-first lg:order-last text-center"
      >
        Our most popular routes
      </h2>

      <div class="grid grid-cols-2 lg:grid-cols-3 mt-8">
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
