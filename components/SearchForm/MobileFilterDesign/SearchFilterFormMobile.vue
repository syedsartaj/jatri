<template>
  <div>
    <div class="grid sm:grid-cols-2 gap-4">
      <SearchCityFilterMobile
        v-model="departure"
        :defaultValue="departureName"
        :label="'From city or your location'"
        :icon="require('@/assets/images/icons/fromStoppageIcon.svg')"
        :default-option="'Choose your location'"
        :allow-filter="true"
        :options="getCities"
      />
      <SearchCityFilterMobile
        v-model="destination"
        :defaultValue="destinationName"
        :label="'To city or your destination'"
        :icon="require('@/assets/images/icons/toStoppageIcon.svg')"
        :default-option="'Choose your destination'"
        :allow-filter="true"
        :options="getCities"
      />
      <DatePickerMobile
        v-model="departingDate"
        :label="'Journey date'"
        :icon="require('@/assets/images/icons/datepickerIcon.svg')"
        :default-option="'Select Journey Date'"
        :allow-filter="true"
      />
      <SearchBusFilterMobile
        v-if="getSelectedServiceType === ServiceType.BUS"
        v-model="coachType"
        :defaultValue="''"
        :label="'Bus type, Ac or Non Ac'"
        :icon="require('@/assets/images/icons/searchTypeIcon.svg')"
        :default-option="'Choose bus type'"
        :allow-filter="false"
        :options="coachTypes"
      />
      <SearchTimeFilterMobile
        v-if="getSelectedServiceType === ServiceType.LAUNCH"
        v-model="selectedTime"
        :defaultValue="''"
        :label="'Departure time'"
        :icon="require('@/assets/images/icons/searchTimeIcon.svg')"
        :default-option="'Choose a time'"
        :allow-filter="false"
        :options="timeList"
      />
    </div>
    <button
      class="mt-6 w-full rounded-full text-white text-sm font-medium leading-5 py-[13px] px-[26px]"
      :class="
        !departure || !destination || !coachType || !departingDate
          ? 'bg-corporate'
          : 'bg-corporate cursor-pointer border border-primary'
      "
      @click="handleFromSubmit"
    >
      Search ticket
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cookies from "js-cookie";
import { ServiceType } from "../../../helpers/utils";
export default {
  name: "SearchFilterFormMobile",
  data() {
    return {
      ServiceType: ServiceType,
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
      selectedTime: "4 am - 12 pm",
      timeList: ["4 am - 12 pm", "12 pm - 06 pm", "06 pm - 03 am"],
      //quantity: ''
    };
  },
  computed: {
    ...mapGetters("common", ["getCities"]),
    ...mapGetters("common", ["getSelectedServiceType"]),
  },
  methods: {
    handleToastMessage(message) {
      this.$toast.error(message, {
        position: "bottom-right",
        duration: 5000,
      });
    },
    handleFromSubmit() {
      if (!this.departure) {
        this.handleToastMessage("Please insert your location");
      }
      if (!this.destination) {
        this.handleToastMessage("Please insert your destination");
      }
      if (!this.coachType) {
        this.handleToastMessage("Please insert coach type");
      }
      if (!this.departingDate) {
        this.handleToastMessage("Please insert departure date");
      }
      if (
        this.departure &&
        this.destination &&
        this.coachType &&
        this.departingDate
      ) {
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

    // findTrips(){
    //     window.location.href = '/trip'
    // }
  },
  watch: {
    "$route.query": {
      handler: function (value) {
        const { from, to, date } = value;
        if (from) {
          this.getCities.filter((s) => {
            if (s.city_name.toLowerCase() === from.toLowerCase()) {
              this.departure = s.city_name;
              this.departureName = s;
            }
          });
        }
        if (to) {
          this.getCities.filter((s) => {
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
