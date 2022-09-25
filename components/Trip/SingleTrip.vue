<template>
     <div class="bg-white border border-[#ededed] rounded-[10px] mb-4">
          <div class="flex justify-between gap-x-6" :class="selected ? 'border-b': 'border-0'">
               <div class="w-4/5 py-5 pl-6 divide-y divide-dashed divide-[#DBDBDB]">
                    <div class="flex justify-start gap-x-4 items-center pb-[15px]">
                         <img src="@/assets/images/busDefaultImage.svg" alt="">
                         <div>
                              <h2 class="text-xl font-medium text-blackPrimary">Green Line Paribahan Limited</h2>
                              <p class="text-xs font-normal text-blackSecondery">AC Bus</p>
                         </div>
                    </div>
                    <div class="flex justify-between py-[15px]">
                         <p class="text-xs font-normal text-blackSecondery">Route</p>
                         <h2 class="text-sm font-medium text-blackPrimary">Dhaka - Comilla- Chittagong - Location - Location - Location</h2>
                    </div>
                    <div class="flex justify-between pt-[19px]">
                         <p class="text-xs font-normal text-blackSecondery">Depatrure time</p>
                         <h2 class="text-base font-medium text-blackPrimary">06:45 PM</h2>
                    </div>
               </div>
               <div class="h-[194px] w-[1px] bg-[#DBDBDB] mx-6 "></div>
               <div class="w-1/5 py-5 pr-6">
                    <img src="@/assets/images/icons/fareIcon.svg" alt="" class="w-[30px]">
                    <h2 class="mt-[10px] text-xl font-semibold text-blackPrimary">1400 <span class="text-base">TK</span></h2>
                    <p class="text-xs font-normal text-blackSecondery mt-1">Per ticket</p>
                    <button @click="handleSeatView" class="w-full bg-corporate rounded-full flex justify-center gap-x-[11.76px] items-center text-white text-xs font-medium p-3 mt-[26px]"> {{selected ? 'Close seats' : 'View seats' }} <span><img src="@/assets/images/icons/viewSeatIcon.svg" alt="" :class="selected && 'transition-all ease-in-out rotate-180'" class="w-[8.49px] h-[5.19px]"></span></button>
               </div>
          </div>

          <!-- accordion start -->
          <div v-if="selected" class="bg-white rounded-b-[10px] pt-4 pr-6 pb-6 pl-4" :class="selected ? 'max-h-max transition-all ease-in-out duration-700': 'h-0'">
               <div class="flex justify-between">
                    <!-- Bus Design -->
                    <div class="w-1/2 ">
                         <div class="rounded-[10px] py-6 px-4 mr-6 bg-[#f7f7f7]">
                              <div class="flex justify-between border-t border-b border-dashed items-center p-2 mt-5 divide-x">
                              <div class="flex gap-2 justify-center items-center">
                                   <img src="@/assets/images/seats/available-seats.svg" alt="Available">
                                   <p class="text-sm leading-[18px] font-normal text-blackLight"> Available</p>
                              </div>
                              <div class="flex gap-2 justify-center items-center">
                                   <img src="@/assets/images/seats/bookedSeats.svg" alt="Booked">
                                   <p class="text-sm leading-[18px] font-normal text-blackLight"> Booked</p>
                              </div>
                              <div class="flex gap-2 justify-center items-center">
                                   <img src="@/assets/images/seats/selected-seats.svg" alt="Selected">
                                   <p class="text-sm leading-[18px] font-normal text-blackLight"> Selected</p>
                              </div>
                         </div>
                         
                         <div class="p-5">
                              <div class="flex justify-end items-end mt-2">
                                   <img src="@/assets/images/seats/driver.svg" alt="driver" class="w-[30px]"/>
                              </div>
                              <!-- Seats here -->
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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
                              <div class="flex justify-between gap-x-[30px] pl-[31px] mt-6">
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

                    <div class="w-1/2 border-l pl-6">
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
                              <h2 class="text-base font-medium text-blackPrimary">Departure time</h2>
                              <div class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded">
                                   <p class="text-blackPrimary text-sm font-medium">07:30 PM</p>
                              </div>
                         </div>

                         <!-- Seat Fare Table -->
                         <div class="mt-4 bg-[#f7f7f7] rounded border border-[#EDEDED]">
                              <div class="flex justify-between px-[14px] pt-[10px] pb-[6px] border-b">
                                   <p class="text-xs font-semibold text-blackPrimary">Seat</p>
                                   <p class="text-xs font-semibold text-blackPrimary">Fare</p>
                              </div>
                              <div class="px-[14px] py-3">
                                   <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                                        <p class="text-sm font-medium text-blackPrimary">A1</p>
                                        <p class="text-sm font-medium text-blackPrimary">1400</p>
                                   </div>
                                   
                                   <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                                        <p class="text-sm font-medium text-blackPrimary">A2</p>
                                        <p class="text-sm font-medium text-blackPrimary">1400</p>
                                   </div>
                                   <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                                        <p class="text-sm font-medium text-blackPrimary">B1</p>
                                        <p class="text-sm font-medium text-blackPrimary">1400</p>
                                   </div>
                                   <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                                        <p class="text-sm font-medium text-blackPrimary">B2</p>
                                        <p class="text-sm font-medium text-blackPrimary">1400</p>
                                   </div>
                              </div>
                              <div class="bg-[#EFF7FD] border-t flex justify-between px-4 py-[10px]">
                                   <p class="text-xs font-semibold text-blackPrimary">Total fare</p>
                                   <p class="text-xs font-semibold text-blackPrimary">BDT <span>5600</span></p>
                              </div>
                         </div>

                         <!-- Passenger Information -->
                         <div class="mt-4">
                              <h2 class="text-base font-medium text-blackPrimary">Passenger name <span class="text-[#E0293B]">*</span></h2>
                              <input type="text" placeholder="Enter your name" class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 placeholder:text-blackSecondery text-blackPrimary">
                         </div>

                         <div class="mt-4">
                              <h2 class="text-base font-medium text-blackPrimary">Phone no</h2>
                              <input type="number" placeholder="Enter your name" class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 focus:appearance-none placeholder:text-blackSecondery text-blackPrimary">
                         </div>

                         <div class="mt-4">
                              <h2 class="text-base font-medium text-blackPrimary">Email id</h2>
                              <input type="email" placeholder="Enter your name" class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 placeholder:text-blackSecondery text-blackPrimary">
                         </div>

                         <button class="bg-corporate rounded-full w-full py-[13px] text-white text-sm font-medium mt-6">
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
import SelectOption from "../SerachForm/SelectOption.vue";
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
          }
     },
}
</script>

<style>

</style>