<template>
  <div
    style="
      width: 595px;
      background-color: white;
      font-family: 'Inter', sans-serif;
    "
  >
    <img
      v-if="ticketDetails.tripType === 'eid'"
      :src="require('@/assets/images/ticket/eidHeader.svg')"
      alt=""
      style="height: 44px; background-repeat: no-repeat; object-fit: cover"
    />
    <img
      v-else
      :src="require('@/assets/images/ticket/header.svg')"
      alt=""
      style="height: 44px; background-repeat: no-repeat; object-fit: cover"
    />

    <!-- ========= Main Part ========= -->

    <!-- ========= Top Heading ZLECIV1HGIZZM13 YHV91C95TNC2HC6 ========= -->
    <div
      style="
        display: flex;
        gap: 16px;
        margin-top: 6px;
        margin-bottom: 12px;
        margin-left: 16px;
        margin-right: 16px;
      "
    >
      <img
        v-if="ticketDetails.companyImage"
        :src="imageUrl + ticketDetails.companyImage"
        alt=""
        style="height: 32px; width: auto; border-radius: 100%"
      />
      <div>
        <p
          style="
            color: #151414;
            font-size: 14px;
            font-weight: 700;
            line-height: 20px;
          "
        >
          {{ ticketDetails.companyName }}
        </p>
        <p
          style="
            color: #151414;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
          "
        >
          {{ ticketDetails.coach }}
        </p>
      </div>
    </div>

    <div
      style="
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        margin-left: 16px;
        margin-right: 16px;
      "
    >
      <!-- ========= Passenger Details ========= -->
      <div
        style="
          display: flex;
          width: 563px;
          flex-direction: column;
          align-items: flex-start;
        "
      >
        <div
          style="
            display: flex;
            padding-left: 12px;
            padding-bottom: 12px;
            padding-top: 2px;
            padding-right: 8px;
            align-items: center;
            align-self: stretch;
            border-radius: 8px 8px 0px 0px;
            background: #fde5e2;
          "
        >
          <p style="font-size: 12px; font-weight: 600; line-height: 16px">
            Passenger Details:
          </p>
        </div>
        <img
          v-if="ticketDetails.tripType === 'eid'"
          :src="require('@/assets/images/ticket/eidStamp.svg')"
          alt="eidStamp"
          style="
            width: 295px;
            height: 112px;
            top: 42px;
            left: 302px;
            position: absolute;
            z-index: 999;
          "
        />
        <div
          style="
            display: flex;
            padding: 8px;
            align-items: flex-start;
            gap: 31px;
            align-self: stretch;
            border-radius: 0px 0px 8px 8px;
            border-right: 1px solid #fde5e2;
            border-bottom: 1px solid #fde5e2;
            border-left: 1px solid #fde5e2;
            background: #fff;
            font-size: 12px;
            line-height: 16px;
          "
        >
          <div
            style="
              display: flex;
              align-items: flex-start;
              gap: 14px;
              flex: 1 0 0;
            "
          >
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
              "
            >
              <p style="color: #494949; font-weight: 400">Name</p>
              <p style="color: #494949; font-weight: 400">Mobile Number</p>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
              "
            >
              <p style="font-weight: 500">
                {{ ticketDetails.passenger.name }}
              </p>
              <p style="font-weight: 500">
                {{ ticketDetails.passenger.phone }}
              </p>
            </div>
          </div>
          <div
            style="
              display: flex;
              align-items: flex-start;
              gap: 14px;
              flex: 1 0 0;
            "
          >
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
              "
            >
              <p style="color: #494949; font-weight: 400">Bus Type</p>
              <p style="color: #494949; font-weight: 400">Selected Seat</p>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
              "
            >
              <p style="font-weight: 500">
                {{
                  serviceType === "BUS"
                    ? ticketDetails.coachType
                    : ticketDetails.shipType
                }}
              </p>
              <div style="display: flex; gap: 4px">
                <div
                  v-for="seat in ticketDetails.seatNumbers"
                  style="
                    background: #f04935;
                    border-radius: 4px;
                    display: flex;
                    padding-left: 8px;
                    padding-bottom: 9px;
                    padding-right: 8px;
                    flex-direction: column;
                    align-items: flex-start;
                  "
                  :key="seat"
                >
                  <span
                    style="
                      color: #fff;
                      font-size: 12px;
                      font-weight: 500;
                      line-height: 15px;
                    "
                    >{{ seat }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ========= Journey & Payment Details ========= -->
      <div
        style="
          display: flex;
          align-items: flex-start;
          gap: 8px;
          align-self: stretch;
        "
      >
        <div
          style="
            display: flex;
            width: 328px;
            flex-direction: column;
            align-items: flex-start;
            align-self: stretch;
          "
        >
          <div
            style="
              display: flex;
              height: 28px;
              padding-left: 12px;
              padding-bottom: 12px;
              padding-top: 2px;
              padding-right: 8px;
              border-radius: 8px 8px 0px 0px;
              background: #fde5e2;
              align-items: center;
              gap: 2px;
              align-self: stretch;
            "
          >
            <p style="font-size: 12px; font-weight: 600; line-height: 16px">
              Journey details:
            </p>
          </div>
          <div
            style="
              color: #151414;
              font-size: 12px;
              line-height: 16px;
              display: flex;
              padding: 6px 8px 12px 12px;
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;
              flex: 1 0 0;
              align-self: stretch;
              border-radius: 0px 0px 8px 8px;
              border-right: 1px solid #fde5e2;
              border-bottom: 1px solid #fde5e2;
              border-left: 1px solid #fde5e2;
            "
          >
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;
                align-self: stretch;
              "
            >
              <div
                style="
                  display: flex;
                  align-items: flex-start;
                  gap: 8px;
                  align-self: stretch;
                "
              >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 8px;
                    flex: 1 0 0;
                  "
                >
                  <p style="color: #676769; font-weight: 400">Ticket No</p>
                  <p style="color: #676769; font-weight: 400">From</p>
                  <p style="color: #676769; font-weight: 400">To</p>
                  <p style="color: #676769; font-weight: 400">
                    Departure Time & Date
                  </p>
                  <p style="color: #676769; font-weight: 400">
                    Boarding counter
                  </p>
                  <p
                    v-if="ticketDetails.droppingPoint"
                    style="color: #676769; font-weight: 400"
                  >
                    Dropping counter
                  </p>
                  <p style="color: #676769; font-weight: 400">
                    Reporting Date &Time
                  </p>
                  <p style="color: #676769; font-weight: 400">Issued by</p>
                  <p style="color: #676769; font-weight: 400">
                    Issue Date &Time
                  </p>
                </div>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 8px;
                    flex: 1 0 0;
                  "
                >
                  <p style="font-weight: 500">
                    {{ ticketDetails.pnrCode }}
                  </p>

                  <p style="font-weight: 500">
                    {{ ticketDetails.fromCity }}
                  </p>

                  <p style="font-weight: 500">{{ ticketDetails.toCity }}</p>

                  <p style="font-weight: 500">{{ departureDateTime }}</p>

                  <p style="font-weight: 500">
                    {{ ticketDetails.boardingPlace }}
                  </p>

                  <p
                    v-if="ticketDetails.droppingPoint"
                    style="font-weight: 500"
                  >
                    {{ ticketDetails.droppingPoint }}
                  </p>

                  <p style="font-weight: 500">
                    {{ reportTimeWithAddTime }}
                  </p>

                  <p style="font-weight: 500">Jatri Online</p>

                  <p style="font-weight: 500">{{ issuedOn }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            max-width: 227px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex: 1 0 0;
          "
        >
          <div
            style="
              display: flex;
              height: 28px;
              padding-left: 12px;
              padding-bottom: 12px;
              padding-top: 2px;
              padding-right: 8px;
              border-radius: 8px 8px 0px 0px;
              background: #fde5e2;
              align-items: center;
              gap: 2px;
              align-self: stretch;
            "
          >
            <p style="font-size: 12px; font-weight: 600; line-height: 16px">
              Payment details:
            </p>
          </div>
          <div
            style="
              display: flex;
              padding: 6px 8px 12px 12px;
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;
              font-size: 12px;
              line-height: 16px;
              align-self: stretch;
              border-radius: 0px 0px 8px 8px;
              border-right: 1px solid #fde5e2;
              border-bottom: 1px solid #fde5e2;
              border-left: 1px solid #fde5e2;
              min-height: 248px;
            "
          >
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-bottom: 7px;
                align-items: flex-start;
                align-self: stretch;
              "
            >
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 8px;
                "
              >
                <div v-for="(tickets, i) in seatFareArray" :key="i">
                  <p
                    style="
                      color: #494949;
                      font-weight: 400;
                      grid-column: span 2 / span 2;
                      max-width: 142px;
                    "
                  >
                    Ticket Fare Seat (<span
                      v-for="(sit, index) in tickets.seat"
                      :key="sit"
                      >{{ sit
                      }}<span v-if="index != tickets.seat.length - 1"
                        >,</span
                      ></span
                    >)
                  </p>
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                  gap: 8px;
                "
              >
                <div v-for="(tickets, i) in seatFareArray" :key="i">
                  <p style="font-weight: 500; text-align: right">
                    {{ tickets.fare }} ৳
                  </p>
                </div>
              </div>
            </div>
            <hr style="width: 207px; height: 1px; border: 1px dashed #b6b6b6" />
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-bottom: 7px;
                align-items: flex-start;
                align-self: stretch;
              "
            >
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 8px;
                "
              >
                <p style="color: #494949; font-weight: 400">Sub total</p>
                <p
                  style="color: #494949; font-weight: 400"
                  v-if="ticketDetails.discount"
                >
                  Discount
                </p>
                <p
                  style="color: #494949; font-weight: 400"
                  v-if="ticketDetails.promo"
                >
                  Promo
                </p>
                <p style="color: #494949; font-weight: 400">Service Charge</p>
                <p style="color: #494949; font-weight: 400">Gateway Charge</p>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                  gap: 8px;
                "
              >
                <p style="font-weight: 500; text-align: right">
                  {{ ticketDetails.payable }} ৳
                </p>

                <p
                  v-if="ticketDetails.discount"
                  style="font-weight: 500; text-align: right"
                >
                  - {{ ticketDetails.discount }} ৳
                </p>

                <p
                  v-if="ticketDetails.promo"
                  style="font-weight: 500; text-align: right"
                >
                  - {{ ticketDetails.promo }} ৳
                </p>

                <p style="font-weight: 500; text-align: right">
                  {{ ticketDetails.serviceCharge }} ৳
                </p>

                <p style="font-weight: 500; text-align: right">
                  {{ ticketDetails.gatewayCharge }} ৳
                </p>
              </div>
            </div>
            <hr style="width: 207px; height: 1px; border: 1px dashed #b6b6b6" />
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                align-self: stretch;
              "
            >
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 8px;
                "
              >
                <p style="color: #494949; font-weight: 400">Total</p>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                  gap: 8px;
                "
              >
                <p style="font-weight: 500; text-align: right">
                  {{ ticketDetails.totalAmount }} ৳
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ========= T&C Condition part =========  -->
      <div
        style="
          display: flex;
          max-width: 563px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
        "
      >
        <div
          style="
            display: flex;
            padding: 0px 8px 4px 8px;
            align-items: flex-start;
            gap: 16px;
            align-self: stretch;
            border-radius: 8px;
            background-color: #f7f7f7;
          "
        >
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 4px;
              flex: 1 0 0;
              align-self: stretch;
            "
          >
            <p
              style="
                font-size: 8px;
                line-height: 16px;
                color: #151414;
                font-weight: 600;
              "
            >
              Terms and condition
            </p>
            <ul
              style="
                list-style-type: disc;
                color: #151414;
                font-size: 8px;
                line-height: 12px;
                font-weight: 400;
                padding-left: 20px;
              "
            >
              <li>
                The ticket will be treated as canceled if the passenger fails to
                report at the reporting station 15 minutes before the bus
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
                font-size: 8px;
                line-height: 12px;
                font-weight: 400;
                padding-bottom: 2px;
              "
            >
              *Trip may delay due to traffics during occasions
            </p>
          </div>

          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 4px;
              flex: 1 0 0;
              align-self: stretch;
            "
          >
            <p
              style="
                font-size: 8px;
                color: #151414;
                font-weight: 600;
                line-height: 16px;
              "
            >
              Cancellation policy
            </p>
            <ul
              style="
                list-style-type: disc;
                color: #151414;
                font-size: 8px;
                line-height: 12px;
                font-weight: 400;
                padding-left: 20px;
              "
            >
              <li>
                Cancellation & Refund of tickets will be made as per policy
                mentioned in the ticket.jatri.co and subject to the bus
                operator's approval.
              </li>
              <li>
                You must apply for
                <b>cancellation & refund 24 hours before trip</b>
                departure time (excluding 12 AM to 7 AM).
              </li>
              <li>
                In case of refund, it will take
                <b>7 working days for MFS</b>(bKash, Nagad) and
                <b>12/15 working days for SSL Commerz/ Bank</b> payment.
              </li>
              <li>
                No ticket will be refunded unless it has been canceled as per
                the cancellation/refund policy.
              </li>
              <li>
                If the Bus operator cancels the trip after this period, you must
                <b>apply for a refund within 24 hours</b> of the trip departure
                time.
              </li>
            </ul>
            <p
              style="
                color: #f04935;
                font-size: 8px;
                line-height: 12px;
                font-weight: 400;
                padding-bottom: 2px;
              "
            >
              *Applicable if only the ticket is cancellable
            </p>
          </div>
        </div>
        <div
          v-if="ticketDetails.tripType === 'eid'"
          style="
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 16px;
            align-self: stretch;
          "
        >
          <div style="display: flex; align-items: flex-start; column-gap: 6px">
            <img
              :src="require('@/assets/images/ticket/mail.svg')"
              alt=""
              style="width: 19px; height: 17px; display: inline-block"
            />
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: 16px;
                margin-top: -10px;
              "
            >
              <p style="color: #4d4d4f; font-size: 10px; font-weight: 500">
                Get in touch
              </p>
              <p style="color: #151414; font-size: 12px; font-weight: 600">
                {{ getSearchedTicketList.supportEmail || email }}
              </p>
            </div>
          </div>

          <div style="display: flex; align-items: flex-start; column-gap: 6px">
            <img
              :src="require('@/assets/images/ticket/phone.svg')"
              alt=""
              style="width: 17px; height: 17px; display: inline-block"
            />
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: 16px;
                margin-top: -10px;
              "
            >
              <p style="color: #4d4d4f; font-size: 10px; font-weight: 500">
                Call us
              </p>
              <p style="color: #151414; font-size: 12px; font-weight: 600">
                {{ getSearchedTicketList.supportPhone || phone }}
              </p>
            </div>
          </div>

          <div style="display: flex; align-items: flex-start; column-gap: 6px">
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

            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: 16px;
                margin-top: -10px;
              "
            >
              <p style="color: #4d4d4f; font-size: 10px; font-weight: 500">
                Download App
              </p>
              <p style="color: #151414; font-size: 12px; font-weight: 600">
                Get latest updates
              </p>
            </div>
            <img
              :src="require('@/assets/images/ticket/qr.png')"
              alt=""
              style="height: 32px; width: 32px"
            />
          </div>
        </div>
        <div
          v-else
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;
            align-self: stretch;
          "
        >
          <div style="display: flex; align-items: flex-start; column-gap: 6px">
            <img
              :src="require('@/assets/images/ticket/mail.svg')"
              alt=""
              style="width: 19px; height: 17px; display: inline-block"
            />
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: 16px;
                margin-top: -10px;
              "
            >
              <p style="color: #4d4d4f; font-size: 10px; font-weight: 500">
                Get in touch
              </p>
              <p style="color: #151414; font-size: 12px; font-weight: 600">
                {{ getSearchedTicketList.supportEmail || email }}
              </p>
            </div>
          </div>

          <div style="display: flex; align-items: flex-start; column-gap: 6px">
            <img
              :src="require('@/assets/images/ticket/phone.svg')"
              alt=""
              style="width: 17px; height: 17px; display: inline-block"
            />
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: 16px;
                margin-top: -10px;
              "
            >
              <p style="color: #4d4d4f; font-size: 10px; font-weight: 500">
                Call us
              </p>
              <p style="color: #151414; font-size: 12px; font-weight: 600">
                {{ getSearchedTicketList.supportPhone || phone }}
              </p>
            </div>
          </div>

          <div style="display: flex; align-items: flex-start; column-gap: 6px">
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

            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: 16px;
                margin-top: -10px;
              "
            >
              <p style="color: #4d4d4f; font-size: 10px; font-weight: 500">
                Download App
              </p>
              <p style="color: #151414; font-size: 12px; font-weight: 600">
                Get latest updates
              </p>
            </div>
            <img
              :src="require('@/assets/images/ticket/qr.png')"
              alt=""
              style="height: 32px; width: 32px"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- ========= social part =========  -->
    <div
      v-if="ticketDetails.tripType === 'eid'"
      style="
        max-width: 595px;
        text-align: left;
        font-size: 11px;
        line-height: 16px;
        font-weight: 400;
        color: #151414;
        margin-top: 25px;
        margin-bottom: 22px;
        margin-left: 16px;
      "
    >
      <p style="color: #f04935">
        This is a Eid ticket it is non cancellable & non refundable
      </p>
      <p>
        N.B: Please carry print copy or soft copy to collect your counter ticket
        copy.
      </p>
    </div>
    <p
      v-else
      style="
        max-width: 595px;
        text-align: center;
        font-size: 11px;
        line-height: 16px;
        font-weight: 400;
        color: #151414;
        margin-top: 25px;
        margin-bottom: 38px;
      "
    >
      N.B: Please carry print copy or soft copy to collect your counter ticket
      copy.
    </p>
    <img
      v-if="ticketDetails.tripType === 'eid'"
      :src="require('@/assets/images/ticket/eidFooter.svg')"
      alt="eidStamp"
      style="top: 636px; left: 436px; position: absolute"
    />
    <!-- ========= Footer part ========= -->
    <div
      style="background-color: #f04935; padding: 12px 16px; max-width: 595px"
    >
      <div
        style="
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          line-height: 16px;
          font-weight: 400;
          color: #fff;
        "
      >
        <div
          style="
            display: flex;
            column-gap: 10px;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin-top: -12px;">Powered by:</p>
          <img
            :src="require('@/assets/images/ticket/logo-white.png')"
            alt=""
            style="height: 16px"
          />
        </div>
        <p style="margin-top: -7px;">www.jatri.co</p>
      </div>
    </div>
  </div>
</template>

<script>
import { dateTimeFormat } from "@/helpers/dateTimeFormat";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      imageUrl: "",
    };
  },
  props: [
    "ticketDetails",
    "email",
    "phone",
    "downloadTicketStatus",
    "ticketFareString",
    "serviceType",
    "seatFareArray",
  ],
  mounted() {
    this.imageUrl = process.env.OFFER_IMAGE_BASE_URL;
  },
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
        dateTimeFormat(this.ticketDetails.ticketDateTime, 0, "lll")
      );
    },
  },
};
</script>

<style></style>
