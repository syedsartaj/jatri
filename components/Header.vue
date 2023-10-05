<template>
  <div class="w-full flex flex-col">
    <div
      class="bg-white w-full hidden lg:flex justify-end px-4 xl:px-[100px] py-[12px]"
    >
      <div class="flex gap-x-6 h-10">
        <a
          href="tel:09642080808"
          class="border-[1px] border-[#EDEDED] text-blackPrimary rounded-full pl-4 pr-6 py-[10px] justify-between gap-x-2 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M14 10.9467V13.304C14.0001 13.4728 13.9361 13.6353 13.8211 13.7588C13.706 13.8823 13.5484 13.9575 13.38 13.9693C13.0887 13.9893 12.8507 14 12.6667 14C6.77533 14 2 9.22467 2 3.33333C2 3.14933 2.01 2.91133 2.03067 2.62C2.04248 2.45163 2.11772 2.29401 2.2412 2.17894C2.36468 2.06387 2.52722 1.99992 2.696 2H5.05333C5.13603 1.99992 5.2158 2.03057 5.27715 2.08601C5.33851 2.14145 5.37706 2.21772 5.38533 2.3C5.40067 2.45333 5.41467 2.57533 5.428 2.668C5.56049 3.59262 5.832 4.49189 6.23333 5.33533C6.29667 5.46867 6.25533 5.628 6.13533 5.71333L4.69667 6.74133C5.5763 8.79097 7.2097 10.4244 9.25933 11.304L10.286 9.868C10.328 9.80933 10.3892 9.76725 10.459 9.7491C10.5288 9.73095 10.6028 9.73787 10.668 9.76867C11.5113 10.1692 12.4104 10.4401 13.3347 10.572C13.4273 10.5853 13.5493 10.6 13.7013 10.6147C13.7835 10.6231 13.8596 10.6617 13.9149 10.7231C13.9702 10.7844 14.0008 10.8641 14.0007 10.9467H14Z"
              fill="#151414"
            />
          </svg>

          <span class="font-medium text-xs font-inter">09642080808</span>
        </a>

        <div
          class="bg-[#f7f7f7] text-blackPrimary rounded-full pl-4 pr-6 py-[10px] justify-between gap-x-2 flex cursor-pointer items-center justify-center"
          @click="setBusReserveModalOpenStatus"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M11.3334 12.9998H4.66671V13.6665C4.66671 13.8433 4.59647 14.0129 4.47145 14.1379C4.34642 14.2629 4.17685 14.3332 4.00004 14.3332H2.66671C2.4899 14.3332 2.32033 14.2629 2.1953 14.1379C2.07028 14.0129 2.00004 13.8433 2.00004 13.6665V7.6665H1.33337V4.99984H2.00004V2.99984C2.00004 2.64622 2.14052 2.30708 2.39056 2.05703C2.64061 1.80698 2.97975 1.6665 3.33337 1.6665H12.6667C13.0203 1.6665 13.3595 1.80698 13.6095 2.05703C13.8596 2.30708 14 2.64622 14 2.99984V4.99984H14.6667V7.6665H14V13.6665C14 13.8433 13.9298 14.0129 13.8048 14.1379C13.6798 14.2629 13.5102 14.3332 13.3334 14.3332H12C11.8232 14.3332 11.6537 14.2629 11.5286 14.1379C11.4036 14.0129 11.3334 13.8433 11.3334 13.6665V12.9998ZM3.33337 2.99984V7.6665H12.6667V2.99984H3.33337ZM5.00004 11.6665C5.26526 11.6665 5.51961 11.5611 5.70715 11.3736C5.89468 11.1861 6.00004 10.9317 6.00004 10.6665C6.00004 10.4013 5.89468 10.1469 5.70715 9.9594C5.51961 9.77186 5.26526 9.6665 5.00004 9.6665C4.73482 9.6665 4.48047 9.77186 4.29293 9.9594C4.1054 10.1469 4.00004 10.4013 4.00004 10.6665C4.00004 10.9317 4.1054 11.1861 4.29293 11.3736C4.48047 11.5611 4.73482 11.6665 5.00004 11.6665ZM11 11.6665C11.2653 11.6665 11.5196 11.5611 11.7071 11.3736C11.8947 11.1861 12 10.9317 12 10.6665C12 10.4013 11.8947 10.1469 11.7071 9.9594C11.5196 9.77186 11.2653 9.6665 11 9.6665C10.7348 9.6665 10.4805 9.77186 10.2929 9.9594C10.1054 10.1469 10 10.4013 10 10.6665C10 10.9317 10.1054 11.1861 10.2929 11.3736C10.4805 11.5611 10.7348 11.6665 11 11.6665Z"
              fill="#151414"
            />
          </svg>

          <span class="font-medium text-xs font-inter">Full bus reserve</span>
        </div>

        <NuxtLink
          to="/find-ticket"
          class="bg-[#FEF2F0] text-corporate rounded-full pl-4 pr-6 py-[10px] flex justify-between gap-x-2 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.00065 1.33331C11.6827 1.33331 14.6673 4.31798 14.6673 7.99998C14.6673 11.682 11.6827 14.6666 8.00065 14.6666C4.31865 14.6666 1.33398 11.682 1.33398 7.99998H2.66732C2.66732 10.9453 5.05532 13.3333 8.00065 13.3333C10.946 13.3333 13.334 10.9453 13.334 7.99998C13.334 5.05465 10.946 2.66665 8.00065 2.66665C6.35798 2.66665 4.88865 3.40931 3.91065 4.57665L5.33398 5.99998H1.33398V1.99998L2.96532 3.63065C4.18732 2.22398 5.98998 1.33331 8.00065 1.33331ZM8.66732 4.66665V7.72331L10.8293 9.88531L9.88598 10.8286L7.33398 8.27531V4.66665H8.66732Z"
              fill="#D42410"
            />
          </svg>
          <span
            class="font-medium text-xs text-center font-inter text-[#D42410]"
            >History</span
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import HamburgerMenu from "../components/Modal/HamburgerMenu.vue";
import { mapMutations, mapGetters } from "vuex";
import { handleScrollBehaviour } from "../helpers/utils";
export default {
  components: { HamburgerMenu },
  data() {
    return {
      showFullBusReserveModal: false,
    };
  },
  methods: {
    ...mapMutations("common", ["setBusReserveModalOpenStatus"]),
    handleFullReserveModal() {
      handleScrollBehaviour(this.showFullBusReserveModal);
      this.showFullBusReserveModal = !this.showFullBusReserveModal;
    },
    handlePageRefresh() {
      if ($nuxt.$route.name === "index") {
        window.location.reload();
      }
    },
  },
};
</script>

<style></style>
