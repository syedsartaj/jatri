<template>
  <div
    :class="{
      'hidden lg:block relative homeBanner': true,
      'homeBanner-bus': service === 'BUS',
      'homeBanner-launch': service === 'LAUNCH',
    }"
  >
    <div
      class="absolute lg:top-[80px] lg:left-[96px] lg:right-[96px] z-40 flex flex-col"
    >
      <div class="ml-[4px]">
        <div
          class="text-[28px] md:text-[45px] lg:text-[45px] text-white font-bold"
        >
          {{
            service === "BUS"
              ? "Book your ticket the smarter way"
              : "Reserve your launch tickets online"
          }}
        </div>
        <div class="text-xl text-white font-medium">
          Buy tickets online hassle-free.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["service"],
};
</script>
<style scoped>
.homeBanner {
  background-image: url("../../assets/images/home/bannerImageWeb.png");
  background-size: 100% 100%;
}

.homeBanner-launch {
  background-image: linear-gradient(
      90deg,
      rgba(21, 20, 20, 0.57) 0.01%,
      rgba(255, 255, 255, 0) 99.64%
    ),
    url("../../assets/images/home/bannerImageLaunchWeb.png");
  background-repeat: no-repeat;
}

.homeBanner-bus {
  background-image: linear-gradient(
      90deg,
      rgba(21, 20, 20, 0.57) 0.01%,
      rgba(255, 255, 255, 0) 99.64%
    ),
    url("../../assets/images/home/bannerImageWeb.png");
  background-repeat: no-repeat;
}

@media only screen and (min-width: 992px) {
  .homeBanner {
    height: 400px;
  }
}

@media only screen and (min-width: 1024px) {
  .homeBanner {
    height: 286px;
  }
}
</style>
