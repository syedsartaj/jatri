<template>
  <div @click="bookNow()" :class="customClass">
    <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-4 h-4" />
    <p class="text-sm lg:text-base text-blackPrimary font-normal lg:font-medium py-4 lg:py-5">
      {{ routeItem.title }}
    </p>
  </div>
</template>

<script>
export default {
  title: "RouteListItem",
  props: ["routeItem", "haveBorder"],
  methods: {
    bookNow() {
      const { _id } = this.routeItem;
      if (_id) {
        const query = {
          id: _id,
        };

        const path =
          this.$route.path === "/" || this.$route.path === "/bus"
            ? "bus/popular-route"
            : "launch/popular-route";

        this.$router.replace({ path: path, query });
      }
    },
  },
  computed: {
    customClass() {
      return this.haveBorder
        ? "flex justify-start gap-x-[10px] w-full items-center cursor-pointer border-b border-b-[#DBDBDB] last:border-b-0"
        : "flex justify-start gap-x-[10px] w-full items-center cursor-pointer";
    },
  },
};
</script>
