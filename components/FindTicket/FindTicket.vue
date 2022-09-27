<template>
     <div class="w-full bg-white rounded-[10px] border border-[#DBDBDB]">
          <div class="text-center p-[10px] border-b border-[#DBDBDB]">
               <p class="text-blackPrimary text-xl font-medium">Find Ticket</p>
          </div>
          <div class="px-8 py-6">
               <div class="flex space-x-4">
                    <button @click="selectedTab = 0;" class="px-6 py-[5px] rounded border text-sm font-medium" :class="selectedTab === 0 ? 'bg-[#1E88E5] border-[#1E88E5] text-white' : 'bg-white text-blackPrimary border-[#DBDBDB]'">
                         Mobile Number
                    </button>
                    <button @click="selectedTab = 1;" class="px-6 py-[5px] rounded border text-sm font-medium" :class="selectedTab === 1 ? 'bg-[#1E88E5] border-[#1E88E5] text-white' : 'bg-white text-blackPrimary border-[#DBDBDB]'">
                         PNR
                    </button>
                    <button @click="selectedTab = 2;" class="px-6 py-[5px] rounded border text-sm font-medium" :class="selectedTab === 2 ? 'bg-[#1E88E5] border-[#1E88E5] text-white' : 'bg-white text-blackPrimary border-[#DBDBDB]'">
                         Trx Id
                    </button>
               </div>

               <p class="mt-4 text-xs font-medium text-blackPrimary">{{selectedTab === 0 ? 'Mobile number' : selectedTab === 1 ? 'PNR' : selectedTab === 2 ? 'Trx Id' : ''}}</p>

               <div class="mt-[10px] flex justify-between gap-x-14">
                    <div class="w-9/12">
                         <input v-if="selectedTab === 0"
                              class="w-full p-4 bg-[#F7F7F7] rounded outline-none text-base font-normal text-blackPrimary"
                              type="number"
                              placeholder="Mobile Number"
                              v-model="phone"
                         />
                         <input v-else-if="selectedTab === 1"
                              class="w-full p-4 bg-[#F7F7F7] rounded outline-none text-base font-normal text-blackPrimary"
                              type="text"
                              placeholder="PNR"
                              v-model="pnr"
                         />
                         <input v-else-if="selectedTab === 2"
                              class="w-full p-4 bg-[#F7F7F7] rounded outline-none text-base font-normal text-blackPrimary"
                              type="text"
                              placeholder="Trx Id"
                              v-model="transactionId"
                         />
                    </div>
                    <button @click="handleFindTicket" class="px-7 py-[13px] w-3/12 rounded-full bg-corporate text-white text-sm font-medium">Find ticket</button>
               </div>
               
               <!-- error message -->
               <div class="flex justify-start gap-x-[10px] items-center mt-3">
                    <img src="@/assets/images/icons/exclametoryIcon-transparent.svg" alt="">
                    <p class="text-[#E0293B] font-normal text-sm">We could not find any ticket according to your search</p>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     data() {
          return {
               selectedTab: 0,
               phone: "",
               pnr: "",
               transactionId: "",
               
          };
     },
     methods: {
          handleFindTicket() {
               const payload = {};
               if (this.selectedTab === 0) {
                    payload.phone = this.phone;
                    payload.pnr = "";
                    payload.transactionId = "";
               } else if (this.selectedTab === 1) {
                    payload.pnr = this.pnr;
                    payload.phone = "";
                    payload.transactionId = "";
               } else {
                    payload.transactionId = this.transactionId;
                    payload.phone = "";
                    payload.pnr = "";
               }

               console.log('payload: ', payload);
          },
     },
}
</script>

<style>

</style>