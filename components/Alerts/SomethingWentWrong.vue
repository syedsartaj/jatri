<template>
     <div class="flex justify-center my-[75px]">
          <div class="w-[380px] lg:w-[458px]">
               <img src="@/assets/images/ErrorLayout.svg" alt="" class="w-[151.82px] lg:w-[189.78px] block mx-auto animate-animateZoom">
               <h2 class="text-center text-base lg:text-2xl font-medium text-blackPrimary mt-8">Something Went Wrong</h2>
               <p class="text-center text-[#8D8D8F] text-xs lg:text-base font-normal mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipis fames auctor faucibus ac justo volutpat.</p>
               <button @click="refreshPage" class="block mx-auto bg-transparent rounded-full border border-[#8D8D8F] mt-[26px] px-6 py-[13px] w-40 text-corporate text-sm font-medium">Refresh</button>
          </div>
     </div>
</template>

<script setup>
const props = defineProps({
     error: Object
   })
   const refreshPage = () => {window.location.reload()}
</script>

<style>

</style>