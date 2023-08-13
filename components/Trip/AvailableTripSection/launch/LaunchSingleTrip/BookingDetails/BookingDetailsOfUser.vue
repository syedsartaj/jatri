<template>
  <div
    class="w-[640px] wrapper flex flex-col border-[1px] border-[#DBDBDB] rounded-lg"
  >
    <div
      class="w-full px-4 py-3 border-b-[1px] border-[#DBDBDB] lg:text-base font-medium"
    >
      Booking details
    </div>
    <div class="w-full px-4">
      <div class="w-full flex flex-row justify-evenly gap-x-4">
        <div class="w-full mt-4">
          <SelectOption
            v-model="boardingPoint"
            :default-option="'Select Your Boarding Location'"
            :label="'Boarding Point'"
            :options="boardingPoints"
          />
        </div>
        <div class="w-full mt-4">
          <h2 class="text-xs lg:text-base font-medium text-blackPrimary">
            Passenger Name <span class="text-[#E0293B]">*</span>
          </h2>
          <input
            class="bg-[#f7f7f7] px-4 py-[13px] mt-[10px] rounded w-full h-[48px] focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary"
            type="text"
            placeholder="Enter your name"
            v-model="passengerName"
          />
        </div>
      </div>

      <div class="w-full flex flex-row justify-evenly gap-x-4">
        <div class="mt-4 w-full">
          <h2 class="text-xs lg:text-base font-medium text-blackPrimary">
            Departure Time
          </h2>

          <div
            class="bg-[#f7f7f7] h-[48px] mt-[10px] px-4 flex items-center justify-start"
          >
            <h2 class="text-sm lg:text-base font-medium text-blackPrimary">
              06:45 PM
            </h2>
          </div>
        </div>
        <div class="mt-4 w-full">
          <h2 class="text-xs lg:text-base font-medium text-blackPrimary">
            Phone <span class="text-[#E0293B]">*</span>
          </h2>
          <div class="flex h-[48px] mt-[10px] bg-[#F7F7F7] rounded pl-[16px]">
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
      </div>

      <div class="w-full flex flex-row justify-evenly gap-x-4 pb-4">
        <div class="w-full mt-4">
          <SelectOption
            v-model="droppingPoint"
            :default-option="'Select Your Dropping Location'"
            :label="'Dropping Point'"
            :options="droppingPoints"
            :isOptional="true"
          />
        </div>
        <div class="mt-4 w-full">
          <h2
            class="text-xs lg:text-base font-medium text-blackPrimary flex justify-between"
          >
            <span>Email </span>
            <span class="text-[#8D8D8F]">Optional</span>
          </h2>
          <input
            class="bg-[#f7f7f7] h-[48px] px-4 py-[13px] mt-[10px] rounded w-full focus:outline-0 text-xs placeholder:text-blackSecondery text-blackPrimary"
            type="email"
            placeholder="Enter your email"
            v-model="passengerEmail"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      boardingPoint: "",
      droppingPoint: "",
      passengerName: "",
      passengerPhone: "",
      passengerEmail: "",
    };
  },
  methods: {
    
  },
  computed: {
    ...mapGetters("launchStore", ["getSeatViewData"]),
    boardingPoints() {
      return this.getSeatViewData.seatPlan.boardingPoints.map(
        (item) => item.name
      );
    },
    droppingPoints() {
      return this.getSeatViewData.seatPlan.droppingPoints.map(
        (item) => item.name
      );
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: max-content;
}
</style>
