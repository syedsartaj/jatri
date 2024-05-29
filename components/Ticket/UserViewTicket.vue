<template>
  <div class="border border-[#DBDBDB] rounded-md">
    <!-- for print-->
    <div
      :id="'printTicket-' + getTicketDetails._id"
      style="
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        border-radius: 6px 6px 0 0;
      "
      class="hidden"
    >
      <PrintBusTicket
        :ticketDetails="getTicketDetails"
        :email="supportEmail"
        :phone="supportPhone"
        :downloadTicketStatus="downloadTicketValue"
        :serviceType="serviceType"
        :seatFareArray="seatFareArray"
      />
    </div>
    <client-only v-if="getSelectedServiceType === ServiceType.LAUNCH">
      <vue-html2pdf
        class="hidden"
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        :filename="
          getTicketDetails.companyName +
          '_' +
          getTicketDetails.passenger.name +
          '_' +
          getTicketDetails.pnrCode
        "
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        :html-to-pdf-options="pdfOptions"
        @progress="onProgress($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <LaunchTicket
            :ticketDetails="getTicketDetails"
            :email="supportEmail"
            :phone="supportPhone"
            :downloadTicketStatus="downloadTicketValue"
            :id="'printTicket-' + getTicketDetails._id"
            :ticketFareString="ticketFareString"
            :serviceType="serviceType"
            :seatFareArray="seatFareArray"
          />
        </section>
      </vue-html2pdf>
    </client-only>

    <!-- for show to user-->
    <div
      class="w-full overflow-x-auto overflow-y-hidden rounded-t-md custom-word-break"
    >
      <div class="border-b border-[#DBDBDB] bg-white">
        <div
          class="bg-[#EFF7FD] py-[10px] lg:py-[15px] px-[10px] lg:px-[50px] flex justify-between items-center gap-x-3"
        >
          <h2 class="text-[#151414] text-sm lg:text-xl font-medium">
            {{ getTicketDetails.companyName }}
          </h2>
          <img
            src="@/assets/images/logo.svg"
            alt="jatri logo"
            class="w-10 lg:w-[51px]"
          />
          <!-- <div class="bg-[#D9D9D9] w-[1px] h-6"></div> -->
        </div>
        <div class="p-3 md:py-5 lg:p-4">
          <div
            class="flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-[#DBDBDB]"
          >
            <div class="w-full md:w-1/2">
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Name:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ getTicketDetails.passenger.name }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  {{ serviceType === "BUS" ? "Coach:" : "Ship:" }}
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{
                    serviceType === "BUS"
                      ? getTicketDetails.coach
                      : getTicketDetails.ship
                  }}
                </p>
              </div>

              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Departure time:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ departureDateTime }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Seat Fare:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ ticketFareString }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Seats:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ getTicketDetails.seatNumbers.join(", ") }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">From:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ getTicketDetails.fromCity }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Boarding:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ getTicketDetails.boardingPlace }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Issued on:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ issuedOn }}
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/2 pt-[10px] md:pt-0">
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Transection ID:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ getTicketDetails.transactionId }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  PNR Code:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ getTicketDetails.pnrCode }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Journey date:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ boardingDate }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Reporting date time:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ reportTimeWithAddTime }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">To:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ getTicketDetails.toCity }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Total fare:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ getTicketDetails.totalAmount }} TK
                </p>
              </div>
              <div
                v-if="getTicketDetails.droppingPoint"
                class="text-xs mb-[14px] flex justify-start"
              >
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Dropping:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  {{ getTicketDetails.droppingPoint }}
                </p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">
                  Issued by:
                </p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">
                  Jatri.co
                </p>
              </div>
            </div>
          </div>
        </div>
        <p
          v-if="getTicketDetails.tripType === 'eid'"
          class="text-[#f04935] text-[16px] pb-2 font-[500] leading-[24px] text-center bg-white"
        >
          This ticket is Non - Refundable & Cancellable
        </p>
      </div>
    </div>
    <!-- {{getTicketDetails}} -->

    <div
      class="flex justify-center gap-x-[10px] lg:gap-x-6 bg-white p-4 lg:p-5 rounded-b-md"
    >
      <span
        v-if="!getTicketDetails.status && !pageVind"
        class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-center text-xs font-medium text-white bg-red-500 rounded-full lg:w-[170px] py-3 px-4"
      >
        Cancelled
      </span>
      <span
        v-else-if="
          !pageVind &&
          getTicketDetails.status &&
          getTicketDetails.paymentHistory.ticketStatus ==
            'PENDING_CANCEL_REQUEST'
        "
        class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-center text-xs font-medium text-black bg-yellow-300 rounded-full lg:w-[170px] py-3 px-4"
      >
        Requested For Cancel
      </span>
      <button
        v-if="
          getTicketDetails.isTicketCancelable &&
          !pageVind &&
          getTicketDetails?.paymentHistory?.ticketStatus !==
            'PENDING_CANCEL_REQUEST'
        "
        @click="cancelTicket(getTicketDetails._id)"
        class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-center text-xs font-medium text-[#4D4D4F] bg-[#EDEDED] rounded-full lg:w-[170px] py-3 px-4"
      >
        <img
          src="@/assets/images/icons/cross-black.svg"
          alt=""
          class="hidden lg:block"
        />
        Cancel Ticket
      </button>
      <button
        v-if="getTicketDetails.status"
        @click="downloadTicket('printTicket-' + getTicketDetails._id)"
        class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-center text-xs font-medium text-[#48A43F] bg-[#F1F9F1] rounded-full lg:w-[170px] py-3 px-4"
      >
        <img
          src="@/assets/images/icons/download.svg"
          alt=""
          class="hidden lg:block"
        />
        Download Ticket
      </button>
      <button
        v-if="getTicketDetails.status"
        @click="printTicket('printTicket-' + getTicketDetails._id)"
        class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-center text-xs font-medium text-[#1E88E5] bg-[#EFF7FD] rounded-full lg:w-[170px] py-3 px-4"
      >
        <img
          src="@/assets/images/icons/print.svg"
          alt=""
          class="hidden lg:block"
        />
        Print Ticket
      </button>
    </div>
  </div>
</template>

<script>

import { dateTimeFormat } from "@/helpers/dateTimeFormat";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { ServiceType } from "../../helpers/utils";

export default {
  name: "UserViewTicket",
  data() {
    return {
      downloadTicketValue: false,
      seatFareObject: {},
      ticketFareString: "",
      ServiceType: ServiceType,
      seatFareArray: "",
      pdfOptions: {
        filename:
          this.getTicketDetails.companyName +
          "_" +
          this.getTicketDetails.passenger.name +
          "_" +
          this.getTicketDetails.pnrCode,
        html2canvas: {
          dpi: 192,
          scale: 4,
          letterRendering: true,
          useCORS: true,
        },
        image: { type: "jpeg", quality: 1 },
        jsPDF: { unit: "px", format: [595, 842], orientation: "portrait" },
      },
    };
  },
  props: [
    "getTicketDetails",
    "getPaymentHistory",
    "pageVind",
    "supportEmail",
    "supportPhone",
    "serviceType",
  ],
  mounted() {
    this.getPaymentHistory?.seatFares?.forEach((seatFare) => {
      this.seatFareObject[seatFare] = (this.seatFareObject[seatFare] || 0) + 1;
    });

    for (let key in this.seatFareObject) {
      this.ticketFareString += `[${key} x ${this.seatFareObject[key]}]`;
    }

    let seatFares = this.getPaymentHistory?.seatFares;
    let seatNumbers = this.getTicketDetails.seatNumbers;
    const fareMap = {};

    // Populate the mapping object
    for (let i = 0; i < seatNumbers.length; i++) {
      const seat = seatNumbers[i];
      const fare = seatFares[i];

      if (!fareMap[fare]) {
        fareMap[fare] = [];
      }

      fareMap[fare].push(seat);
    }

    // Convert the mapping object to the desired output format
    this.seatFareArray = Object.keys(fareMap).map((fare) => {
      return {
        seat: fareMap[fare],
        fare: `${fare}x${fareMap[fare].length}`,
      };
    });
  },
  methods: {
    // downloadFunction
    onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    async downloadTicket(id) {

        try {
          const response = await this.getDownloadPdfApi(
            this.getTicketDetails._id
          );
          let fileUrl = window.URL.createObjectURL(new Blob([response]));
          let fileLink = document.createElement("a");
          fileLink.href = fileUrl;
          fileLink.setAttribute(
            "download",
            `${this.getTicketDetails.companyName}_${this.getTicketDetails.passenger.name}_${this.getTicketDetails.pnrCode}.pdf`
          );
          document.body.appendChild(fileLink);
          fileLink.click();
        } catch (error) {
          console.error("Error downloading the PDF", error);
        }
    
    },

    // printFunction
    printTicket(id) {
      this.downloadTicketValue = false;
      let divContents = window.document.getElementById(id).innerHTML;
      var printWindow = window.open("", "_blank");
      var is_chrome = Boolean(window.chrome);
      printWindow.document.write("<html>");
      printWindow.document.write(`<head>`);
      printWindow.document.write(`<style>`);
      printWindow.document.write(
        `*{ font-family: 'Inter', sans-serif;box-sizing: border-box;margin: 0;padding: 0;}`
      ); // delete date and page number
      printWindow.document.write(
        `@page {
          margin: 0;
          padding: 0;
          width: 210mm;
          height: 297mm; 
        }`
      );
      printWindow.document.write(
        `.print-content {
      width: 595px; 
      height: 842px;
      transform: scale(2);
      transform-origin: top left;
    }`
      );
      printWindow.document.write(`</style>`);
      printWindow.document.write(`</head>`);
      printWindow.document.write("<body>");
      printWindow.document.write(`<div class="print-content">`);
      printWindow.document.write(divContents);
      printWindow.document.write(`</div>`);
      printWindow.document.write("</body>");
      printWindow.document.write("</html>");
      printWindow.document.close();
      printWindow.focus();
      printWindow.onload = function () {
        setTimeout(function () {
          // wait until all resources loaded
          printWindow.print(); // change window to winPrint
          printWindow.close(); // change window to winPrint
        }, 500);
      };
    },
    ...mapGetters("common", ["getSelectedServiceType"]),
    ...mapActions("common", [
      "sendOtpForCancelTicketAction",
      "getDownloadPdfApi",
    ]),
    ...mapMutations("common", ["setCancelTicketId"]),
    cancelTicket(ticketId) {
      const payload = {
        ticketId,
        service: this.serviceType,
      };
      this.setCancelTicketId(ticketId);
      this.sendOtpForCancelTicketAction(payload);
    },
  },
  computed: {
    ...mapGetters("common", ["getSearchedTicketList"]),
    reportTimeWithAddTime() {
      return (
        this.getTicketDetails &&
        dateTimeFormat(this.getTicketDetails.reportingDateTime, 0, "lll")
      );
    },
    departureDateTime() {
      return (
        this.getTicketDetails &&
        dateTimeFormat(this.getTicketDetails.boardingDateTime, 0, "hh:mm A")
      );
    },
    boardingDate() {
      return (
        this.getTicketDetails &&
        dateTimeFormat(this.getTicketDetails.boardingDateTime, 0, "ll")
      );
    },
    ticketDateTime() {
      return (
        this.getTicketDetails &&
        dateTimeFormat(this.getTicketDetails.ticketDateTime, 0, "ll")
      );
    },
    issuedOn() {
      return (
        this.getTicketDetails &&
        dateTimeFormat(this.getTicketDetails.ticketDateTime, 0, "lll")
      );
    },
    isLaunchPage() {
      return this.$route?.fullPath?.includes("launch");
    },
  },
};
</script>

<style scoped>
.custom-word-break {
  word-break: break-word;
}
</style>
