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
        <span>09642080808</span>
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
        @click="handleFullReserveModal"
      >
        <img src="@/assets/images/home/fullBusReserve.svg" alt="" />
        <span class="w-32">Full bus reserve</span>
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
        "
      >
        <img src="@/assets/images/icons/searchIcon.svg" alt="" />
        <span class="w-15">Find ticket</span>
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
    <FullBusReserveModal
      v-if="showFullBusReserveModal"
      :close="handleFullReserveModal"
    />
  </div>
</template>

<script>
import HamburgerMenu from "../components/Modal/HamburgerMenu.vue";
export default {
  components: { HamburgerMenu },
  data() {
    return {
      showHamburgerMenu: false,
      showFullBusReserveModal: false,
    };
  },
  methods: {
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