<template>
  <div class="relative z-[99999999]">
    <div
      class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10">
      <div
        class="flex min-h-full items-end justify-center lg:p-4 text-center lg:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-t-2xl lg:rounded-lg bg-white text-left shadow-xl transition-all lg:my-8 w-full md:max-w-[724px]"
        >
          <div class="bg-white p-4 lg:p-6 w-full">
            <div class="flex justify-between items-center">
              <p class="text-xl text-blackPrimary font-medium">Select floor</p>
              <button @click="handleSelectFloorModal" class="pr-[6px]">
                <img
                  src="@/assets/images/icons/closeIcon.svg"
                  alt=""
                  @click="handleSelectFloorModal"
                />
              </button>
            </div>
            <hr />
            <div class="bg-white overflow-y-auto h-[504px]">
              <div class="flex flex-col">
                <div class="overflow-x-auto py-4">
                  <div class="grid lg:grid-cols-3 gap-3 lg:gap-4">
                    <div
                      v-for="(item, index) in ['1', '2', '3', '4', '5', '6']"
                      :key="index"
                      @mouseenter="hoverFloor = item"
                      :class="hoverFloor === item && 'bg-corporate'"
                      class="cursor-pointer w-full flex flex-row h-[46px] mt-[10px] px-4 rounded-lg border border-[#EDEDED] items-center"
                    >
                      <div
                        :class="
                          hoverFloor === item ? 'bg-[#FFFFFF]' : 'bg-[#EDEDED]'
                        "
                        class="rounded-full h-6 w-6 text-sm flex items-center justify-center font-bold"
                      >
                        <p :class="hoverFloor === item && 'text-corporate'">
                          {{ item }}
                        </p>
                      </div>
                      <p
                        :class="hoverFloor === item && 'text-[#FFFFFF]'"
                        class="ml-3"
                      >
                        1st floor
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
  </div>
</template>

<script>
export default {
  props: ["handleSelectFloorModal"],
  name: "SelectFloorModal",
  data() {
    return {
      selectedFloor: "",
      hoverFloor: "",
    };
  },
  computed: {},
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
