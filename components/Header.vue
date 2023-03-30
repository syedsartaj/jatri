<template>
  <div class="w-full flex flex-col sticky top-0 z-50">
    <HeadLine
      v-if="getHeadLine?.length && getHeadLine[0].headline"
      :headline="getHeadLine[0].headline"
      speed="30"
    />
    <div
      class="
        bg-white
        w-full
        flex
        justify-between
        px-4
        lg:px-[100px]
        py-[21px]
        lg:py-4
      "
    >
      <NuxtLink to="/"
        ><img
          @click="handlePageRefresh"
          src="@/assets/images/logo.svg"
          alt="logo"
          class="h-10 w-[79]"
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
            items-center
            justify-center
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 11.6833V14.63C15.5001 14.841 15.4202 15.0441 15.2763 15.1985C15.1325 15.3528 14.9355 15.4469 14.725 15.4617C14.3608 15.4867 14.0633 15.5 13.8333 15.5C6.46917 15.5 0.5 9.53083 0.5 2.16667C0.5 1.93667 0.5125 1.63917 0.538333 1.275C0.553102 1.06454 0.647151 0.867509 0.801503 0.723674C0.955855 0.579839 1.15902 0.499905 1.37 0.5H4.31667C4.42003 0.499896 4.51975 0.538216 4.59644 0.607517C4.67313 0.676818 4.72133 0.772152 4.73167 0.875C4.75083 1.06667 4.76833 1.21917 4.785 1.335C4.95061 2.49077 5.29 3.61486 5.79167 4.66917C5.87083 4.83583 5.81917 5.035 5.66917 5.14167L3.87083 6.42667C4.97038 8.98871 7.01212 11.0305 9.57417 12.13L10.8575 10.335C10.91 10.2617 10.9865 10.2091 11.0737 10.1864C11.161 10.1637 11.2535 10.1723 11.335 10.2108C12.3892 10.7116 13.513 11.0501 14.6683 11.215C14.7842 11.2317 14.9367 11.25 15.1267 11.2683C15.2294 11.2789 15.3245 11.3271 15.3936 11.4038C15.4628 11.4805 15.501 11.5801 15.5008 11.6833H15.5Z"
              fill="#F04935"
            />
          </svg>

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
            items-center
            justify-center
          "
          @click="setBusReserveModalOpenStatus"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.167 16.6667H5.83366V17.5C5.83366 17.721 5.74586 17.933 5.58958 18.0893C5.4333 18.2455 5.22134 18.3333 5.00033 18.3333H3.33366C3.11265 18.3333 2.90068 18.2455 2.7444 18.0893C2.58812 17.933 2.50033 17.721 2.50033 17.5V10H1.66699V6.66667H2.50033V4.16667C2.50033 3.72464 2.67592 3.30072 2.98848 2.98816C3.30104 2.67559 3.72496 2.5 4.16699 2.5H15.8337C16.2757 2.5 16.6996 2.67559 17.0122 2.98816C17.3247 3.30072 17.5003 3.72464 17.5003 4.16667V6.66667H18.3337V10H17.5003V17.5C17.5003 17.721 17.4125 17.933 17.2562 18.0893C17.1 18.2455 16.888 18.3333 16.667 18.3333H15.0003C14.7793 18.3333 14.5674 18.2455 14.4111 18.0893C14.2548 17.933 14.167 17.721 14.167 17.5V16.6667ZM4.16699 4.16667V10H15.8337V4.16667H4.16699ZM6.25033 15C6.58185 15 6.89979 14.8683 7.13421 14.6339C7.36863 14.3995 7.50033 14.0815 7.50033 13.75C7.50033 13.4185 7.36863 13.1005 7.13421 12.8661C6.89979 12.6317 6.58185 12.5 6.25033 12.5C5.91881 12.5 5.60086 12.6317 5.36644 12.8661C5.13202 13.1005 5.00033 13.4185 5.00033 13.75C5.00033 14.0815 5.13202 14.3995 5.36644 14.6339C5.60086 14.8683 5.91881 15 6.25033 15ZM13.7503 15C14.0818 15 14.3998 14.8683 14.6342 14.6339C14.8686 14.3995 15.0003 14.0815 15.0003 13.75C15.0003 13.4185 14.8686 13.1005 14.6342 12.8661C14.3998 12.6317 14.0818 12.5 13.7503 12.5C13.4188 12.5 13.1009 12.6317 12.8664 12.8661C12.632 13.1005 12.5003 13.4185 12.5003 13.75C12.5003 14.0815 12.632 14.3995 12.8664 14.6339C13.1009 14.8683 13.4188 15 13.7503 15Z"
              fill="#F04935"
            />
          </svg>

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
  </div>
</template>

<script>
import HamburgerMenu from "../components/Modal/HamburgerMenu.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
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
    ...mapActions("guarantedseat", ["getHeadLineApi"]),
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
    handlePageRefresh() {
      if ($nuxt.$route.name === "index") {
        window.location.reload();
      }
    },
  },
  mounted() {
    this.getHeadLineApi();
  },
  computed: {
    ...mapGetters("guarantedseat", ["getHeadLine"]),
  },
};
</script>

<style>
</style>