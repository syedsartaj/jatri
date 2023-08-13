<template>
  <div
    class="w-full xl:w-[520px] wrapper flex flex-col border-[1px] border-[#DBDBDB] rounded-lg"
  >
    <div
      class="w-full px-4 py-3 border-b-[1px] border-[#DBDBDB] lg:text-base font-medium"
    >
      Fare details
    </div>
    <div class="w-full px-4">
      <table class="w-full text-center">
        <tbody class="text-xs font-medium text-blackPrimary">
          <tr
            v-for="(item, index) in getSeatArray"
            :key="index"
            :class="false ? '' : 'border-b dark:border-neutral-[#EDEDED]'"
          >
            <td
              class="whitespace-nowrap p-[10px] dark:border-neutral-[#EDEDED]"
            >
              {{ item }}
            </td>
            <td
              class="whitespace-nowrap p-[10px] dark:border-neutral-[#EDEDED]"
            >
              {{ selectedFloor }}
            </td>
            <td
              class="whitespace-nowrap p-[10px] dark:border-neutral-[#EDEDED]"
            >
              {{ selectedClass }}
            </td>
            <td class="whitespace-nowrap p-[10px] text-sm text-right">
              {{ getPrice }}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="w-full flex flex-row justify-between p-[10px] border-b-[1px] border-[#DBDBDB] font-medium text-blackPrimary"
      >
        <div class="text-xs">Processing fee</div>
        <div class="text-sm">{{ serviceCharge }}</div>
      </div>
      <div
        class="w-full flex flex-row justify-between p-[10px] border-b-[1px] border-[#DBDBDB]"
      >
        <div class="text-xs">Gateway fee</div>
        <div class="text-sm">{{ paymentGatewayCommission }}</div>
      </div>
      <div class="flex justify-between gap-x-4 pt-2 pb-4">
        <input
          type="text"
          id="promo"
          v-model="promoCode"
          placeholder="Enter Promo Code"
          class="bg-[#f7f7f7] px-4 py-[13px] rounded-[4px] w-3/4 focus:outline-0 text-xs placeholder:text-blackSecondary text-blackPrimary"
        />
        <button
          @click="applyPromo"
          :disabled="!promoCode"
          :class="
            !promoCode
              ? 'bg-[#EFF7FD] text-[#2F91E7]'
              : 'bg-corporate text-successLight'
          "
          class="w-40 rounded-full lg:text-base text-xs font-medium flex flex-row items-center justify-center gap-x-2"
        >
          <img src="@/assets/images/icons/blueTick.svg" alt="" />
          <p class="">Apply promo</p>
        </button>
      </div>
    </div>
    <div
      class="w-full px-4 py-[14px] w-full flex flex-row justify-between items-center bg-[#F7F7F7] rounded-b-lg border-t-[1px] border-[#DBDBDB]"
    >
      <div class="text-sm text-blackPrimary font-normal">Total</div>
      <div class="text-base text-blackPrimary font-semibold">
        BDT {{ totalPrice }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      promoCode: "",
    };
  },
  computed: {
    ...mapGetters("launchStore", ["getLaunchBookingData"]),
    getSeatArray() {
      return this.getLaunchBookingData.selectedSeatInfo?.seatArray;
    },
    getPrice() {
      return this.getLaunchBookingData.selectedSeatInfo?.price;
    },
    selectedFloor() {
      return this.getLaunchBookingData.selectedSeatInfo?.selectedFloor?.info
        ?.name;
    },
    selectedClass() {
      return this.getLaunchBookingData.selectedSeatInfo?.selectedClass?.info
        ?.name;
    },
    totalPrice() {
      return (
        this.getLaunchBookingData.selectedSeatInfo?.seatArray.length *
          this.getLaunchBookingData.selectedSeatInfo?.price +
        this.paymentGatewayCommission +
        this.serviceCharge
      );
    },
    paymentGatewayCommission() {
      return this.getLaunchBookingData.paymentPendingData.paymentInfo
        .paymentGatewayCommission;
    },
    serviceCharge() {
      return this.getLaunchBookingData.paymentPendingData.paymentInfo
        .serviceCharge;
    },
  },
  methods: {
    applyPromo(){
      console.log("Apply promo")
    }
  }
};
</script>
<style scoped>
.wrapper {
  height: max-content;
}
</style>
