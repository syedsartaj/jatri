<template>
  <div class="py-10 bg-[#f7f7f7]">
    <div class="text-center w-[380px] lg:w-[558px] mx-auto">
      <img
        src="@/assets/images/icons/failed.svg"
        alt=""
        class="animate-animateZoom w-10 lg:w-[46px] block mx-auto"
      />
      <h2
        v-if="message"
        class="text-blackPrimary text-xl lg:text-[28px] lg:leading-9 font-semibold mt-5"
      >
        {{ message }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    this.message = this.$route.query?.msg || "Payment Failed";
  },
};
</script>