<template>
     <div class="relative z-[1000]">
          <div class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
               <div class="flex min-h-full items-end justify-center md:p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden md:rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[800px]">
                         <div class="bg-white p-4 md:p-6">
                              <div class="flex justify-between">
                                   <p class="text-blackPrimary text-base md:text-[28px] md:leading-9 font-medium">Filter</p>
                                   <button @click="close">
                                        <img src="@/assets/images/icons/closeIcon.svg" alt=""/>
                                   </button>
                              </div>
                              <hr class="my-4">
                              <div class="bg-white">
                                   <div class="flex justify-between gap-[7px] mt-[10px]">
                                        <button class="bg-[#ededed] hover:bg-corporate w-[125px] rounded px-[6px] py-2 text-blackPrimary hover:text-white text-xs font-medium">AC</button>
                                        <button class="bg-[#ededed] hover:bg-corporate w-[125px] rounded px-[6px] py-2 text-blackPrimary hover:text-white text-xs font-medium">Non AC</button>
                                        <button class="bg-[#ededed] hover:bg-corporate w-[125px] rounded px-[6px] py-2 text-blackPrimary hover:text-white text-xs font-medium">Any</button>
                                   </div>
                                   <hr class="my-4">
                                   <ul class='divide-y divide-dashed divide-[#DBDBDB]'>
                                        <li class='cursor-pointer text-base font-normal text-corporate hover:text-corporate relative py-[10px]' @click='selectOption()'>
                                             Price low to high
                                             <span class='absolute right-5 top-5 bottom-0'><img src="@/assets/images/icons/tik.svg" alt="" class="w-4 h-3"></span>
                                        </li>
                                        <li class='cursor-pointer text-base font-normal text-blackPrimary hover:text-corporate relative py-[10px]' @click='selectOption()'>
                                             Price high to low
                                        </li>
                                   </ul>

                                   <div class="flex justify-center gap-x-5 pb-7 pt-[14px]">
                                        <button class="px-[70.5px] py-[10px] border border-[#808083] hover:border-corporate bg-white hover:bg-corporate text-corporate hover:text-white text-sm rounded-full">Reset</button>
                                        <button class="px-[70.5px] py-[10px] border border-[#808083] hover:border-corporate bg-white hover:bg-corporate text-corporate hover:text-white text-sm rounded-full">Apply</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>

</template>

<script>
export default {
     props: ['close'],
}
</script>

<style>

</style>