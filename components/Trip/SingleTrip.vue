<template>
     <div class="bg-white border border-[#ededed] rounded-[10px] mb-[10px] md:mb-4">
          <div class="md:flex justify-between gap-x-6" :class="selected ? 'border-b border-[#DBDBDB]': 'border-0 border-[#DBDBDB]'">
               <div class="w-full md:w-4/5 py-5 px-4 md:px-6 divide-y grid grid-cols-1 divide-dashed divide-[#DBDBDB] md:border-r md:border-[#DBDBDB]">
                    <div class="flex justify-start gap-x-4 items-center pb-[15px] order-first">
                         <img src="@/assets/images/busDefaultImage.svg" alt="">
                         <div>
                              <h2 class="text-sm md:text-xl font-medium text-blackPrimary">Green Line Paribahan</h2>
                              <p class="text-xs font-normal text-blackLight">Hundai AC Bus</p>
                         </div>
                    </div>
                    <div class="flex justify-between items-start py-[14px] order-last md:order-1">
                         <p class="text-xs font-normal text-blackLight">Route</p>
                         <h2 class="text-xs md:text-sm font-medium text-blackPrimary text-right">Dhaka - Comilla- Chittagong - Location - Location - Location</h2>
                    </div>
                    <div class="flex justify-between items-center py-4 order-1 md:order-last">
                         <p class="text-xs font-normal text-blackLight">Depatrure time</p>
                         <h2 class="text-sm md:text-base font-medium text-blackPrimary">06:45 PM</h2>
                    </div>
               </div>
               <!-- <div class="hidden md:block h-full w-[1px] bg-[#DBDBDB] mx-6"></div> -->
               <div class="block md:hidden h-[1px] bg-[#DBDBDB] mb-[10px]"></div>

               <div class="w-full md:w-1/5 py-4 md:py-5 px-4 md:px-0 md:pr-6 flex justify-between items-center md:items-start md:flex-col">
                    <div class="hidden md:block">
                         <img src="@/assets/images/icons/fareIcon.svg" alt="" class="w-[30px]">
                         <h2 class="mt-[10px] text-base md:text-xl font-semibold text-blackPrimary">1400 <span class="text-base">TK</span></h2>
                         <p class="text-xs font-normal text-blackLight mt-1">Per ticket</p>
                    </div>
                    <div class="md:hidden flex justify-start items-center gap-x-3">
                         <img src="@/assets/images/icons/fareIcon.svg" alt="" class="w-[30px]">
                         <div>
                              <h2 class="text-xl font-semibold text-blackPrimary">1400 <span class="text-xs">TK</span></h2>
                              <p class="text-xs font-normal text-blackLight mt-1">Per ticket</p>
                         </div>
                    </div>
                    <button @click="handleSeatView" class="md:w-full bg-corporate rounded-full flex justify-center gap-x-[11.76px] items-center text-white text-xs font-medium p-3 md:mt-[26px]"> 
                         {{selected ? 'Close seats' : 'View seats' }} 
                         <span>
                              <img src="@/assets/images/icons/viewSeatIcon.svg" alt="" :class="selected && 'transition-all ease-in-out rotate-180'" class="w-[8.49px] h-[5.19px]">
                         </span>
                    </button>
               </div>
          </div>

          <!-- accordion start -->
          <div v-if="selected" class="bg-white rounded-b-[10px] pt-4 pr-6 pb-6 pl-4" :class="selected ? 'max-h-max transition-all ease-in-out duration-700': 'h-0'">
               <div class="flex flex-wrap justify-between">
                    <!-- Bus Design -->
                    <div class="w-full md:w-1/2 ">
                         <div class="rounded-[10px] py-4 md:py-6 px-4 md:mr-6 bg-[#f7f7f7]">
                              <div class="flex justify-between md:border-t md:border-b border-dashed items-center py-1 md:py-2 md:mt-5">
                                   <div class="flex gap-x-2 justify-center items-center border-r last:border-r-0 px-[14px]">
                                        <img src="@/assets/images/seats/available-seats.svg" alt="Available" class="w-[18px] md:w-[23px] h-[15px] md:h-5">
                                        <p class="text-xs md:text-sm leading-[18px] font-medium md:font-normal text-blackLight"> Available</p>
                                   </div>
                                   <div class="flex gap-x-2 justify-center items-center border-r last:border-r-0 px-[14px]">
                                        <img src="@/assets/images/seats/bookedSeats.svg" alt="Booked" class="w-[18px] md:w-[23px] h-[15px] md:h-5">
                                        <p class="text-xs md:text-sm leading-[18px] font-medium md:font-normal text-blackLight"> Booked</p>
                                   </div>
                                   <div class="flex gap-x-2 justify-center items-center border-r last:border-r-0 px-[14px]">
                                        <img src="@/assets/images/seats/selected-seats.svg" alt="Selected" class="w-[18px] md:w-[23px] h-[15px] md:h-5">
                                        <p class="text-xs md:text-sm leading-[18px] font-medium md:font-normal text-blackLight"> Selected</p>
                                   </div>
                                   
                              </div>
                              <div class="md:hidden border-b border-dashed border-[#DBDBDB] mt-[10px]"></div>
                              <div class="p-5">
                                   <div class="md:pl-[31px]">
                                        <div class="flex justify-end items-end mt-2">
                                             <img src="@/assets/images/seats/driver.svg" alt="driver" class="w-[30px]"/>
                                        </div>
                                        <!-- Seats here -->
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/bookedSeats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/bookedSeats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/selected-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/selected-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/selected-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/selected-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                        <div class="flex justify-between gap-x-[30px] mt-6">
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button> </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                             <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="w-full md:w-1/2 border-t md:border-l md:pl-6 mt-4 pt-4 md:pt-0 md:mt-0">
                         <!-- Trip Information -->
                         <div class="">
                              <SelectOption
                                   v-model="boardingPoint"
                                   :default-option="'Select Your Boarding Location'"
                                   :label="'Boarding point'"
                                   propertyName="counter_name"
                              />
                              <!-- :options="getGsSeatBoardingPointArray" -->
                         </div>
                         <div class="mt-4">
                              <h2 class="text-xs md:text-base font-medium text-blackPrimary">Departure time</h2>
                              <div class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded">
                                   <p class="text-blackPrimary text-sm font-medium">07:30 PM</p>
                              </div>
                         </div>

                         <!-- Seat Fare Table -->
                         <div class="mt-4 bg-[#f7f7f7] rounded border border-[#EDEDED]">
                              <div class="flex justify-between px-[14px] pt-[10px] pb-[6px] border-b">
                                   <p class="text-sm md:text-xs font-semibold text-blackPrimary">Seat</p>
                                   <p class="text-sm md:text-xs font-semibold text-blackPrimary">Fare</p>
                              </div>
                              <div class="px-[14px] py-3">
                                   <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                                        <p class="text-xs md:text-sm font-medium text-blackPrimary">A1</p>
                                        <p class="text-xs md:text-sm font-medium text-blackPrimary">1400</p>
                                   </div>
                                   
                                   <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                                        <p class="text-xs md:text-sm font-medium text-blackPrimary">A2</p>
                                        <p class="text-xs md:text-sm font-medium text-blackPrimary">1400</p>
                                   </div>
                                   <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                                        <p class="text-xs md:text-sm font-medium text-blackPrimary">B1</p>
                                        <p class="text-xs md:text-sm font-medium text-blackPrimary">1400</p>
                                   </div>
                                   <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                                        <p class="text-xs md:text-sm font-medium text-blackPrimary">B2</p>
                                        <p class="text-xs md:text-sm font-medium text-blackPrimary">1400</p>
                                   </div>
                              </div>
                              <div class="bg-[#EFF7FD] border-t flex justify-between items-center px-4 py-[10px]">
                                   <p class="text-xs font-semibold text-blackLight md:text-blackPrimary">Total fare</p>
                                   <p class="text-base md:text-xs font-semibold text-blackPrimary">BDT <span>5600</span></p>
                              </div>
                         </div>

                         <!-- Passenger Information -->
                         <div class="mt-4">
                              <h2 class="text-xs md:text-base font-medium text-blackPrimary">Passenger name <span class="text-[#E0293B]">*</span></h2>
                              <input type="text" placeholder="Enter your name" class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary">
                         </div>

                         <div class="mt-4">
                              <h2 class="text-xs md:text-base font-medium text-blackPrimary">Phone no <span class="text-[#E0293B]">*</span></h2>
                              <input type="number" placeholder="Enter your phone" class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs focus:appearance-none placeholder:text-blackSecondery text-blackPrimary">
                         </div>

                         <div class="mt-4">
                              <h2 class="text-xs md:text-base font-medium text-blackPrimary flex justify-between"><span>Email id</span> <span class="text-[#8D8D8F]">Optional</span></h2>
                              <input type="email" placeholder="Enter your email id" class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary">
                         </div>

                         <button @click="riderectToPayment" class="bg-corporate rounded-full py-[13px] w-full text-white text-sm font-medium mt-6">
                              Next
                         </button>

                         <div class="text-center mt-[20px]">
                              <NuxtLink href="https://jatri.co/user/term-and-condition/" target="_blank" class="w-full underline text-blackPrimary text-sm font-normal">Terms and Conditions</NuxtLink>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import SelectOption from "../SearchForm/SelectOption.vue";
export default {
    data() {
        return {
            selected: false,
        };
     },
     components: { SelectOption },
     methods: {
          handleSeatView() {
               // if (this.selected) {
               this.selected = !this.selected;
               //      return;
               // }
          },
          riderectToPayment() {
               window.location.href= '/payment';
          }
     },
}
</script>

<style>

</style>