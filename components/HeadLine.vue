<template>
  <div class="w-full sticky top-[65px] lg:top-[72px] z-[999999]">
    <div
      class="scroll-ticker bg-corporate h-[32px] flex items-center justify-center"
    >
      <marquee
        :direction="direction"
        :behavior="behavior"
        class="font-medium text-sm text-[#FFFFFF] font-inter"
      >
        <div v-html="headline"></div>
      </marquee>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "left", // Change this to 'right' if needed
    },
    behavior: {
      type: String,
      default: "scroll", // Change this to 'alternate' if needed
    },
  },
};
</script>

<style scoped>
.scroll-ticker {
  width: 100%;
  overflow: hidden;
}
</style>
