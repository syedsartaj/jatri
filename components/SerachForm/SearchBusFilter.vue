<template>
     <div class="w-1/4 px-6 py-4">
          <button class="block rounded-lg bg-white p-2 focus:outline-none w-full" @click="toggleDropdown">
               <p class="text-xs font-medium text-blackSecondery text-left"> BUS TYPE </p>
               <p class="text-base font-normal text-blackPrimary text-left"> Ac/Non Ac </p>
          </button>

          <!-- dropdown -->
          <div v-if='optionsIsOpen' class='mt-[25px] -ml-5 xl:w-[380px] w-80 bg-white rounded-md shadow-xl z-[1000] leading-6 before:block before:-mt-2 before:ml-20 before:-skew-y-3 before:bg-white before:h-5 before:w-5 before:rotate-45 absolute divide-y-2'>
               <div class='text-center p-4'>
                    <h2 class='font-inter text-sm xl:text-[20px] font-[400]'>
                         <span v-if='defaultOption'>{{ defaultOption }}</span>
                         <span v-else>Select Bus Type</span>
                    </h2>
               </div>
               <ul class='overflow-y-auto divide-y divide-dashed h-[344px] text-sm xl:text-md text-td_text px-4'>
                    <li class='cursor-pointer font-inter py-[14px] font-medium text-corporate hover:text-corporate relative' @click='selectOption()'>
                         AC
                         <span class='absolute right-5 top-5 bottom-0'><img src="@/assets/images/icons/tik.svg" alt="" class="w-4 h-3"></span>
                    </li>
                    <li class='cursor-pointer font-inter py-[14px] font-normal hover:text-corporate relative' @click='selectOption()'>
                         Non Ac
                    </li>
                    <li class='cursor-pointer font-inter py-[14px] font-normal hover:text-corporate relative' @click='selectOption()'>
                         All
                    </li>
               </ul>
          </div>
     </div>
</template>

<script>
export default {
     data () {
          return {
               optionsIsOpen: false,
          }
     },
     watch:{
		defaultValue(value){
			this.selectedOption = value
		}
	},
     mounted () {
          window.addEventListener('click', this.close)
     },

     beforeDestroy () {
          window.removeEventListener('click', this.close)
     },

     methods: {
          toggleDropdown () {
               this.optionsIsOpen = !this.optionsIsOpen
               setTimeout(function(){document.getElementById('searchInput').focus()},10);
          },
          selectOption (option) {
               this.selectedOption = option
               this.$emit('input', this.selectedOption.city_name)
               this.optionsIsOpen = false
          },
          close (e) {
               if (!this.$el.contains(e.target)) {
               this.optionsIsOpen = false
               }
          }
     }
}
</script>

<style>

</style>