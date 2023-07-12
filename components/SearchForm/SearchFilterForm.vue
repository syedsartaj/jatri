<template>
  <div class="bg-white searchbar rounded-[10px] flex justify-between w-full">
    <div class="flex justify-between w-10/12">
      <SearchCityFilter
        v-model="departure"
        :defaultValue="departureName"
        :label="'From'"
        :default-option="'Choose Your Location'"
        :allow-filter="true"
        :options="getGsCities"
        :errorOccured="errorOccured"
      />
      <SearchCityFilter
        v-model="destination"
        :defaultValue="destinationName"
        :label="'To'"
        :default-option="'Choose Your Destination'"
        :allow-filter="true"
        :options="getGsCities"
        :errorOccured="errorOccured"
      />
      <SearchBusFilter
        v-model="coachType"
        :defaultValue="''"
        :label="'Bus Type'"
        :default-option="'Choose bus type'"
        :allow-filter="false"
        :options="coachTypes"
        :errorOccured="errorOccured"
      />
      <DatePicker
        v-model="departingDate"
        :label="'DEPARTURE DATE'"
        :default-option="'Select Journey Date'"
        :allow-filter="true"
        :errorOccured="errorOccured"
      />
    </div>
    <div
      class="lg:px-1 xl:px-2 2xl:px-6 lg:py-2 xl:py-[15px] w-2/12 flex justify-center"
    >
      <button
        class="rounded-full text-white text-xs xl:text-sm font-medium leading-3 lg:leading-5 lg:px-[22px] xl:px-[26px] lg:py-1 xl:py-[13px]"
        :class="
          !departure || !destination || !coachType || !departingDate
            ? 'bg-corporate'
            : 'bg-corporate cursor-pointer'
        "
        @click="handleFromSubmit"
      >
        Search ticket
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      errorOccured: false,
      departure: "",
      destination: "",
      departureName: "",
      destinationName: "",
      departingDate: new Date().toLocaleString("en-CA", { dateStyle: "short" }),
      coachType: "all",
      // passengerName: "",
      coachTypes: [
        { city_name: "ac" },
        { city_name: "non-ac" },
        { city_name: "all" },
      ],
      //quantity: ''
    };
  },
  computed: {
    ...mapGetters("guarantedseat", ["getGsCities"]),
  },
  methods: {
    handleToastMessage(message) {
      this.$toast.error(message, {
        position: "bottom-right",
        duration: 5000,
      });
    },
    isCorrectLocationSelection(location) {
      return this.getGsCities.some(
        (city) => city.city_name.toLowerCase() === location.toLowerCase()
      );
    },
    handleFromSubmit() {
      const isRightLocation =
        this.isCorrectLocationSelection(this.departure) &&
        this.isCorrectLocationSelection(this.destination);
      const hasRequiredFields =
        isRightLocation && this.coachType && this.departingDate;

      if (hasRequiredFields) {
        const query = {
          from: this.departure,
          to: this.destination,
          type: this.coachType,
          quantity: this.quantity,
          date: new Date(this.departingDate).getTime(),
        };
        this.fireGTMEventForSearch();
        Cookies.remove("process-allow");
        this.$router.push({ path: "/trip", query });
      } else {
        this.errorOccured = true;

        if (
          this.departure &&
          !this.isCorrectLocationSelection(this.departure)
        ) {
          this.handleToastMessage("Please select the departure from the list");
        }

        if (
          this.destination &&
          !this.isCorrectLocationSelection(this.destination)
        ) {
          this.handleToastMessage(
            "Please select the destination from the list"
          );
        }
      }
    },
    fireGTMEventForSearch() {
      const eventData = {
        event: "searchTrip",
        from: this.departure,
        to: this.destination,
        type: this.coachType,
        date: this.departingDate,
      };

      this.$gtm.push(eventData);
    },
  },
  watch: {
    "$route.query": {
      handler: function (value) {
        const { from, to, date } = value;
        if (from) {
          this.getGsCities.filter((s) => {
            if (s.city_name.toLowerCase() === from.toLowerCase()) {
              this.departure = s.city_name;
              this.departureName = s;
            }
          });
        }

        if (to) {
          this.getGsCities.filter((s) => {
            if (s.city_name.toLowerCase() === to.toLowerCase()) {
              this.destination = s.city_name;
              this.destinationName = s;
            }
          });
        }

        if (date) {
          this.departingDate = new Date(+date).toLocaleString("en-CA", {
            dateStyle: "short",
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style></style>
