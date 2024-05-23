<template>
  <div style="width: 100%; overflow-x: auto; overflow-y: hidden">
    <div
      style="
        width: 800px;
        background-color: white;
        font-family: 'Inter', sans-serif;
      "
    >
      <!-- ========= Heading Part ZLECIV1HGIZZM13 0TSWKD8WGXOEFNF ========= -->

      <img
        v-if="ticketDetails.tripType === 'eid'"
        :src="require('@/assets/images/ticket/eidHeader.svg')"
        alt=""
        style="width: 800px; height: 50px;background-repeat: no-repeat; object-fit: cover;"
      />
      <img
        v-else
        :src="require('@/assets/images/ticket/header.svg')"
        alt=""
        style="width: 800px; height: 50px;background-repeat: no-repeat; object-fit: cover;"
      />

      <!-- ========= Main Part ========= -->
      <div style="padding-left: 24px; padding-right: 24px">
        <!-- ========= Top Heading ========= -->
        <div
          style="
            display: flex;
            gap: 0.5rem;
            margin-top: 16px;
            margin-bottom: 16px;
          "
        >
          <img
            v-if="ticketDetails.companyImage"
            src="ticketDetails.companyImage"
            alt=""
            style="height: 32px; width: auto; border-radius: 100%"
          />
          <div>
            <p
              style="
                color: #151414;
                font-size: 19px;
                font-weight: 700;
                line-height: 20px;
                margin-bottom: 4px;
              "
            >
              {{ ticketDetails.companyName }}
            </p>
            <p
              style="
                color: #151414;
                font-size: 16px;
                font-weight: 500;
                line-height: 16px;
              "
            >
              Coach No: {{ ticketDetails.coach }}
            </p>
          </div>
        </div>
        <!-- ========= Passenger Details ========= -->
        <div
          style="
            width: 100%;
            border: 2px solid #fde5e2;
            border-radius: 10px;
            margin-bottom: 12px;
          "
        >
          <p
            style="
              padding: 10px;
              background-color: #fde5e2;
              font-size: 16px;
              font-weight: 600;
            "
          >
            Passenger Details:
          </p>
          <img
            v-if="ticketDetails.tripType === 'eid'"
            :src="require('@/assets/images/ticket/eidStamp.svg')"
            alt="eidStamp"
            style="
              width: 295px;
              height: 112px;
              top: 53px;
              left: 500px;
              position: absolute;
              z-index: 999;
            "
          />
          <div
            style="
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
              color: #151414;
              font-size: 16px;
              line-height: 18px;
              padding: 10px;
              gap: 12px;
            "
          >
            <p style="color: #494949; font-weight: 400">Name</p>
            <p style="font-weight: 500">{{ ticketDetails.passenger.name }}</p>
            <p style="color: #494949; font-weight: 400">Bus Type</p>
            <p style="font-weight: 500">
              {{
                serviceType === "BUS"
                  ? ticketDetails.coachType
                  : ticketDetails.shipType
              }}
            </p>
            <p style="color: #494949; font-weight: 400">Mobile Number</p>
            <p style="font-weight: 500">
              {{ ticketDetails.passenger.phone }}
            </p>
            <p style="color: #494949; font-weight: 400">Selected Seat</p>
            <table style="border-collapse: collapse">
              <tbody>
                <tr>
                  <td
                    v-for="seat in ticketDetails.seatNumbers"
                    :key="seat"
                    style="
                      background: #f04935;
                      border-radius: 4px;
                      color: #fff;
                      font-weight: 500;
                      padding: 4px;
                    "
                  >
                    <span style="margin-right: 3px">{{ seat }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- ========= Journey & Payment Details ========= -->
        <div style="display: flex">
          <div
            style="
              width: 59%;
              border: 2px solid #fde5e2;
              border-radius: 10px;
              margin-right: 12px;
            "
          >
            <p
              style="
                padding: 10px;
                background-color: #fde5e2;
                font-size: 18px;
                font-weight: 600;
              "
            >
              Journey Details:
            </p>
            <div
              style="
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                color: #151414;
                font-size: 16px;
                padding: 14px;
                gap: 10px;
              "
            >
              <p style="color: #676769; font-weight: 400">Ticket No</p>
              <p style="font-weight: 500">{{ ticketDetails.pnrCode }}</p>
              <p style="color: #676769; font-weight: 400">From</p>
              <p style="font-weight: 500">{{ ticketDetails.fromCity }}</p>
              <p style="color: #676769; font-weight: 400">To</p>
              <p style="font-weight: 500">{{ ticketDetails.toCity }}</p>
              <p style="color: #676769; font-weight: 400">
                Departure Time & Date
              </p>
              <p style="font-weight: 500">{{ departureDateTime }}</p>
              <p style="color: #676769; font-weight: 400">Boarding counter</p>
              <p style="font-weight: 500">
                {{ ticketDetails.boardingPlace }}
              </p>
              <p style="color: #676769; font-weight: 400">Dropping counter</p>
              <p style="font-weight: 500">{{ ticketDetails.dropingPlace }}</p>
              <p style="color: #676769; font-weight: 400">
                Reporting Date &Time
              </p>
              <p style="font-weight: 500">{{ reportTimeWithAddTime }}</p>
              <p style="color: #676769; font-weight: 400">Issued by</p>
              <p style="font-weight: 500">Jatri Online</p>
              <p style="color: #676769; font-weight: 400">Issue Date &Time</p>
              <p style="font-weight: 500">{{ issuedOn }}</p>
            </div>
          </div>
          <div
            style="width: 40%; border: 2px solid #fde5e2; border-radius: 10px"
          >
            <p
              style="
                padding: 10px;
                background-color: #fde5e2;
                font-size: 18px;
                font-weight: 600;
              "
            >
              Payment Details:
            </p>
            <div
              v-for="(tickets, i) in seatFareArray"
              :key="i"
              style="
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                font-size: 16px;
                padding-top: 6px;
                padding-left: 14px;
                padding-right: 14px;
              "
            >
              <p
                style="
                  color: #494949;
                  font-weight: 400;
                  grid-column: span 2 / span 2;
                "
              >
                Ticket Fare Seat (
                <span v-for="sit in tickets.seat" :key="sit">{{ sit }}, </span>
                )
              </p>
              <p style="font-weight: 600; text-align: right">
                {{ tickets.fare }}
              </p>
            </div>
            <div
              style="
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                color: #151414;
                font-size: 14px;
                padding: 6px 14px;
                gap: 10px;
              "
            >
              <div
                style="
                  grid-column: span 2 / span 2;
                  color: #8d8d8f;
                  font-size: 14px;
                  border-bottom: 1px dashed #c4c4c4;
                  margin-bottom: 4px;
                "
              ></div>
              <p style="color: #494949; font-weight: 400">Sub total</p>
              <p style="font-weight: 600; text-align: right">
                {{ ticketDetails.payable }} ৳
              </p>
              <p
                style="color: #494949; font-weight: 400"
                v-if="ticketDetails.discount"
              >
                Discount:
              </p>
              <p
                v-if="ticketDetails.discount"
                style="font-weight: 600; text-align: right"
              >
                - {{ ticketDetails.discount }} ৳
              </p>
              <p
                style="color: #494949; font-weight: 400"
                v-if="ticketDetails.promo"
              >
                Promo:
              </p>
              <p
                v-if="ticketDetails.promo"
                style="font-weight: 600; text-align: right"
              >
                - {{ ticketDetails.promo }} ৳
              </p>
              <p style="color: #494949; font-weight: 400">Service Charge:</p>
              <p style="font-weight: 600; text-align: right">
                {{ ticketDetails.serviceCharge }} ৳
              </p>
              <p style="color: #494949; font-weight: 400">Gateway Charge:</p>
              <p style="font-weight: 600; text-align: right">
                {{ ticketDetails.gatewayCharge }} ৳
              </p>
              <div
                style="
                  grid-column: span 2 / span 2;
                  color: #8d8d8f;
                  font-size: 14px;
                  border-bottom: 1px dashed #c4c4c4;
                  margin-bottom: 4px;
                "
              ></div>
              <p style="color: #494949; font-weight: 400">Total</p>
              <p style="font-weight: 600; text-align: right">
                {{ ticketDetails.totalAmount }} ৳
              </p>
            </div>
          </div>
        </div>
        <!-- ========= T&C Condition part =========  -->
        <div
          style="
            background-color: #f7f7f7;
            margin-top: 10px;
            padding: 4px 10px 4px 10px;
            border-radius: 8px;
          "
        >
          <div style="display: flex">
            <div style="width: 50%">
              <p
                style="
                  font-size: 14px;
                  color: #151414;
                  font-weight: 600;
                  margin-bottom: 6px;
                "
              >
                Terms and condition
              </p>
              <ul
                style="
                  list-style-type: disc;
                  color: #151414;
                  font-size: 11px;
                  font-weight: 400;
                  padding-left: 20px;
                "
              >
                <li>
                  The ticket will be treated as canceled if the passenger fails
                  to report at the reporting station 15 minutes before the bus
                  arrival
                </li>
                <li>
                  The authority reserves the right to change schedules/seats in
                  case of emergencies
                </li>
                <li>
                  The authority will not be responsible for any illegal goods
                  carried by the passenger
                </li>
                <li>
                  Passengers may cancel his/her tickets 24 hours before the time
                  of the journey
                </li>
                <li>Jatri.co will not be responsible for:</li>
                <li>The bus operator changing the ticket price.</li>
                <li>The bus not departing/ reaching on time.</li>
                <li>
                  The bus operator canceled the trip due to unavoidable reasons.
                </li>
              </ul>
              <p
                style="
                  color: #f04935;
                  font-size: 12px;
                  font-weight: 400;
                  margin-top: 5px;
                "
              >
                *Trip may delay due to traffics during occasionsfont-size: 12px;
              </p>
            </div>

            <div style="width: 49%; margin-left: 10px">
              <p
                style="
                  font-size: 14px;
                  color: #151414;
                  font-weight: 600;
                  margin-bottom: 6px;
                "
              >
                Cancel Policy
              </p>
              <ul
                style="
                  list-style-type: disc;
                  color: #151414;
                  font-size: 11px;
                  font-weight: 400;
                  padding-left: 17px;
                "
              >
                <li>
                  Cancellation & Refund of tickets will be made as per policy
                  mentioned in the ticket.jatri.co and subject to the bus
                  operator's approval.
                </li>
                <li>
                  You must apply for cancellation & refund 24 hours before trip
                  departure time (excluding 12 AM to 7 AM).
                </li>
                <li>
                  In case of refund, it will take 7 working days for MFS(bKash,
                  Nagad) and 12/15 working days for SSL Commerz/ Bank payment.
                </li>
                <li>
                  No ticket will be refunded unless it has been canceled as per
                  the cancellation/refund policy.
                </li>
                <li>
                  If the Bus operator cancels the trip after this period, you
                  must apply for a refund within 24 hours of the trip departure
                  time.
                </li>
              </ul>
              <p
                style="
                  color: #f04935;
                  font-size: 12px;
                  font-weight: 400;
                  margin-top: 5px;
                "
              >
                *Applicable if only the ticket is cancellable
              </p>
            </div>
          </div>
        </div>
        <!-- ========= social part =========  -->
        <div
          v-if="ticketDetails.tripType === 'eid'"
          class="flex justify-between"
        >
          <div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 17px;
                margin-top: 24px;
              "
            >
              <div class="flex gap-x-2">
                <img
                  :src="require('@/assets/images/ticket/mail.svg')"
                  alt=""
                  style="width: 19px; height: 17px; display: inline-block"
                />
                <div>
                  <p style="color: #4d4d4f; font-size: 12px; font-weight: 500">
                    Get in touch
                  </p>
                  <p style="color: #151414; font-size: 14px; font-weight: 600">
                    {{ getSearchedTicketList.supportEmail || email }}
                  </p>
                </div>
              </div>

              <div class="flex gap-x-2">
                <img
                  :src="require('@/assets/images/ticket/phone.svg')"
                  alt=""
                  style="width: 17px; height: 17px; display: inline-block"
                />
                <div>
                  <p style="color: #4d4d4f; font-size: 12px; font-weight: 500">
                    Call us
                  </p>
                  <p style="color: #151414; font-size: 14px; font-weight: 600">
                    {{ getSearchedTicketList.supportPhone || phone }}
                  </p>
                </div>
              </div>

              <div class="flex gap-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.406 1.20996L9.19467 8.00063L2.40667 14.7913C2.28596 14.7405 2.18295 14.6552 2.11059 14.5461C2.03824 14.437 1.99976 14.3089 2 14.178V1.82329C2.00005 1.69251 2.03857 1.56463 2.11076 1.45557C2.18295 1.34651 2.28563 1.2611 2.406 1.20996ZM9.666 8.47196L11.2007 10.0066L3.90933 14.2286L9.666 8.47196ZM11.7987 6.33996L13.67 7.42396C13.771 7.48256 13.8549 7.56668 13.9132 7.66789C13.9715 7.76909 14.0022 7.88383 14.0022 8.00063C14.0022 8.11742 13.9715 8.23216 13.9132 8.33337C13.8549 8.43457 13.771 8.51869 13.67 8.57729L11.798 9.66129L10.1373 8.00063L11.7987 6.33996ZM3.90933 1.77263L11.2013 5.99396L9.666 7.52929L3.90933 1.77263Z"
                    fill="#F04935"
                  />
                </svg>
                <div>
                  <p style="color: #4d4d4f; font-size: 12px; font-weight: 500">
                    Download App
                  </p>
                  <p style="color: #151414; font-size: 14px; font-weight: 600">
                    Get latest updates
                  </p>
                </div>
              </div>
              <img
                :src="require('@/assets/images/ticket/qr.png')"
                alt=""
                style="height: 50px; width: 50px"
              />
            </div>
            <div
              style="
                font-size: 12px;
                color: #151414;
                font-weight: 400;
                line-height: 16px;
                margin-top: 12px;
                padding: 4px;
                margin-bottom: 24px;
              "
            >
              <p class="text-[#f04935]">
                This is a Eid ticket it is non cancellable & non refundable
              </p>
              <p>
                N.B: Please carry print copy or soft copy to collect your
                counter ticket copy.
              </p>
            </div>
          </div>
          <img
            :src="require('@/assets/images/ticket/eidFooter.svg')"
            alt="eidStamp"
            style="top: 880px; left: 650px; position: absolute"
          />
        </div>
        <div
          v-else
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 16px;
            margin-left: 55px;
            margin-right: 55px;
            align-items: center;
          "
        >
          <div
            style="
              display: flex;
              column-gap: 12px;
              justify-content: flex-start;
              align-items: start;
            "
          >
            <div
              v-if="downloadTicketStatus"
              style="
                display: flex;
                column-gap: 12px;
                margin-top: 6px;
                align-items: start;
              "
            >
              <img
                :src="require('@/assets/images/ticket/mail.svg')"
                alt=""
                style="width: 19px; height: 17px; display: inline-block"
              />
              <div>
                <p style="color: #4d4d4f; font-size: 12px; font-weight: 500">
                  Get in touch
                </p>
                <p style="color: #151414; font-size: 14px; font-weight: 600">
                  {{ getSearchedTicketList.supportEmail || email }}
                </p>
              </div>
            </div>
            <div
              v-else
              style="
                display: flex;
                column-gap: 12px;
                margin-top: 6px;
                align-items: start;
              "
            >
              <img
                :src="require('@/assets/images/ticket/mail.svg')"
                alt=""
                style="width: 19px; height: 17px; display: inline-block"
              />
              <div>
                <p style="color: #4d4d4f; font-size: 12px; font-weight: 500">
                  Get in touch
                </p>
                <p style="color: #151414; font-size: 14px; font-weight: 600">
                  {{ getSearchedTicketList.supportEmail || email }}
                </p>
              </div>
            </div>
          </div>

          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
              text-align: left;
            "
          >
            <div
              v-if="downloadTicketStatus"
              style="
                display: flex;
                column-gap: 12px;
                margin-top: 6px;
                align-items: start;
              "
            >
              <img
                :src="require('@/assets/images/ticket/phone.svg')"
                alt=""
                style="width: 17px; height: 17px; display: inline-block"
              />
              <div>
                <p style="color: #4d4d4f; font-size: 12px; font-weight: 500">
                  Call us
                </p>
                <p style="color: #151414; font-size: 14px; font-weight: 600">
                  {{ getSearchedTicketList.supportPhone || phone }}
                </p>
              </div>
            </div>
            <div
              v-else
              style="
                display: flex;
                column-gap: 12px;
                margin-top: 6px;
                align-items: start;
              "
            >
              <img
                :src="require('@/assets/images/ticket/phone.svg')"
                alt=""
                style="width: 17px; height: 17px; display: inline-block"
              />
              <div>
                <p style="color: #4d4d4f; font-size: 12px; font-weight: 500">
                  Call us
                </p>
                <p style="color: #151414; font-size: 14px; font-weight: 600">
                  {{ getSearchedTicketList.supportPhone || phone }}
                </p>
              </div>
            </div>
          </div>

          <div style="display: flex; column-gap: 12px; align-items: center">
            <svg
              style="margin-bottom: 4px"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.406 1.20996L9.19467 8.00063L2.40667 14.7913C2.28596 14.7405 2.18295 14.6552 2.11059 14.5461C2.03824 14.437 1.99976 14.3089 2 14.178V1.82329C2.00005 1.69251 2.03857 1.56463 2.11076 1.45557C2.18295 1.34651 2.28563 1.2611 2.406 1.20996ZM9.666 8.47196L11.2007 10.0066L3.90933 14.2286L9.666 8.47196ZM11.7987 6.33996L13.67 7.42396C13.771 7.48256 13.8549 7.56668 13.9132 7.66789C13.9715 7.76909 14.0022 7.88383 14.0022 8.00063C14.0022 8.11742 13.9715 8.23216 13.9132 8.33337C13.8549 8.43457 13.771 8.51869 13.67 8.57729L11.798 9.66129L10.1373 8.00063L11.7987 6.33996ZM3.90933 1.77263L11.2013 5.99396L9.666 7.52929L3.90933 1.77263Z"
                fill="#F04935"
              />
            </svg>

            <div>
              <p style="color: #4d4d4f; font-size: 12px; font-weight: 500">
                Download App
              </p>
              <p style="color: #151414; font-size: 14px; font-weight: 600">
                Get latest updates
              </p>
            </div>
            <img
              :src="require('@/assets/images/ticket/qr.png')"
              alt=""
              style="height: 60px; width: 60px; margin: 5px; padding: 5px"
            />
          </div>
        </div>
        <div
          v-if="ticketDetails.tripType != 'eid'"
          style="
            font-size: 12px;
            color: #151414;
            font-weight: 400;
            line-height: 16px;
            margin-top: 12px;
            margin-bottom: 20px;
          "
        >
          <p class="text-center">
            N.B: Please carry print copy or soft copy to collect your counter
            ticket copy.
          </p>
        </div>
      </div>
      <!-- ========= Footer part ========= -->
      <div style="background-color: #f04935 !important; padding: 14px 110px">
        <div style="display: flex; justify-content: space-between">
          <div
            style="
              display: flex;
              column-gap: 12px;
              justify-content: center;
              align-items: center;
            "
          >
            <p style="color: white; font-size: 14px">Powered by:</p>
            <img
              :src="require('@/assets/images/ticket/logo-white.png')"
              alt=""
              style="width: 50px; height: 25px"
            />
          </div>
          <p style="color: white; font-size: 16px">www.jatri.co</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateTimeFormat } from "@/helpers/dateTimeFormat";
import { mapGetters } from "vuex";
export default {
  props: [
    "ticketDetails",
    "email",
    "phone",
    "downloadTicketStatus",
    "ticketFareString",
    "serviceType",
    "seatFareArray",
  ],
  computed: {
    ...mapGetters("common", ["getSearchedTicketList"]),
    reportTimeWithAddTime() {
      return (
        this.ticketDetails &&
        dateTimeFormat(this.ticketDetails.reportingDateTime, 0, "lll")
      );
    },
    departureDateTime() {
      return (
        this.ticketDetails &&
        dateTimeFormat(this.ticketDetails.boardingDateTime, 0, "lll")
      );
    },
    ticketDateTime() {
      return (
        this.ticketDetails &&
        dateTimeFormat(this.ticketDetails.ticketDateTime, 0, "lll")
      );
    },
    issuedOn() {
      return (
        this.ticketDetails &&
        dateTimeFormat(this.ticketDetails.createdAt, 0, "lll")
      );
    },
  },
};
</script>

<style></style>
