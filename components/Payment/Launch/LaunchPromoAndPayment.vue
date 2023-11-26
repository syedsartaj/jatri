<template>
  <div class="w-full lg:w-[57.26%] wrapper flex flex-col height-max-content">
    <div
      class="bg-white rounded-[10px] border border-[#EDEDED]"
      v-if="!getLaunchBookingData?.invoice?.offer?.totalAmount"
    >
      <div
        class="flex justify-between items-center gap-x-4 px-5 py-[16px] border-b"
      >
        <p class="text-base sm:text-xl font-medium text-blackPrimary">Promo</p>
      </div>
      <div class="flex gap-x-5 w-full flex-col">
        <div class="flex justify-between w-full p-4">
          <input
            :disabled="showPromoInput"
            type="text"
            id="promo"
            v-model="promoCode"
            placeholder="Enter Promo Code"
            class="bg-[#f7f7f7] px-4 py-[13px] rounded focus:outline-0 text-xs placeholder:text-blackSecondary text-blackPrimary custom-width"
          />
          <button
            v-if="!showPromoInput"
            @click="() => applyPromo()"
            :disabled="!promoCode"
            class="w-[150px] lg:w-[165px] rounded-full flex flex-nowrap flex-row items-center justify-center whitespace-nowrap bg-[#EFF7FD] text-[#156CB7]"
          >
            <img
              src="@/assets/images/icons/blueTickBus.svg"
              alt=""
              class="mr-2"
            />
            <p class="text-sm font-medium">Add promo</p>
          </button>
          <button
            v-if="showPromoInput"
            @click="removePromo"
            class="w-[150px] lg:w-[165px] rounded-full flex flex-nowrap flex-row items-center justify-center whitespace-nowrap bg-[#FDF0F1] text-[#C71C2D]"
          >
            <img
              src="@/assets/images/icons/removePromoIcon.svg"
              alt=""
              class="mr-2"
            />
            <p class="text-sm font-medium">Remove promo</p>
          </button>
        </div>
        <div class="px-4" v-if="availablePromos?.length">
          <div class="w-full h-[1px] bg-[#EDEDED]" />
        </div>
        <div v-if="availablePromos?.length" class="p-4 pr-0">
          <div
            class="pb-4 w-full flex flex-row justify-between items-center pr-4"
          >
            <p class="text-base sm:text-xl font-medium text-blackPrimary">
              Available promo
            </p>
            <div class="flex flex-row items-center">
              <div
                class="w-8 h-8 bg-[#F7F7F7] flex items-center justify-center mr-3 rounded-full"
                @click="promoScrollLeft"
              >
                <img
                  v-if="isLeftScrollDisabled"
                  src="@/assets/images/icons/promoLeftArrow.svg"
                  alt=""
                  class="h-4 w-4"
                />
                <img
                  v-if="!isLeftScrollDisabled"
                  src="@/assets/images/icons/promoLeftActiveArrow.svg"
                  alt=""
                  class="h-4 w-4"
                />
              </div>
              <div
                class="w-8 h-8 bg-[#F7F7F7] flex items-center justify-center rounded-full"
                @click="promoScrollRight"
              >
                <img
                  v-if="isRightScrollDisabled"
                  src="@/assets/images/icons/promoRightArrow.svg"
                  alt=""
                  class="h-4 w-4"
                />
                <img
                  v-if="!isRightScrollDisabled"
                  src="@/assets/images/icons/promoRightActiveArrow.svg"
                  alt=""
                  class="h-4 w-4"
                />
              </div>
            </div>
          </div>
          <div
            class="w-full flex overflow-x-scroll promo-container"
            ref="promoSlider"
          >
            <div class="gap-x-4 flex flex-row">
              <PromoBox
                v-for="(promo, index) in availablePromos"
                :key="promo.code"
                :promo="promo"
                :isLastItem="index === availablePromos.length - 1"
                :activePromo="activePromo"
                :handlePromoBox="() => handlePromoBox(promo, index)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 bg-white rounded-[10px] border border-[#EDEDED]">
      <div
        class="flex justify-between items-center gap-x-4 px-5 py-[16px] border-b"
      >
        <p class="text-base lg:text-xl font-medium text-blackPrimary">
          Payment Method
        </p>
        <div
          class="flex justify-center items-center w-[139px] bg-[#F7F7F7] rounded-full text-base font-medium text-blackPrimary"
        >
          <img
            src="@/assets/images/icons/timer.svg"
            alt=""
            class="w-[13.33px]"
          />
          <p class="text-[#E0293B] text-xs font-medium py-[5px] px-4">
            <CountDown :time="paymentValidateTime" @timeUp="timeUp" /> m left
          </p>
        </div>
      </div>
      <div class="p-4 flex justify-between gap-x-3">
        <BkashOption
          plan-name="bkash"
          plan-discount="10%"
          v-model="gatewayType"
        />
        <NagadOption
          plan-name="nagad"
          plan-discount="10%"
          v-model="gatewayType"
        />
        <GateWayOption
          plan-name="sslcommerz"
          plan-discount=""
          v-model="gatewayType"
        />
      </div>
    </div>
    <div v-if="!paymentAllowStatus || paymentValidateTime === 0" class="mt-2">
      <PaymentTimeoutAlert />
    </div>

    <div class="text-center mt-4 lg:mt-5 flex flex-row items-center">
      <img
        v-if="!agreePrivacyPolicy"
        src="@/assets/images/icons/unCheckCircle.svg"
        alt=""
        class="cursor-pointer"
        @click="() => handleCheckBox()"
      />
      <img
        v-if="agreePrivacyPolicy"
        src="@/assets/images/icons/checkBoxCircle.svg"
        alt=""
        class="cursor-pointer"
        @click="() => handleCheckBox()"
      />
      <p class="text-blackPrimary text-sm font-medium text-left ml-2">
        By proceeding you are agreeing with our

        <span>
          <nuxt-link
            to="/bus/policies#terms-and-conditions"
            target="_blank"
            class="w-full underline text-[#1E88E5] font-medium"
            >Terms and Conditions</nuxt-link
          >
          and
          <nuxt-link
            to="/bus/policies#return-and-refund-policy"
            target="_blank"
            class="w-full underline text-[#1E88E5] font-medium"
            >Cancellation Policy</nuxt-link
          >
        </span>
      </p>
    </div>

    <LoaderButton
      class="bg-corporate rounded-full w-full py-[13px] text-white text-sm font-medium mt-6"
      :class="
        getLoading ||
        ((!agreePrivacyPolicy || !paymentAllowStatus) &&
          'bg-red-300 hover:bg-red-200 cursor-not-allowed')
      "
      :loading="getLoading"
      :disabled="
        getLoading ||
        !paymentAllowStatus ||
        paymentValidateTime === 0 ||
        !agreePrivacyPolicy
      "
      @onClick="paymentHandler"
    >
      Pay Now
    </LoaderButton>

    <div
      v-if="!(!paymentAllowStatus || paymentValidateTime === 0)"
      class="p-5 mt-8 border border-[#DBDBDB] rounded-lg lg:hidden flex justify-start items-start gap-x-5"
    >
      <img src="@/assets/images/icons/phoneIconBlack.svg" alt="" class="mt-2" />
      <div>
        <h2 class="text-base font-medium">Having Trouble?</h2>
        <p class="mt-[6px] text-sm text-[#8D8D8F] font-normal">
          Reach out to us for any kind of assistance on +09642080808
        </p>
        <a href="https://jatri.co/contact-us" target="_blank">
          <button
            class="text-xs font-medium bg-[#EDEDED] w-[95px] py-1 rounded-full mt-[10px]"
          >
            Contact us
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapGetters, mapMutations } from "vuex";
import {
  isValidPhoneNumber,
  isValidEmail,
  cleanAndValidatePhoneNumber,
  cleanAndValidatePastedText,
} from "../../../helpers/utils";
import { dateTimeFormat } from "../../../helpers/dateTimeFormat";
export default {
  name: "BookingDetails",
  data() {
    return {
      gatewayType: "",
      paymentAllowStatus: true,
      paymentValidateTime: 0,
      promoCode: "",
      boardingPoint: "",
      droppingPoint: "",
      passengerName: "",
      passengerMobile: "",
      passengerEmail: "",
      errorOccurred: false,
      departureTime: "",
      agreePrivacyPolicy: true,
      isPromoApplied: false,
    };
  },
  computed: {
    ...mapGetters("launchStore", [
      "getIsBookingDetailsOpen",
      "getSeatViewData",
      "getLaunchBookingData",
      "getLoading",
    ]),
    availablePromos() {
      return this.getLaunchBookingData?.availablePromos?.filter(
        (promo) => promo.title && promo.description && promo.code
      );
    },
    boardingPoints() {
      return this.getSeatViewData.seatPlan.boardingPoints.map(
        (item) => item.name
      );
    },
    droppingPoints() {
      return this.getSeatViewData.seatPlan.droppingPoints.map(
        (item) => item.name
      );
    },
    isValidPassengerNumber() {
      return isValidPhoneNumber(`0${this.passengerMobile}`);
    },
    isValidPassengerEmail() {
      return isValidEmail(this.passengerEmail);
    },
    showPromoInput() {
      return this.getLaunchBookingData?.invoice?.promo;
    },
  },
  watch: {
    async gatewayType() {
      const payload = {
        paymentId: this.getLaunchBookingData._id,
        gatewayType: this.gatewayType,
      };
      if (this.getLaunchBookingData?.gatewayType !== this.gatewayType) {
        try {
          await this.updateGatewayAction(payload);
        } catch (err) {
          this.gatewayType = this.getLaunchBookingData.gatewayType;
        }
      }
    },
    getSeatViewData: {
      immediate: true,
      handler() {
        if (this.getSeatViewData?.seatPlan?.droppingPoints) {
          this.droppingPoint =
            this.getSeatViewData?.seatPlan?.droppingPoints[0].name;
        }
      },
    },
    boardingPoint() {
      const boardingDateTime =
        this.getSeatViewData.seatPlan.boardingPoints.find(
          (item) => item.name === this.boardingPoint
        ).boardingDateTime;
      this.departureTime = dateTimeFormat(
        new Date(boardingDateTime).toLocaleString("en-Us"),
        6,
        "lll"
      );
    },
  },
  created() {
    const bookingData = this.getLaunchBookingData;
    if (bookingData) {
      this.paymentValidateTime = this.calculateSecondsLeft(
        bookingData?.pendingValidity?.split("T")[0] +
          " " +
          bookingData?.pendingValidity?.split("T")[1].split(".")[0]
      );

      this.boardingPoint = bookingData?.invoice?.boardingPoint || "";
      if (bookingData?.invoice?.droppingPoint) {
        this.droppingPoint = bookingData?.invoice?.droppingPoint || "";
      }
      this.passengerName = bookingData?.passenger?.name || "";
      this.passengerEmail = bookingData?.passenger?.email || "";
      this.passengerMobile =
        bookingData?.passenger?.phone?.replace(/^0+/, "") ||
        bookingData?.invoice?.promo?.phone?.replace(/^0+/, "") ||
        "";
      this.gatewayType = this.getLaunchBookingData?.gatewayType || "";
    } else {
      this.paymentValidateTime = 0;
    }
  },
  beforeMount() {
    const tnxId = localStorage.getItem("tnxId");

    if (tnxId === this.$route?.query?.tnxId) {
      localStorage.removeItem("tnxId");
      window.location.reload();
    }
  },
  methods: {
    ...mapActions("launchStore", [
      "ticketConfirmAction",
      "getBookingInfoByTnxId",
      "updateGatewayAction",
    ]),
    ...mapMutations("launchStore", ["setBookingDetailsData"]),
    applyPromo() {
      this.$nextTick(async () => {
        this.$nuxt.$loading?.start();
        const payload = {
          promoCode: this.promoCode,
          companyId: this.trip.companyId,
          tripDateTime: this.trip.tripDateTime,
          coachType: this.trip.coach.type,
        };
        await this.getPromoCodeAction(payload)
          .then((res) => {
            if (res.statusCode === 200 && !res.data) {
              this.totalPromoAmount = 0;
            } else if (res.statusCode === 200 && res.data) {
            }
          })
          .catch((error) => {
            this.resetPromo();
          });
        if (
          this.getPromoCode &&
          this.getPromoCode.minSpend <= this.totalAmount
        ) {
          this.totalPromoAmount = this.getPromoCode.amount;
        } else {
          this.totalPromoAmount = 0;
        }
        this.$nuxt.$loading?.finish();
      });
    },
    calculateSecondsLeft(timeToCompare) {
      const currentTime = moment();
      const targetTime = moment(timeToCompare);
      const diffInSeconds = targetTime?.diff(currentTime, "seconds");
      return diffInSeconds || 0;
    },
    handlePromoApplied() {
      this.isPromoApplied = true;
    },
    handleInput() {
      this.passengerMobile = cleanAndValidatePhoneNumber(this.passengerMobile);
    },
    handlePaste(event) {
      event.preventDefault();
      // Get the pasted text
      const pastedText = event.clipboardData.getData("text/plain");
      this.passengerMobile = cleanAndValidatePastedText(pastedText);
    },
    handleCheckBox() {
      this.agreePrivacyPolicy = !this.agreePrivacyPolicy;
    },
    goBack() {
      window.history.back();
    },
    timeUp() {
      this.paymentAllowStatus = false;
    },
    async paymentHandler() {
      const {
        boardingPoint,
        passengerName,
        passengerMobile,
        getLaunchBookingData,
        gatewayType,
      } = this;

      if (
        !boardingPoint ||
        passengerName.length < 3 ||
        !isValidPhoneNumber(`0${passengerMobile}`) ||
        !getLaunchBookingData
      ) {
        this.errorOccurred = true;
      } else {
        this.$nextTick(async () => {
          this.$nuxt.$loading?.start();
          const payload = {
            paymentId: getLaunchBookingData._id,
            gatewayType,
          };

          try {
            const { data } = await this.ticketConfirmAction(payload);

            localStorage.setItem("tnxId", this.$route?.query?.tnxId || "");

            if (data?.gatewayUrl) {
              window.location.href = data.gatewayUrl;
              this.$nuxt.$loading?.finish();
            }
          } catch (err) {
            this.$toast.error(err, {
              position: "bottom-right",
              duration: 50000,
              containerClass: "padding: 100px",
            });
            this.$nuxt.$loading?.finish();
          }
        });
      }
    },
  },
};
</script>
<style scoped>
.height-max-content {
  height: max-content;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f7f7f7;
}

::-webkit-scrollbar-thumb {
  background: #dbdbdb;
  width: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
  width: 6px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.custom-width {
  width: calc(100% - 165px);
}

@media only screen and (min-width: 1024px) {
  .custom-width {
    width: calc(100% - 181px);
  }
}
</style>
