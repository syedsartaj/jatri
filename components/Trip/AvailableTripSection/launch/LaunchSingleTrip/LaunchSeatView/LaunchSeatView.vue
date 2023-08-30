<template>
  <div class="w-full mt-4 flex flex-col border border-[#ededed] rounded-[10px] overflow-hidden">
    <div class="grid grid-cols-3 h-[44px] text-sm border-b border-[#ededed]">
      <div
        class="flex flex-row items-center justify-center border-r dark:border-neutral-[#EDEDED]"
      >
        <img
          src="@/assets/images/icons/rectangleAvailable.svg"
          alt="available"
          class="w-[16px] h-[16px]"
        />
        <p
          class="text-xs xl:text-sm leading-[18px] font-medium lg:font-normal text-blackLight ml-2"
        >
          Available ({{ getAvailableSeatCount }})
        </p>
      </div>
      <div
        class="flex flex-row items-center justify-center border-r dark:border-neutral-[#EDEDED]"
      >
        <img
          src="@/assets/images/icons/rectangleBooked.svg"
          alt="available"
          class="w-[16px] h-[16px]"
        />
        <p
          class="text-xs xl:text-sm leading-[18px] font-medium lg:font-normal text-blackLight ml-2"
        >
          Booked
        </p>
      </div>
      <div class="flex flex-row items-center justify-center">
        <img
          src="@/assets/images/icons/rectangleSelected.svg"
          alt="available"
          class="w-[16px] h-[16px]"
        />
        <p
          class="text-xs xl:text-sm leading-[18px] font-medium lg:font-normal text-blackLight ml-2"
        >
          Selected
        </p>
      </div>
    </div>
    <div class="seat-section-large p-4 invisible lg:visible">
      <div class="grid grid-cols-[repeat(auto-fill, minmax(30px, 1fr))] gap-6">
        <div
          v-for="(row, rowIndex) in getSeatArray"
          :key="rowIndex"
          class="flex h-[30px] gap-6"
        >
          <div
            v-for="(item, colIndex) in row"
            :key="colIndex"
            :class="
              isCabin
                ? 'h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]'
                : 'h-[30px] w-[30px]'
            "
            class="flex items-center justify-center"
          >
            <SeatViewBedIcon
              v-if="isCabin"
              :addSeat="() => addSeatHandler({ rowIndex, colIndex })"
              :seatCondition="getSeatCondition({ rowIndex, colIndex })"
            />
            <SeatViewSofaIcon
              v-else
              :addSeat="() => addSeatHandler({ rowIndex, colIndex })"
              :seatCondition="getSeatCondition({ rowIndex, colIndex })"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="seat-section-mobile visible lg:invisible">
      <div
        v-if="getSeatArray?.length"
        class="w-full flex flex-row items-center p-2 bg-[#FFF] rounded-lg mb-4"
      >
        <img
          src="@/assets/images/icons/information.svg"
          alt="information"
          class="w-[16px] h-[16px] mr-2"
        />
        <p class="text-xs text-blackPrimary font-normal">
          Each box represents a new row.
        </p>
      </div>

      <div
        v-for="(row, rowIndex) in getSeatArray"
        :key="rowIndex"
        class="p-2 bg-[#FFF] rounded-lg mb-4 flex gap-6 row-section"
      >
        <div
          v-for="(item, colIndex) in row"
          :key="colIndex"
          :class="
            isCabin
              ? 'h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]'
              : 'h-[30px] w-[30px]'
          "
        >
          <SeatViewBedIcon
            v-if="isCabin"
            :addSeat="() => addSeatHandler({ rowIndex, colIndex })"
            :seatCondition="getSeatCondition({ rowIndex, colIndex })"
          />
          <SeatViewSofaIcon
            v-else
            :addSeat="() => addSeatHandler({ rowIndex, colIndex })"
            :seatCondition="getSeatCondition({ rowIndex, colIndex })"
          />
        </div>
      </div>
    </div>

    <SelectSeatsSection
      v-if="this.selectedSeatArray.length"
      :handlePaymentPending="paymentPendingHandler"
      :selectedSeatsTitleAndPrice="getSelectedSeatsTitleAndPrice"
    />

    <SeatAlreadySoldModal
      v-if="isSeatAlreadySelected"
      :handleOnClick="
        () => {
          isSeatAlreadySelected = false;
        }
      "
    />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
const seatCondition = {
  AVAILABLE: "AVAILABLE",
  BOOKED: "BOOKED",
  SELECTED: "SELECTED",
};

export default {
  name: "LaunchSeatView",
  props: [
    "selectedClassSeatData",
    "trip",
    "selectedClass",
    "selectedFloor",
    "seatViewData",
    "setSeatViewData",
  ],
  data() {
    return {
      selectedSeatArray: [],
      requestOnGoing: false,
      isSeatAlreadySelected: false,
    };
  },
  methods: {
    ...mapActions("launchStore", ["paymentPending", "seatLockAction"]),
    ...mapMutations("launchStore", ["updateSeatStatus"]),
    async paymentPendingHandler() {
      this.$nextTick(async () => {
        this.$nuxt.$loading?.start();
        const reportingDateTime =
          this.seatViewData.seatPlan.boardingPoints[0].reportingDateTime;
        const { from, to } = this.$route.query;

        const {
          moduleType,
          companyId,
          company,
          shipId,
          ship,
          tripId,
          tripCode,
          tripDateTime,
          departureDate,
          departureTime,
          route,
        } = this.trip;

        const selectedSeatsData = this.getSelectedSeatsTitleAndPrice;
        const seatPrice = selectedSeatsData.singlePrice;
        const seatCount = selectedSeatsData.titleArray.length;

        const totalFare = seatPrice * seatCount;
        const seatNumbers = selectedSeatsData.titleArray.join(",");
        const seatFaresString = Array(seatCount).fill(seatPrice).join(",");
        const payload = {
          moduleType,
          companyId,
          companyName: company,
          shipId,
          shipName: ship,
          tripId,
          tripCode,
          tripDateTime,
          departureDate,
          departureTime,
          boardingDateTime: `${departureDate} ${departureTime}`,
          reportingDateTime,
          route,
          fromCity: from,
          toCity: to,
          seatNumbers,
          seatFares: seatFaresString,
          totalFare,
          seatClassId: this.selectedClass?.info?.classId,
          seatClass: this.selectedClass?.info?.name,
          floorId: this.selectedFloor?.info?._id,
          floor: this.selectedFloor?.info?.name,
          isTicketCancelable: true,
        };
        await this.paymentPending({
          payload,
          selectedSeatInfo: {
            price: selectedSeatsData.price,
            seatArray: selectedSeatsData.titleArray,
            selectedClass: this.selectedClass,
            selectedFloor: this.selectedFloor,
          },
        });
        this.selectedSeatArray = [];
        this.$nuxt.$loading?.finish();
      });
    },
    getSeatCondition(seat) {
      return this.isAlreadySelected(seat)
        ? seatCondition.SELECTED
        : this.isSeatAvailable(seat)
        ? seatCondition.AVAILABLE
        : seatCondition.BOOKED;
    },

    isAlreadySelected(selectedSeat) {
      const { rowIndex, colIndex } = selectedSeat;
      return this.selectedSeatArray.some(
        (seat) => seat.rowIndex === rowIndex && seat.colIndex === colIndex
      );
    },

    removeSeatFromTheArray(selectedSeat) {
      this.selectedSeatArray = this.selectedSeatArray.filter(
        (seat) =>
          !(
            seat.rowIndex === selectedSeat.rowIndex &&
            seat.colIndex === selectedSeat.colIndex
          )
      );
    },

    isSeatAvailable(seat) {
      const { rowIndex, colIndex } = seat;
      return this.getSeatArray[rowIndex][colIndex].available;
    },

    async addSeatHandler(selectedSeat) {
      // Is any request ongoing
      if (this.requestOnGoing) return;

      const seatNumbers =
        this.getSeatArray[selectedSeat.rowIndex][selectedSeat.colIndex].seat;

      if (this.isAlreadySelected(selectedSeat)) {
        // Action for sit unselect
        this.handleSeatLock(seatNumbers, false);

        this.removeSeatFromTheArray(selectedSeat);
      } else {
        if (
          this.isSeatAvailable(selectedSeat) &&
          this.selectedSeatArray.length <= 3
        ) {
          const isSeatLocked = await this.isSeatLocked(seatNumbers);

          if (isSeatLocked) {
            //update seat status here
            this.isSeatAlreadySelected = true;
            this.updateSeatStatus({
              classId: this.selectedClass?.info?.classId,
              floorId: this.selectedFloor?.info?._id,
              rowIndex: selectedSeat.rowIndex,
              colIndex: selectedSeat.colIndex,
              available: 0,
            });

            // this.$toast.error(`Seat already in progress.`, {
            //   position: "bottom-right",
            //   duration: 50000,
            //   containerClass: "padding: 100px",
            // });
            return;
          } else {
            this.selectedSeatArray.push(selectedSeat);
          }
        } else if (this.selectedSeatArray.length === 4) {
          this.showSeatLimitCrossError();
        }
      }
    },

    isSeatLocked(seatNumbers) {
      return new Promise((resolve) => {
        this.requestOnGoing = true;
        this.$nextTick(async () => {
          const { moduleType, tripId } = this.trip;
          const payload = {
            moduleType: moduleType,
            tripId: tripId,
            seatNumbers: seatNumbers,
            locked: true,
            seatClassId: this.selectedClass?.info?.classId,
          };

          try {
            const res = await this.seatLockAction(payload);
            if (res?.data) {
              const seatLock = res.data?.seatLock;
              resolve(seatLock === false);
            }
            this.requestOnGoing = false;
            resolve(false);
          } catch (error) {
            this.requestOnGoing = false;
            resolve(false);
          }
        });
      });
    },

    handleSeatLock(seatNumbers, action) {
      this.requestOnGoing = true;
      this.$nextTick(async () => {
        const { moduleType, tripId } = this.trip;
        const payload = {
          moduleType: moduleType,
          tripId: tripId,
          seatNumbers: seatNumbers,
          locked: action,
          seatClassId: this.selectedClass?.info?.classId,
        };

        try {
          const res = await this.seatLockAction(payload);
          this.requestOnGoing = false;
        } catch (error) {
          this.requestOnGoing = false;
          this.$toast.error(
            e.response.data.message ?? "Something went wrong!",
            {
              position: "bottom-right",
              duration: 5000,
            }
          );
        }
      });
    },

    showSeatLimitCrossError() {
      this.$toast.error(`You can select 4 seats at a time!`, {
        position: "bottom-right",
        duration: 50000,
        containerClass: "padding: 100px",
      });
    },
  },
  computed: {
    getSeatArray() {
      return this.selectedClassSeatData?.seats || [];
    },
    isCabin() {
      return this.selectedClassSeatData?.isCabin;
    },
    getAvailableSeatCount() {
      return this.selectedClassSeatData?.available;
    },
    getSelectedSeatsTitleAndPrice() {
      const titleArray = this.selectedSeatArray.map(
        (item) => this.getSeatArray[item.rowIndex][item.colIndex].seat
      );

      return {
        titleArray,
        price: this.selectedSeatArray.length * this.selectedClassSeatData?.fare,
        singlePrice: this.selectedClassSeatData?.fare
      };
    },
  },
  beforeDestroy() {
    if (this.selectedSeatArray.length) {
      const seatNumbers =
        this.getSelectedSeatsTitleAndPrice.titleArray.join(",");

      this.handleSeatLock(seatNumbers, false);
    }
  },
  watch: {
    selectedClassSeatData() {
      this.selectedSeatArray = [];
    },
    selectedSeatArray() {
      this.setSeatViewData(this.selectedSeatArray);
    },
  },
};
</script>
<style>
.seat-section-large {
  width: 100%;
  max-height: 597px;
  overflow: auto;
  display: none;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: #f7f7f7;
}

::-webkit-scrollbar-thumb {
  background: #dbdbdb;
  width: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
  width: 4px;
}

.seat-section-mobile {
  height: 386px;
  width: 100%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  padding: 12px;
  overflow-y: scroll;
}

.row-section {
  display: flex;
  flex-wrap: wrap;
}

@media only screen and (min-width: 992px) {
  .seat-section-large {
    display: block;
  }

  .seat-section-mobile {
    display: none;
  }
}
</style>
