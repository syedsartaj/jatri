<template>
  <div class="relative z-[99999999]">
    <div class="fixed inset-0 opacity-50 bg-[#151414]"></div>

    <div class="fixed inset-0 z-10">
      <div class="flex justify-center items-center pt-10 px-4 lg:px-0">
        <div
          class="
            relative
            transform
            overflow-hidden
            rounded-lg
            bg-white
            transition-all
            w-[380px]
            pb-6
          "
        >
          <div class="flex justify-between w-full pt-6 pr-4">
            <p class="w-6"></p>
            <p class="text-[#F04935] text-2xl font-medium">Congratulation</p>
            <img
              src="@/assets/images/icons/closeIcon.svg"
              alt=""
              @click="handleSurpriseDealModal(false)"
              class="pr-[6px] cursor-pointer"
            />
          </div>
          <div class="bg-white px-10 w-full flex items-center flex-col">
            <h1 class="text-base font-normal mt-4 text-[#151414]">
              You got {{ getSurpriseDealModalStatus.amount }} TK discount in
              surprise deal
            </h1>
            <img src="@/assets/images/payment/gift.svg" alt="gift" />
            <p class="text-xs font-normal mt-4 text-[#4D4D4F]">
              Time left to claim the offer:
            </p>
            <div
              class="
                h-20
                w-20
                rounded-full
                border-[#48A43F] border-[2px]
                mt-2
                flex
                items-center
                justify-center
              "
            >
              <p
                class="
                  text-base
                  font-medium
                  text-[#151414]
                  flex flex-row
                  items-center
                  gap-[2px]
                "
              >
                {{ second }}
                <span>Sec</span>
              </p>
            </div>
          </div>
          <div class="h-auto w-full flex items-center justify-center mt-6">
            <button
              :class="disableInput && `opacity-60`"
              @click="!disableInput && applyPromo()"
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
              Claim deal
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "SurpriseDealShowingModal",
  data() {
    return {
      second: 120,
      t: "",
      disableInput: false,
    };
  },
  mounted() {
    this.t = setInterval(() => {
      this.second = this.second - 1;
    }, 1000);
  },
  watch: {
    second(value) {
      if (value == 0) {
        this.disableInput = true;
        clearInterval(this.t);
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.t);
  },
  methods: {
    ...mapActions("guarantedseat", ["applyPromoCodeAction"]),
    ...mapMutations("guarantedseat", ["handleSurpriseDealModal"]),
    applyPromo() {
      this.$nextTick(async () => {
        this.$nuxt.$loading?.start();
        const payload = {
          promoCode: this.getSurpriseDealModalStatus.code,
          companyId: this.getBookingInfoDetails.invoice?.companyId,
          tripDateTime:
            this.getBookingInfoDetails.invoice?.tripDateTime ||
            this.getBookingInfoDetails.invoice?.boardingDateTime,
          coachType: this.getBookingInfoDetails.invoice?.coachType,
          paymentId: this.getBookingInfoDetails._id,
          tnxId: this.$route.query.tnxId,
        };
        this.applyPromoCodeAction(payload);

        this.$nuxt.$loading?.finish();
      });
    },
  },
  computed: {
    ...mapGetters("guarantedseat", [
      ,
      "getSurpriseDealModalStatus",
      "getBookingInfoDetails",
    ]),
  },
};
</script>