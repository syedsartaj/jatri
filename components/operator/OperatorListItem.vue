<template>
  <div
    @click="bookNow()"
    :class="!isLastItem && 'cursor-pointer'"
    class="flex justify-between w-full items-center py-4 px-[20px] rounded-[10px] border-[1px] border-[#DBDBDB]"
  >
    <div class="flex flex-row items-center w-full gap-x-[12px] max-w-[85%]">
      <img
        src="@/assets/images/home/availableRoutesIcon.svg"
        alt=""
        class="w-5 h-5"
      />
      <p
        class="text-xs lg:text-base lg:leading-6 text-blackPrimary font-medium text-ellipsis overflow-hidden whitespace-nowrap"
      >
        {{ operator?.title }}
      </p>
    </div>
    <img
      v-if="!isLastItem"
      src="@/assets/images/home/arrowRight.svg"
      alt=""
      class="h-4 w-4"
    />
  </div>
</template>

<script>
export default {
  title: "OperatorListItem",
  props: ["operator", "isLastItem"],
  methods: {
    bookNow() {
      const { _id } = this.operator;
      if (_id) {
        const query = {
          id: _id,
        };

        const path =
          this.$route.path === "/" || this.$route.path === "/bus"
            ? "bus/operator"
            : "launch/operator";

        this.$router.push({ path: path, query });
      }
    },
  },
};
</script>
