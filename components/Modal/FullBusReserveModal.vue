<template>
  <div class="relative z-[999999999]">
    <div
      class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 p-[11px] lg:p-0">
      <div
        class="
          flex
          min-h-full
          items-end
          justify-center
          lg:p-4
          text-center
          lg:items-center lg:px-[100px]
        "
      >
        <div
          class="
            relative
            transform
            overflow-hidden
            rounded-lg
            bg-white
            text-left
            shadow-xl
            transition-all
            w-full
            lg:h-auto
            h-[96vh]
          "
        >
          <div class="bg-white p-4 lg:p-6 w-full">
            <div class="flex justify-between">
              <h2 class="text-sm lg:text-xl font-medium text-blackPrimary">
                Full bus reserve
              </h2>

              <button @click="setBusReserveModalOpenStatus" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>

            <div class="bg-white font-normal pt-[10px]">
              <p class="text-base lg:text-xl text-[#4D4D4F]">
                Now you can reserve a full bus according to your need. Fill the
                form and submit. We will check and reserve a bus for you.
              </p>
              <div
                class="
                  lg:border lg:border-[#DBDBDB]
                  rounded
                  h-[759px]
                  overflow-y-auto
                  lg:h-auto
                  mt-6
                  lg:p-6
                  p-4
                "
              >
                <!-- First Row -->
                <div
                  class="flex justify-evenly gap-6 mb-6 flex-col md:flex-row"
                >
                  <!-- First Item -->
                  <div class="flex justify-evenly gap-4 lg:gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Journey date" />
                      <SelectDate
                        v-model="journeyDate"
                        :label="'Select a Date'"
                        :default-option="'Select Journey Date'"
                        :allow-filter="true"
                        :errorOccured="errorOccured && !journeyDate"
                      />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Return date" />
                      <SelectDate
                        v-model="returnDate"
                        :label="'Select a Date'"
                        :default-option="'Select Journey Date'"
                        :allow-filter="true"
                        :errorOccured="errorOccured && !returnDate"
                      />
                    </div>
                  </div>
                  <div class="flex justify-evenly gap-4 lg:gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Boarding place" />
                      <EnterInput
                        placeholder="Enter boarding place"
                        type="text"
                        v-model="boardingPlace"
                        :errorOccured="errorOccured && !boardingPlace"
                        @update:modelValue="
                          (newValue) => (boardingPlace = newValue)
                        "
                      />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Dropping place" />
                      <EnterInput
                        placeholder="Enter dropping place"
                        type="text"
                        v-model="droppingPlace"
                        :errorOccured="errorOccured && !droppingPlace"
                        @update:modelValue="
                          (newValue) => (droppingPlace = newValue)
                        "
                      />
                    </div>
                  </div>
                </div>

                <!-- Second Row -->
                <div
                  class="flex justify-evenly gap-6 mb-6 flex-col md:flex-row"
                >
                  <!-- First Item -->
                  <div
                    class="
                      flex
                      justify-evenly
                      gap-4
                      lg:gap-6
                      w-full
                      flex-col
                      md:flex-row
                    "
                  >
                    <div class="w-full">
                      <CommonInputLabel label="No. of bus needed" />
                      <EnterInput
                        placeholder="Enter number Of Buses"
                        type="number"
                        v-model="numberOfBuses"
                        :errorOccured="errorOccured && !numberOfBuses"
                        @update:modelValue="
                          (newValue) => (numberOfBuses = newValue)
                        "
                      />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Bus type" />
                      <ChooseOption
                        label="Select bus type"
                        v-model="busType"
                        :options="busTypes"
                        :selectedValue="busType"
                        :errorOccured="errorOccured && !busType"
                        @update:modelValue="(newValue) => (busType = newValue)"
                      />
                    </div>
                  </div>
                  <!-- SEcond Item -->
                  <div
                    class="
                      flex
                      justify-evenly
                      gap-4
                      lg:gap-6
                      w-full
                      flex-col
                      md:flex-row
                    "
                  >
                    <div class="w-full">
                      <CommonInputLabel label="No. of seats" />
                      <EnterInput
                        placeholder="Enter budget amount"
                        type="number"
                        v-model="numberOfSeats"
                        :errorOccured="errorOccured && !numberOfSeats"
                        @update:modelValue="
                          (newValue) => (numberOfSeats = newValue)
                        "
                      />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Preferred bus (if any)" />
                      <EnterInput
                        placeholder="Enter Preferred bus operator"
                        type="text"
                        v-model="prefferredBus"
                        :errorOccured="errorOccured && !prefferredBus"
                        @update:modelValue="
                          (newValue) => (prefferredBus = newValue)
                        "
                      />
                    </div>
                  </div>
                </div>

                <!-- Third Row -->
                <div
                  class="
                    grid grid-flow-row-dense grid-cols-1 grid-rows-2
                    lg:grid-cols-4 lg:grid-rows-1
                    mb-0
                    lg:mb-6
                    gap-x-6
                  "
                >
                  <div class="w-full col-span-1 mb-6 lg:mb-0">
                    <CommonInputLabel label="Approximate budget" />
                    <EnterInput
                      placeholder="Enter budget amount"
                      type="number"
                      v-model="approximateBudget"
                      :errorOccured="errorOccured && !approximateBudget"
                      @update:modelValue="
                        (newValue) => (approximateBudget = newValue)
                      "
                    />
                  </div>
                  <div class="w-full lg:col-span-3 col-span-1">
                    <CommonInputLabel label="Comment (Optional)" />
                    <EnterInput
                      placeholder="Enter your comment"
                      type="text"
                      v-model="comment"
                      @update:modelValue="(newValue) => (comment = newValue)"
                    />
                  </div>
                </div>

                <!-- Fourth Row -->
                <div
                  class="flex justify-evenly gap-6 mb-6 flex-col md:flex-row"
                >
                  <!-- First Item -->
                  <div
                    class="
                      flex
                      justify-evenly
                      gap-4
                      lg:gap-6
                      w-full
                      flex-col
                      md:flex-row
                    "
                  >
                    <div class="w-full">
                      <CommonInputLabel label="Contact Person Name" />
                      <EnterInput
                        placeholder="Enter name"
                        type="text"
                        v-model="contactName"
                        :errorOccured="errorOccured && !contactName"
                        @update:modelValue="
                          (newValue) => (contactName = newValue)
                        "
                      />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Mobile No" />
                      <EnterInput
                        placeholder="Enter mobile number"
                        type="number"
                        v-model="contactPhone"
                        :errorOccured="errorOccured && !contactPhone"
                        @update:modelValue="
                          (newValue) => (contactPhone = newValue)
                        "
                      />
                    </div>
                  </div>
                  <!-- SEcond Item -->
                  <div
                    class="
                      flex
                      justify-evenly
                      gap-4
                      lg:gap-6
                      w-full
                      flex-col
                      md:flex-row
                    "
                  >
                    <div class="w-full">
                      <CommonInputLabel label="Email (Optional)" />
                      <EnterInput
                        placeholder="Enter email"
                        type="email"
                        v-model="contactEmail"
                        @update:modelValue="
                          (newValue) => (contactEmail = newValue)
                        "
                      />
                    </div>
                    <div class="w-full"></div>
                  </div>
                </div>
                <div class="flex justify-center w-full mt-[10px] mb-20 lg:mb-0">
                  <button
                    @click="handleSumbit"
                    class="
                      flext
                      items-center
                      justify-center
                      bg-corporate
                      text-white text-sm
                      font-medium
                      h-[46px]
                      w-40
                      rounded-full
                    "
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      errorOccured: false,
      journeyDate: null,
      returnDate: null,
      busType: "all",
      boardingPlace: null,
      droppingPlace: null,
      numberOfSeats: null,
      numberOfBuses: null,
      prefferredBus: null,
      comment: null,
      contactName: null,
      contactPhone: null,
      contactEmail: null,
      approximateBudget: null,
      busTypes: ["ac", "non-ac", "all"],
    };
  },
  computed: {
    ...mapGetters("guarantedseat", ["getBusReserveModalOpenStatus"]),
  },
  methods: {
    ...mapActions("guarantedseat", ["fullBusReservationAction"]),
    ...mapMutations("guarantedseat", ["setBusReserveModalOpenStatus"]),
    handleSumbit() {
      const {
        journeyDate,
        returnDate,
        busType,
        boardingPlace,
        droppingPlace,
        numberOfSeats,
        numberOfBuses,
        prefferredBus,
        comment,
        contactName,
        contactPhone,
        contactEmail,
        approximateBudget,
      } = this;

      if (
        journeyDate &&
        returnDate &&
        busType &&
        boardingPlace &&
        droppingPlace &&
        numberOfSeats &&
        numberOfBuses &&
        prefferredBus &&
        contactName &&
        contactPhone &&
        approximateBudget
      ) {
        const payload = {
          journeyDate,
          returnDate,
          busType,
          boardingPlace,
          droppingPlace,
          numberOfSeats: parseInt(numberOfSeats),
          numberOfBuses: parseInt(numberOfBuses),
          prefferredBus,
          comment,
          contactName,
          contactPhone: contactPhone,
          contactEmail,
          approximateBudget: parseInt(approximateBudget),
        };
        this.fullBusReservationAction(payload);
      } else {
        this.errorOccured = true;
        this.$toast.error("Fillup all the required field", {
          position: "bottom-right",
          duration: 5000,
        });
      }
    },
  },
};
</script>
