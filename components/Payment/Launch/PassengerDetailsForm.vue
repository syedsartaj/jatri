<template>
  <div
    class="w-full lg:w-[57.26%] wrapper flex flex-col border-[1px] border-[#EDEDED] rounded-2xl bg-[#FFFFFF] height-max-content"
  >
    <div class="w-full p-4 border-b-[1px] border-[#EDEDED]">
      <div class="text-base lg:text-xl text-blackPrimary font-medium">
        Passenger details
      </div>
    </div>
    <div class="w-full px-4">
      <div class="w-full flex flex-col md:flex-row justify-evenly gap-x-4">
        <div class="w-full mt-4">
          <div class="text-base lg:text-xl text-blackPrimary font-medium">
            Passenger name <span class="text-[#E0293B]">*</span>
          </div>
          <input
            :class="
              errorOccurred &&
              passengerName.length < 3 &&
              'bg-[#FDF0F1] border border-[#E0293B]'
            "
            class="bg-[#f7f7f7] px-4 mt-2 rounded-lg w-full h-[48px] focus:outline-0 text-sm font-medium placeholder:text-blackSecondary placeholder:font-normal text-blackPrimary"
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
        <div class="mt-4 w-full">
          <div class="text-base lg:text-xl text-blackPrimary font-medium">
            Mobile number <span class="text-[#E0293B]">*</span>
          </div>

          <div
            :class="
              errorOccurred &&
              !isValidPassengerNumber &&
              'bg-[#FDF0F1] border border-[#E0293B]'
            "
            class="flex h-[48px] mt-2 bg-[#F7F7F7] rounded pl-[16px]"
          >
            <div class="flex items-center shrink-0">
              <div class="text-sm font-medium tracking-wide text-[#676769]">
                +88
              </div>
            </div>
            <input
              :class="
                errorOccurred &&
                !isValidPassengerNumber &&
                'bg-[#FDF0F1]'
              "
              class="bg-[#f7f7f7] pl-2 pr-4 rounded-lg w-full focus:outline-0 text-sm font-medium placeholder:text-blackSecondary placeholder:font-normal text-blackPrimary"
              type="number"
              minlength="11"
              maxlength="11"
              required=""
              placeholder=""
              v-model="passengerMobile"
              @input="handleInput"
              @paste="handlePaste"
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

      <div class="w-full flex flex-col md:flex-row justify-evenly gap-x-4">
        <div class="mt-4 w-full">
          <div
            class="text-base lg:text-xl text-blackPrimary font-medium flex justify-between items-end"
          >
            <span>Email address</span>
            <span class="text-[#676769] text-xs font-normal">Optional</span>
          </div>
          <input
            :class="
              passengerEmail &&
              !isValidPassengerEmail &&
              'bg-[#FDF0F1] border border-[#E0293B]'
            "
            class="bg-[#f7f7f7] px-4 mt-2 rounded-lg w-full h-[48px] focus:outline-0 text-sm font-medium placeholder:text-blackSecondary placeholder:font-normal text-blackPrimary"
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
        <div class="w-full mt-4">
          <SelectOption
            v-model="boardingPoint"
            :default-option="'Select boarding point'"
            :label="'Boarding point'"
            :options="boardingPoints"
            :isRequired="true"
            :errorMessage="errorOccurred && !boardingPoint"
            :isPassengerForm="true"
          />
        </div>
      </div>

      <div class="w-full flex flex-col md:flex-row justify-evenly gap-x-4 pb-4">
        <div class="mt-4 w-full">
          <div class="text-base lg:text-xl text-blackPrimary font-medium">
            Departure time
          </div>
          <div
            class="bg-[#f7f7f7] px-4 mt-2 rounded-lg w-full h-[48px] flex items-center justify-start"
          >
            <h2 class="text-sm font-medium text-blackPrimary">
              {{ departureTime || "" }}
            </h2>
          </div>
        </div>
        <div class="w-full mt-4">
          <SelectOption
            v-model="droppingPoint"
            :default-option="'Select dropping point'"
            :label="'Dropping point'"
            :options="droppingPoints"
            :isRequired="true"
            :errorMessage="errorOccurred && !droppingPoint"
            :isPassengerForm="true"
          />
        </div>
      </div>

      <ContinuePaymentButton :handleSubmit="paymentHandler" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  isValidPhoneNumber,
  isValidEmail,
  cleanAndValidatePhoneNumber,
  cleanAndValidatePastedText,
} from "../../../helpers/utils";
import { dateTimeFormat } from "../../../helpers/dateTimeFormat";
export default {
  name: "PassengerDetailsForm",
  data() {
    return {
      boardingPoint: "",
      droppingPoint: "",
      passengerName: "",
      passengerMobile: "",
      passengerEmail: "",
      errorOccurred: false,
      departureTime: "",
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

      if (this.passengerMobile) {
        this.$router.push(
          `/launch/payment/payment-details?tnxId=${this.$route.query.tnxId}`
        );
      }
    }
  },
  methods: {
    ...mapActions("launchStore", ["postPassengerDetailsAction"]),
    handleInput() {
      this.passengerMobile = cleanAndValidatePhoneNumber(this.passengerMobile);
    },
    handlePaste(event) {
      event.preventDefault();
      const pastedText = event.clipboardData.getData("text/plain");
      this.passengerMobile = cleanAndValidatePastedText(pastedText);
    },
    async paymentHandler() {
      const {
        boardingPoint,
        droppingPoint,
        passengerName,
        passengerMobile,
        passengerEmail,
        getLaunchBookingData,
      } = this;

      if (
        !boardingPoint || 
        !droppingPoint || 
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
            passengerMobile: passengerMobile,
            passengerEmail,
            paymentId: getLaunchBookingData._id,
          };

          try {
            await this.postPassengerDetailsAction(payload);
            this.$router.push(
              `/launch/payment/payment-details?tnxId=${this.$route.query.tnxId}`
            );
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
</style>
