<template>
  <div class="relative z-[99999999]">
    <div class="fixed inset-0 opacity-50 bg-[#151414]"></div>

    <div class="fixed inset-0 z-10">
      <div class="flex justify-center items-center pt-60 px-4 lg:px-0">
        <div
          class="
            relative
            transform
            overflow-hidden
            rounded-lg
            bg-white
            transition-all
            w-[464px]
            p-10
          "
        >
          <div class="bg-white w-full flex items-center flex-col">
            <h1 class="text-2xl font-medium text-blackPrimary">
              Verify OTP to cancel ticket
            </h1>
            <p class="text-base font-normal mt-2 text-[#8D8D8F] text-center">
              We sent an SMS with your code to
            </p>
            <p class="text-base font-medium text-blackPrimary text-center">
              +88{{ getIsTicketPopupOpen }}
            </p>
            <div class="otp w-full flex justify-around my-6">
              <input
                v-for="index in 4"
                :key="index"
                v-model="fieldData[index - 1]"
                type="text"
                maxlength="1"
                class="
                  w-[66px]
                  h-[66px]
                  text-center
                  firstInputEl
                  bg-[#F7F7F7]
                  rounded-[6px]
                "
                @keyup="(e) => handleOtpInput(e, index - 1)"
                @paste="index === 1 && handlePaste($event)"
              />
            </div>
            <p
              v-if="!showResendButton"
              class="text-xs font-normal text-[#F04935] text-center"
            >
              Resend code: {{ second }} sec
            </p>
            <p
              v-if="showResendButton"
              @click="handleResendOTP"
              class="
                text-xs
                font-normal
                text-[#1E88E5] text-center
                underline
                mt-[20px]
                cursor-pointer
              "
            >
              Did not get code?
            </p>
          </div>
          <div
            class="
              h-auto
              w-full
              flex
              items-center
              justify-evenly
              gap-[20px]
              mt-8
            "
          >
            <button
              @click="() => handleCancelTicketPopup(false)"
              class="
                border
                flex
                items-center
                justify-center
                text-[#151414] text-base
                font-medium
                h-[46px]
                w-[295px]
                rounded-full
                cursor-pointer
              "
            >
              Cancel
            </button>
            <button
              :class="!isButtonActive && `opacity-60`"
              @click="handleOnClick"
              class="
                flex
                items-center
                justify-center
                bg-corporate
                text-white text-sm
                font-medium
                h-[46px]
                w-[295px]
                rounded-full
                cursor-pointer
              "
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "CancelTicketOTPModal",
  data() {
    return {
      fieldData: ["", "", "", ""],
      second: 120,
      t: "",
      showResendButton: false,
    };
  },
  methods: {
    ...mapActions("guarantedseat", [
      "cancelTicketAction",
      "sendOtpForCancelTicketAction",
    ]),
    ...mapMutations("guarantedseat", ["handleCancelTicketPopup"]),
    handleOnClick() {
      const otpCode = this.fieldData.join("");
      this.cancelTicketAction({
        ticketId: this.getSelectedTicketId,
        otpCode: otpCode,
      });
    },

    handlePaste(e) {
      const pasteData = e.clipboardData.getData("text");
      let nextEl = e.target.nextElementSibling;
      for (let i = 1; i < pasteData.length; i++) {
        if (nextEl) {
          this.fieldData[i] = pasteData[i];
          nextEl = nextEl.nextElementSibling;
        }
      }
    },
    handleResendOTP() {
      this.fieldData = ["", "", "", ""];
      const payload = {
        ticketId: this.getSelectedTicketId,
      };
      this.sendOtpForCancelTicketAction(payload);
      this.startTimer();
    },
    handleOtpInput(e, index) {
      this.fieldData[index] = e.target.value;
      if (e.target.value && e.target.nextElementSibling) {
        e.target.nextElementSibling.focus();
      } else if (!e.target.value && e.target.previousElementSibling) {
        e.target.previousElementSibling.focus();
      }
    },
    startTimer() {
      let items = document.getElementsByClassName("firstInputEl");
      if (items) {
        items[0].focus();
      }
      this.showResendButton = false;
      this.second = 120;
      this.t = setInterval(() => {
        this.second = this.second - 1;
      }, 1000);
    },
  },
  mounted() {
    this.startTimer();
  },
  watch: {
    second(value) {
      if (value == 0) {
        this.showResendButton = true;
        clearInterval(this.t);
      }
    },
  },
  computed: {
    ...mapGetters("guarantedseat", [
      "getSelectedTicketId",
      "getIsTicketPopupOpen",
    ]),
    isButtonActive() {
      const { fieldData } = this;
      return fieldData[0] && fieldData[1] && fieldData[2] && fieldData[3];
    },
  },
  beforeDestroy() {
    clearInterval(this.t);
  },
};
</script>