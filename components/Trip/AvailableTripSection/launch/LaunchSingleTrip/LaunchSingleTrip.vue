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
        class="w-full lg:w-[72%] py-[20px] px-[24px] divide-y grid grid-cols-1 divide-[#DBDBDB] lg:border-r lg:border-[#DBDBDB]"
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
              class="h-[40px] w-[40px]"
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
              {{
                new Date(trip.tripDateTime).toLocaleString("en-Us", {
                  timeStyle: "short",
                })
              }}
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
        <div
          class="flex flex-col justify-between items-start py-[16px] order-last lg:order-1"
        >
          <p class="text-xs font-normal text-blackLight">ROUTE</p>
          <h2
            class="text-xs lg:text-sm font-medium text-blackPrimary text-right mt-1"
          >
            {{ trip.route }}
          </h2>
        </div>

        <div
          class="flex justify-evenly lg:gap-[16px] items-center lg:order-last w-full pt-[15px] pb-[15px] lg:pb-[0px]"
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
      <div class="block lg:hidden h-[1px] bg-[#DBDBDB] mb-[10px]"></div>

      <div
        class="w-full lg:w-[28%] py-[20px] px-4 lg:px-0 lg:pr-6 flex justify-between items-center lg:items-start lg:flex-col"
      >
        <div class="hidden lg:block">
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
        <div class="w-full lg:hidden flex justify-start items-center gap-x-3">
          <img
            src="@/assets/images/icons/fareIcon.svg"
            alt=""
            class="w-[30px]"
          />
          <div>
            <h2
              v-if="trip.seatFare"
              class="text-xl font-semibold text-blackPrimary"
            >
              {{ trip.seatFare }}
              <span class="text-xs">TK</span>
            </h2>
            <h2 v-else class="text-xl font-semibold text-blackPrimary">
              {{ trip.seatFare[0].fare }}
              <span class="text-xs">TK</span>
            </h2>
            <p class="text-xs font-normal text-blackLight mt-1">Per Ticket</p>
          </div>
        </div>
        <div
          class="w-full flex flex-row justify-end items-center lg:mt-[26px] gap-x-2"
        >
          <img
            @click="handleSeatAvailableModal"
            src="@/assets/images/icons/seatClassIcon.svg"
            alt=""
            class="w-[40px] cursor-pointer"
          />
          <button
            @click="handleSeatView(selectedTrip === busIndex ? '' : busIndex)"
            class="lg:w-full bg-corporate rounded-full flex justify-center gap-x-[11.76px] items-center text-white text-xs font-medium p-3"
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
      <div class="grid lg:grid-cols-2 gap-4">
        <div
          class="flex flex-col w-full"
          v-if="getSeatViewData?.seatPlan?.floors?.length"
        >
          <p class="text-xs lg:text-base font-medium text-blackPrimary">
            Select floor<span class="text-[#E0293B] ml-1">*</span>
          </p>
          <div
            class="cursor-pointer w-full flex flex-row h-[46px] mt-[10px] px-4 rounded-lg border border-[#EDEDED] justify-between items-center"
            @click="handleSelectFloorModal"
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
        <div class="flex flex-col w-full">
          <p class="text-xs lg:text-base font-medium text-blackPrimary">
            Seat class <span class="text-[#E0293B] ml-1">*</span>
          </p>
          <div
            class="cursor-pointer w-full flex flex-row h-[46px] mt-[10px] px-4 rounded-lg border border-[#EDEDED] justify-between items-center"
            @click="handleSelectClassModal"
          >
            <div class="flex flex-row items-center justify-center">
              <BedIcon v-if="selectedClass?.info?.isCabin" />
              <SofaIcon v-else-if="!selectedClass?.info?.isCabin" />
              <p class="ml-3">{{ selectedClass?.info?.name }}</p>
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
      />
    </div>
    <BookingDetails
      v-if="getIsBookingDetailsOpen"
      :handleBookingDetailModal="handleBookingDetailModal"
    />
    <SelectClassModal
      v-if="showSelectClassModal"
      :classList="classList"
      :selectedClass="selectedClass"
      :handleSelectClassModal="handleSelectClassModal"
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
      :handleSelectFloorModal="handleSelectFloorModal"
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
        (item) => item.classId === this.selectedClass.info.classId
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
      "seatLockAction",
    ]),
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

      this.classList = seatClassArray.length
        ? seatClassArray
        : this.getSeatViewData?.seatPlan?.seatClasses;
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
    handleBookingDetailModal() {
      this.showBookingDetailsModal = !this.showBookingDetailsModal;
      this.stopBackgroundScroll(this.showBookingDetailsModal);
    },
    handlePointPolicyModal() {
      this.showPointPolicyModal = !this.showPointPolicyModal;
      this.stopBackgroundScroll(this.showPointPolicyModal);
    },
    async handleSeatAvailableModal() {
      if (!this.showSeatAvailableModal) {
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
      this.showSelectClassModal = !this.showSelectClassModal;
      this.stopBackgroundScroll(this.showSelectClassModal);
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
          this.disCountCalculationOnSitselect(seat);
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
      if (
        this.passengerEmail &&
        !this.emailReg.test(String(this.passengerEmail).toLowerCase())
      ) {
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
          oid: this.getSeatViewData?.seatPlan?.oid || null,
          id: this.trip.id,
          seatClass: this.trip?.seatClass[0]?.name || null,
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
          passengerMobile: this.passengerPhone,
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
              seatPlan: this.trip.seatPlan,
              seatFare: this.trip.seatFare,
              companyId: this.trip.companyId,
              coachType: this.trip.coach.type,
              tripDateTime: this.trip.tripDateTime,
            };
            this.resetForm();
            this.getPbSeatViewAction(seatViewPayload);
            this.$nuxt.$loading?.finish();
          } else {
            if (res.statusCode === 200) {
              this.$router.push({
                path: "/bus/payment",
                query: {
                  tnxId:
                    this.getPaymentPendingBlockData.paymentInfo.transactionId,
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
      this.classList = selectedFloorId
        ? seatClasses.filter((item) => item.floorId === selectedFloorId)
        : seatClasses;
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
