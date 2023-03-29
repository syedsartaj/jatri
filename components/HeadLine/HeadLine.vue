<template>
  <div
    class="
      scroll-headline
      bg-corporate
      h-[60px]
      w-full
      flex
      items-center
      justify-center
    "
  >
    <div class="scroll-headline__container" ref="container">
      <div
        class="
          scroll-headline__text
          font-medium
          text-xl text-[#FFFFFF]
          font-inter
        "
        :style="{ 'animation-duration': duration }"
      >
        <img
          src="@/assets/images/icons/errorWarning.svg"
          alt=""
          class="w-[25px] h-[25px] mr-[12px]"
        />
        {{ headline }}
      </div>
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
    speed: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      duration: "",
    };
  },
  mounted() {
    const textWidth = this.$refs.container.querySelector(
      ".scroll-headline__text"
    ).offsetWidth;
    const duration = textWidth / this.speed + "s";
    this.duration = duration;
    this.$refs.container
      .querySelectorAll(".scroll-headline__icon, .scroll-headline__text")
      .forEach((el) => {
        el.style.animationDuration = duration;
      });
  },
};
</script>

<style scoped>
.scroll-headline {
  overflow: hidden;
  white-space: nowrap;
}

.scroll-headline__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-headline__text {
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  position: absolute;
  animation: scroll-headline linear infinite;
  animation: scroll-headline linear infinite;
}

@keyframes scroll-headline {
  0% {
    right: 0;
  }
  100% {
    right: 100%;
  }
}
</style>
