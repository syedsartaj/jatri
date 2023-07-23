<template>
  <div class="w-full">
    <SearchTab v-if="!isTripPage" />
    <div class="bg-white searchbar rounded-[10px] flex justify-between w-full">
      <div class="flex justify-between w-10/12">
        <SearchCityFilter
          v-model="departure"
          :defaultValue="departureName"
          :label="'From'"
          :default-option="'Choose Your Location'"
          :allow-filter="true"
          :options="getCities"
          :errorOccured="errorOccured"
        />
        <SearchCityFilter
          v-model="destination"
          :defaultValue="destinationName"
          :label="'To'"
          :default-option="'Choose Your Destination'"
          :allow-filter="true"
          :options="getCities"
          :errorOccured="errorOccured"
        />
        <SearchBusFilter
          v-if="getSelectedServiceType === ServiceType.BUS"
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
        <SearchTimeFilter
          v-if="getSelectedServiceType === ServiceType.LAUNCH"
          v-model="selectedTime"
          :defaultValue="''"
          :label="'DEPARTURE TIME'"
          :default-option="'Choose a time'"
          :allow-filter="false"
          :options="timeList"
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
              ? isTripPage
                ? 'bg-[#1E88E5]'
                : 'bg-corporate'
              : isTripPage
              ? 'bg-[#1E88E5] cursor-pointer'
              : 'bg-corporate cursor-pointer'
          "
          @click="handleFromSubmit"
        >
          {{ isTripPage ? "Modify Search" : "Search ticket" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cookies from "js-cookie";
import { ServiceType } from "../../helpers/utils";
export default {
  data() {
    return {
      ServiceType: ServiceType,
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
      selectedTime: "4 am - 12 pm",
      timeList: ["4 am - 12 pm", "12 pm - 06 pm", "06 pm - 03 am"],
    };
  },
  computed: {
    ...mapGetters("common", ["getSelectedServiceType", "getCities"]),
    isTripPage() {
      const path = this.$route.path.toString();
      return path.includes("/trip");
    },
  },
  methods: {
    handleToastMessage(message) {
      this.$toast.error(message, {
        position: "bottom-right",
        duration: 5000,
      });
    },
    isCorrectLocationSelection(location) {
      return this.getCities.some(
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
          date: new Date(this.departingDate).getTime(),
        };
        if (this.getSelectedServiceType === ServiceType.BUS) {
          query.type = this.coachType;
        } else {
          query.time =
            this.selectedTime === "4 am - 12 pm"
              ? "morning"
              : this.selectedTime === "12 pm - 06 pm"
              ? "day"
              : "night";
        }
        this.fireGTMEventForSearch();
        Cookies.remove("process-allow");
        const pathName =
          this.getSelectedServiceType === ServiceType.BUS
            ? "/bus/trip"
            : "/launch/trip";
        this.$router.push({ path: pathName, query });
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
        date: this.departingDate,
      };

      if (this.getSelectedServiceType === ServiceType.BUS) {
        eventData.type = this.coachType;
      } else {
        eventData.time =
          this.selectedTime === "4 am - 12 pm"
            ? "morning"
            : this.selectedTime === "12 pm - 06 pm"
            ? "day"
            : "night";
      }

      this.$gtm.push(eventData);
    },
  },
  watch: {
    "$route.query": {
      handler: function (value) {
        const { from, to, date, time } = value;
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

        if (time) {
          this.selectedTime =
            time === "morning"
              ? "4 am - 12 pm"
              : time === "day"
              ? "12 pm - 06 pm"
              : "06 pm - 03 am";
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style></style>
