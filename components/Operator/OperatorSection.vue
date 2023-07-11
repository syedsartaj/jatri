<template>
  <div v-if="getOperatorListData.length" class="px-4 py-10 lg:p-[100px]">
    <p class="text-center font-normal text-sm lg:text-xl text-blackPrimary">
      Multiple options to choose
    </p>
    <h2
      class="text-center font-medium lg:font-semibold text-2xl lg:text-4xl lg:leading-[44px] text-[#1E88E5] mt-2"
    >
      Available Operators
    </h2>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
      <OperatorListItem
        v-for="(operator, index) in getOperatorListData"
        :operator="operator"
        :key="index"
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
    ...mapGetters("common", ["getOperatorListData"]),
  },
};
</script>
