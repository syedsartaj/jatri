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
            w-[375px]
            pb-4
          "
        >
          <div class="flex justify-end w-full pt-4 pr-4">
            <img
              src="@/assets/images/icons/closeIcon.svg"
              alt=""
              @click="handleSuccessfulModal"
              class="pr-[6px] cursor-pointer"
            />
          </div>
          <div class="bg-white px-10 w-full flex items-center flex-col">
            <img src="@/assets/images/checkboxCircle.svg" alt="check" />
            <h1 class="text-xl font-medium mt-8 text-blackPrimary text-center">
              Request submitted succesfully
            </h1>
            <p class="text-base font-normal mt-2 text-blackLight text-center">
              We successfully got your request. We will get in touch with you
              soon.
            </p>
          </div>
          <div class="h-auto w-full flex items-center justify-center mt-8">
            <button
              @click="handleSuccessfulModal"
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
              Okay
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
  methods: {
    ...mapMutations("common", ["handleSuccessfulModal"]),
  },
};
</script>