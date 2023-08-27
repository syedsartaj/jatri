<template>
  <div v-if="getOperatorListData.length" class="px-4 py-10 lg:p-[100px]">
    <p class="text-center font-normal text-sm lg:text-xl text-blackPrimary">
      Plenty of options to choose
    </p>
    <h2
      class="text-center font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-[#1E88E5] mt-4"
    >
      Available {{ service }} operators
    </h2>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 lg:mt-12">
      <OperatorListItem
        v-for="(operator, index) in getOperatorListData"
        :operator="operator"
        :key="index"
        :service="service"
        :isLastItem="index === getOperatorListData.length - 1"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OperatorSection",
  computed: {
    ...mapGetters("common", ["getOperatorListData", "getSelectedServiceType"]),

    service() {
      return this.getSelectedServiceType.toLowerCase();
    },
  },
};
</script>
