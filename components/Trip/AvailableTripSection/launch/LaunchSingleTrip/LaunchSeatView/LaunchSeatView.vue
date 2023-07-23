<template>
  <div class="w-full mt-4 flex flex-col border border-[#ededed] rounded-[10px]">
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
      :selectedSeatsTitleAndPrice="getSelectedSeatsTitleAndPrice"
    />
  </div>
</template>

<script>
const seatCondition = {
  AVAILABLE: "AVAILABLE",
  BOOKED: "BOOKED",
  SELECTED: "SELECTED",
};

export default {
  name: "LaunchSeatView",
  props: ["selectedClassSeatData"],
  data() {
    return {
      selectedSeatArray: [],
    };
  },
  methods: {
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

    addSeatHandler(selectedSeat) {
      if (this.isAlreadySelected(selectedSeat)) {
        this.removeSeatFromTheArray(selectedSeat);
      } else {
        if (
          this.isSeatAvailable(selectedSeat) &&
          this.selectedSeatArray.length <= 3
        ) {
          this.selectedSeatArray.push(selectedSeat);
        } else if (this.selectedSeatArray.length === 4) {
          this.showSeatLimitCrossError();
        }
      }
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
      };
    },
  },
  watch: {
    selectedClassSeatData() {
      this.selectedSeatArray = [];
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
