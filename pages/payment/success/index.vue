<template>
     <div class="py-10 bg-[#f7f7f7]">
          <div class="text-center w-[380px] lg:w-[558px] mx-auto">
               <img src="@/assets/images/icons/success.svg" alt="" class="animate-animateZoom w-10 lg:w-[46px] block mx-auto">
               <h2 class="text-blackPrimary text-xl lg:text-[28px] lg:leading-9 font-semibold mt-5">
                    Ticket Booked Successfullly
               </h2>
               <p class="text-blackLight text-sm lg:text-base font-normal mt-[6px] lg:mt-4">
                    Your ticket has been purchased succesfully. Please check your mail/message to get your ticket and further instructions.
               </p>
          </div>

          <div class="w-[380px] lg:w-[880px] mx-auto mt-[17px] lg:mt-10">
               <Ticket/>
          </div>
     </div>
</template>

<script>
import Ticket from '~~/components/Ticket/Ticket.vue';
export default {
    components: { Ticket }
}
</script>

<style>

</style>