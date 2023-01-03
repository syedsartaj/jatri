<template>
  <div class="relative z-[99999999]">
    <div class="fixed inset-0 opacity-50 bg-[#151414]"></div>

    <div class="fixed inset-0 z-10 inline-flex justify-center">
      <div
        class="flex justify-center items-center origin-center transform lg:px-4"
      >
        <div
          class="
            relative
            transform
            overflow-hidden
            lg:rounded-lg
            bg-white
            transition-all
            w-full
            lg:w-[800px]
            pb-[20px]
            px-6
            h-screen
            scrollbar-hide
            lg:h-auto
            overflow-y-scroll
          "
        >
          <div class="bg-white pt-6 pb-[10px] w-full">
            <div class="flex justify-between">
              <h2 class="text-xl font-medium text-blackPrimary">
                Cancallation Ticket
              </h2>

              <button @click="handleCancelTicketPopup" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>
          </div>
          <hr />
          <div
            class="
              lg:h-screen lg:max-h-[585px]
              w-full
              flex flex-col
              overflow-y-scroll
              scrollbar-hide
              pb-[40px]
              lg:pb-0
            "
          >
            <ul
              class="
                list-decimal
                text-sm
                font-normal
                mt-2
                text-blackLight text-left
                pt-4
                ml-5
              "
            >
              <li class="mt-2">
                First, you need to go to the search option. You need to add your
                phone number to search for your ticket.
              </li>
              <li class="mt-2">
                Click at the cancellation option. Your request will be submitted
                to our team.
              </li>
              <li class="mt-2">
                Your money will be refunded with following our refund &
                cancellation policy.
              </li>
            </ul>
            <div class="bg-white pt-6 pb-[10px] w-full">
              <div class="flex justify-between">
                <h2 class="text-xl font-medium text-blackPrimary">
                  Cancellation Policies
                </h2>
              </div>
            </div>
            <hr />

            <ul
              class="
                list-disc
                ml-5
                text-sm
                font-normal
                mt-2
                text-blackLight text-left
                py-4
              "
            >
              <li class="mt-2">
                <span class="text-blackPrimary font-bold"
                  >Auto cancellation</span
                >
                will happen if the customer fails to report at the reporting
                station before the departure time.
              </li>
              <li class="mt-2">
                If the customer
                <span class="text-blackPrimary font-bold">fails to pay</span>
                the full amount that mentioned in the screen will not get the
                activated tickets.
              </li>
              <li class="mt-2">
                To be eligible for refund, customers need to cancel the ticket
                from jatri.co before the applicable time before the departure.
                And must report the cancelation to the support center (i.e Call
                09642080808 or email to support@jatri.co) of Jatri.co
              </li>
              <li class="mt-2">
                Only
                <span class="text-blackPrimary font-bold">during Eid time</span>
                , customers are eligible for refund ONLY if the operator cancels
                the trip and cannot provide an alternative arrangement.<span
                  class="text-blackPrimary font-bold"
                >
                  (Note:</span
                >
                Terms and conditions of refund policy might update or change
                from time to time without any notice)
              </li>
              <li class="mt-2">
                <span class="text-blackPrimary font-bold"
                  >For mobile payments</span
                >, it is the responsibility of the customer to input transaction
                ID (if applicable), PIN, OTP properly within time to confirm his
                ticket by himself.
              </li>
              <li class="mt-2">
                Jatri.co sometimes does the verification for the customer as a
                courtesy, but it is not jatri.co’s responsibility or service
                promise.Jatri.co sometimes does the verification for the
                customer as a courtesy, but it is not jatri.co’s responsibility
                or service promise.
              </li>
              <li class="mt-2">
                Tickets will be automatically canceled if the customer does not
                confirm payment within 30 minutes.
              </li>
              <li class="mt-2">
                For mobile payments customers must complete payment and also
                verify transactions within this stipulated time.
              </li>
              <li class="mt-2">
                During Eid sales month, Jatri.co will not do any verification on
                behalf of the customers.
              </li>
            </ul>

            <hr class="mb-[20px]" />
            <div
              class="
                flex
                justify-center
                lg:justify-between
                flex-col
                lg:flex-row
                items-center
              "
            >
              <div class="flex flex-row w-full items-center mb-[20px] lg:mb-0">
                <img
                  @click="handleIsAgree"
                  :src="
                    require(`@/assets/images/ticket/${
                      isAgree ? 'checkbox' : 'uncheckbox'
                    }.svg`)
                  "
                  class="w-6 h-6 cursor-pointer"
                  alt="checkbox"
                />
                <p class="font-normal text-sm text-blackPrimary pl-[10px]">
                  I agree to <span class="underline">Terms and Condition.</span>
                </p>
              </div>
              <button
                @click="handleOnClick"
                :class="!isAgree && `opacity-60`"
                class="
                  flex
                  items-center
                  justify-center
                  bg-[#E0293B]
                  h-[46px]
                  w-[180px]
                  rounded-full
                "
              >
                <img
                  src="@/assets/images/ticket/white-cancel.svg"
                  class="w-6 h-6 mr-2"
                  alt="cancel"
                />
                <p class="text-white text-sm font-medium">Cancel ticket</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      isAgree: false,
    };
  },
  computed: {
    ...mapGetters("guarantedseat", ["getSelectedTicketId"]),
  },
  methods: {
    ...mapActions("guarantedseat", ["cancelTicketAction"]),
    ...mapMutations("guarantedseat", ["handleCancelTicketPopup"]),
    handleOnClick() {
      if (this.isAgree) {
        this.cancelTicketAction(this.getSelectedTicketId);
      }
    },
    handleIsAgree() {
      this.isAgree = !this.isAgree;
    },
  },
};
</script>

<style scoped>
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-default {
  -ms-overflow-style: auto; /* IE and Edge */
  scrollbar-width: auto;
}

.scrollbar-default::-webkit-scrollbar {
  display: block;
}
</style>
