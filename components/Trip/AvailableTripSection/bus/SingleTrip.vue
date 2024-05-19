<template>
  <div
    class="bg-white border border-[#ededed] rounded-[10px] mb-[10px] lg:mb-4"
    :ref="`bus-selector-${busIndex}`"
  >
    <div
      class="lg:flex justify-between gap-x-6"
      :class="
        selectedTrip === busIndex
          ? 'border-b border-[#DBDBDB]'
          : 'border-0 border-[#DBDBDB]'
      "
    >
      <div
        class="w-full lg:w-4/5 py-5 px-4 lg:px-6 divide-y grid grid-cols-1 divide-dashed divide-[#DBDBDB] lg:border-r lg:border-[#DBDBDB]"
      >
        <div class="flex justify-between items-center pb-[15px] order-first">
          <div
            class="flex justify-start gap-x-4 items-center w-7/12 md:w-9/12 lg:w-7/12 xl:w-9/12 cursor-pointer"
            @click="handleBusImagePreviewModal"
            @mouseover="
              showToolTip = trip.companyImages?.gallery?.length && true
            "
            @mouseleave="showToolTip = false"
          >
            <img
              :src="
                (trip.companyImages?.logo &&
                  `${imageUrl}${trip.companyImages?.logo}`) ||
                require(`@/assets/images/busDefaultImage.svg`)
              "
              class="h-[40px] w[40px] rounded-full"
              alt=""
            />
            <div>
              <h2 class="text-sm lg:text-xl font-medium text-blackPrimary">
                {{ trip.company }}
              </h2>
              <p class="text-xs">
                <span class="font-normal text-blackLight">{{
                  getTripMeta(trip)
                }}</span>
              </p>
            </div>
          </div>
          <div
            class="mt-[95px] ml-0 w-auto bg-[#EDEDED] rounded-md shadow-xl z-[1000] before:block before:-mt-2 before:ml-4 before:bg-[#EDEDED] before:h-4 before:w-4 before:rotate-45 absolute"
            v-if="showToolTip"
          >
            <div class="text-center p-[5px] pt-[0px]">
              <h2 class="text-xs font-normal">
                <span>Click here to view bus image</span>
              </h2>
            </div>
          </div>

          <div
            v-if="trip?.hasOwnProperty('available')"
            class="w-5/12 md:w-4/12 lg:w-5/12 xl:w-3/12 text-right"
          >
            <div
              class="h-[30px] bg-[#F1F9F1] flex flex-row items-center justify-center rounded-full"
            >
              <img
                src="@/assets/images/ticket/seat.svg"
                alt="seat"
                class="mr-[10px]"
              />
              <p class="text-[#48A43F] text-xs">
                <span>{{ trip.available }}</span>
                <span v-if="trip.available > 1">Seats left</span>
                <span v-else>Seat left</span>
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between items-start py-[14px] order-last lg:order-1"
        >
          <p class="text-xs font-normal text-blackLight">Route</p>
          <h2
            class="text-xs lg:text-sm font-medium text-blackPrimary text-right"
          >
            {{ trip.route.name }}
          </h2>
        </div>
        <div
          class="flex justify-between items-center py-4 order-1 lg:order-last"
        >
          <p class="text-xs font-normal text-blackLight">Departure Time</p>
          <h2 class="text-sm lg:text-base font-medium text-blackPrimary">
            {{
              new Date(
                `${trip.departureDate} ${trip.departureTime}`
              ).toLocaleString("en-Us", { timeStyle: "short" })
            }}
          </h2>
        </div>

        <BusImagePreviewModal
          v-if="showBusImageModal"
          :companyName="trip.company"
          :close="handleBusImagePreviewModal"
          :companyImages="trip.companyImages"
        />
        <div
          class="flex justify-evenly md:gap-[16px] items-center lg:order-last w-full pt-[15px] pb-[15px] lg:pb-[0px]"
        >
          <PointPolicyButton
            text="Boarding Point"
            :click="() => setCurrentTab(TabData.BOARDING_POINT)"
          />
          <PointPolicyButton
            text="Dropping Point"
            :click="() => setCurrentTab(TabData.DROPPING_POINT)"
          />
          <PointPolicyButton
            text="Cancellation Policy"
            :click="() => setCurrentTab(TabData.CANCEL_POLICY)"
          />
          <PointAndPolicyModal
            v-if="showPointPolicyModal"
            :selectedTab="selectedTab"
            :setCurrentTab="setCurrentTab"
            :handlePointPolicyModal="handlePointPolicyModal"
            :boardingPoints="getModalBoardingPoints"
            :droppingPoints="getDroppingPoints"
          />
        </div>
      </div>
      <!-- <div class="hidden lg:block h-full w-[1px] bg-[#DBDBDB] mx-6"></div> -->
      <div class="block lg:hidden h-[1px] bg-[#DBDBDB] mb-[10px]"></div>

      <div
        class="w-full lg:w-[30%] xl:w-1/5 py-4 lg:py-5 px-4 lg:px-0 lg:pr-6 flex justify-between items-center lg:items-start lg:flex-col"
      >
        <div class="hidden lg:block">
          <img
            src="@/assets/images/icons/fareIcon.svg"
            alt=""
            class="w-[30px]"
          />
          <h2
            v-if="trip.discountSeatFare"
            class="mt-[10px] text-base lg:text-xl font-semibold text-blackPrimary"
          >
            <span class="line-through text-corporate">{{ trip.seatFare }}</span>
            {{ trip.discountSeatFare }}
            <span class="text-base">TK</span>
          </h2>
          <h2
            v-else
            class="mt-[10px] text-base lg:text-xl font-semibold text-blackPrimary"
          >
            {{ trip.seatFare }}
            <span class="text-base">TK</span>
          </h2>
          <p class="text-xs font-normal text-blackLight mt-1">Per Seat</p>
        </div>
        <div class="lg:hidden flex justify-start items-center gap-x-3">
          <img
            src="@/assets/images/icons/fareIcon.svg"
            alt=""
            class="w-[30px]"
          />
          <div>
            <h2
              v-if="trip.discountSeatFare"
              class="text-xl font-semibold text-blackPrimary"
            >
              <span class="line-through text-corporate">{{
                trip.seatFare
              }}</span>
              {{ trip.discountSeatFare }}
              <span class="text-xs">TK</span>
            </h2>
            <h2 v-else class="text-xl font-semibold text-blackPrimary">
              {{ trip.seatFare }}
              <span class="text-xs">TK</span>
            </h2>
            <p class="text-xs font-normal text-blackLight mt-1">Per Seat</p>
          </div>
        </div>
        <button
          @click="handleSeatView(selectedTrip === busIndex ? '' : busIndex)"
          class="lg:w-full bg-corporate rounded-full flex justify-center gap-x-[11.76px] items-center text-white text-xs font-medium p-3 lg:mt-[26px]"
        >
          {{ selectedTrip === busIndex ? "Close Seats" : "View Seats" }}
          <span>
            <img
              src="@/assets/images/icons/viewSeatIcon.svg"
              alt=""
              :class="
                selectedTrip === busIndex &&
                'transition-all ease-in-out rotate-180'
              "
              class="w-[8.49px] h-[5.19px]"
            />
          </span>
        </button>
      </div>
    </div>

    <!-- accordion start -->
    <div
      v-if="selectedTrip === busIndex"
      class="bg-white rounded-b-[10px] pt-4 pr-2 lg:pr-6 pb-6 pl-2"
      :class="
        selectedTrip === busIndex
          ? 'max-h-max transition-all ease-in-out duration-700'
          : 'h-0'
      "
    >
      <div class="flex flex-wrap justify-between xl:divide-x">
        <!-- Bus Design -->
        <div class="w-full lg:w-1/2">
          <div
            class="rounded-[10px] py-4 lg:py-6 px-1 xl:px-4 xl:mr-6 bg-[#f7f7f7]"
          >
            <div
              class="flex lg:flex-wrap xl:flex-nowrap gap-y-2 justify-between lg:border-t lg:border-b border-dashed items-center py-1 lg:py-2 lg:mt-5"
            >
              <div
                class="flex gap-x-2 justify-center items-center border-r last:border-r-0 px-[14px]"
              >
                <img
                  src="@/assets/images/seats/available-seats.svg"
                  alt="Available"
                  class="w-[15px] lg:w-[23px] h-[15px] lg:h-5"
                />
                <p
                  class="text-xs xl:text-sm leading-[18px] font-medium lg:font-normal text-blackLight"
                >
                  Available
                </p>
              </div>
              <div
                class="flex gap-x-2 justify-center items-center border-r last:border-r-0 px-[14px]"
              >
                <ArmChairIcon
                  :class="'w-[15px] lg:w-[23px] h-[15px] lg:h-5'"
                  :fill="'#8D8D8F'"
                  :stroke="'#8D8D8F'"
                  height="24"
                  width="24"
                />
                <p
                  class="text-xs xl:text-sm leading-[18px] font-medium lg:font-normal text-blackLight"
                >
                  Booked
                </p>
              </div>
              <div
                class="flex gap-x-2 justify-center items-center border-r last:border-r-0 px-[14px]"
              >
                <img
                  src="@/assets/images/seats/selected-seats.svg"
                  alt="Selected"
                  class="w-[15px] lg:w-[23px] h-[15px] lg:h-5"
                />
                <p
                  class="text-xs xl:text-sm leading-[18px] font-medium lg:font-normal text-blackLight"
                >
                  Selected
                </p>
              </div>
            </div>

            <div v-if="getSeatArray?.length">
              <SeatView
                :showDriver="true"
                :seatArray="getSeatArray"
                :addSeatHandler="addSeatHandler"
                :selectedSeatIds="selectedSeatIds"
                seatType="NORMAL_DECK"
                :boardingPoint="boardingPoint"
                :droppingPoint="droppingPoint"
              />
            </div>

            <div v-if="getLowerDeckSeatArray?.length">
              <DeckName name="LOWER DECK" />
              <SeatView
                :showDriver="true"
                :seatArray="getLowerDeckSeatArray"
                :addSeatHandler="addSeatHandler"
                :selectedSeatIds="selectedSeatIds"
                seatType="LOWER_DECK"
                :boardingPoint="boardingPoint"
                :droppingPoint="droppingPoint"
              />
            </div>
            <div v-if="getUpperDeckSeatArray?.length">
              <DeckName name="UPPER DECK" />
              <SeatView
                :showDriver="false"
                :seatArray="getUpperDeckSeatArray"
                :addSeatHandler="addSeatHandler"
                :selectedSeatIds="selectedSeatIds"
                seatType="UPPER_DECK"
                :boardingPoint="boardingPoint"
                :droppingPoint="droppingPoint"
              />
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 lg:pl-6 mt-4 pt-4 lg:pt-0 lg:mt-0">
          <!-- Trip Information -->
          <div class="">
            <SelectOption
              v-model="boardingPoint"
              :default-option="'Select Your Boarding Location'"
              :label="'Boarding point'"
              :options="getSeatBoardingPointArray"
              propertyName="name"
              :isRequired="true"
            />
            <!-- :options="getSeatBoardingPointArray" -->
          </div>
          <div class="mt-4" v-if="getSeatDroppingPointArray.length">
            <SelectOption
              v-model="droppingPoint"
              :default-option="'Select Your Dropping Location'"
              :label="'Dropping point'"
              :options="getSeatDroppingPointArray"
              propertyName="name"
              :isRequired="true"
            />
            <!-- :options="getSeatDroppingPointArray" -->
          </div>
          <div class="mt-4">
            <h2 class="text-xs lg:text-base font-medium text-blackPrimary">
              Departure time
            </h2>
            <div class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded h-[46px]">
              <p class="text-blackPrimary text-sm font-medium">
                {{ boardingPoint?.scheduleTime ? departureDateTime : "" }}
              </p>
            </div>
          </div>

          <!-- Seat Fare Table -->
          <div
            v-if="selectedSeatsObjArray.length"
            class="mt-4 bg-[#f7f7f7] rounded border border-[#EDEDED]"
          >
            <div
              class="grid grid-cols-3 gap-x-[14px] px-[14px] py-[10px] border-b"
            >
              <p class="text-sm lg:text-xs font-semibold text-blackPrimary">
                Seat
              </p>
              <p
                class="text-sm lg:text-xs font-semibold text-blackPrimary text-center"
              >
                Class
              </p>
              <p
                class="text-sm lg:text-xs font-semibold text-blackPrimary text-right"
              >
                Fare
              </p>
            </div>

            <div class="px-4 py-3">
              <div
                v-for="seat in selectedCustomizeSeatList"
                :key="seat.id"
                class="grid grid-cols-3 gap-x-4 py-2 border-b last:border-b-0 border-dashed"
              >
                <p class="text-xs lg:text-sm font-medium text-blackPrimary">
                  {{ seat.seatNo }}
                </p>
                <p
                  class="text-xs lg:text-sm font-medium text-blackPrimary text-center"
                >
                  {{ seat.class }}
                </p>
                <p
                  class="text-xs lg:text-sm font-medium text-blackPrimary text-right"
                >
                  {{ seat.fare }}
                </p>
              </div>
            </div>

            <div
              v-if="totalDiscountFare > 0"
              class="bg-[#EFF7FD] border-t flex justify-between items-center px-4 py-[10px]"
            >
              <p
                class="text-xs font-semibold text-blackLight lg:text-blackPrimary"
              >
                Discount amount
              </p>
              <p class="text-base lg:text-xs font-semibold text-blackPrimary">
                BDT {{ totalDiscountFare }}
              </p>
            </div>

            <div
              v-if="totalPromoAmount > 0"
              class="bg-[#EFF7FD] border-t flex justify-between items-center px-4 py-[10px]"
            >
              <p
                class="text-xs font-semibold text-blackLight lg:text-blackPrimary"
              >
                Promo amount
              </p>
              <p class="text-base lg:text-xs font-semibold text-blackPrimary">
                BDT {{ totalPromoAmount }}
              </p>
            </div>
            <div
              class="bg-[#EFF7FD] border-t flex justify-between items-center px-4 py-[10px]"
            >
              <p
                class="text-xs font-semibold text-blackLight lg:text-blackPrimary"
              >
                Total fare
              </p>
              <p class="text-base lg:text-xs font-semibold text-blackPrimary">
                BDT
                <span>{{
                  totalAmount - (totalDiscountFare + totalPromoAmount)
                }}</span>
              </p>
            </div>
          </div>

          <!-- Passenger Information -->
          <div class="mt-4">
            <h2 class="text-xs lg:text-base font-medium text-blackPrimary">
              Passenger name <span class="text-[#E0293B]">*</span>
            </h2>
            <input
              class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs placeholder:text-blackSecondary text-blackPrimary"
              type="text"
              placeholder="Enter your name"
              v-model="passengerName"
            />
          </div>

          <div class="mt-4">
            <h2 class="text-xs lg:text-base font-medium text-blackPrimary">
              Phone no <span class="text-[#E0293B]">*</span>
            </h2>
            <div class="flex h-[56px] bg-[#F7F7F7] rounded pl-[16px]">
              <div class="flex items-center shrink-0">
                <img
                  class="w-[48px] h-[32px]"
                  src="@/assets/images/bd-flag.svg"
                  alt=""
                />
                <div
                  class="text-[14px] leading-[24px] font-Inter font-[400] tracking-wide text-[#747476] ml-[14px]"
                >
                  +88
                </div>
                <img
                  class="w-[2px] h-[28px] ml-[4px]"
                  src="@/assets/images/input-separator.svg"
                  alt=""
                />
              </div>
              <input
                class="bg-[#f7f7f7] px-4 py-[13px] mt-[0px] rounded w-full focus:outline-0 text-xs focus:appearance-none placeholder:text-blackSecondary text-blackPrimary"
                type="number"
                autocomplete="something-to-fool-chrome"
                minlength="11"
                maxlength="11"
                required=""
                placeholder="Enter your phone"
                v-model="passengerPhone"
                @input="handleInput"
                @paste="handlePaste"
                @wheel="$event.target.blur()"
              />
            </div>
          </div>

          <div class="mt-4">
            <h2
              class="text-xs lg:text-base font-medium text-blackPrimary flex justify-between"
            >
              <span>Email id </span>
              <span class="text-[#8D8D8F] text-xs">Optional</span>
            </h2>
            <input
              class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs placeholder:text-blackSecondary text-blackPrimary"
              type="email"
              placeholder="Enter your email id"
              v-model="passengerEmail"
            />
          </div>

          <LoaderButton
            :class="
              (passengerEmail && !isValidPassengerEmail) ||
              !selectedSeatIds.length ||
              !boardingPoint?.name ||
              (getSeatDroppingPointArray.length && !droppingPoint?.name) ||
              !passengerName ||
              !passengerPhone ||
              !realPhoneNumber
                ? 'bg-gray-500 user cursor-not-allowed'
                : 'bg-corporate hover:bg-[#D93E2D]'
            "
            :disabled="
              (passengerEmail && !isValidPassengerEmail) ||
              getLoading ||
              !boardingPoint?.name ||
              (getSeatDroppingPointArray.length && !droppingPoint?.name) ||
              !passengerName ||
              !passengerPhone ||
              !realPhoneNumber
            "
            :loading="getLoading"
            class="bg-corporate rounded-full py-[13px] w-full text-white text-sm font-medium mt-6"
            @onClick="paymentPendingBlockHandler"
          >
            Next
          </LoaderButton>

          <div
            class="text-center mt-[20px] flex justify-center items-center gap-x-2 divide-x-2"
          >
            <a
              href="/bus/policies#terms-and-conditions"
              target="_blank"
              class="w-full underline text-blackPrimary text-sm font-normal"
              >Terms and Conditions</a
            >
            <a
              href="/bus/policies#return-and-refund-policy"
              target="_blank"
              class="w-full underline text-blackPrimary text-sm font-normal"
              >Cancellation Policy</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from "vuex";

import { dateTimeFormat, timeFormat } from "@/helpers/dateTimeFormat";
import moment from "moment";
import { dateFormat } from "../../../../helpers/dateTimeFormat";
import {
  cleanAndValidatePastedText,
  cleanAndValidatePhoneNumber,
  handleScrollBehaviour,
  isValidEmail,
  moduleType,
  validatePhone
} from "../../../../helpers/utils";
import SleeperBedIcon from "../../../Svg/SleeperBedIcon.vue";

export default {
  components: { SleeperBedIcon },
  props: [
    "trip",
    "selectedTrip",
    "busIndex",
    "setSelectedBuxIndex",
    "selectedBuxIndex",
  ],
  mounted() {
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
    this.moduleType = moduleType;
  },
  data() {
    return {
      selectedTab: "",
      moduleType: null,
      TabData: {
        BOARDING_POINT: "BOARDING_POINT",
        DROPPING_POINT: "DROPPING_POINT",
        CANCEL_POLICY: "CANCEL_POLICY",
      },
      imageUrl: "",
      showPointPolicyModal: false,
      showBusImageModal: false,
      selected: false,
      boardingPoint: null,
      droppingPoint: null,
      passengerCount: "",
      selectedSeatIds: [],
      selectedSeatLabels: [],
      selectedSeatFares: [],
      selectedSeatsObjArray: [],
      selectedCustomizeSeatList: [],
      totalAmount: 0,
      totalDiscountAmount: 0,
      totalDiscountFare: 0,
      passengerName: "",
      passengerPhone: "",
      passengerEmail: "",
      promoCode: "",
      totalPromoAmount: 0,
      moduleType: this.trip.moduleType,
      showToolTip: false,
      emailReg: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      requestOnGoing: false,
      oid: null,
      sid: null,
      realPhoneNumber: false,
    };
  },
  computed: {
    ...mapGetters("busStore", [
      "getSeatArray",
      "getUpperDeckSeatArray",
      "getLowerDeckSeatArray",
      "getSeatBoardingPointArray",
      "getSeatDroppingPointArray",
      "getPaymentPendingBlockData",
      "getLoading",
      "getSeatViewData",
      "getTrips",
      "getPromoCode",
      "getModalBoardingPoints",
      "getDroppingPoints",
    ]),
    isValidPassengerEmail() {
      return isValidEmail(this.passengerEmail);
    },
    departureDateTime() {
      if (this.boardingPoint?.scheduleTime === "") {
        return dateTimeFormat(
          new Date(
            `${this.trip.departureDate} ${this.trip.departureTime}`
          ).toLocaleString("en-Us"),
          6,
          "lll"
        );
      }
      return dateTimeFormat(this.boardingPoint?.scheduleTime, 6, "lll");
    },
    departureTime() {
      if (this.boardingPoint.scheduleTime === "") {
        return new Date(
          `${this.trip.departureDate} ${this.trip.departureTime}`
        ).toLocaleString("en-Us", { timeStyle: "short" });
      }
      return new Date(`${this.boardingPoint.scheduleTime}`).toLocaleString(
        "en-Us",
        { timeStyle: "short" }
      );
    },
    departureDate() {
      if (this.boardingPoint.scheduleTime === "") {
        return dateFormat(this.boardingPoint.scheduleTime, 6, "YYYY-MM-DD");
      }
      return dateFormat(this.boardingPoint.scheduleTime, 6, "YYYY-MM-DD");
    },
    reportingDateTime() {
      if (this.boardingPoint.scheduleTime === "") {
        return timeFormat(
          moment(
            `${this.trip.departureDate} ${this.trip.departureTime}`
          ).subtract({ hour: 0, minute: 30 }),
          6,
          "YYYY-MM-DD HH:mm:ss"
        );
      }
      return timeFormat(
        moment(
          `${this.trip.departureDate} ${this.boardingPoint.scheduleTime}`
        ).subtract({ hour: 0, minute: 30 }),
        6,
        "YYYY-MM-DD HH:mm:ss"
      );
    },
  },
  methods: {
    ...mapMutations("busStore", [
      "mobileFloatingFilter",
      "setModalBoardingPoints",
      "setDroppingPoints",
      "updateSeatStatus",
    ]),
    ...mapActions("busStore", [
      "getPbSeatViewAction",
      "getBoardingPointForBus",
      "getPbPaymentPendingBlockAction",
      "getPromoCodeAction",
      "seatLockAction",
    ]),
    handleInput() {
      this.passengerPhone = cleanAndValidatePhoneNumber(this.passengerPhone);
      this.realPhoneNumber = validatePhone(this.passengerPhone)
    },

    handlePaste(event) {
      event.preventDefault();
      // Get the pasted text
      const pastedText = event.clipboardData.getData("text/plain");
      this.passengerPhone = cleanAndValidatePastedText(pastedText);
      this.realPhoneNumber = validatePhone(pastedText);
    },
    getTripMeta(trip) {
      const { coach } = trip;
      const coachType = coach?.type?.toUpperCase() || "";

      if (trip.moduleType !== moduleType.SHOHAGH) {
        return `${coach.name}${coachType ? " | " + coachType : ""}`;
      }

      return coachType || "";
    },
    setCurrentTab(value) {
      if (this.selectedBuxIndex !== this.busIndex) {
        this.setDroppingPoints([]);
        this.setModalBoardingPoints([]);
        this.$nextTick(async () => {
          this.$nuxt.$loading?.start();
          const payload = this.getPayloadForSeatView();
          await this.getBoardingPointForBus(payload);
          this.$nuxt.$loading?.finish();
          this.setSelectedBuxIndex(this.busIndex);
          this.showPointPolicyModal = true;
        });
      } else {
        this.showPointPolicyModal = true;
      }
      this.selectedTab = value;
      this.stopBackgroundScroll(true);
    },
    handlePointPolicyModal() {
      this.showPointPolicyModal = !this.showPointPolicyModal;
      this.stopBackgroundScroll(this.showPointPolicyModal);
    },
    handleBusImagePreviewModal() {
      if (this.trip?.companyImages?.gallery?.length) {
        this.showBusImageModal = !this.showBusImageModal;
        this.stopBackgroundScroll(this.showBusImageModal);
      }
    },
    stopBackgroundScroll(value) {
      handleScrollBehaviour(!value);
    },
    handleSeatView(selectedTripId) {
      this.mobileFloatingFilter(selectedTripId === "" ? true : false);
      this.resetPromo();

      if (selectedTripId === "") {
        // Unlock all seats while close seat view
        if (this.selectedSeatLabels?.length) {
          this.handleSeatLock(this.selectedSeatLabels.join(","), false);
        }
        this.$emit("selectedTripId", null);
        this.resetForm(true);
        return;
      }
      this.$nextTick(async () => {
        this.$nuxt.$loading?.start();
        this.fireGTMEventForViewSeat();
        const payload = this.getPayloadForSeatView();
        await this.getPbSeatViewAction(payload);
        this.$nuxt.$loading?.finish();
        this.$emit("selectedTripId", selectedTripId);
        const el = this.$refs[`bus-selector-${selectedTripId}`];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    },
    fireGTMEventForViewSeat() {
      const eventData = {
        event: "viewSeats",
        from: this.trip.fromCity,
        to: this.trip.toCity,
        coach: this.trip.coach.name,
        company: this.trip.company,
        journeyDate: this.departureDateTime,
      };

      this.$gtm.push(eventData);
    },
    getPayloadForSeatView() {
      return {
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
        seatClass: this.trip.seatClass,
        seatFare: this.trip.seatFare,
        companyId: this.trip.companyId,
        coachType: this.trip.coach.type,
        tripDateTime: this.trip.tripDateTime,
      };
    },
    isSitAlreadySelected(seat) {
      return this.selectedSeatIds.includes(seat.id);
    },
    handleSitUnSelect(seat) {
      this.selectedSeatIds = this.selectedSeatIds.filter(
        (id) => id !== seat.id
      );

      this.selectedSeatLabels = this.selectedSeatLabels.filter(
        (label) => label !== seat.seatNo
      );

      this.selectedSeatFares = this.selectedSeatsObjArray
        .map((item) => {
          if (item.id !== seat.id) {
            return item.fare;
          }
        })
        .filter(Boolean);

      this.selectedSeatsObjArray = this.selectedSeatsObjArray.filter(
        (item) => item.id !== seat.id
      );

      this.totalAmount -= this.getTheCorrectSeatFare(seat);
    },
    disCountCalculationOnSitUnselect(seat) {
      if (seat.discountFare != null) {
        this.totalDiscountAmount -= seat.fare - seat.discountFare;
      } else {
        this.totalDiscountAmount -= 0;
      }

      if (
        this.trip.offer &&
        this.totalDiscountAmount <= this.trip.offer.maxOfferAmount
      ) {
        this.totalDiscountFare = this.totalDiscountAmount;
      } else if (
        this.trip.offer &&
        this.totalDiscountAmount > this.trip.offer.maxOfferAmount
      ) {
        this.totalDiscountFare -= 0;
      }
    },
    promoCalculationOnUnSelect() {
      if (this.getPromoCode && this.getPromoCode.minSpend > this.totalAmount) {
        this.totalPromoAmount = 0;
      }
    },
    isSitLimitCrossed() {
      return (
        this.selectedSeatIds.length >
        this.getSeatViewData.seatPlan.maxSeatLimit - 1
      );
    },
    showSeatLimitCrossError() {
      this.$toast.error(
        `You can select ${this.getSeatViewData.seatPlan.maxSeatLimit} seats at a time!`,
        {
          position: "bottom-right",
          duration: 50000,
          containerClass: "padding: 100px",
        }
      );
    },
    handleSitSelect(seat) {
      this.selectedSeatIds.push(seat.id);
      this.selectedSeatLabels.push(seat.seatNo);
      this.selectedSeatsObjArray.push(seat);
      this.selectedSeatFares.push(seat.fare);
      this.totalAmount += this.getTheCorrectSeatFare(seat);
    },
    isSitHaveFareList(seat) {
      return seat?.fareList?.length;
    },
    getTheCorrectSeatFare(seat) {
      if (this.isSitHaveFareList(seat)) {
        const foundIndex = seat.fareList.findIndex((item) => {
          return (
            item?.boardingPoint?.toLowerCase() ===
              this.boardingPoint?.name.toLowerCase() &&
            item?.droppingPoint?.toLowerCase() ===
              this.droppingPoint?.name.toLowerCase()
          );
        });

        // according to intercity v2 new model start
        if (foundIndex !== -1) {
          this.sid = seat.fareList[foundIndex].sid;
          this.oid = seat.fareList[foundIndex].oid;
        }
        // according to intercity v2 new model end

        return foundIndex === -1 ? seat.fare : seat.fareList[foundIndex].fare;
      } else {
        return seat.fare;
      }
    },
    disCountCalculationOnSitSelect(seat) {
      if (seat.discountFare !== null) {
        this.totalDiscountAmount += seat.fare - seat.discountFare;
        if (
          this.trip.offer &&
          this.totalDiscountAmount <= this.trip.offer.maxOfferAmount
        ) {
          this.totalDiscountFare += seat.fare - seat.discountFare;
        } else if (
          this.trip.offer &&
          this.totalDiscountAmount >= this.trip.offer.maxOfferAmount
        ) {
          this.totalDiscountFare = this.trip.offer.maxOfferAmount;
        }
      }
    },
    promoCalculationOnSitSelect() {
      if (this.getPromoCode && this.getPromoCode.minSpend <= this.totalAmount) {
        this.totalPromoAmount = this.getPromoCode.amount;
      }
    },
    async addSeatHandler(seat, seatInfo) {
      // Is any request ongoing
      if (this.requestOnGoing) return;

      if (this.isSitAlreadySelected(seat)) {
        // Action for sit unselect
        this.handleSeatLock([seat.seatNo].join(","), false);
        this.handleSitUnSelect(seat);
        this.disCountCalculationOnSitUnselect(seat);
        this.promoCalculationOnUnSelect();
      } else {
        if (this.isSitLimitCrossed()) {
          this.showSeatLimitCrossError();
          return;
        }

        const isSeatLocked = await this.isSeatLocked([seat.seatNo].join(","));

        if (isSeatLocked) {
          //update seat status here
          this.updateSeatStatus(seatInfo);

          this.$toast.error(`Seat already in progress.`, {
            position: "bottom-right",
            duration: 50000,
            containerClass: "padding: 100px",
          });
          return;
        } else {
          this.handleSitSelect(seat);
          this.disCountCalculationOnSitSelect(seat);
          this.promoCalculationOnSitSelect();
        }
      }
    },
    isSeatLocked(seatLbls) {
      return new Promise((resolve) => {
        this.requestOnGoing = true;
        this.$nextTick(async () => {
          const payload = {
            moduleType: this.trip.moduleType,
            fromCity: this.trip.fromCity,
            toCity: this.trip.toCity,
            departureDate: this.trip.departureDate,
            locked: true,
            uid: this.trip.uid,
            seatLbls: seatLbls,
            coachName: this.trip.coach.name,
          };

          try {
            const res = await this.seatLockAction(payload);
            if (res?.data) {
              const seatLock = res.data?.seatLock;
              resolve(seatLock === false);
            }
            this.requestOnGoing = false;
            resolve(false);
          } catch (error) {
            this.requestOnGoing = false;
            resolve(false);
          }
        });
      });
    },
    handleSeatLock(seatLbls, action) {
      this.requestOnGoing = true;
      this.$nextTick(async () => {
        const payload = {
          moduleType: this.trip.moduleType,
          fromCity: this.trip.fromCity,
          toCity: this.trip.toCity,
          departureDate: this.trip.departureDate,
          locked: action,
          uid: this.trip.uid,
          seatLbls: seatLbls,
          coachName: this.trip.coach.name,
        };

        try {
          const res = await this.seatLockAction(payload);
          this.requestOnGoing = false;
        } catch (error) {
          this.requestOnGoing = false;
          this.$toast.error(
            e.response.data.message ?? "Something went wrong!",
            {
              position: "bottom-right",
              duration: 5000,
            }
          );
        }
      });
    },
    async paymentPendingBlockHandler() {
      if (this.passengerEmail && !this.isValidPassengerEmail) {
        this.$toast.error("Enter a valid email address", {
          position: "bottom-right",
          duration: 50000,
          containerClass: "padding: 100px",
        });
        return;
      }
      if (!this.selectedSeatIds.length) {
        this.$toast.error("No Seat Selected", {
          position: "bottom-right",
          duration: 50000,
          containerClass: "padding: 100px",
        });
        return;
      }

      this.$nextTick(async () => {
        this.$nuxt.$loading?.start();
        this.fireGTMEventForAddToCart();
        const payload = {
          moduleType: this.trip.moduleType,
          busServiceType: this.trip.busServiceType,
          transportType: this.trip.transportType,
          transportId: String(this.trip.transportId),
          uid: this.trip.uid,
          oid: this.oid,
          sid: this.sid,
          id: this.trip.id,
          seatClass: this.trip?.seatClass,
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
          seatLbls: this.selectedSeatLabels.join(","),
          seatIds: this.selectedSeatIds.join(","),
          ticketPrice: this.selectedSeatFares.join(","),
          boardingPointId: String(this.boardingPoint.id),
          boardingPointName: this.boardingPoint.name,
          droppingPointName: this.droppingPoint.name,
          droppingPointId: String(this.droppingPoint.id),
          departureId: this.trip.departureId,
          departureDate: this.trip.departureDate,
          departureTime: new Date(
            `${this.trip.departureDate} ${this.trip.departureTime}`
          ).toLocaleString("en-Us", { timeStyle: "short" }),
          boardingDateTime: this.boardingPoint.scheduleTime,
          reportingDateTime: this.boardingPoint.reportingTime,
          passengerName: this.passengerName,
          passengerMobile: this.passengerPhone?.length === 10 ? `0${this.passengerPhone}` :`${this.passengerPhone}`,
          passengerEmail: this.passengerEmail,
          passengerAddress: "dhaka",
          passengerGender: "male",
          passengerAge: "20",
          isTicketCancelable: 1,
          companyId: this.trip.companyId,
          tripDateTime: this.trip.tripDateTime,
          promoCode: this.promoCode,
        };
        await this.getPbPaymentPendingBlockAction(payload).then((res) => {
          if (res.statusCode === 404) {
            this.$toast.error(res.message, {
              position: "bottom-right",
              duration: 50000,
              containerClass: "padding: 100px",
            });
            window.location.reload(true);
          }
          if (res.error) {
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
              seatClass: this.trip.seatClass,
              seatFare: this.trip.seatFare,
              companyId: this.trip.companyId,
              coachType: this.trip.coach.type,
              tripDateTime: this.trip.tripDateTime,
            };
            this.resetForm(false);
            this.getPbSeatViewAction(seatViewPayload);
            this.$nuxt.$loading?.finish();
          } else {
            if (res.statusCode === 200) {
              this.$router.push({
                path: "/bus/payment",
                query: {
                  tnxId:
                    this.getPaymentPendingBlockData.paymentInfo.transactionId,
                    from: this.$route.query.from,
                    to: this.$route.query.to,
                },
              });
            }
          }
          this.$nuxt.$loading?.finish();
        });
      });
    },
    fireGTMEventForAddToCart() {
      const eventData = {
        event: "addToCart",
        currency: "BDT",
        from: this.trip.fromCity,
        to: this.trip.toCity,
        coach: this.trip.coach.name,
        company: this.trip.company,
        journeyDate: this.departureDateTime,
        seatCount: this.selectedSeatIds.length,
        totalFare:
          this.totalAmount - (this.totalDiscountFare + this.totalPromoAmount),
      };

      this.$gtm.push(eventData);
    },

    resetForm(clearUserInfo) {
      if (clearUserInfo) {
        this.passengerName = "";
        this.passengerPhone = "";
        this.passengerEmail = "";
      }
      this.selectedSeatIds = [];
      this.selectedSeatLabels = [];
      this.selectedSeatFares = [];
      this.selectedSeatsObjArray = [];
      this.totalAmount = 0;
      this.totalDiscountAmount = 0;
      this.totalDiscountFare = 0;
      this.promoCode = "";
      this.totalPromoAmount = 0;
    },

    resetPromo() {
      this.promoCode = "";
      this.totalPromoAmount = 0;
    },

    applyPromo() {
      this.$nextTick(async () => {
        this.$nuxt.$loading?.start();
        const payload = {
          promoCode: this.promoCode,
          companyId: this.trip.companyId,
          tripDateTime: this.trip.tripDateTime,
          coachType: this.trip.coach.type,
        };
        await this.getPromoCodeAction(payload)
          .then((res) => {
            if (res.statusCode === 200 && !res.data) {
              this.totalPromoAmount = 0;
            } else if (res.statusCode === 200 && res.data) {
            }
          })
          .catch((error) => {
            this.resetPromo();
          });
        // promo calculation
        if (
          this.getPromoCode &&
          this.getPromoCode.minSpend <= this.totalAmount
        ) {
          this.totalPromoAmount = this.getPromoCode.amount;
        } else {
          this.totalPromoAmount = 0;
        }
        this.$nuxt.$loading?.finish();
      });
    },
    updateTheCustomizedSitList(value) {
      this.selectedCustomizeSeatList = value.map((item) => ({
        id: item.id,
        seatNo: item.seatNo,
        class: item.class,
        fare: this.getTheCorrectSeatFare(item),
      }));

      this.selectedSeatFares = value.map((item) =>
        this.getTheCorrectSeatFare(item)
      );
    },
    updateTotalAmount() {
      this.totalAmount = this.selectedSeatsObjArray.reduce((total, item) => {
        return total + this.getTheCorrectSeatFare(item);
      }, 0);
    },
    updateTotalDiscountAndFareAmount() {
      let tempTotalDiscountAmount = 0;
      let tempTotalDiscountFare = 0;

      this.selectedSeatsObjArray.forEach((seat) => {
        if (seat.discountFare !== null) {
          const discountAmount =
            this.getTheCorrectSeatFare(seat) - seat.discountFare;
          tempTotalDiscountAmount += discountAmount;

          if (
            this.trip.offer &&
            tempTotalDiscountAmount <= this.trip.offer.maxOfferAmount
          ) {
            tempTotalDiscountFare += discountAmount;
          } else if (
            this.trip.offer &&
            tempTotalDiscountAmount >= this.trip.offer.maxOfferAmount
          ) {
            tempTotalDiscountFare = this.trip.offer.maxOfferAmount;
          }
        }
      });

      this.totalDiscountAmount = tempTotalDiscountAmount;
      this.totalDiscountFare = tempTotalDiscountFare;
    },
    actionForNotAvailableSeats(notAvailableSeats) {
      const notAvailableSeatsLabels = notAvailableSeats.map(
        (seat) => seat.seatNo
      );

      if (notAvailableSeatsLabels?.length) {
        this.handleSeatLock(notAvailableSeatsLabels.join(","), false);
      }
    },
    manageSeatSelectionAndPromoCalculation() {
      const seats = this.selectedSeatsObjArray.slice();

      // Filter out unavailable seats
      const notAvailableSeats = seats.filter(
        (seat) => !this.isSeatAvailable(seat)
      );

      // Handle action for unavailable seats
      if (notAvailableSeats.length) {
        this.actionForNotAvailableSeats(notAvailableSeats);
      }

      // Filter available seats and perform operations
      const availableSeats = seats.filter((seat) => this.isSeatAvailable(seat));
      this.resetForm(false);
      availableSeats.forEach((seat) => {
        this.handleSitSelect(seat);
        this.disCountCalculationOnSitSelect(seat);
        this.promoCalculationOnSitSelect();
      });
    },
    isSeatAvailable(seat) {
      if (!seat || (!seat.fareList && seat.status !== "available")) {
        return false;
      }

      if (
        seat.fareList &&
        this.boardingPoint?.name &&
        this.droppingPoint?.name
      ) {
        const isStatusMissing = seat.fareList.some(
          (seat) => !seat.hasOwnProperty("status")
        );

        if (!isStatusMissing) {
          return seat.fareList.some(
            (item) =>
              item.boardingPoint === this.boardingPoint?.name &&
              item.droppingPoint === this.droppingPoint?.name &&
              item.status === "available"
          );
        }
      }

      return seat.status === "available";
    },
  },
  watch: {
    selectedTrip(value) {
      if (
        value >= 0 &&
        value != this.busIndex &&
        this.selectedSeatLabels?.length
      ) {
        this.handleSeatLock(this.selectedSeatLabels.join(","), false);
        this.resetForm(false);
      }
    },
    getSeatBoardingPointArray() {
      this.boardingPoint = { name: "", id: "" };
    },
    getSeatDroppingPointArray() {
      this.droppingPoint = { name: "", id: "" };
    },
    getTrips: {
      handler(value) {
        this.resetForm(false);
      },
      deep: true,
    },
    selectedSeatsObjArray(value) {
      this.updateTheCustomizedSitList(value);
    },
    boardingPoint() {
      this.manageSeatSelectionAndPromoCalculation();
    },
    droppingPoint() {
      this.manageSeatSelectionAndPromoCalculation();
    },
  },
};
</script>


