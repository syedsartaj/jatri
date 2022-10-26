<template>
     <div class="relative z-[1000]">
          <div class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
               <div class="flex min-h-full items-end justify-center lg:p-4 text-center lg:items-center sm:p-0">
                    <div class="relative transform overflow-hidden lg:rounded-lg bg-white text-left shadow-xl transition-all lg:my-8 w-full md:max-w-[800px]">
                         <div class="bg-white p-4 lg:p-6 w-full" >
                              <div class="flex justify-between">
                                   <p class="text-blackPrimary text-base lg:text-[28px] lg:leading-9 font-medium">Filter</p>
                                   <button @click="close">
                                        <img src="@/assets/images/icons/closeIcon.svg" alt=""/>
                                   </button>
                              </div>
                              <hr class="my-4">
                              <div class="bg-white">
                                   <div class="flex justify-start gap-x-[14px] mt-[10px]">
                                        <div v-for="busType in coachTypes" :key="busType" class="w-[103px]">
                                             <input id="busType" type="checkbox" class="hidden">
                                             <label for="busType">
                                                  <button
                                                       @click="setCoachtype(busType)"
                                                       class="w-full p-2 cursor-pointer rounded text-sm font-medium"
                                                       :class="coachType == busType ? 'bg-corporate text-white': 'bg-[#ededed] text-blackPrimary'"
                                                  >
                                                       {{busType}}
                                                  </button>
                                             </label>
                                        </div>
                                   </div>
                                   <hr class="my-4">
                                   <div class='divide-y divide-dashed divide-[#DBDBDB]'>
                                        <ul v-for="priceDirection in priceFilter" :key="priceDirection">
                                             <label 
                                                  :for="priceDirection" 
                                                  class="cursor-pointer text-base font-normal flex justify-between py-[10px]"
                                                  :class="priceFilterType === priceDirection ? 'text-corporate ': 'text-blackPrimary hover:text-corporate'"
                                             >
                                                  {{priceDirection == 'l2h'? 'Price low to high' : 'Price high to low'}}
                                                  <img src="@/assets/images/icons/tik.svg" alt="" class="w-4 h-3" :class="priceFilterType === priceDirection ? 'flex' : 'hidden'">
                                             </label>
                                             <input :id="priceDirection" type="checkbox" @click="priceFilterType = priceDirection" :checked="priceFilterType === priceDirection" class="hidden">
                                        </ul>
                                   </div>

                                   <div class="flex justify-center gap-x-5 pb-7 pt-[14px]">
                                        <!-- <button class="px-[70.5px] py-[10px] border border-[#808083] hover:border-corporate bg-white hover:bg-corporate text-corporate hover:text-white text-sm rounded-full">Reset</button> -->
                                        <button class="px-[70.5px] py-[10px] border border-[#808083] hover:border-corporate bg-white hover:bg-corporate text-corporate hover:text-white text-sm rounded-full" @click="close">Apply</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>

</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Cookies from 'js-cookie';
export default {
     props: ['close'],
     data() {
          return {
               departure: "",
               destination: "",
               departureName: "",
               destinationName: "",
               departingDate: new Date(),
               coachTypes: ["ac" , "non-ac", "all"],
               coachType: this.$route.query.type,
               priceFilter: ["l2h","h2l"],
               priceFilterType: null
          };
     },
     computed: {
          ...mapGetters("guarantedseat", ["getGsCities"]),
     },
     
     watch: {
          coachType(value) {
                    if (value) {
                    this.handleFromSubmit();
               }
          },
          priceFilterType(value){
               if(value){
                    this.sortedTrip(value);
               }
          }
     },

     methods: {
          ...mapMutations("guarantedseat", ["sortedTrip"]),
          setCoachtype(type){
               this.coachType = type
          },
          handleFromSubmit() {
               const query = {
                    from: this.$route.query.from,
                    to: this.$route.query.to,
                    type: this.coachType,
                    date: this.$route.query.date,
               };
               Cookies.remove('process-allow')
               this.$router.push({ path: "/trip", query });
               this.$emit("handleTripFilterModal");

          },
     },
}
</script>

<style>

</style>