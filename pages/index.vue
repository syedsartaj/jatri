<template>
  <div class="bg-white">
    <!-- banner section -->
    <div class="hidden lg:block relative homeBanner">
      <div
        class="absolute lg:top-[70px] xl:top-[80px] 2xl:top-[150px] lg:bottom-[100px] xl:bottom-[130px] 2xl:bottom-[170px] lg:right-[80px] xl:right-[100px] lg:left-[80px] xl:left-[100px] z-40"
      >
        <div class="">
          <h2
            class="lg:text-[44px] xl:text-[56px] 2xl:text-[57px] text-[#fff] font-bold leading-[64px]"
          >
            Ticketing made easy!
          </h2>
          <h4 class="mt-4 lg:text-lg xl:text-xl text-white leading-7 font-bold">
            Buy tickets online hassle-free.
          </h4>
          <div class="mt-9">
            <SearchFilterForm />
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showStickySearchBox"
      :class="
        getHeadLine?.length && getHeadLine[0].headline
          ? 'top-[130px]'
          : 'top-[70px]'
      "
      class="sticky z-50 hidden lg:block"
    >
      <div
        class="absolute lg:right-[80px] xl:right-[100px] lg:left-[80px] xl:left-[100px]"
      >
        <SearchFilterForm />
      </div>
    </div>

    <!-- banner section mobile-->
    <div class="relative block lg:hidden">
      <img
        src="@/assets/images/home/bannerImageMobile.jpg"
        alt=""
        class="w-full"
      />
      <div class="absolute top-[39px] right-4 left-4">
        <h2 class="text-[26px] text-white font-bold leading-[36px]">
          Ticketing made <br />
          easy!
        </h2>
        <h4 class="mt-2 text-base text-white font-normal">
          Buy tickets online <br />
          hassle-free
        </h4>
        <div
          class="mt-[39px] bg-white max-w-[380px] rounded-[14px] px-4 py-[28px] shadow-lg"
        >
          <SearchFilterFormMobile />
        </div>
      </div>
    </div>

    <div
      class="pt-80 mt-10 flex justify-center w-full lg:hidden"
      v-if="!(getOfferImages && getOfferImages.length)"
    ></div>

    <!-- Offer & Promos Section Mobile -->
    <div
      class="pt-80 mt-10 flex justify-center w-full lg:hidden"
      v-if="getOfferImages && getOfferImages.length"
    >
      <div class="h-[324px] w-full bg-[#fef2f0]">
        <div
          class="flex justify-between items-center pt-6 lg:pt-[56px] px-[18px] lg:px-[60px]"
        >
          <h2
            class="text-2xl lg:text-4xl lg:leading-[44px] text-blackPrimary text-center font-semibold"
          >
            Offers & Promos
          </h2>

          <div class="flex justify-between gap-x-4">
            <button
              @click="prevSlide('mobile')"
              class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center"
              :class="slideLeft ? 'border-blackPrimary' : 'border-[#8D8D8F]'"
            >
              <SlideLeft
                :fill="slideLeft ? '#151414' : '#8D8D8F'"
                width="8.43"
                height="13.79"
              />
            </button>
            <button
              @click="nextSlide('mobile')"
              class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center"
              :class="slideRight ? 'border-blackPrimary' : 'border-[#8D8D8F]'"
            >
              <SlideRight
                :fill="slideRight ? '#151414' : '#8D8D8F'"
                width="8.43"
                height="13.79"
              />
            </button>
          </div>
        </div>
        <div class="mt-10 ml-4 w-full h-[200px] overflow-hidden">
          <hooper ref="hooperSlideMobile" :settings="hooperSettingsMobile">
            <slide v-for="(offerImg, index) in getOfferImages" :key="index">
              <img
                :id="index"
                :src="offerImg"
                alt=""
                class="rounded-[10px] w-[300px] h-[200px]"
              />
            </slide>
          </hooper>
        </div>
      </div>
    </div>

    <!-- Offer & Promos Section -->

    <div
      class="pt-80 p-4 lg:mt-0 lg:p-[100px] lg:pb-0 justify-center w-full hidden lg:flex"
      v-if="getOfferImages && getOfferImages.length"
    >
      <div
        class="border border-[#c8c8c8] rounded-[30px] overflow-hidden md:w-full h-auto xl:h-[464px]"
      >
        <div
          class="flex justify-between items-center pt-6 lg:pt-[56px] px-[18px] lg:px-[60px]"
        >
          <h2
            class="text-2xl lg:text-4xl lg:leading-[44px] text-blackPrimary text-center font-medium lg:font-semibold"
          >
            Offers & Promos
          </h2>

          <div class="flex justify-between gap-x-4">
            <button
              @click="prevSlide('large')"
              class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center"
              :class="slideLeft ? 'border-blackPrimary' : 'border-[#8D8D8F]'"
            >
              <SlideLeft
                :fill="slideLeft ? '#151414' : '#8D8D8F'"
                width="8.43"
                height="13.79"
              />
            </button>
            <button
              @click="nextSlide('large')"
              class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center"
              :class="slideRight ? 'border-blackPrimary' : 'border-[#8D8D8F]'"
            >
              <SlideRight
                :fill="slideRight ? '#151414' : '#8D8D8F'"
                width="8.43"
                height="13.79"
              />
            </button>
          </div>
        </div>
        <div class="mt-5 lg:mt-[42px] p-2 h-[260px]">
          <hooper ref="hooperSlide" :settings="hooperSettings">
            <slide v-for="(offerImg, index) in getOfferImages" :key="index">
              <img
                :id="index"
                :src="offerImg"
                alt=""
                class="rounded-2xl w-[280px] lg:w-[350px] xl:w-[460px] h-[164px] lg:h-[200px] xl:h-[260px] pointer-events-none"
              />
            </slide>
          </hooper>
        </div>
      </div>
    </div>

    <EasyStepSection :handleOnClick="handleHowToBuyModal" />

    <!-- why choose section -->
    <div class="bg-bgShade3 py-[60px] px-4 lg:px-[100px] mt-10 md:mt-[100px]">
      <div>
        <div class="">
          <h2
            class="text-2xl lg:text-4xl text-blackPrimary text-center font-semibold lg:leading-[44px]"
          >
            Why Choose Jatri
          </h2>
          <img
            src="@/assets/images/home/curveBorder.svg"
            alt=""
            class="w-[203px] lg:w-[298px] block mx-auto"
          />
        </div>

        <div
          class="mt-[60px] flex flex-wrap xl:flex-nowrap justify-between lg:gap-x-[32px]"
        >
          <div class="lg:p-4 lg:w-[392px]">
            <img
              src="@/assets/images/home/two-tickets.png"
              alt=""
              class="w-[66px] block max-sm:m-auto"
            />
            <h2
              class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8"
            >
              Ease on the move
            </h2>
            <p
              class="text-sm lg:text-base text-blackSecondery lg:leading-6 font-normal mt-4"
            >
              Tickets are available on the go through our platform, no more
              queues!
            </p>
          </div>
          <div class="lg:p-4 lg:w-[392px] mt-8 lg:mt-0">
            <img
              src="@/assets/images/home/red-bus.png"
              alt=""
              class="w-[66px] block max-sm:m-auto"
            />
            <h2
              class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8"
            >
              Promise of convenient travel
            </h2>
            <p
              class="text-sm lg:text-base text-blackSecondery lg:leading-6 font-normal mt-4"
            >
              We have an excellent system of taking service based on preference,
              as there is ticketing service for multiple routes via different
              categories of buses.
            </p>
          </div>
          <div class="lg:p-4 lg:w-[392px] mt-8 lg:mt-0">
            <img
              src="@/assets/images/home/security-badge.png"
              alt=""
              class="w-[66px] block max-sm:m-auto"
            />
            <h2
              class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8"
            >
              Reliability assured
            </h2>
            <p
              class="text-sm lg:text-base text-blackSecondery lg:leading-6 font-normal mt-4"
            >
              Whether you are travelling for work or leisure, book your tickets
              through us and keep all your worries away.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Available Bus operatior Section -->
    <div class="px-4 py-10 lg:p-[100px]" v-if="getOperatorListData.length">
      <p class="text-center font-normal text-sm lg:text-xl text-blackPrimary">
        Multiple options to choose
      </p>
      <h2
        class="text-center font-medium lg:font-semibold text-2xl lg:text-4xl lg:leading-[44px] text-[#1E88E5] mt-2"
      >
        Available Bus Operators
      </h2>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        <OperatorListItem
          v-for="(operator, index) in getOperatorListData"
          :operator="operator"
          :key="index"
          :isLastItem="index === getOperatorListData.length - 1"
        />
      </div>
    </div>

    <!-- most popular route section -->
    <div
      class="lg:mt-0 bg-successLight lg:py-10 lg:py-[60px] px-4 lg:px-[100px] flex justify-center"
    >
      <div class="lg:px-4 lg:px-[60px] py-10 w-full">
        <div class="w-full flex items-center justify-center">
          <img
            src="@/assets/images/home/route.svg"
            alt=""
            class="w-16 h-16 lg:w-22 lg:h-22"
          />
        </div>
        <h2
          class="text-2xl lg:text-[45px] lg:leading-[52px] text-blackPrimary font-medium lg:font-semibold order-first lg:order-last text-center"
        >
          Our most popular routes
        </h2>

        <div class="grid grid-cols-2 lg:grid-cols-3 mt-8">
          <RouteListItem
            v-for="(route, index) in getPopularRouteListData"
            :route="route"
            :key="index"
          />
        </div>
      </div>
    </div>

    <!-- Our most recent initiatives -->

    <Blog />

    <!-- Help Section -->
    <div class="p-4 lg:p-[100px]">
      <div class="flex flex-wrap justify-between items-start gap-x-8">
        <div>
          <img src="@/assets/images/home/helpImage.svg" alt="" />
          <h2
            class="text-[32px] leading-10 lg:text-[45px] lg:leading-[52px] text-blackPrimary font-medium mt-6 lg:mt-8"
          >
            How can we help you?
          </h2>
          <p class="text-blackLight text-sm leading-5 font-normal mt-4">
            Still need help?
            <span class="text-corporate underline ml-[6px]"
              ><a href="https://jatri.co/contact-us" target="_blank" class=""
                >Contact Us</a
              >
              <img
                src="@/assets/images/icons/contact-rightArrow.svg"
                alt=""
                class="inline-block w-[5.19px] ml-[5.48px]"
            /></span>
          </p>
        </div>
        <div class="w-full lg:w-[710px] mt-6 lg:mt-0">
          <Accordion
            v-for="(data, i) in accordionData"
            :accordion="data"
            :index="i"
            :key="i"
            :open="data.open"
            @toggleOpen="toggleOpen"
          />
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
import * as apis from "../helpers/apis";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  data() {
    return {
      howToBuyModalStatus: false,
      slideLeft: false,
      slideRight: false,
      fromOption: "",
      passengerCount: "",
      activeTabIndex: 0,
      offerImg: "",
      isMobile: false,
      vertical: false,
      imageUrl: "",
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
          link: "/bus-operator?name=lucky-express",
        },
        {
          name: "Mimzal Paribahan",
          link: "/bus-operator?name=mimzal-paribahan",
        },
        {
          name: "Jamuna Line Paribahan",
          link: "/bus-operator?name=jamuna-line-paribahan",
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
          link: "/bus-operator?name=saintmartin-deep",
        },
        {
          name: "Romar Paribahan",
          link: "/bus-operator?name=romar-paribahan",
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
          link: "/bus-operator?name=econo-service",
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
          link: "/bus-operator?name=hanie-enterprise",
        },
        {
          name: "London Express",
          link: "/bus-operator?name=london-express",
        },
        {
          name: "Ema Paribahan",
          link: "/bus-operator?name=ema-paribahan",
        },
        {
          name: "Shibchar Star Deluxe",
          link: "/bus-operator?name=shibchar-star-deluxe",
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
          name: "Khulna Express",
          link: "/bus-operator?name=khulna-express",
        },
        {
          name: "Meghna Travels",
          link: "/bus-operator?name=meghna-travels",
        },
        {
          name: "Jeddah Express",
          link: "/bus-operator?name=jeddah-express",
        },
        {
          name: "TR Travels Classic",
          link: "/bus-operator?name=tr-travels-classic",
        },
        {
          name: "New Dhaka Express",
          link: "/bus-operator?name=new-dhaka-express",
        },
        {
          name: "Many more to come...",
          link: "#",
        },
      ],
      popularRoutes: [
        {
          name: "Dhaka to Rangpur",
          link: "/popular-routes?from=Dhaka&to=Rangpur",
        },
        {
          name: "Dhaka to Barishal",
          link: "/popular-routes?from=Dhaka&to=Barishal",
        },
        {
          name: "Dhaka to Kuakata",
          link: "/popular-routes?from=Dhaka&to=Kuakata",
        },
        {
          name: "Dhaka to Noagaon",
          link: "/popular-routes?from=Dhaka&to=Noagaon",
        },
        {
          name: "Dhaka to Bogura",
          link: "/popular-routes?from=Dhaka&to=Bogura",
        },
        {
          name: "Dhaka to Sunamganj",
          link: "/popular-routes?from=Dhaka&to=Sunamganj",
        },
        {
          name: "Dhaka to Sylhet",
          link: "#",
        },
        {
          name: "Dhaka to Chittagong",
          link: "#",
        },
        {
          name: "Dhaka to Coxs Bazar",
          link: "#",
        },
        {
          name: "Khulna to Barishal",
          link: "#",
        },
        {
          name: "Khulna to Kuakata",
          link: "#",
        },
        {
          name: "Sathkhira to Kuakata",
          link: "#",
        },
        {
          name: "Sathkhira to Barishal",
          link: "#",
        },
      ],
      hooperSettings: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 3000,
        transition: 2000,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 5,
        breakpoints: {
          2300: {
            itemsToShow: 4.2,
          },
          2100: {
            itemsToShow: 4,
          },
          1900: {
            itemsToShow: 3.5,
          },
          1700: {
            itemsToShow: 3,
          },
          1520: {
            itemsToShow: 2.7,
          },
          1440: {
            itemsToShow: 2.5,
          },
          1280: {
            itemsToShow: 2.2,
          },
          1140: {
            itemsToShow: 2.3,
          },
          1060: {
            itemsToShow: 2.2,
          },
          1024: {
            itemsToShow: 2,
          },
        },
      },
      hooperSettingsMobile: {
        infiniteScroll: true,
        centerMode: false,
        autoPlay: true,
        playSpeed: 3000,
        transition: 2000,
        wheelControl: false,
        keyboardControl: false,
        itemsToShow: 1,
        breakpoints: {
          950: {
            itemsToShow: 2.8,
          },
          890: {
            itemsToShow: 2.7,
          },
          850: {
            itemsToShow: 2.5,
          },
          720: {
            itemsToShow: 2.2,
          },
          633: {
            itemsToShow: 2,
          },
          600: {
            itemsToShow: 1.8,
          },
          500: {
            itemsToShow: 1.5,
          },
          420: {
            itemsToShow: 1.3,
          },
          390: {
            itemsToShow: 1.2,
          },
          320: {
            itemsToShow: 1,
          },
        },
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
          open: false,
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
          open: false,
        },
        {
          heading: "Customer Service",
          details: `The customer service team of Jatri services Limited is open from 7am to 11:59pm. For any kind of help or queries or questions, you can call the customer service number 09642080808.`,
          open: false,
        },
        {
          heading: "Ticket Cancellation Procedures",
          details: `If you want to make a cancellation to your booking ticket, you must follow some rules: 
                      <ul class='list-decimal ml-5'>
                      <li class="mt-2">
                        First, you have to go to the ticket history option. You need to add your
                        phone number/PNR/transaction ID to search for your ticket.
                      </li>
                      <li class="mt-2">
                        Click at the cancellation option. Your request will be submitted to our
                        team.
                      </li>
                      <li class="mt-2">
                        Your money will be refunded with following our refund & cancellation
                        policy.
                      </li>
                      </ul>
                      <br>There are few cancellation policies: <br>
                      <ul class='list-disc ml-5 mt-4'>
                        <li>
                          <span class="font-medium">Auto cancellation</span>
                          will happen if the customer fails to report at the reporting station
                          15 minutes before the bus arrives.
                        </li>

                        <li>
                          If the customer
                          <span class="font-medium">fails to pay</span> the full amount that
                          mentioned in the screen will not get the activated tickets.
                        </li>

                        <li>
                          To be eligible for refund, customers need to cancel the ticket from
                          <span class="font-medium">‘Ticket History’</span> a day before<span
                            class="font-medium"
                            >(Excluding 12:00 AM to 07:00 AM)</span
                          >
                          the journey time. And must report the cancellation to the support
                          center (i.e Call 09642080808 or email to
                          <span type="email" class="text-[#0000FF] underline"
                            >info@jatri.co</span
                          >).
                        </li>
                        <li>
                          Only <span class="font-medium">during Eid time</span>, customers are
                          eligible for refund ONLY if the operator cancels the trip and cannot
                          provide an alternative arrangement. (<span class="font-medium"
                            >Note</span
                          >: Terms and conditions of refund policy might update or change from
                          time to time without any notice)
                        </li>
                        <li>
                          <span class="font-medium">For mobile payments</span>, it is the
                          responsibility of the customer to input transaction ID (if
                          applicable), PIN, OTP properly within time to confirm his ticket by
                          himself.
                        </li>
                        <li>
                          Jatri.co sometimes does the verification for the customer as a
                          courtesy, but it is not jatri.co’s responsibility or service promise.
                        </li>
                        <li>
                          For mobile payments, customers must complete payment and also verify
                          transactions.
                        </li>
                        <li>
                          During Eid sales month, Jatri.co will not do any verification on
                          behalf of the customers.
                        </li>
                        <li>
                          If the customer faces any hassle at the counter after purchasing
                          tickets from Jatri.co, then the user has to give the complaint to our
                          customer service or give an email to info@jatri.co within 3 days(72
                          hours) from the departure time.
                        </li>
                       </ul>
                    `,
          open: false,
        },
      ],
    };
  },
  components: { Hooper, Slide },
  async mounted() {
    this.onResize();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.onResize);
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
  },
  unmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters("guarantedseat", [
      "getGsLoading",
      "getGsOfferPromoImageUrl",
      "getOfferImages",
      "getHeadLine",
      "getOperatorListData",
      "getOperatorListData",
      "getPopularRouteListData",
    ]),
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
      "successTicketByMailAction",
    ]),

    handleHowToBuyModal() {
      this.howToBuyModalStatus = !this.howToBuyModalStatus;
    },

    prevSlide(value) {
      if (value === "mobile") {
        this.$refs.hooperSlideMobile.slidePrev();
      } else {
        this.$refs.hooperSlide.slidePrev();
      }

      this.slideLeft = true;
      this.slideRight = false;
    },
    nextSlide(value) {
      if (value === "mobile") {
        this.$refs.hooperSlideMobile.slideNext();
      } else {
        this.$refs.hooperSlide.slideNext();
      }

      this.slideRight = true;
      this.slideLeft = false;
    },
    createOperatorLink(id) {
      return `/bus-operator?id=${id}`;
    },
    onResize() {
      this.isMobile = window.innerWidth < 1024;
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
        } else {
          this.showStickySearchBox = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.homeBanner {
  background-image: url("../assets/images/home/bannerImageWeb.jpg");
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
  background-image: linear-gradient(
    102deg,
    #cfe6f9 12.78%,
    #e2fafd 98.9%
  ) !important;
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
