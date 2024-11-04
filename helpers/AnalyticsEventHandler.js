import { gtmAnalyticsKey } from "@/constant/AnalyticsKeywordList";
import { dateFormat } from "@/helpers/dateTimeFormat";

const pushGTMEvent = (ctx, payload) => {
    try{
        ctx.$gtm.push(payload);
    }catch(error){
        console.log("gtm error: ", payload);
    }
}

export function fireGTMEventForSearch(
  ctx,
  origin,
  destination,
  travelDate,
  busType
) {
  const eventData = {
    event: gtmAnalyticsKey.SEARCH_INITIATED,
    search: {
      origin: origin,
      destination: destination,
      travel_date: dateFormat(travelDate, 6, "YYYY-MM-DD"),
      bus_type: busType,
    },
  };
  console.log("search=======", eventData)
  pushGTMEvent(ctx, eventData);
}

export function fireGTMEventForViewSeat(
  ctx,
  busName,
  busType,
  seatLeft,
  route,
  departureTime,
  boardingPoint,
  droppingPoint
) {
  const eventData = {
    event: gtmAnalyticsKey.BUS_VIEWED,
    bus_details: {
      bus_name: busName,
      bus_type: busType,
      seats_left: seatLeft,
      route: route,
      departure_time: dateFormat(departureTime, 6, "YYYY-MM-DDTHH:MM:SS"),
      boarding_point: boardingPoint,
      dropping_point: droppingPoint,
    },
  };
  console.log("seat view=======", eventData)
  pushGTMEvent(ctx, eventData);
}

export function fireGTMEventForSeatSelection(ctx, seatLables, totalSeat){
    const eventData = {
        event: gtmAnalyticsKey.SEAT_SELECTED,
        seat_selection: {
            selected_seat: seatLables,
            total_seats_selected: totalSeat
        }
    }
    console.log("seat=======", eventData)
  pushGTMEvent(ctx, eventData);
}

export function fireGTMEventForPassengerDetails(ctx, name, phone, email){
    const eventData = {
        event: gtmAnalyticsKey.PASSENGER_DETAILS_ENTERED,
        passenger_info: {
            passenger_name: name,
            phone: phone,
            email: email ?? "" 
        }
    }
    console.log("passenger=======", eventData)
  pushGTMEvent(ctx, eventData);
}

export function fireGTMEventForNextStep(ctx){
    const eventData = {
        event: gtmAnalyticsKey.NEXT_STEP,
        action: "proceed_to_payment"
    }
  pushGTMEvent(ctx, eventData);
}

export function fireGTMEventForDetailsView(ctx, fromCity, toCity, departureTime, boardingPoint, droppingPoint, seats, passengerCount){
    const eventData = {
        event: gtmAnalyticsKey.BOOKING_DETAILS_VIEWED,
        booking_summary: {
            origin: fromCity,
            destination: toCity,
            departure_time: dateFormat(departureTime, 6, "YYYY-MM-DDTHH:MM:SS"),
            boarding_point: boardingPoint,
            dropping_point: droppingPoint,
            seats_selected: seats,
            passenger_count: passengerCount,
        }
    }
    console.log("details=======", eventData)
  pushGTMEvent(ctx, eventData);
}

export function fireGTMEventForPaymentMethodSelection(ctx, paymentMethod, ispromoApplied, promoCode, totalAmount, discount, finalAmount){
    const eventData = {
        event: gtmAnalyticsKey.PAYMENT_METHOD_SELECTED,
        payment: {
            payment_method: paymentMethod,
            coupon_applied: ispromoApplied,
            coupon_code: promoCode,
            total_amount: totalAmount,
            discount: discount,
            final_amount: finalAmount,
        }
    }
    console.log("payment method=======", eventData)
  pushGTMEvent(ctx, eventData);
}

export function fireGTMEventForPaymentInit(ctx){
    const eventData = {
        event: gtmAnalyticsKey.PAYMENT_INITIATED,
        payment_action: "proceed_to_pay"
    }
    console.log("payment init=======", eventData)
  pushGTMEvent(ctx, eventData);
}

export function fireGTMEventForBookingConfirmed(ctx, fromCity, toCity, departureTime, boardingPoint, droppingPoint, selectedSeat, passengerCount, totalAmount, discount, tax, finalAmount){
    const eventData = {
        event: gtmAnalyticsKey.BOOKING_CONFIRMED,
        confirmation_details: {
            origin: fromCity,
            destination: toCity,
            departure_time: dateFormat(departureTime, 6, "YYYY-MM-DDTHH:MM:SS"),
            boarding_point: boardingPoint,
            dropping_point: droppingPoint,
            seats_selected: selectedSeat,
            passenger_count: passengerCount,
            total_amount: totalAmount,
            discount: discount,
            tax: tax,
            final_amount: finalAmount,
            
        }
    }
    console.log("book=======", eventData)
  pushGTMEvent(ctx, eventData);
}