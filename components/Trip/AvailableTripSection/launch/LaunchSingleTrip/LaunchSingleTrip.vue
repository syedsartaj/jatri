<template>
  <div
    class="bg-white border border-[#ededed] rounded-[10px] mb-[10px] lg:mb-4"
    :ref="`bus-selector-${busIndex}`"
  >
    <div
      class="md:flex justify-between gap-x-6"
      :class="
        selectedTrip === busIndex
          ? 'border-b border-[#DBDBDB]'
          : 'border-0 border-[#DBDBDB]'
      "
    >
      <div
        class="w-full md:w-[72%] py-[20px] px-[24px] divide-y grid grid-cols-1 divide-[#DBDBDB] md:border-r md:border-[#DBDBDB]"
      >
        <div class="flex justify-between items-center pb-[15px] order-first">
          <div
            class="flex justify-start gap-x-4 items-center w-7/12 md:w-9/12 lg:w-7/12 xl:w-9/12 cursor-pointer"
          >
            <img
              :src="
                (trip.companyImages?.logo &&
                  `${imageUrl}${trip.companyImages?.logo}`) ||
                require(`@/assets/images/busDefaultImage.svg`)
              "
              class="h-[40px] w-[40px] rounded-full"
              alt=""
            />
            <div>
              <h2 class="text-sm lg:text-xl font-medium text-blackPrimary">
                {{ trip.ship }}
              </h2>
              <p class="text-xs">
                <span class="font-normal text-blackLight"
                  >Trip code: {{ trip.tripCode }}</span
                >
              </p>
            </div>
          </div>
          <div
            class="flex flex-col justify-start gap-x-4 w-5/12 md:w-3/12 lg:w-5/12 xl:w-3/12 cursor-pointer"
          >
            <p class="text-xs font-normal text-blackLight text-right">
              DEPARTURE TIME
            </p>

            <h2 class="text-base font-medium text-blackPrimary text-right">
              {{ formatTimeTo12Hour(trip.tripDateTime) }}
            </h2>
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
        <div class="flex flex-col justify-between items-start py-[16px]">
          <p class="text-xs font-normal text-blackLight">ROUTE</p>
          <h2
            class="text-xs lg:text-sm font-medium text-blackPrimary text-right mt-1"
          >
            {{ trip.route }}
          </h2>
        </div>

        <div
          class="flex justify-evenly md:gap-[16px] items-center md:order-last w-full pt-[15px] pb-[15px] md:pb-[0px]"
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
            :boardingPoints="getBoardingPoints"
            :droppingPoints="getDroppingPoints"
          />
        </div>
      </div>
      <!-- <div class="hidden lg:block h-full w-[1px] bg-[#DBDBDB] mx-6"></div> -->
      <div class="block md:hidden h-[1px] bg-[#DBDBDB] mb-[10px]"></div>

      <div
        class="w-full md:w-[28%] py-[20px] px-4 md:px-0 md:pr-4 lg:pr-6 flex justify-between items-center md:items-start md:flex-col"
      >
        <div class="hidden md:block">
          <img
            src="@/assets/images/icons/fareIcon.svg"
            alt=""
            class="w-[30px]"
          />
          <h2
            class="mt-[10px] text-base lg:text-xl font-semibold text-blackPrimary"
          >
            {{ trip.seatFare }}
            <span class="text-base">TK</span>
          </h2>
          <p class="text-xs font-normal text-blackLight mt-1">Per Ticket</p>
        </div>
        <div
          class="w-full md:hidden flex justify-start items-center gap-x-[10px] md:gap-x-3"
        >
          <img
            src="@/assets/images/icons/fareIcon.svg"
            alt=""
            class="w-[26px] md:w-[30px]"
          />
          <div>
            <h2
              v-if="trip.seatFare"
              class="text-base lg:text-xl font-semibold text-blackPrimary"
            >
              {{ trip.seatFare }}
              <span class="text-xs">TK</span>
            </h2>
            <h2
              v-else
              class="text-base lg:text-xl font-semibold text-blackPrimary"
            >
              {{ trip.seatFare[0].fare }}
              <span class="text-xs">TK</span>
            </h2>
            <p class="text-xs font-normal text-blackLight mt-1">Per Ticket</p>
          </div>
        </div>
        <div
          class="w-full flex flex-row justify-end md:justify-start items-center lg:mt-[26px] gap-x-2"
        >
          <img
            @click="handleSeatAvailableModal"
            src="@/assets/images/icons/seatClassIcon.svg"
            alt=""
            class="w-[40px] cursor-pointer"
          />
          <button
            @click="handleSeatView(selectedTrip === busIndex ? '' : busIndex)"
            class="md:w-full bg-corporate rounded-full flex justify-center gap-x-[11.76px] items-center text-white text-xs font-medium p-3"
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
              />
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- accordion start -->
    <div
      v-if="selectedTrip === busIndex"
      class="bg-white rounded-b-[10px] p-4"
      :class="
        selectedTrip === busIndex
          ? 'max-h-max transition-all ease-in-out duration-700'
          : 'h-0'
      "
    >
      <div class="grid md:grid-cols-2 gap-4">
        <div
          class="flex flex-col w-full"
          v-if="getSeatViewData?.seatPlan?.floors?.length"
        >
          <p class="text-xs lg:text-base font-medium text-blackPrimary">
            Select floor<span class="text-[#E0293B] ml-1">*</span>
          </p>
          <div
            class="cursor-pointer w-full flex flex-row h-[46px] mt-[10px] px-4 rounded-lg border border-[#EDEDED] justify-between items-center"
            @click="
              handleFloorOrClassSelection({ data: null, action: 'FLOOR' })
            "
          >
            <div class="flex flex-row">
              <div
                class="rounded-full bg-[#EDEDED] h-6 w-6 text-sm flex items-center justify-center font-bold"
              >
                <p>{{ selectedFloor?.index || 1 }}</p>
              </div>
              <p class="ml-3">{{ selectedFloor?.info?.name || "1st floor" }}</p>
            </div>
            <img
              src="@/assets/images/home/arrowDown.svg"
              alt="arrow-down"
              class="w-6 h-6"
            />
          </div>
        </div>
        <div class="flex flex-col w-full" v-if="classList.length">
          <p class="text-xs lg:text-base font-medium text-blackPrimary">
            Seat class <span class="text-[#E0293B] ml-1">*</span>
          </p>
          <div
            class="cursor-pointer w-full flex flex-row h-[46px] mt-[10px] px-4 rounded-lg border border-[#EDEDED] justify-between items-center"
            @click="
              handleFloorOrClassSelection({ data: null, action: 'CLASS' })
            "
          >
            <div class="flex flex-row items-center justify-center">
              <BedIcon v-if="selectedClass?.info?.isCabin" />
              <SofaIcon v-else-if="!selectedClass?.info?.isCabin" />
              <p class="ml-3">{{ selectedClass?.info?.name || "Select a seat class" }}</p>
            </div>
            <img
              src="@/assets/images/home/arrowDown.svg"
              alt="arrow-down"
              class="w-6 h-6"
            />
          </div>
        </div>
      </div>
      <LaunchSeatView
        :selectedClassSeatData="getSelectedClassSeatData"
        :trip="trip"
        :selectedFloor="selectedFloor"
        :selectedClass="selectedClass"
        :seatViewData="getSeatViewData"
        :setSeatViewData="(data) => this.handleSeatSelection(data)"
      />
    </div>
    <SelectClassModal
      v-if="showSelectClassModal && classList.length"
      :classList="classList"
      :selectedClass="selectedClass"
      :handleSelectClassModal="
        (data) => handleFloorOrClassSelection({ data, action: 'CLASS' })
      "
    />
    <SeatAvailabilityModal
      v-else-if="showSeatAvailableModal"
      :seatAvailabilityList="
        getSeatViewData?.seatPlan?.seatAvailabilityList || []
      "
      :handleSeatAvailableModal="handleSeatAvailableModal"
    />
    <SelectFloorModal
      v-else-if="showSelectFloorModal"
      :floorList="getSeatViewData?.seatPlan?.floors"
      :selectedFloor="selectedFloor"
      :handleSelectFloorModal="
        (data) => handleFloorOrClassSelection({ data, action: 'FLOOR' })
      "
    />

    <ChangeFloorOrClassModal
      v-if="showFloorOrClassChangeAlert"
      :change="() => handleConfirmFloorOrClassChange()"
      :continueSelection="() => (showFloorOrClassChangeAlert = false)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { timeFormat, dateTimeFormat } from "@/helpers/dateTimeFormat";
import moment from "moment";
import { dateFormat } from "../../../../../helpers/dateTimeFormat";
import { moduleType } from "../../../../../helpers/utils";
import { handleScrollBehaviour } from "../../../../../helpers/utils";
import SleeperBedIcon from "../../../../Svg/SleeperBedIcon.vue";
import SeatAvailabilityModal from "./SeatAvailabilityModal.vue";
export default {
  name: "LaunchSingleTrip",
  components: { SleeperBedIcon, SeatAvailabilityModal },
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
      showSeatAvailableModal: false,
      showSelectFloorModal: false,
      showSelectClassModal: false,
      selected: false,
      boardingPoint: null,
      droppingPoint: null,
      passengerCount: "",
      selectedSeatIds: [],
      selectedSeatLabels: [],
      selectedSeatFares: [],
      selectedSeatsObj: [],
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
      emailReg: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      requestOnGoing: false,
      selectedFloor: {},
      selectedClass: {},
      classList: [],
      showBookingDetailsModal: false,
      selectedSeatArray: [],
      showFloorOrClassChangeAlert: false,
      intermediateDataSaver: {},
    };
  },
  computed: {
    ...mapGetters("launchStore", [
      "getLoading",
      "getSeatViewData",
      "getTrips",
      "getPromoCode",
      "getIsBookingDetailsOpen",
    ]),
    getSelectedClassSeatData() {
      return this.getSeatViewData?.seatPlan.ClassWiseSeatPlan.find(
        (item) => item.classId === this.selectedClass?.info?.classId
      );
    },
    getDroppingPoints() {
      return this.trip.droppingPoints.map((item) => ({
        name: item,
      }));
    },
    getBoardingPoints() {
      return this.trip.boardingPoints.map((item) => ({ name: item }));
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
    ...mapMutations("launchStore", [
      "mobileFloatingFilter",
      "setModalBoardingPoints",
      "updateSeatStatus",
    ]),
    ...mapActions("launchStore", [
      "getPbSeatViewAction",
      "getPbPaymentPendingBlockAction",
      "getPromoCodeAction",
    ]),
    formatTimeTo12Hour(timeString) {
      const date = new Date(timeString);
      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format

      return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
    },
    handleFloorOrClassSelection({ data, action }) {
      // action - FLOOR / CLASS
      this.intermediateDataSaver = { data, action };

      if (this.selectedSeatArray.length) {
        this.showFloorOrClassChangeAlert = true;
      } else {
        if (action === "FLOOR") {
          this.handleSelectFloorModal(data);
        } else {
          this.handleSelectClassModal(data);
        }
      }
    },
    handleConfirmFloorOrClassChange() {
      this.showFloorOrClassChangeAlert = false;
      this.selectedSeatArray = [];
      if (this.intermediateDataSaver?.action === "FLOOR") {
        this.handleSelectFloorModal(this.intermediateDataSaver.data);
      } else {
        this.handleSelectClassModal(this.intermediateDataSaver.data);
      }
    },
    handleSeatSelection(data) {
      this.selectedSeatArray = data;
    },
    getSeatClasses() {
      const seatClassArray = [];
      const selectedFloorId = this.selectedFloor?.info?._id;

      if (selectedFloorId) {
        const seatClasses = this.getSeatViewData?.seatPlan?.seatClasses;
        if (seatClasses) {
          seatClasses.forEach((item) => {
            if (item.floorId === selectedFloorId) {
              seatClassArray.push(item);
            }
          });
        }
      }

      this.classList = seatClassArray.length ? seatClassArray : [];
    },
    setCurrentTab(value) {
      if (this.selectedBuxIndex !== this.busIndex) {
        this.setSelectedBuxIndex(this.busIndex);
        this.showPointPolicyModal = true;
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
    async handleSeatAvailableModal() {
      if (
        !this.showSeatAvailableModal &&
        this.getSeatViewData?.seatPlan?.tripId !== this.trip.tripId
      ) {
        if (this.selectedTrip !== this.busIndex) {
          this.handleSeatView("");
        }
        const payload = this.getPayloadForSeatView();
        await this.getPbSeatViewAction(payload);
      }
      this.showSeatAvailableModal = !this.showSeatAvailableModal;
      this.stopBackgroundScroll(this.showSeatAvailableModal);
    },
    toggleFloorModalAndScroll(showModal) {
      this.showSelectFloorModal = showModal;
      this.stopBackgroundScroll(showModal);
    },
    handleSelectFloorModal(data) {
      if (data?.payload) {
        this.selectedFloor = data.payload;
        this.selectedClass = {};
        this.toggleFloorModalAndScroll(!this.showSelectFloorModal);
        this.handleSelectClassModal();
      } else {
        this.toggleFloorModalAndScroll(!this.showSelectFloorModal);
      }
    },
    handleSelectClassModal(data) {
      if (!this.showSelectClassModal) {
        this.getSeatClasses();
      }

      if (data?.payload) {
        this.selectedClass = data.payload;
      }

      if (this.classList.length) {
        this.showSelectClassModal = !this.showSelectClassModal;
        this.stopBackgroundScroll(this.showSelectClassModal);
      } else {
        this.selectedClass = {};
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
        this.resetForm();
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
        coach: this.trip.company,
        company: this.trip.company,
        journeyDate: this.departureDateTime,
      };

      this.$gtm.push(eventData);
    },
    getPayloadForSeatView() {
      return {
        tripId: this.trip.tripId,
        shipId: this.trip.shipId,
        companyId: this.trip.companyId,
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
    handleSitSelect(seat) {
      this.selectedSeatIds.push(seat.id);
      this.selectedSeatLabels.push(seat.seatNo);
      this.selectedSeatsObj.push(seat);
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
        return foundIndex === -1 ? seat.fare : seat.fareList[foundIndex].fare;
      } else {
        return seat.fare;
      }
    },
    disCountCalculationOnSitselect(seat) {
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

    resetForm() {
      this.passengerName = "";
      this.passengerPhone = "";
      this.passengerEmail = "";
      this.selectedSeatIds = [];
      this.selectedSeatLabels = [];
      this.selectedSeatFares = [];
      this.selectedSeatsObj = [];
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
      this.totalAmount = this.selectedSeatsObj.reduce((total, item) => {
        return total + this.getTheCorrectSeatFare(item);
      }, 0);
    },
    updateTotalDiscountAndFareAmount() {
      let tempTotalDiscountAmount = 0;
      let tempTotalDiscountFare = 0;

      this.selectedSeatsObj.forEach((seat) => {
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
    setSelectedFloor(value) {
      const floors = value?.seatPlan?.floors;
      this.selectedFloor = floors?.length
        ? { index: 1, info: floors[0] }
        : null;
    },

    setClassList(value) {
      const selectedFloorId = this.selectedFloor?.info?._id;
      const seatClasses = value?.seatPlan?.seatClasses || [];

      const selectedFloorSeatClassAvailability = seatClasses.filter(
        (item) => item.floorId === selectedFloorId
      );

      this.classList =
        (selectedFloorId &&
          selectedFloorSeatClassAvailability.length &&
          selectedFloorSeatClassAvailability) ||
        seatClasses;
    },

    setSelectedClass() {
      this.selectedClass = this.classList.length
        ? { index: 1, info: this.classList[0] }
        : null;
    },
  },
  watch: {
    getSeatViewData(value) {
      this.setSelectedFloor(value);
      this.setClassList(value);
      this.setSelectedClass();
    },
    selectedTrip(value) {
      if (
        value >= 0 &&
        value != this.busIndex &&
        this.selectedSeatLabels?.length
      ) {
        this.handleSeatLock(this.selectedSeatLabels.join(","), false);
        this.resetForm();
      }
    },
    getTrips: {
      handler(value) {
        this.resetForm();
      },
      deep: true,
    },
    selectedSeatsObj(value) {
      this.updateTheCustomizedSitList(value);
    },
    boardingPoint(value) {
      this.updateTheCustomizedSitList(this.selectedSeatsObj);
      this.updateTotalAmount();
      this.updateTotalDiscountAndFareAmount();
      this.promoCalculationOnSitSelect();
    },
    droppingPoint(value) {
      this.updateTheCustomizedSitList(this.selectedSeatsObj);
      this.updateTotalAmount();
      this.updateTotalDiscountAndFareAmount();
      this.promoCalculationOnSitSelect();
    },
  },
};
</script>

<style></style>
