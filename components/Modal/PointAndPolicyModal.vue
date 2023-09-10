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
                <HeaderTab
                  text="Boarding Point"
                  :isSelected="TabData.BOARDING_POINT === selectedTab"
                  :callBack="() => setCurrentTab(TabData.BOARDING_POINT)"
                />
                <HeaderTab
                  text="Dropping Point"
                  :isSelected="TabData.DROPPING_POINT === selectedTab"
                  :callBack="() => setCurrentTab(TabData.DROPPING_POINT)"
                />
                <HeaderTab
                  text="Cancellation Policy"
                  :isSelected="TabData.CANCEL_POLICY === selectedTab"
                  :callBack="() => setCurrentTab(TabData.CANCEL_POLICY)"
                />
              </div>

              <button @click="() => handlePointPolicyModal()" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>
            <hr />
            <div class="bg-white overflow-y-auto h-[504px]">
              <PointsSection
                v-if="isDroppingOrBoardingPoints"
                :pointArray="getPointsArray"
              />
              <CancelPolicySection v-else />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PointAndPolicyModal",
  props: [
    "close",
    "selectedTab",
    "handlePointPolicyModal",
    "setCurrentTab",
    "boardingPoints",
    "droppingPoints",
  ],
  data() {
    return {
      TabData: {
        BOARDING_POINT: "BOARDING_POINT",
        DROPPING_POINT: "DROPPING_POINT",
        CANCEL_POLICY: "CANCEL_POLICY",
      },
    };
  },
  computed: {
    isDroppingOrBoardingPoints() {
      return (
        this.TabData.BOARDING_POINT === this.selectedTab ||
        this.TabData.DROPPING_POINT === this.selectedTab
      );
    },
    getPointsArray() {
      return this.TabData.BOARDING_POINT === this.selectedTab
        ? this.boardingPoints
        : this.droppingPoints;
    },
  },
};
</script>
