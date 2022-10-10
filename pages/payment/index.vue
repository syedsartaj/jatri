<template>
     <div class="lg:flex justify-between gap-x-5 py-4 lg:py-8 px-4 lg:px-[100px] bg-corporateBg">
          <div class="w-full lg:w-1/2">
               <div class="mt-4 bg-white rounded-[10px] border border-[#EDEDED]">
                    <div class="flex justify-start items-center gap-x-4 px-5 py-[22px] border-b">
                         <div class="bg-[#FEF2F0] rounded-full w-9 h-9 flex justify-center items-center">
                              <img src="@/assets/images/icons/ticket.svg" alt="" class="w-[15px]">
                         </div>
                         <div>
                              <h2 class="text-corporate text-sm lg:text-base font-medium">Dhaka - Chittagong</h2>
                              <p class="text-blackLight text-xs lg:text-sm font-normal mt-1">Green Line Paribahan, AC bus | Sat, 25 Sep 2022</p>
                         </div>
                    </div>
                    <div class="px-[14px] py-3">
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Boarding point:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">Amtoli Bus Stand</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Departure time:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary"> 9:15 PM</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Name:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">Namzus Sakib</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Mobile number:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">+08801708630439</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Email address:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">sakib.jatri@gmail.com</p>
                         </div>
                    </div>
               </div>
          </div>
          <div class="w-full lg:w-1/2">
               <div class="mt-4 bg-white rounded-[10px] border border-[#EDEDED]">
                    <div class="flex justify-start items-center gap-x-4 px-5 py-[22px] border-b">
                         <p class="text-base font-medium text-blackPrimary">Fare details</p>
                    </div>
                    <div class="px-[14px] pt-3">
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Seat no</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">[D1],[D2],[D3],[D4],[E2],[J1],[H4]</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Ticket price</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">5600</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Processing fee</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">240</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Gateway fee</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">98</p>
                         </div>
                         <div class="flex justify-between gap-x-4 py-2 border-b last:border-b-0 border-dashed">
                              <div class="px-4 py-[10px] bg-[#F7F7F7] w-[226px] lg:w-[395px]"><span class="text-blackLight text-sm font-normal">BUS100</span></div>

                              <!-- Apply promo -->
                              <!-- <button class="w-40 bg-[#FDF0F1] rounded-full text-xs lg:text-base font-medium text-blackPrimary ">
                                   <p class="text-[#E0293B] text-xs font-medium">Apply promo</p>
                              </button> -->

                              <!-- removo promo -->
                              <button class="flex justify-center items-center gap-x-[11.76px] w-40 bg-[#FDF0F1] rounded-full text-xs lg:text-base font-medium text-blackPrimary ">
                                   <img src="@/assets/images/icons/cross.svg" alt="" class="w-[8.49px]">
                                   <p class="text-[#E0293B] text-xs font-medium">Remove promo</p>
                              </button>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-sm font-normal text-blackLight">Promo</p>
                              <p class="text-base font-medium text-[#E0293B]"> -198</p>
                         </div>
                    </div>
                    <div class="flex justify-between bg-[#EFF7FD] border-t rounded-b px-4 py-[10px]">
                         <p class="text-sm font-normal text-blackLight">Total</p>
                         <p class="text-base font-medium text-blackPrimary">BDT <span class="font-bold">10038</span></p>
                    </div>
               </div>

               <div class="mt-4 bg-white rounded-[10px] border border-[#EDEDED]">
                    <div class="flex justify-between items-center gap-x-4 px-5 py-[22px] border-b">
                         <p class="text-base font-medium text-blackPrimary">Payment method</p>
                         <div class="flex justify-center items-center w-[139px] bg-[#FDF0F1] rounded-full text-base font-medium text-blackPrimary ">
                              <img src="@/assets/images/icons/timer.svg" alt="" class="w-[13.33px]">
                              <p class="text-[#E0293B] text-xs font-medium py-[5px] px-4">04:00 m left</p>
                         </div>
                    </div>
                    <div class="p-5 flex justify-between gap-x-5">
                         <button @click="selectNagadGatway" class="flex justify-between items-center w-1/2 rounded-lg px-5 py-[15px] border" :class="selectNagadGatwayStatus ? 'bg-[#EFF7FD] border-[#1E88E5]' : 'bg-[#f7f7f7] border-[#f7f7f7]'">
                              <img src="@/assets/images/nagad-logo.svg" alt="nagad" class="w-[69px]"/>
                              <img src="@/assets/images/icons/tik-blue.svg" alt="tik" :class="selectNagadGatwayStatus ? 'block':'hidden'">
                         </button>

                         <button @click="selectSSLGatway" class="flex justify-between items-center w-1/2 rounded-lg px-5 py-[15px] border" :class="selectSSLGatwayStatus ? 'bg-[#EFF7FD] border-[#1E88E5]' : 'bg-[#f7f7f7] border-[#f7f7f7]'">
                              <div class="flex flex-wrap justify-start items-center gap-x-3">
                                   <div class="grid grid-cols-4 lg:grid-cols-2 gap-x-[5.57px] lg:gap-x-3 lg:gap-y-[7px] order-last lg:order-first">
                                        <img src="@/assets/images/amex-logo.svg" alt="amex" class="w-5">
                                        <img src="@/assets/images/mastercard-logo.svg" alt="mastercard" class="w-[18px]">
                                        <img src="@/assets/images/visa-logo.svg" alt="visa" class="w-[21px]">
                                        <img src="@/assets/images/bkash-logo.svg" alt="bkash" class="w-[27px]">
                                   </div>
                                   <div class="bg-[#D9D9D9] w-[1px] h-9 hidden lg:block"></div>
                                   <img src="@/assets/images/sslcommerz-logo.svg" alt="" class="mb-[6px] lg:mb-0">
                              </div>
                              <img src="@/assets/images/icons/tik-blue.svg" alt="tik" :class="selectSSLGatwayStatus ? 'block':'hidden'">
                         </button>
                    </div>
               </div>

               <div class="mt-2">
                    <AlertsPaymentTimeoutAlert/>
               </div>

               <button @click="handlePay"  class="bg-corporate rounded-full w-full py-[13px] text-white text-sm font-medium mt-6">
                    Pay now
               </button>

               <div class="text-center mt-4 lg:mt-5">
                    <p class="text-blackPrimary text-sm font-normal">By procedding you are agreeing with our <NuxtLink href="https://jatri.co/user/term-and-condition/" target="_blank" class="w-full underline text-blue-500">Terms and Conditions</NuxtLink></p>
               </div>

               <div class="p-5 mt-8 border border-[#DBDBDB] rounded-lg lg:hidden flex justify-start items-start gap-x-5">
                    <img src="@/assets/images/icons/phoneIconBlack.svg" alt="" class="mt-2">
                    <div>
                         <h2 class="text-base font-medium ">Having Trouble?</h2>
                         <p class="mt-[6px] text-sm text-[#8D8D8F] font-normal">Reach out to us for any kind of assistance on +096776655</p>
                         <button class="text-xs font-medium bg-[#EDEDED] w-[95px] py-1 rounded-full mt-[10px]">Contact us</button>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     data(){
          return {
               selectNagadGatwayStatus: false,
               selectSSLGatwayStatus: false
          }
     },
     methods: {
          selectNagadGatway(){
               this.selectNagadGatwayStatus = !this.selectNagadGatwayStatus;
               this.selectSSLGatwayStatus = false
          },
          selectSSLGatway(){
               this.selectSSLGatwayStatus = !this.selectSSLGatwayStatus;
               this.selectNagadGatwayStatus = false
          },
          handlePay(){
               window.location.href= '/payment/success';
          }
     }
}
</script>

<style>

</style>