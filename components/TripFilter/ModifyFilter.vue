<template>
     <div class="bg-white border border-[#ededed] rounded-[10px] px-4 py-6 w-[420px] h-[412px]">
          <div class="flex justify-between gap-x-8">
               <button class="border border-[#8d8d8f] w-full rounded-full px-4 py-[10px] flex justify-center items-center gap-x-[13.5px] font-medium text-xs text-blackPrimary"><img src="@/assets/images/icons/leftArrow.svg" alt="left arrow" class="w-[5.19px] h-[8.49px]">Prev. Day</button>
               <button class="border border-[#8d8d8f] w-full rounded-full px-4 py-[10px] flex justify-center items-center gap-x-[13.5px] font-medium text-xs text-blackPrimary">Next Day<img src="@/assets/images/icons/rightArrow.svg" alt="right arrow" class="w-[5.19px] h-[8.49px]"></button>
          </div>
          <hr class="my-5">
          <div class="flex justify-between items-center">
               <h2 class="font-medium text-2xl text-blackPrimary">Filter Options</h2>
               <div class="flex justify-between items-center gap-x-[9.33px]">
                    <img src="@/assets/images/icons/resetIcon.svg" alt="reset filter" class="w-[13.33px]">
                    <p class="text-[#E0293B] font-medium text-xs">Reset Filter</p>
               </div>
          </div>
          <hr class="my-5">
          <div>
               <h2 class="text-blackSecondery text-base font-medium">BUS TYPE:</h2>
               <div class="flex justify-between gap-[7px] mt-[10px]">
                    <button class="flex justify-center items-center bg-[#ededed] w-[125px] rounded px-[6px] py-2 text-blackPrimary text-xs font-medium"><img src="@/assets/images/icons/acIcon.svg" alt="Ac" class="">AC</button>
                    <button class="flex justify-center items-center bg-[#ededed] w-[125px] rounded px-[6px] py-2 text-blackPrimary text-xs font-medium"><img src="@/assets/images/icons/nonAcIcon.svg" alt="Non Ac" class="">Non AC</button>
                    <button class="flex justify-center items-center bg-[#ededed] w-[125px] rounded px-[6px] py-2 text-blackPrimary text-xs font-medium"><img src="@/assets/images/icons/anyConditionIcon.svg" alt="any" class="">Any</button>
               </div>
          </div>
          <hr class="my-5">
          <h2 class="text-blackSecondery text-base font-medium">PRICE:</h2>
          <div class="mt-[10px] divide-y divide-dashed">
               <div class="flex justify-between items-center my-2">
                    <label for="lowToHigh" class="flex justify-start items-center gap-x-[9.52px]">
                         <img src="@/assets/images/icons/upArrow.svg" alt="low to high">
                         <p class="text-blackPrimary text-base font-normal">Price low to high</p>
                    </label>
                    <input id="lowToHigh" type="checkbox" class="default:border-2 border-blackPrimary">
               </div>
               <div class="flex justify-between items-center my-2">
                    <label for="highToLow" class="flex justify-start items-center gap-x-[9.52px]">
                         <img src="@/assets/images/icons/downArrow.svg" alt="low to high">
                         <p class="text-blackPrimary text-base font-normal">Price high to low</p>
                    </label>
                    <input id="highToLow" type="checkbox" class="default:border-2 border-blackPrimary">
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