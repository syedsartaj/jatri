<template>
  <div class="p-11 lg:p-4 xl:p-8 xl:pl-[31px]">
    <div v-if="showDriver" class="flex w-full justify-end items-end mt-2">
      <img
        src="@/assets/images/seats/driver.svg"
        alt="driver"
        class="w-[30px]"
      />
    </div>

    <div
      v-for="(rowSeat, rowIndex) in seatArray"
      :key="rowIndex"
      class="flex justify-between mt-6"
    >
      <template v-for="(colSeat, colIndex) in rowSeat">
        <div
          v-if="colSeat.seatNo !== ''"
          :key="colIndex"
          class="relative group"
          @click="
            isSeatAvailable(colSeat) &&
              addSeatHandler(colSeat, {
                seatType,
                rowIndex,
                colIndex,
                boardingPoint,
                droppingPoint,
              })
          "
        >
          <SleeperBedIcon
            v-if="colSeat.class.toLowerCase() == 'sleeper'"
            :class="handleClass(colSeat)"
            :fill="handleFill(colSeat, selectedSeatIds.includes(colSeat.id))"
            :stroke="
              handleStroke(colSeat, selectedSeatIds.includes(colSeat.id))
            "
            height="40"
            width="28"
          />
          <ArmChairIcon
            v-if="colSeat.class.toLowerCase() != 'sleeper'"
            :class="
              !isSeatAvailable(colSeat) ? 'cursor-default' : 'cursor-pointer'
            "
            :fill="handleFill(colSeat, selectedSeatIds.includes(colSeat.id))"
            :stroke="
              handleStroke(colSeat, selectedSeatIds.includes(colSeat.id))
            "
            height="26"
            width="30"
          />
        </div>
        <div v-else :key="colIndex" class="w-6 h-6"></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeatView",
  props: [
    "seatArray",
    "showDriver",
    "addSeatHandler",
    "selectedSeatIds",
    "seatType",
    "droppingPoint",
    "boardingPoint",
  ],
  methods: {
    handleClass(colSeat) {
      return !this.isSeatAvailable(colSeat)
        ? "cursor-default"
        : "cursor-pointer";
    },
    handleFill(colSeat, isIdAvailableInArray) {
      return !this.isSeatAvailable(colSeat)
        ? "#8D8D8F"
        : isIdAvailableInArray
        ? "#48A43F"
        : "white";
    },
    handleStroke(colSeat, isIdAvailableInArray) {
      return !this.isSeatAvailable(colSeat)
        ? "#DBDBDB"
        : isIdAvailableInArray
        ? "#48A43F"
        : "#8D8D8F";
    },
    isSeatAvailable(seat) {
      if (!seat || (!seat.fareList && seat.status !== "available")) {
        return false;
      }

      if (seat.fareList) {
        return seat.fareList.some(
          (item) =>
            item.boardingPoint === this.boardingPoint.name &&
            item.droppingPoint === this.droppingPoint.name &&
            item.status === "available"
        );
      }

      return seat.status === "available";
    },
  },

  watch: {
    seatArray() {
      return this.seatArray;
    },
  },
};
</script>
