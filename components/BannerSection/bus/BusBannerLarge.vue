<template>
  <div class="hidden lg:block relative homeBanner homeBanner-bus">
    
  </div>
</template>
<script>
export default {
  props: ["service"],
};
</script>
<style scoped>
.homeBanner {
  background-image: url("@/assets/images/home/bannerImageWeb.png");
  background-size: 100% 100%;
}

.homeBanner-bus {
  background-image: url("@/assets/images/home/bannerImageWeb.png");
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
