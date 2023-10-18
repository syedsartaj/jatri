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
          class="relative transform overflow-hidden rounded-t-2xl lg:rounded-lg bg-white text-left shadow-xl transition-all lg:my-8 w-full lg:max-w-[800px]"
        >
          <div class="bg-white p-4 lg:p-6 w-full">
            <div class="flex justify-between">
              <p class="text-blackPrimary text-xl font-medium">Filter</p>
              <button @click="close">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>
            <hr class="my-4" />
            <div class="bg-white overflow-y-auto max-h-[65vh] scrollbar-hide">
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

              <div v-if="priceFilter.length">
                <hr class="my-5" />
                <h2 class="text-blackSecondary text-base font-medium">
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

              <div v-if="getBoardingPoints.length">
                <hr class="my-5" />
                <h2 class="text-blackSecondary text-base font-medium">
                  BOARDING POINT:
                </h2>
                <div class="mt-[10px] divide-y divide-dashed">
                  <div
                    v-for="point in getBoardingPoints"
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

              <div v-if="getLaunchList.length">
                <hr class="my-5" />
                <h2 class="text-blackSecondary text-base font-medium">
                  Launch:
                </h2>
                <div class="mt-[10px] divide-y divide-dashed">
                  <div
                    v-for="launch in getLaunchList"
                    @click="setLaunchCompany(launch)"
                    :key="launch"
                    class="flex justify-between items-center my-2 last:pt-[6px] cursor-pointer"
                  >
                    <label
                      :for="launch"
                      :class="launchCompany === launch && `text-[#F04935]`"
                      class="flex justify-start items-center gap-x-[9.52px] cursor-pointer text-blackPrimary text-base font-normal"
                    >
                      {{ launch }}
                    </label>
                    <input
                      :id="launch"
                      type="button"
                      class="default:border-2 border-blackPrimary cursor-pointer"
                    />
                    <img
                      v-if="launchCompany === launch"
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
    ...mapGetters("launchStore", [
      "getTrips",
      "getLoading",
      "getBoardingPoints",
      "getLaunchList",
      "getLaunchClasses",
      "getMobileFilterData",
    ]),
    ...mapGetters("common", ["getCities"]),
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
    launchCompany() {
      return this.getMobileFilterData.launchCompany;
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
    ...mapMutations("launchStore", ["sortedTrip", "updateMobileFilterData"]),
    ...mapActions("launchStore", ["getPbScheduleDataAction"]),
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
    setLaunchCompany(bus) {
      const newFilterData = {
        ...this.getMobileFilterData,
        launchCompany: bus,
      };
      this.updateMobileFilterData(newFilterData);
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
      this.close();
      this.$nuxt.$loading?.finish();
    },
    resetFilter() {
      const newFilterData = {
        ...this.getMobileFilterData,
        launchCompany: null,
        boardingPoint: null,
        priceFilterType: null,
      };
      this.updateMobileFilterData(newFilterData);
      this.handleFromSubmit();
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
