<template>
     <div class="relative z-[1000]">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
               <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[800px]">
                         <div class="bg-white p-6">
                              <div class="flex justify-between">
                                   <p class="text-blackPrimary text-[28px] leading-9 font-medium">How to buy ticket</p>
                                   <button @click="close">
                                        <img src="@/assets/images/icons/closeIcon.svg" alt=""/>
                                   </button>
                              </div>
                              <hr class="my-4">
                              <div class="w-[752px] h-[436px] overflow-hidden rounded-[10px]">
                                   <iframe
                                        style="height: 100%; width: 100%"
                                        src="https://www.youtube.com/embed/UnmgrByrDmU" 
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                   </iframe>
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