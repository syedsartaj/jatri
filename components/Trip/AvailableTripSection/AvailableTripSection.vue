<template>
  <div
    class="lg:flex lg:justify-start gap-x-4 xl:gap-x-[30px] px-4 xl:px-[100px] py-4 lg:py-[30px] bg-[#f7f7f7]"
  >
    <div class="hidden lg:block w-full lg:w-[33.9%] 2xl:w-[30%]">
      <ModifyFilterBus v-if="ServiceType.BUS === selectedService" />
      <ModifyFilterLaunch v-if="ServiceType.LAUNCH === selectedService" />
    </div>

    <!-- TRIPS -->
    <div class="w-full lg:w-[66.1%] 2xl:w-[70%]">
      <OffferAndPromo />
      <BusTripList v-if="ServiceType.BUS === selectedService" />
      <LaunchTripList v-if="ServiceType.LAUNCH === selectedService" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { ServiceType } from "../../../helpers/utils";
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
