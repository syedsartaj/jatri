<template>
  <div
    class="sticky top-0 left-0 z-[999999998] w-full bg-white border-b border-[#EDEDED]"
  >
    <div class="custom-container">
      <div class="flex justify-between items-center py-[14px] lg:py-4">
        <div
          class="flex justify-between lg:justify-start items-center gap-x-2 lg:gap-x-8 w-full"
        >
          <a :href="JATRI_URL">
            <img
              class="min-w-[50px] h-[26px] lg:h-9 lg:w-[74px]"
              src="~/assets/images/header/jatri-logo.svg"
              alt="jatri logo"
            />
          </a>
          <div class="bg-[#FEF2F0] rounded-full p-1">
            <div class="flex gap-x-1 lg:gap-x-2 justify-center items-center">
              <div class="px-2 py-1 lg:px-3 gap-x-1 lg:gap-x-2 rounded-full">
                <a :href="RENTAL_URL" class="linkItem"
                  ><img
                    class="w-3 h-3 lg:w-5 lg:h-5"
                    src="~/assets/images/header/car-svg.svg"
                    alt=""
                  /><span
                    class="text-sm lg:text-base text-[#151414] font-normal"
                    >Rental</span
                  ></a
                >
              </div>
              <div
                :class="getServiceClassName(ServiceType.BUS)"
                @click="handleServiceChange(ServiceType.BUS)"
              >
                <div class="linkItem">
                  <img
                    :class="{
                      'w-3 h-3 lg:w-5 lg:h-5': true,
                      invert: selectedService === ServiceType.BUS,
                    }"
                    src="~/assets/images/header/bus_2.svg"
                    alt=""
                  /><span class="text-sm lg:text-base">Bus</span>
                </div>
              </div>
              <div
                :class="getServiceClassName(ServiceType.LAUNCH)"
                  @click="launchApp"
              >
                <div class="linkItem">
                  <img
                    :class="{
                      'w-3 h-3 lg:w-5 lg:h-5': true,
                      invert: selectedService === ServiceType.LAUNCH,
                    }"
                    src="~/assets/images/header/Ship.svg"
                    alt=""
                  /><span class="text-sm lg:text-base">Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-x-4 lg:hidden ml-2">
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
      RENTAL_URL: process.env.RENTAL_URL,
      JATRI_URL: process.env.JATRI_URL,
      LAUNCH_URL: process.env.LAUNCH_URL,
    };
  },
  methods: {
    ...mapMutations("common", ["setSelectedService"]),
    launchApp() {
      window.location.assign(this.LAUNCH_URL);
    },
    handleServiceChange(value) {
      this.$router.push(`/${value.toLowerCase()}`);
    },
    handleHamburgerMenu() {
      this.showHamburgerMenu = !this.showHamburgerMenu;
    },
    getServiceClassName(service) {
      return {
        activeMenu: this.selectedService === service,
        "font-medium": this.selectedService === service,
        "font-normal": this.selectedService !== service,
        "px-2 py-1 lg:px-3 gap-x-1 lg:gap-x-2 rounded-full cursor-pointer text-[#151414]": true,
      };
    },
    checkRoutePath() {
      const path = this.$route.path.toString();
      if (path.includes("/launch")) {
        this.setSelectedService(ServiceType.LAUNCH);
      } else if (path.includes("/bus") || path === "/") {
        this.setSelectedService(ServiceType.BUS);
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
  @apply w-full mx-auto px-4 xl:px-[100px];
}
.linkItem {
  @apply flex justify-center items-center gap-x-1 lg:gap-x-2 text-xs lg:text-base;
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
