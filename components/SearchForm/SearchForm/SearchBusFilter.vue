<template>
     <div class="w-1/4 px-6 py-4">
          <button class="block rounded-lg bg-white focus:outline-none w-full" @click="toggleDropdown">
               <p v-if='label' class="text-xs font-normal text-blackSecondery text-left"> {{ label }} </p>
               <p v-if="selectedOption !== ''" class="text-base font-medium text-blackPrimary text-left"> {{ this.selectedOption.city_name.toUpperCase() }} </p>

               <p v-else class="text-base font-medium text-blackPrimary text-left"> 
                    <span v-if='defaultOption'>{{ defaultOption }}</span>
                    <span v-else>Select your Option</span>
               </p>
          </button>

          <!-- dropdown -->
          <div v-if='optionsIsOpen' class='mt-[25px] -ml-5 xl:w-[380px] w-80 bg-white rounded-md shadow-xl z-[1000] leading-6 before:block before:-mt-2 before:ml-20 before:-skew-y-3 before:bg-white before:h-5 before:w-5 before:rotate-45 absolute divide-y-2'>
               <div class='text-center p-4'>
                    <h2 class='font-inter text-sm xl:text-[20px] font-[400]'>
                         <span v-if='defaultOption'>{{ defaultOption }}</span>
                         <span v-else>Select Bus Type</span>
                    </h2>
               </div>
               <ul class='overflow-y-auto divide-y divide-dashed divide-[#DBDBDB] h-[344px] text-sm xl:text-md text-td_text px-4'>
                    <li 
                         v-for='(option, index) in filteredOptionsData'
                         :key='index'
                         class='cursor-pointer font-inter py-[14px] font-medium  hover:text-corporate relative'
                         :class="option.city_name === selectedOption.city_name ? 'text-corporate' : '' "
                         @click='selectOption()'

                    >
                         {{ option.city_name.toUpperCase() }}

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
     },
     data () {
          return {
               optionsIsOpen: false,
               selectedOption: { city_name: "all" },
               searchKey: ''
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
     },
     computed: {
          filteredOptionsData () {
               return this.options.filter(option => {
                    return option.city_name.toLowerCase().includes(this.searchKey.toLowerCase())
               })
          }
     },
     watch:{
		"$route.query": {
               handler: function(value) {
                    const { type } = value;
                    if(type) {
                         this.options.filter(s => {
                              if (s.city_name.toLowerCase() === type.toLowerCase()) {
                                   this.selectedOption = s;
                              }
                         });
                    }
               },
               deep: true,
               immediate: true,
          },
	},
}
</script>

<style>

</style>