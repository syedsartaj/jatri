<template>
     <div class="w-1/4 p-[8px] h-15">
          <button  v-bind:class="showErrorToolTip && 'border-[#E0293B]'" class="block rounded-lg bg-white focus:outline-none w-full lg:p-2 border-[1px] border-[#DBDBDB] cursor-pointer" @click="toggleDropdown">
               <p v-if="label" class="lg:text-[10px] xl:text-xs font-normal text-blackSecondery text-left uppercase"> {{label}} </p>
               <div v-if="selectedOption !== ''" class="flex justify-between">
               <p
                    class="
                    lg:text-xs
                    xl:text-sm
                    2xl:text-base
                    font-medium
                    text-blackPrimary text-left
                    "
               >
                    {{ this.selectedOption.city_name }}
               </p>
               <img
                    src="@/assets/images/home/arrowDown.svg"
                    alt="arrow-down"
                    class="w-6 h-6"
               />
               </div>
               <div v-else class="flex justify-between">
               <p
                    class="
                    lg:text-xs
                    xl:text-sm
                    2xl:text-base
                    font-medium
                    text-blackPrimary text-left
                    "
               >
                    <span v-if="defaultOption">{{ defaultOption }}</span>
                    <span v-else>Select your Option</span>
               </p>
               <img
                    src="@/assets/images/home/arrowDown.svg"
                    alt="arrow-down"
                    class="w-6 h-6"
               />
               </div>
          </button>

          <!-- ErrorToolTip -->
          <SearchErrorToolTip v-if="showErrorToolTip" :message="errorMessage"/>

          <!-- dropdown -->
          <div v-if='optionsIsOpen' class='mt-10 -ml-5 xl:w-[380px] w-80 bg-white rounded-md shadow-xl z-[1000] leading-6 before:block before:-mt-2 before:ml-20 before:-skew-y-3 before:bg-white before:h-5 before:w-5 before:rotate-45 absolute divide-y-2'>
               <div class='text-center p-4'>
                    <h2 class='font-inter text-sm xl:text-[20px] font-[400]'>
                         <span v-if='defaultOption'>{{ defaultOption }}</span>
                         <span v-else>Select Your Location</span>
                    </h2>
               </div>
               <div class='flex justify-center items-center p-2'>
                    <input
                         v-if='allowFilter'
                         id="searchInput"
                         v-model='searchKey'
                         class='border border-gray-300 lg:px-16 xl:px-20 px-10 py-2 rounded-md outline-none overflow-x-hidden text-[#747476]'
                         placeholder='Search Location'
                         type='text'
                         autofocus
                         @keyup="search"
                    />
               </div>
               <ul class='overflow-y-auto divide-y divide-dashed divide-[#DBDBDB] h-[344px] text-sm xl:text-md text-td_text px-4'>
                    <!-- <li class='cursor-pointer font-inter py-[14px] font-medium text-corporate hover:text-corporate relative' @click='selectOption(option)'>
                         Dhaka
                         <span class='absolute right-5 top-5 bottom-0'><img src="@/assets/images/icons/tik.svg" alt="" class="w-4 h-3"></span>
                    </li> -->
                    <li 
                         v-for='(option, index) in filteredOptionsData' :key='index'
                         class='cursor-pointer font-inter py-[14px] font-normal hover:text-corporate relative'
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
import SearchErrorToolTip from "./SearchErrorToolTip.vue";
export default {
     components: {
      SearchErrorToolTip
     },
     props: {
          label: {
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
          errorOccured: {
               type: Boolean,
               required: true
          }
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
          },
          showErrorToolTip () {
               return this.errorOccured && !this.selectedOption;
          },
          errorMessage () {
               return this.label === "To" ? "Enter destination first" : "Enter location first"
          }
     },
}
</script>

<style>

</style>