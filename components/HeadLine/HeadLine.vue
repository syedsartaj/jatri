<template>
  <div
    class="
      scroll-headline
      bg-corporate
      h-[40px]
      md:h-[60px]
      w-full
      flex
      items-center
      justify-center
    "
    @mouseover="pauseAnimation"
    @mouseleave="resumeAnimation"
  >
    <div class="scroll-headline__container" ref="container">
      <div
        class="
          scroll-headline__text
          font-medium
          text-base
          md:text-xl
          text-[#FFFFFF]
          font-inter
        "
        :style="{
          'animation-duration': duration,
          'animation-play-state': playState,
        }"
      >
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
      playState: "running",
    };
  },
  mounted() {
    const duration = this.speed + "s";
    this.duration = duration;
    this.$refs.container
      .querySelectorAll(".scroll-headline__icon, .scroll-headline__text")
      .forEach((el) => {
        el.style.animationDuration = duration;
      });
  },
  methods: {
    pauseAnimation() {
      this.playState = "paused";
    },
    resumeAnimation() {
      this.playState = "running";
    },
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
}

@keyframes scroll-headline {
  0% {
    left: 100%;
  }
  100% {
    left: -50%;
  }
}
</style>
