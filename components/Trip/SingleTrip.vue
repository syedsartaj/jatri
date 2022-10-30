<template>
     <div class="bg-white border border-[#ededed] rounded-[10px] mb-[10px] lg:mb-4" :ref="`bus-selector-${busIndex}`">
          <div class="lg:flex justify-between gap-x-6" :class="selectedTrip === busIndex ? 'border-b border-[#DBDBDB]': 'border-0 border-[#DBDBDB]'">
               <div class="w-full lg:w-4/5 py-5 px-4 lg:px-6 divide-y grid grid-cols-1 divide-dashed divide-[#DBDBDB] lg:border-r lg:border-[#DBDBDB]">
                    <div class="flex justify-start gap-x-4 items-center pb-[15px] order-first">
                         <img src="@/assets/images/busDefaultImage.svg" alt="">
                         <div>
                              <h2 class="text-sm lg:text-xl font-medium text-blackPrimary">{{ trip.company }}</h2>
                              <p class="text-xs font-normal text-blackLight">{{ trip.coach.name }}</p>
                         </div>
                    </div>
                    <div class="flex justify-between items-start py-[14px] order-last lg:order-1">
                         <p class="text-xs font-normal text-blackLight">Route</p>
                         <h2 class="text-xs lg:text-sm font-medium text-blackPrimary text-right">{{ trip.boarding }} - {{ trip.dropping }}</h2>
                    </div>
                    <div class="flex justify-between items-center py-4 order-1 lg:order-last">
                         <p class="text-xs font-normal text-blackLight">Depatrure time</p>
                         <h2 class="text-sm lg:text-base font-medium text-blackPrimary">
                              {{ new Date(`${trip.departureDate} ${trip.departureTime}`).toLocaleString('en-Us', { timeStyle: 'short' }) }}
                         </h2>
                    </div>
               </div>
               <!-- <div class="hidden lg:block h-full w-[1px] bg-[#DBDBDB] mx-6"></div> -->
               <div class="block lg:hidden h-[1px] bg-[#DBDBDB] mb-[10px]"></div>

               <div class="w-full lg:w-1/5 py-4 lg:py-5 px-4 lg:px-0 lg:pr-6 flex justify-between items-center lg:items-start lg:flex-col">
                    <div class="hidden lg:block">
                         <img src="@/assets/images/icons/fareIcon.svg" alt="" class="w-[30px]">
                         <h2 v-if="trip.seatFare[0].discountFare" class="mt-[10px] text-base lg:text-xl font-semibold text-blackPrimary"><span class="line-through text-corporate">{{ trip.seatFare[0].fare }}</span> {{ trip.seatFare[0].discountFare }} <span class="text-base">TK</span></h2>
                         <h2 v-else class="mt-[10px] text-base lg:text-xl font-semibold text-blackPrimary">{{ trip.seatFare[0].fare }} <span class="text-base">TK</span></h2>
                         <p class="text-xs font-normal text-blackLight mt-1">Per ticket</p>
                    </div>
                    <div class="lg:hidden flex justify-start items-center gap-x-3">
                         <img src="@/assets/images/icons/fareIcon.svg" alt="" class="w-[30px]">
                         <div>
                              <h2 v-if="trip.seatFare[0].discountFare" class="text-xl font-semibold text-blackPrimary"><span class="line-through text-corporate">{{  trip.seatFare[0].fare }}</span> {{ trip.seatFare[0].discountFare }} <span class="text-xs">TK</span></h2>
                              <h2 v-else class="text-xl font-semibold text-blackPrimary">{{ trip.seatFare[0].fare }} <span class="text-xs">TK</span></h2>
                              <p class="text-xs font-normal text-blackLight mt-1">Per ticket</p>
                         </div>
                    </div>
                    <button @click="handleSeatView(selectedTrip === busIndex ? '' : busIndex)" class="lg:w-full bg-corporate rounded-full flex justify-center gap-x-[11.76px] items-center text-white text-xs font-medium p-3 lg:mt-[26px]"> 
                         {{selectedTrip === busIndex ? 'Close seats' : 'View seats' }} 
                         <span>
                              <img src="@/assets/images/icons/viewSeatIcon.svg" alt="" :class="selectedTrip === busIndex && 'transition-all ease-in-out rotate-180'" class="w-[8.49px] h-[5.19px]">
                         </span>
                    </button>
               </div>
          </div>

          <!-- accordion start -->
          <div v-if="selectedTrip === busIndex" class="bg-white rounded-b-[10px] pt-4 pr-6 pb-6 pl-4" :class="selectedTrip === busIndex ? 'max-h-max transition-all ease-in-out duration-700': 'h-0'">
               <div class="flex flex-wrap justify-between">
                    <!-- Bus Design -->
                    <div class="w-full lg:w-1/2 ">
                         <div class="rounded-[10px] py-4 lg:py-6 px-4 lg:mr-6 bg-[#f7f7f7]">
                              <div class="flex justify-between lg:border-t lg:border-b border-dashed items-center py-1 lg:py-2 lg:mt-5">
                                   <div class="flex gap-x-2 justify-center items-center border-r last:border-r-0 px-[14px]">
                                        <img src="@/assets/images/seats/available-seats.svg" alt="Available" class="w-[18px] lg:w-[23px] h-[15px] lg:h-5">
                                        <p class="text-xs lg:text-sm leading-[18px] font-medium lg:font-normal text-blackLight"> Available</p>
                                   </div>
                                   <div class="flex gap-x-2 justify-center items-center border-r last:border-r-0 px-[14px]">
                                        <img src="@/assets/images/seats/bookedSeats.svg" alt="Booked" class="w-[18px] lg:w-[23px] h-[15px] lg:h-5">
                                        <p class="text-xs lg:text-sm leading-[18px] font-medium lg:font-normal text-blackLight"> Booked</p>
                                   </div>
                                   <div class="flex gap-x-2 justify-center items-center border-r last:border-r-0 px-[14px]">
                                        <img src="@/assets/images/seats/selected-seats.svg" alt="Selected" class="w-[18px] lg:w-[23px] h-[15px] lg:h-5">
                                        <p class="text-xs lg:text-sm leading-[18px] font-medium lg:font-normal text-blackLight"> Selected</p>
                                   </div>
                                   
                              </div>
                              <div class="lg:hidden border-b border-dashed border-[#DBDBDB] mt-[10px]"></div>
                              <div class="p-5">
                                   <div class="lg:pl-[31px]">
                                        <div class="flex justify-end items-end mt-2">
                                             <img src="@/assets/images/seats/driver.svg" alt="driver" class="w-[30px]"/>
                                        </div>
                                        <!-- Seats here -->
                                        <div v-for='(rowSeat, rowIndex) in getGsSeatArray' :key='rowIndex' class="flex justify-between gap-x-[30px] mt-6">
                                             <!-- <button>
                                                  <img src="@/assets/images/seats/available-seats.svg" alt="seats" class="w-[30px]">
                                             </button> -->
                                             <template v-for='(colSeat, colIndex) in rowSeat'>
                                                  <div v-if="colSeat.seatNo !== ''" :key='colIndex' class='relative group'
                                                       @click="colSeat && colSeat.status === 'available' && addSeatHandler(colSeat)"
                                                  >
                                                       <ArmChairIcon 
                                                            :class="colSeat.status !== 'available' ? 'cursor-default' : 'cursor-pointer'"
                                                            :fill="
                                                                 colSeat.status !== 'available'
                                                                 ? '#DBDBDB'
                                                                 : selectedSeatIds.includes(colSeat.id)
                                                                 ? '#48A43F'
                                                                 : 'white'"
                                                            :stroke="
                                                                 colSeat.status !== 'available'
                                                                 ? '#DBDBDB'
                                                                 : selectedSeatIds.includes(colSeat.id)
                                                                 ? '#48A43F'
                                                                 : '#8D8D8F'"
                                                            height='24'
                                                            width='24'
                                                       />
                                                       <!-- <p class='whitespace-nowrap rounded-md absolute hidden group-hover:block bottom-full mb-2 p-2 text-white font-bold border bg-corporate shadow-md z-50'>
                                                            {{ colSeat.seatNo }}
                                                       </p> -->
                                                  </div>
                                                  <div v-else :key='colIndex' class='w-6 h-6'></div>
                                             </template>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="w-full lg:w-1/2 lg:border-l lg:pl-6 mt-4 pt-4 lg:pt-0 lg:mt-0">
                         <!-- Trip Information -->
                         <div class="">
                              <SelectOption
                                   v-model="boardingPoint"
                                   :default-option="'Select Your Boarding Location'"
                                   :label="'Boarding point'"
                                   :options='getGsSeatBoardingPointArray'
                                   propertyName="name"
                              />
                              <!-- :options="getGsSeatBoardingPointArray" -->
                         </div>
                         <div class="mt-4">
                              <h2 class="text-xs lg:text-base font-medium text-blackPrimary">Departure time</h2>
                              <div class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded">
                                   <p class="text-blackPrimary text-sm font-medium">{{ departureTime }}</p>
                              </div>
                         </div>

                         <!-- Seat Fare Table -->
                         <div v-if='selectedSeatsObj.length' class="mt-4 bg-[#f7f7f7] rounded border border-[#EDEDED]">
                              <div class="flex justify-between px-[14px] pt-[10px] pb-[6px] border-b">
                                   <p class="text-sm lg:text-xs font-semibold text-blackPrimary">Seat</p>
                                   <p class="text-sm lg:text-xs font-semibold text-blackPrimary">Fare</p>
                              </div>
                              <div class="px-[14px] py-3">
                                   <div v-for='seat in selectedSeatsObj' :key='seat.id' class="flex justify-between py-2 border-b last:border-b-0 border-dashed">
                                        <p class="text-xs lg:text-sm font-medium text-blackPrimary">{{ seat.seatNo }}</p>
                                        <p class="text-xs lg:text-sm font-medium text-blackPrimary">{{ seat.fare }}</p>
                                   </div>
                              </div>
                              <div v-if="totalDiscountFare > 0" class='bg-[#EFF7FD] border-t flex justify-between items-center px-4 py-[10px]'>
                                   <p class='text-xs font-semibold text-blackLight lg:text-blackPrimary'>Discount Amount </p>
                                   <p class='text-base lg:text-xs font-semibold text-blackPrimary'>BDT {{ totalDiscountFare }}</p>
                              </div>

                              <div v-if="totalPromoAmount > 0" class='bg-[#EFF7FD] border-t flex justify-between items-center px-4 py-[10px]'>
                                   <p class='text-xs font-semibold text-blackLight lg:text-blackPrimary'>Promo Amount </p>
                                   <p class='text-base lg:text-xs font-semibold text-blackPrimary'>BDT {{ totalPromoAmount }}</p>
                              </div>
                              <div class="bg-[#EFF7FD] border-t flex justify-between items-center px-4 py-[10px]">
                                   <p class="text-xs font-semibold text-blackLight lg:text-blackPrimary">Total fare</p>
                                   <p class="text-base lg:text-xs font-semibold text-blackPrimary">BDT <span>{{ totalAmount - (totalDiscountFare + totalPromoAmount) }}</span></p>
                              </div>
                         </div>

                         <!-- Passenger Information -->
                         <div class="mt-4">
                              <h2 class="text-xs lg:text-base font-medium text-blackPrimary">Passenger name <span class="text-[#E0293B]">*</span></h2>
                              <input 
                                   class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary"
                                   type="text" 
                                   placeholder="Enter your name"
                                   v-model='passengerName'
                              />
                         </div>

                         <div class="mt-4">
                              <h2 class="text-xs lg:text-base font-medium text-blackPrimary">Phone no <span class="text-[#E0293B]">*</span></h2>
                              <input 
                              class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs focus:appearance-none placeholder:text-blackSecondery text-blackPrimary"
                                   type="number" 
                                   placeholder="Enter your phone"
                                   v-model='passengerPhone'
                              />
                         </div>

                         <div class="mt-4">
                              <h2 class="text-xs lg:text-base font-medium text-blackPrimary flex justify-between"><span>Email id</span> <span class="text-[#8D8D8F]">Optional</span></h2>
                              <input 
                                   class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary"
                                   type="email" 
                                   placeholder="Enter your email id"
                                   v-model='passengerEmail'
                              />
                         </div>

                         <div class="mt-4">
                              <h2 class="text-xs lg:text-base font-medium text-blackPrimary flex justify-between"><span>Promo Code</span></h2>
                              <div class="flex justify-between gap-x-4">
                                   <input
                                        type="text"
                                        id="promo"
                                        v-model="promoCode" 
                                        placeholder="Enter Promo Code" 
                                        class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-3/4 focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary"
                                   />

                                   <!-- Apply Promo -->
                                   <button
                                        @click='applyPromo'
                                        :disabled='!promoCode'
                                        :class="!promoCode ? 'bg-[#FDF0F1] text-[#E0293B]': 'bg-corporate text-successLight'" 
                                        class="w-1/4 mt-[10px] py-[10px] rounded-full text-xs font-medium"
                                   >
                                        Apply promo
                                   </button>

                                   <!-- Remove Promo -->
                                   <!-- <button 
                                             class="flex justify-center items-center gap-x-[11.76px] w-1/4 bg-[#FDF0F1] rounded-full text-xs lg:text-base font-medium text-blackPrimary"
                                        >
                                        <img src="@/assets/images/icons/cross.svg" alt="" class="w-[8.49px]">
                                        <p class="text-[#E0293B] text-xs font-medium">Remove promo</p>
                                   </button> -->
                              </div>
                         </div>
                         <LoaderButton
                              :class="
                                   (moduleType == 'paribahan' && !passengerEmail) ||
                                   !selectedSeatIds.length ||
                                   !boardingPoint ||
                                   !passengerName ||
                                   !passengerPhone ||
                                   String(passengerPhone).length < 11
                                   ? 'bg-gray-500'
                                   : 'bg-corporate hover:bg-[#D93E2D]'
                              "
                              :disabled='
                                   (moduleType == "paribahan" && !passengerEmail) ||
                                   getGsLoading ||
                                   !selectedSeatIds.length ||
                                   !boardingPoint ||
                                   !passengerName ||
                                   !passengerPhone ||
                                   String(passengerPhone).length < 11
                              '
                              :loading='getGsLoading'
                              class='bg-corporate rounded-full py-[13px] w-full text-white text-sm font-medium mt-6'
                              @onClick='paymentPendingBlockHandler'
                         >
                              Next
                         </LoaderButton>

                         <div class="text-center mt-[20px]">
                              <a href="https://jatri.co/user/term-and-condition/" target="_blank" class="w-full underline text-blackPrimary text-sm font-normal">Terms and Conditions</a>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { timeFormat } from '@/helpers/dateTimeFormat';
import moment from 'moment';
export default {
     props: ['trip', 'selectedTrip', 'busIndex'],
     data() {
          return {
               selected: false,
               boardingPoint: null,
               passengerCount: '',
               selectedSeatIds: [],
               selectedSeatLabels: [],
               selectedSeatFares: [],
               selectedSeatsObj: [],
               totalAmount: 0,
               totalDiscountAmount: 0,
               totalDiscountFare: 0,
               passengerName: '',
               passengerPhone: '',
               passengerEmail: '',
               promoCode: '',
               totalPromoAmount: 0,
               moduleType: this.trip.moduleType,
               emailReg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          };
     },
     computed: {
          ...mapGetters('guarantedseat', [
               'getGsSeatArray',
               'getGsSeatBoardingPointArray',
               'getGsPaymentPendingBlockData',
               'getGsLoading',
               'getGsSeatViewData',
               'getGsTrips',
               'getPromoCode'
          ]),
          departureTime()  {
               if(this.boardingPoint.scheduleTime === '') {
               return new Date(`${this.trip.departureDate} ${this.trip.departureTime}`).toLocaleString('en-Us', {timeStyle: 'short' })
               }
               return new Date(`${this.boardingPoint.scheduleTime}`).toLocaleString('en-Us', {timeStyle: 'short' })
          },
          reportingDateTime()  {
               if(this.boardingPoint.scheduleTime === '') {
               return timeFormat(moment(`${this.trip.departureDate} ${this.trip.departureTime}`).subtract({hour: 0, minute: 30}), 6, 'YYYY-MM-DD HH:mm:ss');
               }
               return timeFormat(moment(`${this.trip.departureDate} ${this.boardingPoint.scheduleTime}`).subtract({hour: 0, minute: 30}), 6, 'YYYY-MM-DD HH:mm:ss');
          },
     },
     methods: {
          ...mapActions('guarantedseat', [
               'getPbSeatViewAction',
               'getPbPaymentPendingBlockAction',
               'getPromoCodeAction'
          ]),
          handleSeatView (selectedTripId) {
               this.resetPromo();

               if (selectedTripId === "") {
                    this.$emit('selectedTripId', null)
                    this.resetForm();
                    return;
               }
               this.$nextTick(async () => {
                    this.$nuxt.$loading.start();
                    const payload = {
                         moduleType: this.trip.moduleType,
                         busServiceType: this.trip.busServiceType,
                         transportType: this.trip.transportType,
                         transportId: this.trip.transportId,
                         uid: this.trip.uid,
                         fromCity: this.trip.fromCity,
                         toCity: this.trip.toCity,
                         busId: this.trip.busId,
                         departureId: this.trip.departureId,
                         departureDate: this.trip.departureDate,
                         departureTime: this.trip.departureTime,
                         sku: this.trip.sku,
                         id: this.trip.id,
                         seatPlan: this.trip.seatPlan,
                         seatFare: this.trip.seatFare,
                         companyId: this.trip.companyId,
                         coachType: this.trip.coach.type,
                         tripDateTime: this.trip.tripDateTime,
                    };
                    await this.getPbSeatViewAction(payload);
                    this.$nuxt.$loading.finish();
                    this.$emit('selectedTripId', selectedTripId)
                    const el = this.$refs[`bus-selector-${selectedTripId}`];
                    if (el) {
                         el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
               });
          },
          addSeatHandler (seat) {
               if (this.selectedSeatIds.includes(seat.id)) {
                    this.selectedSeatIds = this.selectedSeatIds.filter(
                         (id) => id !== seat.id
                    );
                    this.selectedSeatLabels = this.selectedSeatLabels.filter(
                         (label) => label !== seat.seatNo
                    );
                    this.selectedSeatFares = this.selectedSeatsObj
                         .map((item) => {
                              if (item.id !== seat.id) {
                                   return item.fare;
                              }
                         })
                    .filter(Boolean);
                    this.selectedSeatsObj = this.selectedSeatsObj.filter(
                         (item) => item.id !== seat.id
                    );
                    this.totalAmount -= seat.fare;

                    // discount calculation on unselect
                    seat.discountFare != null ? this.totalDiscountAmount -=  (seat.fare - seat.discountFare) : this.totalDiscountAmount -= 0;
                    if(this.trip.offer && (this.totalDiscountAmount <= this.trip.offer.maxOfferAmount)) {
                         seat.discountFare != null ? this.totalDiscountFare =  this.totalDiscountAmount : this.totalDiscountFare -= 0;
                    } else if(this.trip.offer && (this.totalDiscountAmount > this.trip.offer.maxOfferAmount)) {
                         seat.discountFare != null ? this.totalDiscountFare =  this.totalDiscountFare : this.totalDiscountFare -= 0;
                    }

                    // promo calculation on unselect
                    if(this.getPromoCode && this.getPromoCode.minSpend > this.totalAmount){
                         this.totalPromoAmount = 0;
                    }

               } else {
                    if (this.selectedSeatIds.length > this.getGsSeatViewData.seatPlan.maxSeatLimit - 1) {
                         this.$toast.error(`You can select ${this.getGsSeatViewData.seatPlan.maxSeatLimit} tickets at a time!!`, {
                              position: 'bottom-right',
                              duration: 50000,
                              containerClass: 'padding: 100px',
                         })
                         return;
                    }

                    this.selectedSeatIds.push(seat.id);
                    this.selectedSeatLabels.push(seat.seatNo);
                    this.selectedSeatsObj.push(seat);
                    this.selectedSeatFares.push(seat.fare);
                    this.totalAmount += seat.fare;

                    // discount calculation on select
                    seat.discountFare != null ? this.totalDiscountAmount +=  (seat.fare - seat.discountFare) : this.totalDiscountAmount += 0;
                    if(seat.discountFare != null && this.trip.offer && (this.totalDiscountAmount <= this.trip.offer.maxOfferAmount)) {
                         this.totalDiscountFare +=  (seat.fare - seat.discountFare);
                    }
                    else if(seat.discountFare != null && this.trip.offer && this.totalDiscountAmount >= this.trip.offer.maxOfferAmount){
                         this.totalDiscountFare = this.trip.offer.maxOfferAmount;
                    }

               // promo calculation on select
                    if(this.getPromoCode && this.getPromoCode.minSpend <= this.totalAmount){
                         this.totalPromoAmount = this.getPromoCode.amount;
                    }
               }
          },
          async paymentPendingBlockHandler () {
               if(this.passengerEmail && !this.emailReg.test(String(this.passengerEmail).toLowerCase())) {
                    this.$toast.error('Enter a valid email address', {
                         position: 'bottom-right',
                         duration: 50000,
                         containerClass: 'padding: 100px',
                    })
                    return;
               }
               this.$nextTick(async () => {
                    this.$nuxt.$loading.start();
                    const payload = {
                         moduleType: this.trip.moduleType,
                         busServiceType: this.trip.busServiceType,
                         transportType: this.trip.transportType,
                         transportId: String(this.trip.transportId),
                         uid: this.trip.uid,
                         id: this.trip.id,
                         seatClass: this.trip.seatClass[0].name,
                         sku: String(this.trip.sku),
                         fromCity: this.trip.fromCity,
                         toCity: this.trip.toCity,
                         route: this.trip.route.name,
                         company: this.trip.company,
                         busId: this.trip.busId,
                         busName: this.trip.busId,
                         coachName: this.trip.coach.name,
                         coachType: this.trip.coach.type,
                         coachNo: this.trip.coach.registrationNumber,
                         seatLbls: this.selectedSeatLabels.join(','),
                         seatIds: this.selectedSeatIds.join(','),
                         ticketPrice: this.selectedSeatFares.join(','),
                         boardingPointId: String(this.boardingPoint.id),
                         boardingPointName: this.boardingPoint.name,
                         droppingPointName: this.trip.dropping,
                         departureId: this.trip.departureId,
                         departureDate: this.trip.departureDate,
                         departureTime: this.trip.departureTime,
                         boardingDateTime: this.boardingPoint.scheduleTime,
                         reportingDateTime: this.boardingPoint.reportingTime,
                         passengerName: this.passengerName,
                         passengerMobile: this.passengerPhone,
                         passengerEmail: this.passengerEmail,
                         passengerAddress: 'dhaka',
                         passengerGender: 'male',
                         passengerAge: '20',
                         isTicketCancelable: 1,
                         companyId: this.trip.companyId,
                         tripDateTime: this.trip.tripDateTime,
                         promoCode: this.promoCode,
                    };
                    await this.getPbPaymentPendingBlockAction(payload)
                    .then(res => {
                         if(res.statusCode === 404) {
                              this.$toast.error(res.message, {
                                   position: 'bottom-right',
                                   duration: 50000,
                                   containerClass: 'padding: 100px',
                              })
                              window.location.reload(true)
                         }
                         if(res.error) {
                              const seatViewPayload = {
                                   moduleType: this.trip.moduleType,
                                   busServiceType: this.trip.busServiceType,
                                   transportType: this.trip.transportType,
                                   transportId: this.trip.transportId,
                                   uid: this.trip.uid,
                                   fromCity: this.trip.fromCity,
                                   toCity: this.trip.toCity,
                                   busId: this.trip.busId,
                                   departureId: this.trip.departureId,
                                   departureDate: this.trip.departureDate,
                                   departureTime: this.trip.departureTime,
                                   sku: this.trip.sku,
                                   id: this.trip.id,
                                   seatPlan: this.trip.seatPlan,
                                   seatFare: this.trip.seatFare,
                                   companyId: this.trip.companyId,
                                   coachType: this.trip.coach.type,
                                   tripDateTime: this.trip.tripDateTime,
                              };
                              this.resetForm();
                              this.getPbSeatViewAction(seatViewPayload)
                              this.$nuxt.$loading.finish();
                         } else {
                              // let data = {
                              //   ...this.getGsPaymentPendingBlockData,
                              //   from,
                              //   to,
                              //   type,
                              //   date,
                              //   companyName: this.trip.company,
                              //   departureTime: this.trip.departureTime,
                              //   boarding: this.boardingPoint.name,
                              //   dropping: this.trip.dropping,
                              //   selectedSeatsObj: this.selectedSeatsObj,
                              //   totalAmount: this.totalAmount,
                              //   coachNo: this.trip.coach.name,
                              //   name: this.passengerName,
                              //   phone: this.passengerPhone,
                              //   email: this.passengerEmail || 'admin@jatri.co'
                              // };
                              // if (process.client) {
                              //    data = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))));
                              // }
                              if (res.statusCode === 200) {
                                   this.$router.push({
                                        path: '/guaranteed-seat/payment',
                                        query: { tnxId: this.getGsPaymentPendingBlockData.paymentInfo.transactionId }
                                   });
                              }
                         }
                         this.$nuxt.$loading.finish();
                    })
               })
          },
          resetForm() {
               this.passengerName = ''
               this.passengerPhone = ''
               this.passengerEmail = ''
               this.selectedSeatIds = []
               this.selectedSeatLabels = []
               this.selectedSeatFares = []
               this.selectedSeatsObj = []
               this.totalAmount = 0
               this.totalDiscountAmount = 0
               this.totalDiscountFare = 0
               this.promoCode = ''
               this.totalPromoAmount = 0
          },

          resetPromo() {
               this.promoCode = ''
               this.totalPromoAmount = 0
          },

          applyPromo () {
               this.$nextTick(async () => {
                    this.$nuxt.$loading.start();
                    const payload = {
                         promoCode: this.promoCode,
                         companyId: this.trip.companyId,
                         tripDateTime: this.trip.tripDateTime,
                         coachType: this.trip.coach.type,
                    }
                    await this.getPromoCodeAction(payload)
                         .then(res => {
                              if (res.statusCode === 200 && !res.data) {
                                   this.totalPromoAmount = 0;
                              } else if (res.statusCode === 200 && res.data) {
                              }
                         }).catch (error => {
                              this.resetPromo();
                         })
                    // promo calculation
                    if(this.getPromoCode && this.getPromoCode.minSpend <= this.totalAmount){
                         this.totalPromoAmount = this.getPromoCode.amount;
                    } else {
                         this.totalPromoAmount = 0;
                    }
                    this.$nuxt.$loading.finish();
               })
          }
     },
     watch: {
          getGsSeatBoardingPointArray (value) {
               let findId = value.findIndex(item => item.name.toLowerCase() === this.getGsSeatViewData.seatPlan.startingPoint.toLowerCase())
               this.boardingPoint = (findId === -1 ? value[0] : value[findId]);
          },
          getGsTrips: {
               handler(value) {
                    this.resetForm()
               },
               deep: true,
          }
     }
}
</script>

<style>

</style>