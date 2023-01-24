<template>
     <div class="">
          <button :class="optionsIsOpen && 'border border-[#4D4D4F]'" class="flex justify-between items-center rounded bg-[#F7F7F7] focus:outline-none w-full px-[17.67px] py-[13px] mb-[14px]" @click="toggleDropdown">
               <div class="flex justify-start gap-x-[17.67px] items-center w-10/12">
                    <img v-if="icon" :src='icon' alt="">
                    <p v-if="label && selectedOption === ''" class="text-xs font-normal text-blackSecondery text-left"> {{label}} </p>
                    <p v-if="selectedOption !== ''" class="text-xs font-normal text-blackSecondery text-left"> {{ this.selectedOption.city_name.toUpperCase() }} </p>
               </div>
               <img src="@/assets/images/icons/mobileFilterDropdownIcon.svg" alt="" :class="optionsIsOpen ? 'transition-all ease-in-out rotate-180': ''">
          </button>

          <!-- dropdown -->
          <div v-if='optionsIsOpen' class='mt-2 max-w-[348px] bg-white rounded shadow-xl z-[1000] leading-6 absolute divide-y-2 left-1/2 transform -translate-x-1/2'>
               <div class='flex justify-center items-center p-2'>
                    <input
                    v-if='allowFilter'
                         id="searchInput"
                         v-model='searchKey'
                         class='border border-gray-300 lg:px-16 xl:px-20 px-10 py-2 rounded-md outline-none overflow-x-hidden text-[#747476]'
                         placeholder='Search Location'
                         autocomplete="off"
                         type='text'
                         autofocus
                         @keyup="search"
                    />
               </div>
               <ul class='overflow-y-auto divide-y divide-dashed divide-[#DBDBDB] h-auto text-sm xl:text-md text-td_text px-4'>
                    <li 
                         v-for='(option, index) in filteredOptionsData' :key='index' 
                         class='cursor-pointer font-inter py-[14px] font-medium hover:text-corporate relative'
                         :class="option.city_name === selectedOption.city_name ? 'text-corporate font-medium' : '' "
                         @click='selectOption(option)'
                    >
                         {{ option.city_name }}
                         <span v-if='option.city_name === selectedOption.city_name' class='absolute right-5 top-5 bottom-0'><img src="@/assets/images/icons/tik.svg" alt="" class="w-4 h-3"></span>
                    </li>
               </ul>
          </div>
     </div>
</template>

<script>
export default {
     props: {
          label: {
               type: String,
               required: false
          },
          icon: {
               type: String,
               required: false
          },
          defaultOption: {
               type: String,
               required: false
          },
          allowFilter: {
               type: Boolean,
               required: false
          },
          options: {
               type: Array,
               required: true
          },
          defaultValue: "",
     },
     data () {
          return {
               optionsIsOpen: false,
               selectedOption: '',
               searchKey: '',
          }
     },
     watch:{
		defaultValue: {
               handler(value) {
                    this.selectedOption = value
               },
               deep: true,
               immediate: true
          },
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
          },
          search(e) {
               this.searchKey = e.target.value;
          }
     },
     computed: {
          filteredOptionsData () {
               return this.options.filter(option => {
                    return option.city_name.toLowerCase().includes(this.searchKey.toLowerCase())
               })
          }
     },
}
</script>

<style>

</style>