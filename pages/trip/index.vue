<template>
     <div>
               <!-- search modifier -->
          <div class="relative">
               <!-- banner section -->
               <img src="@/assets/images/home/searchBannerImageWeb.svg" alt="" class="w-full hidden lg:block">
               <div class="hidden lg:block">
                    <div class="flex items-center justify-center absolute m-auto top-0 bottom-0 right-[100px] left-[100px] z-40">
                         <SearchFilterForm/>
                    </div>
               </div>

               <!-- mobile device modify search -->
               <div class="relative">
                    <img src="@/assets/images/home/searchBannerImageMobile.svg" alt="" class="w-full block lg:hidden">
                    <div class="block lg:hidden">
                         <div class="flex items-center justify-center absolute w-[93%] m-auto top-0 left-0 bottom-0 right-0 z-40">
                              <div class="bg-white h-[52px] w-full rounded-md flex items-center justify-between px-[14px] py-2">
                                   <div class="w-[270px]">
                                        <div class="flex justify-start gap-x-[7.67px]">
                                             <h2 class="text-xs font-medium text-blackPrimary">{{$route.query.from}}</h2>
                                             <img src="@/assets/images/icons/rightArrowWithLine.svg" alt="" class="w-[6.67px]">
                                             <h2 class="text-xs font-medium text-blackPrimary">{{$route.query.to}}</h2>
                                        </div>
                                        <p class=" text-[11px] leading-4 font-normal text-blackSecondery"><span>{{getHumanDate($route.query.date)}}</span>, <span class="capitalize">{{$route.query.type}}</span></p>
                                   </div>
                                   <button @click="modifySearch" class="bg-[#1E88E5] rounded-full py-1 px-[10px] text-xs font-medium text-white border-none">Modify</button>
                              </div>
                         </div>
                    </div>
               </div>




               <!-- mobile device filter button -->
               <button v-if="getMobileFloatingFilter" @click="handleTripFilterModal" class="w-[98px] lg:hidden flex justify-center items-center gap-x-[10.67px] py-[10px] text-corporate text-sm font-medium bg-white shadow-xl fixed left-4 bottom-[88px] z-[999999] rounded-full">
                    <img src="@/assets/images/icons/filterIcon.svg" alt="">
                    <span>Filter</span>
               </button>
               <!-- filter modal -->
               <div class="block lg:hiddden" v-if="tripFilterModify">
                    <TripFilterModal :close="handleTripFilterModal" @handleTripFilterModal="handleTripFilterModal"/>
               </div>

          </div>

          <!-- Available Trip Section -->
          <div class="lg:flex lg:justify-start gap-x-4 xl:gap-x-[30px] px-4 lg:px-[100px] py-4 lg:py-[30px] bg-[#f7f7f7] ">
               
               <!-- filter modifier for large device -->
               <div class="hidden lg:block w-full lg:w-[35%]">
                    <ModifyFilter/>
               </div>

               <!-- TRIPS -->
               <div class="w-full lg:w-[65%]">
                    <OffferAndPromo/>
                    <GuaranteedSeatList/>
               </div>
          </div>
     </div>
</template>

<script>

import Cookies from "js-cookie";
import moment from 'moment';
import { mapActions, mapGetters } from 'vuex';
export default {
     middleware (ctx) {
          ctx.$gtm.push({ event: 'ssr' })
     },
     validate({query}) {
          const {
               from,
               to,
               type,
               date,
               // quantity
          } = query;
          return from && to && type && date;
     },

     data(){
          return {
               filteredData: {},
               tripFilterModify : false,
               tripDate: ''
          }
     },

     computed: {
          ...mapGetters('guarantedseat', ['getGsTrips', 'getMobileFloatingFilter']),
          ...mapGetters('user', ['isLoggedIn']),
          ...mapGetters('agent', ['getFilteredAvailableServiceList']),
          filterQueryData() {
               const formattedDate = new Date(+this.$route.query.date).toLocaleString('en-CA', {
               dateStyle: 'short'
               });
               return {...this.$route.query, 'request_date': formattedDate, 'condition': this.$route.query.type};
          }
          
     },

     methods: {
          modifySearch(){
               this.$router.push({ path: '/', query: { ...this.$route.query } })
          },
          handleTripFilterModal() {
               this.tripFilterModify = !this.tripFilterModify
          },

          ...mapActions('agent', ['servicesList']),
          activeTab() {
               if (!Cookies.get("ags_token")) {
                    this.$router.push({path: this.$route.fullPath, query: this.$route.query, hash: '#agent'})
                    this.authModalToggle();
               } else {
                    this.activeTabIndex = 1;
               }
          },
          seatSelectInitial () {
               this.selectedServices = [];
               this.selectedBoarding = [];
               this.selectedScheduleTime = [];
          },
          setFilteredData (filteredData) {
               this.seatSelectInitial();
               this.filteredData = filteredData;
               this.$store.commit('agent/filterServiceList', filteredData);
          },
          resetFilterData () {
               this.seatSelectInitial();
               const {from, to, type, date, quantity} = this.$route.query;
               const formattedDate = new Date(+date).toLocaleString('en-CA', {
                    dateStyle: 'short'
               });
               const payload = { from, to, quantity, request_date: formattedDate,
                    condition: type == 'all' ? 'Any' : type == 'non-ac' ? 'NonAC' :  type.toUpperCase()
               };
               this.servicesList(payload);
          },
          authModalToggle() {
               this.authModalShowStatus = !this.authModalShowStatus;
          },
          getHumanDate(date) {
               return moment(new Date(+date).toLocaleString('en-CA', {dateStyle: 'short'})).format('DD MMM YYYY');
          }
     },

     async asyncData({store}){
          await store.dispatch('guarantedseat/getCitiesList');
     },

     watch: {
          isLoggedIn(newVal) {
               if(newVal === true && this.$route.hash === '#agent') {
               this.activeTabIndex = 1;
               }
          }
     }
}
</script>

<style>

</style>