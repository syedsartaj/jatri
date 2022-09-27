<template>
  <div class="bg-white">

    <!-- banner section -->
    <div class="relative">
      <img src="@/assets/images/home/bannerImageWeb.svg" alt="" class="w-full">
      <div class="absolute top-[130px] bottom-[130px] right-[100px] left-[100px]  z-40">
        <div>
          <h2 class="text-[57px] text-blackPrimary font-bold leading-[64px]">Ticketing made easy!</h2>
          <h4 class="mt-4 text-xl text-blackSecondery leading-7 font-medium">Buy tickets online hassle-free.</h4>
          <div class="mt-9">
            <SearchFilterForm/>
          </div>
        </div>
      </div>
    </div>

    <!-- why choose section -->
    <div class="pt-20 px-[100px] pb-[100px] flex justify-center">
      <div class="bg-bgShade3 rounded-[30px] pt-[60px] px-[72px] pb-20">
        <div>
          <div class="">
            <h2 class="text-4xl text-blackPrimary text-center font-semibold leading-[44px]">Why Choose us</h2>
            <img src="@/assets/images/home/curveBorder.svg" alt="" class="w-[298px]block mx-auto">
          </div>

          <div class="mt-[60px] flex justify-between gap-x-[95px]">
            <div>
              <img src="@/assets/images/home/fluency-two-tickets.svg" alt="" class="w-[66px]">
              <h2 class="text-2xl text-blackPrimary leading-8 font-medium mt-8">Smooth Ticketing Service</h2>
              <p class="text-base text-blackSecondery leading-6 font-normal mt-4">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Viverra semper pharetra eu tellus mi volutpat a non augue. Faucibus nulla
                dictum erat tristique nam habitasse nunc.</p>
            </div>
            <div>
              <img src="@/assets/images/home/fluency-red-bus.svg" alt="" class="w-[66px]">
              <h2 class="text-2xl text-blackPrimary leading-8 font-medium mt-8">Smooth Ticketing Service</h2>
              <p class="text-base text-blackSecondery leading-6 font-normal mt-4">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Viverra semper pharetra eu tellus mi volutpat a non augue. Faucibus nulla
                dictum erat tristique nam habitasse nunc.</p>
            </div>
            <div>
              <img src="@/assets/images/home/casual-life-sale-badge.svg" alt="" class="w-[66px]">
              <h2 class="text-2xl text-blackPrimary leading-8 font-medium mt-8">Smooth Ticketing Service</h2>
              <p class="text-base text-blackSecondery leading-6 font-normal mt-4">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Viverra semper pharetra eu tellus mi volutpat a non augue. Faucibus nulla
                dictum erat tristique nam habitasse nunc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Booking ticket section -->
    <div class="relative">
      <img src="@/assets/images/home/buyTicketBannerWeb.svg" alt="" class="w-full">
      <div class="absolute top-[130px] bottom-[130px] right-[100px] left-[100px] z-40">
        <div>
          <h2 class="text-[45px] text-blackPrimary font-semibold leading-[52px]">Booking ticket just got <br> more
            easier and fun <br> with Jatri.</h2>
          <button @click="handleHowToBuyModal" class="bg-corporate text-white px-8 py-5 text-xl leading-7 font-semibold mt-8 rounded-full">How to buy ticket</button>
        </div>
      </div>
    </div>

    <!-- Offer & Promos Section -->
    <div class="p-[100px] flex justify-center">
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
    <div class="p-[100px] pt-0 flex justify-center">
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
      <div class="flex justify-start gap-x-[103px]">
        <div class="w-1/2">
          <img src="@/assets/images/home/most-popular-route.svg" alt="">
          <h2 class="text-[45px] text-blackPrimary font-semibold leading-[52px] mt-8">Our most <br> popular routes</h2>
        </div>
        <div class="w-1/2">
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Rangpur</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Barishal</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Kuakata</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Noagaon</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Bogura</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Sunamganj</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB]">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Sylhet</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Chittagong</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Dhaka to Coxs Bazar</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Khulna to Kuakata</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Khulna to Barishal</p>
            </div>
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
              <p class="text-base text-blackPrimary font-normal leading-6 py-5">Sathkhira to Barishal</p>
            </div>
          </div>
          <div class="flex justify-start border-b border-b-[#DBDBDB] last:border-b-0">
            <div class="flex justify-start gap-x-[10px] w-1/2">
              <img src="@/assets/images/icons/greenMapIcon.svg" alt="">
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
    <div class="p-[100px] flex justify-center">
      <div class="flex justify-between gap-x-8">
        <div>
          <img src="@/assets/images/home/helpImage.svg" alt="">
          <h2 class="text-[45px] text-blackPrimary font-semibold leading-[52px] mt-8">How can we help you?</h2>
          <p class="text-blackLight text-sm leading-5 font-normal mt-4">Still need help? <span class="text-corporate underline"><NuxtLink href="https://jatri.co/contact-us" class="">Contact Us</NuxtLink> <img src="@/assets/images/icons/contact-rightArrow.svg" alt="" class="inline-block w-[5.19px] ml-[5.48px]"></span></p>
        </div>
        <div class="w-[710px]">
          <Accordion
            :heading="'How to buy Tickets via website!?'"
            :details="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum arcu nullam sed diam aliquet proin sed sollicitudin. Amet, in quis sit felis consectetur quis dictumst dictumst. Consequat, imperdiet ut viverra neque. Ornare vel et quis blandit justo, nunc vel netus massa.'"
          />
          <Accordion
            :heading="'Payment details- bKash, Nagad, Bank Cards, Online Banking'"
            :details="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum arcu nullam sed diam aliquet proin sed sollicitudin. Amet, in quis sit felis consectetur quis dictumst dictumst. Consequat, imperdiet ut viverra neque. Ornare vel et quis blandit justo, nunc vel netus massa.'"
          />
          <Accordion
            :heading="'24/7 Customer Service- 09642080808'"
            :details="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum arcu nullam sed diam aliquet proin sed sollicitudin. Amet, in quis sit felis consectetur quis dictumst dictumst. Consequat, imperdiet ut viverra neque. Ornare vel et quis blandit justo, nunc vel netus massa.'"
          />
          <Accordion
            :heading="'Ticket Cancellation Procedures'"
            :details="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum arcu nullam sed diam aliquet proin sed sollicitudin. Amet, in quis sit felis consectetur quis dictumst dictumst. Consequat, imperdiet ut viverra neque. Ornare vel et quis blandit justo, nunc vel netus massa.'"
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
import SearchFilterForm from '../components/SerachForm/SearchFilterForm.vue';
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