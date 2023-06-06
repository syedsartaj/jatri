<template>
  <div class="relative z-[99999999]">
    <div
      class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10">
      <div
        class="flex min-h-full items-end justify-center lg:p-4 text-center lg:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden lg:rounded-lg bg-white text-left shadow-xl transition-all lg:my-8 w-full md:max-w-[800px]"
        >
          <div class="bg-white p-4 lg:p-6 w-full">
            <div class="flex justify-between">
              <p
                class="text-blackPrimary text-base lg:text-[28px] lg:leading-9 font-medium"
              >
                Filter
              </p>
              <button @click="close">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>
            <hr class="my-4" />
            <div class="bg-white overflow-y-auto h-[65vh] scrollbar-hide">
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

              <div>
                <hr class="my-5" />
                <h2 class="text-blackSecondery text-base font-medium">TIME:</h2>
                <div
                  class="grid grid-cols-2 gap-x-[7px] gap-y-[10px] mt-[10px]"
                >
                  <div v-for="time in timeList" :key="time" class="w-full h-9">
                    <input id="busType" type="button" class="hidden" />
                    <label for="busType">
                      <button
                        @click="setTime(time)"
                        class="group w-full h-full flex justify-center items-center gap-x-[10px] rounded px-[5px] text-xs font-medium"
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
                          class=""
                        />
                        {{ time }}
                      </button>
                    </label>
                  </div>
                </div>
              </div>

              <div v-if="coachTypes.length">
                <hr class="my-5" />
                <h2 class="text-blackSecondery text-base font-medium">
                  BUS TYPE:
                </h2>
                <div class="flex justify-evenly gap-[7px] mt-[10px]">
                  <div
                    v-for="busType in coachTypes"
                    :key="busType"
                    class="w-full h-9"
                  >
                    <input id="busType" type="button" class="hidden" />
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

              <div v-if="getGsBusClasses.length">
                <hr class="my-5" />
                <h2 class="text-blackSecondery text-base font-medium">
                  BUS CLASS:
                </h2>
                <div
                  class="grid grid-cols-2 gap-x-[7px] gap-y-[10px] mt-[10px]"
                >
                  <div
                    v-for="busClass in getGsBusClasses"
                    :key="busClass"
                    class="w-full h-9"
                  >
                    <input id="busClass" type="button" class="hidden" />
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
                <h2 class="text-blackSecondery text-base font-medium">
                  PRICE:
                </h2>
                <div class="mt-[10px] divide-y divide-dashed">
                  <div
                    v-for="priceDirection in priceFilter"
                    :key="priceDirection"
                    @click="() => setPriceFilterType(priceDirection)"
                    class="flex justify-between items-center my-2 last:pt-[6px] cursor-pointer"
                  >
                    <label
                      :for="priceDirection"
                      :class="
                        priceFilterType === priceDirection && `text-[#F04935]`
                      "
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
                      type="button"
                      class="default:border-2 border-blackPrimary cursor-pointer"
                    />

                    <img
                      v-if="priceFilterType === priceDirection"
                      src="@/assets/images/icons/redTick.svg"
                      alt="time"
                      class="h-6 w-6"
                    />
                  </div>
                </div>
              </div>

              <div v-if="getGsBoardingPoints.length">
                <hr class="my-5" />
                <h2 class="text-blackSecondery text-base font-medium">
                  BOARDING POINT:
                </h2>
                <div class="mt-[10px] divide-y divide-dashed">
                  <div
                    v-for="point in getGsBoardingPoints"
                    @click="setBoardingPoint(point)"
                    :key="point"
                    class="flex justify-between items-center my-2 last:pt-[6px] cursor-pointer"
                  >
                    <label
                      :for="point"
                      :class="boardingPoint === point && `text-[#F04935]`"
                      class="flex justify-start items-center gap-x-[9.52px] cursor-pointer text-blackPrimary text-base font-normal"
                    >
                      {{ point }}
                    </label>
                    <input
                      :id="point"
                      type="button"
                      class="default:border-2 border-blackPrimary cursor-pointer"
                    />
                    <img
                      v-if="boardingPoint === point"
                      src="@/assets/images/icons/redTick.svg"
                      alt="time"
                      class="h-6 w-6"
                    />
                  </div>
                </div>
              </div>

              <div v-if="getGsBusCompanies.length">
                <hr class="my-5" />
                <h2 class="text-blackSecondery text-base font-medium">
                  BUS COMPANY:
                </h2>
                <div class="mt-[10px] divide-y divide-dashed">
                  <div
                    v-for="bus in getGsBusCompanies"
                    @click="setBusCompany(bus)"
                    :key="bus"
                    class="flex justify-between items-center my-2 last:pt-[6px] cursor-pointer"
                  >
                    <label
                      :for="bus"
                      :class="busCompany === bus && `text-[#F04935]`"
                      class="flex justify-start items-center gap-x-[9.52px] cursor-pointer text-blackPrimary text-base font-normal"
                    >
                      {{ bus }}
                    </label>
                    <input
                      :id="bus"
                      type="button"
                      class="default:border-2 border-blackPrimary cursor-pointer"
                    />
                    <img
                      v-if="busCompany === bus"
                      src="@/assets/images/icons/redTick.svg"
                      alt="time"
                      class="h-6 w-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-evenly gap-x-5 pb-7 pt-[14px]">
              <button
                class="h-[46px] w-full border border-[#808083] hover:border-corporate bg-white hover:bg-corporate text-corporate hover:text-white text-sm rounded-full"
                @click="resetFilter"
              >
                Reset
              </button>
              <button
                class="h-[46px] w-full border border-corporate bg-corporate text-white text-sm rounded-full"
                @click="handleTripFilter"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import moment from "moment";
import Cookies from "js-cookie";
export default {
  props: ["close"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters("guarantedseat", [
      "getGsTrips",
      "getGsLoading",
      "getGsBoardingPoints",
      "getGsBusCompanies",
      "getGsBusClasses",
      "getGsCities",
      "getMobileFilterData",
    ]),
    coachTypes() {
      return this.getMobileFilterData.coachTypes;
    },
    coachType() {
      return this.getMobileFilterData.coachType;
    },
    priceFilter() {
      return this.getMobileFilterData.priceFilter;
    },
    priceFilterType() {
      return this.getMobileFilterData.priceFilterType;
    },
    boardingPoint() {
      return this.getMobileFilterData.boardingPoint;
    },
    busCompany() {
      return this.getMobileFilterData.busCompany;
    },
    timeList() {
      return this.getMobileFilterData.timeList;
    },
    selectedTime() {
      return this.getMobileFilterData.selectedTime;
    },
    selectedBusClass() {
      return this.getMobileFilterData.selectedBusClass;
    },
  },

  watch: {
    "$route.query": {
      immediate: true,
      handler() {
        const newFilterData = {
          ...this.getMobileFilterData,
          coachType: this.coachType || this.$route.query.type,
        };
        this.updateMobileFilterData(newFilterData);
      },
    },
  },

  methods: {
    ...mapMutations("guarantedseat", ["sortedTrip", "updateMobileFilterData"]),
    ...mapActions("guarantedseat", ["getPbScheduleDataAction"]),
    setCoachtype(type) {
      const newFilterData = {
        ...this.getMobileFilterData,
        coachType: type,
      };
      this.updateMobileFilterData(newFilterData);
    },
    setBoardingPoint(point) {
      const newFilterData = {
        ...this.getMobileFilterData,
        boardingPoint: point,
      };
      this.updateMobileFilterData(newFilterData);
    },
    setPriceFilterType(type) {
      const newFilterData = {
        ...this.getMobileFilterData,
        priceFilterType: type,
      };
      this.updateMobileFilterData(newFilterData);
    },
    setBusCompany(bus) {
      const newFilterData = {
        ...this.getMobileFilterData,
        busCompany: bus,
      };
      this.updateMobileFilterData(newFilterData);
    },
    setTime(time) {
      const newFilterData = {
        ...this.getMobileFilterData,
        selectedTime: time,
      };
      this.updateMobileFilterData(newFilterData);
    },
    setBusClass(value) {
      const newFilterData = {
        ...this.getMobileFilterData,
        selectedBusClass: value,
      };
      this.updateMobileFilterData(newFilterData);
    },
    async handleTripFilter() {
      this.$nuxt.$loading?.start();
      const { from, to, type, date } = this.$route.query;
      const formattedDate = new Date(+date).toLocaleString("en-CA", {
        dateStyle: "short",
      });

      let payload = {};

      if (from) {
        this.getGsCities?.filter((s) => {
          if (s.city_name.toLowerCase() === from.toLowerCase()) {
            payload["from"] = s.city;
          }
        });
      }

      if (to) {
        this.getGsCities?.filter((s) => {
          if (s.city_name.toLowerCase() === to.toLowerCase()) {
            payload["to"] = s.city;
          }
        });
      }

      payload.date = formattedDate;
      payload.busType = this.coachType;

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
      this.close();
      this.$nuxt.$loading?.finish();
    },
    resetFilter() {
      const newFilterData = {
        ...this.getMobileFilterData,
        busCompany: null,
        boardingPoint: null,
        selectedTime: null,
        selectedBusClass: null,
        priceFilterType: null,
        coachType: "all",
      };
      this.updateMobileFilterData(newFilterData);
      this.handleFromSubmit();
    },
    handleFromSubmit() {
      const query = {
        from: this.$route.query.from,
        to: this.$route.query.to,
        type: this.coachType,
        date: this.$route.query.date,
      };
      Cookies.remove("process-allow");
      this.$router.push({ path: "/trip", query });
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
      Cookies.remove("process-allow");
      this.$router.push({ path: "/trip", query });
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
      Cookies.remove("process-allow");
      this.$router.push({ path: "/trip", query });
    },
  },
};
</script>

<style scoped>
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-default {
  -ms-overflow-style: auto; /* IE and Edge */
  scrollbar-width: auto;
}

.scrollbar-default::-webkit-scrollbar {
  display: block;
}
</style>
