<template>
     <div class="border-b border-b-[#DBDBDB] last:border-b-0 py-4">
		<button @click="handleAccordionOpenStatus" class="flex justify-between items-center w-full focus:outline-0 outline-0">
               <h2 class="text-base text-blackPrimary font-medium leading-6 text-left">{{ accordion.heading }}</h2>
               <img src="@/assets/images/icons/accordionIcon.svg" alt="" :class="open ? 'transform rotate-180 transition-all duration-300 ease-in-out': ''"/>
          </button>
		<div :class="open ? 'transform max-h-max transition-all duration-300 ease-in-out' : 'transform max-h-0 transition-all duration-300 ease-in-out overflow-hidden'">
               <p class="text-sm text-blackLight font-normal py-4 text-justify" v-html="accordion.details"></p>
          </div>
	</div>
</template>

<script>
export default {
     props: ['accordion', 'index', 'open'],
     data(){
          return{}
     },
     methods: {
          handleAccordionOpenStatus(){
               this.$emit('toggleOpen', this.index)
          }
     }
}
</script>

<style>

</style>