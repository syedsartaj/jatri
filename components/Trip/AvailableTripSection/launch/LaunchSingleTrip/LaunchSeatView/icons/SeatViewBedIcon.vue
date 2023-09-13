<template>
  <div @click="addSeat">
    <svg
      v-if="isBookedOrSelected"
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      class="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34.7998 15.2574V10C34.7998 8.00002 33.7998 6.5 30.7998 6.5L10.7998 6.50001C8.7998 6.50001 6.7998 8 6.7998 10V15.2584C6.7998 15.9027 7.39682 16.3814 8.02685 16.2466C10.6007 15.696 16.6669 14.5 20.7998 14.5C24.9327 14.5 30.9989 15.696 33.5728 16.2466C34.2028 16.3814 34.7998 15.9017 34.7998 15.2574ZM32.0498 17.5C32.9104 17.4993 33.7618 17.6775 34.5498 18.0234C35.6636 18.5105 36.6114 19.3115 37.2773 20.3285C37.9433 21.3454 38.2986 22.5344 38.2998 23.75V32.5C38.2998 32.8315 38.1681 33.1495 37.9337 33.3839C37.6993 33.6183 37.3813 33.75 37.0498 33.75C36.7183 33.75 36.4003 33.6183 36.1659 33.3839C35.9315 33.1495 35.7998 32.8315 35.7998 32.5V31.875C35.7978 31.7099 35.7313 31.5521 35.6145 31.4353C35.4977 31.3185 35.3399 31.252 35.1748 31.25H6.4248C6.25967 31.252 6.10188 31.3185 5.9851 31.4353C5.86833 31.5521 5.80183 31.7099 5.7998 31.875V32.5C5.7998 32.8315 5.66811 33.1495 5.43369 33.3839C5.19927 33.6183 4.88133 33.75 4.5498 33.75C4.21828 33.75 3.90034 33.6183 3.66592 33.3839C3.4315 33.1495 3.2998 32.8315 3.2998 32.5V23.75C3.30087 22.5342 3.6561 21.3451 4.32207 20.328C4.98804 19.3109 5.9359 18.5098 7.0498 18.0227C7.83794 17.6772 8.68926 17.4992 9.5498 17.5H32.0498Z"
        :fill="mainBoxColor"
      />
    </svg>
    <img v-else src="./availableBed.svg" alt="" class="cursor-pointer" />
  </div>
</template>

<script>
const seatCondition = {
  AVAILABLE: "AVAILABLE",
  BOOKED: "BOOKED",
  SELECTED: "SELECTED",
};

export default {
  name: "SeatViewBedIcon",
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
