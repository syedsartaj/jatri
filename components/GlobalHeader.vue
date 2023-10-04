<template>
  <div
    class="sticky top-0 left-0 z-[999] w-full bg-white border-b border-[#EDEDED]"
  >
    <div class="custom-container">
      <div class="flex justify-between items-center py-3 px-2">
        <div
          class="flex justify-between lg:justify-start items-center gap-x-2 lg:gap-x-8 w-full"
        >
          <NuxtLink to="/">
            <img
              @click="handlePageRefresh"
              class="min-w-[50px] h-[26px] lg:h-9 lg:w-[74px]"
              src="~/assets/images/header/jatri-logo.svg"
              alt="jatri logo"
            />
          </NuxtLink>
          <div class="bg-[#FEF2F0] rounded-full">
            <div
              class="p-1 flex gap-x-1 lg:gap-x-2 justify-center items-center"
            >
              <div class="px-2 py-1 lg:px-3 gap-x-1 lg:gap-x-2 rounded-full">
                <a
                  href="https://rental.jatri.co/"
                  target="_blank"
                  class="linkItem"
                  ><img
                    class="w-3 lg:w-5"
                    src="~/assets/images/header/car-svg.svg"
                    alt=""
                  />Rental</a
                >
              </div>
              <div :class="getServiceClassName(ServiceType.BUS)">
                <div
                  class="linkItem"
                  @click="handleServiceChange(ServiceType.BUS)"
                >
                  <img
                    :class="{
                      'w-3 lg:w-5': true,
                      invert: selectedService === ServiceType.BUS,
                    }"
                    src="~/assets/images/header/bus_2.svg"
                    alt=""
                  />Bus
                </div>
              </div>
              <div :class="getServiceClassName(ServiceType.LAUNCH)">
                <div
                  class="linkItem"
                  @click="handleServiceChange(ServiceType.LAUNCH)"
                >
                  <img
                    :class="{
                      'w-3 lg:w-5': true,
                      invert: selectedService === ServiceType.LAUNCH,
                    }"
                    src="~/assets/images/header/Ship.svg"
                    alt=""
                  />Launch
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-x-4 lg:hidden py-4 ml-2">
          <button @click="handleHamburgerMenu">
            <img
              class="w-6 h-6"
              src="~/assets/images/header/3bar-icon.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
    <div v-if="showHamburgerMenu">
      <HamburgerMenu :close="handleHamburgerMenu" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { ServiceType } from "../helpers/utils";

export default {
  name: "GlobalHeader",
  data() {
    return {
      ServiceType: ServiceType,
      showHamburgerMenu: false,
    };
  },
  methods: {
    ...mapMutations("common", ["setSelectedService"]),
    handleServiceChange(value) {
      this.$router.push(`/${value.toLowerCase()}`);
    },
    handleHamburgerMenu() {
      this.showHamburgerMenu = !this.showHamburgerMenu;
    },
    getServiceClassName(service) {
      return {
        activeMenu: this.selectedService === service,
        "px-2 py-1 lg:px-3 gap-x-1 lg:gap-x-2 rounded-full cursor-pointer": true,
      };
    },
    checkRoutePath() {
      const path = this.$route.path.toString();
      if (path === "/launch") {
        this.setSelectedService(ServiceType.LAUNCH);
      } else if (path === "/bus" || path === "/") {
        this.setSelectedService(ServiceType.BUS);
      }
    },
    handlePageRefresh() {
      if ($nuxt.$route.name === "index") {
        window.location.reload();
      }
    },
  },
  computed: {
    ...mapGetters("common", ["getSelectedServiceType"]),
    selectedService() {
      return this.getSelectedServiceType;
    },
  },
  mounted() {
    this.checkRoutePath();
  },
  watch: {
    $route(to, from) {
      this.checkRoutePath();
    },
  },
};
</script>

<style>
.custom-container {
  @apply w-full mx-auto px-1 lg:px-12 lg:px-[60px] xl:px-[100px] 2xl:px-[200px];
}
.linkItem {
  @apply flex justify-center items-center gap-x-2 text-sm lg:text-base font-medium;
}
.slide {
  @apply absolute animate-[slide_0.5s_forwards] -right-2/4;
}
.activeMenu {
  @apply bg-[#f04935] text-white;
}
@keyframes slide {
  100% {
    right: 0;
  }
}
@media only screen and (max-width: 1023px) {
  .active-menu::after {
    @apply bottom-0 h-[1px];
  }
}
</style>
