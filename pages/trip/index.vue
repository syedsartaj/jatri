<template>
     <!-- search modifier -->
     <div class="bg-red-100 h-[140px] px-[100px] py-8">
          <SearchFilterForm/>
     </div>

     <!-- Available Trip Section -->
     <div class="flex justify-start gap-x-[30px] px-[100px] py-[30px] bg-[#f7f7f7] ">
          
          <!-- filter modifier -->
          <ModifyFilter/>

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
import SearchFilterForm from '~~/components/SerachForm/SearchFilterForm.vue';
import OpssAlert from '~~/components/Alerts/OpssAlert.vue';
export default {
    components: { ModifyFilter, SingleTrip, SearchFilterForm, OpssAlert }
}
</script>

<style>

</style>