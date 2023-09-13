<template>
  <div @click="addSeat">
    <svg
      v-if="isBookedOrSelected"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.61523"
        y="4.61523"
        width="20.7692"
        height="2.30769"
        rx="1"
        :fill="mainBoxColor"
      />
      <rect
        x="4.61523"
        y="9.23096"
        width="20.7692"
        height="16.1538"
        rx="2"
        :fill="mainBoxColor"
      />
      <rect
        x="3.46191"
        y="9.23096"
        width="9.23077"
        height="2.30769"
        rx="1"
        transform="rotate(90 3.46191 9.23096)"
        :fill="mainBoxColor"
      />
      <rect
        x="28.8457"
        y="9.23096"
        width="9.23077"
        height="2.30769"
        rx="1"
        transform="rotate(90 28.8457 9.23096)"
        :fill="mainBoxColor"
      />
    </svg>
    <img v-else src="./AvailableSofa.png" alt="" class="cursor-pointer" />
  </div>
</template>

<script>
const seatCondition = {
  AVAILABLE: "AVAILABLE",
  BOOKED: "BOOKED",
  SELECTED: "SELECTED",
};

export default {
  name: "SeatViewSofaIcon",
  props: ["seatCondition", "addSeat"],

  computed: {
    mainBoxColor() {
      return this.seatCondition === seatCondition.BOOKED
        ? "#8D8D8F"
        : "#48A43F";
    },
    isBookedOrSelected() {
      return (
        this.seatCondition === seatCondition.BOOKED ||
        this.seatCondition === seatCondition.SELECTED
      );
    },
  },
};
</script>

<style></style>
