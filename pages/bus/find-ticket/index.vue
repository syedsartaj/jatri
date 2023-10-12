<template>
  <div class="bg-[#f7f7f7]">
    <div class="w-full lg:w-[816px] mx-auto py-[30px]">
      <div class="w-full bg-white rounded-[10px] border border-[#DBDBDB]">
        <div class="text-center p-[10px] border-b border-[#DBDBDB]">
          <p class="text-blackPrimary text-xl font-medium">Find Ticket</p>
        </div>

        <div class="w-full mt-6 p-4">
          <div
            class="flex bg-white h-[40px] lg:h-[36px] justify-between rounded-t-[10px] max-w-max ml-4 bg-[#f7f7f7]"
          >
            <div
              :class="getServiceClassName(ServiceType.BUS)"
              @click="handleServiceChange(ServiceType.BUS)"
            >
              <svg
                class="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17H5V18C5 18.2652 4.89464 18.5196 4.70711 18.7071C4.51957 18.8946 4.26522 19 4 19H2C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V9H0V5H1V2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H17C17.5304 0 18.0391 0.210714 18.4142 0.585786C18.7893 0.960859 19 1.46957 19 2V5H20V9H19V18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H16C15.7348 19 15.4804 18.8946 15.2929 18.7071C15.1054 18.5196 15 18.2652 15 18V17ZM3 2V9H17V2H3ZM5.5 15C5.89782 15 6.27936 14.842 6.56066 14.5607C6.84196 14.2794 7 13.8978 7 13.5C7 13.1022 6.84196 12.7206 6.56066 12.4393C6.27936 12.158 5.89782 12 5.5 12C5.10218 12 4.72064 12.158 4.43934 12.4393C4.15804 12.7206 4 13.1022 4 13.5C4 13.8978 4.15804 14.2794 4.43934 14.5607C4.72064 14.842 5.10218 15 5.5 15ZM14.5 15C14.8978 15 15.2794 14.842 15.5607 14.5607C15.842 14.2794 16 13.8978 16 13.5C16 13.1022 15.842 12.7206 15.5607 12.4393C15.2794 12.158 14.8978 12 14.5 12C14.1022 12 13.7206 12.158 13.4393 12.4393C13.158 12.7206 13 13.1022 13 13.5C13 13.8978 13.158 14.2794 13.4393 14.5607C13.7206 14.842 14.1022 15 14.5 15Z"
                  :fill="
                    selectedService === ServiceType.BUS ? 'white' : '#151414'
                  "
                />
              </svg>

              <span
                :class="
                  selectedService === ServiceType.BUS
                    ? 'text-white'
                    : 'text-black'
                "
                class="text-xs lg:text-xl font-medium ml-[10px]"
                >Bus</span
              >
            </div>
            <div
              :class="getServiceClassName(ServiceType.LAUNCH)"
              @click="handleServiceChange(ServiceType.LAUNCH)"
            >
              <svg
                class="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]"
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3H13.446C13.6156 3 13.7824 3.04314 13.9308 3.12536C14.0791 3.20758 14.2041 3.32617 14.294 3.47L17.75 9H22.158C22.2448 8.99994 22.3302 9.02248 22.4056 9.06542C22.4811 9.10837 22.5441 9.17022 22.5884 9.24489C22.6327 9.31957 22.6568 9.40449 22.6583 9.49131C22.6598 9.57812 22.6387 9.66383 22.597 9.74L18.66 16.957C17.7794 17.075 16.8832 16.9559 16.064 16.6118C15.2448 16.2678 14.5323 15.7114 14 15C13.5347 15.6214 12.9309 16.1258 12.2365 16.473C11.5421 16.8202 10.7763 17.0006 10 17C9.22367 17.0006 8.45788 16.8202 7.76351 16.473C7.06913 16.1258 6.4653 15.6214 6 15C5.47889 15.6962 4.78494 16.2443 3.98687 16.5898C3.1888 16.9354 2.3143 17.0664 1.45 16.97L0.214 10.179C0.187777 10.0349 0.193542 9.88674 0.230886 9.74509C0.268229 9.60343 0.33624 9.47171 0.430108 9.35924C0.523977 9.24677 0.64141 9.1563 0.774102 9.09422C0.906794 9.03214 1.0515 8.99998 1.198 9H2V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H4V0H8V3ZM4 9H15.392L12.892 5H4V9ZM2 19C3.47626 19.002 4.90107 18.4578 6 17.472C7.09893 18.4578 8.52374 19.002 10 19C11.4763 19.002 12.9011 18.4578 14 17.472C15.0989 18.4578 16.5237 19.002 18 19H20V21H18C16.5956 21.0023 15.2157 20.6331 14 19.93C12.7843 20.6331 11.4044 21.0023 10 21C8.59564 21.0023 7.21565 20.6331 6 19.93C4.78435 20.6331 3.40436 21.0023 2 21H0V19H2Z"
                  :fill="
                    selectedService === ServiceType.LAUNCH ? 'white' : '#151414'
                  "
                />
              </svg>

              <span
                :class="
                  selectedService === ServiceType.LAUNCH
                    ? 'text-white'
                    : 'text-black'
                "
                class="text-xs lg:text-xl font-medium ml-[10px]"
                >Launch</span
              >
            </div>
          </div>
          <div
            class="w-full bg-white rounded-[8px] border border-[#DBDBDB] p-4"
          >
            <div class="flex space-x-[10px]">
              <button
                @click="selectedTab = 0"
                class="px-4 lg:px-6 py-[5px] rounded-full border text-sm font-medium"
                :class="
                  selectedTab === 0
                    ? 'bg-[#F04935] border-[#F04935] text-white'
                    : 'bg-white text-blackPrimary border-[#DBDBDB]'
                "
              >
                Mobile Number
              </button>
              <button
                @click="selectedTab = 1"
                class="px-4 lg:px-6 py-[5px] rounded-full border text-sm font-medium"
                :class="
                  selectedTab === 1
                    ? 'bg-[#F04935] border-[#F04935] text-white'
                    : 'bg-white text-blackPrimary border-[#DBDBDB]'
                "
              >
                PNR
              </button>
              <button
                @click="selectedTab = 2"
                class="px-4 lg:px-6 py-[5px] rounded-full border text-sm font-medium"
                :class="
                  selectedTab === 2
                    ? 'bg-[#F04935] border-[#F04935] text-white'
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
                class="mt-[10px] flex flex-col md:flex-row justify-center md:justify-between gap-x-14"
              >
                <div class="w-full md:w-9/12">
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
                        class="text-[14px] leading-[24px] font-Inter font-[400] tracking-wide text-[#747476] ml-[14px]"
                      >
                        +880
                      </div>
                      <img
                        class="w-[2px] h-[28px] ml-[4px]"
                        src="@/assets/images/input-separator.svg"
                        alt=""
                      />
                    </div>
                    <input
                      class="w-full p-4 bg-[#F7F7F7] rounded outline-none text-sm lg:text-base placeholder:text-sm lg:placeholder:text-base font-normal text-blackPrimary placeholder:text-[#676769]"
                      type="number"
                      required=""
                      placeholder="Enter Mobile Number"
                      v-model="phone"
                      @input="handleInput"
                      @paste="handlePaste"
                      @wheel="$event.target.blur()"
                    />
                  </div>
                  <input
                    v-else-if="selectedTab === 1"
                    class="w-full p-4 bg-[#F7F7F7] rounded outline-none text-sm lg:text-base placeholder:text-sm lg:placeholder:text-base font-normal text-blackPrimary placeholder:text-[#676769]"
                    type="text"
                    required=""
                    placeholder="PNR"
                    v-model="pnr"
                  />
                  <input
                    v-else-if="selectedTab === 2"
                    required=""
                    class="w-full p-4 bg-[#F7F7F7] rounded outline-none text-sm lg:text-base placeholder:text-sm lg:placeholder:text-base font-normal text-blackPrimary placeholder:text-[#676769]"
                    type="text"
                    placeholder="Tnx ID"
                    v-model="transactionId"
                  />
                </div>
                <button
                  type="submit"
                  class="px-6 md:px-7 py-[13px] md:w-3/12 rounded-full bg-corporate text-white text-sm font-medium mx-auto mt-6 md:mt-0"
                >
                  Find Ticket
                </button>
              </div>
            </form>
          </div>
          <!-- Ticket not found -->
          <div class="flex justify-center mt-[10px]">
            <div
              v-if="alertMessage && !getSearchedTicketList.tickets"
              class="w-full flex flex-row gap-x-2 items-center text-xs md:text-sm font-normal text-[#E0293B]"
            >
              <img
                src="@/assets/images/icons/warningRed.svg"
                class="h-[16px] w-[16px] md:h-6 nd:w-6"
                alt="error"
              />
              <div>{{ alertMessage }}</div>
            </div>
          </div>
        </div>
      </div>

      <!--  Tickets -->
      <div v-if="getSearchedTicketList.tickets">
        <div class="w-full flex flex-col" v-if="getActiveTickets?.length">
          <div class="flex justify-between items-center gap-x-4 mt-4 lg:mt-10">
            <div class="h-[2px] bg-[#DBDBDB] w-full"></div>
            <p class="text-base font-medium whitespace-nowrap">
              Active Tickets
            </p>
            <div class="h-[2px] bg-[#DBDBDB] w-full"></div>
          </div>

          <div
            v-for="ticket in getActiveTickets"
            :key="ticket._id"
            class="mt-6"
          >
            <SingleTicketListItem
              :singlePrintTicketInfo="ticket"
              :serviceType="selectedService"
            />
          </div>
        </div>

        <div class="w-full flex flex-col" v-if="getOldTickets?.length">
          <div class="flex justify-between items-center gap-x-4 mt-4 lg:mt-10">
            <div class="h-[2px] bg-[#DBDBDB] w-full"></div>
            <p class="text-base font-medium whitespace-nowrap">Old Tickets</p>
            <div class="h-[2px] bg-[#DBDBDB] w-full"></div>
          </div>

          <div v-for="ticket in getOldTickets" :key="ticket._id" class="mt-6">
            <SingleTicketListItem
              :singlePrintTicketInfo="ticket"
              :serviceType="selectedService"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { isValidPhoneNumber, ServiceType } from "../../../helpers/utils";
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
      alertMessage: null,
      ServiceType: ServiceType,
    };
  },
  computed: {
    ...mapGetters("common", [
      "getSearchedTicketList",
      "getSelectedServiceType",
    ]),
    getActiveTickets() {
      return this.getFilteredTickets(true);
    },
    getOldTickets() {
      return this.getFilteredTickets(false);
    },
    selectedService() {
      return this.getSelectedServiceType;
    },
  },
  beforeDestroy() {
    this.setSearchedTicketList([]);
  },
  methods: {
    ...mapActions("common", [
      "searchTicketAction",
      "sendOtpForSearchTicketAction",
    ]),
    ...mapMutations("common", ["setSearchedTicketList", "setSelectedService"]),
    getFilteredTickets(isActive) {
      const currentTime = new Date();
      return this.getSearchedTicketList.tickets.filter((item) => {
        const boardingTime = new Date(item.boardingDateTime);
        return isActive
          ? boardingTime >= currentTime
          : boardingTime < currentTime;
      });
    },
    handleInput() {
      if (this.phone.length === 1 && this.phone[0] === "0") {
        this.phone = "";
      }
      if (this.phone.length > 10) {
        this.phone = this.phone.slice(0, 10);
      }
    },
    handlePaste(event) {
      event.preventDefault();
      // Get the pasted text
      const pastedText = event.clipboardData.getData("text/plain");
      // Remove any leading zeros
      const cleanedText = pastedText.replace(/^0+/, "");
      const truncatedText = cleanedText.slice(0, 10);
      this.phone = truncatedText;
    },

    getServiceClassName(service) {
      return {
        "w-full p-4 flex justify-between items-center flex-row cursor-pointer": true,
        "rounded-t-[8px] bg-[#1E88E5]": this.selectedService === service,
      };
    },
    handleServiceChange(service) {
      this.setSelectedService(service);
      this.oopsAlertStatus = false;
      this.setSearchedTicketList([]);
    },
    ticketData(e) {
      e.preventDefault();
      const formData = {};
      if (this.selectedTab === 0) {
        formData.phone = `0${this.phone}`;
        if (isValidPhoneNumber(`0${this.phone}`)) {
          this.$nextTick(async () => {
            await this.sendOtpForSearchTicketAction({
              payload: formData,
            });
          });
        } else {
          this.setSearchedTicketList([]);
          this.alertMessage = "Phone number is not valid!";
        }

        return;
      } else if (this.selectedTab === 1) {
        formData.pnr = this.pnr;
        formData.transactionId = "";
      } else {
        formData.transactionId = this.transactionId;
        formData.phone = "";
        formData.pnr = "";
      }
      if (this.pnr || this.phone || this.transactionId) {
        this.alertMessage = null;
        this.$nextTick(async () => {
          this.$nuxt.$loading?.start();

          try {
            const responseData = await this.searchTicketAction({
              payload: formData,
              service: this.selectedService,
            });

            this.setSearchedTicketList(responseData);
            this.$nuxt.$loading?.finish();
          } catch (err) {
            this.setSearchedTicketList([]);
            this.alertMessage = err;
            this.$nuxt.$loading?.finish();
          }
        });
      }
    },
  },
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
