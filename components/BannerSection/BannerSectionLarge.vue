<template>
  <div
    :class="{
      'hidden lg:block relative homeBanner': true,
      'homeBanner-bus': service === 'BUS',
      'homeBanner-launch': service === 'LAUNCH',
    }"
  >
    
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
  background-image: 
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