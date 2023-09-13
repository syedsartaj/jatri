<template>
  <div
    class="scroll-ticker bg-corporate h-[40px] md:h-[60px] flex items-center justify-center"
  >
    <marquee
      :direction="direction"
      :behavior="behavior"
      class="font-medium text-base md:text-xl text-[#FFFFFF] font-inter"
    >
      <div v-html="headline"></div>
    </marquee>
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
