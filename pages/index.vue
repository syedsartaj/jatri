<template>
  <div class="bg-white">

    <!-- banner section -->
    <div v-if="!isMobile" class="hidden lg:block relative homeBanner">
      <div
        class="absolute lg:top-[70px] xl:top-[80px] 2xl:top-[150px] lg:bottom-[100px] xl:bottom-[130px] 2xl:bottom-[170px] lg:right-[80px] xl:right-[100px] lg:left-[80px] xl:left-[100px] z-40">
        <div class="">
          <h2 class="lg:text-[44px] xl:text-[56px] 2xl:text-[57px] text-[#fff] font-bold leading-[64px] ">Book Your
            Journey NOW!!!</h2>
          <h4 class="mt-4 lg:text-lg xl:text-xl text-white leading-7 font-bold">Buy tickets online hassle-free</h4>
          <div class="mt-9">
            <SearchFilterForm />
          </div>
        </div>
      </div>
    </div>

      <div v-if="showStickySearchBox" class="sticky top-[70px] z-50">
        <div class="absolute lg:right-[80px] xl:right-[100px] lg:left-[80px] xl:left-[100px]">
            <SearchFilterForm/>
          </div>
      </div>



    <!-- banner section -->
    <div v-if="isMobile" class="relative block lg:hidden">
      <img src="@/assets/images/home/bannerImageMobile.jpg" alt="" class="w-full">
      <div class="absolute top-[39px] right-4 left-4">
        <h2 class="text-[26px] text-white font-bold leading-[36px]">Book Your Journey <br> NOW!!!</h2>
        <h4 class="mt-2 text-base text-white font-normal">Buy tickets online <br> hassle-free</h4>
        <div class="mt-[39px] bg-white max-w-[380px] rounded-[14px] px-4 py-[28px] shadow-lg">
          <SearchFilterFormMobile />
        </div>
      </div>
    </div>

    <!-- Offer & Promos Section Mobile -->
    <div
      class="relative pt-80 mt-10 flex justify-center w-full"
      v-if="isMobile && getGsOfferPromoImageUrl && getGsOfferPromoImageUrl.length"
    >
      <div class="h-[324px] w-full bg-[#fef2f0]">
        <div class="flex justify-between items-center pt-6 lg:pt-[56px] px-[18px] lg:px-[60px]">
          <h2 class="text-2xl lg:text-4xl lg:leading-[44px] text-blackPrimary text-center font-semibold">
            Offers & Promos</h2>

          <div class="flex justify-between gap-x-4">
            <button @click="scrollLeft"
              class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center"
              :class="slideLeft ? 'border-blackPrimary' : 'border-[#8D8D8F]'">
              <SlideLeft :fill="slideLeft ? '#151414' : '#8D8D8F'" width="8.43" height="13.79" />
            </button>
            <button @click="scrollRight"
              class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center"
              :class="slideRight ? 'border-blackPrimary' : 'border-[#8D8D8F]'">
              <SlideRight :fill="slideRight ? '#151414' : '#8D8D8F'" width="8.43" height="13.79" />
            </button>
          </div>
        </div>
          <div class="mt-10 ml-4">
            <VueSlickCarousel v-bind="settingsMobile" ref="carousel">
              <div v-for=" (offerImg, index) in getGsOfferPromoImageUrl" :key="index">
                <img :id="index" :src="imageUrl + offerImg.image" alt=""
                  class="rounded-[10px] w-[300px] h-[200px] pointer-events-none">
              </div>
            </VueSlickCarousel>
          </div>
      </div>
    </div>

    <!-- Offer & Promos Section -->
    <div class="pt-80 p-4 lg:mt-0 lg:p-0 lg:pb-0" v-if="!getGsOfferPromoImageUrl || !getGsOfferPromoImageUrl.length"></div>
    <div class="pt-80 p-4 lg:mt-0 lg:p-[100px] lg:pb-0 flex justify-center w-full"
      v-if="!isMobile && getGsOfferPromoImageUrl && getGsOfferPromoImageUrl.length">
      <div class="border border-[#c8c8c8] rounded-[30px] overflow-hidden md:w-full h-[264px] lg:h-[464px]">
        <div class="flex justify-between items-center pt-6 lg:pt-[56px] px-[18px] lg:px-[60px]">
          <h2 class="text-2xl lg:text-4xl lg:leading-[44px] text-blackPrimary text-center font-medium lg:font-semibold">
            Offers & Promos</h2>

          <div class="flex justify-between gap-x-4">
            <button @click="scrollLeft"
              class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center"
              :class="slideLeft ? 'border-blackPrimary' : 'border-[#8D8D8F]'">
              <SlideLeft :fill="slideLeft ? '#151414' : '#8D8D8F'" width="8.43" height="13.79" />
            </button>
            <button @click="scrollRight"
              class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center"
              :class="slideRight ? 'border-blackPrimary' : 'border-[#8D8D8F]'">
              <SlideRight :fill="slideRight ? '#151414' : '#8D8D8F'" width="8.43" height="13.79" />
            </button>
          </div>
        </div>
          <div class="mt-5 lg:mt-[42px] p-2">
            <VueSlickCarousel v-bind="settings" ref="carousel">
              <div v-for=" (offerImg, index) in getGsOfferPromoImageUrl" :key="index">
                <img :id="index" :src="imageUrl + offerImg.image" alt=""
                  class="rounded-2xl w-[280px] lg:w-[350px] xl:w-[460px] h-[164px] lg:h-[200px] xl:h-[260px] pointer-events-none">
                <!-- {{ readImageUrl(offerImg.image)}} -->
              </div>
            </VueSlickCarousel>
          </div>

      </div>
    </div>

    <!-- Booking ticket section -->
    <div class="relative mx-4 lg:mx-0 lg:px-0 lg:mt-[100px]">
      <img v-if="!isMobile" src="@/assets/images/home/buyTicketBannerWeb.png" alt="" class="hidden lg:block w-full">
      <img v-if="isMobile" src="@/assets/images/home/buyTicketBannerMobile.png" alt="" class="block lg:hidden w-full">
      <div class="w-[296px] lg:w-[515px] absolute top-10 lg:top-[130px] left-6 lg:left-[100px] z-40">
        <div>
          <h2
            class="text-[28px] lg:text-[45px] leading-[36px] lg:leading-[52px] text-blackPrimary font-medium lg:font-semibold">
            Booking ticket just got more easier and fun with Jatri</h2>
          <button @click="handleHowToBuyModal"
            class="bg-corporate text-white px-6 lg:px-8 py-[10px] lg:py-5 text-sm lg:text-xl font-semibold mt-4 lg:mt-8 rounded-full">How
            to buy ticket</button>
        </div>
      </div>
    </div>

    <!-- why choose section -->
    <div class="lg:pt-20  mt-[60px] px-4 lg:px-[100px]">

      <div class="bg-bgShade3 rounded-[30px] pt-[60px] px-4 lg:px-[72px] pb-20">
        <div>
          <div class="">
            <h2 class="text-2xl lg:text-4xl text-blackPrimary text-center font-semibold lg:leading-[44px]">Why Choose
              Jatri</h2>
            <img src="@/assets/images/home/curveBorder.svg" alt="" class="w-[203px] lg:w-[298px] block mx-auto">
          </div>

          <div class="mt-[60px] flex flex-wrap xl:flex-nowrap justify-between lg:gap-x-[95px]">
            <div class="lg:p-4 lg:w-[340px]">
              <img src="@/assets/images/home/two-tickets.png" alt="" class="w-[66px] block max-sm:m-auto">
              <h2 class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8">Ease on the move</h2>
              <p class="text-sm lg:text-base text-blackSecondery lg:leading-6 font-normal mt-4">Tickets are available on
                the go through our platform, no more queues!</p>
            </div>
            <div class="lg:p-4 lg:w-[340px] mt-8 lg:mt-0">
              <img src="@/assets/images/home/red-bus.png" alt="" class="w-[66px] block max-sm:m-auto">
              <h2 class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8">Promise of convenient
                travel</h2>
              <p class="text-sm lg:text-base text-blackSecondery lg:leading-6 font-normal mt-4">We have an excellent
                system of taking service based on preference, as there is ticketing service for multiple routes via
                different categories of buses.</p>
            </div>
            <div class="lg:p-4 lg:w-[340px] mt-8 lg:mt-0">
              <img src="@/assets/images/home/security-badge.png" alt="" class="w-[66px] block max-sm:m-auto">
              <h2 class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8">Reliability assured</h2>
              <p class="text-sm lg:text-base text-blackSecondery lg:leading-6 font-normal mt-4">Whether you are
                travelling for work or leisure, book your tickets through us and keep all your worries away.</p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- Available Bus operatior Section -->
    <div class="p-4 mt-[60px] lg:mt-0 lg:p-[100px] pt-0 flex justify-center">
      <div class="busOperatorbg rounded-[30px] px-4 lg:px-[60px] py-7 lg:py-10 w-full">
        <p class="text-center font-normal text-sm lg:text-xl text-blackPrimary">Multiple options to choose</p>
        <h2 class="text-center font-medium lg:font-semibold text-2xl lg:text-4xl lg:leading-[44px] text-[#1E88E5] mt-2">
          Available Bus Operators</h2>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-[72px] gap-y-6 lg:gap-y-4 mt-8">
          <NuxtLink v-for=" (bus, index) in busOperators" :key="index" :to="bus.link" class="flex justify-start gap-x-[10px] w-full">
              <img src="@/assets/images/home/availableRoutesIcon.svg" alt="" class="w-5 h-5">
              <p class="text-xs lg:text-base lg:leading-6 text-blackPrimary font-bold">{{ bus.name }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- most popular route section -->
    <div class=" mt-[60px] lg:mt-0 bg-successLight py-10 lg:py-[60px] px-4 lg:px-[100px]">
      <div class="lg:flex justify-start gap-x-[103px]">
        <div class="w-full lg:w-1/2 flex justify-between items-center lg:block">
          <img src="@/assets/images/home/most-popular-route.svg" alt=""
            class="order-last lg:order-first w-16 lg:w-[140px]">
          <h2
            class="text-2xl lg:text-[45px] lg:leading-[52px] text-blackPrimary font-medium lg:font-semibold lg:mt-8 order-first lg:order-last">
            Our most <br> popular routes</h2>
        </div>
        <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <NuxtLink to="/popular-routes?from=Dhaka&to=Rangpur" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Rangpur</p>
            </NuxtLink>
            <NuxtLink to="/popular-routes?from=Dhaka&to=Barishal" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Barishal</p>
            </NuxtLink>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <NuxtLink to="/popular-routes?from=Dhaka&to=Kuakata" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Kuakata</p>
            </NuxtLink>
            <NuxtLink to="/popular-routes?from=Dhaka&to=Noagaon" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Noagaon</p>
            </NuxtLink>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <NuxtLink to="/popular-routes?from=Dhaka&to=Bogura" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Bogura</p>
            </NuxtLink>
            <NuxtLink to="/popular-routes?from=Dhaka&to=Sunamganj" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Sunamganj</p>
            </NuxtLink>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB]">
            <NuxtLink to="#" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Sylhet</p>
            </NuxtLink>
            <NuxtLink to="#" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Chittagong</p>
            </NuxtLink>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <NuxtLink to="#" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Coxs Bazar</p>
            </NuxtLink>
            <NuxtLink to="/popular-routes?from=Dhaka&to=Siliguri" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Siliguri</p>
            </NuxtLink>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <NuxtLink to="#" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Khulna to Barishal</p>
            </NuxtLink>
            <NuxtLink to="#" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Khulna to Kuakata</p>
            </NuxtLink>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <NuxtLink to="#" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Sathkhira to Kuakata</p>
            </NuxtLink>
            <NuxtLink to="#" class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Sathkhira to Barishal</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Help Section -->
    <div class="p-4 lg:p-[100px]">
      <div class="flex flex-wrap justify-between items-start gap-x-8">
        <div>
          <img src="@/assets/images/home/helpImage.svg" alt="">
          <h2
            class="text-[32px] leading-10 lg:text-[45px] lg:leading-[52px] text-blackPrimary font-medium lg:font-semibold mt-6 lg:mt-8">
            How can we help you?</h2>
          <p class="text-blackLight text-sm leading-5 font-normal mt-4">Still need help? <span
              class="text-corporate underline"><a href="https://jatri.co/contact-us" target="_blank" class="">Contact
                Us</a> <img src="@/assets/images/icons/contact-rightArrow.svg" alt=""
                class="inline-block w-[5.19px] ml-[5.48px]"></span></p>
        </div>
        <div class="w-full lg:w-[710px] mt-6 lg:mt-0">
          <Accordion v-for="(data, i) in accordionData" :accordion="data" :index="i" :key="i" :open="data.open"
            @toggleOpen="toggleOpen" />
        </div>
      </div>
    </div>

    <div v-if="howToBuyModalStatus">
      <HowToBuyModal :close="handleHowToBuyModal" />
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Cookies from "js-cookie";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: 'ssr' })
  },
  data() {
    return {
      howToBuyModalStatus: false,
      slideLeft: false,
      slideRight: false,
      fromOption: "",
      passengerCount: "",
      activeTabIndex: 0,
      offerImg: '',
      isMobile: false,
      vertical: false,
      imageUrl: '',
      showStickySearchBox: false,
      busOperators: [
        {
          name: "Euro Coach",
          link: "/bus-operator?name=euro-coach",
        },
        {
          name: "SB Paribahan",
          link: "/bus-operator?name=sb-paribahan",
        },
        {
          name: "Greenline Paribahan",
          link: "/bus-operator?name=greenline",
        },
        {
          name: "Pingky Paribahan",
          link: "/bus-operator?name=pingky-paribahan",
        },
        {
          name: "Lucky Express",
          link: "#",
        },
        {
          name: "Mimjaal Paribahan",
          link: "#",
        },
        {
          name: "Shah Fateh Ali",
          link: "/bus-operator?name=shah-fateh-ali",
        },
        {
          name: "Jubayer Paribahan",
          link: "#",
        },
        {
          name: "Saintmartin Deep",
          link: "#",
        },
        {
          name: "Romer Paribahan",
          link: "#",
        },
        {
          name: "Sheba line",
          link: "#",
        },
        {
          name: "Zenin Service",
          link: "#",
        },
        {
          name: "GS Travels",
          link: "#",
        },
        {
          name: "Islam Paribahan",
          link: "#",
        },
        {
          name: "Jamuna line",
          link: "#",
        },
        {
          name: "Saintmartin Sheba PVT. Ltd.",
          link: "#",
        },
        {
          name: "Hamim Exclusive",
          link: "#",
        },
        {
          name: "Econo Service",
          link: "#",
        },
        {
          name: "KR Enterprise",
          link: "#",
        },
        {
          name: "Masum Classic",
          link: "#",
        },
        {
          name: "Hanie Enterprise",
          link: "#",
        },
        {
          name: "Ema Paribahan",
          link: "#",
        },
        {
          name: "Habib Paribahan",
          link: "/bus-operator?name=habib-paribahan",
        },
        {
          name: "Saintmartin BD Express",
          link: "/bus-operator?name=saintmartin-bd-express",
        },
        {
          name: "Many More to Come",
          link: "#",
        },
      ],
        settingsMobile: {
        "arrows": false,
        "dots": false,
        "autoplay": true,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplaySpeed": 5000,
        "speed": 2000,
        "rows": 1,
      },
      settings: {
        "arrows": false,
        "dots": false,
        "autoplay": true,
        "centerMode": true,
        "infinite": true,
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "autoplaySpeed": 5000,
        "speed": 2000,
        "rows": 1,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 1,
              "initialSlide": 1
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "initialSlide": 1
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      },
      accordionData: [
        {
          heading: "Payment details- bKash, Nagad, & Bank Cards",
          details: `The Payment can be done through Nagad, bKash, visa cards or master cards.
                      <ul class='list-disc ml-5'>
                        <li class='mt-2'>If a customer has sent payment to Jatri.co but the e-ticket is not confirmed or generated, i.e., there is no transaction ID or tickets booked/reserved by the mobile number of the mobile payment account, he can claim for refund in the similar procedure as above, without the ticket number. Such refunds will be given 7 business days (excluding Friday and Saturday) AFTER the event/trip has taken place. This is applicable for eid times also.</li>
                        <li class='mt-2'>If a customer has made an excess or less payment for a ticket accidentally, he is eligible for refund but he must claim for the refund within 24 hours of making the payment.</li>
                        <li class='mt-2'>If a customer has reserved a ticket and made a payment, however, for some reason, the ticket purchase process was not successful and a ticket was not issued, a customer can claim refund as per the policy above. Ticket number is not required, but mobile # used for booking and other information are required. For refunds through mobile payment gateways (e.g. bKash), a fee is charged by the mobile payment company which will be deducted from the eligible refund amount. Similar conditions will apply if the bank charges any such additional fee.</li>
                        <li class='mt-2'>In case of card payments, the last 4 digits of the card type of card is also needed. It is to be noted that for reasons beyond Jatri.co’s control, card payment may sometimes require time to post on the payment gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after it has been posted on the said panel.</li>
                        <li class='mt-2'>In case of BKash payments, a full mobile number will be required. It is to be noted that for reasons beyond Jatri.co’s control, payment may require some time to post on the payment gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after it has been posted on the said panel.</li>
                      </ul>
                    `,
          open: false
        },
        {
          heading: "How to buy Tickets via website?",
          details: `The easiest way to buy bus tickets online through Jatri is at your door now. 
                      <ul class='list-disc ml-5'>
                        <li class='mt-2'>First, you have to go the Jatri website: <a href='https://ticket.jatri.co/' class='text-blue-500 underline'>https://ticket.jatri.co/</a></li>
                        <li class='mt-2'>Secondly, you will have to select your location, where to go, which kind of bus you need and the date of your journey.</li>
                        <li class='mt-2'>Then click the <span class='text-blackPrimary font-bold'>“book now”</span> option and provide all the information.</li>
                        <li class='mt-2'>After making the payment process you will get your tickets.</li>
                      </ul>
                    `,
          open: false
        },
        {
          heading: "Customer Service",
          details: `The customer service team of Jatri services Limited is open from 7am to 11:59pm. For any kind of help or queries or questions, you can call the customer service number 09642080808.`,
          open: false
        },
        {
          heading: "Ticket Cancellation Procedures'",
          details: `If you want to make a cancellation to your booking ticket, you must follow some rules: 
                      <ul class='list-decimal ml-5'>
                        <li class='mt-2'>First, you need to go to the search option. You need to add your phone number to search for your ticket.</li>
                        <li class='mt-2'>Click at the cancellation option. Your request will be submitted to our team.</li>
                        <li class='mt-2'>Your money will be refunded with following our refund & cancellation policy.</li>
                      </ul>
                      <br>There are few cancellation policies: <br>
                      <ul class='list-disc ml-5'>
                        <li class='mt-2'><span class='text-blackPrimary font-bold'>Auto cancellation</span> will happen if the customer fails to report at the reporting station before the departure time.</li>
                        <li class='mt-2'>If the customer <span class='text-blackPrimary font-bold'>fails to pay</span> the full amount that mentioned in the screen will not get the activated tickets.</li>
                        <li class='mt-2'>To be eligible for refund, customers need to cancel the ticket from jatri.co before the applicable time before the departure. And must report the cancelation to the support center (i.e Call 09642080808 or email to support@jatri.co) of Jatri.co</li>
                        <li class='mt-2'>Only <span class='text-blackPrimary font-bold'>during Eid time</span> , customers are eligible for refund ONLY if the operator cancels the trip and cannot provide an alternative arrangement.<span class='text-blackPrimary font-bold'> (Note:</span> Terms and conditions of refund policy might update or change from time to time without any notice)</li>
                        <li class='mt-2'><span class='text-blackPrimary font-bold'>For mobile payments</span>, it is the responsibility of the customer to input transaction ID (if applicable), PIN, OTP properly within time to confirm his ticket by himself.</li>
                        <li class='mt-2'>Jatri.co sometimes does the verification for the customer as a courtesy, but it is not jatri.co’s responsibility or service promise.Jatri.co sometimes does the verification for the customer as a courtesy, but it is not jatri.co’s responsibility or service promise.</li>
                        <li class='mt-2'>Tickets will be automatically canceled if the customer does not confirm payment within 30 minutes.</li>
                        <li class='mt-2'>For mobile payments customers must complete payment and also verify transactions within this stipulated time.</li>
                        <li class='mt-2'>During Eid sales month, Jatri.co will not do any verification on behalf of the customers.</li>
                      </ul>
                    `,
          open: false
        },

      ]
    }
  },
  components: { VueSlickCarousel },
  async asyncData({ store }) {
    await store.dispatch("guarantedseat/getCitiesList")
    await store.dispatch("guarantedseat/getOfferPromoImagesUrlList")
    await store.dispatch("guarantedseat/readOfferPromoImageUrl")
  },

  mounted() {
    this.onResize()
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.onResize)
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL
  },
  unmount(){
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    ...mapGetters("guarantedseat", ["getGsLoading", "getGsOfferPromoImageUrl"]),
  },
  methods: {
    toggleOpen: function (index) {
      this.accordionData = this.accordionData.map((accordion, i) => {
        if (index === i) {
          accordion.open = !accordion.open;
        } else {
          accordion.open = false;
        }
        return accordion;
      });
    },
    ...mapActions("guarantedseat", [
      "getPbAccessTokenAction",
      "getCitiesList",
      "getOfferPromoImagesUrlList",
      "readOfferPromoImageUrl",
      "successTicketByMailAction",
    ]),

    handleHowToBuyModal() {
      this.howToBuyModalStatus = !this.howToBuyModalStatus
    },

    async readImageUrl(url, index) {
      const data = await this.readOfferPromoImageUrl(url)
      const base = Buffer.from(data).toString('base64')
      return document.getElementById(index).src = "data:image/png;base64," + base;
    },

    scrollLeft() {
      this.$refs.carousel.prev()
      this.slideLeft = true;
      this.slideRight = false;
    },
    scrollRight() {
      this.$refs.carousel.next()
      this.slideRight = true;
      this.slideLeft = false;
    },
    onResize() {
      this.isMobile = window.innerWidth < 1024
    },
    handleScroll() {
      this.handleShowStickyBanner();
    },
    handleShowStickyBanner() {
      if (!this.isMobile) {
        const innerWidth = window.innerWidth;
        const pageYOffset = window.pageYOffset;
        if (innerWidth >= 1750) {
          this.showStickySearchBox = pageYOffset >= 600;
        } else if (innerWidth >= 1536) {
          this.showStickySearchBox = pageYOffset >= 550;
        } else if (innerWidth >= 1280) {
          this.showStickySearchBox = pageYOffset >= 450;
        } else if (innerWidth >= 992) {
          this.showStickySearchBox = pageYOffset >= 400;
        }
        else {
            this.showStickySearchBox = false;
        }
      }
    },
  }
}
</script>

<style>
.homeBanner {
  background-image: url('../assets/images/home/bannerImageWeb.jpg');
  background-size: 100% 100%;
  height: 400px;
}

@media only screen and (min-width: 992px) {
  .homeBanner {
    height: 400px;
  }
}

/* @media only screen and (min-width: 1024px){
  .homeBanner {
    height: 400px;
  }
} */

@media only screen and (min-width: 1280px) {
  .homeBanner {
    height: 450px;
  }
}

@media only screen and (min-width: 1536px) {
  .homeBanner {
    height: 550px;
  }
}

@media only screen and (min-width: 1750px) {
  .homeBanner {
    height: 600px;
  }
}

.busOperatorbg {
  background-image: linear-gradient(102deg, #CFE6F9 12.78%, #E2FAFD 98.9%) !important;
  height: 100%;
}

.scroll-parent {
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

.scroll-element {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0%;
  top: 0%;
}

.primary {
  animation: primary 10s linear infinite;
}

.secondary {
  animation: secondary 10s linear infinite;
}

.slick-slide {
  margin: 0 8px;
  width: auto !important;
}

@media screen and (min-width:992px) {
  .slick-slide {
    margin: 0 24px;
  }
}

@keyframes primary {
  from {
    left: 0%;
  }

  to {
    left: -100%;
  }
}

@keyframes secondary {
  from {
    left: 100%;
  }

  to {
    left: 0%;
  }
}
</style>
