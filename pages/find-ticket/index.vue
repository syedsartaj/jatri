<template>
  <div class="bg-[#f7f7f7]">
    <div class="w-full lg:w-[816px] mx-auto py-[30px]">
      <div class="w-full bg-white rounded-[10px] border border-[#DBDBDB]">
        <div class="text-center p-[10px] border-b border-[#DBDBDB]">
          <p class="text-blackPrimary text-xl font-medium">Ticket History</p>
        </div>
        <div class="py-5 lg:py-6 px-4 lg:px-8">
          <div class="flex space-x-4">
            <button
              @click="selectedTab = 0"
              class="px-4 lg:px-6 py-[5px] rounded border text-sm font-medium"
              :class="
                selectedTab === 0
                  ? 'bg-[#1E88E5] border-[#1E88E5] text-white'
                  : 'bg-white text-blackPrimary border-[#DBDBDB]'
              "
            >
              Mobile Number
            </button>
            <button
              @click="selectedTab = 1"
              class="px-4 lg:px-6 py-[5px] rounded border text-sm font-medium"
              :class="
                selectedTab === 1
                  ? 'bg-[#1E88E5] border-[#1E88E5] text-white'
                  : 'bg-white text-blackPrimary border-[#DBDBDB]'
              "
            >
              PNR
            </button>
            <button
              @click="selectedTab = 2"
              class="px-4 lg:px-6 py-[5px] rounded border text-sm font-medium"
              :class="
                selectedTab === 2
                  ? 'bg-[#1E88E5] border-[#1E88E5] text-white'
                  : 'bg-white text-blackPrimary border-[#DBDBDB]'
              "
            >
              Tnx ID
            </button>
          </div>

          <p
            class="mt-5 lg:mt-4 mb-[10px] text-xs font-medium text-blackPrimary"
          >
            {{
              selectedTab === 0
                ? "Mobile Number"
                : selectedTab === 1
                ? "PNR"
                : selectedTab === 2
                ? "Tnx ID"
                : ""
            }}
          </p>

          <form @submit="ticketData">
            <div
              class="
                mt-[10px]
                flex flex-col
                lg:flex-row
                justify-center
                lg:justify-between
                gap-x-14
              "
            >
              <div class="w-full lg:w-9/12">
                <div
                  v-if="selectedTab === 0"
                  class="flex h-[56px] bg-[#F7F7F7] rounded pl-[16px]"
                >
                  <div class="flex items-center shrink-0">
                    <img
                      class="w-[48px] h-[32px]"
                      src="@/assets/images/bd-flag.svg"
                      alt=""
                    />
                    <div
                      class="
                        text-[14px]
                        leading-[24px]
                        font-Inter font-[400]
                        tracking-wide
                        text-[#747476]
                        ml-[14px]
                      "
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
                    class="
                      w-full
                      p-4
                      bg-[#F7F7F7]
                      rounded
                      outline-none
                      text-sm
                      lg:text-base
                      placeholder:text-sm
                      lg:placeholder:text-base
                      font-normal
                      text-blackPrimary
                      placeholder:text-[#676769]
                    "
                    type="number"
                    minlength="11"
                    maxlength="11"
                    required=""
                    placeholder="Mobile Number"
                    v-model="phone"
                  />
                </div>
                <input
                  v-else-if="selectedTab === 1"
                  class="
                    w-full
                    p-4
                    bg-[#F7F7F7]
                    rounded
                    outline-none
                    text-sm
                    lg:text-base
                    placeholder:text-sm
                    lg:placeholder:text-base
                    font-normal
                    text-blackPrimary
                    placeholder:text-[#676769]
                  "
                  type="text"
                  placeholder="PNR"
                  v-model="pnr"
                />
                <input
                  v-else-if="selectedTab === 2"
                  class="
                    w-full
                    p-4
                    bg-[#F7F7F7]
                    rounded
                    outline-none
                    text-sm
                    lg:text-base
                    placeholder:text-sm
                    lg:placeholder:text-base
                    font-normal
                    text-blackPrimary
                    placeholder:text-[#676769]
                  "
                  type="text"
                  placeholder="Tnx ID"
                  v-model="transactionId"
                />
              </div>
              <button
                type="submit"
                class="
                  px-6
                  lg:px-7
                  py-[13px]
                  lg:w-3/12
                  rounded-full
                  bg-corporate
                  text-white text-sm
                  font-medium
                  mx-auto
                  mt-6
                  lg:mt-0
                "
              >
                Find Ticket
              </button>
            </div>
          </form>

          <!-- error message -->
          <TicketNotFoundAlert v-if="error" />
        </div>
      </div>

      <!-- Active Tickets -->
      <div class="mt-10" v-if="ticketList && getSearchedTicketList.tickets">
        <div class="flex justify-between items-center gap-x-4">
          <div class="h-[2px] bg-[#DBDBDB] w-full"></div>
          <p class="text-base font-medium whitespace-nowrap">Active Tickets</p>
          <div class="h-[2px] bg-[#DBDBDB] w-full"></div>
        </div>

        <div
          v-for="ticket in getSearchedTicketList.tickets"
          :key="ticket._id"
          class="mt-6"
        >
          <SingleTicketListItem :singlePrintTicketInfo="ticket" />
        </div>
      </div>

      <!-- Ticket not found -->
      <div class="flex justify-center pt-20 pb-[100px]">
        <OpssAlert
          v-if="oopsAlertStatus && !getSearchedTicketList.tickets"
          :details="'Looks llike we could not find any ticket according to your preferance. Sorry to let you down.'"
          :customStyle="'px-[64.5px]'"
        />
      </div>
    </div>
    <CancelTicketModal v-if="getIsTicketPopupOpen" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  data() {
    return {
      error: false,
      selectedTab: 0,
      phone: "",
      pnr: "",
      transactionId: "",
      activeTickets: [],
      oldTickets: [],
      oopsAlertStatus: false,
      ticketList: false,
    };
  },
  computed: {
    ...mapGetters("guarantedseat", [
      "getSearchedTicketList",
      "getIsTicketPopupOpen",
    ]),
  },
  methods: {
    ...mapActions("guarantedseat", ["searchTicketAction"]),
    ticketData(e) {
      this.$nextTick(async () => {
        this.$nuxt.$loading.start();
        e.preventDefault();
        const formData = {};
        if (this.selectedTab === 0) {
          formData.phone = this.phone;
          formData.pnr = "";
          formData.transactionId = "";
        } else if (this.selectedTab === 1) {
          formData.pnr = this.pnr;
          formData.phone = "";
          formData.transactionId = "";
        } else {
          formData.transactionId = this.transactionId;
          formData.phone = "";
          formData.pnr = "";
        }
        if (this.pnr || this.phone || this.transactionId) {
          this.error = false;
          this.ticketList = true;
          await this.searchTicketAction(formData);
        } else {
          this.error = true;
        }
        this.$nuxt.$loading.finish();
        this.oopsAlertStatus = true;
      });
    },
  },
};
</script>

<style>
</style>