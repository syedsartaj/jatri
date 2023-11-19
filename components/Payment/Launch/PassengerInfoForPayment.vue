<template>
  <div
    class="w-full border-[1px] border-[#EDEDED] rounded-2xl bg-[#FFFFFF] mb-4"
  >
    <div
      :class="{
        'w-full p-4 flex flex-row items-center justify-between': true,
        'border-b-[1px] border-[#EDEDED]': expandView,
      }"
    >
      <div class="text-base lg:text-xl text-blackPrimary font-medium">
        Passenger details
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
    <div class="p-4 flex flex-col" v-if="expandView">
      <div class="w-full flex flex-row">
        <div
          class="h-6 w-6 flex items-center justify-center bg-[#F7F7F7] rounded-[100px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2.6665 15C2.6665 13.5855 3.22841 12.229 4.2286 11.2288C5.2288 10.2286 6.58535 9.66667 7.99984 9.66667C9.41432 9.66667 10.7709 10.2286 11.7711 11.2288C12.7713 12.229 13.3332 13.5855 13.3332 15H2.6665ZM7.99984 9C5.78984 9 3.99984 7.21 3.99984 5C3.99984 2.79 5.78984 1 7.99984 1C10.2098 1 11.9998 2.79 11.9998 5C11.9998 7.21 10.2098 9 7.99984 9Z"
              fill="#676769"
            />
          </svg>
        </div>
        <div class="ml-4 text-sm text-blackPrimary font-normal">
          {{ passengerName }}
        </div>
      </div>
      <div class="w-full flex flex-row mt-2">
        <div
          class="h-6 w-6 flex items-center justify-center bg-[#F7F7F7] rounded-[100px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M14 10.9467V13.304C14.0001 13.4728 13.9361 13.6353 13.8211 13.7588C13.706 13.8823 13.5484 13.9575 13.38 13.9693C13.0887 13.9893 12.8507 14 12.6667 14C6.77533 14 2 9.22467 2 3.33333C2 3.14933 2.01 2.91133 2.03067 2.62C2.04248 2.45163 2.11772 2.29401 2.2412 2.17894C2.36468 2.06387 2.52722 1.99992 2.696 2H5.05333C5.13603 1.99992 5.2158 2.03057 5.27715 2.08601C5.33851 2.14145 5.37706 2.21772 5.38533 2.3C5.40067 2.45333 5.41467 2.57533 5.428 2.668C5.56049 3.59262 5.832 4.49189 6.23333 5.33533C6.29667 5.46867 6.25533 5.628 6.13533 5.71333L4.69667 6.74133C5.5763 8.79097 7.2097 10.4244 9.25933 11.304L10.286 9.868C10.328 9.80933 10.3892 9.76725 10.459 9.7491C10.5288 9.73095 10.6028 9.73787 10.668 9.76867C11.5113 10.1692 12.4104 10.4401 13.3347 10.572C13.4273 10.5853 13.5493 10.6 13.7013 10.6147C13.7835 10.6231 13.8596 10.6617 13.9149 10.7231C13.9702 10.7844 14.0008 10.8641 14.0007 10.9467H14Z"
              fill="#676769"
            />
          </svg>
        </div>

        <div class="ml-4 text-sm text-blackPrimary font-normal">
          +88 {{ passengerPhone }}
        </div>
      </div>
      <div class="w-full flex flex-row mt-2" v-if="passengerEmail">
        <div
          class="h-6 w-6 flex items-center justify-center bg-[#F7F7F7] rounded-[100px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2.00016 2H14.0002C14.177 2 14.3465 2.07024 14.4716 2.19526C14.5966 2.32029 14.6668 2.48986 14.6668 2.66667V13.3333C14.6668 13.5101 14.5966 13.6797 14.4716 13.8047C14.3465 13.9298 14.177 14 14.0002 14H2.00016C1.82335 14 1.65378 13.9298 1.52876 13.8047C1.40373 13.6797 1.3335 13.5101 1.3335 13.3333V2.66667C1.3335 2.48986 1.40373 2.32029 1.52876 2.19526C1.65378 2.07024 1.82335 2 2.00016 2ZM8.04016 7.78867L3.7655 4.15867L2.90216 5.17467L8.04883 9.54467L13.1028 5.17133L12.2308 4.16267L8.04083 7.78867H8.04016Z"
              fill="#676769"
            />
          </svg>
        </div>

        <div class="ml-4 text-sm text-blackPrimary font-normal">
          {{ passengerEmail }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  },
  computed: {
    ...mapGetters("launchStore", ["getLaunchBookingData"]),
    shipName() {
      return this.getLaunchBookingData?.invoice?.ship || "";
    },
    passengerName() {
      return this.getLaunchBookingData?.passenger?.name || "";
    },
    passengerPhone() {
      return this.getLaunchBookingData?.passenger?.phone || "";
    },
    passengerEmail() {
      return this.getLaunchBookingData?.passenger?.email || "";
    },
  },
};
</script>
<style scoped>
.max-content-width {
  width: max-content;
}
</style>
