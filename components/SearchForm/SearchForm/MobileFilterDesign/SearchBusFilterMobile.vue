<template>
     <div class="">
          <button class="flex justify-between items-center rounded bg-[#F7F7F7] focus:outline-none w-full px-[17.67px] py-[13px] mb-[14px]" @click="toggleDropdown">
               <div class="flex justify-start gap-x-[17.67px] items-center w-10/12">
                    <img src="@/assets/images/icons/searchTypeIcon.svg" alt="">
                    <p class="text-xs font-normal text-blackSecondery text-left"> BUS TYPE </p>
               </div>
               <img src="@/assets/images/icons/mobileFilterDropdownIcon.svg" alt="" :class="optionsIsOpen ? 'transition-all ease-in-out rotate-180': ''">
          </button>

          <!-- dropdown -->
          <div v-if='optionsIsOpen' class='mt-2 max-w-[348px] bg-white rounded shadow-xl z-[1000] leading-6 absolute divide-y-2'>
               <ul class='overflow-y-auto divide-y divide-dashed divide-[#DBDBDB] h-[174px] text-sm xl:text-md text-td_text px-4'>
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