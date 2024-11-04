<template>
  <div>
    <!-- Search modifier -->
    <div class="relative">
      <BannerSectionTripPage />
      <ModifyFilterMobileLaunch />

      <!-- Mobile device filter button -->
      <button v-if="getMobileFloatingFilter" @click="toggleTripFilterModal"
        class="w-[98px] lg:hidden flex justify-center items-center gap-x-[10.67px] py-[10px] text-corporate text-sm font-medium bg-white shadow-xl fixed left-4 bottom-[88px] z-[999999] rounded-full">
        <img src="@/assets/images/icons/filterIcon.svg" alt="" />
        <span>Filter</span>
      </button>

      <!-- Filter modal -->
      <div class="block lg:hidden" v-if="isTripFilterModalOpen">
        <TripFilterModalLaunch :close="toggleTripFilterModal" @handleTripFilterModal="toggleTripFilterModal" />
      </div>
    </div>

    <AvailableTripSection />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { handleScrollBehaviour } from "../../../helpers/utils";

export default {
  middleware(ctx) {
    // ctx.$gtm.push({ event: "ssr" });
  },

  data() {
    return {
      isTripFilterModalOpen: false,
    };
  },

  computed: {
    ...mapGetters("launchStore", [
      "getMobileFloatingFilter",
      "getMobileFilterInitialData",
    ]),
  },



  methods: {
    ...mapMutations("busStore", ["updateMobileFilterData"]),
    toggleTripFilterModal() {
      const body = document.getElementsByTagName("body")[0];
      if (body) {
        handleScrollBehaviour(this.isTripFilterModalOpen);
      }
      this.isTripFilterModalOpen = !this.isTripFilterModalOpen;
    },
  },
  beforeDestroy() {
    this.updateMobileFilterData(this.getMobileFilterInitialData);
  },
};
</script>
