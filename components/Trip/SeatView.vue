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
            colSeat && colSeat.status === 'available' && addSeatHandler(colSeat)
          "
        >
          <SleeperBedIcon
            v-if="colSeat.class == 'Sleeper'"
            :class="handleClass(colSeat.status)"
            :fill="
              handleFill(colSeat.status, selectedSeatIds.includes(colSeat.id))
            "
            :stroke="
              handleStroke(colSeat.status, selectedSeatIds.includes(colSeat.id))
            "
            height="40"
            width="28"
          />
          <ArmChairIcon
            v-if="colSeat.class != 'Sleeper'"
            :class="
              colSeat.status !== 'available'
                ? 'cursor-default'
                : 'cursor-pointer'
            "
            :fill="
              handleFill(colSeat.status, selectedSeatIds.includes(colSeat.id))
            "
            :stroke="
              handleStroke(colSeat.status, selectedSeatIds.includes(colSeat.id))
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
  props: ["seatArray", "showDriver", "addSeatHandler", "selectedSeatIds"],
  methods: {
    handleClass: (status) =>
      status !== "available" ? "cursor-default" : "cursor-pointer",
    handleFill: (status, isIdAvaiableInArray) =>
      status !== "available"
        ? "#8D8D8F"
        : isIdAvaiableInArray
        ? "#48A43F"
        : "white",
    handleStroke: (status, isIdAvaiableInArray) =>
      status !== "available"
        ? "#DBDBDB"
        : isIdAvaiableInArray
        ? "#48A43F"
        : "#8D8D8F",
  },
};
</script>
