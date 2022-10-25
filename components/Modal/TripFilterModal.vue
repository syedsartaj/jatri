<template>
     <div class="relative z-[1000]">
          <div class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
               <div class="flex min-h-full items-end justify-center lg:p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden lg:rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[800px]">
                         <div class="bg-white p-4 lg:p-6 w-screen" >
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
                                   <ul class='divide-y divide-dashed divide-[#DBDBDB]'>
                                        <li class='cursor-pointer text-base font-normal text-corporate hover:text-corporate relative py-[10px]' @click='selectOption()'>
                                             Price low to high
                                             <span class='absolute right-5 top-5 bottom-0'><img src="@/assets/images/icons/tik.svg" alt="" class="w-4 h-3"></span>
                                        </li>
                                        <li class='cursor-pointer text-base font-normal text-blackPrimary hover:text-corporate relative py-[10px]' @click='selectOption()'>
                                             Price high to low
                                        </li>
                                   </ul>

                                   <div class="flex justify-center gap-x-5 pb-7 pt-[14px]">
                                        <button class="px-[70.5px] py-[10px] border border-[#808083] hover:border-corporate bg-white hover:bg-corporate text-corporate hover:text-white text-sm rounded-full">Reset</button>
                                        <button class="px-[70.5px] py-[10px] border border-[#808083] hover:border-corporate bg-white hover:bg-corporate text-corporate hover:text-white text-sm rounded-full">Apply</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>

</template>

<script>
import { mapGetters } from "vuex";
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
     },

     methods: {
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