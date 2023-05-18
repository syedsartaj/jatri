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
              class="h-[40px] w[40px]"
              alt=""
            />
            <div>
              <h2 class="text-sm lg:text-xl font-medium text-blackPrimary">
                {{ trip.company }}
              </h2>
              <p class="text-xs">
                <span class="font-normal text-blackLight">{{
                  `${trip.coach.name}${
                    (trip.coach.type && " | " + `${trip.coach.type}`) || ""
                  }`
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
            :boardingPoints="getModalBoardingPoints"
            :droppingPoints="getGsDroppingPoints"
          />
        </div>
      </div>
      <!-- <div class="hidden lg:block h-full w-[1px] bg-[#DBDBDB] mx-6"></div> -->
      <div class="block lg:hidden h-[1px] bg-[#DBDBDB] mb-[10px]"></div>

      <div
        class="w-full lg:w-1/5 py-4 lg:py-5 px-4 lg:px-0 lg:pr-6 flex justify-between items-center lg:items-start lg:flex-col"
      >
        <div class="hidden lg:block">
          <img
            src="@/assets/images/icons/fareIcon.svg"
            alt=""
            class="w-[30px]"
          />
          <h2
            v-if="trip.seatFare[0].discountFare"
            class="mt-[10px] text-base lg:text-xl font-semibold text-blackPrimary"
          >
            <span class="line-through text-corporate">{{
              trip.seatFare[0].fare
            }}</span>
            {{ trip.seatFare[0].discountFare }}
            <span class="text-base">TK</span>
          </h2>
          <h2
            v-else
            class="mt-[10px] text-base lg:text-xl font-semibold text-blackPrimary"
          >
            {{ trip.seatFare[0].fare }}
            <span class="text-base">TK</span>
          </h2>
          <p class="text-xs font-normal text-blackLight mt-1">Per Ticket</p>
        </div>
        <div class="lg:hidden flex justify-start items-center gap-x-3">
          <img
            src="@/assets/images/icons/fareIcon.svg"
            alt=""
            class="w-[30px]"
          />
          <div>
            <h2
              v-if="trip.seatFare[0].discountFare"
              class="text-xl font-semibold text-blackPrimary"
            >
              <span class="line-through text-corporate">{{
                trip.seatFare[0].fare
              }}</span>
              {{ trip.seatFare[0].discountFare }}
              <span class="text-xs">TK</span>
            </h2>
            <h2 v-else class="text-xl font-semibold text-blackPrimary">
              {{ trip.seatFare[0].fare }}
              <span class="text-xs">TK</span>
            </h2>
            <p class="text-xs font-normal text-blackLight mt-1">Per Ticket</p>
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

            <div v-if="getGsSeatArray?.length">
              <SeatView
                :showDriver="true"
                :seatArray="getGsSeatArray"
                :addSeatHandler="addSeatHandler"
                :selectedSeatIds="selectedSeatIds"
              />
            </div>

            <div v-if="getGsLowerDeckSeatArray?.length">
              <DeckName name="LOWER DECK" />
              <SeatView
                :showDriver="true"
                :seatArray="getGsLowerDeckSeatArray"
                :addSeatHandler="addSeatHandler"
                :selectedSeatIds="selectedSeatIds"
              />
            </div>
            <div v-if="getGsUpperDeckSeatArray?.length">
              <DeckName name="UPPER DECK" />
              <SeatView
                :showDriver="false"
                :seatArray="getGsUpperDeckSeatArray"
                :addSeatHandler="addSeatHandler"
                :selectedSeatIds="selectedSeatIds"
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
              :label="'Boarding Point'"
              :options="getGsSeatBoardingPointArray"
              propertyName="name"
            />
            <!-- :options="getGsSeatBoardingPointArray" -->
          </div>
          <div class="mt-4" v-if="getGsSeatDroppingPointArray.length">
            <SelectOption
              v-model="droppingPoint"
              :default-option="'Select Your Dropping Location'"
              :label="'Dropping Point'"
              :options="getGsSeatDroppingPointArray"
              :isOptional="true"
              propertyName="name"
            />
            <!-- :options="getGsSeatDroppingPointArray" -->
          </div>
          <div class="mt-4">
            <h2 class="text-xs lg:text-base font-medium text-blackPrimary">
              Departure Time
            </h2>
            <div class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded">
              <p class="text-blackPrimary text-sm font-medium">
                {{ departureDateTime }}
              </p>
            </div>
          </div>

          <!-- Seat Fare Table -->
          <div
            v-if="selectedSeatsObj.length"
            class="mt-4 bg-[#f7f7f7] rounded border border-[#EDEDED]"
          >
            <div
              class="flex justify-between px-[14px] pt-[10px] pb-[6px] border-b"
            >
              <p class="text-sm lg:text-xs font-semibold text-blackPrimary">
                Seat
              </p>
              <p class="text-sm lg:text-xs font-semibold text-blackPrimary">
                Class
              </p>
              <p class="text-sm lg:text-xs font-semibold text-blackPrimary">
                Fare
              </p>
            </div>
            <div class="px-[14px] py-3">
              <div
                v-for="seat in selectedCustomizeSeatList"
                :key="seat.id"
                class="flex justify-between py-2 border-b last:border-b-0 border-dashed"
              >
                <p class="text-xs lg:text-sm font-medium text-blackPrimary">
                  {{ seat.seatNo }}
                </p>
                <p class="text-xs lg:text-sm font-medium text-blackPrimary">
                  {{ seat.class }}
                </p>
                <p class="text-xs lg:text-sm font-medium text-blackPrimary">
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
                Discount Amount
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
                Promo Amount
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
                Total Fare
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
              Passenger Name <span class="text-[#E0293B]">*</span>
            </h2>
            <input
              class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary"
              type="text"
              placeholder="Enter your name"
              v-model="passengerName"
            />
          </div>

          <div class="mt-4">
            <h2 class="text-xs lg:text-base font-medium text-blackPrimary">
              Phone No <span class="text-[#E0293B]">*</span>
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
                class="bg-[#f7f7f7] px-4 py-[13px] mt-[0px] rounded w-full focus:outline-0 text-xs focus:appearance-none placeholder:text-blackSecondery text-blackPrimary"
                type="number"
                minlength="11"
                maxlength="11"
                required=""
                placeholder="Enter your phone"
                v-model="passengerPhone"
              />
            </div>
          </div>

          <div class="mt-4">
            <h2
              class="text-xs lg:text-base font-medium text-blackPrimary flex justify-between"
            >
              <span>Email ID </span>
              <span class="text-[#8D8D8F]">Optional</span>
            </h2>
            <input
              class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary"
              type="email"
              placeholder="Enter your email id"
              v-model="passengerEmail"
            />
          </div>

          <LoaderButton
            :class="
              (this.passengerEmail &&
                !this.emailReg.test(
                  String(this.passengerEmail).toLowerCase()
                )) ||
              !selectedSeatIds.length ||
              !boardingPoint ||
              !passengerName ||
              !passengerPhone ||
              String(passengerPhone).length != 11
                ? 'bg-gray-500 user cursor-not-allowed'
                : 'bg-corporate hover:bg-[#D93E2D]'
            "
            :disabled="
              (this.passengerEmail &&
                !this.emailReg.test(
                  String(this.passengerEmail).toLowerCase()
                )) ||
              getGsLoading ||
              !boardingPoint ||
              !passengerName ||
              !passengerPhone ||
              String(passengerPhone).length != 11
            "
            :loading="getGsLoading"
            class="bg-corporate rounded-full py-[13px] w-full text-white text-sm font-medium mt-6"
            @onClick="paymentPendingBlockHandler"
          >
            Next
          </LoaderButton>

          <div
            class="text-center mt-[20px] flex justify-center items-center gap-x-2 divide-x-2"
          >
            <nuxt-link
              to="/policies#terms-and-conditions"
              class="w-full underline text-blackPrimary text-sm font-normal"
              >Terms and Conditions</nuxt-link
            >
            <nuxt-link
              to="/policies#return-and-refund-policy"
              class="w-full underline text-blackPrimary text-sm font-normal"
              >Cancellation Policy</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { timeFormat, dateTimeFormat } from "@/helpers/dateTimeFormat";
import moment from "moment";
import { dateFormat } from "../../helpers/dateTimeFormat";
import { moduleType } from "../../helpers/utils";
import { handleScrollBehaviour } from "../../helpers/utils";
import SleeperBedIcon from "../Svg/SleeperBedIcon.vue";
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
      showToolTip: false,
      emailReg: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    };
  },
  computed: {
    ...mapGetters("guarantedseat", [
      "getGsSeatArray",
      "getGsUpperDeckSeatArray",
      "getGsLowerDeckSeatArray",
      "getGsSeatBoardingPointArray",
      "getGsSeatDroppingPointArray",
      "getGsPaymentPendingBlockData",
      "getGsLoading",
      "getGsSeatViewData",
      "getGsTrips",
      "getPromoCode",
      "getModalBoardingPoints",
      "getGsDroppingPoints",
    ]),
    departureDateTime() {
      if (this.boardingPoint.scheduleTime === "") {
        return dateTimeFormat(
          new Date(
            `${this.trip.departureDate} ${this.trip.departureTime}`
          ).toLocaleString("en-Us"),
          6,
          "lll"
        );
      }
      return dateTimeFormat(this.boardingPoint.scheduleTime, 6, "lll");
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
    ...mapMutations("guarantedseat", [
      "mobileFloatingFilter",
      "setModalBoardingPoints",
      "setGsDroppingPoints",
    ]),
    ...mapActions("guarantedseat", [
      "getPbSeatViewAction",
      "getBoardingPointForBus",
      "getPbPaymentPendingBlockAction",
      "getPromoCodeAction",
      "seatLockAction",
    ]),
    setCurrentTab(value) {
      if (this.selectedBuxIndex !== this.busIndex) {
        this.setGsDroppingPoints([]);
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
        this.handleSeatLock(this.selectedSeatLabels.join(","), false);
        this.$emit("selectedTripId", null);
        this.resetForm();
        return;
      }
      this.$nextTick(async () => {
        this.$nuxt.$loading?.start();
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
        seatPlan: this.trip.seatPlan,
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
        this.getGsSeatViewData.seatPlan.maxSeatLimit - 1
      );
    },
    showSeatLimitCrossError() {
      this.$toast.error(
        `You can select ${this.getGsSeatViewData.seatPlan.maxSeatLimit} seats at a time!`,
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
    addSeatHandler(seat) {
      if (this.isSitAlreadySelected(seat)) {
        // Action for sit unselect
        this.handleSeatLock([seat.seatNo].join(","), false);
        this.handleSitUnSelect(seat);
        this.disCountCalculationOnSitUnselect(seat);
        this.promoCalculationOnUnSelect();
      } else {
        // Action for sit selection
        this.handleSeatLock([seat.seatNo].join(","), true);
        if (this.isSitLimitCrossed()) {
          this.showSeatLimitCrossError();
          return;
        }

        this.handleSitSelect(seat);
        this.disCountCalculationOnSitselect(seat);
        this.promoCalculationOnSitSelect();
      }
    },
    handleSeatLock(seatLbls, action) {
      const payload = {
        moduleType: this.trip.moduleType,
        fromCity: this.trip.fromCity,
        toCity: this.trip.toCity,
        departureDate: this.trip.departureDate,
        locked: action,
        uid: this.trip.uid,
        seatLbls: seatLbls,
      };
      this.seatLockAction(payload);
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
        const payload = {
          moduleType: this.trip.moduleType,
          busServiceType: this.trip.busServiceType,
          transportType: this.trip.transportType,
          transportId: String(this.trip.transportId),
          uid: this.trip.uid,
          oid: this.getGsSeatViewData?.seatPlan?.oid || null,
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
                path: "/guaranteed-seat/payment",
                query: {
                  tnxId:
                    this.getGsPaymentPendingBlockData.paymentInfo.transactionId,
                },
              });
            }
          }
          this.$nuxt.$loading?.finish();
        });
      });
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
  },
  watch: {
    getGsSeatBoardingPointArray(value) {
      const findId = value.findIndex((item) => item?.defaultBoarding === true);
      this.boardingPoint = findId === -1 ? value[0] : value[findId];
    },
    getGsSeatDroppingPointArray(value) {
      let findId = value.findIndex(
        (item) => item?.defaultDroppingPoint === true
      );
      this.droppingPoint = findId === -1 ? { name: "", id: "" } : value[findId];
    },
    getGsTrips: {
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
