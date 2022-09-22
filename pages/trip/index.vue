<template>
     <!-- search modifier -->
     <div class="bg-red-100 h-[140px] px-[100px] py-8">
          <SearchFilterForm/>
     </div>

     <!-- Available Trip Section -->
     <div class="flex justify-start gap-x-[30px] px-[100px] py-[30px] bg-[#f7f7f7] ">
          
          <!-- Filter Option -->
          <ModifyFilter/>

          <!-- Trip Section -->
          <div class="w-full">
               <SingleTrip/>
               <SingleTrip/>
               <SingleTrip/>
               <SingleTrip/>
               <SingleTrip/>
          </div>
     </div>
</template>

<script>
import ModifyFilter from '~~/components/TripFilter/ModifyFilter.vue';
import SingleTrip from '~~/components/Trip/SingleTrip.vue';
import SearchFilterForm from '~~/components/SerachForm/SearchFilterForm.vue';
export default {
    components: { ModifyFilter, SingleTrip, SearchFilterForm }
}
</script>

<style>

</style>