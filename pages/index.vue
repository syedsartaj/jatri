<template>
  <div class="bg-white">

    <!-- banner section -->
    <div class="relative">
      <img src="@/assets/images/home/bannerImageWeb.svg" alt="" class="w-full hidden md:block">
      <img src="@/assets/images/home/bannerImageMobile.svg" alt="" class="w-full block md:hidden">
      
      <div class="absolute top-[130px] bottom-[130px] right-[100px] left-[100px] z-40 hidden md:block">
        <div class="">
          <h2 class="text-[57px] text-blackPrimary font-bold leading-[64px]">Book your Journey NOW!!!</h2>
          <h4 class="mt-4 text-xl text-blackLight leading-7 font-medium">Buy tickets online hassle-free.</h4>
          <div class="mt-9">
            <SearchFilterForm/>
          </div>
        </div>
      </div>

      <div class="absolute top-[59px] right-4 left-4 block md:hidden">
        <h2 class="text-[28px] text-blackPrimary font-bold leading-[36px]">Book your Journey NOW!!!</h2>
        <h4 class="mt-2 text-base text-blackLight font-normal">Buy tickets online hassle-free.</h4>
        <div class="mt-[59px] bg-white w-[380px] rounded-[14px] px-4 py-[28px] shadow-lg">
          <SearchFilterFormMobile/>
        </div>
      </div>
    </div>

    <!-- why choose section -->
    <div class="pt-80 md:pt-20 px-4 md:px-[100px] pb-[100px]">
      <div class="bg-bgShade3 rounded-[30px] pt-[60px] px-4 md:px-[72px] pb-20">
        <div>
          <div class="">
            <h2 class="text-2xl md:text-4xl text-blackPrimary text-center font-semibold md:leading-[44px]">Why Choose Jatri</h2>
            <img src="@/assets/images/home/curveBorder.svg" alt="" class="w-[203px] md:w-[298px] block mx-auto">
          </div>

          <div class="mt-[60px] flex flex-wrap justify-between md:gap-x-[95px]">
            <div class="md:p-4 md:w-[340px]">
              <img src="@/assets/images/home/fluency-two-tickets.svg" alt="" class="w-[66px]">
              <h2 class="text-base md:text-2xl text-blackPrimary md:leading-8 font-medium mt-8">Ease on the move</h2>
              <p class="text-sm md:text-base text-blackSecondery md:leading-6 font-normal mt-4">Tickets are available on the go through our platform, no more queues!</p>
            </div>
            <div class="md:p-4 md:w-[340px] mt-8 md:mt-0">
              <img src="@/assets/images/home/fluency-red-bus.svg" alt="" class="w-[66px]">
              <h2 class="text-base md:text-2xl text-blackPrimary md:leading-8 font-medium mt-8">Promise of convenient travel</h2>
              <p class="text-sm md:text-base text-blackSecondery md:leading-6 font-normal mt-4">We have an excellent system of taking service based on preference, as there is ticketing service for multiple routes via different categories of buses.</p>
            </div>
            <div class="md:p-4 md:w-[340px] mt-8 md:mt-0">
              <img src="@/assets/images/home/casual-life-sale-badge.svg" alt="" class="w-[66px]">
              <h2 class="text-base md:text-2xl text-blackPrimary md:leading-8 font-medium mt-8">Reliability assured</h2>
              <p class="text-sm md:text-base text-blackSecondery md:leading-6 font-normal mt-4">Whether you are traveling for work or leisure, book your tickets through us and keep all your worries away.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Booking ticket section -->
    <div class="relative mx-4 md:px-0">
      <img src="@/assets/images/home/buyTicketBannerWeb.svg" alt="" class="hidden md:block w-full">
      <img src="@/assets/images/home/buyTicketBannerMobile.svg" alt="" class="block md:hidden w-full">
      <div class="w-[296px] md:w-[515px] absolute top-10 md:top-[130px] left-6 md:left-[100px] z-40">
        <div>
          <h2 class="text-[28px] md:text-[45px] leading-[36px] md:leading-[52px] text-blackPrimary font-medium md:font-semibold">Booking ticket just got more easier and fun with Jatri.</h2>
          <button @click="handleHowToBuyModal" class="bg-corporate text-white px-6 md:px-8 py-[10px] md:py-5 text-sm md:text-xl font-semibold mt-4 md:mt-8 rounded-full">How to buy ticket</button>
        </div>
      </div>
    </div>

    <!-- Offer & Promos Section -->
    <div class="p-4 md:p-[100px] flex justify-center">
      <div class="border border-[#c8c8c8] rounded-[30px] overflow-hidden">
        <div class="flex justify-between items-center pt-[56px] px-[60px]">
          <h2 class="text-4xl text-blackPrimary text-center font-semibold leading-[44px]">Offers & Promos</h2>

          <div class="flex justify-between gap-x-4">
            <button @click="scrollLeft" class="rounded-full border w-10 h-10 flex justify-center items-center" :class="slideLeft ? 'border-blackPrimary' : 'border-[#8D8D8F]'">
             <SlideLeft
                :fill="slideLeft ? '#151414' : '#8D8D8F'"
                width="10"
                height="24"
             />
            </button>
            <button @click="scrollRight" class="rounded-full border w-10 h-10 flex justify-center items-center" :class="slideRight ? 'border-blackPrimary' : 'border-[#8D8D8F]'">
             <SlideRight
                :fill="slideRight ? '#151414' : '#8D8D8F'"
                width="10"
                height="24"
             />
            </button>
          </div>
        </div>
        <div class="flex justify-between gap-x-6 overflow-x-auto py-[56px] pl-[60px] sliderContainer scroll-smooth">
          <img src="@/assets/images/offer/img-1.png" alt="" class="rounded-2xl w-[460px]">
          <img src="@/assets/images/offer/img-2.png" alt="" class="rounded-2xl w-[460px]">
          <img src="@/assets/images/offer/img-1.png" alt="" class="rounded-2xl w-[460px]">
          <img src="@/assets/images/offer/img-1.png" alt="" class="rounded-2xl w-[460px]">
        </div>
      </div>
    </div>

    <!-- Available Bus operatior Section -->
    <div class="p-4 md:p-[100px] pt-0 flex justify-center">
      <div class="busOperatorbg rounded-[30px] px-[60px] py-10 w-full">
        <p class="text-center font-normal text-xl text-blackPrimary leading-7">Plenty of options to choose</p>
        <h2 class="text-center font-semibold text-4xl text-[#1E88E5] leading-[44px] mt-2">Available Bus Operators</h2>

        <div class="grid grid-cols-4 gap-x-[77px] gap-y-4 mt-8">
          <p class="text-base text-blackPrimary font-normal leading-6">Euro Coach</p>
          <p class="text-base text-blackPrimary font-normal leading-6">SB paribahan</p>
          <p class="text-base text-blackPrimary font-normal leading-6">Greenline</p>
          <p class="text-base text-blackPrimary font-normal leading-6">Pingky Paribahan</p>
          <p class="text-base text-blackPrimary font-normal leading-6">Lucky Express</p>
          <p class="text-base text-blackPrimary font-normal leading-6">Mimjaal Paribahan</p>
          <p class="text-base text-blackPrimary font-normal leading-6">Shah Fateh Ali</p>
          <p class="text-base text-blackPrimary font-normal leading-6">Much more to come</p>
        </div>
      </div>
    </div>

    <!-- most popular route section -->
    <div class="bg-successLight py-[60px] px-[100px]">
      <div class="flex flex-wrap justify-start gap-x-[103px]">
        <div class="w-full md:w-1/2">
          <img src="@/assets/images/home/most-popular-route.svg" alt="">
          <h2 class="text-[45px] text-blackPrimary font-semibold leading-[52px] mt-8">Our most <br> popular routes</h2>
        </div>
        <div class="w-full md:w-1/2">
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Rangpur</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Barishal</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Kuakata</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Noagaon</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Bogura</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Sunamganj</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB]">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Sylhet</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Chittagong</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Coxs Bazar</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Khulna to Kuakata</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Khulna to Barishal</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Sathkhira to Barishal</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="" class="w-3">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Sathkhira to Kuakata</p>
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
    <div class="p-[100px] md:flex md:justify-center">
      <div class="flex flex-wrap justify-between gap-x-8">
        <div>
          <img src="@/assets/images/home/helpImage.svg" alt="">
          <h2 class="text-[45px] text-blackPrimary font-semibold leading-[52px] mt-8">How can we help you?</h2>
          <p class="text-blackLight text-sm leading-5 font-normal mt-4">Still need help? <span class="text-corporate underline"><NuxtLink href="https://jatri.co/contact-us" class="">Contact Us</NuxtLink> <img src="@/assets/images/icons/contact-rightArrow.svg" alt="" class="inline-block w-[5.19px] ml-[5.48px]"></span></p>
        </div>
        <div class="w-full md:w-[710px]">
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
    },
    scrollRight() {
      let content = document.querySelector(".sliderContainer");
      content.scrollLeft += 200;
      this.slideRight = true;
      this.slideLeft = false;
    }
  }
}
</script>

<style>
.busOperatorbg {
  background-image: linear-gradient(102deg, #CFE6F9 12.78%, #E2FAFD 98.9%) !important;
  height: 100%;
}
</style>