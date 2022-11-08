<template>
  <div class="bg-corporate font-inter">
    <div class="px-[16px] pt-[30px]">
      <a href="https://jatri.co/" target="_blank"  class="inline-block">
        <img src="@/assets/images/logo-white.svg" alt="" class="h-11 w-[89px]">
      </a>
      <div class="flex gap-x-4 items-center mt-[20px]">
        <a href="https://goo.gl/maps/7oJip3H2v1LXvQLF7" target="_blank">
          <img src="@/assets/images/google-play-badge.svg" alt="" class="h-[30px] w-[102px]">
        </a>
        <a href="https://jatri.co/" target="_blank">
          <img src="@/assets/images/website-badge.svg" alt="" class="h-[30px] w-[102px]">
        </a>
      </div>
      <div class="flex justify-between mt-[30px] text-white">
        <div class="w-1/2">
          <h2 class="text-xl font-medium text-white">Services</h2>
          <div class="flex flex-col gap-y-[14px] mt-4">
            <a href="https://jatri.co" class="text-sm font-normal text-white">Jatri Business </a>
            <a href="https://rental.jatri.co" class="text-sm font-normal text-white">Rentals</a>
          </div>
        </div>
        <div class="w-1/2">
          <h2 class="text-xl font-medium text-white">About us</h2>
          <div class="flex flex-col gap-y-[14px] mt-4">
            <a href="https://jatri.co" class="text-sm font-normal text-white">Jatri</a>
            <a href="https://jatri.co/about-us" class="text-sm font-normal text-white">About us</a>
            <a href="https://jatri.co/career" class="text-sm font-normal text-white">Our team</a>
            <a href="https://jatri.co/blog" class="text-sm font-normal text-white">Blog</a>
          </div>
        </div>
      </div>
      <div class="bg-white h-[1px] bg-opacity-50 mt-[30px]"></div>

      <div class="flex flex-col gap-y-[16px] mt-6">
        <a href="mailto:info@jatri.co" target="_blank" class="flex items-center text-white text-base gap-x-[9.67px]">
          <img src="@/assets/images/icons/supportIcon.svg" alt="" class="w-[15px] h-[15px]"/>
          <p>info@jatri.co</p>
        </a>

        <a href="tel:09642080808" target="_blank" class="flex items-center text-white text-base gap-x-[9.67px]">
          <img src="@/assets/images/icons/phoneWhiteIcon.svg" alt="" class="w-[15px] h-[15px]"/>
          <p>09642080808</p>
        </a>

        <a href="https://goo.gl/maps/7oJip3H2v1LXvQLF7" target="_blank" class="flex items-start text-white text-base gap-x-[9.67px]">
          <img src="@/assets/images/icons/mapMarkupIcon.svg" alt="" class="w-[15px] h-[15px] mt-1"/>
          <p>Road 24, House-15(2<sup>nd</sup> floor), Gulshan-02, Dhaka</p>
        </a>
      </div>

      <div class="bg-white h-[1px] bg-opacity-50 mt-6"></div>
      <div class="flex justify-center gap-x-[16.67px] items-center pt-6 pb-4">
        <nuxt-link to="/policies#terms-and-conditions" class="flex justify-start gap-x-[6.67px] items-center">
          <p class="text-white text-sm underline">Terms and Condition</p>
          <img src="@/assets/images/icons/rightArrowWhite.svg" alt="" class="w-[10.67px]">
        </nuxt-link>
        <div class="h-6 bg-white w-[1px]"></div>
        <nuxt-link to="/policies#return-and-refund-policy" class="flex justify-start gap-x-[6.67px] items-center">
          <p class="text-white text-sm underline">Return & Refund Policy</p>
          <img src="@/assets/images/icons/rightArrowWhite.svg" alt="" class="w-[10.67px]">
        </nuxt-link>
      </div>

      <div class="flex justify-center border-t border-dashed border-white border-opacity-50 pt-4">
        <nuxt-link to="/policies#privacy-policy" class="flex justify-start gap-x-[6.67px] items-center">
          <p class="text-white text-sm underline">Privacy Policy</p>
          <img src="@/assets/images/icons/rightArrowWhite.svg" alt="" class="w-[10.67px]">
        </nuxt-link>
      </div>

      <div class="bg-white h-[1px] bg-opacity-50 mt-6"></div>

      <div class="flex justify-evenly gap-x-[52px] mt-[26px] mx-auto pb-[30px]">
        <a href="https://www.facebook.com/JatriApp/" target="_blank">
          <img src="@/assets/images/icons/facebook.svg" alt="facebook" class="h-[19.88px] w-[20px]"/>
        </a>
        <a href="https://www.youtube.com/channel/UCOCwyP-pg5lJodKLvKmcWeQ" target="_blank">
          <img src="@/assets/images/icons/youtube.svg" alt="youtube" class="h-[19.88px] w-[20px]"/>
        </a>
        <a href="https://bd.linkedin.com/company/jatri-app" target="_blank">
          <img src="@/assets/images/icons/linkedin.svg" alt="linkedin" class="h-[19.88px] w-[20px]"/>
        </a>
      </div>

    </div>
  </div>
</template>

<!-- <script setup>
  const gotoOfficeAddress = () => {
    window.open(
      "https://www.google.com/maps/place/Rubaiyat/@23.7889184,90.4154882,21z/data=!4m5!3m4!1s0x3755c78b536b0123:0x5110f3412a200876!8m2!3d23.7888555!4d90.4156183",
      "_blank"
    );
  };
</script> -->
<script>
</script>
