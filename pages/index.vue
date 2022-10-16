<template>
  <div class="bg-white">

    <!-- banner section -->
    <div class="relative">
      <img src="@/assets/images/home/bannerImageWeb.svg" alt="" class="w-full hidden lg:block">
      <img src="@/assets/images/home/bannerImageMobile.svg" alt="" class="w-full block lg:hidden">
      
      <div class="absolute top-[130px] bottom-[130px] right-[100px] left-[100px] z-40 hidden lg:block">
        <div class="">
          <h2 class="text-[57px] text-blackPrimary font-bold leading-[64px]">Book your Journey NOW!!!</h2>
          <h4 class="mt-4 text-xl text-blackLight leading-7 font-medium">Buy tickets online hassle-free.</h4>
          <div class="mt-9">
            <SearchFilterForm/>
          </div>
        </div>
      </div>

      <div class="absolute top-[59px] right-4 left-4 block lg:hidden">
        <h2 class="text-[28px] text-blackPrimary font-bold leading-[36px]">Book your Journey NOW!!!</h2>
        <h4 class="mt-2 text-base text-blackLight font-normal">Buy tickets online hassle-free.</h4>
        <div class="mt-[59px] bg-white max-w-[380px] rounded-[14px] px-4 py-[28px] shadow-lg">
          <SearchFilterFormMobile/>
        </div>
      </div>
    </div>

    <!-- why choose section -->
    <div class="pt-80 lg:pt-20 px-4 lg:px-[100px] pb-[100px]">
      <div class="bg-bgShade3 rounded-[30px] pt-[60px] px-4 lg:px-[72px] pb-20">
        <div>
          <div class="">
            <h2 class="text-2xl lg:text-4xl text-blackPrimary text-center font-semibold lg:leading-[44px]">Why Choose Jatri</h2>
            <img src="@/assets/images/home/curveBorder.svg" alt="" class="w-[203px] lg:w-[298px] block mx-auto">
          </div>

          <div class="mt-[60px] flex flex-wrap justify-between lg:gap-x-[95px]">
            <div class="lg:p-4 lg:w-[340px]">
              <img src="@/assets/images/home/fluency-two-tickets.svg" alt="" class="w-[66px]">
              <h2 class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8">Ease on the move</h2>
              <p class="text-sm lg:text-base text-blackSecondery lg:leading-6 font-normal mt-4">Tickets are available on the go through our platform, no more queues!</p>
            </div>
            <div class="lg:p-4 lg:w-[340px] mt-8 lg:mt-0">
              <img src="@/assets/images/home/fluency-red-bus.svg" alt="" class="w-[66px]">
              <h2 class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8">Promise of convenient travel</h2>
              <p class="text-sm lg:text-base text-blackSecondery lg:leading-6 font-normal mt-4">We have an excellent system of taking service based on preference, as there is ticketing service for multiple routes via different categories of buses.</p>
            </div>
            <div class="lg:p-4 lg:w-[340px] mt-8 lg:mt-0">
              <img src="@/assets/images/home/casual-life-sale-badge.svg" alt="" class="w-[66px]">
              <h2 class="text-base lg:text-2xl text-blackPrimary lg:leading-8 font-medium mt-8">Reliability assured</h2>
              <p class="text-sm lg:text-base text-blackSecondery lg:leading-6 font-normal mt-4">Whether you are traveling for work or leisure, book your tickets through us and keep all your worries away.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Booking ticket section -->
    <div class="relative mx-4 lg:px-0">
      <img src="@/assets/images/home/buyTicketBannerWeb.svg" alt="" class="hidden lg:block w-full">
      <img src="@/assets/images/home/buyTicketBannerMobile.svg" alt="" class="block lg:hidden w-full">
      <div class="w-[296px] lg:w-[515px] absolute top-10 lg:top-[130px] left-6 lg:left-[100px] z-40">
        <div>
          <h2 class="text-[28px] lg:text-[45px] leading-[36px] lg:leading-[52px] text-blackPrimary font-medium lg:font-semibold">Booking ticket just got more easier and fun with Jatri.</h2>
          <button @click="handleHowToBuyModal" class="bg-corporate text-white px-6 lg:px-8 py-[10px] lg:py-5 text-sm lg:text-xl font-semibold mt-4 lg:mt-8 rounded-full">How to buy ticket</button>
        </div>
      </div>
    </div>

    <!-- Offer & Promos Section -->
    <div class="p-4 lg:p-[100px] flex justify-center">
      <div class="border border-[#c8c8c8] rounded-[30px] overflow-hidden w-[380px] lg:w-[1240px] h-[264px] lg:h-[464px]">
        <div class="flex justify-between items-center pt-6 lg:pt-[56px] px-[18px] lg:px-[60px]">
          <h2 class="text-2xl lg:text-4xl lg:leading-[44px] text-blackPrimary text-center font-medium lg:font-semibold">Offers & Promos</h2>

          <div class="flex justify-between gap-x-4">
            <button @click="scrollLeft" class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center" :class="slideLeft ? 'border-blackPrimary' : 'border-[#8D8D8F]'">
              <SlideLeft
                :fill="slideLeft ? '#151414' : '#8D8D8F'"
                width="10"
                height="24"
              />
            </button>
            <button @click="scrollRight" class="rounded-full border w-[28px] lg:w-10 h-[28px] lg:h-10 flex justify-center items-center" :class="slideRight ? 'border-blackPrimary' : 'border-[#8D8D8F]'">
              <SlideRight
                :fill="slideRight ? '#151414' : '#8D8D8F'"
                width="10"
                height="24"
              />
            </button>
          </div>
        </div>
        <!-- <div class="flex justify-between gap-x-2 lg:gap-x-6 py-5 lg:py-[56px] pl-[18px] lg:pl-[60px] sliderContainer scroll-smooth w-full">
          <marquee behavior="alternative" direction="" class="w-full max-w-full flex flex-row">
            <img src="@/assets/images/offer/img-1.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px]">
            <img src="@/assets/images/offer/img-2.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px]">
            <img src="@/assets/images/offer/img-1.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px]">
            <img src="@/assets/images/offer/img-1.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px]">
          </marquee>
        </div> -->

        <div class="scroll-parent my-5 lg:my-[56px] ml-[18px] lg:ml-[60px] h-full sliderContainer scroll-smooth">
          <div class="scroll-element primary flex justify-between gap-x-2 lg:gap-x-6">
            <img src="@/assets/images/offer/img-1.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px] h-[164px] lg:h-[260px]">
            <img src="@/assets/images/offer/img-2.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px] h-[164px] lg:h-[260px]">
            <img src="@/assets/images/offer/img-2.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px] h-[164px] lg:h-[260px]">
            <img src="@/assets/images/offer/img-2.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px] h-[164px] lg:h-[260px]">
          </div>
          <div class="scroll-element secondary flex justify-between gap-x-2 lg:gap-x-6">
            <img src="@/assets/images/offer/img-1.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px] h-[164px] lg:h-[260px]">
            <img src="@/assets/images/offer/img-2.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px] h-[164px] lg:h-[260px]">
            <img src="@/assets/images/offer/img-2.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px] h-[164px] lg:h-[260px]">
            <img src="@/assets/images/offer/img-2.png" alt="" class="rounded-2xl w-[280px] lg:w-[460px] h-[164px] lg:h-[260px]">
          </div>
        </div>
      </div>
    </div>

    <!-- Available Bus operatior Section -->
    <div class="p-4 lg:p-[100px] pt-0 flex justify-center">
      <div class="busOperatorbg rounded-[30px] px-4 lg:px-[60px] py-7 lg:py-10 w-full">
        <p class="text-center font-normal text-sm lg:text-xl text-blackPrimary">Plenty of options to choose</p>
        <h2 class="text-center font-medium lg:font-semibold text-2xl lg:text-4xl lg:leading-[44px] text-[#1E88E5] mt-2">Available Bus Operators</h2>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-[77px] gap-y-6 lg:gap-y-4 mt-8">
          <p class="text-xs lg:text-base lg:leading-6 text-blackPrimary font-normal">Euro Coach</p>
          <p class="text-xs lg:text-base lg:leading-6 text-blackPrimary font-normal">SB paribahan</p>
          <p class="text-xs lg:text-base lg:leading-6 text-blackPrimary font-normal">Greenline</p>
          <p class="text-xs lg:text-base lg:leading-6 text-blackPrimary font-normal">Pingky Paribahan</p>
          <p class="text-xs lg:text-base lg:leading-6 text-blackPrimary font-normal">Lucky Express</p>
          <p class="text-xs lg:text-base lg:leading-6 text-blackPrimary font-normal">Mimjaal Paribahan</p>
          <p class="text-xs lg:text-base lg:leading-6 text-blackPrimary font-normal">Shah Fateh Ali</p>
          <p class="text-xs lg:text-base lg:leading-6 text-blackPrimary font-normal">Much more to come</p>
        </div>
      </div>
    </div>

    <!-- most popular route section -->
    <div class="bg-successLight py-10 lg:py-[60px] px-4 lg:px-[100px]">
      <div class="lg:flex justify-start gap-x-[103px]">
        <div class="w-full lg:w-1/2 flex justify-between items-center lg:block">
          <img src="@/assets/images/home/most-popular-route.svg" alt="" class="order-last lg:order-first w-16 lg:w-[140px]">
          <h2 class="text-2xl lg:text-[45px] lg:leading-[52px] text-blackPrimary font-medium lg:font-semibold lg:mt-8 order-first lg:order-last">Our most <br> popular routes</h2>
        </div>
        <div class="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Rangpur</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Barishal</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Kuakata</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Noagaon</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Bogura</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Sunamganj</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB]">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Sylhet</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Chittagong</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Dhaka to Coxs Bazar</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Khulna to Kuakata</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Khulna to Barishal</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Sathkhira to Barishal</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-sm lg:text-base text-blackPrimary font-normal py-4 lg:py-5">Sathkhira to Kuakata</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <!-- <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Chapai Nawabganj - Chapai Nawabganj</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Help Section -->
    <div class="p-4 lg:p-[100px]">
      <div class="flex flex-wrap justify-between items-start gap-x-8">
        <div>
          <img src="@/assets/images/home/helpImage.svg" alt="">
          <h2 class="text-[32px] leading-10 lg:text-[45px] lg:leading-[52px] text-blackPrimary font-medium lg:font-semibold mt-6 lg:mt-8">How can we help you?</h2>
          <p class="text-blackLight text-sm leading-5 font-normal mt-4">Still need help? <span class="text-corporate underline"><NuxtLink href="https://jatri.co/contact-us" class="">Contact Us</NuxtLink> <img src="@/assets/images/icons/contact-rightArrow.svg" alt="" class="inline-block w-[5.19px] ml-[5.48px]"></span></p>
        </div>
        <div class="w-full lg:w-[710px] mt-6 lg:mt-0">
          <Accordion
            :heading="'How to buy Tickets via website!?'"
            :details="`The easiest way to buy bus tickets online through Jatri is at your door now. First, you have to go the Jatri website: <a href='https://ticket.jatri.co/' class='text-blue-500 underline'>https://ticket.jatri.co/</a> 
                        <br><br>Secondly, you will have to select your location, where to go, which kind of bus you need and the date of your journey. Then click the “book now” option and fill-up all the information. After making the payment process you will get your tickets.
                      `"
          />
          <Accordion
            :heading="'Payment details- bKash, Nagad, Bank Cards, Online Banking'"
            :details="`The Payment can be done through Nagad, bKash, visa cards or master cards. If a customer has sent payment to Jatri.co but the e-ticket is not confirmed or generated, i.e., there is no transaction ID or tickets booked/reserved by the mobile number of the mobile payment account, he can claim for refund in the similar procedure as above, without the ticket number. Such refunds will be given 7 business days (excluding Friday and Saturday) AFTER the event/trip has taken place. This is applicable for eid times also.
                        <br><br>If a customer has made an excess or less payment for a ticket accidentally, he is eligible for refund but he must claim for the refund within 24 hours of making the payment. 
                        <br><br>If a customer has reserved a ticket and made a payment, however, for some reason, the ticket purchase process was not successful and a ticket was not issued, a customer can claim refund as per the policy above. Ticket number is not required, but mobile # used for booking and other information are required. For refunds through mobile payment gateways (e.g. bKash), a fee is charged by the mobile payment company which will be deducted from the eligible refund amount. Similar conditions will apply if the bank charges any such additional fee. 
                        <br><br>In case of card payments, the last 4 digits of the card type of card is also needed. It is to be noted that for reasons beyond Jatri.co’s control, card payment may sometimes require time to post on the payment gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after it has been posted on the said panel.
                        <br><br>In case of BKash payments, a full mobile number will be required. It is to be noted that for reasons beyond Jatri.co’s control, payment may require some time to post on the payment gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after it has been posted on the said panel.
                      `"
          />
          <Accordion
            :heading="'24/7 Customer Service- 09642080808'"
            :details="`The customer service team of Jatri services Ltd. is open 24/7. For any kind of help or queries or questions, you can call the custom service number 09642080808.`"
          />
          <Accordion
            :heading="'Ticket Cancellation Procedures'"
            :details="`There are few cancellation policies. <span class='text-blackPrimary font-medium'>Auto cancellation</span> will happen if the customer fails to report at the reporting station before the departure time. If the customer <span class='text-blackPrimary font-medium'>fails to pay</span> the full amount that mentioned in the screen will not get the activated tickets. To be eligible for refund, customers need to cancel the ticket from jatri.co before the applicable time before the departure. And must report the cancelation to the support center (i.e Call 09642080808 or email to support@jatri.co) of Jatri.co.
                        <br><br>Only <span class='text-blackPrimary font-medium'>during Eid time</span>, customers are eligible for refund ONLY if the operator cancels the trip and cannot provide an alternative arrangement. 
                        <br><br>(<span class='text-blackPrimary font-medium'>Note</span>: Terms and conditions of refund policy might update or change from time to time without any notice).
                        <br><br><span class='text-blackPrimary font-medium'>For mobile payments</span>, it is the responsibility of the customer to input transaction ID (if applicable), PIN, OTP properly within time to confirm his ticket by himself. Jatri.co sometimes does the verification for the customer as a courtesy, but it is not jatri.co’s responsibility or service promise. Tickets will be automatically canceled if the customer does not confirm payment within 30 minutes. For mobile payments customers must complete payment and also verify transactions within this stipulated time. During Eid sales month, Jatri.co will not do any verification on behalf of the customers.
                      `"
          />
        </div>
      </div>
    </div>
    <div v-if="howToBuyModalStatus">
      <HowToBuyModal :close="handleHowToBuyModal"/>
    </div>
  </div>

</template>

<script>
import SearchFilterForm from '../components/SearchForm/SearchFilterForm.vue';
import HowToBuyModal from '../components/Modal/HowToBuyModal.vue';
import Accordion from '../components/Accordion/Accordion.vue';
import SlideLeft from '../components/Svg/SlideLeft.vue';
import SlideRight from '../components/Svg/SlideRight.vue';
export default {
  components: { SearchFilterForm, HowToBuyModal, Accordion, SlideLeft, SlideRight },
  data(){
    return {
      howToBuyModalStatus : false,
      slideLeft : false,
      slideRight : false,
    }
  },
  methods: {
    handleHowToBuyModal() {
      this.howToBuyModalStatus = !this.howToBuyModalStatus
    },

    scrollLeft() {
      let content = document.querySelector(".sliderContainer");
      content.scrollLeft -= 200;
      this.slideLeft = true;
      this.slideRight = false;
      console.log("left click", this.scrollLeft)
    },
    scrollRight() {
      let content = document.querySelector(".sliderContainer");
      content.scrollLeft += 200;
      this.slideRight = true;
      this.slideLeft = false;
      console.log("right click", this.scrollRight)
    }
  }
}
</script>

<style>
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