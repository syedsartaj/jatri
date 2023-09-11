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

    <div v-if="timeList.length">
      <hr class="my-5" />
      <h2 class="text-blackSecondary text-base font-medium">TIME:</h2>
      <div
        class="grid grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-[10px] mt-[10px]"
      >
        <div v-for="time in timeList" :key="time" class="w-full h-9">
          <input id="busType" type="checkbox" class="hidden" />
          <label for="busType">
            <button
              @click="setTime(time)"
              class="group w-full h-full flex justify-center items-center gap-x-[4px] rounded px-[4px] text-xs font-medium"
              :class="
                selectedTime == time
                  ? 'bg-corporate text-white'
                  : 'bg-[#ededed] text-blackPrimary'
              "
            >
              <img
                :src="
                  require(time == '4 am - 12 pm'
                    ? '@/assets/images/icons/morning.svg'
                    : time == '12 pm - 06 pm'
                    ? '@/assets/images/icons/noon.svg'
                    : '@/assets/images/icons/night.svg')
                "
                alt="time"
                class="w-4 h-4"
              />
              {{ time }}
            </button>
          </label>
        </div>
      </div>
    </div>

    <div v-if="coachTypes.length">
      <hr class="my-5" />
      <h2 class="text-blackSecondary text-base font-medium">BUS TYPE:</h2>
      <div class="flex justify-between gap-[7px] mt-[10px]">
        <div
          v-for="busType in coachTypes"
          :key="busType"
          class="w-[125px] 2xl:w-[175px] h-9"
        >
          <input id="busType" type="checkbox" class="hidden" />
          <label for="busType">
            <button
              @click="setCoachtype(busType)"
              class="group w-full h-full flex justify-center items-center gap-x-[10px] capitalize rounded px-[6px] py-2 text-xs font-medium"
              :class="
                coachType == busType
                  ? 'bg-corporate text-white'
                  : 'bg-[#ededed] text-blackPrimary'
              "
            >
              <img
                :src="
                  require(busType == 'ac'
                    ? '@/assets/images/icons/acIcon.svg'
                    : busType == 'non-ac'
                    ? '@/assets/images/icons/nonAcIcon.svg'
                    : '@/assets/images/icons/anyConditionIcon.svg')
                "
                alt="Bus Type"
                class=""
              />
              {{ busType }}
            </button>
          </label>
        </div>
      </div>
    </div>

    <div v-if="getBusClasses.length">
      <hr class="my-5" />
      <h2 class="text-blackSecondary text-base font-medium">BUS CLASS:</h2>
      <div class="grid grid-cols-2 gap-x-[7px] gap-y-[10px] mt-[10px]">
        <div
          v-for="busClass in getBusClasses"
          :key="busClass"
          class="w-full h-9"
        >
          <input id="busClass" type="checkbox" class="hidden" />
          <label for="busClass">
            <button
              @click="setBusClass(busClass)"
              class="group w-full h-full flex justify-center items-center gap-x-[10px] capitalize rounded px-[6px] py-2 text-xs font-medium"
              :class="
                selectedBusClass == busClass
                  ? 'bg-corporate text-white'
                  : 'bg-[#ededed] text-blackPrimary'
              "
            >
              <img
                src="@/assets/images/icons/seat.svg"
                alt="Bus class"
                class=""
              />
              {{ busClass }}
            </button>
          </label>
        </div>
      </div>
    </div>

    <div v-if="priceFilter.length">
      <hr class="my-5" />
      <h2 class="text-blackSecondary text-base font-medium">PRICE:</h2>
      <div class="mt-[10px] divide-y divide-dashed">
        <div
          v-for="priceDirection in priceFilter"
          :key="priceDirection"
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

    <div v-if="getBusCompanies.length">
      <hr class="my-5" />
      <h2 class="text-blackSecondary text-base font-medium">BUS COMPANY:</h2>
      <div class="mt-[10px] divide-y divide-dashed">
        <div
          v-for="bus in getBusCompanies"
          :key="bus"
          class="flex justify-between items-center my-2 last:pt-[6px]"
        >
          <label
            :for="bus"
            class="flex justify-start items-center gap-x-[9.52px] cursor-pointer text-blackPrimary text-base font-normal"
          >
            {{ bus }}
          </label>
          <input
            :id="bus"
            type="checkbox"
            @click="setBusCompany(bus)"
            :checked="busCompany === bus"
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
      coachTypes: ["ac", "non-ac", "all"],
      coachType: "",
      priceFilter: ["l2h", "h2l"],
      priceFilterType: null,
      boardingPoint: "",
      busCompany: "",
      timeList: ["4 am - 12 pm", "12 pm - 06 pm", "06 pm - 03 am"],
      selectedTime: null,
      selectedBusClass: "",
    };
  },
  computed: {
    ...mapGetters("busStore", [
      "getBoardingPoints",
      "getBusCompanies",
      "getBusClasses",
      "getCities",
    ]),
    ...mapGetters("common", ["getCities"]),
  },

  watch: {
    coachType() {
      this.handleFromSubmit();
    },

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
        this.coachType = this.$route.query.type;
        this.busCompany = null;
        this.boardingPoint = null;
        this.selectedTime = null;
        this.selectedBusClass = null;
      },
    },
  },

  methods: {
    ...mapMutations("busStore", ["sortedTrip"]),
    ...mapActions("busStore", ["getPbScheduleDataAction"]),
    setCoachtype(type) {
      this.coachType = type;
    },
    setBoardingPoint(point) {
      this.boardingPoint = point === this.boardingPoint ? null : point;
      this.handleTripFilter();
    },
    setBusCompany(bus) {
      this.busCompany = bus === this.busCompany ? null : bus;
      this.handleTripFilter();
    },
    async handleTripFilter() {
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

      if (this.boardingPoint) {
        payload.boardingPoint = this.boardingPoint;
      }
      if (this.busCompany) {
        payload.company = this.busCompany;
      }
      if (this.selectedBusClass) {
        payload.busClass = this.selectedBusClass;
      }

      if (this.selectedTime) {
        payload.time =
          this.selectedTime === "4 am - 12 pm"
            ? "morning"
            : this.selectedTime === "12 pm - 06 pm"
            ? "day"
            : "night";
      }

      await this.getPbScheduleDataAction(payload);
      this.$nuxt.$loading?.finish();
    },
    resetFilter() {
      this.busCompany = null;
      this.boardingPoint = null;
      this.selectedTime = null;
      this.selectedBusClass = null;
      this.priceFilterType = null;
      this.coachType = "all";
      this.handleTripFilter();
    },
    setTime(time) {
      this.selectedTime = time;
      this.handleTripFilter();
    },
    setBusClass(value) {
      this.selectedBusClass = value;
      this.handleTripFilter();
    },
    handleFromSubmit() {
      const query = {
        from: this.$route.query.from,
        to: this.$route.query.to,
        type: this.coachType,
        date: this.$route.query.date,
      };
      this.$router.push({ path: "/bus/trip", query });
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
        type: this.$route.query.type,
        date: previousDate.valueOf(),
      };
      this.$router.push({ path: "/bus/trip", query });
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
        type: this.$route.query.type,
        date: nextDate.valueOf(),
      };
      this.$router.push({ path: "/bus/trip", query });
    },
  },
};
</script>

<style></style>
