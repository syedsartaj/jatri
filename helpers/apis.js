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
export const GS_OFFER_AND_PROMO_IMAGES = `${PARIBAHAN_BASE_URL}/v1/api/intercity/get-offer-and-promo-images`;
export const READ_OFFER_PROMO_IMAGE_URL = `${PARIBAHAN_BASE_URL}/v1/api/file/get`;
export const POST_PARIBAHAN_PAYMENT_PENDING_BLOCK_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/payment-pending`;

export const POST_PROMO_CODE_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/check-promo-code`;
export const POST_APPLY_PROMO_CODE_URL = `${PARIBAHAN_BASE_URL}/v1/api/intercity/apply-promo-code`;
export const POST_FULL_BUS_RESERVATION = `${PARIBAHAN_BASE_URL}/v1/api/intercity/bus-reservation`;
// ------------ paribahan apis End ---------------- //

// ------------ Agent apis Start ---------------- //
const AGENT_BASE_URL = process.env.AGENT_BASE_URL;
export const AGENT_JATRI_TOKEN = process.env.AGENT_JATRI_TOKEN;
export const JATRI_PAYMENT_SECRET_KEY = process.env.JATRI_PAYMENT_SECRET_KEY;

export const SEND_OTP = `${AGENT_BASE_URL}/user-api/v3/send-otp`;
export const USER_LOGIN = `${AGENT_BASE_URL}/user-api/v3/login`;
export const USER_REGISTRATION = `${AGENT_BASE_URL}/user-api/v3/registration`;
export const USER_REFRESH_TOKEN = `${AGENT_BASE_URL}/user-api/v3/refresh-token`;
export const USER_PROFILE = `${AGENT_BASE_URL}/user-api/v3/profile`;
export const FROM_TO_DATA_SETS = `${AGENT_BASE_URL}/user-api/v1/digital-ticketing/get-from-to-data-sets`;
export const AVAILABLE_BUS_SERVICES = `${AGENT_BASE_URL}/user-api/v1/digital-ticketing/get-available-services`;
export const SEND_BOOKING_REQUEST = `${AGENT_BASE_URL}/user-api/v1/digital-ticketing/request-booking`;
export const BOOKING_STATE = `${AGENT_BASE_URL}/user-api/v1/digital-ticketing/booking-stats`;
export const BOOKING_LIST_WITH_BOOKING_STATE = `${AGENT_BASE_URL}/user-api/v1/digital-ticketing/booking-history`;
export const BOOKING_DETAILS = `${AGENT_BASE_URL}/user-api/v1/digital-ticketing/booking-details`;
export const CANCEL_TICKET = `${AGENT_BASE_URL}/user-api/v1/digital-ticketing/cancel-booking`;

// ------------ Agent apis End ---------------- //
