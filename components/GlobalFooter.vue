<template>
  <footer>
    <div class="hidden lg:block">
      <img src="~/assets/images/footer/footer-top-img.png" alt="Footer img" width="100%">
    </div>
    <div class="w-full mx-auto lg:px-[60px] xl:px-[100px] 2xl:px-[200px] bg-[#f04935] py-6 lg:py-8 divide-y divide-[#F6958A] space-y-6">
      <div class="px-4 lg:px-0 flex flex-wrap gap-4 justify-between">
        <div>
          <nuxt-link to="/">
            <img src="~/assets/images/footer/footer-white-logo.svg" alt="Jatri Logo">
          </nuxt-link>
          <p class="text-sm font-normal text-white mt-3">Jatri is a digital platform to make your daily commuting better.</p>
        </div>
        <div>
          <p class="text-white text-base font-medium mb-2">Download our app</p>
          <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=" target="_blank">
            <img src="~/assets/images/footer/google-play-icon.png" alt="Google play icon">
          </a>
        </div>
      </div>
      <div class="px-4 lg:px-0 grid grid-cols-2 lg:grid-cols-4 lg:justify-between gap-4 pt-6">
        <div>
          <h4 class="text-white text-xl font-medium mb-6">About us</h4>
          <ul class="grid gap-4">
            <li>
              <nuxt-link to="/about-us" class="text-white font-normal text-base">About us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/career" class="text-white font-normal text-base">Career</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog" class="text-white font-normal text-base">Blog</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact-us" class="text-white font-normal text-base">Contact us</nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-white text-xl font-medium mb-6">Services</h4>
          <ul class="grid gap-4">
            <li>
              <a href="https://rental.jatri.co/" class="text-white text-base">Rental</a>
            </li>
            <li>
              <a href="https://ticket.jatri.co/bus" class="text-white text-base">Bus ticketing</a>
            </li>
            <li>
              <a href="https://ticket.jatri.co/launch" class="text-white text-base">Launch ticketing</a>
            </li>
          </ul>
        </div>
        <div class="mt-2 lg:mt-0">
          <h4 class="text-white text-xl font-medium mb-6">Others</h4>
          <ul class="grid gap-4">
            <li>
              <nuxt-link to="/ride-sharing-guideline" class="text-white font-normal text-base">Ride sharing guideline</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/enlistment-certificate" class="text-white font-normal text-base">Enlistment certificate</nuxt-link>
            </li>
            <li>
              <a href="https://corona.gov.bd/" target="_blank" class="text-white font-normal text-base">COVID-19 info</a>
            </li>
          </ul>
        </div>
        <div class="mt-2 lg:mt-0">
          <h4 class="text-white text-xl font-medium mb-6">Contacts</h4>
          <ul class="grid gap-4">
            <li class="flex items-center gap-2">
              <img class="w-4" src="~/assets/images/footer/question-white-icon.svg" alt="Question icon">
              <a class="text-white font-normal text-base" href="mailto:support@jatri.co">support@jatri.co</a>
            </li>
            <li class="flex items-center gap-2">
              <img class="w-4" src="~/assets/images/footer/phone-white-icon.svg" alt="Question icon">
              <a class="text-white font-normal text-base" href="tel:09642080808">09642080808</a>
            </li>
            <li class="flex items-center gap-2">
              <img class="w-4" src="~/assets/images/footer/map-white-icon.svg" alt="Map icon">
              <a class="text-white font-normal text-base" href="https://goo.gl/maps/EBDpA4TyPkzsF4mH8" target="_blank">Road 24, House 15, Gulshan-02, Dhaka 1212</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row lg:justify-between items-center gap-2 pt-6">
        <div class="px-4 lg:px-0 pt-4 lg:pt-0 flex justify-center lg:justify-start gap-2.5 order-1 lg:order-none">
          <img class="w-5" src="~/assets/images/footer/copyright-white-icon.svg" alt="">
          <p class="text-white text-sm font-medium">All rights reserved, Jatri Services Limited. 2023</p>
        </div>
        <div class="px-4 lg:px-0 pb-4 lg:pb-0 flex justify-between gap-3 xl:gap-8 text-center divide-x divide-[#F6958A] lg:divide-x-0 space-x-0 sm:space-x-4 lg:space-x-0">
          <nuxt-link to="/user/term-and-condition" class="text-white font-medium text-sm underline">Terms and condition</nuxt-link>
          <nuxt-link to="/user/refund-policy-of-jatri" class="text-white font-medium text-sm underline pl-2 sm:pl-6 lg:pl-0">Return & refund policy</nuxt-link>
          <nuxt-link to="/user/privacy-policy" class="text-white font-medium text-sm underline pl-2 sm:pl-6 lg:pl-0">Privacy policy</nuxt-link>
        </div>
        <div class="px-4 lg:px-0 flex justify-center lg:justify-end items-center gap-9 lg:gap-3 xl:gap-9 border-y border-[#F6958A] lg:border-y-0 py-4 lg:py-0 w-full lg:w-auto">
          <a class="w-8" href="https://www.facebook.com/JatriApp/" target="_blank"><img src="~/assets/images/footer/facebook-white.svg" alt="Facebook icon"></a>
          <a class="w-8" href="https://www.youtube.com/@JATRIAPP" target="_blank"><img src="~/assets/images/footer/youtube-white.svg" alt="Youtube icon"></a>
          <a class="w-8" href="https://ca.linkedin.com/company/jatri-app" target="_blank"><img src="~/assets/images/footer/linkedin-white.svg" alt="Linkedin icon"></a>
        </div>
      </div>
    </div>
  </footer>
</template>