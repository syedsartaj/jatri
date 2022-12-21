<template>
  <div class="relative z-[99999999]">
    <div
      class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10">
      <div
        class="
          flex
          min-h-full
          items-end
          justify-center
          lg:p-4
          text-center
          lg:items-center
          sm:p-0
        "
      >
        <div
          class="
            relative
            transform
            overflow-hidden
            lg:rounded-lg
            bg-white
            text-left
            shadow-xl
            transition-all
            lg:my-8
            w-full
            md:max-w-[800px]
          "
        >
          <div class="bg-white p-4 lg:p-6 w-full">
            <div class="flex justify-between">
              <div class="flex">
                <HeaderTab text="Boarding Point" :isSelected="true" />
                <HeaderTab text="Dropping Point" :isSelected="false" />
                <HeaderTab text="Cancellation Policy" :isSelected="false" />
              </div>

              <button @click="close" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>
            <hr />
            <div class="bg-white overflow-y-auto h-[600px]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["close"],
};
</script>
