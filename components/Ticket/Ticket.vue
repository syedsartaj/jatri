<template>
     <div class="border border-[#DBDBDB] rounded-md">
          <!-- for download -->
          <client-only>
               <vue-html2pdf
                    class="hidden"
                    :show-layout="false"
                    :float-layout="true"
                    :enable-download="true"
                    :preview-modal="true"
                    :paginate-elements-by-height="1400"
                    filename="nightprogrammerpdf"
                    :pdf-quality="2"
                    :manual-pagination="false"
                    pdf-format="a4"
                    :pdf-margin="10"
                    pdf-orientation="portrait"
                    pdf-content-width="800px"
                    @progress="onProgress($event)"
                    ref="html2Pdf"
               >
                    <section slot="pdf-content">
                         <PrintDownloadTicket :TicketDetails="getTicketDetails.ticket" :id="'printTicket-'+getTicketDetails._id"/>
                    </section>
               </vue-html2pdf>
          </client-only>
          <!-- for print-->
          <div :id="'printTicket-'+getTicketDetails._id" style="width: 100%; overflow-x: auto; overflow-y: hidden; border-radius: 6px 6px 0 0;" class="hidden">
               <PrintDownloadTicket :TicketDetails="getTicketDetails.ticket"/>
          </div>

          <!-- for show to user-->
          <div class="w-full overflow-x-auto overflow-y-hidden rounded-t-md">
               <div class="border-b border-[#DBDBDB] bg-white">
                    <div class="bg-[#EFF7FD] py-[10px] lg:py-[15px] px-[10px] lg:px-[50px] flex justify-start items-center gap-x-3 divide-x divide-[#D9D9D9]">
                         <img src="@/assets/images/logo.svg" alt="jatri logo" class="w-10 lg:w-[51px]">
                         <h2 class="text-[#151414] text-sm lg:text-xl font-medium pl-3">{{ getTicketDetails.ticket.companyName }}</h2>
                    </div>
                    <div class="p-3 lg:p-6">
                         <div class="flex flex-col lg:flex-row justify-between divide-y lg:divide-y-0 lg:divide-x divide-[#DBDBDB]">
                              <div class="w-full lg:w-1/2">
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Name:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.ticket.passenger.name }}</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Coach:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.ticket.coach }}</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Departure time:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ departureDateTime }}</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Seat fare:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ Math.ceil((getTicketDetails.ticket.payable + getTicketDetails.ticket.discount) / getTicketDetails.ticket.totalSeat) }} TK</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Seats:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.ticket.seatNumbers.join(', ') }}</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">From:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.ticket.fromCity }}</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Boarding:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{  getTicketDetails.ticket.boardingPlace }}</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Issued on:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{issuedOn}}</p>
                                   </div>
                              </div>
                              <div class="w-full lg:w-1/2 pt-[10px] lg:pt-0">
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Transection ID:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{getTicketDetails.ticket.transactionId}}</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">PNR Code:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{getTicketDetails.ticket.pnrCode}}</p>
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
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.ticket.toCity }}</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Total fare:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{ getTicketDetails.ticket.payable + getTicketDetails.ticket.discount }} TK</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Dropping:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">{{  getTicketDetails.ticket.droppingPoint }}</p>
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
<!-- {{getTicketDetails}} -->
          <div v-if="!pageVind" class="flex justify-between lg:justify-center gap-x-[10px] lg:gap-x-6 bg-white p-4 lg:p-5 rounded-b-md">
               <span v-if="!getTicketDetails.status" class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-white bg-red-500 rounded-full lg:w-[170px] py-3 px-4">
                    Cancelled
               </span>
               <!-- <span v-else-if="getTicketDetails.status && getTicketDetails.paymentHistory.ticketStatus == 'PENDING_CANCEL_REQUEST'" class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-black bg-yellow-300 rounded-full lg:w-[170px] py-3 px-4">
                    Requested For Cancel
               </span> -->
               <button v-if="getTicketDetails.isTicketCancelable" @click="cancelTicket(getTicketDetails._id)" class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-[#4D4D4F] bg-[#EDEDED] rounded-full lg:w-[170px] py-3 px-4">
                    <img src="@/assets/images/icons/cross-black.svg" alt="" class="hidden lg:block">
                    Cancel ticket
               </button>
               <button @click="downloadTicket('printTicket-'+getTicketDetails._id)" class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-[#48A43F] bg-[#F1F9F1] rounded-full lg:w-[170px] py-3 px-4">
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
import { mapGetters } from 'vuex';
import { dateTimeFormat, timeFormat } from '@/helpers/dateTimeFormat';
import moment from 'moment';
export default {
     props: {
          pageVind: String
     },
     methods: {
          // downloadFunction
          onProgress(event) {
               console.log(`Processed: ${event} / 100`);
          },
          hasGenerated() {
               alert("PDF generated successfully!");
          },
          downloadTicket(id) {
               this.$refs.html2Pdf.generatePdf(id);
          },

          // printFunction
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
     },
     computed: {
          ...mapGetters("guarantedseat", ["getTicketDetails"]),
          reportTimeWithAddTime() {
               return timeFormat(this.getTicketDetails.ticket.reportingDateTime, 0, 'lll');
          },
          departureDateTime() {
               return dateTimeFormat(this.getTicketDetails.ticket.boardingDateTime, 0, 'lll')
          },
          tripDate() {
               return dateTimeFormat(this.getTicketDetails.ticket.departureDateTime, 0, 'lll')
          },
          ticketDateTime() {
               return dateTimeFormat(this.getTicketDetails.ticket.ticketDateTime, 0, 'll')
          },
          issuedOn () {
               return this.getTicketDetails && dateTimeFormat(this.getTicketDetails.createdAt, 0, 'lll');
          }
     }
}
</script>

<style>

</style>