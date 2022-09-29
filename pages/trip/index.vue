<template>
     <!-- search modifier -->
     <div class="relative">
          <img src="@/assets/images/home/searchBannerImageWeb.svg" alt="" class="w-full hidden md:block">
          <img src="@/assets/images/home/searchBannerImageMobile.svg" alt="" class="w-full block md:hidden">
          <div class="hidden md:block absolute top-8 right-[100px] left-[100px] z-40">
               <SearchFilterForm/>
          </div>

          <div class="block md:hidden absolute w-[380px] top-2 left-4 z-40">
               <div class="bg-white h-[52px] rounded-md flex justify-between px-[14px] py-2">
                    <div class="w-[276px]">
                         <div class="flex justify-start gap-x-[7.67px]">
                              <h2 class="text-xs font-medium text-blackPrimary">Dhaka</h2>
                              <img src="@/assets/images/icons/rightArrowWithLine.svg" alt="" class="w-[6.67px]">
                              <h2 class="text-xs font-medium text-blackPrimary">Chittagong</h2>
                         </div>
                         <p class=" text-[11px] leading-4 font-normal text-blackSecondery"><span>18 May 2022</span>, <span>4</span> People, <span>Non A/C</span></p>
                    </div>
                    <button class="bg-[#1E88E5] rounded-full py-1 px-[10px] text-xs font-medium text-white border-none">Modify</button>
               </div>
          </div>
    </div>

     <!-- Available Trip Section -->
     <div class="md:flex md:justify-start md:gap-x-[30px] px-4 md:px-[100px] py-4 md:py-[30px] bg-[#f7f7f7] ">
          
          <!-- filter modifier -->
          <div class="hidden md:block">
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
export default {
    components: { ModifyFilter, SingleTrip, SearchFilterForm, OpssAlert }
}
</script>

<style>

</style>