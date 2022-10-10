<template>
     <!-- search modifier -->
     <div class="relative">
          <img src="@/assets/images/home/searchBannerImageWeb.svg" alt="" class="w-full hidden lg:block">
          <img src="@/assets/images/home/searchBannerImageMobile.svg" alt="" class="w-full block lg:hidden">
          <div class="hidden lg:block absolute top-8 right-[100px] left-[100px] z-40">
               <SearchFilterForm/>
          </div>

          <div class="block lg:hidden absolute w-[380px] top-2 left-4 z-40">
               <div class="bg-white h-[52px] rounded-md flex justify-between px-[14px] py-2">
                    <div class="w-[276px]">
                         <div class="flex justify-start gap-x-[7.67px]">
                              <h2 class="text-xs font-medium text-blackPrimary">Dhaka</h2>
                              <img src="@/assets/images/icons/rightArrowWithLine.svg" alt="" class="w-[6.67px]">
                              <h2 class="text-xs font-medium text-blackPrimary">Chittagong</h2>
                         </div>
                         <p class=" text-[11px] leading-4 font-normal text-blackSecondery"><span>18 May 2022</span>, <span>4</span> People, <span>Non A/C</span></p>
                    </div>
                    <button @click="modifySearch" class="bg-[#1E88E5] rounded-full py-1 px-[10px] text-xs font-medium text-white border-none">Modify</button>
               </div>
          </div>

          <button @click="handleTripFilterModal" class="w-[98px] lg:hidden flex justify-center items-center gap-x-[10.67px] py-[10px] text-corporate text-sm font-medium bg-white shadow-xl fixed left-4 bottom-4 rounded-full">
               <img src="@/assets/images/icons/filterIcon.svg" alt="">
               <p>Filter</p>
          </button>
          
          <div class="block lg:hiddden" v-if="tripFilterModify">
               <TripFilterModal :close="handleTripFilterModal"/>
          </div>

    </div>

     <!-- Available Trip Section -->
     <div class="lg:flex lg:justify-start lg:gap-x-[30px] px-4 lg:px-[100px] py-4 lg:py-[30px] bg-[#f7f7f7] ">
          
          <!-- filter modifier -->
          <div class="hidden lg:block">
               <ModifyFilter/>
          </div>

          <!-- TRIPS -->
          <div class="w-full">
               <SingleTrip/>
               <SingleTrip/>
               <SingleTrip/>
               <SingleTrip/>
               <SingleTrip/>
          </div>
     </div>

     <!-- error layout -->
     <div class="h-[800px] flex justify-center items-center bg-[#f7f7f7]">
          <!-- <TripNotFound/> -->
          <OpssAlert
               :details="'Looks llike we could not find any ticket according to your search. Try different route or date and search again.'"
               :customStyle="'px-[92.5px]'"
          />
     </div>


</template>

<script>
import ModifyFilter from '~~/components/TripFilter/ModifyFilter.vue';
import SingleTrip from '~~/components/Trip/SingleTrip.vue';
import SearchFilterForm from '~~/components/SearchForm/SearchFilterForm.vue';
import OpssAlert from '~~/components/Alerts/OpssAlert.vue';
import TripFilterModal from '~~/components/Modal/TripFilterModal.vue';
export default {
     data(){
          return {
               tripFilterModify : false,
          }
     },

     components: { ModifyFilter, SingleTrip, SearchFilterForm, OpssAlert, TripFilterModal },

     methods: {
          modifySearch(){
               window.location.href = "/";
          },
          handleTripFilterModal() {
               this.tripFilterModify = !this.tripFilterModify
          },
     }
}
</script>

<style>

</style>