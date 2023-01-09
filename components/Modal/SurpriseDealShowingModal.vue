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
              @click="handleSuccessfulModal"
              class="pr-[6px] cursor-pointer"
            />
          </div>
          <div class="bg-white px-10 w-full flex items-center flex-col">
            <h1 class="text-base font-normal mt-4 text-[#151414]">
              You got 50 TK discount in surprise deal
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
              <p class="text-base font-medium text-[#151414]">120 Sec</p>
            </div>
          </div>
          <div class="h-auto w-full flex items-center justify-center mt-6">
            <button
              @click="handleSurpriseDealModal"
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
import { mapMutations } from "vuex";
export default {
  name: "SurpriseDealShowingModal",
  methods: {
    ...mapMutations("guarantedseat", ["handleSurpriseDealModal"]),
  },
};
</script>