<template>
  <div
    class="w-full gap-x-[4px] flex flex-row items-center cursor-pointer"
    @click="handleSeatAvailableModal"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M1.99902 9V10.5H3.49902V9H8.49903V10.5H9.99903V7.5H1.99902V9ZM9.49903 5H10.999V6.5H9.49903V5ZM0.999023 5H2.49902V6.5H0.999023V5ZM8.49903 6.5H3.49902V2.5C3.49902 1.95 3.94902 1.5 4.49902 1.5H7.49902C8.04903 1.5 8.49903 1.95 8.49903 2.5V6.5Z"
        fill="#48A43F"
      />
    </svg>

    <p class="text-xs font-medium text-[#48A43F]">Seat Availability</p>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M6.53042 5.99987L4.05542 3.52487L4.76242 2.81787L7.94442 5.99987L4.76242 9.18187L4.05542 8.47487L6.53042 5.99987Z"
        fill="#48A43F"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["handleSeatAvailableModal"],
  name: "SeatAvailabilityButton",
};
</script>
