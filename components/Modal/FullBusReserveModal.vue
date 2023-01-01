<template>
  <div class="relative z-[999999999]">
    <div
      class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10">
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
            lg:rounded-lg
            bg-white
            text-left
            shadow-xl
            transition-all
            w-full
          "
        >
          <div class="bg-white p-4 lg:p-6 w-full">
            <div class="flex justify-between">
              <h2 class="text-sm lg:text-xl font-medium text-blackPrimary">
                Full bus reserve
              </h2>

              <button @click="() => close()" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>

            <div class="bg-white font-normal pt-[10px]">
              <p class="text-xl text-[#4D4D4F]">
                Now you can reserve a full bus according to your need. Fill the
                form and submit. We will check and reserve a bus for you.
              </p>
              <div
                class="
                  border border-[#DBDBDB]
                  rounded
                  h-[759px]
                  overflow-y-auto
                  lg:h-auto
                  mt-6
                  p-6
                "
              >
                <!-- First Row -->
                <div
                  class="flex justify-evenly gap-6 mb-6 flex-col lg:flex-row"
                >
                  <!-- First Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Journey date" />
                      <SelectDate
                        v-model="journeyDate"
                        :label="'Select a Date'"
                        :default-option="'Select Journey Date'"
                        :allow-filter="true"
                        :errorOccured="errorOccured"
                      />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Return date" />
                      <SelectDate
                        v-model="returnDate"
                        :label="'Select a Date'"
                        :default-option="'Select Journey Date'"
                        :allow-filter="true"
                        :errorOccured="errorOccured"
                      />
                    </div>
                  </div>
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Boarding place" />
                      <EnterInput
                        placeholder="Enter boarding place"
                        type="text"
                        v-model="boardingPlace"
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
                        @update:modelValue="
                          (newValue) => (droppingPlace = newValue)
                        "
                      />
                    </div>
                  </div>
                </div>

                <!-- Second Row -->
                <div
                  class="flex justify-evenly gap-6 mb-6 flex-col lg:flex-row"
                >
                  <!-- First Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="No. of bus needed" />
                      <EnterInput
                        placeholder="Enter number Of Buses"
                        type="number"
                        v-model="numberOfBuses"
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
                        @update:modelValue="(newValue) => (busType = newValue)"
                      />
                    </div>
                  </div>
                  <!-- SEcond Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="No. of seats" />
                      <EnterInput
                        placeholder="Enter budget amount"
                        type="number"
                        v-model="numberOfSeats"
                        @update:modelValue="
                          (newValue) => (numberOfSeats = newValue)
                        "
                      />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Preferred bus (if any)" />
                      <ChooseOption label="Select a bus operator" />
                    </div>
                  </div>
                </div>

                <!-- Third Row -->
                <div
                  class="flex justify-evenly gap-6 flex-col lg:flex-row mb-6"
                >
                  <!-- First Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Approximate budget" />
                      <EnterInput
                        placeholder="Enter budget amount"
                        type="number"
                        v-model="approximateBudget"
                        @update:modelValue="
                          (newValue) => (approximateBudget = newValue)
                        "
                      />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Comment" />
                      <EnterInput
                        placeholder="Enter your comment"
                        type="text"
                        v-model="comment"
                        @update:modelValue="(newValue) => (comment = newValue)"
                      />
                    </div>
                  </div>
                </div>

                <!-- Fourth Row -->
                <div
                  class="flex justify-evenly gap-6 mb-6 flex-col lg:flex-row"
                >
                  <!-- First Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Contact Person Name" />
                      <EnterInput
                        placeholder="Enter name"
                        type="text"
                        v-model="contactName"
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
                        @update:modelValue="
                          (newValue) => (contactPhone = newValue)
                        "
                      />
                    </div>
                  </div>
                  <!-- SEcond Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Email" />
                      <EnterInput
                        placeholder="Enter email"
                        type="email"
                        v-model="contactEmail"
                        @update:modelValue="
                          (newValue) => (contactEmail = newValue)
                        "
                      />
                    </div>
                  </div>
                </div>

                <div class="flex justify-center w-full mt-[10px]">
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
  props: ["close", "selectedTab", "handlePointPolicyModal", "setCurrentTab"],
  data() {
    return {
      journeyDate: null,
      returnDate: null,
      busType: null,
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
      busTypes: ["ac", "non-ac"],
    };
  },
  computed: {},
  methods: {
    ...mapActions("guarantedseat", ["fullBusReservationAction"]),
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

      const payload = {
        journeyDate,
        returnDate,
        busType,
        boardingPlace,
        droppingPlace,
        numberOfSeats: parseInt(numberOfSeats),
        numberOfBuses: parseInt(numberOfBuses),
        prefferredBus: "Dhaka",
        comment,
        contactName,
        contactPhone: contactPhone,
        contactEmail,
        approximateBudget: parseInt(approximateBudget),
      };
      this.fullBusReservationAction(payload);
    },
  },
};
</script>
