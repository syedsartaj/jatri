<template>
  <div class="w-full border-[1px] border-[#EDEDED] rounded-2xl bg-[#FFFFFF]">
    <div
      :class="{
        'w-full p-4 flex flex-row items-center justify-between': true,
        'border-b-[1px] border-[#EDEDED]': expandView,
      }"
    >
      <div class="text-base lg:text-xl text-blackPrimary font-medium">
        Trip info
      </div>
      <div @click="toggleExpand" class="cursor-pointer flex lg:hidden">
        <svg
          v-if="expandView"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.0007 10.9391L7.05072 15.8891L5.63672 14.4751L12.0007 8.11108L18.3647 14.4751L16.9507 15.8891L12.0007 10.9391Z"
            fill="#151414"
          />
        </svg>
        <svg
          v-if="!expandView"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.0007 13.061L16.9507 8.11096L18.3647 9.52496L12.0007 15.889L5.63672 9.52496L7.05072 8.11096L12.0007 13.061Z"
            fill="#151414"
          />
        </svg>
      </div>
    </div>
    <div class="p-4" v-if="expandView">
      <div
        class="h-8 bg-[#F7F7F7] flex flex-row items-center px-4 rounded-[100px] max-content-width"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M2.66659 7.26667V3C2.66659 2.82319 2.73682 2.65362 2.86185 2.5286C2.98687 2.40357 3.15644 2.33333 3.33325 2.33333H6.66659V1H9.33325V2.33333H12.6666C12.8434 2.33333 13.013 2.40357 13.138 2.5286C13.263 2.65362 13.3333 2.82319 13.3333 3V7.26667L14.0573 7.484C14.2213 7.53337 14.3601 7.64402 14.4447 7.79298C14.5294 7.94194 14.5535 8.11777 14.5119 8.284L13.5013 12.3293C12.956 12.3573 12.4122 12.2507 11.9178 12.0188C11.4235 11.787 10.9938 11.4371 10.6666 11C10.3564 11.4143 9.95383 11.7505 9.49091 11.982C9.028 12.2134 8.51748 12.3337 7.99992 12.3333C7.48236 12.3337 6.97184 12.2134 6.50892 11.982C6.04601 11.7505 5.64345 11.4143 5.33325 11C5.00606 11.4371 4.57635 11.787 4.082 12.0188C3.58766 12.2507 3.04387 12.3573 2.49859 12.3293L1.48792 8.284C1.44638 8.11777 1.47044 7.94194 1.5551 7.79298C1.63976 7.64402 1.77852 7.53337 1.94259 7.484L2.66659 7.26667ZM3.99992 6.86667L7.99992 5.66667L9.83592 6.21733L11.0419 6.57933L11.9999 6.86667V3.66667H3.99992V6.86667ZM2.66659 13.6667C3.65076 13.668 4.60064 13.3052 5.33325 12.648C6.06587 13.3052 7.01574 13.668 7.99992 13.6667C8.9841 13.668 9.93397 13.3052 10.6666 12.648C11.3992 13.3052 12.3491 13.668 13.3333 13.6667H14.6666V15H13.3333C12.397 15.0015 11.477 14.7554 10.6666 14.2867C9.85615 14.7554 8.93616 15.0015 7.99992 15C7.06368 15.0015 6.14369 14.7554 5.33325 14.2867C4.52282 14.7554 3.60282 15.0015 2.66659 15H1.33325V13.6667H2.66659Z"
            fill="#151414"
          />
        </svg>
        <div class="text-blackPrimary text-sm font-medium ml-2">
          {{ shipName }}
        </div>
      </div>
      <div class="text-base font-medium text-blackPrimary mt-2">
        {{ routeName }}
      </div>
      <div class="text-sm font-normal text-blackSecondary">
        {{ tripInformation }}
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      expandView: true,
    };
  },
  methods: {
    toggleExpand() {
      this.expandView = !this.expandView;
    },
    formatTimeTo12Hour(timeString) {
      const date = new Date(timeString);
      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format

      return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
    },
  },
  computed: {
    ...mapGetters("launchStore", ["getLaunchBookingData"]),

    shipName() {
      return this.getLaunchBookingData.invoice.ship;
    },
    routeName() {
      return this.getLaunchBookingData.invoice.route;
    },
    tripInformation() {
      const { tripDateTime, boardingPoint } = this.getLaunchBookingData.invoice;
      const parsedDate = moment(tripDateTime);

      const formattedTripDateTime = parsedDate.isValid()
        ? parsedDate.utc().format("ddd, DD MMMM YYYY")
        : "";

      return `${this.formatTimeTo12Hour(tripDateTime)} ${
        boardingPoint ? `. ${boardingPoint}` : ""
      } .${formattedTripDateTime}`;
    },
  },
};
</script>
<style scoped>
.max-content-width {
  width: max-content;
}
</style>
