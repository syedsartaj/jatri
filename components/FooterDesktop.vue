<template>
  <div class="px-[100px] pt-[60px] pb-8 bg-corporate">
    <div class="flex justify-between items-start">
      <div>
        <img
          src="@/assets/images/logo-white.svg"
          alt=""
          class="h-11 w-[89px]"
        />

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

        <div class="flex flex-col lg:gap-y-[22px]">
          <a
            href="mailto:info@jatri.co"
            target="_blank"
            class="flex items-center text-white text-sm leading-7 gap-x-[12.5px]"
          >
            <img
              src="@/assets/images/icons/supportIcon.svg"
              alt=""
              class="w-[25px] h-[25px]"
            />
            <p>info@jatri.co</p>
          </a>

          <a
            href="tel:09642080808"
            target="_blank"
            class="flex items-center text-white text-sm leading-7 gap-x-[12.5px]"
          >
            <img
              src="@/assets/images/icons/phoneWhiteIcon.svg"
              alt=""
              class="w-[25px] h-[25px]"
            />
            <p>09642080808</p>
          </a>

          <a
            href="https://goo.gl/maps/7oJip3H2v1LXvQLF7"
            target="_blank"
            class="flex items-center text-white text-sm leading-7 gap-x-[12.5px]"
          >
            <img
              src="@/assets/images/icons/mapMarkupIcon.svg"
              alt=""
              class="w-[25px] h-[25px]"
            />
            <p>Road 24, House-15(2<sup>nd</sup> floor), Gulshan-02, Dhaka</p>
          </a>
        </div>
      </div>
      <div></div>
      <div>
        <h2 class="text-2xl font-medium text-white leading-8">Services</h2>

        <div class="flex flex-col gap-y-[14px] mt-6">
          <a
            href="https://jatri.co"
            class="text-base leading-6 font-normal text-white"
            >Jatri Business
          </a>
          <a
            href="https://rental.jatri.co"
            class="text-base leading-6 font-normal text-white"
            >Rentals</a
          >
        </div>
      </div>
      <div class="">
        <h2 class="text-2xl font-medium text-white leading-8">About us</h2>

        <div class="flex flex-col gap-y-[14px] mt-6 relative">
          <a
            href="https://jatri.co"
            class="text-base leading-6 font-normal text-white"
            >Jatri</a
          >
          <a
            href="https://jatri.co/about-us"
            class="text-base leading-6 font-normal text-white"
            >About us</a
          >
          <a
            href="https://jatri.co/career"
            class="text-base leading-6 font-normal text-white"
            >Our team</a
          >
          <a
            href="https://jatri.co/blog"
            class="text-base leading-6 font-normal text-white"
            >Blog</a
          >
        </div>

        <div
          class="flex justify-between gap-x-[52px] mt-[42px] absolute right-[100px]"
        >
          <a href="https://www.facebook.com/JatriApp" target="_blank">
            <img
              src="@/assets/images/icons/facebook.svg"
              alt=""
              class="w-[30px] h-[29.82px]"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCOCwyP-pg5lJodKLvKmcWeQ"
            target="_blank"
          >
            <img
              src="@/assets/images/icons/youtube.svg"
              alt=""
              class="w-[30px] h-[29.82px]"
            />
          </a>
          <a href="https://bd.linkedin.com/company/jatri-app" target="_blank">
            <img
              src="@/assets/images/icons/linkedin.svg"
              alt=""
              class="w-[30px] h-[29.82px]"
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
          class="w-4"
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
          class="w-4"
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
          class="w-4"
        />
      </nuxt-link>
    </div>
  </div>
</template>
