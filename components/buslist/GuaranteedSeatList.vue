<template>
     <div class='pb-40'>
          <div v-if='getGsTrips.length > 0'>
               <SingleTrip v-for='(trip, index) in getGsTrips' :key='index' :trip='trip' :selectedTrip='selectedBusId' :busIndex='index' @selectedTripId='selectTrip'/>
          </div>
          <div v-else>
               <!-- error layout -->
               <div class="h-[500px] flex justify-center items-center bg-[#f7f7f7]">
               <!-- <TripNotFound/> -->
                    <OpssAlert
                         :details="'Looks llike we could not find any trip according to your search. Try different route or date and search again.'"
                         :customStyle="'px-[92.5px]'"
                    />
               </div>
          </div>
     </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Cookies from "js-cookie";

export default {
     name: "GuaranteedSeatList",
     data() {
          return {
               selectedBusId: null,
          };
     },
     computed: {
          ...mapGetters("guarantedseat", ["getGsTrips", "getGsCities", "getGsLoading"])
     },
     methods: {
          ...mapActions("guarantedseat", ["getPbScheduleDataAction"]),
          selectTrip(tripId) {
               this.selectedBusId = tripId;
          },
          activeTab() {
               if (!Cookies.get("ags_token")) {
                    this.authModalToggle();
               }
               else {
                    this.activeTabIndex = 1;
               }
          },
          test() {
               this.$nextTick( async () => {
                    this.$nuxt.$loading.start();
                    const { from, to, type, date } = this.$route.query;
                    const formattedDate = new Date(+date).toLocaleString("en-CA", {
                         dateStyle: "short"
                    });
               
                    let payload = {};

                    if (from) {
                         this.getGsCities?.filter((s) => {
                         if (s.city_name.toLowerCase() === from.toLowerCase()) {
                         payload["from"] = s.city;
                         }
                         });
                    }

                    if (to) {
                         this.getGsCities?.filter((s) => {
                         if (s.city_name.toLowerCase() === to.toLowerCase()) {
                         payload["to"] = s.city;
                         }
                         });
                    }

                    payload.date = formattedDate;
                    payload.busType = type;

               
                    await this.getPbScheduleDataAction(payload);
                    this.$nuxt.$loading.finish();
               })
          }
     },
     created() {
          this.$nextTick(() => {
               //this.$nuxt.$loading.start();
               const { from, to, type, date } = this.$route.query;
               const formattedDate = new Date(+date).toLocaleString("en-CA", {
                    dateStyle: "short"
               });
               const payload = {
                    from: from,
                    to: to,
                    date: formattedDate,
                    busType: type
               };
               //await this.getPbScheduleDataAction(payload);
               //this.$nuxt.$loading.finish();
          });
     },
     watch: {
          getGsTrips: {
               handler(value) {
                    this.selectedBusId = null;
               },
               deep: true,
          },
          "$route.query": {
               handler: function (value) {
                    this.test()
               },
               deep: true,
               immediate: true,
          },
     },
};
</script>
