<template>
  <div class="header">
    <NuxtLink to="/"
      ><img src="@/assets/images/logo.svg" alt="logo" class="h-10 w-[79]"
    /></NuxtLink>

    <div class="flex gap-x-4 h-10">
      <a
        href="tel:09642080808"
        class="
          border-[1px] border-[#DBDBDB]
          text-blackPrimary
          rounded-full
          px-4
          py-2
          justify-between
          gap-x-[10.5px]
          hidden
          lg:flex
        "
      >
        <img
          class="h-5 w-5"
          src="@/assets/images/icons/phoneBlack.svg"
          alt=""
        />
        <span class="font-medium text-base font-inter">09642080808</span>
      </a>

      <div
        class="
          bg-[#f7f7f7]
          text-blackPrimary
          rounded-full
          px-4
          py-2
          justify-between
          gap-x-[10.5px]
          hidden
          lg:flex
          cursor-pointer
        "
        @click="setBusReserveModalOpenStatus"
      >
        <img src="@/assets/images/home/fullBusReserve.svg" alt="" />
        <span class="w-32 font-medium text-base font-inter"
          >Full bus reserve</span
        >
      </div>

      <NuxtLink
        to="/find-ticket"
        class="
          bg-[#FEF2F0]
          text-corporate
          rounded-full
          px-4
          py-2
          flex
          justify-between
          gap-x-[10.5px]
          items-center
        "
      >
        <img src="@/assets/images/icons/searchIcon.svg" alt="" />
        <span class="w-15 font-medium text-xs text-center font-inter"
          >Ticket History</span
        >
      </NuxtLink>
      <div class="flex lg:hidden">
        <div v-if="showHamburgerMenu">
          <HamburgerMenu :close="handleHamburgerMenu" />
        </div>
        <div v-else class="py-2">
          <img
            class="h-6 w-6 cursor-pointer"
            @click="handleHamburgerMenu"
            src="@/assets/images/home/hamburger.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HamburgerMenu from "../components/Modal/HamburgerMenu.vue";
import { mapMutations } from "vuex";
export default {
  components: { HamburgerMenu },
  data() {
    return {
      showHamburgerMenu: false,
      showFullBusReserveModal: false,
    };
  },
  methods: {
    ...mapMutations("guarantedseat", ["setBusReserveModalOpenStatus"]),
    handleHamburgerMenu() {
      this.showHamburgerMenu = !this.showHamburgerMenu;
    },
    handleFullReserveModal() {
      const body = document.getElementsByTagName("body")[0];
      if (body) {
        body.style.overflow = !this.showFullBusReserveModal
          ? "hidden"
          : "scroll";
      }
      this.showFullBusReserveModal = !this.showFullBusReserveModal;
    },
  },
};
</script>

<style>
</style>