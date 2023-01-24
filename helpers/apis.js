// ------------ paribahan apis Start ---------------- //
export const PARIBAHAN_BASE_URL = process.env.PARIBAHAN_BASE_URL;

export const GET_PARIBAHAN_TOKEN_URL = `${PARIBAHAN_BASE_URL}/oauth/access_token`;
export const GET_PARIBAHAN_CITY_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-cities`;
export const GET_PARIBAHAN_SCHEDULE_DATA_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-schedule-trips`;
export const GET_PARIBAHAN_SEAT_VIEW_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-seat-view`;
export const POST_CONFIRM_TICKET = `${PARIBAHAN_BASE_URL}/v1/api/intercity/confirm-ticket`;
export const GET_TICKET_BY_TRANSACTION = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-ticket-info-by-txn-id`;
export const GET_BOOKING_INFO_BY_TRANSACTION = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-booking-info-by-txn-id`;
export const SEARCH_TICKET = `${PARIBAHAN_BASE_URL}/v1/api/intercity/search-ticket`;
export const GS_CANCEL_TICKET = `${PARIBAHAN_BASE_URL}/v1/api/intercity/cancel-ticket`;
export const POST_SEND_OTP_BY_TICKET_ID = `${PARIBAHAN_BASE_URL}/v1/api/intercity/send-otp`;
export const GS_OFFER_AND_PROMO_IMAGES = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-offer-and-promo-images`;
export const READ_OFFER_PROMO_IMAGE_URL = `${PARIBAHAN_BASE_URL}/v1/api/file/get`;
export const POST_PARIBAHAN_PAYMENT_PENDING_BLOCK_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/payment-pending`;

export const POST_PROMO_CODE_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/check-promo-code`;
export const POST_APPLY_PROMO_CODE_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/apply-promo-code`;
export const POST_GET_SURPRISE_DEAL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-surprise-deal`;
export const POST_FULL_BUS_RESERVATION = `${PARIBAHAN_BASE_URL}/v1/api/intercity/bus-reservation`;
// ------------ paribahan apis End ---------------- //