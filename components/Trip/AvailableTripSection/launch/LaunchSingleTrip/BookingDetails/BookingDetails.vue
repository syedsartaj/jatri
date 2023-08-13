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
          class="relative transform overflow-hidden rounded-t-2xl lg:rounded-lg bg-white text-left shadow-xl transition-all lg:my-8 w-full"
        >
          <div class="bg-white py-4 w-full">
            <div class="flex justify-between items-center px-4">
              <p class="text-xl text-blackPrimary font-medium">
                Booking Details
              </p>
              <button @click="handleBookingDetailModal" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>
            <hr />
            <div class="overflow-y-auto h-[94vh] xl:h-auto">
              <div class="my-4 px-4">
                <div class="flex flex-col">
                  <div class="w-full flex flex-col xl:flex-row gap-x-4">
                    <FareDetails />
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
                                :default-option="'Select Your Boarding Location'"
                                :label="'Boarding Point'"
                                :options="boardingPoints"
                              />
                            </div>
                            <div class="w-full mt-4">
                              <h2
                                class="text-xs lg:text-base font-medium text-blackPrimary"
                              >
                                Passenger Name
                                <span class="text-[#E0293B]">*</span>
                              </h2>
                              <input
                                class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full h-[48px] focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary"
                                type="text"
                                placeholder="Enter your name"
                                v-model="passengerName"
                              />
                            </div>
                          </div>

                          <div
                            class="w-full flex  flex-col xl:flex-row justify-evenly gap-x-4"
                          >
                            <div class="mt-4 w-full">
                              <h2
                                class="text-xs lg:text-base font-medium text-blackPrimary"
                              >
                                Departure Time
                              </h2>

                              <div
                                class="bg-[#f7f7f7] h-[48px] mt-[10px] px-4 flex items-center justify-start"
                              >
                                <h2
                                  class="text-sm lg:text-base font-medium text-blackPrimary"
                                >
                                  06:45 PM
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
                                class="flex h-[48px] mt-[10px] bg-[#F7F7F7] rounded pl-[16px]"
                              >
                                <div class="flex items-center shrink-0">
                                  <img
                                    class="w-[48px] h-[32px]"
                                    src="@/assets/images/bd-flag.svg"
                                    alt=""
                                  />
                                  <div
                                    class="text-[14px] leading-[24px] font-Inter font-[400] tracking-wide text-[#747476] ml-[14px]"
                                  >
                                    +88
                                  </div>
                                  <img
                                    class="w-[2px] h-[28px] ml-[4px]"
                                    src="@/assets/images/input-separator.svg"
                                    alt=""
                                  />
                                </div>
                                <input
                                  class="bg-[#f7f7f7] px-4 py-[13px] mt-[0px] rounded w-full focus:outline-0 text-xs focus:appearance-none placeholder:text-blackSecondery text-blackPrimary"
                                  type="number"
                                  minlength="11"
                                  maxlength="11"
                                  required=""
                                  placeholder="Enter your phone"
                                  v-model="passengerMobile"
                                />
                              </div>
                            </div>
                          </div>

                          <div
                            class="w-full flex  flex-col xl:flex-row justify-evenly gap-x-4 pb-4"
                          >
                            <div class="w-full mt-4">
                              <SelectOption
                                v-model="droppingPoint"
                                :default-option="'Select Your Dropping Location'"
                                :label="'Dropping Point'"
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
                                class="bg-[#f7f7f7] h-[48px] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary"
                                type="email"
                                placeholder="Enter your email"
                                v-model="passengerEmail"
                              />
                            </div>
                          </div>
                        </div>
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
                class="w-full flex  flex-col-reverse xl:flex-row justify-between items-center px-4"
              >
                <div
                  class="w-full xl:max-w-max px-8 py-4 my-4 xl:my-0 text-center xl:underline rounded-[8px] border-[1px] border-[#DBDBDB] text-sm font-normal text-blackPrimary"
                >
                  Cancellation Policy
                </div>
                <div class="w-full xl:w-[460px] flex flex-col pt-4 px-4 xl:px-0">
                  <div
                    v-if="!paymentAllowStatus || paymentValidateTime === 0"
                    class="my-2"
                  >
                    <PaymentTimeoutAlert />
                  </div>
                  <LoaderButton
                    class="bg-corporate rounded-full w-full py-[13px] text-white text-sm font-medium"
                    :class="
                      getLoading ||
                      (!paymentAllowStatus &&
                        'bg-red-300 hover:bg-red-200 cursor-not-allowed')
                    "
                    :loading="getLoading"
                    :disabled="
                      getLoading ||
                      !paymentAllowStatus ||
                      paymentValidateTime === 0
                    "
                    @onClick="paymentHandler"
                  >
                    Pay Now
                  </LoaderButton>

                  <div class="text-center mt-4">
                    <p class="text-blackPrimary text-sm font-normal">
                      By proceeding you are agreeing with our
                      <br class="flex md:hidden" />
                      <nuxt-link
                        to="/policies#terms-and-conditions"
                        class="w-full underline text-[#1E88E5] font-medium"
                        >Terms and Conditions</nuxt-link
                      >
                    </p>
                  </div>
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
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["handleBookingDetailModal", "seatViewData"],
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
  },
  created() {
    const paymentInfo =
      this.getLaunchBookingData.paymentPendingData.paymentInfo;
    if (paymentInfo) {
      let a = moment(new Date());
      let getActualPendingValidity =
        paymentInfo.pendingValidity.split("T")[0] +
        " " +
        paymentInfo.pendingValidity.split("T")[1].split(".")[0];
      let b = moment(new Date(getActualPendingValidity));
      if (b.diff(a, "seconds") > 0) {
        this.paymentValidateTime = b.diff(a, "seconds");
      }
    } else {
      this.paymentValidateTime = 0;
    }
  },
  methods: {
    ...mapActions("launchStore", ["ticketConfirmAction"]),
    timeUp() {
      this.paymentAllowStatus = false;
    },
    async paymentHandler() {
      this.$nextTick(async () => {
        this.$nuxt.$loading?.start();
        const payload = {
          boardingPoint: this.boardingPoint,
          droppingPoint: this.droppingPoint,
          passengerName: this.passengerName,
          passengerMobile: this.passengerMobile,
          passengerEmail: this.passengerEmail,
          paymentId:
            this.getLaunchBookingData.paymentPendingData.paymentInfo._id,
          gatewayType: this.gatewayType,
        };
        await this.ticketConfirmAction(payload);

        this.$nuxt.$loading?.finish();
      });
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
</style>
