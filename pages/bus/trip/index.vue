<template>
  <div>
    <div class="relative">
      <!-- Search modifier start -->
      <BannerSectionTripPage /> 
      <ModifyFilterMobileBus /> 
      <!-- Search modifier end -->


      <!-- Mobile device filter button start -->
      <button
        v-if="getMobileFloatingFilter"
        @click="toggleTripFilterModal"
        class="w-[98px] lg:hidden flex justify-center items-center gap-x-[10.67px] py-[10px] text-corporate text-sm font-medium bg-white shadow-xl fixed left-4 bottom-[88px] z-[999999] rounded-full"
      >
        <img src="@/assets/images/icons/filterIcon.svg" alt="" />
        <span>Filter</span>
      </button>
      <!-- Mobile device filter button end -->

      <!--Modal Filter modal start-->
      <div class="block lg:hiddden" v-if="isTripFilterModalOpen">
        <TripFilterModalBus
          :close="toggleTripFilterModal"
          @handleTripFilterModal="toggleTripFilterModal"
        />
      </div>
      <!--Modal Filter modal end-->

    </div>

    <AvailableTripSection />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { handleScrollBehaviour } from "../../../helpers/utils";

export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },

  data() {
    return {
      isTripFilterModalOpen: false,
    };
  },

  computed: {
    ...mapGetters("busStore", [
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
