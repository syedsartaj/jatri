<template>
  <div
    class="md:px-4 lg:px-[100px] pt-[30px] lg:pt-[60px] lg:pb-8 bg-corporate"
  >
    <div class="flex justify-between items-start">
      <div>
        <NuxtLink to="/"
          ><img
            @click="handlePageRefresh"
            src="@/assets/images/logo-white.svg"
            alt="logo"
            class="h-11 w-[89px]"
        /></NuxtLink>

        <div class="flex gap-x-[14px] mt-[23px] mb-[35px]">
          <a
            href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&pli=1"
            target="_blank"
          >
            <img
              src="@/assets/images/google-play-badge.svg"
              alt=""
              class="h-[30px] w-[102px]"
            />
          </a>
          <a href="https://jatri.co" target="_blank">
            <img
              src="@/assets/images/website-badge.svg"
              alt=""
              class="h-[30px] w-[106px]"
            />
          </a>
        </div>

        <div class="flex flex-col gap-y-[16px] lg:gap-y-[22px]">
          <a
            href="mailto:info@jatri.co"
            target="_blank"
            class="flex items-center text-white text-base lg:text-xl gap-x-2 lg:gap-x-[10px]"
          >
            <img
              src="@/assets/images/icons/supportIcon.svg"
              alt=""
              class="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
            />
            <p>info@jatri.co</p>
          </a>

          <a
            href="tel:09642080808"
            target="_blank"
            class="flex items-center text-white text-base lg:text-xl gap-x-2 lg:gap-x-[10px]"
          >
            <img
              src="@/assets/images/icons/phoneWhiteIcon.svg"
              alt=""
              class="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
            />
            <p>09642080808</p>
          </a>

          <a
            href="https://goo.gl/maps/X134AtkH5fVhfw538"
            target="_blank"
            class="flex items-center text-white text-base lg:text-xl gap-x-2 lg:gap-x-[10px]"
          >
            <img
              src="@/assets/images/icons/mapMarkupIcon.svg"
              alt=""
              class="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
            />
            <p>Road 24, House-15(2<sup>nd</sup> floor), Gulshan-02, Dhaka</p>
          </a>
        </div>
      </div>
      <div></div>
      <div>
        <h2 class="text-xl lg:text-2xl font-medium text-white">Services</h2>

        <div class="flex flex-col gap-y-[14px] mt-6">
          <a
            href="https://jatri.co"
            class="text-sm lg:text-base font-normal text-white"
            >Jatri Business
          </a>
          <a
            href="https://rental.jatri.co"
            class="text-sm lg:text-base font-normal text-white"
            >Rentals</a
          >
        </div>
      </div>
      <div class="">
        <h2 class="text-xl lg:text-2xl font-medium text-white">About us</h2>

        <div class="flex flex-col gap-y-[14px] mt-6 relative">
          <a
            href="https://jatri.co"
            class="text-sm lg:text-base font-normal text-white"
            >Jatri</a
          >
          <a
            href="https://jatri.co/about-us"
            class="text-sm lg:text-base font-normal text-white"
            >About us</a
          >
          <a
            href="https://jatri.co/career"
            class="text-sm lg:text-base font-normal text-white"
            >Our team</a
          >
          <a
            href="https://jatri.co/blog"
            class="text-sm lg:text-base font-normal text-white"
            >Blog</a
          >
        </div>

        <div
          class="flex justify-between gap-x-[52px] mt-[42px] absolute right-[100px] hidden lg:flex"
        >
          <a href="https://www.facebook.com/JatriApp" target="_blank">
            <img
              src="@/assets/images/icons/facebook.svg"
              alt=""
              class="w-9 h-9"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCOCwyP-pg5lJodKLvKmcWeQ"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/youtube.svg"
              alt=""
              class="w-9 h-9"
            />
          </a>
          <a href="https://bd.linkedin.com/company/jatri-app" target="_blank">
            <img
              src="@/assets/images/icons/linkedin.svg"
              alt=""
              class="w-9 h-9"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="w-full h-[1px] bg-white mt-10"></div>
    <div class="text-center flex justify-center gap-x-12 items-center pt-6">
      <nuxt-link
        to="/policies#terms-and-conditions"
        class="flex justify-start gap-x-3 items-center"
      >
        <p class="text-white text-base underline">Terms and Condition</p>
        <img
          src="@/assets/images/icons/rightArrowWhite.svg"
          alt=""
          class="w-6 h-6"
        />
      </nuxt-link>
      <div class="h-6 bg-white w-[1px]"></div>
      <nuxt-link
        to="/policies#return-and-refund-policy"
        class="flex justify-start gap-x-3 items-center"
      >
        <p class="text-white text-base underline">Return & Refund Policy</p>
        <img
          src="@/assets/images/icons/rightArrowWhite.svg"
          alt=""
          class="w-6 h-6"
        />
      </nuxt-link>
      <div class="h-6 bg-white w-[1px]"></div>
      <nuxt-link
        to="/policies#privacy-policy"
        class="flex justify-start gap-x-3 items-center"
      >
        <p class="text-white text-base underline">Privacy Policy</p>
        <img
          src="@/assets/images/icons/rightArrowWhite.svg"
          alt=""
          class="w-6 h-6"
        />
      </nuxt-link>
    </div>

    <div class="lg:hidden bg-white h-[1px] bg-opacity-50 mt-6"></div>

    <div
      class="flex justify-center items-center lg:hidden gap-x-[46px] mt-[16px] mx-auto pb-[24px]"
    >
      <a href="https://www.facebook.com/JatriApp/" target="_blank">
        <img
          src="@/assets/images/icons/facebook.svg"
          alt="facebook"
          class="h-9 w-9"
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCOCwyP-pg5lJodKLvKmcWeQ"
        target="_blank"
      >
        <img
          src="@/assets/images/icons/youtube.svg"
          alt="youtube"
          class="h-9 w-9"
        />
      </a>
      <a href="https://bd.linkedin.com/company/jatri-app" target="_blank">
        <img
          src="@/assets/images/icons/linkedin.svg"
          alt="linkedin"
          class="h-9 w-9"
        />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handlePageRefresh() {
      if ($nuxt.$route.name === "index") {
        window.location.reload();
      }
    },
  },
};
</script>
