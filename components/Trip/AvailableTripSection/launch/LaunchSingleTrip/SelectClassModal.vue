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
              <p class="text-xl text-blackPrimary font-medium">
                Select seat class
              </p>
              <img
                @click="handleSelectClassModal"
                src="@/assets/images/icons/closeIcon.svg"
                alt=""
                class="cursor-pointer"
              />
            </div>
            <hr />
            <div class="bg-white overflow-y-auto h-[504px]">
              <div class="flex flex-col">
                <div class="overflow-x-auto py-4">
                  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 lg:gap-x-4">
                    <div
                      v-for="(item, index) in classList"
                      :key="index"
                      @click="
                        handleSelectClassModal({
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
                          item.classId === selectedClass?.info?.classId) &&
                        'bg-corporate'
                      "
                      class="cursor-pointer w-full flex flex-row h-[44px] px-4 rounded-lg border border-[#EDEDED] items-center"
                    >
                      <BedIcon
                        v-if="item.isCabin"
                        :hover="
                          hoverFloor === item ||
                          item.classId === selectedClass?.info?.classId
                        "
                      />
                      <SofaIcon
                        v-else-if="!item.isCabin"
                        :hover="
                          hoverFloor === item ||
                          item.classId === selectedClass?.info?.classId
                        "
                      />
                      <p
                        :class="
                          (hoverFloor === item ||
                            item.classId === selectedClass?.info?.classId) &&
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
  props: ["handleSelectClassModal", "classList", "selectedClass"],
  name: "SelectClassModal",
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
