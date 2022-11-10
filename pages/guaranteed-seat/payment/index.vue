<template>
     <div v-if='getBookingInfoDetails !== null' class="lg:flex justify-between gap-x-5 py-4 lg:py-8 px-4 lg:px-[100px] bg-corporateBg">
          <div class="w-full lg:w-1/2">
               <div v-if='getBookingInfoDetails !== null' class="mt-4 bg-white rounded-[10px] border border-[#EDEDED]">
                    <div class="flex justify-start items-center gap-x-4 px-5 py-[22px] border-b">
                         <div class="bg-[#FEF2F0] rounded-full w-9 h-9 flex justify-center items-center">
                              <img src="@/assets/images/icons/ticket.svg" alt="" class="w-[15px]">
                         </div>
                         <div>
                              <h2 class="text-corporate text-sm lg:text-base font-medium">{{ getBookingInfoDetails.invoice.fromCity }} - {{ getBookingInfoDetails.invoice.toCity }}</h2>
                              <p class="text-blackLight text-xs lg:text-sm font-normal mt-1">{{ getBookingInfoDetails.invoice.company }}, {{ String(getBookingInfoDetails.invoice.coachType).toUpperCase() }} bus | {{ boardingDateTime }}</p>
                         </div>
                    </div>
                    <div class="px-[14px] py-3">
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Boarding Point:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">{{getBookingInfoDetails.invoice.boardingPoint}}</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Departure Time:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary"> {{getBookingInfoDetails.invoice.departureTime}}</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Name:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">{{getBookingInfoDetails.passenger.name}}</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Mobile Number:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">{{getBookingInfoDetails.passenger.phone}}</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Email Address:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">{{getBookingInfoDetails.passenger.email}}</p>
                         </div>
                    </div>
               </div>
          </div>
          <div class="w-full lg:w-1/2">
               <div class="mt-4 bg-white rounded-[10px] border border-[#EDEDED]">
                    <div class="flex justify-start items-center gap-x-4 px-5 py-[22px] border-b">
                         <p class="text-base font-medium text-blackPrimary">Fare Details</p>
                    </div>
                    <div class="px-[14px] pt-3">
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Seat No:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">{{ getBookingInfoDetails.invoice.seatNo.join(', ') }}</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Ticket Price:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">{{ getBookingInfoDetails.payable + getBookingInfoDetails.invoice.discount }}</p>
                         </div>
                         <div v-if="getBookingInfoDetails.invoice.discount" class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Discount Amount:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">{{ getBookingInfoDetails.invoice.discount }}</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Processing Fee:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">{{ getBookingInfoDetails.serviceCharge }}</p>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-[11px] leading-4 lg:text-sm font-normal text-blackLight">Gateway Fee:</p>
                              <p class="text-xs lg:text-base font-medium text-blackPrimary">{{ getBookingInfoDetails.paymentGatewayCommission }}</p>
                         </div>
                         <!-- <div class="flex justify-between gap-x-4 py-2 border-b last:border-b-0 border-dashed">
                              <input v-model="promoCode" placeholder="BUS100" class="px-4 py-[10px] bg-[#F7F7F7] w-[226px] lg:w-[395px] text-blackLight focus:outline-0 text-sm font-normal">

                              <button
                                   @click='applyPromo'
                                   :disabled='!promoCode'
                                   :class="!promoCode ? 'bg-[#FDF0F1] text-[#E0293B]': 'bg-corporate text-successLight'" class="w-40 rounded-full lg:text-base text-xs font-medium">
                                   <p class="">Apply promo</p>
                              </button>
                              <button class="flex justify-center items-center gap-x-[11.76px] w-40 bg-[#FDF0F1] rounded-full text-xs lg:text-base font-medium text-blackPrimary ">
                                   <img src="@/assets/images/icons/cross.svg" alt="" class="w-[8.49px]">
                                   <p class="text-[#E0293B] text-xs font-medium">Remove promo</p>
                              </button>
                         </div>
                         <div class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                              <p class="text-sm font-normal text-blackLight">Promo</p>
                              <p class="text-base font-medium text-[#E0293B]"> -198</p>
                         </div> -->
                    </div>
                    <div class="flex justify-between bg-[#EFF7FD] border-t rounded-b px-4 py-[10px]">
                         <p class="text-sm font-normal text-blackLight">Total:</p>
                         <p class="text-base font-medium text-blackPrimary">BDT <span class="font-bold">{{ getBookingInfoDetails.amount }}</span></p>
                    </div>
               </div>

               <div class="mt-4 bg-white rounded-[10px] border border-[#EDEDED]">
                    <div class="flex justify-between items-center gap-x-4 px-5 py-[22px] border-b">
                         <p class="text-base font-medium text-blackPrimary">Payment Method</p>
                         <div class="flex justify-center items-center w-[139px] bg-[#FDF0F1] rounded-full text-base font-medium text-blackPrimary ">
                              <img src="@/assets/images/icons/timer.svg" alt="" class="w-[13.33px]">
                              <p class="text-[#E0293B] text-xs font-medium py-[5px] px-4">
                                   <CountDown :time='paymentValidateTime' @timeUp='timeUp' /> m left
                              </p>
                         </div>
                    </div>
                    <div class="p-5 flex justify-between gap-x-5">
                         <GateWayOption
                              plan-name="sslcommerz"
                              plan-discount=""
                              v-model="activePlan"
                         />
                         <NagadOption
                              plan-name="nagad"
                              plan-discount="10%"
                              v-model="activePlan"
                         />
                    </div>
               </div>

               <div v-if="!paymentAllowStatus || paymentValidateTime === 0" class="mt-2">
                    <PaymentTimeoutAlert/>
               </div>

               <!-- <button @click="handlePay"  class="bg-corporate rounded-full w-full py-[13px] text-white text-sm font-medium mt-6">
                    Pay now
               </button> -->

               <LoaderButton
                    class='bg-corporate rounded-full w-full py-[13px] text-white text-sm font-medium mt-6'
                    :class="getGsLoading || !paymentAllowStatus && 'bg-red-300 hover:bg-red-200 cursor-not-allowed'"
                    :loading='getGsLoading'
                    :disabled='getGsLoading || !paymentAllowStatus || paymentValidateTime === 0'
                    @onClick='paymentHandler'
               >
                    Pay Now
               </LoaderButton>

               <div class="text-center mt-4 lg:mt-5">
                    <p class="text-blackPrimary text-sm font-normal">By proceeding you are agreeing with our <a href="https://jatri.co/user/term-and-condition/" target="_blank" class="w-full underline text-blue-500">Terms and Conditions</a></p>
               </div>

               <div class="p-5 mt-8 border border-[#DBDBDB] rounded-lg lg:hidden flex justify-start items-start gap-x-5">
                    <img src="@/assets/images/icons/phoneIconBlack.svg" alt="" class="mt-2">
                    <div>
                         <h2 class="text-base font-medium ">Having Trouble?</h2>
                         <p class="mt-[6px] text-sm text-[#8D8D8F] font-normal">Reach out to us for any kind of assistance on +096776655</p>
                         <button class="text-xs font-medium bg-[#EDEDED] w-[95px] py-1 rounded-full mt-[10px]">Contact us</button>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';
import { dateTimeFormat } from '@/helpers/dateTimeFormat';
export default {
     validate({ query }) {
          const { tnxId } = query;
          return tnxId;
     },
     data() {
          return {
               activePlan: "sslcommerz",
               paymentAllowStatus: true,
               paymentValidateTime: 0,
          };
     },
     async asyncData({ query, store }) {
          await store.dispatch("guarantedseat/getBookingInfoByTnxId", { "transactionId": query.tnxId });
     },
     created() {
          if (this.getBookingInfoDetails) {
               let a = moment(new Date());
               let getActualPendingValidity = this.getBookingInfoDetails.pendingValidity.split("T")[0] + " " + this.getBookingInfoDetails.pendingValidity.split("T")[1].split(".")[0];
               let b = moment(new Date(getActualPendingValidity));
               if (b.diff(a, "seconds") > 0) {
                    this.paymentValidateTime = b.diff(a, "seconds");
               }
          }
          else {
               this.paymentValidateTime = 0;
          }
     },
     computed: {
          ...mapGetters("guarantedseat", ["getBookingInfoDetails", "getGsLoading"]),
          boardingDateTime() {
               return this.getBookingInfoDetails.invoice.departureDate && dateTimeFormat(this.getBookingInfoDetails.invoice.departureDate + " " + this.getBookingInfoDetails.invoice.departureTime, 0, "ll");
          }
     },
     methods: {
          ...mapActions("guarantedseat", [
               "TicketConfirmAction"
          ]),
          timeFormate(time){
               return moment(time, "hh:mm").format('LT')
          },
          paymentHandler() {
               const payload = {
                    paymentId: this.getBookingInfoDetails._id,
                    gatewayType: this.activePlan
               };
               this.TicketConfirmAction(payload);
          },
          timeUp() {
               this.paymentAllowStatus = false;
          },
     },
}
</script>

<style>

</style>