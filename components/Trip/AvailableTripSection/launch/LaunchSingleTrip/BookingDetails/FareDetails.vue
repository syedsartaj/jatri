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
            v-for="(item, index) in getLaunchBookingData?.invoice?.seatNo"
            :key="index"
            :class="false ? '' : 'border-b dark:border-neutral-[#EDEDED]'"
          >
            <td
              class="whitespace-nowrap p-[10px] dark:border-neutral-[#EDEDED] text-left"
            >
              {{ item }}
            </td>
            <td
              class="whitespace-nowrap p-[10px] dark:border-neutral-[#EDEDED]"
            >
              {{ getLaunchBookingData?.invoice?.floor }}
            </td>
            <td
              class="whitespace-nowrap p-[10px] dark:border-neutral-[#EDEDED]"
            >
              {{ getLaunchBookingData?.invoice?.seatClass }}
            </td>
            <td class="whitespace-nowrap p-[10px] text-sm text-right">
              {{ getLaunchBookingData?.seatFares[index] }}
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
      <div
        class="flex justify-between gap-x-4 pt-2 pb-4"
        v-if="!isPromoApplied"
      >
        <input
          type="text"
          id="promo"
          v-model="promoCode"
          placeholder="Enter promo code"
          class="bg-[#f7f7f7] px-4 py-[13px] rounded-[4px] w-3/4 focus:outline-0 text-xs placeholder:text-blackSecondary text-blackPrimary"
        />
        <button
          @click="handlePromo"
          :disabled="!promoCode"
          class="w-40 rounded-full lg:text-base text-xs font-medium flex flex-row items-center justify-center gap-x-2 bg-[#EFF7FD] text-[#2F91E7]"
        >
          <img src="@/assets/images/icons/blueTick.svg" alt="" />
          <p class="">Apply promo</p>
        </button>
      </div>

      <div
        v-if="mobileErrorOccurred && !isPromoApplied && !isPhoneValid"
        class="w-full flex flex-row gap-x-2 items-center text-xs font-medium text-[#E0293B] mb-2"
      >
        <img
          src="@/assets/images/icons/warningRed.svg"
          class="h-4 w-4"
          alt="error"
        />
        <div>Please enter a valid phone number first.</div>
      </div>

      <div
        v-if="promoError && !isPromoApplied"
        class="w-full flex flex-row gap-x-2 items-center text-xs font-medium text-[#E0293B] mb-2"
      >
        <img
          src="@/assets/images/icons/warningRed.svg"
          class="h-4 w-4"
          alt="error"
        />
        <div>Promo not found.</div>
      </div>

      <div
        class="w-full flex flex-row justify-between p-[10px]"
        v-if="isPromoApplied"
      >
        <div class="text-xs">Promo</div>
        <p class="text-base font-medium text-[#E0293B]">
          {{ `-${promoAmount}` }}
        </p>
      </div>
    </div>
    <div
      class="w-full px-4 py-[14px] w-full flex flex-row justify-between items-center bg-[#F7F7F7] rounded-b-lg border-t-[1px] border-[#DBDBDB]"
    >
      <div class="text-sm text-blackPrimary font-normal">Total</div>
      <div class="text-base text-blackPrimary font-semibold" v-if="totalPrice">
        BDT {{ totalPrice }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { isValidPhoneNumber } from "../../../../../../helpers/utils";
export default {
  props: ["passengerMobile"],
  data() {
    return {
      promoCode: "",
      isPromoApplied: false,
      promoAmount: 0,
      mobileErrorOccurred: false,
      promoError: false,
    };
  },
  computed: {
    ...mapGetters("launchStore", ["getLaunchBookingData"]),
    getSeatArray() {
      return this.getLaunchBookingData?.selectedSeatInfo?.seatArray;
    },
    getPrice() {
      return this.getLaunchBookingData?.selectedSeatInfo?.price;
    },
    selectedFloor() {
      return this.getLaunchBookingData?.selectedSeatInfo?.selectedFloor?.info
        ?.name;
    },
    selectedClass() {
      return this.getLaunchBookingData?.selectedSeatInfo?.selectedClass?.info
        ?.name;
    },
    isPhoneValid() {
      return isValidPhoneNumber(this.passengerMobile);
    },
    totalPrice() {
      return (
        this.getTotalSeatFare() +
        this.paymentGatewayCommission +
        this.serviceCharge -
        this.promoAmount
      );
    },
    paymentGatewayCommission() {
      return this.getLaunchBookingData?.paymentGatewayCommission;
    },
    serviceCharge() {
      return this.getLaunchBookingData?.serviceCharge;
    },
  },
  methods: {
    ...mapActions("launchStore", ["applyPromoCodeAction"]),
    getTotalSeatFare() {
      return (
        this.getLaunchBookingData?.seatFares?.reduce(
          (sum, element) => sum + parseInt(element),
          0
        ) || 0
      );
    },
    handlePromo() {
      this.$nextTick(async () => {
        if (isValidPhoneNumber(this.passengerMobile)) {
          const payload = {
            promoCode: this.promoCode,
            companyId: this.getLaunchBookingData?.invoice.companyId,
            tripDateTime: this.getLaunchBookingData?.invoice.tripDateTime,
            paymentId: this.getLaunchBookingData?._id,
            phone: this.passengerMobile,
          };

          try {
            this.$nuxt.$loading?.start();
            const response = await this.applyPromoCodeAction(payload);
            if (response?.data?.amount) {
              this.isPromoApplied = true;
              this.promoAmount = response?.data?.amount;
            }
            this.$nuxt.$loading?.finish();
          } catch (error) {
            this.promoError = true;
            this.isPromoApplied = false;
            this.$nuxt.$loading?.finish();
          }
        } else {
          this.mobileErrorOccurred = true;
          this.$toast.error("Enter your valid phone number", {
            position: "bottom-right",
            duration: 5000,
          });
        }
      });
    },
  },
  created() {
    const bookingData = this.getLaunchBookingData;
    if (bookingData) {
      if (bookingData?.invoice?.promo) {
        this.isPromoApplied = true;
        this.promoAmount = bookingData?.invoice?.promo?.amount || 0;
        this.passengerMobile = bookingData?.invoice?.promo?.phone || "";
      }
    }
  },
  watch: {
    promoCode() {
      if (this.mobileErrorOccurred) {
        this.mobileErrorOccurred = false;
        this.promoError = false;
      }
    },
  },
};
</script>
<style scoped>
.wrapper {
  height: max-content;
}
</style>
