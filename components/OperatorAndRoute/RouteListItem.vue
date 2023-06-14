<template>
  <div @click="bookNow()" :class="customClass">
    <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-4 h-4" />
    <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">
      {{ route.title }}
    </p>
  </div>
</template>

<script>
export default {
  title: "RouteListItem",
  props: ["route", "haveBorder"],
  methods: {
    bookNow() {
      const { _id } = this.route;
      if (_id) {
        const query = {
          id: _id,
        };
        this.$router.push({ path: "/popular-routes", query });
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
