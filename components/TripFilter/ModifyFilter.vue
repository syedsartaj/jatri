<template>
     <div class="bg-white border border-[#ededed] rounded-[10px] px-4 py-6 w-full h-[412px]">
          <div class="flex justify-between gap-x-8">
               <button 
                    @click="previousDateFilter"
                    class="border border-[#8d8d8f] w-full rounded-full px-4 py-[10px] flex justify-center items-center gap-x-[13.5px] font-medium text-xs text-blackPrimary"
               >
                    <img src="@/assets/images/icons/leftArrow.svg" alt="left arrow" class="w-[5.19px] h-[8.49px]">
                    Prev. Day
               </button>
               <button
               @click="nextDateFilter"
                    class="border border-[#8d8d8f] w-full rounded-full px-4 py-[10px] flex justify-center items-center gap-x-[13.5px] font-medium text-xs text-blackPrimary"
               >
                    Next Day
                    <img src="@/assets/images/icons/rightArrow.svg" alt="right arrow" class="w-[5.19px] h-[8.49px]">
               </button>
          </div>
          <hr class="my-5">
          <div class="flex justify-between items-center">
               <h2 class="font-medium text-2xl text-blackPrimary">Filter Options</h2>
               <!-- <button class="flex justify-between items-center gap-x-[9.33px]">
                    <img src="@/assets/images/icons/resetIcon.svg" alt="reset filter" class="w-[13.33px]">
                    <p class="text-[#E0293B] font-medium text-xs">Reset Filter</p>
               </button> -->
          </div>
          <hr class="my-5">
          <div>
               <h2 class="text-blackSecondery text-base font-medium">BUS TYPE:</h2>
               <div class="flex justify-between gap-[7px] mt-[10px]">
                    <div v-for="busType in coachTypes" :key="busType" class="w-[125px] h-9">
                         <input id="busType" type="checkbox" class="hidden">
                         <label for="busType">
                              <button 
                                   @click="setCoachtype(busType)"
                                   class="group w-full h-full flex justify-center items-center gap-x-[10px] capitalize rounded px-[6px] py-2 text-xs font-medium"
                                   :class="coachType == busType ? 'bg-corporate text-white': 'bg-[#ededed] text-blackPrimary'"
                              >
                                   <img :src="require(
                                             busType == 'ac' ? '@/assets/images/icons/acIcon.svg':
                                             busType == 'non-ac' ? '@/assets/images/icons/nonAcIcon.svg' : 
                                             '@/assets/images/icons/anyConditionIcon.svg'
                                        )
                                        " alt="Bus Type" class=""
                                   >
                                   {{busType}}
                              </button>
                         </label>
                    </div>
               </div>
          </div>
          <hr class="my-5">
          <h2 class="text-blackSecondery text-base font-medium">PRICE:</h2>
          <div class="mt-[10px] divide-y divide-dashed">
               <div v-for="priceDirection in priceFilter" :key="priceDirection" class="flex justify-between items-center my-2 last:pt-[6px]">
                    <label :for="priceDirection" class="flex justify-start items-center gap-x-[9.52px] cursor-pointer text-blackPrimary text-base font-normal">
                         <img :src="require(
                                   priceDirection == 'l2h' ? '@/assets/images/icons/downArrow.svg':
                                   '@/assets/images/icons/upArrow.svg'
                              )
                              " alt="Price Filter Type" class=""
                         >
                         {{priceDirection == 'l2h'? 'Price low to high' : 'Price high to low'}}
                    </label>
                    <input :id="priceDirection" type="checkbox" @click="priceFilterType = priceDirection" :checked="priceFilterType === priceDirection" class="default:border-2 border-blackPrimary">
               </div>
          </div>
     </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { timeFormat } from '@/helpers/dateTimeFormat';
import moment from 'moment';
import Cookies from 'js-cookie';
export default {
     data() {
          return {
               departure: "",
               destination: "",
               departureName: "",
               destinationName: "",
               departingDate: this.$route.query.date,
               coachTypes: ["ac" , "non-ac", "all"],
               coachType: "",
               priceFilter: ["l2h","h2l"],
               priceFilterType: null
          };
     },
     computed: {
          ...mapGetters("guarantedseat", ["getGsCities"]),
          ...mapGetters("guarantedseat", ["getGsTrips", "getGsLoading"])
     },
     
     watch: {
          coachType(value) {
               if (value) {
                    this.handleFromSubmit();
               }
          },

          priceFilterType:{
               immediate: true,
               handler: function(value){
                    if(value){
                         this.sortedTrip(value);
                    }
               }
          },
          '$route.query': {
               immediate: true,
               handler() {
                    this.priceFilterType = null,
                    this.coachType = this.$route.query.type
               }
          }
     },

     methods: {
          ...mapMutations("guarantedseat", ["sortedTrip"]),
          setCoachtype(type){
               this.coachType = type
          },
          handleFromSubmit() {
               const query = {
                    from: this.$route.query.from,
                    to: this.$route.query.to,
                    type: this.coachType,
                    date: this.$route.query.date,
               };
               Cookies.remove('process-allow')
               this.$router.push({ path: "/trip", query });
          },
          previousDateFilter() {
               const convertedDate = new Date(+this.$route.query.date).toLocaleString('en-CA', {dateStyle: 'short'})
               const previousDate = moment(convertedDate).add(-1, 'days');
               const query = {
                    from: this.$route.query.from,
                    to: this.$route.query.to,
                    type: this.$route.query.type,
                    date: previousDate.valueOf(),
               };
               Cookies.remove('process-allow')
               this.$router.push({ path: "/trip", query });
          },
          nextDateFilter() {
               const convertedDate = new Date(+this.$route.query.date).toLocaleString('en-CA', {dateStyle: 'short'})
               const nextDate = moment(convertedDate).add(1, 'days');
               const query = {
                    from: this.$route.query.from,
                    to: this.$route.query.to,
                    type: this.$route.query.type,
                    date: nextDate.valueOf(),
               };
               Cookies.remove('process-allow')
               this.$router.push({ path: "/trip", query });
          }
     },
}
</script>

<style>

</style>