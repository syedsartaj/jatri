<template>
     <div>
               <!-- search modifier -->
          <div class="relative">
               <!-- banner section -->
               <img src="@/assets/images/home/searchBannerImageWeb.svg" alt="" class="w-full hidden lg:block">
               <img src="@/assets/images/home/searchBannerImageMobile.svg" alt="" class="w-full block lg:hidden">
               <div class="hidden lg:block absolute top-8 right-[100px] left-[100px] z-40">
                    <SearchFilterForm/>
               </div>

               <!-- mobile device modify search -->
               <div class="block lg:hidden absolute w-[380px] top-2 left-4 z-40">
                    <div class="bg-white h-[52px] rounded-md flex justify-between px-[14px] py-2">
                         <div class="w-[276px]">
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

               <!-- mobile device filter button -->
               <button @click="handleTripFilterModal" class="w-[98px] lg:hidden flex justify-center items-center gap-x-[10.67px] py-[10px] text-corporate text-sm font-medium bg-white shadow-xl fixed left-4 bottom-4 rounded-full">
                    <img src="@/assets/images/icons/filterIcon.svg" alt="">
                    <p>Filter</p>
               </button>
               <!-- filter modal -->
               <div class="block lg:hiddden" v-if="tripFilterModify">
                    <TripFilterModal :close="handleTripFilterModal" @handleTripFilterModal="handleTripFilterModal"/>
               </div>

          </div>

          <!-- Available Trip Section -->
          <div class="lg:flex lg:justify-start lg:gap-x-[30px] px-4 lg:px-[100px] py-4 lg:py-[30px] bg-[#f7f7f7] ">
               
               <!-- filter modifier for large device -->
               <div class="hidden lg:block">
                    <ModifyFilter/>
               </div>

               <!-- TRIPS -->
               <div class="w-full">
                    <GuaranteedSeatList />
               </div>
          </div>
     </div>
</template>

<script>

import Cookies from "js-cookie";
import moment from 'moment';
import { mapActions, mapGetters } from 'vuex';
export default {
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
          ...mapGetters('guarantedseat', ['getGsTrips']),
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