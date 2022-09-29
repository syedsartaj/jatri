<template>
     <div class="border-b border-b-[#DBDBDB] last:border-b-0 py-4">
          <button @click="handleAccordionOpenStatus()" class="flex justify-between items-center w-full">
               <h2 class="text-base text-blackPrimary font-medium leading-6 text-left">{{heading}}</h2>
               <img src="@/assets/images/icons/accordionIcon.svg" alt="" :class="accordionOpen ? 'transform rotate-180 transition-all duration-300 ease-in-out': ''">
          </button>
          <div :class="accordionOpen ? 'max-h-max transition-all duration-300 ease-in-out': 'max-h-0 overflow-hidden'">
               <p class="text-sm text-blackLight font-normal py-4" v-html="details"></p>
          </div>
     </div>
</template>

<script>
export default {
     props: ['heading', 'details'],
     data(){
          return{
               accordionOpen: false,
          }
     },
     methods: {
          handleAccordionOpenStatus(){
               this.accordionOpen = !this.accordionOpen
          }
     }
}
</script>

<style>

</style>