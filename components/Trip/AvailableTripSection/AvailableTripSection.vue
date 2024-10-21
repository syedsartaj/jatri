<template>
  <div
    class="lg:grid  lg:grid-cols-3 gap-x-4  xl:gap-x-[30px] px-4 xl:px-[100px] py-4 lg:py-[30px] bg-[#f7f7f7]"
  >
    <div class="hidden lg:block w-full lg:col-span-1 2xl:col-span-1">
      <ModifyFilterBus v-if="ServiceType.BUS === selectedService" />
      <ModifyFilterLaunch v-if="ServiceType.LAUNCH === selectedService" />
    </div>

    <!-- TRIPS -->
    <div class="w-full lg:col-span-2 2xl:col-span-2">
      <OfferAndPromo v-if="ServiceType.BUS === selectedService"/>
      <BusTripList v-if="ServiceType.BUS === selectedService" />
      <LaunchTripList v-if="ServiceType.LAUNCH === selectedService" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { ServiceType } from "@/helpers/utils";
export default {
  name: "AvailableTripSection",
  data() {
    return {
      ServiceType: ServiceType,
    };
  },
  computed: {
    ...mapGetters("common", ["getSelectedServiceType"]),
    selectedService() {
      return this.getSelectedServiceType;
    },
  },
};
</script>
