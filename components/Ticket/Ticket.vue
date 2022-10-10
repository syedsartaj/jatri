<template>
     <div class="border border-[#DBDBDB] rounded-md">
          <div id="printTicket" class="w-full overflow-x-auto overflow-y-hidden rounded-t-md">
               <div class="border-b border-[#DBDBDB] bg-white">
                    <div class="bg-[#EFF7FD] py-[10px] lg:py-[15px] px-[10px] lg:px-[50px] flex justify-start items-center gap-x-3 divide-x divide-[#D9D9D9]">
                         <img src="@/assets/images/logo.svg" alt="jatri logo" class="w-10 lg:w-[51px]">
                         <!-- <div class="bg-[#D9D9D9] w-[1px] h-6"></div> -->
                         <h2 class="text-[#151414] text-sm lg:text-xl font-medium pl-3">Green Line Paribahan</h2>
                    </div>
                    <div class="p-3 lg:p-6">
                         <div class="flex flex-col lg:flex-row justify-between divide-y lg:divide-y-0 lg:divide-x divide-[#DBDBDB]">
                              <div class="w-full lg:w-1/2">
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Name:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">MR FARDIN</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Coach:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">[DHK-1801-B]</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Departure time:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">09:15 AM</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Seat fare:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">2800 TK</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Seats:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">[D4], [D3]</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">From:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">Dhaka</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Boarding:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">Kalabagan</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Issued on:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">24 Mar 2021, 10:20 PM</p>
                                   </div>
                              </div>
                              <div class="w-full lg:w-1/2 pt-[10px] lg:pt-0">
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Req ID:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">BX125J</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Journey date:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">20 Feb 2021</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Reporting time</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">02:20 PM</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">To:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">Benapol</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Total fare:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">2800 TK</p>
                                   </div>
                                   <div class="text-xs mb-[14px] flex justify-start">
                                        <p class="w-1/2 font-normal text-[#4D4D4F] text-right">Dropping:</p>
                                        <p class="w-1/2 pl-[10px] font-medium text-blackPrimary">Benapol</p>
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
               <button class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-[#4D4D4F] bg-[#EDEDED] rounded-full lg:w-[170px] py-3 px-4">
                    <img src="@/assets/images/icons/cross-black.svg" alt="" class="hidden lg:block">
                    Cancel ticket
               </button>
               <button class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-[#48A43F] bg-[#F1F9F1] rounded-full lg:w-[170px] py-3 px-4">
                    <img src="@/assets/images/icons/download.svg" alt="" class="hidden lg:block">
                    Download ticket
               </button>
               <button class="lg:flex lg:justify-center lg:items-center lg:gap-x-[11.7px] text-xs font-medium text-[#1E88E5] bg-[#EFF7FD] rounded-full lg:w-[170px] py-3 px-4" @click="printTicket('printTicket')">
                    <img src="@/assets/images/icons/print.svg" alt="" class="hidden lg:block">
                    Print ticket
               </button>
          </div>
     </div>
</template>

<script>
export default {
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
     }
}
</script>

<style>

</style>