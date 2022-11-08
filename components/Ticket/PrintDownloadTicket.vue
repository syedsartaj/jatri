<template>
     <!-- <div style="border-bottom: 1px solid #DBDBDB; background-color: #ffffff; ">
          <div style="background-color: #EFF7FD; padding: 15px 50px; display: flex; justify-content: start; align-items: center; column-gap: 12px;">
               <img src="@/assets/images/logo.svg" alt="jatri logo" style="width: 51px;">
               <div style="background-color: #D9D9D9; width: 1px; height: 24px;"></div>
               <h2 style="color: #151414; font-size: 20px; line-height: 28px; font-weight: 500;"><span>{{ TicketDetails.companyName }}</span></h2>
          </div>
          <div style="padding: 24px;">
               <div style="display: flex; justify-content: space-between;">
                    <div style="border-right: 1px solid #DBDBDB; width: 50%;">
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Name:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{ TicketDetails.passenger.name }}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Coach:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{ TicketDetails.coach }}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width:50%; font-weight: 400; color: #4D4D4F; text-align: right;">Departure time:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{ departureDateTime }}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Seat fare:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{ Math.ceil((TicketDetails.payable + TicketDetails.discount) / TicketDetails.totalSeat) }} TK</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Seats:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{ TicketDetails.seatNumbers.join(', ') }}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">From:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{ TicketDetails.fromCity }}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Boarding:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{  TicketDetails.boardingPlace }}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Issued on:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{issuedOn}}</p>
                         </div>
                    </div>
                    <div style="width: 50%;">
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Transection ID:</p>
                              <p style="width: 50%; padding-left: 10px;  font-weight: 500; color: #151414;">{{TicketDetails.transactionId}}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">PNR Code:</p>
                              <p style="width: 50%; padding-left: 10px;  font-weight: 500; color: #151414;">{{TicketDetails.pnrCode}}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Journey date:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{ tripDate }}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Reporting time</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{ reportTimeWithAddTime }}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">To:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{ TicketDetails.toCity }}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Total fare:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{ TicketDetails.payable + TicketDetails.discount }} TK</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Dropping:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">{{  TicketDetails.droppingPoint }}</p>
                         </div>
                         <div style="font-size: 12px; line-height: 16px; margin-bottom: 14px; display: flex; justify-content: start;">
                              <p style="width: 50%; font-weight: 400; color: #4D4D4F; text-align: right;">Issued by:</p>
                              <p style="width: 50%; padding-left: 10px; font-weight: 500; color: #151414;">Jatri.co</p>
                         </div>
                    </div>
               </div>
          </div>
     </div> -->
     <div style="width: 100%; overflow-x: auto; overflow-y: hidden">
          <!-- <div style="width: 802px; display: flex;"> -->
          <div style="width:802px; font-family: 'Inter', sans-serif; border: 1px solid #f94035">
               <div>
                    <div style='padding-top: 24px; padding-left: 24px; padding-right: 24px'>
                         <div style='display: flex;justify-content: space-between;margin-bottom: 16px;'>
                              <div>
                                   <p style='color: black;font-size: 16px;font-weight: 500;margin-top: 20px;'>
                                        {{ ticketDetails.companyName }}
                                   </p>
                                   <p style='color: black;font-size: 12px;font-weight: 500;'>
                                        {{ ticketDetails.coach }}
                                   </p>
                              </div>
                              <img :src="require('@/assets/images/ticket/logo.png')" alt='' style='width: 90px; height: 44px; display: block;' />
                         </div>
                         <!-- 1st part -->
                         <div style='display: flex'>
                              <div style='width: 50%; border-radius: 4px'>
                                   <p style='font-weight: 700;color: black;font-size: 12px;margin-top: 28px;'>
                                        Ticket No: {{ ticketDetails.pnrCode }}
                                   </p>
                                   <p style='font-size: 12px;color: #4d4d4f;margin-top: 16px;font-weight: 400;'>
                                        Name :
                                        <span style='font-weight: 600'>{{ ticketDetails.passenger.name }}</span>
                                   </p>
                                   <p style='font-size: 12px; color: #4d4d4f; margin-top: 10px'>
                                        Mobile Number:
                                        <span style='font-weight: 600'>{{ ticketDetails.passenger.phone }}</span>
                                   </p>
                                   <p style='font-size: 12px; color: #4d4d4f; margin-top: 10px'>
                                        Total Booked Seats:
                                   </p>
                                   <div v-if="downloadTicketStatus" style='display: flex; column-gap: 8px; margin-top: 4px'>
                                        <div v-for='seat in ticketDetails.seatNumbers' :key='seat'
                                             style='width: 32px; height: 32px; background-color: #f04935;color: white;font-size: 14px;display: flex;justify-content: center;align-items: center;border-radius: 4px;font-weight: 700; padding-bottom: 15px;'>
                                             {{ seat }}
                                        </div>
                                   </div>
                                   <div v-else style='display: flex; column-gap: 8px; margin-top: 4px'>
                                        <div v-for='seat in ticketDetails.seatNumbers' :key='seat'
                                             style='width: 32px; height: 32px; background-color: #f04935;color: white;font-size: 14px;display: flex;justify-content: center;align-items: center;border-radius: 4px;font-weight: 700;'>
                                             {{ seat }}
                                        </div>
                                   </div>
                              </div>
                              <div style='width: 50%;background-color: #f7f7f7;padding: 8px;border-radius: 4px;'>
                                   <p style='font-size: 12px;color: black;margin-top: 8px;font-weight: 600;'>
                                        Payment Details:
                                   </p>
                                   <div style='display: flex; justify-content: space-between; gap: 0; color: black; font-size: 12px; margin-top: 7px;'>
                                        <p>Ticket Fare:</p>
                                        <p>
                                             ৳ {{ Math.ceil((ticketDetails.payable + ticketDetails.discount) / ticketDetails.totalSeat) }} x {{ ticketDetails.totalSeat}}
                                        </p>
                                   </div>
                                   <div style='display: flex;justify-content: space-between;gap: 0;color: black;font-size: 12px;margin-top: 4px;'>
                                        <p>Total Fare:</p>
                                        <p>৳ {{ ticketDetails.payable + ticketDetails.discount }}</p>
                                   </div>
                                   <div v-if="ticketDetails.discount"
                                        style='display: flex;justify-content: space-between;gap: 0;color: black;font-size: 12px;margin-top: 4px;'>
                                        <p>Discount:</p>
                                        <p>৳ {{ ticketDetails.discount }}</p>
                                   </div>
                                   <div
                                        style='display: flex;justify-content: space-between;gap: 0;color: black;font-size: 12px;margin-top: 4px;'>
                                        <p>Service Charge:</p>
                                        <p>৳ {{ ticketDetails.serviceCharge }}</p>
                                   </div>
                                   <div
                                        style='display: flex;justify-content: space-between;gap: 0;color: black;font-size: 12px;margin-top: 4px;'>
                                        <p>Gateway Charge:</p>
                                        <p>৳ {{ ticketDetails.gatewayCharge }}</p>
                                   </div>
                                   <div
                                        style='display: flex;justify-content: space-between;gap: 0;color: #8d8d8f;font-size: 12px;border-bottom: 1px dashed #c4c4c4;margin-top: 4px;margin-bottom: 4px;margin-bottom: 4px;'>
                                   </div>
                                   <div
                                        style='display: flex;justify-content: space-between;gap: 0;color: #151414;font-size: 14px;font-weight: 500;margin-top: 4px;'>
                                        <p>Subtotal</p>
                                        <p>৳ {{ ticketDetails.totalAmount }}</p>
                                   </div>
                              </div>
                         </div>
                         <!-- 2nd part -->
                         <div
                              style='display: flex;background-color: #f7f7f7;padding: 8px;margin-top: 13px;padding-left: 10px;border-radius: 4px;'>
                              <div style='width: 50%; border-right: 1px dashed #dbdbdb'>
                                   <div style=''>
                                        <p style='font-size: 12px; color: #4d4d4f'>Trip Date:</p>
                                        <p style='font-size: 12px; color: black; font-weight: 600'>
                                             {{ tripDate }}
                                        </p>
                                   </div>
                                   <div style='margin-top: 11px'>
                                        <p style='font-size: 12px; color: #4d4d4f'>From:</p>
                                        <p style='font-size: 12px;color: black;margin-top: 4px;font-weight: 600;'>
                                             {{ ticketDetails.fromCity }}
                                        </p>
                                   </div>

                                   <div style='margin-top: 8px'>
                                        <p style='font-size: 12px; color: #4d4d4f'>
                                             Boarding Counter:
                                        </p>
                                        <p style='font-size: 14px;color: black;font-weight: 600;margin-top: 4px;'>
                                             {{ ticketDetails.boardingPlace }}
                                        </p>
                                   </div>

                                   <div style='margin-top: 8px'>
                                        <p style='font-size: 12px; color: #4d4d4f'>Reporting Time:</p>
                                        <p style='font-size: 12px;color: black;font-weight: 600;margin-top: 4px;'>
                                             {{ reportTimeWithAddTime }}
                                        </p>
                                   </div>
                              </div>
                              <div style='width: 50%; padding-left: 10px; border-radius: 4px'>
                                   <div style=''>
                                        <p style='font-size: 12px; color: #4d4d4f'>
                                             Departure Date & Time:
                                        </p>
                                        <p style='font-size: 14px;color: black;font-weight: 600;margin-top: 4px;'>
                                             {{ departureDateTime }}
                                        </p>
                                   </div>
                                   <div style='margin-top: 8px'>
                                        <p style='font-size: 12px; color: #4d4d4f'>To:</p>
                                        <p style='font-size: 12px;color: black;margin-top: 4px;font-weight: 600;'>
                                             {{ ticketDetails.toCity }}
                                        </p>
                                   </div>

                                   <div style='margin-top: 11px'>
                                        <p style='font-size: 12px; color: #4d4d4f'>Booking Date:</p>
                                        <p style='font-size: 14px;color: black;font-weight: 600;margin-top: 4px;'>
                                             {{ ticketDateTime }}

                                        </p>
                                   </div>

                                   <!-- <div style="margin-top: 11px">
                                        <p style="font-size: 12px; color: #4d4d4f">Issued By:</p>
                                        <p
                                             style="
                                             font-size: 12px;
                                             color: black;
                                             font-weight: 600;
                                             margin-top: 4px;
                                             "
                                        >
                                             Counterman Name
                                        </p>
                                   </div> -->
                              </div>
                         </div>
                         <!-- 3rd part  -->
                         <div style='border: 1px solid #dbdbdb;margin-top: 10px;padding-top: 10px;padding-left: 8px;border-radius: 4px;'>
                              <div style='display: flex'>
                                   <div style='width: 50%'>
                                        <p style='font-size: 12px; color: #151414; font-weight: 600'>
                                             1. Terms and condition
                                        </p>
                                        <p style='color: #4d4d4f;font-size: 11px;margin-left: 21px;margin-top: 4px;'>
                                             Please check the Terms and Conditions from <br />
                                             <span style='font-weight: 600'>https://cutt.ly/RF2DHfY</span>
                                        </p>
                                   </div>

                                   <div style='width: 50%'>
                                        <p style='font-size: 12px; color: #151414; font-weight: 600'>
                                             2. Cancel Policy
                                        </p>
                                        <p style='color: #4d4d4f;font-size: 11px;margin-left: 21px;margin-top: 4px;'>
                                             Please check the Cancellation Policy from <br />
                                             <span style='font-weight: 600'>
                                                  https://cutt.ly/KF2DPJH</span>
                                        </p>
                                   </div>
                              </div>
                              <div style='display: flex; justify-content: space-between; margin-left: 20px;align-items: center; margin-top: 14px;'>
                                   <div style='display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; text-align: left;'>
                                        <p style='color: #676769; font-size: 11px'>Get in touch</p>
                                        <div v-if="downloadTicketStatus" style='display: flex;column-gap: 10px;margin-top: 6px;align-items: center;'>
                                             <img :src="require('@/assets/images/ticket/mail.svg')" alt=''
                                                  style='width: 17px; height: 15px; display: inline-block;' />
                                             <span style='text-align: center;margin-bottom:15px;font-weight: 600;'>
                                                  {{ getSearchedTicketList.supportEmail || email }}
                                             </span>
                                        </div>
                                        <div v-else style='display: flex;column-gap: 10px;margin-top: 6px;align-items: center;'>
                                             <img :src="require('@/assets/images/ticket/mail.svg')" alt=''
                                                  style='width: 17px; height: 15px; display: inline-block;' />
                                             <span style='text-align: center;font-weight: 600;'>
                                                  {{ getSearchedTicketList.supportEmail || email }}
                                             </span>
                                        </div>
                                   </div>

                                   <div style='display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; text-align: left;'>
                                        <p style='color: #676769; font-size: 11px'>Call us</p>
                                        <div v-if="downloadTicketStatus" style='display: flex; column-gap: 10px; margin-top: 6px; align-items: center;'>
                                             <img :src="require('@/assets/images/ticket/phone.svg')" alt=''
                                                  style='width: 15px; height: 15px; display: inline-block;' />
                                             <span style='text-align: center;margin-bottom:15px;font-weight: 600;'>
                                                  {{ getSearchedTicketList.supportPhone || phone }}
                                             </span>
                                        </div>
                                        <div v-else style='display: flex; column-gap: 10px; margin-top: 6px; align-items: center;'>
                                             <img :src="require('@/assets/images/ticket/phone.svg')" alt=''
                                                  style='width: 15px; height: 15px; display: inline-block;' />
                                             <span style='text-align: center;font-weight: 600;'>
                                                  {{ getSearchedTicketList.supportPhone || phone }}
                                             </span>
                                        </div>
                                   </div>

                                   <div style='display: flex; column-gap: 10px; justify-content: flex-end; align-items: center;'>
                                        <div>
                                             <p style='color: #676769; font-size: 11px'>Download App</p>
                                             <p style='color: #151414; font-size: 11px; margin-top: 6px'>
                                                  Get latest updates
                                             </p>
                                        </div>
                                        <img :src="require('@/assets/images/ticket/qr.png')" alt=''
                                             style='height: 60px; width: 60px; margin: 5px; padding: 5px' />
                                   </div>
                              </div>
                         </div>
                         <!-- <hr style="margin-top: 10px; border-top: 1px dashed #DBDBDB;"> -->
                         <p>&nbsp;</p>
                         <div style='width: 100%;background-image: linear-gradient(to right,#dbdbdb 50%,rgba(255, 255, 255, 0) 0%);background-position: top;background-size: 10px 1px;background-repeat: repeat-x;padding-top: 2px;'>
                         </div>
                         <!-- 4th part -->
                         <div style='display: flex;background-color: #f7f7f7;margin-top: 10px;padding-top: 2px;padding-bottom: 2px;border-radius: 4px;'>
                              <div style='width: 62%;border-radius: 4px;border-right: 1px dashed #c4c4c4;'>
                                   <p style='padding: 10px; margin-bottom: 16px'>
                                        Passenger Details:
                                   </p>
                                   <div style='display: flex;justify-content: space-between;padding: 10px;'>
                                        <div style='width: 50%'>
                                             <p style='font-weight: 700; color: black; font-size: 12px'>
                                                  <span style='font-weight: 400'>Ticket No:</span> {{
                                                            ticketDetails.pnrCode
                                                  }}
                                             </p>
                                             <p
                                                  style='font-weight: 400;color: black;font-size: 12px;margin-top: 8px;font-weight: 600;'>
                                                  <span style='font-weight: 400'> From:</span> {{
                                                            ticketDetails.fromCity
                                                  }}
                                             </p>
                                             <p style='font-size: 11px; color: #4d4d4f; margin-top: 8px'>
                                                  Boarding Counter:
                                             </p>
                                             <p style='color: #151414;font-weight: 600;font-size: 12px;margin-top: 1px;'>
                                                  {{ ticketDetails.boardingPlace }}
                                             </p>
                                             <p style='font-size: 12px; margin-top: 8px; font-weight: 600'>
                                                  <span style='color: #4d4d4f; font-weight: 400'>
                                                       Reporting time:</span>
                                                  {{ reportTimeWithAddTime }}
                                             </p>
                                             <!-- <p style="font-size: 12px; margin-top: 8px; font-weight: 600">
                                                       <span style="color: #4d4d4f; font-weight: 400">
                                                       Issued by:</span
                                                  >
                                                  Counterman Name
                                                  </p> -->
                                        </div>
                                        <div style='width: 50%'>
                                             <p style='font-size: 12px; color: #000; font-weight: 600'>
                                                  <span style='color: #4d4d4f; font-weight: 400; color: #151414;'>
                                                       Trip Date:</span>
                                                  {{ tripDate }}
                                             </p>
                                             <p style='font-weight: 600;color: black;font-size: 12px;margin-top: 8px;'>
                                                  <span style='font-weight: 400'>To:</span> {{ ticketDetails.toCity
                                                  }}
                                             </p>

                                             <p style='color: #4d4d4f; font-size: 11px; margin-top: 8px'>
                                                  Departure Date & Time:
                                             </p>
                                             <p
                                                  style='font-size: 12px;color: #151414;font-weight: 600;margin-top: 1px;'>
                                                  {{ departureDateTime }}
                                             </p>
                                             <p style='color: #000;font-size: 12px;margin-top: 8px;font-weight: 600;'>
                                                  <span style='font-weight: 400; color: #4d4d4f;'>Booking Date:</span>
                                                  {{ ticketDateTime }}
                                             </p>
                                        </div>
                                   </div>
                              </div>

                              <div style='width: 38%;padding: 8px;border-radius: 4px;padding-left: 16px;'>
                                   <p style='font-size: 12px; color: black; margin-bottom: 16px;font-weight: 600;'>
                                        Payment Details:
                                   </p>
                                   <div
                                        style='display: flex;justify-content: space-between;gap: 0;color: black;font-size: 12px;'>
                                        <p>Ticket Fare:</p>
                                        <p>
                                             ৳ {{ Math.ceil((ticketDetails.payable + ticketDetails.discount) / ticketDetails.totalSeat) }} x {{ ticketDetails.totalSeat }}</p>
                                   </div>
                                   <div
                                        style='display: flex;justify-content: space-between;gap: 0;color: black;font-size: 12px;margin-top: 4px;'>
                                        <p>Total Fare:</p>
                                        <p>৳ {{ ticketDetails.payable + ticketDetails.discount }}</p>
                                   </div>
                                   <div v-if="ticketDetails.discount"
                                        style='display: flex;justify-content: space-between;gap: 0;color: black;font-size: 12px;margin-top: 4px;'>
                                        <p>Discount:</p>
                                        <p>৳ {{ ticketDetails.discount }}</p>
                                   </div>
                                   <div
                                        style='display: flex;justify-content: space-between;gap: 0;color: black;font-size: 12px;margin-top: 4px;'>
                                        <p>Service Charge:</p>
                                        <p>৳ {{ ticketDetails.serviceCharge }}</p>
                                   </div>
                                   <div
                                        style='display: flex;justify-content: space-between;gap: 0;color: black;font-size: 12px;margin-top: 4px;'>
                                        <p>Gateway Charge:</p>
                                        <p>৳ {{ ticketDetails.gatewayCharge }}</p>
                                   </div>
                                   <div style='display: flex;justify-content: space-between;gap: 0;color: #8d8d8f;font-size: 12px;border-bottom: 1px dashed #c4c4c4;margin-top: 4px;margin-bottom: 4px;'>

                                   </div>
                                   <div style='display: flex;justify-content: space-between;gap: 0;color: black;font-size: 14px;font-weight: 500;margin-top: 4px;'>
                                        <p>Subtotal</p>
                                        <p>৳ {{ ticketDetails.totalAmount }}</p>
                                   </div>
                              </div>
                         </div>
                         <p style='text-align: center;font-size: 12px;color: #151414;font-weight: 600;margin-top: 10px;'>
                              N.B: Please carry print out or soft copy to collect your counter
                              ticket copy.
                         </p>
                    </div>
                    <!-- Footer part -->
                    <div style='background-color: #f04935;padding-left: 24px;margin-top: 9px;padding-right: 24px;padding-top: 12px;padding-bottom: 12px;'>
                         <div style='display: flex; justify-content: space-between'>
                              <div style='display: flex;column-gap: 10px;justify-content: center;align-items: center;'>
                                   <p style='color: white; font-size: 12px'>Powered by:</p>
                                   <img :src="require('@/assets/images/ticket/logo-white.png')" alt=''
                                        style='width: 50px; height: 25px' />
                              </div>
                              <p style='color: white; font-size: 14px'>www.jatri.co</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import { dateTimeFormat, timeFormat } from '@/helpers/dateTimeFormat';
import { mapGetters } from 'vuex';
export default {
     props: ['ticketDetails', 'email', 'phone', 'downloadTicketStatus'],
     computed: {
          ...mapGetters('guarantedseat', ['getSearchedTicketList']),
          reportTimeWithAddTime() {
               return this.ticketDetails && timeFormat(this.ticketDetails.reportingDateTime, 0, 'hh:mm A');
          },
          departureDateTime() {
               return this.ticketDetails && dateTimeFormat(this.ticketDetails.boardingDateTime, 0, 'lll');
          },
          tripDate() {
               return this.ticketDetails && dateTimeFormat(this.ticketDetails.departureDateTime, 0, 'll');
          },
          ticketDateTime() {
               return this.ticketDetails && dateTimeFormat(this.ticketDetails.ticketDateTime, 0, 'll');
          },
          issuedOn() {
               return this.ticketDetails && dateTimeFormat(this.ticketDetails.createdAt, 0, 'lll');
          }
     }
}
</script>

<style>

</style>