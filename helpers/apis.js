// ------------ paribahan apis Start ---------------- //
export const PARIBAHAN_BASE_URL = process.env.PARIBAHAN_BASE_URL;
export const PARIBAHAN_SSL_BASE_URL = process.env.PARIBAHAN_SSL_BASE_URL;
export const PARIBAHAN_SANDBOX_URL =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_PARIBAHAN_SANDBOX_URL
    : process.env.PARIBAHAN_SANDBOX_URL;


export const GET_PARIBAHAN_TOKEN_URL = `${PARIBAHAN_BASE_URL}/oauth/access_token`;
export const GET_PARIBAHAN_CITY_URL = `${PARIBAHAN_BASE_URL}${PARIBAHAN_SANDBOX_URL}/get-cities`;
export const GET_PARIBAHAN_SCHEDULE_DATA_URL = `${PARIBAHAN_BASE_URL}${PARIBAHAN_SANDBOX_URL}/get-schedule-data`;
export const GET_PARIBAHAN_SEAT_VIEW_URL = `${PARIBAHAN_BASE_URL}${PARIBAHAN_SANDBOX_URL}/get-seatview`;
export const GET_PARIBAHAN_SET_STATUS_URL = `${PARIBAHAN_BASE_URL}${PARIBAHAN_SANDBOX_URL}/get-seat-status`;
export const POST_PARIBAHAN_PAYMENT_PENDING_BLOCK_URL = `${PARIBAHAN_BASE_URL}${PARIBAHAN_SANDBOX_URL}/payment-pending-block`;
export const POST_PARIBAHAN_CONFIRM_PAYMENT_URL = `${PARIBAHAN_BASE_URL}${PARIBAHAN_SANDBOX_URL}/confirm-payment`;
export const POST_PARIBAHAN_CANCEL_SUCCESS_TICKET_URL = `${PARIBAHAN_BASE_URL}${PARIBAHAN_SANDBOX_URL}/cancel-api-ticket`;
export const POST_PARIBAHAN_CANCEL_BOOKED_TICKET_URL = `${PARIBAHAN_BASE_URL}${PARIBAHAN_SANDBOX_URL}/cancel-payment-pending-ticket`;
export const GET_PARIBAHAN_TICKET_STATUS_URL = `${PARIBAHAN_BASE_URL}${PARIBAHAN_SANDBOX_URL}/get-ticket-status`;
export const GET_PARIBAHAN_USER_SETTING_URL = `${PARIBAHAN_BASE_URL}${PARIBAHAN_SANDBOX_URL}/get-user-settings`;

// paribahan ssl apis
export const SSL_PAYMENT_INIT_URL = `${PARIBAHAN_SSL_BASE_URL}/payment/init`;
export const SSL_PAYMENT_SUCCESS_URL = `${PARIBAHAN_SSL_BASE_URL}/payment/success`;
export const SSL_PAYMENT_FAILED_URL = `${PARIBAHAN_SSL_BASE_URL}/payment/failed`;
export const SSL_PAYMENT_CENCEL_URL = `${PARIBAHAN_SSL_BASE_URL}/payment/cancel`;

// ticket cancel
export const SSL_CANCEL_TICKET_REQUEST = `${PARIBAHAN_SSL_BASE_URL}/ticket/cancel-ticket-request`;
export const SSL_SUCCESS_TICKET_BY_MAIL = `${PARIBAHAN_SSL_BASE_URL}/ticket/success-ticket-by-mail`;
export const SSL_SMS_FOR_TICKET_SUCCESS = `${PARIBAHAN_SSL_BASE_URL}/sms/for-ticket-success`;

// ------------ paribahan apis End ---------------- //

// ------------ Agent apis Start ---------------- //
const AGENT_BASE_URL = "https://dev.api.jslglobal.co";
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
