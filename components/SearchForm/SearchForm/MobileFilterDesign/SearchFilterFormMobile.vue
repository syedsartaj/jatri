<template>
     <div>
          <SearchCityFilterMobile/>
          <SearchCityFilterMobile/>
          <SearchCityFilterMobile/>
          <SearchBusFilterMobile/>
          <button @click="findTrips" class="mt-6 w-full rounded-full bg-corporate text-white text-sm font-medium leading-5 py-[13px] px-[26px]">Search Ticket</button>
     </div>
</template>

<script>
export default {
     methods: {
          findTrips(){
               window.location.href = '/trip'
          }
     }
}
</script>

<style>

</style>