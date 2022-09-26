<template>
     <div class=" bg-[#f7f7f7]">
          <div class="w-[816px] mx-auto py-[30px]">
               
               <FindTicket/>

               <div class="mt-10 flex justify-between items-center gap-x-4">
                    <div class="h-[2px] bg-[#DBDBDB] w-full"></div>
                    <p class="text-base font-medium whitespace-nowrap">Active Tickets</p>
                    <div class="h-[2px] bg-[#DBDBDB] w-full"></div>
               </div>

               <div class="mt-6">
                    <Ticket/>
               </div>

               <div class="mt-10 flex justify-between items-center gap-x-4">
                    <div class="h-[2px] bg-[#DBDBDB] w-full"></div>
                    <p class="text-base font-medium whitespace-nowrap">Old Tickets</p>
                    <div class="h-[2px] bg-[#DBDBDB] w-full"></div>
               </div>

               <div class="mt-4">
                    <Ticket/>
               </div>

               <div class="mt-4">
                    <Ticket/>
               </div>

               <div class="mt-4">
                    <Ticket/>
               </div>

               <div class="mt-4">
                    <Ticket/>
               </div>

          </div>
     </div>
</template>

<script>
import FindTicket from "../../components/FindTicket/FindTicket.vue";
import Ticket from "~~/components/Ticket/Ticket.vue";
     export default {
    components: { FindTicket, Ticket }
}
</script>

<style>

</style>