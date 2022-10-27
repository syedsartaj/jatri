<template>
  <div class="border border-[#DBDBDB] rounded-md">
    <div :id="'printTicket-'+getTicketDetails._id" class="w-full overflow-x-auto overflow-y-hidden rounded-t-md">
      <div class="border-b border-[#DBDBDB] bg-white">
        <div class="bg-[#EFF7FD] py-[10px] lg:py-[15px] px-[10px] lg:px-[50px] flex justify-start items-center gap-x-3 divide-x divide-[#D9D9D9]">
          <img src="@/assets/images/logo.svg" alt="jatri logo" class="w-10 lg:w-[51px]">
          <!-- <div class="bg-[#D9D9D9] w-[1px] h-6"></div> -->
          <h2 class="text-[#151414] text-sm lg:text-xl font-medium pl-3">{{ getTicketDetails.companyName }}</h2>
        </div>
        <div class="p-3 lg:p-6">
          <div class="flex flex-col lg:flex-row justify-between divide-y lg:divide-y-0 lg:divide-x divide-[#DBDBDB]">
            <div class="w-full lg:w-1/2">
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Name:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.passenger.name }}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Coach:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.coach }}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Departure time:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ departureDateTime }}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Seat fare:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ Math.ceil((getTicketDetails.payable + getTicketDetails.discount) / getTicketDetails.totalSeat) }} TK</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Seats:</p>
                <p v-for='seat in getTicketDetails.seatNumbers' :key='seat' class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ seat }}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">From:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.fromCity }}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Boarding:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{  getTicketDetails.boardingPlace }}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Issued on:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{issuedOn}}</p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 pt-[10px] lg:pt-0">
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Transection ID:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{getTicketDetails.transactionId}}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">PNR Code:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{getTicketDetails.pnrCode}}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Journey date:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ tripDate }}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Reporting time</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ reportTimeWithAddTime }}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">To:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.toCity }}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Total fare:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.payable + getTicketDetails.discount }} TK</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Dropping:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{  getTicketDetails.droppingPoint }}</p>
              </div>
              <div class="text-xs mb-[14px] flex justify-start">
                <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Issued by:</p>
                <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">Jatri.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between lg:justify-center gap-x-[10px] lg:gap-x-6 bg-white p-4 lg:p-5 rounded-b-md">
      <span v-if="!getTicketDetails.status" class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-white bg-red-500 rounded-full lg:w-[170px] py-3 px-4">
        Cancelled
      </span>
      <span v-else-if="getTicketDetails.status && getTicketDetails.paymentHistory.ticketStatus == 'PENDING_CANCEL_REQUEST'" class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-black bg-yellow-300 rounded-full lg:w-[170px] py-3 px-4">
        Requested For Cancel
      </span>
      <button v-if="getTicketDetails.isTicketCancelable" @click="cancelTicket(getTicketDetails._id)" class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-[#4D4D4F] bg-[#EDEDED] rounded-full lg:w-[170px] py-3 px-4">
        <img src="@/assets/images/icons/cross-black.svg" alt="" class="hidden lg:block">
        Cancel ticket
      </button>
      <button class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-[#48A43F] bg-[#F1F9F1] rounded-full lg:w-[170px] py-3 px-4">
        <img src="@/assets/images/icons/download.svg" alt="" class="hidden lg:block">
        Download ticket
      </button>
      <button @click="printTicket('printTicket-'+getTicketDetails._id)" class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-[#1E88E5] bg-[#EFF7FD] rounded-full lg:w-[170px] py-3 px-4">
        <img src="@/assets/images/icons/print.svg" alt="" class="hidden lg:block">
        Print ticket
      </button>
    </div>
  </div>
</template>

<script>
import { dateTimeFormat, timeFormat } from '@/helpers/dateTimeFormat';
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['getTicketDetails'],
  methods: {
    printTicket(id) {
      let divContents = window.document.getElementById(id).innerHTML;
      var printWindow = window.open();
      var is_chrome = Boolean(window.chrome);
      printWindow.document.write("<html>");
      printWindow.document.write(`<head>`);
      printWindow.document.write(`<style>`);
      printWindow.document.write(`*{ font-family: 'Inter', sans-serif;box-sizing: border-box;margin: 0;padding: 0;}`); // delete date and page number
      printWindow.document.write(`@page { size: auto;  margin: 0mm; }`); // delete date and page number
      printWindow.document.write(`</style>`);
      printWindow.document.write(`</head>`);
      printWindow.document.write("<body>");
      printWindow.document.write(divContents);
      printWindow.document.write("</body>");
      printWindow.document.write("</html>");
      printWindow.document.close();
      printWindow.focus();
      // if (window.print) {
      //   printWindow.print();
      // }
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        printWindow.print(); // change window to winPrint
        // printWindow.close(); // change window to winPrint
      } else if (is_chrome) {
        printWindow.onload = function () {
          setTimeout(function () {
            // wait until all resources loaded
            printWindow.print(); // change window to winPrint
            printWindow.close(); // change window to winPrint
          }, 500);
        };
      } else {
        printWindow.print();
        printWindow.close();
      }
    },
    ...mapActions('guarantedseat', ['cancelTicketAction']),
    cancelTicket(ticketId) {
      const payload = {
        ticketId: ticketId
      }
      if (confirm("Are you sure to cancel this ticket?") == true) {
        this.cancelTicketAction(payload)
      }
    },
  },
  computed: {
    ...mapGetters('guarantedseat', ['getSearchedTicketList']),
    reportTimeWithAddTime () {
      return this.getTicketDetails && timeFormat(this.getTicketDetails.reportingDateTime, 0, 'lll');
    },
    departureDateTime () {
      return this.getTicketDetails && dateTimeFormat(this.getTicketDetails.boardingDateTime, 0, 'lll') ;
    },
    tripDate () {
      return this.getTicketDetails && dateTimeFormat(this.getTicketDetails.departureDateTime, 0, 'lll');
    },
    ticketDateTime () {
      return this.getTicketDetails && dateTimeFormat(this.getTicketDetails.ticketDateTime, 0, 'll');
    },
    issuedOn () {
      return this.getTicketDetails && dateTimeFormat(this.getTicketDetails.createdAt, 0, 'lll');
    }
  }

};
</script>

<style scoped></style>
