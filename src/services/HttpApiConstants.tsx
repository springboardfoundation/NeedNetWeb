export const LOGIN_ENDPOINT = 'api/v1/auth/login';
export const GET_OTP_ENDPOINT = (mobileNumber: string) =>
    `api/v1/auth/getOtp/${mobileNumber}`;

export const VALIDATE_OTP_ENDPOINT = (mobileNumber: string, otp : string) =>
    `api/v1/auth/validate/${mobileNumber}/${otp}`;

export const REGISTER_USER_ENDPOINT = (mobileNumber: string) =>
    `api/v1/user/register/${mobileNumber}`;