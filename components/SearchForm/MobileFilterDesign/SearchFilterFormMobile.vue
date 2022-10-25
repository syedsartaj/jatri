<template>
     <div>
          <SearchCityFilterMobile
               v-model="departure"
               :defaultValue="departureName"
               :label="'From city or your location'"
               :icon="require('@/assets/images/icons/fromStoppageIcon.svg')"
               :default-option="'Choose your location'"
               :allow-filter="true"
               :options="getGsCities"
          />
          <SearchCityFilterMobile
               v-model="destination"
               :defaultValue="destinationName"
               :label="'To city or your destination'"
               :icon="require('@/assets/images/icons/toStoppageIcon.svg')"
               :default-option="'Choose your destination'"
               :allow-filter="true"
               :options="getGsCities"
          />
          <SearchBusFilterMobile
               v-model="coachType"
               :defaultValue="''"
               :label="'Bus type, Ac or Non Ac'"
               :icon="require('@/assets/images/icons/searchTypeIcon.svg')"
               :default-option="'Choose bus type'"
               :allow-filter="false"
               :options="coachTypes"
          />
          <DatePickerMobile
               v-model="departingDate"
               :label="'Journey date'"
               :icon="require('@/assets/images/icons/datepickerIcon.svg')"
               :default-option="'Select Journey Date'"
               :allow-filter="true"
          />
          <button 
               class="mt-6 w-full rounded-full text-white text-sm font-medium leading-5 py-[13px] px-[26px]"
               :class="!departure || !destination || !coachType || !departingDate ? 'bg-corporate' : 'bg-corporate cursor-pointer border border-primary'"
               :disabled="!departure || !destination || !coachType || !departingDate"
               @click="handleFromSubmit" 
          >
               Search Ticket
          </button>
     </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cookies from 'js-cookie';
export default {
     data() {
          return {
               departure: "",
               destination: "",
               departureName: "",
               destinationName: "",
               departingDate: new Date(),
               coachType: "all",
               // passengerName: "",
               coachTypes: [
                    { city_name: "ac" },
                    { city_name: "non-ac" },
                    { city_name: "all" },
               ],
               //quantity: ''
          };
     },
     computed: {
          ...mapGetters("guarantedseat", ["getGsCities"]),
     },
     methods: {
          handleFromSubmit() {
               const query = {
                    from: this.departure,
                    to: this.destination,
                    type: this.coachType,
                    quantity: this.quantity,
                    date: new Date(this.departingDate).getTime(),
               };
               Cookies.remove("process-allow");
               this.$router.push({ path: "/trip", query });
          },
          // findTrips(){
          //     window.location.href = '/trip'
          // }
     },
     watch: {
          "$route.query": {
               handler: function (value) {
                    const { from, to } = value;
                    if (from) {
                         this.getGsCities.filter(s => {
                         if (s.city_name.toLowerCase() === from.toLowerCase()) {
                              this.departure = s.city_name;
                              this.departureName = s;
                         }
                         });
                    }
                    if (to) {
                         this.getGsCities.filter(s => {
                         if (s.city_name.toLowerCase() === to.toLowerCase()) {
                              this.destination = s.city_name;
                              this.destinationName = s;
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