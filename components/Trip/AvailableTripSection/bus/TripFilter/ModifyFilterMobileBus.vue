<template>
  <div class="block lg:hidden">
    <div
      class="flex items-center justify-center mx-auto px-4 top-0 left-0 bottom-0 right-0 z-40 bg-image py-2 md:py-4"
    >
      <div
        class="bg-white h-[52px] w-full rounded-md flex items-center justify-between px-[14px] py-2"
      >
        <div class="w-[270px]">
          <div class="flex justify-start gap-x-[7.67px]">
            <h2 class="text-xs font-medium text-blackPrimary">
              {{ $route.query.from }}
            </h2>
            <img
              src="@/assets/images/icons/rightArrowWithLine.svg"
              alt=""
              class="w-[6.67px]"
            />
            <h2 class="text-xs font-medium text-blackPrimary">
              {{ $route.query.to }}
            </h2>
          </div>
          <p class="text-[11px] leading-4 font-normal text-blackSecondary">
            <span>{{ getHumanDate($route.query.date) }}</span
            >, <span class="capitalize">{{ $route.query.type }}</span>
          </p>
        </div>
        <button
          @click="modifySearch"
          class="bg-[#1E88E5] rounded-full py-1 px-[10px] text-xs font-medium text-white border-none"
        >
          Modify
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  methods: {

    modifySearch() {
      this.$router.push({ path: "/bus", query: { ...this.$route.query } });
    },

    getHumanDate(date) {
      return moment(
        new Date(+date).toLocaleString("en-CA", { dateStyle: "short" })
      ).format("DD MMM YYYY");
    },
  },
};
</script>

<style scoped>
.bg-image {
  background-image: url("../../../../../assets/images/home/searchBannerImageWeb.svg");
  background-size: cover;
}
</style>
