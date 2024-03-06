<template>
  <div class="pb-40">
    <div v-if="getTrips.length > 0">
      <SingleTrip
        v-for="(trip, index) in getTrips"
        :key="index"
        :trip="trip"
        :selectedTrip="selectedBusId"
        :busIndex="index"
        @selectedTripId="selectTrip"
        :selectedBuxIndex="selectedBusIndex"
        :setSelectedBuxIndex="(value) => (selectedBusIndex = value)"
      />
    </div>
    <div v-else-if="getTrips.length === 0 && isBeforeGetDataState === false">
      <!-- error layout -->
      <div class="h-[500px] flex justify-center items-center bg-[#f7f7f7]">
        <!-- <TripNotFound/> -->
        <OpssAlert
          :details="'Looks like we could not find any trip according to your search. Try different route or date and search again.'"
          :customStyle="'px-[92.5px]'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "BusTripList",
  data() {
    return {
      selectedBusId: null,
      selectedBusIndex: null,
      isBeforeGetDataState: true,
    };
  },
  computed: {
    ...mapGetters("common", ["getCities"]),
    ...mapGetters("busStore", ["getTrips"]),
  },
  methods: {
    ...mapActions("busStore", ["getPbScheduleDataAction"]),
    ...mapMutations("busStore", ["setTrips"]),

    selectTrip(tripId) {
      this.selectedBusId = tripId;
    },
    test() {
      this.$nextTick(async () => {
        this.$nuxt.$loading?.start();
        const { from, to, type, date } = this.$route.query;
        const formattedDate = new Date(+date).toLocaleString("en-CA", {
          dateStyle: "short",
        });

        let payload = {};

        if (from) {
          this.getCities?.filter((s) => {
            if (s.city_name.toLowerCase() === from.toLowerCase()) {
              payload["from"] = s.city;
            }
          });
        }

        if (to) {
          this.getCities?.filter((s) => {
            if (s.city_name.toLowerCase() === to.toLowerCase()) {
              payload["to"] = s.city;
            }
          });
        }

        payload.date = formattedDate;
        payload.busType = type;

        if (payload.from && payload.to) {
          await this.getPbScheduleDataAction(payload);
        }else{ //from & to is not matched so we are invalidating already fetched trips
          this.setTrips([])
        }

        this.$nuxt.$loading?.finish();
        this.isBeforeGetDataState = false;
      });
    },
  },
  watch: {
    getTrips: {
      handler() {
        this.selectedBusId = null;
      },
      deep: true,
    },
    "$route.query": {
      handler: function () {
        this.test();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
