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
          <div class="bg-white p-4 w-full">
            <div class="flex justify-between items-center mb-2">
              <p class="text-xl text-blackPrimary font-medium">Select floor</p>
              <img
                @click="handleSelectFloorModal"
                src="@/assets/images/icons/closeIcon.svg"
                alt=""
                class="cursor-pointer"
              />
            </div>
            <hr />
            <div class="bg-white overflow-y-auto max-h-[504px]">
              <div class="flex flex-col">
                <div class="overflow-x-auto pt-4">
                  <div
                    class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 lg:gap-x-4"
                  >
                    <div
                      v-for="(item, index) in floorList"
                      :key="index"
                      @click="
                        handleSelectFloorModal({
                          payload: {
                            index: index + 1,
                            info: item,
                          },
                        })
                      "
                      @mouseleave="hoverFloor = ''"
                      @mouseenter="hoverFloor = item"
                      :class="
                        (hoverFloor === item ||
                          item._id === selectedFloor?.info?._id) &&
                        'bg-corporate'
                      "
                      class="cursor-pointer w-full flex flex-row h-[48px] px-4 rounded-lg border border-[#EDEDED] items-center"
                    >
                      <div
                        :class="
                          hoverFloor === item ||
                          item._id === selectedFloor?.info?._id
                            ? 'bg-[#FFFFFF]'
                            : 'bg-[#EDEDED]'
                        "
                        class="rounded-full h-6 w-6 text-sm flex items-center justify-center font-bold"
                      >
                        <p
                          :class="
                            (hoverFloor === item ||
                              item._id === selectedFloor?.info?._id) &&
                            'text-corporate'
                          "
                        >
                          {{ index + 1 }}
                        </p>
                      </div>
                      <p
                        :class="
                          (hoverFloor === item ||
                            item._id === selectedFloor?.info?._id) &&
                          'text-[#FFFFFF]'
                        "
                        class="ml-3"
                      >
                        {{ item.name }}
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
  props: ["handleSelectFloorModal", "floorList", "selectedFloor"],
  name: "SelectFloorModal",
  data() {
    return {
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
