export const UserHttpResponse = {
    REGISTRATION_FAILED_UNEXPECTED_ERROR: "Ops, something went wrong with your authentication, try again.",
    REGISTRATION_FAILED_VIOLATED_FIELD_EMAIL: "This user already exists in database.",
    REGISTRATION_FAILED_PREFIX_PHONE_NUMBER_MUST_BE_FILLED_IN_OR_NULL: "Prefix and phone number must be both filled in or empty.",
    REGISTRATION_FAILED_SOME_PARAMETERS_NULL: "Ops, something went wrong. Turned out some of your fields were empty.",

    LOGIN_FAILED_PARAMETERS_DO_NOT_MATCH_DATABASE: "Login or password is incorrect. Please, try again.",

    LOGIN_FAILED_GOOGLE_ACCOUNT_ALREADY_EXISTS: "You cannot link already existing google account.",
    LOGIN_FAILED_GOOGLE_TOKEN_INVALID: "Login failed. Google token is invalid.",
    LOGIN_FAILED_EMAIL_NOT_VERIFIED: "Your google account is not verified.",

    YOUTUBE_API_REQUEST_FAILED_ACCESS_TOKEN_FAILURE: "YouTube communication failed. Your authentication credentials are invalid.",
    YOUTUBE_API_REQUEST_FAILED_INVALID_REQUEST: "YouTube communication failed. Invalid request.",

    AUTHENTICATION_FAILED: "Ops, something went wrong with your authentication, try again.",
    AUTHORIZATION_FAILED_USER_NOT_FOUND: "Authorization failed. Your account doesn't exist.",
    UNKNOWN_EVENT: "Ops, something went wrong with our application, please try again."
}
