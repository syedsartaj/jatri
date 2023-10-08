<template>
  <footer class="bg-[#f04935]">
    <div class="hidden lg:block lg:pt-8">
      <img
        src="~/assets/images/footer/footer-img.png"
        alt="Footer img"
        width="100%"
      />
    </div>

    <div
      class="w-full mx-auto lg:px-[60px] xl:px-[100px] bg-[#f04935] py-6 lg:py-8 divide-y divide-[#F6958A] space-y-6"
    >
      <div class="px-4 lg:px-0 flex flex-wrap gap-4 justify-between">
        <div>
          <a href="https://jatri.co/">
            <img
              src="~/assets/images/footer/footer-white-logo.svg"
              alt="Jatri Logo"
            />
          </a>
          <p class="text-sm font-normal text-white mt-3">
            Jatri is a digital platform to make your daily commuting better.
          </p>
        </div>
        <div>
          <p class="text-white text-base font-medium mb-2">Download our app</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl="
            target="_blank"
          >
            <img
              src="~/assets/images/footer/google-play-icon.png"
              alt="Google play icon"
            />
          </a>
        </div>
      </div>

      <div
        class="px-4 lg:px-0 grid grid-cols-2 lg:grid-cols-4 lg:justify-between gap-x-4 gap-y-6 lg:gap-4 pt-6"
      >
        <div>
          <h4 class="text-white text-xl font-medium mb-6">About us</h4>
          <ul class="grid gap-4">
            <li>
              <a
                href="https://www.jatri.co/about-us"
                class="text-white font-normal text-base"
                >About us</a
              >
            </li>
            <li>
              <a
                href="https://www.jatri.co/career"
                class="text-white font-normal text-base"
                >Career</a
              >
            </li>
            <li>
              <a
                href="https://www.jatri.co/blog"
                class="text-white font-normal text-base"
                >Blog</a
              >
            </li>
            <li>
              <a
                href="https://www.jatri.co/contact-us"
                class="text-white font-normal text-base"
                >Contact us</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white text-xl font-medium mb-6">Services</h4>
          <ul class="grid gap-4">
            <li>
              <a href="https://rental.jatri.co/" class="text-white text-base"
                >Rental</a
              >
            </li>
            <li>
              <nuxt-link to="/bus" class="text-white text-base"
                >Bus ticketing</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/launch" class="text-white text-base"
                >Launch ticketing</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-white text-xl font-medium mb-6">Others</h4>
          <ul class="grid gap-4">
            <li>
              <a
                href="https://www.jatri.co/ride-sharing-guideline"
                class="text-white font-normal text-base"
                >Ride sharing guideline</a
              >
            </li>
            <li>
              <a
                href="https://www.jatri.co/enlistment-certificate"
                class="text-white font-normal text-base"
                >Enlistment certificate</a
              >
            </li>
            <li>
              <a
                href="https://corona.gov.bd/"
                target="_blank"
                class="text-white font-normal text-base"
                >COVID-19 info</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white text-xl font-medium mb-6">Contacts</h4>
          <ul class="grid gap-4">
            <li class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99996 18.3332C5.39746 18.3332 1.66663 14.6023 1.66663 9.99984C1.66663 5.39734 5.39746 1.6665 9.99996 1.6665C14.6025 1.6665 18.3333 5.39734 18.3333 9.99984C18.3333 14.6023 14.6025 18.3332 9.99996 18.3332ZM9.16663 12.4998V14.1665H10.8333V12.4998H9.16663ZM10.8333 11.129C11.503 10.9272 12.078 10.4915 12.4534 9.90129C12.8289 9.31112 12.9799 8.60572 12.8789 7.91356C12.7779 7.2214 12.4317 6.58854 11.9033 6.13022C11.3749 5.6719 10.6994 5.41862 9.99996 5.4165C9.32567 5.41645 8.67218 5.64997 8.15062 6.07733C7.62906 6.5047 7.27163 7.09953 7.13913 7.76067L8.77413 8.08817C8.82053 7.85603 8.93189 7.64184 9.09527 7.47052C9.25864 7.2992 9.4673 7.17779 9.69698 7.12043C9.92666 7.06306 10.1679 7.0721 10.3926 7.14648C10.6174 7.22086 10.8164 7.35754 10.9665 7.5406C11.1166 7.72366 11.2116 7.94558 11.2405 8.18054C11.2694 8.4155 11.231 8.65384 11.1298 8.86782C11.0285 9.08181 10.8686 9.26264 10.6686 9.38928C10.4686 9.51592 10.2367 9.58316 9.99996 9.58317C9.77895 9.58317 9.56698 9.67097 9.4107 9.82725C9.25442 9.98353 9.16663 10.1955 9.16663 10.4165V11.6665H10.8333V11.129Z"
                  fill="white"
                />
              </svg>
              <a
                class="text-white font-normal text-base"
                href="mailto:info@jatri.co"
                >info@jatri.co</a
              >
            </li>
            <li class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5 13.6833V16.63C17.5001 16.841 17.4202 17.0441 17.2763 17.1985C17.1325 17.3528 16.9355 17.4469 16.725 17.4617C16.3608 17.4867 16.0633 17.5 15.8333 17.5C8.46917 17.5 2.5 11.5308 2.5 4.16667C2.5 3.93667 2.5125 3.63917 2.53833 3.275C2.5531 3.06454 2.64715 2.86751 2.8015 2.72367C2.95585 2.57984 3.15902 2.4999 3.37 2.5H6.31667C6.42003 2.4999 6.51975 2.53822 6.59644 2.60752C6.67313 2.67682 6.72133 2.77215 6.73167 2.875C6.75083 3.06667 6.76833 3.21917 6.785 3.335C6.95061 4.49077 7.29 5.61486 7.79167 6.66917C7.87083 6.83583 7.81917 7.035 7.66917 7.14167L5.87083 8.42667C6.97038 10.9887 9.01212 13.0305 11.5742 14.13L12.8575 12.335C12.91 12.2617 12.9865 12.2091 13.0737 12.1864C13.161 12.1637 13.2535 12.1723 13.335 12.2108C14.3892 12.7116 15.513 13.0501 16.6683 13.215C16.7842 13.2317 16.9367 13.25 17.1267 13.2683C17.2294 13.2789 17.3245 13.3271 17.3936 13.4038C17.4628 13.4805 17.501 13.5801 17.5008 13.6833H17.5Z"
                  fill="white"
                />
              </svg>
              <a class="text-white font-normal text-base" href="tel:09642080808"
                >09642080808</a
              >
            </li>
            <li class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="min-w-[20px] sm:w-auto"
              >
                <path
                  d="M15.3033 13.75L10 19.0534L4.69667 13.75C3.64779 12.7011 2.93349 11.3648 2.64411 9.90992C2.35473 8.45507 2.50326 6.94707 3.07092 5.57663C3.63858 4.20619 4.59987 3.03486 5.83324 2.21075C7.0666 1.38664 8.51665 0.946777 10 0.946777C11.4834 0.946777 12.9334 1.38664 14.1668 2.21075C15.4001 3.03486 16.3614 4.20619 16.9291 5.57663C17.4968 6.94707 17.6453 8.45507 17.3559 9.90992C17.0665 11.3648 16.3522 12.7011 15.3033 13.75ZM10 11.78C10.8841 11.78 11.7319 11.4289 12.357 10.8037C12.9821 10.1786 13.3333 9.33077 13.3333 8.44671C13.3333 7.56266 12.9821 6.71481 12.357 6.08969C11.7319 5.46457 10.8841 5.11338 10 5.11338C9.11595 5.11338 8.2681 5.46457 7.64298 6.08969C7.01786 6.71481 6.66667 7.56266 6.66667 8.44671C6.66667 9.33077 7.01786 10.1786 7.64298 10.8037C8.2681 11.4289 9.11595 11.78 10 11.78ZM10 10.1134C9.55798 10.1134 9.13405 9.93778 8.82149 9.62522C8.50893 9.31266 8.33334 8.88874 8.33334 8.44671C8.33334 8.00468 8.50893 7.58076 8.82149 7.2682C9.13405 6.95564 9.55798 6.78005 10 6.78005C10.442 6.78005 10.866 6.95564 11.1785 7.2682C11.4911 7.58076 11.6667 8.00468 11.6667 8.44671C11.6667 8.88874 11.4911 9.31266 11.1785 9.62522C10.866 9.93778 10.442 10.1134 10 10.1134Z"
                  fill="white"
                />
              </svg>
              <a
                class="text-white font-normal text-base"
                href="https://goo.gl/maps/EBDpA4TyPkzsF4mH8"
                target="_blank"
                >Road 24, House 15, Gulshan-02, Dhaka 1212</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex flex-col lg:flex-row lg:justify-between items-center gap-2 pt-6"
      >
        <div
          class="px-4 lg:px-0 pt-4 lg:pt-0 flex justify-center lg:justify-start gap-2 lg:gap-2.5 order-1 lg:order-none"
        >
          <img
            class="w-5"
            src="~/assets/images/footer/copyright-white-icon.svg"
            alt=""
          />
          <p class="text-white text-sm font-medium">
            All rights reserved, Jatri Services Limited. 2023
          </p>
        </div>

        <div
          class="w-full lg:w-1/2 xl:w-auto px-4 lg:px-0 pb-4 lg:pb-0 flex justify-around lg:justify-center text-center"
        >
          <nuxt-link
            to="/policies#terms-and-conditions"
            class="text-white font-medium text-sm underline"
            >Terms and condition</nuxt-link
          >
          <nuxt-link
            to="/policies#return-and-refund-policy"
            class="text-white font-medium text-sm underline pl-2 sm:pl-6 lg:pl-0"
            >Return & refund policy</nuxt-link
          >
          <nuxt-link
            to="/policies#privacy-policy"
            class="text-white font-medium text-sm underline pl-2 sm:pl-6 lg:pl-0"
            >Privacy policy</nuxt-link
          >
        </div>

        <div
          class="px-4 lg:px-0 flex justify-center lg:justify-end items-center gap-8 lg:gap-3 xl:gap-8 border-y border-[#F6958A] lg:border-y-0 py-6 lg:py-0 w-full lg:w-auto"
        >
          <a href="https://www.facebook.com/JatriApp/" target="_blank"
            ><img
              src="~/assets/images/footer/facebook-white.svg"
              alt="Facebook icon"
          /></a>
          <a href="https://www.youtube.com/@JATRIAPP" target="_blank"
            ><img
              src="~/assets/images/footer/youtube-white.svg"
              alt="Youtube icon"
          /></a>
          <a href="https://ca.linkedin.com/company/jatri-app" target="_blank"
            ><img
              src="~/assets/images/footer/linkedin-white.svg"
              alt="Linkedin icon"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "GlobalFooter",
};
</script>
