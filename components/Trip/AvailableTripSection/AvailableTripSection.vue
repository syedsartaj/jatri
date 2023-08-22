<template>
  <div
    class="lg:flex lg:justify-start gap-x-4 xl:gap-x-[30px] px-4 xl:px-[100px] py-4 lg:py-[30px] bg-[#f7f7f7]"
  >
    <div class="hidden lg:block w-full lg:w-[28%]">
      <ModifyFilterBus v-if="ServiceType.BUS === selectedService" />
      <ModifyFilterLaunch />
    </div>

    <!-- TRIPS -->
    <div class="w-full lg:w-[72%]">
      <OffferAndPromo />
      <BusTripList v-if="ServiceType.BUS === selectedService" />
      <LaunchTripList v-if="ServiceType.LAUNCH === selectedService" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { ServiceType } from "../../../helpers/utils";
export default {
  name: "AvailableTripSection",
  data() {
    return {
      ServiceType: ServiceType,
    };
  },
  methods: {
    ...mapMutations("common", ["setSelectedService"]),
    checkRoutePath() {
      const path = this.$route.path.toString();

      this.setSelectedService(
        path.startsWith("/launch/trip") ? ServiceType.LAUNCH : ServiceType.BUS
      );
    },
  },
  computed: {
    ...mapGetters("common", ["getSelectedServiceType"]),
    selectedService() {
      return this.getSelectedServiceType;
    },
  },
  mounted() {
    this.checkRoutePath();
  },
  watch: {
    $route(to, from) {
      this.checkRoutePath();
    },
  },
};
</script>
