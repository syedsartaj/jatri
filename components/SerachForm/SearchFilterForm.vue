<template>
     <div class="bg-white searchbar rounded-[10px] flex justify-between mt-9">
          <div class="flex justify-between divide-x w-10/12">
              <SearchCityFilter/>
              <SearchCityFilter/>
              <SearchBusFilter/>
              <SearchCityFilter/>
          </div>
          <div class="px-6 py-[15px] w-2/12 flex justify-center">
              <button class="rounded-full bg-corporate text-white text-sm font-semibold leading-5 py-[13px] px-[26px]">Search Ticket</button>
          </div>
     </div>
</template>

<script>
import SearchCityFilter from './SearchCityFilter.vue';
import SearchBusFilter from './SearchBusFilter.vue';
export default {
    components: { SearchCityFilter, SearchBusFilter }
}
</script>

<style>

</style>