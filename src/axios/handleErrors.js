import {UserHttpResponse} from "../constants/UserHttpResponse";

export function handleErrors(error, httpRequestExceptionAnswer, unexpectedEventAnswer) {
    if (error.response) {
        if (error.response.hasOwnProperty("data")) {
            const responseCode = error.response.data.hasOwnProperty("responseCode") ? error.response.data.responseCode : undefined;
            const userResponse = responseCode !== undefined ? handleUserResponse(responseCode) : undefined;
            return userResponse !== undefined ? userResponse : httpRequestExceptionAnswer;
        }
    } else if (error.request) {
        return httpRequestExceptionAnswer;
    } else {
        return unexpectedEventAnswer;
    }
}

export function handleUserResponse(responseCode) {
    return Object.keys(UserHttpResponse)
        .filter(key => responseCode.includes(key))
        .map(value => UserHttpResponse[value]);
}
