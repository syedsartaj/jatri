// ------------ paribahan apis Start ---------------- //
export const PARIBAHAN_BASE_URL = process.env.PARIBAHAN_BASE_URL;

export const GET_PARIBAHAN_TOKEN_URL = `${PARIBAHAN_BASE_URL}/oauth/access_token`;
export const GET_PARIBAHAN_CITY_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-cities`;
export const GET_OPERATOR_LIST_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-operators`;
export const GET_OPERATOR_BY_ID_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-operator-by-id`;
export const GET_POPULAR_ROUTE_LIST_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-popular-routes`;
export const GET_POPULAR_ROUTE_BY_ID_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-popular-route-by-id`;
export const GET_PARIBAHAN_SCHEDULE_DATA_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-schedule-trips`;
export const GET_PARIBAHAN_SEAT_VIEW_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-seat-view`;
export const POST_CONFIRM_TICKET = `${PARIBAHAN_BASE_URL}/v1/api/intercity/confirm-ticket`;
export const GET_TICKET_BY_TRANSACTION = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-ticket-info-by-txn-id`;
export const GET_BOOKING_INFO_BY_TRANSACTION = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-booking-info-by-txn-id`;
export const SEARCH_TICKET = `${PARIBAHAN_BASE_URL}/v1/api/intercity/search-ticket`;
export const GS_CANCEL_TICKET = `${PARIBAHAN_BASE_URL}/v1/api/intercity/cancel-ticket`;
export const POST_SEND_OTP_BY_TICKET_ID = `${PARIBAHAN_BASE_URL}/v1/api/intercity/send-otp`;
export const GS_OFFER_AND_PROMO_IMAGES = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-offer-and-promo-images`;
export const GET_BLOG_LIST = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-blogs`;
export const GET_HEAD_LINE = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-head-line`;
export const READ_OFFER_PROMO_IMAGE_URL = `${PARIBAHAN_BASE_URL}/v1/api/file/get`;
export const POST_PARIBAHAN_PAYMENT_PENDING_BLOCK_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/payment-pending`;

export const POST_PROMO_CODE_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/check-promo-code`;
export const POST_APPLY_PROMO_CODE_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/apply-promo-code`;
export const POST_GET_SURPRISE_DEAL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-surprise-deal`;
export const POST_FULL_BUS_RESERVATION = `${PARIBAHAN_BASE_URL}/v1/api/intercity/bus-reservation`;
export const POST_SEAT_LOCK = `${PARIBAHAN_BASE_URL}/v1/api/intercity/seat-lock`;
// ------------ paribahan apis End ---------------- //

export const SERVICE_TYPE = {
  BUS: {
    GET_OPERATOR_LIST_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/operators`,
    GET_POPULAR_ROUTE_LIST_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/popular-routes`,
    GET_CITY_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-cities`,
    GET_OPERATOR_BY_ID_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-operator-by-id`,
    GET_POPULAR_ROUTE_BY_ID_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-popular-route-by-id`,
    POST_SCHEDULE_TRIPS_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-schedule-trips`,
    GET_SEAT_VIEW_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-seat-view`,
    POST_PAYMENT_PENDING_BLOCK_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/payment-pending`,
    POST_PROMO_CODE_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/check-promo-code`,
    POST_SEAT_LOCK: `${PARIBAHAN_BASE_URL}/v1/api/intercity/seat-lock`,
    GET_TICKET_BY_TRANSACTION: `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-ticket-info-by-txn-id`,
    GET_BOOKING_INFO_BY_TRANSACTION: `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-booking-info-by-txn-id`,
    POST_CONFIRM_TICKET: `${PARIBAHAN_BASE_URL}/v1/api/intercity/confirm-ticket`,
    POST_APPLY_PROMO_CODE_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/apply-promo-code`,
    POST_REMOVE_PROMO_CODE_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/remove-promo-code`,
    POST_UPDATE_GATEWAY_URL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/update-gateway`,
    POST_GET_SURPRISE_DEAL: `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-surprise-deal`,
    POST_SEARCH_TICKET: `${PARIBAHAN_BASE_URL}/v1/api/intercity/search-ticket`,
    POST_SEND_OTP_BY_TICKET_ID: `${PARIBAHAN_BASE_URL}/v1/api/intercity/send-otp`,
    POST_CANCEL_TICKET: `${PARIBAHAN_BASE_URL}/v1/api/intercity/cancel-ticket`,
  },
  LAUNCH: {
    GET_OPERATOR_LIST_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/operators`,
    GET_POPULAR_ROUTE_LIST_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/popular-routes`,
    GET_CITY_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/get-cities`,
    GET_OPERATOR_BY_ID_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/get-operator-by-id`,
    GET_POPULAR_ROUTE_BY_ID_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/get-popular-route-by-id`,
    POST_SCHEDULE_TRIPS_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/get-schedule-trips`,
    GET_SEAT_VIEW_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/get-seat-view`,
    POST_PAYMENT_PENDING_BLOCK_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/payment-pending`,
    POST_PROMO_CODE_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/check-promo-code`,
    POST_UPDATE_GATEWAY_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/update-gateway`,
    POST_SEAT_LOCK: `${PARIBAHAN_BASE_URL}/v1/api/water/seat-lock`,
    GET_TICKET_BY_TRANSACTION: `${PARIBAHAN_BASE_URL}/v1/api/water/get-ticket-info-by-txn-id`,
    GET_BOOKING_INFO_BY_TRANSACTION: `${PARIBAHAN_BASE_URL}/v1/api/water/get-booking-info-by-txn-id`,
    POST_CONFIRM_TICKET: `${PARIBAHAN_BASE_URL}/v1/api/water/confirm-ticket`,
    POST_APPLY_PROMO_CODE_URL: `${PARIBAHAN_BASE_URL}/v1/api/water/apply-promo-code`,
    POST_GET_SURPRISE_DEAL: `${PARIBAHAN_BASE_URL}/v1/api/water/get-surprise-deal`,
    POST_PAYMENT_PENDING: `${PARIBAHAN_BASE_URL}/v1/api/water/payment-pending`,
    POST_SEARCH_TICKET: `${PARIBAHAN_BASE_URL}/v1/api/water/search-ticket`,
    POST_SEND_OTP_BY_TICKET_ID: `${PARIBAHAN_BASE_URL}/v1/api/water/send-otp`,
    POST_CANCEL_TICKET: `${PARIBAHAN_BASE_URL}/v1/api/water/cancel-ticket`,
  },
  COMMON: {
    POST_SEND_OTP_BY_PHONE: `${PARIBAHAN_BASE_URL}/v1/api/intercity/send-otp-by-phone`,
  }
};
