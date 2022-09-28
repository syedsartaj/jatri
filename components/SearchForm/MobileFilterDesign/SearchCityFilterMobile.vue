<template>
     <div class="">
          <button class="flex justify-between items-center rounded bg-[#F7F7F7] focus:outline-none w-[348px] px-[17.67px] py-[13px] mb-[14px]" @click="toggleDropdown">
               <div class="flex justify-start gap-x-[17.67px] items-center w-10/12">
                    <img src="@/assets/images/icons/fromStoppageIcon.svg" alt="">
                    <p class="text-xs font-normal text-blackSecondery text-left"> From city or your location </p>
               </div>
               <img src="@/assets/images/icons/mobileFilterDropdownIcon.svg" alt="" :class="optionsIsOpen ? 'transition-all ease-in-out rotate-180': ''">
          </button>

          <!-- dropdown -->
          <div v-if='optionsIsOpen' class='mt-2 w-[348px] bg-white rounded shadow-xl z-[1000] leading-6 absolute divide-y-2'>
               <div class='flex justify-center items-center p-2'>
                    <input
                         id="searchInput"
                         v-model='searchKey'
                         class='border border-gray-300 lg:px-16 xl:px-20 px-10 py-2 rounded-md outline-none overflow-x-hidden text-[#747476]'
                         placeholder='Search Location'
                         type='text'
                         autofocus
                    />
               </div>
               <ul class='overflow-y-auto divide-y divide-dashed divide-[#DBDBDB] h-[344px] text-sm xl:text-md text-td_text px-4'>
                    <li class='cursor-pointer font-inter py-[14px] font-medium text-corporate hover:text-corporate relative' @click='selectOption()'>
                         Dhaka
                         <span class='absolute right-5 top-5 bottom-0'><img src="@/assets/images/icons/tik.svg" alt="" class="w-4 h-3"></span>
                    </li>
                    <li class='cursor-pointer font-inter py-[14px] font-normal hover:text-corporate relative' @click='selectOption()'>
                         Dhaka
                    </li>
                    <li class='cursor-pointer font-inter py-[14px] font-normal hover:text-corporate relative' @click='selectOption()'>
                         Dhaka
                    </li>
                    <li class='cursor-pointer font-inter py-[14px] font-normal hover:text-corporate relative' @click='selectOption()'>
                         Dhaka
                    </li>
                    <li class='cursor-pointer font-inter py-[14px] font-normal hover:text-corporate relative' @click='selectOption()'>
                         Dhaka
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