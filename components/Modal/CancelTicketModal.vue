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
            pb-10
          "
        >
          <div class="bg-white py-6 px-10 w-full">
            <div class="flex justify-center">
              <h2
                class="
                  text-sm
                  lg:text-xl
                  font-medium
                  text-blackPrimary text-center
                "
              >
                Are you sure to cancel this ticket?
              </h2>
            </div>
          </div>
          <div class="h-auto w-full flex justify-evenly gap-[24px] px-10">
            <button
              @click="handleCancelTicketPopup"
              class="
                flext
                items-center
                justify-center
                text-blackPrimary text-sm
                font-medium
                h-[46px]
                w-full
                rounded-full
                border border-[#EDEDED]
              "
            >
              Cancel
            </button>
            <button
              @click="handleOnClick"
              class="
                flext
                items-center
                justify-center
                bg-corporate
                text-white text-sm
                font-medium
                h-[46px]
                w-full
                rounded-full
              "
            >
              Ok
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
  computed: {
    ...mapGetters("guarantedseat", ["getSelectedTicketId"]),
  },
  methods: {
    ...mapActions("guarantedseat", ["cancelTicketAction"]),
    ...mapMutations("guarantedseat", ["handleCancelTicketPopup"]),
    handleOnClick() {
      this.cancelTicketAction(this.getSelectedTicketId);
    },
  },
};
</script>

