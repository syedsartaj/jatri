<template>
     <div class="flex flex-col justify-center gap-y-4 items-center w-[548px] h-[220px]">
          <img src="@/assets/images/icons/tripNotFound.svg" alt="" class="animate-bounce">
          <h2 class="text-blackPrimary text-[28px] leading-9 font-bold">Opss!</h2>
          <p class="text-[#8D8D8F] text-base font-normal text-center" :class="customStyle">
               {{details}}
          </p>
     </div>
</template>

<script>
export default {
     props: ['details', 'customStyle']
}
</script>

<style>

</style>