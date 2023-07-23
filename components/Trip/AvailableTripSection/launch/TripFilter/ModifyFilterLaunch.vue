<template>
  <div
    class="bg-white border border-[#ededed] rounded-[10px] px-4 py-6 w-full h-auto"
  >
    <div class="flex justify-between gap-x-8">
      <button
        @click="previousDateFilter"
        class="border border-[#8d8d8f] w-full rounded-full px-4 py-[10px] flex justify-center items-center gap-x-[13.5px] font-medium text-xs text-blackPrimary"
      >
        <img
          src="@/assets/images/icons/leftArrow.svg"
          alt="left arrow"
          class="w-[5.19px] h-[8.49px]"
        />
        Prev. Day
      </button>
      <button
        @click="nextDateFilter"
        class="border border-[#8d8d8f] w-full rounded-full px-4 py-[10px] flex justify-center items-center gap-x-[13.5px] font-medium text-xs text-blackPrimary"
      >
        Next Day
        <img
          src="@/assets/images/icons/rightArrow.svg"
          alt="right arrow"
          class="w-[5.19px] h-[8.49px]"
        />
      </button>
    </div>
    <hr class="my-5" />
    <div class="flex justify-between items-center">
      <h2 class="font-medium text-2xl text-blackPrimary">Filter Options</h2>
      <button
        class="flex justify-between items-center gap-x-[9.33px]"
        @click="resetFilter"
      >
        <img
          src="@/assets/images/icons/resetIcon.svg"
          alt="reset filter"
          class="w-[13.33px]"
        />
        <p class="text-[#E0293B] font-medium text-xs">Reset Filter</p>
      </button>
    </div>

    <div v-if="priceFilter.length">
      <hr class="my-5" />
      <h2 class="text-blackSecondary text-base font-medium">PRICE:</h2>
      <div class="mt-[10px] divide-y divide-dashed">
        <div
          v-for="priceDirection in priceFilter"
          :key="priceDirection"
          @click="() => setPriceFilterType(priceDirection)"
          class="flex justify-between items-center my-2 last:pt-[6px]"
        >
          <label
            :for="priceDirection"
            class="flex justify-start items-center gap-x-[9.52px] cursor-pointer text-blackPrimary text-base font-normal"
          >
            <img
              :src="
                require(priceDirection == 'l2h'
                  ? '@/assets/images/icons/upArrow.svg'
                  : '@/assets/images/icons/downArrow.svg')
              "
              alt="Price Filter Type"
              class=""
            />
            {{
              priceDirection == "l2h"
                ? "Price low to high"
                : "Price high to low"
            }}
          </label>
          <input
            :id="priceDirection"
            type="checkbox"
            @click="priceFilterType = priceDirection"
            :checked="priceFilterType === priceDirection"
            class="default:border-2 border-blackPrimary cursor-pointer"
          />
        </div>
      </div>
    </div>

    <div v-if="getBoardingPoints.length">
      <hr class="my-5" />
      <h2 class="text-blackSecondary text-base font-medium">BOARDING POINT:</h2>
      <div class="mt-[10px] divide-y divide-dashed">
        <div
          v-for="point in getBoardingPoints"
          :key="point"
          class="flex justify-between items-center my-2 last:pt-[6px]"
        >
          <label
            :for="point"
            class="flex justify-start items-center gap-x-[9.52px] cursor-pointer text-blackPrimary text-base font-normal"
          >
            {{ point }}
          </label>
          <input
            :id="point"
            type="checkbox"
            @click="setBoardingPoint(point)"
            :checked="boardingPoint === point"
            class="default:border-2 border-blackPrimary cursor-pointer"
          />
        </div>
      </div>
    </div>

    <div v-if="getLaunchList.length">
      <hr class="my-5" />
      <h2 class="text-blackSecondary text-base font-medium">LAUNCH:</h2>
      <div class="mt-[10px] divide-y divide-dashed">
        <div
          v-for="launch in getLaunchList"
          :key="launch"
          class="flex justify-between items-center my-2 last:pt-[6px]"
        >
          <label
            :for="launch"
            class="flex justify-start items-center gap-x-[9.52px] cursor-pointer text-blackPrimary text-base font-normal"
          >
            {{ launch }}
          </label>
          <input
            :id="launch"
            type="checkbox"
            @click="setLaunchCompany(launch)"
            :checked="launchCompany === launch"
            class="default:border-2 border-blackPrimary cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      departure: "",
      destination: "",
      departureName: "",
      destinationName: "",
      departingDate: this.$route.query.date,
      priceFilter: ["l2h", "h2l"],
      priceFilterType: null,
      boardingPoint: "",
      launchCompany: "",
      timeList: ["4 am - 12 pm", "12 pm - 06 pm", "06 pm - 03 am"],
      selectedTime: null,
    };
  },
  computed: {
    ...mapGetters("launchStore", [
      "getBoardingPoints",
      "getLaunchList",
      "getLaunchClasses",
      "getMobileFilterData",
      "getCities",
    ]),
    ...mapGetters("common", ["getCities"]),
  },

  watch: {
    priceFilterType: {
      immediate: true,
      handler: function (value) {
        if (value) {
          this.sortedTrip(value);
        }
      },
    },
    "$route.query": {
      immediate: true,
      handler() {
        this.priceFilterType = null;
        this.launchCompany = null;
        this.boardingPoint = null;
        this.selectedTime = null;
      },
    },
  },

  methods: {
    ...mapMutations("launchStore", ["sortedTrip", "updateMobileFilterData"]),
    ...mapActions("launchStore", ["getPbScheduleDataAction"]),
    setPriceFilterType(type) {
      const newFilterData = {
        ...this.getMobileFilterData,
        priceFilterType: type,
      };
      this.updateMobileFilterData(newFilterData);
    },
    setBoardingPoint(point) {
      this.boardingPoint = point === this.boardingPoint ? null : point;
      this.handleTripFilter();
    },
    setLaunchCompany(bus) {
      this.launchCompany = bus === this.launchCompany ? null : bus;
      this.handleTripFilter();
    },
    async handleTripFilter() {
      this.$nuxt.$loading?.start();
      const { from, to, time, date } = this.$route.query;
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

      if (this.boardingPoint) {
        payload.boardingPoint = this.boardingPoint;
      }

      if (time) {
        payload.time = time;
      }

      if (this.launchCompany) {
        payload.ship = this.launchCompany;
      }

      await this.getPbScheduleDataAction(payload);
      this.$nuxt.$loading?.finish();
    },
    resetFilter() {
      this.launchCompany = null;
      this.boardingPoint = null;
      this.selectedTime = null;
      this.priceFilterType = null;
      this.handleTripFilter();
    },
    setTime(time) {
      this.selectedTime = time;
      this.handleTripFilter();
    },
    handleFromSubmit() {
      const query = {
        from: this.$route.query.from,
        to: this.$route.query.to,
        time: this.$route.query.time,
        date: this.$route.query.date,
      };
      this.$router.push({ path: "/launch/trip", query });
    },
    previousDateFilter() {
      const convertedDate = new Date(+this.$route.query.date).toLocaleString(
        "en-CA",
        { dateStyle: "short" }
      );
      const previousDate = moment(convertedDate).add(-1, "days");

      // Check if the previous date is earlier than today
      const currentDate = moment();
      if (previousDate.isBefore(currentDate, "day")) {
        this.$toast.error("Date can not be less than current date", {
          position: "bottom-right",
          duration: 5000,
        });
        return; // Return early, preventing further operations
      }

      const query = {
        from: this.$route.query.from,
        to: this.$route.query.to,
        time: this.$route.query.time,
        date: previousDate.valueOf(),
      };
      this.$router.push({ path: "/launch/trip", query });
    },
    nextDateFilter() {
      const convertedDate = new Date(+this.$route.query.date).toLocaleString(
        "en-CA",
        { dateStyle: "short" }
      );
      const nextDate = moment(convertedDate).add(1, "days");
      const query = {
        from: this.$route.query.from,
        to: this.$route.query.to,
        time: this.$route.query.time,
        date: nextDate.valueOf(),
      };
      this.$router.push({ path: "/launch/trip", query });
    },
  },
};
</script>

<style></style>
