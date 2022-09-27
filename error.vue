<template>
     <div class="bg-[#f7f7f7]">
          <Header/>
          <div class="my-[75px] flex justify-center bg-[#f7f7f7]">
               <div class="">
                    <img src="@/assets/images/ErrorLayout.svg" alt="" class="w-[142px] block mx-auto">
                    <h2 class="text-center text-2xl font-medium text-blackPrimary mt-8">Something Went Wrong</h2>
                    <p class="text-center text-[#8D8D8F] text-base font-normal mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipis fames auctor faucibus ac justo volutpat.</p>
                    <button @click="refreshPage" class="block mx-auto bg-transparent rounded-full border border-[#8D8D8F] mt-[26px] px-6 py-[13px] w-40 text-corporate text-sm font-medium">Refresh</button>
               </div>
          </div>
          <Footer/>
     </div>
</template>
   
<script setup>
   const props = defineProps({
     error: Object
   })
   const refreshPage = () => {window.location.reload()}
</script>