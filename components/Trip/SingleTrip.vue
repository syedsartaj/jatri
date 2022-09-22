<template>
     <div class="bg-white border border-[#ededed] rounded-[10px] h-[194px] mb-4">
          <div class="flex justify-between gap-x-6">
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
                    <button class="w-full bg-corporate rounded-full flex justify-center gap-x-[11.76px] items-center text-white text-xs font-medium p-3 mt-[26px]">View seats <span><img src="@/assets/images/icons/viewSeatIcon.svg" alt="" class="w-[8.49px] h-[5.19px]"></span></button>
               </div>
          </div>
     </div>
</template>

<script>
export default {

}
</script>

<style>

</style>