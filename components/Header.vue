<template>
     <div class="header">
          <NuxtLink to="/"><img src="@/assets/images/logo.svg" alt="logo" class="h-10 w-[79]"/></NuxtLink>

          <div class="flex gap-x-8">
               <a href="tel:09642080808" class="bg-[#f7f7f7] text-blackPrimary rounded-full px-4 py-2 justify-between gap-x-[10.5px] hidden lg:flex">
                    <img src="@/assets/images/icons/phoneBlack.svg" alt=""> 
                    <span>09642080808</span>
               </a>

               <NuxtLink to="/find-ticket" class="bg-[#FEF2F0] text-corporate rounded-full px-4 py-2 flex justify-between gap-x-[10.5px]"> 
                    <img src="@/assets/images/icons/searchIcon.svg" alt=""> 
                    <span>Find ticket</span>
               </NuxtLink>
          </div>
     </div>
</template>

<script>
</script>

<style>

</style>