<template>
  <div class="relative z-[99999999]">
    <div
      class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10">
      <div
        class="flex min-h-full items-end justify-center max-w-max mx-auto text-center lg:items-center"
      >
        <div
          class="relative transform overflow-hidden rounded-t-2xl lg:rounded-lg bg-white text-left shadow-xl transition-all w-full"
        >
          <div class="bg-white py-4 w-full">
            <div class="flex justify-between items-center px-4">
              <p class="text-xl text-blackPrimary font-medium">
                Booking Details
              </p>
              <button @click="() => goBack()" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>
            <hr />
            <div class="overflow-y-auto max-h-[90vh]">
              <div class="mb-4 xl:my-4 px-4">
                <div class="flex flex-col">
                  <div class="w-full flex flex-col xl:flex-row gap-x-4">
                    <div class="w-full hidden xl:block">
                      <FareDetails
                        :passengerMobile="passengerMobile"
                        :handlePromoApplied="handlePromoApplied"
                      />
                    </div>
                    <div class="flex flex-col mt-4 xl:mt-0">
                      <!-- BookingDetailsOfUser -->
                      <div
                        class="w-full xl:w-[640px] wrapper flex flex-col border-[1px] border-[#DBDBDB] rounded-lg"
                      >
                        <div
                          class="w-full px-4 py-3 border-b-[1px] border-[#DBDBDB] lg:text-base font-medium"
                        >
                          Booking details
                        </div>
                        <div class="w-full px-4">
                          <div
                            class="w-full flex flex-col xl:flex-row justify-evenly gap-x-4"
                          >
                            <div class="w-full mt-4">
                              <SelectOption
                                v-model="boardingPoint"
                                :default-option="'Select boarding point'"
                                :label="'Boarding point'"
                                :options="boardingPoints"
                                :isRequired="true"
                                :errorMessage="errorOccurred && !boardingPoint"
                              />
                            </div>
                            <div class="w-full mt-4">
                              <h2
                                class="text-xs lg:text-base font-medium text-blackPrimary"
                              >
                                Passenger name
                                <span class="text-[#E0293B]">*</span>
                              </h2>
                              <input
                                :class="
                                  errorOccurred &&
                                  passengerName.length < 3 &&
                                  'bg-[#FDF0F1] border border-[#E0293B]'
                                "
                                class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full h-[48px] focus:outline-0 text-xs placeholder:text-blackSecondary text-blackPrimary"
                                type="text"
                                placeholder="Enter your name"
                                v-model="passengerName"
                              />
                              <div
                                v-if="errorOccurred && passengerName.length < 3"
                                class="w-full flex flex-row gap-x-2 items-center text-xs font-medium text-[#E0293B] mt-[10px]"
                              >
                                <img
                                  src="@/assets/images/icons/warningRed.svg"
                                  class="h-4 w-4"
                                  alt="error"
                                />
                                <div>Length must be at least 3 characters.</div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="w-full flex flex-col xl:flex-row justify-evenly gap-x-4"
                          >
                            <div class="mt-4 w-full">
                              <h2
                                class="text-xs lg:text-base font-medium text-blackPrimary"
                              >
                                Departure time
                              </h2>

                              <div
                                class="bg-[#f7f7f7] h-[48px] mt-[10px] px-4 flex items-center justify-start"
                              >
                                <h2
                                  class="text-sm lg:text-base font-medium text-blackPrimary"
                                >
                                  {{ departureTime || "" }}
                                </h2>
                              </div>
                            </div>
                            <div class="mt-4 w-full">
                              <h2
                                class="text-xs lg:text-base font-medium text-blackPrimary"
                              >
                                Phone <span class="text-[#E0293B]">*</span>
                              </h2>
                              <div
                                :class="
                                  errorOccurred &&
                                  !isValidPassengerNumber &&
                                  'bg-[#FDF0F1] border border-[#E0293B]'
                                "
                                class="flex h-[48px] mt-[10px] bg-[#F7F7F7] rounded pl-[16px]"
                              >
                                <div class="flex items-center shrink-0">
                                  <div
                                    class="text-s font-Inter font-medium tracking-wide text-[#151414]"
                                  >
                                    +88
                                  </div>
                                </div>
                                <input
                                  class="bg-[#f7f7f7] pl-1 px-4 py-[13px] mt-[0px] rounded w-full focus:outline-0 focus:appearance-none placeholder:text-blackSecondary text-[#151414] text-sm"
                                  type="number"
                                  :disabled="isPromoApplied"
                                  minlength="11"
                                  maxlength="11"
                                  required=""
                                  placeholder=""
                                  v-model="passengerMobile"
                                  @input="limitInputLength"
                                  @wheel="$event.target.blur()"
                                />
                              </div>
                              <div
                                v-if="errorOccurred && !isValidPassengerNumber"
                                class="w-full flex flex-row gap-x-2 items-center text-xs font-medium text-[#E0293B] mt-[10px]"
                              >
                                <img
                                  src="@/assets/images/icons/warningRed.svg"
                                  class="h-4 w-4"
                                  alt="error"
                                />
                                <div>Please enter a valid phone number.</div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="w-full flex flex-col xl:flex-row justify-evenly gap-x-4 pb-4"
                          >
                            <div class="w-full mt-4">
                              <SelectOption
                                v-model="droppingPoint"
                                :default-option="'Select dropping point'"
                                :label="'Dropping point'"
                                :options="droppingPoints"
                                :isOptional="true"
                              />
                            </div>
                            <div class="mt-4 w-full">
                              <h2
                                class="text-xs lg:text-base font-medium text-blackPrimary flex justify-between"
                              >
                                <span>Email </span>
                                <span class="text-[#8D8D8F] text-xs"
                                  >Optional</span
                                >
                              </h2>
                              <input
                                :class="
                                  passengerEmail &&
                                  !isValidPassengerEmail &&
                                  'bg-[#FDF0F1] border border-[#E0293B]'
                                "
                                class="bg-[#f7f7f7] h-[48px] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 placeholder:text-blackSecondary text-[#151414] text-sm"
                                type="email"
                                placeholder="Enter your email"
                                v-model="passengerEmail"
                              />
                              <div
                                v-if="passengerEmail && !isValidPassengerEmail"
                                class="w-full flex flex-row gap-x-2 items-center text-xs font-medium text-[#E0293B] mt-[10px]"
                              >
                                <img
                                  src="@/assets/images/icons/warningRed.svg"
                                  class="h-4 w-4"
                                  alt="error"
                                />
                                <div>Please enter a valid email.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full block xl:hidden mt-4">
                        <FareDetails
                          :passengerMobile="passengerMobile"
                          :handlePromoApplied="handlePromoApplied"
                        />
                      </div>
                      <div
                        class="mt-4 bg-white rounded-[10px] border border-[#EDEDED]"
                      >
                        <div
                          class="flex justify-between items-center gap-x-4 px-5 py-[16px] border-b"
                        >
                          <p class="text-base font-medium text-blackPrimary">
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
                            <p
                              class="text-[#E0293B] text-xs font-medium py-[5px] px-4"
                            >
                              <CountDown
                                :time="paymentValidateTime"
                                @timeUp="timeUp"
                              />
                              m left
                            </p>
                          </div>
                        </div>
                        <div class="p-4 flex justify-between gap-x-4">
                          <GateWayOption
                            plan-name="sslcommerz"
                            plan-discount=""
                            v-model="gatewayType"
                          />
                          <NagadOption
                            plan-name="nagad"
                            plan-discount="10%"
                            v-model="gatewayType"
                          />
                          <BkashOption
                            plan-name="bkash"
                            plan-discount="10%"
                            v-model="gatewayType"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div
                class="w-full flex flex-col-reverse xl:flex-row justify-between px-4"
              >
                <div
                  class="w-full h-[44px] xl:max-w-max px-8 my-4 xl:mb-0 underline flex items-center justify-center rounded-[8px] border-[1px] border-[#DBDBDB] text-sm font-normal text-blackPrimary"
                >
                  <a href="/policies#return-and-refund-policy" target="_blank"
                    >Cancellation Policy</a
                  >
                </div>
                <div class="w-full xl:w-[460px] flex flex-col pt-4 px-0">
                  <div
                    v-if="!paymentAllowStatus || paymentValidateTime === 0"
                    class="my-2"
                  >
                    <PaymentTimeoutAlert />
                  </div>

                  <div
                    class="text-center my-4 lg:my-5 flex flex-row items-center"
                  >
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
                    <p
                      class="text-blackPrimary text-sm font-medium text-left ml-2"
                    >
                      By proceeding you are agreeing with our

                      <span>
                        <nuxt-link
                          to="/policies#terms-and-conditions"
                          class="w-full underline text-[#1E88E5] font-medium"
                          >Terms and Conditions</nuxt-link
                        >
                        and
                        <nuxt-link
                          to="/policies#return-and-refund-policy"
                          class="w-full underline text-[#1E88E5] font-medium"
                          >Cancellation Policy</nuxt-link
                        >
                      </span>
                    </p>
                  </div>

                  <LoaderButton
                    class="bg-corporate rounded-full w-full py-[11px] lg:py-[13px] text-white text-base font-medium"
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
                </div>
              </div>
            </div>
          </div>
        </div>
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
} from "../../../../../../helpers/utils";
import { dateTimeFormat } from "../../../../../../helpers/dateTimeFormat";
export default {
  name: "BookingDetails",
  data() {
    return {
      gatewayType: "bkash",
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
      return isValidPhoneNumber(this.passengerMobile);
    },
    isValidPassengerEmail() {
      return isValidEmail(this.passengerEmail);
    },
  },
  watch: {
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
      let a = moment(new Date());
      let getActualPendingValidity =
        bookingData.pendingValidity.split("T")[0] +
        " " +
        bookingData.pendingValidity.split("T")[1].split(".")[0];
      let b = moment(new Date(getActualPendingValidity));
      if (b.diff(a, "seconds") > 0) {
        this.paymentValidateTime = b.diff(a, "seconds");
      }

      this.boardingPoint = bookingData?.invoice?.boardingPoint || "";
      if (bookingData?.invoice?.droppingPoint) {
        this.droppingPoint = bookingData?.invoice?.droppingPoint || "";
      }
      this.passengerName = bookingData?.passenger?.name || "";
      this.passengerEmail = bookingData?.passenger?.email || "";
      this.passengerMobile =
        bookingData?.passenger?.phone ||
        bookingData?.invoice?.promo?.phone ||
        "";
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
    ]),
    ...mapMutations("launchStore", ["setBookingDetailsData"]),
    handlePromoApplied() {
      this.isPromoApplied = true;
    },
    limitInputLength() {
      if (this.passengerMobile.length > 11) {
        this.passengerMobile = this.passengerMobile.slice(0, 11); // Truncate input to max length
      }
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
        droppingPoint,
        passengerName,
        passengerMobile,
        passengerEmail,
        getLaunchBookingData,
        gatewayType,
      } = this;

      if (
        !boardingPoint ||
        passengerName.length < 3 ||
        !isValidPhoneNumber(passengerMobile) ||
        !getLaunchBookingData
      ) {
        this.errorOccurred = true;
      } else {
        this.$nextTick(async () => {
          this.$nuxt.$loading?.start();
          const payload = {
            boardingPoint,
            droppingPoint,
            passengerName,
            passengerMobile,
            passengerEmail,
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
<style>
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
</style>
